import * as THREE from 'three';
import type { AudioEngine } from '../game/audio';
import type { PlayerIdentity } from '../game/types';
import type { LobbySnapshot, NetMessage, Realtime } from '../net/realtime';
import { BALL_COLORS, LOBBY_EMOJIS } from '../game/constants';
import { Golfer, emojiBubbleSprite } from './avatar';
import { PLAZA_GATE, buildPlaza, type PlazaHandle } from './plaza';
import { mergeStaticMeshes } from '../game/props';

/**
 * 3D 대기실(클럽하우스 광장).
 *
 * - 광장을 자유롭게 걸어 다니며 다른 골퍼들을 만난다 (WASD/방향키, 바닥 탭, 터치 조이스틱)
 * - 채팅 대신 이모지로 감정을 표현한다 (머리 위 말풍선 + 효과음 + 탭 간 동기화)
 * - 광장 끝의 빛나는 플레이룸 게이트로 들어가면 미니골프 라운드가 시작된다
 * - 혼자 접속해도 사람이 모여 있는 느낌이 나도록 로비 게스트가 광장을 거닌다
 */

export type LobbyMode = 'preview' | 'lobby' | 'idle';

export interface LobbyPeer {
  id: string;
  name: string;
  color: string;
}

export interface LobbyEvents {
  /** 게이트에 도착해 플레이룸으로 들어가려 할 때 */
  onEnterPlayroom?: () => void;
  /** 게이트 근처에 있는지 (입장 버튼 표시용) */
  onGateChange?: (near: boolean) => void;
  onPlayers?: (lobbyPeers: LobbyPeer[], playroomPeers: LobbyPeer[]) => void;
  onToast?: (text: string) => void;
}

export interface LobbyOptions {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  audio: AudioEngine;
  realtime: Realtime;
  canvas?: HTMLCanvasElement;
  events?: LobbyEvents;
}

const BOUND = 13.6;
const GATE = PLAZA_GATE;
const GATE_TRIGGER = 1.35;
const WALK_SPEED = 3.7;
const CAM_DISTANCE = 9.4;
const CAM_PITCH = 0.48;
const NET_INTERVAL = 0.12;

interface Obstacle {
  x: number;
  z: number;
  r: number;
}

interface Guest {
  golfer: Golfer;
  pos: THREE.Vector3;
  target: THREE.Vector3;
  heading: number;
  wait: number;
  emojiTimer: number;
  speed: number;
}

interface RemotePeer {
  golfer: Golfer;
  target: THREE.Vector3;
  heading: number;
  moving: boolean;
  name: string;
  color: string;
  id: string;
  ts: number;
}

interface Bubble {
  sprite: THREE.Sprite;
  life: number;
  maxLife: number;
  drift: number;
}

interface PendingReply {
  guest: Guest;
  delay: number;
  emoji: string;
}

const GUEST_PROFILE = [
  { name: '버디헌터', color: BALL_COLORS[1].hex, spawn: [-4.2, 2.4] },
  { name: '핑크공', color: BALL_COLORS[5].hex, spawn: [3.6, 1.2] },
  { name: '싱커', color: BALL_COLORS[2].hex, spawn: [5.4, 6.2] },
  { name: '캐디', color: BALL_COLORS[4].hex, spawn: [-2.6, -2.6] },
] as const;

const GUEST_EMOJIS = ['👋', '👏', '⛳', '😂', '🎉', '🔥'] as const;

const _tmp = new THREE.Vector3();

export class Lobby {
  private readonly scene: THREE.Scene;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly audio: AudioEngine;
  private readonly realtime: Realtime;
  private readonly events: LobbyEvents;
  private readonly canvas: HTMLCanvasElement | null;

  private readonly root = new THREE.Group();
  private readonly plaza = new THREE.Group();
  private gateGroup: THREE.Group = new THREE.Group();
  private readonly obstacles: Obstacle[] = [];
  private readonly disposables: Array<{ dispose: () => void }> = [];

  private plazaHandle: PlazaHandle | null = null;
  private mergedGeometries: THREE.BufferGeometry[] = [];

  private identity: PlayerIdentity | null = null;
  private localGolfer: Golfer | null = null;
  private readonly localPos = new THREE.Vector3(0, 0, 5.6);
  private localHeading = Math.PI;
  private localMoving = false;

  private readonly keys = new Set<string>();
  private readonly stick = new THREE.Vector2();
  private target: THREE.Vector3 | null = null;
  private pointer: { id: number; startX: number; startY: number; dragging: boolean } | null = null;
  private joystickEl: HTMLElement | null = null;
  private joystickKnob: HTMLElement | null = null;

  private readonly guests: Guest[] = [];
  private readonly remotes = new Map<string, RemotePeer>();
  private readonly playroom = new Map<string, LobbyPeer>();
  private readonly bubbles: Bubble[] = [];
  private readonly replies: PendingReply[] = [];

  private mode: LobbyMode = 'preview';
  private time = 0;
  private netTimer = 0;
  private previewAngle = 0.55;
  private enterCooldown = 0;
  private nearGate = false;
  private cameraSnap = true;
  private readonly camPos = new THREE.Vector3();
  private readonly camLook = new THREE.Vector3();

  constructor(options: LobbyOptions) {
    this.scene = options.scene;
    this.camera = options.camera;
    this.audio = options.audio;
    this.realtime = options.realtime;
    this.events = options.events ?? {};
    this.canvas = options.canvas ?? null;

    this.root.add(this.plaza);
    this.scene.add(this.root);

    this.buildPlaza();
    this.buildGuests();

    this.realtime.onMessage((message) => this.handleMessage(message));

    if (this.canvas) {
      this.canvas.addEventListener('pointerdown', this.handlePointerDown);
      this.canvas.addEventListener('pointermove', this.handlePointerMove);
      this.canvas.addEventListener('pointerup', this.handlePointerUp);
      this.canvas.addEventListener('pointercancel', this.handlePointerCancel);
      window.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('keyup', this.handleKeyUp);
      window.addEventListener('blur', this.releaseKeys);
      this.createJoystick();
    }

    this.placeCamera(true);
  }

  // ---------------------------------------------------------------- 외부 API

  get currentMode(): LobbyMode {
    return this.mode;
  }

  get isNearGate(): boolean {
    return this.nearGate;
  }

  /** 대기실 입장: 내 캐릭터를 광장에 세운다. */
  enter(identity: PlayerIdentity): void {
    this.identity = identity;
    this.localGolfer?.dispose();
    const golfer = new Golfer({
      color: identity.color,
      name: identity.name,
      glow: true,
      club: false,
    });
    this.localGolfer = golfer;
    this.root.add(golfer.group);

    this.localPos.set(0, 0, 5.6);
    this.localHeading = Math.PI;
    this.target = null;
    this.enterCooldown = 1.2;
    this.cameraSnap = true;
    golfer.group.position.copy(this.localPos);
    golfer.group.rotation.y = this.localHeading;

    this.mode = 'lobby';
    this.broadcastState();
    // 서버에 이미 있던 골퍼들의 상태를 바로 받아 온다 (다른 기기에서 먼저 접속한 경우)
    this.realtime.resync?.();
    this.emitPlayers();
  }

  setMode(mode: LobbyMode): void {
    if (mode === this.mode) return;

    if (mode === 'idle') {
      this.broadcastPlayroom(true);
      this.localGolfer?.setVisible(false);
      this.target = null;
      this.stick.set(0, 0);
      this.keys.clear();
      this.hideJoystick();
    } else if (mode === 'lobby') {
      this.localGolfer?.setVisible(true);
      this.localGolfer?.group.position.copy(this.localPos);
      this.cameraSnap = true;
    }

    this.mode = mode;
  }

  /** 플레이룸에서 대기실로 돌아왔을 때: 게이트 앞에 다시 세운다. */
  returnFromPlayroom(): void {
    this.setMode('lobby');
    this.localPos.set(0, 0, GATE.z + 2.6);
    this.localHeading = 0;
    this.target = null;
    this.enterCooldown = 1.5;
    this.cameraSnap = true;
    // 게이트 근처 상태를 다시 계산해 입장 버튼이 바로 뜨게 한다
    this.nearGate = false;
    this.events.onGateChange?.(false);
    if (this.localGolfer) {
      this.localGolfer.group.position.copy(this.localPos);
      this.localGolfer.group.rotation.y = this.localHeading;
      this.localGolfer.setVisible(true);
    }
    this.broadcastState();
    this.emitPlayers();
  }

  sendEmoji(emoji: string): void {
    if (!this.identity || this.mode !== 'lobby') return;
    this.spawnBubble(this.localPos, emoji);
    this.audio.emoji();
    this.realtime.send({ type: 'lobby-emoji', id: this.identity.id, emoji });
    this.maybeGuestReaction(emoji);
  }

  /** 입장 버튼에서 바로 플레이룸으로 (게이트 연출은 main 이 처리) */
  requestPlayroom(): void {
    if (this.mode !== 'lobby') return;
    this.events.onEnterPlayroom?.();
  }

  // ---------------------------------------------------------------- 광장 만들기

  private buildPlaza(): void {
    this.plazaHandle = buildPlaza(this.plaza);
    this.gateGroup = this.plazaHandle.gate;
    this.obstacles.push(...this.plazaHandle.obstacles);
    // 정적인 소품은 합쳐 드로우콜을 줄인다 (게이트·물은 애니메이션이라 그대로 둔다)
    this.mergedGeometries.push(...mergeStaticMeshes(this.plaza, new Set([this.gateGroup])));
  }

  private buildGuests(): void {
    GUEST_PROFILE.forEach((profile, index) => {
      const golfer = new Golfer({
        color: profile.color,
        name: profile.name,
        club: index % 2 === 0,
      });
      const spawn = new THREE.Vector3(profile.spawn[0], 0, profile.spawn[1]);
      golfer.group.position.copy(spawn);
      this.root.add(golfer.group);
      this.guests.push({
        golfer,
        pos: spawn,
        target: this.pickGuestTarget(spawn),
        heading: Math.random() * Math.PI * 2,
        wait: index * 0.7,
        emojiTimer: 3 + Math.random() * 6,
        speed: 1.35 + Math.random() * 0.55,
      });
    });
  }

  private pickGuestTarget(from?: THREE.Vector3): THREE.Vector3 {
    for (let attempt = 0; attempt < 16; attempt += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2 + Math.random() * 8.5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      if (Math.hypot(x - 7.8, z + 3.4) < 3.4) continue;
      if (Math.hypot(x + 9.7, z - 2.4) < 5.5) continue;
      if (Math.abs(x) < 2.4 && z < -5) continue;
      if (this.obstacles.some((obstacle) => Math.hypot(x - obstacle.x, z - obstacle.z) < obstacle.r + 0.85)) {
        continue;
      }
      if (from && Math.hypot(x - from.x, z - from.z) < 2.2) continue;
      return new THREE.Vector3(x, 0, z);
    }
    return new THREE.Vector3(0, 0, -2.5);
  }

  // ---------------------------------------------------------------- 입력

  private createJoystick(): void {
    if (typeof document === 'undefined') return;
    const base = document.createElement('div');
    base.className = 'joystick hidden';
    const knob = document.createElement('span');
    base.appendChild(knob);
    document.getElementById('app')?.appendChild(base);
    this.joystickEl = base;
    this.joystickKnob = knob;
  }

  private showJoystick(x: number, y: number): void {
    if (!this.joystickEl) return;
    this.joystickEl.style.left = `${x}px`;
    this.joystickEl.style.top = `${y}px`;
    this.joystickEl.classList.remove('hidden');
  }

  private hideJoystick(): void {
    this.joystickEl?.classList.add('hidden');
    if (this.joystickKnob) this.joystickKnob.style.transform = 'translate(-50%, -50%)';
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    if (this.mode !== 'lobby') return;
    const target = event.target as HTMLElement | null;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;
    const key = event.key.toLowerCase();
    if (key.startsWith('arrow')) event.preventDefault();
    this.keys.add(key);
  };

  private handleKeyUp = (event: KeyboardEvent): void => {
    this.keys.delete(event.key.toLowerCase());
  };

  private releaseKeys = (): void => {
    this.keys.clear();
  };

  private handlePointerDown = (event: PointerEvent): void => {
    if (this.mode !== 'lobby') return;
    this.pointer = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      dragging: false,
    };
    this.canvas?.setPointerCapture?.(event.pointerId);
  };

  private handlePointerMove = (event: PointerEvent): void => {
    if (!this.pointer || this.pointer.id !== event.pointerId) return;
    const dx = event.clientX - this.pointer.startX;
    const dy = event.clientY - this.pointer.startY;
    const length = Math.hypot(dx, dy);

    if (!this.pointer.dragging && length > 14) {
      this.pointer.dragging = true;
      this.target = null;
      this.showJoystick(this.pointer.startX, this.pointer.startY);
    }

    if (this.pointer.dragging) {
      const max = 62;
      const scale = Math.min(1, length / max);
      const nx = length > 0.001 ? (dx / length) * scale : 0;
      const ny = length > 0.001 ? (dy / length) * scale : 0;
      this.stick.set(nx, ny);
      if (this.joystickKnob) {
        this.joystickKnob.style.transform = `translate(calc(-50% + ${nx * 32}px), calc(-50% + ${ny * 32}px))`;
      }
    }
  };

  private handlePointerUp = (event: PointerEvent): void => {
    if (!this.pointer || this.pointer.id !== event.pointerId) return;
    if (!this.pointer.dragging) this.tapMove(this.pointer.startX, this.pointer.startY);
    this.pointer = null;
    this.stick.set(0, 0);
    this.hideJoystick();
  };

  private handlePointerCancel = (event: PointerEvent): void => {
    if (!this.pointer || this.pointer.id !== event.pointerId) return;
    this.pointer = null;
    this.stick.set(0, 0);
    this.hideJoystick();
  };

  private tapMove(screenX: number, screenY: number): void {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(
      ((screenX - rect.left) / Math.max(1, rect.width)) * 2 - 1,
      -((screenY - rect.top) / Math.max(1, rect.height)) * 2 + 1,
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(ndc, this.camera);

    // 게이트(기둥·링·포탈·표지판)를 직접 눌렀으면 게이트 안으로 걸어 들어간다
    if (raycaster.intersectObject(this.gateGroup, true).length > 0) {
      this.target = new THREE.Vector3(GATE.x, 0, GATE.z + 1);
      return;
    }

    const point = new THREE.Vector3();
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    if (!raycaster.ray.intersectPlane(plane, point)) return;

    const radius = Math.hypot(point.x, point.z);
    if (radius > BOUND) {
      point.x *= BOUND / radius;
      point.z *= BOUND / radius;
    }
    // 게이트 근처 바닥을 눌렀으면 게이트 앞으로 걸어간다
    if (Math.hypot(point.x - GATE.x, point.z - GATE.z) < 3.2) {
      point.set(GATE.x, 0, GATE.z + 1);
    }
    this.target = point;
  }

  // ---------------------------------------------------------------- 업데이트

  update(dt: number): void {
    const step = Math.min(dt, 0.05);
    this.time += step;

    if (this.mode === 'lobby') this.updateLocal(step);
    this.updateGuests(step);
    this.updateBubbles(step);
    this.updateGate(step);
    this.updateRemotes(step);

    if (this.mode === 'lobby') {
      this.netTimer += step;
      if (this.netTimer >= NET_INTERVAL) {
        this.netTimer = 0;
        this.broadcastState();
      }
      this.placeCamera(false, step);
    } else if (this.mode === 'preview') {
      this.updatePreviewCamera(step);
    }
  }

  private updateLocal(dt: number): void {
    const golfer = this.localGolfer;
    if (!golfer) return;

    const dir = _tmp.set(0, 0, 0);
    if (this.keys.has('w') || this.keys.has('arrowup')) dir.z -= 1;
    if (this.keys.has('s') || this.keys.has('arrowdown')) dir.z += 1;
    if (this.keys.has('a') || this.keys.has('arrowleft')) dir.x -= 1;
    if (this.keys.has('d') || this.keys.has('arrowright')) dir.x += 1;
    dir.x += this.stick.x;
    dir.z += this.stick.y;

    let moving = false;
    const magnitude = Math.min(1, dir.length());

    if (magnitude > 0.05) {
      this.target = null;
      dir.normalize();
      const speed = WALK_SPEED * Math.max(0.35, magnitude);
      this.localPos.addScaledVector(dir, speed * dt);
      this.localHeading = Math.atan2(dir.x, dir.z);
      moving = true;
    } else if (this.target) {
      const dx = this.target.x - this.localPos.x;
      const dz = this.target.z - this.localPos.z;
      const distance = Math.hypot(dx, dz);
      if (distance < 0.14) {
        this.target = null;
      } else {
        dir.set(dx / distance, 0, dz / distance);
        this.localPos.addScaledVector(dir, Math.min(WALK_SPEED, distance * 3.4) * dt);
        this.localHeading = Math.atan2(dir.x, dir.z);
        moving = true;
      }
    }

    this.resolve(this.localPos);
    this.localMoving = moving;

    golfer.group.position.set(this.localPos.x, 0, this.localPos.z);
    const diff = this.shortestAngle(golfer.group.rotation.y, this.localHeading);
    golfer.group.rotation.y += diff * Math.min(1, dt * 12);
    golfer.update(dt, moving);

    // 게이트 도착 → 플레이룸
    this.enterCooldown = Math.max(0, this.enterCooldown - dt);
    const gateDistance = Math.hypot(this.localPos.x - GATE.x, this.localPos.z - GATE.z);
    if (gateDistance < GATE_TRIGGER && this.enterCooldown <= 0) {
      this.enterCooldown = 2;
      this.events.onEnterPlayroom?.();
    }

    const near = gateDistance < 4.2;
    if (near !== this.nearGate) {
      this.nearGate = near;
      this.events.onGateChange?.(near);
    }
  }

  private shortestAngle(from: number, to: number): number {
    let diff = to - from;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    return diff;
  }

  private resolve(pos: THREE.Vector3): void {
    const radius = Math.hypot(pos.x, pos.z);
    if (radius > BOUND) {
      pos.x *= BOUND / radius;
      pos.z *= BOUND / radius;
    }
    for (const obstacle of this.obstacles) {
      const dx = pos.x - obstacle.x;
      const dz = pos.z - obstacle.z;
      const distance = Math.hypot(dx, dz);
      const min = obstacle.r + 0.34;
      if (distance < min && distance > 0.0001) {
        pos.x = obstacle.x + (dx / distance) * min;
        pos.z = obstacle.z + (dz / distance) * min;
      }
    }
  }

  private updateGuests(dt: number): void {
    const localActive = this.mode === 'lobby' && Boolean(this.identity);

    for (const guest of this.guests) {
      if (guest.wait > 0) {
        guest.wait -= dt;
        guest.golfer.update(dt, false);
      } else {
        const dx = guest.target.x - guest.pos.x;
        const dz = guest.target.z - guest.pos.z;
        const distance = Math.hypot(dx, dz);
        if (distance < 0.25) {
          guest.wait = 1.1 + Math.random() * 2.8;
          guest.target = this.pickGuestTarget(guest.pos);
          guest.golfer.update(dt, false);
        } else {
          const nx = dx / distance;
          const nz = dz / distance;
          guest.pos.x += nx * guest.speed * dt;
          guest.pos.z += nz * guest.speed * dt;
          this.resolve(guest.pos);
          guest.heading = Math.atan2(nx, nz);
          guest.golfer.update(dt, true);
        }
      }

      const diff = this.shortestAngle(guest.golfer.group.rotation.y, guest.heading);
      guest.golfer.group.rotation.y += diff * Math.min(1, dt * 7);
      guest.golfer.group.position.set(guest.pos.x, 0, guest.pos.z);

      // 가끔 혼자서도 이모지로 반응한다
      if (localActive) {
        guest.emojiTimer -= dt;
        if (guest.emojiTimer <= 0) {
          guest.emojiTimer = 7 + Math.random() * 9;
          if (Math.random() < 0.65) {
            const emoji = GUEST_EMOJIS[Math.floor(Math.random() * GUEST_EMOJIS.length)];
            this.spawnBubble(guest.pos, emoji);
          }
        }
      }
    }

    // 내 이모지에 대한 게스트 반응
    for (let i = this.replies.length - 1; i >= 0; i -= 1) {
      const reply = this.replies[i];
      reply.delay -= dt;
      if (reply.delay <= 0) {
        this.spawnBubble(reply.guest.pos, reply.emoji);
        this.replies.splice(i, 1);
        if (Math.random() < 0.35) this.audio.emoji();
      }
    }
  }

  private updateGate(dt: number): void {
    this.plazaHandle?.update(dt);
  }

  private spawnBubble(position: THREE.Vector3, emoji: string): void {
    const sprite = emojiBubbleSprite(emoji);
    if (!sprite) return;
    sprite.position.set(position.x, 1.45, position.z);
    this.scene.add(sprite);
    this.bubbles.push({
      sprite,
      life: 2.6,
      maxLife: 2.6,
      drift: (Math.random() - 0.5) * 0.3,
    });
  }

  private updateBubbles(dt: number): void {
    for (let i = this.bubbles.length - 1; i >= 0; i -= 1) {
      const bubble = this.bubbles[i];
      bubble.life -= dt;
      if (bubble.life <= 0) {
        this.scene.remove(bubble.sprite);
        bubble.sprite.material.dispose();
        this.bubbles.splice(i, 1);
        continue;
      }
      const t = 1 - bubble.life / bubble.maxLife;
      bubble.sprite.position.y += dt * 0.55;
      bubble.sprite.position.x += dt * bubble.drift;
      bubble.sprite.material.opacity = Math.min(1, (1 - t) * 2.2);
      const scale = 0.64 + Math.sin(t * Math.PI) * 0.1;
      bubble.sprite.scale.set(scale, scale, 1);
    }
  }

  private maybeGuestReaction(emoji: string): void {
    const nearby = this.guests
      .map((guest) => ({ guest, distance: guest.pos.distanceTo(this.localPos) }))
      .filter((entry) => entry.distance < 8)
      .sort((a, b) => a.distance - b.distance);
    if (!nearby.length) return;
    if (Math.random() > 0.8) return;
    const chosen = nearby[0].guest;
    const reply = Math.random() < 0.55 ? emoji : GUEST_EMOJIS[Math.floor(Math.random() * GUEST_EMOJIS.length)];
    this.replies.push({ guest: chosen, delay: 0.45 + Math.random() * 0.7, emoji: reply });
  }

  // ---------------------------------------------------------------- 카메라

  private placeCamera(immediate: boolean, dt = 0.016): void {
    const targetY = 0.95;
    const horizontal = CAM_DISTANCE * Math.cos(CAM_PITCH);
    const desiredX = this.localPos.x;
    const desiredZ = this.localPos.z + horizontal;
    const desiredY = targetY + CAM_DISTANCE * Math.sin(CAM_PITCH);

    if (immediate || this.cameraSnap) {
      this.camPos.set(desiredX, desiredY, desiredZ);
      this.camLook.set(this.localPos.x, targetY, this.localPos.z);
      this.cameraSnap = false;
    } else {
      const k = 1 - Math.exp(-5.5 * dt);
      this.camPos.x += (desiredX - this.camPos.x) * k;
      this.camPos.y += (desiredY - this.camPos.y) * k;
      this.camPos.z += (desiredZ - this.camPos.z) * k;
      this.camLook.x += (this.localPos.x - this.camLook.x) * (1 - Math.exp(-8 * dt));
      this.camLook.y += (targetY - this.camLook.y) * (1 - Math.exp(-8 * dt));
      this.camLook.z += (this.localPos.z - this.camLook.z) * (1 - Math.exp(-8 * dt));
    }

    this.camera.position.copy(this.camPos);
    this.camera.lookAt(this.camLook);
  }

  private updatePreviewCamera(dt: number): void {
    this.previewAngle += dt * 0.075;
    const radius = 19;
    const x = Math.sin(this.previewAngle) * radius;
    const z = Math.cos(this.previewAngle) * radius;
    this.camera.position.set(x, 9.5, z + 1.5);
    this.camera.lookAt(0, 1.1, -1.5);
  }

  // ---------------------------------------------------------------- 네트워크

  private broadcastState(): void {
    if (!this.identity) return;
    const snapshot: LobbySnapshot = {
      id: this.identity.id,
      name: this.identity.name,
      color: this.identity.color,
      pos: [round2(this.localPos.x), 0, round2(this.localPos.z)],
      heading: round2(this.localHeading),
      moving: this.localMoving,
      ts: Date.now(),
    };
    this.realtime.send({ type: 'lobby', player: snapshot });
  }

  private broadcastPlayroom(joined: boolean): void {
    if (!this.identity) return;
    this.realtime.send({
      type: 'playroom',
      id: this.identity.id,
      name: this.identity.name,
      joined,
    });
  }

  private handleMessage(message: NetMessage): void {
    if (!this.identity) return;

    switch (message.type) {
      case 'lobby': {
        if (message.player.id === this.identity.id) return;
        this.applyPeer(message.player);
        break;
      }
      case 'lobby-bye': {
        const leaving = this.remotes.get(message.id);
        if (leaving) {
          this.remotes.delete(message.id);
          leaving.golfer.dispose();
        }
        this.playroom.delete(message.id);
        this.emitPlayers();
        break;
      }
      case 'lobby-emoji': {
        const peer = this.remotes.get(message.id);
        if (!peer || this.mode !== 'lobby') return;
        this.spawnBubble(peer.target, message.emoji);
        this.audio.emoji();
        break;
      }
      case 'playroom': {
        if (message.id === this.identity.id) return;
        if (message.joined) {
          this.playroom.set(message.id, {
            id: message.id,
            name: message.name,
            color: this.remotes.get(message.id)?.color ?? '#9ad0ff',
          });
          const peer = this.remotes.get(message.id);
          if (peer) {
            this.remotes.delete(message.id);
            peer.golfer.dispose();
          }
          this.events.onToast?.(`${message.name}님이 플레이룸으로 들어갔어요`);
        } else {
          this.playroom.delete(message.id);
          this.events.onToast?.(`${message.name}님이 대기실로 돌아왔어요`);
        }
        this.emitPlayers();
        break;
      }
      default:
        break;
    }
  }

  private applyPeer(snapshot: LobbySnapshot): void {
    const existing = this.remotes.get(snapshot.id);
    if (existing) {
      existing.target.set(snapshot.pos[0], snapshot.pos[1], snapshot.pos[2]);
      existing.heading = snapshot.heading;
      existing.moving = snapshot.moving;
      existing.ts = snapshot.ts;
      if (existing.name !== snapshot.name) {
        existing.name = snapshot.name;
        existing.golfer.setName(snapshot.name, snapshot.color);
      }
      return;
    }

    // 플레이룸에 있던 사람이 대기실로 돌아온 경우 새로 만든다
    this.playroom.delete(snapshot.id);

    const golfer = new Golfer({ color: snapshot.color, name: snapshot.name });
    const target = new THREE.Vector3(snapshot.pos[0], snapshot.pos[1], snapshot.pos[2]);
    golfer.group.position.copy(target);
    this.root.add(golfer.group);

    this.remotes.set(snapshot.id, {
      golfer,
      target,
      heading: snapshot.heading,
      moving: snapshot.moving,
      name: snapshot.name,
      color: snapshot.color,
      id: snapshot.id,
      ts: snapshot.ts,
    });
    this.events.onToast?.(`${snapshot.name}님이 대기실에 있어요`);
    this.emitPlayers();
  }

  private updateRemotes(dt: number): void {
    const now = Date.now();
    let changed = false;

    for (const peer of [...this.remotes.values()]) {
      if (now - peer.ts > 12000) {
        this.remotes.delete(peer.id);
        peer.golfer.dispose();
        changed = true;
        continue;
      }
      peer.golfer.group.position.lerp(peer.target, 1 - Math.exp(-9 * dt));
      const diff = this.shortestAngle(peer.golfer.group.rotation.y, peer.heading);
      peer.golfer.group.rotation.y += diff * Math.min(1, dt * 8);
      peer.golfer.update(dt, peer.moving);
    }
    if (changed) this.emitPlayers();
  }

  private emitPlayers(): void {
    const lobbyPeers: LobbyPeer[] = [...this.remotes.values()].map((peer) => ({
      id: peer.id,
      name: peer.name,
      color: peer.color,
    }));
    const playroomPeers: LobbyPeer[] = [...this.playroom.values()];
    this.events.onPlayers?.(lobbyPeers, playroomPeers);
  }

  /** 다른 탭에서 들어온 이모지 문자 목록 (도움말 안내용) */
  get emojiSet(): readonly string[] {
    return LOBBY_EMOJIS;
  }

  // ---- 테스트/디버그용 ----

  /** 조이스틱 입력을 직접 넣는다 (x = 오른쪽, y = 아래) */
  debugInput(x: number, y: number): void {
    this.stick.set(x, y);
  }

  /** 대기실에서 보이는 다른 골퍼들 */
  getPeers(): Array<{ id: string; name: string; pos: [number, number, number] }> {
    return [...this.remotes.values()].map((peer) => ({
      id: peer.id,
      name: peer.name,
      pos: [round2(peer.target.x), 0, round2(peer.target.z)],
    }));
  }

  get localPosition(): [number, number, number] {
    return [round2(this.localPos.x), 0, round2(this.localPos.z)];
  }

  get guestCount(): number {
    return this.guests.length;
  }

  /** 게스트 위치 (움직임 검증용) */
  debugGuests(): Array<[number, number]> {
    return this.guests.map((guest) => [round2(guest.pos.x), round2(guest.pos.z)]);
  }

  dispose(): void {
    if (this.canvas) {
      this.canvas.removeEventListener('pointerdown', this.handlePointerDown);
      this.canvas.removeEventListener('pointermove', this.handlePointerMove);
      this.canvas.removeEventListener('pointerup', this.handlePointerUp);
      this.canvas.removeEventListener('pointercancel', this.handlePointerCancel);
      window.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('keyup', this.handleKeyUp);
      window.removeEventListener('blur', this.releaseKeys);
    }
    this.joystickEl?.remove();
    this.localGolfer?.dispose();
    this.remotes.forEach((peer) => peer.golfer.dispose());
    this.remotes.clear();
    this.guests.forEach((guest) => guest.golfer.dispose());
    this.guests.length = 0;
    this.bubbles.forEach((bubble) => {
      this.scene.remove(bubble.sprite);
      bubble.sprite.material.dispose();
    });
    this.bubbles.length = 0;
    this.disposables.forEach((item) => item.dispose());
    this.disposables.length = 0;
    this.mergedGeometries.forEach((geometry) => geometry.dispose());
    this.mergedGeometries.length = 0;
    this.scene.remove(this.root);
  }
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}
