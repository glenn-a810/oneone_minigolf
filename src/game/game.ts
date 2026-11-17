import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import type { HoleRecord, HoleSpec, PlayerIdentity, PlayerSnapshot, RoundResult } from './types';
import { HOLES } from './courses';
import { Course } from './course';
import { createWorld, type PhysicsMaterials } from './physics';
import { CameraRig } from './camera';
import { Effects } from './effects';
import type { AudioEngine } from './audio';
import { createBall } from './scenery';
import {
  AIM_MAX_DRAG_PX,
  BALL_RADIUS,
  CUP_ATTRACT_RADIUS,
  CUP_RADIUS,
  MAX_SHOT_SPEED,
  MIN_SHOT_SPEED,
  STROKE_LIMIT_EXTRA,
} from './constants';
import type { NetMessage, Realtime } from '../net/realtime';
import { Remotes } from '../net/remotes';

export type BannerTone = 'coral' | 'good' | 'plain';

export interface GameEvents {
  onHole?: (spec: HoleSpec, holeIndex: number, strokes: number) => void;
  onStroke?: (strokes: number) => void;
  onAim?: (power: number, active: boolean) => void;
  onHoled?: (holeIndex: number, strokes: number, label: string) => void;
  onPenalty?: (kind: 'water' | 'out', strokes: number) => void;
  onFinish?: (result: RoundResult) => void;
  onBanner?: (title: string, sub: string, tone: BannerTone) => void;
  onToast?: (text: string) => void;
  onRest?: (distanceToCup: number) => void;
  onPeers?: (peers: PlayerSnapshot[], online: boolean) => void;
  onRemoteEmoji?: (name: string, emoji: string) => void;
  onRemoteHoled?: (name: string, hole: number, strokes: number) => void;
}

export interface GameOptions {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  audio: AudioEngine;
  realtime: Realtime;
  events?: GameEvents;
}

type GameState = 'idle' | 'ready' | 'rolling' | 'sinking' | 'between' | 'finished';

interface PointerState {
  x: number;
  y: number;
  role: 'aim' | 'orbit';
}

interface AimState {
  startX: number;
  startY: number;
  power: number;
  dir: THREE.Vector3;
}

const AIM_DOT_COUNT = 14;
const aimMat = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0.9,
  depthWrite: false,
});

const _vec = new THREE.Vector3();

/** 홀 진행/샷/스코어/네트워크를 모두 관리하는 게임 컨트롤러 */
export class Game {
  readonly events: GameEvents;
  private readonly scene: THREE.Scene;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly audio: AudioEngine;
  private readonly realtime: Realtime;

  private readonly world: CANNON.World;
  private readonly materials: PhysicsMaterials;
  private readonly ballBody: CANNON.Body;
  private readonly ballMesh: THREE.Group;

  private readonly rig = new CameraRig();
  private readonly effects: Effects;
  private readonly remotes: Remotes;

  private readonly aimDots!: THREE.Mesh[];
  private readonly aimRing!: THREE.Mesh;
  private readonly aimGuide = new THREE.Group();

  private course: Course | null = null;
  private identity: PlayerIdentity | null = null;
  private state: GameState = 'idle';
  private holeIndex = 0;
  private strokes = 0;
  private records: HoleRecord[] = HOLES.map((h) => ({ par: h.par, strokes: null }));

  private aim: AimState | null = null;
  private aimBaseForward = new THREE.Vector3(0, 0, -1);
  private aimBaseRight = new THREE.Vector3(1, 0, 0);
  private readonly pointers = new Map<number, PointerState>();
  private readonly lastShotPos = new THREE.Vector3();

  private restTimer = 0;
  private sinkTimer = 0;
  private betweenTimer = 0;
  private netTimer = 0;
  private peersDirty = false;
  private peerEmitTimer = 0;
  private readonly peers = new Map<string, PlayerSnapshot>();

  constructor(options: GameOptions) {
    this.scene = options.scene;
    this.camera = options.camera;
    this.audio = options.audio;
    this.realtime = options.realtime;
    this.events = options.events ?? {};

    const physics = createWorld();
    this.world = physics.world;
    this.materials = physics.materials;
    this.ballBody = physics.ball;

    this.ballMesh = createBall(0xff7a59, BALL_RADIUS);
    this.ballMesh.visible = false;
    this.scene.add(this.ballMesh);

    this.effects = new Effects(this.scene);
    this.remotes = new Remotes(this.scene);

    // 에임 가이드 (점선 + 끝 링)
    const dotGeo = new THREE.CircleGeometry(0.035, 12);
    dotGeo.rotateX(-Math.PI / 2);
    const dots: THREE.Mesh[] = [];
    for (let i = 0; i < AIM_DOT_COUNT; i += 1) {
      const dot = new THREE.Mesh(dotGeo, aimMat);
      dot.visible = false;
      this.aimGuide.add(dot);
      dots.push(dot);
    }
    this.aimDots = dots;

    const ringGeo = new THREE.RingGeometry(0.1, 0.15, 22);
    ringGeo.rotateX(-Math.PI / 2);
    this.aimRing = new THREE.Mesh(ringGeo, aimMat);
    this.aimRing.visible = false;
    this.aimGuide.add(this.aimRing);
    this.aimGuide.visible = false;
    this.aimGuide.renderOrder = 2;
    this.scene.add(this.aimGuide);

    this.realtime.onMessage((message) => this.handleMessage(message));
    if (typeof window !== 'undefined') {
      window.addEventListener('pagehide', () => this.leave());
    }

    // 입장 화면 뒤로도 코스가 보이도록 첫 홀을 미리 세워 둔다 (상태: idle)
    this.course = new Course(this.scene, this.world, this.materials, HOLES[0]);
    this.rig.setDistance(7.6);
    this.rig.faceTo(HOLES[0].cup[0] - HOLES[0].tee[0], HOLES[0].cup[1] - HOLES[0].tee[1]);
    this.rig.update(0.016, this.focusPoint(), this.camera, true);
  }

  // ---------------------------------------------------------------- 입장/홀 진행

  /** 닉네임/색상을 정하고 라운드를 시작한다. */
  join(identity: PlayerIdentity): void {
    this.identity = identity;
    this.applyBallColor(identity.color);
    this.records = HOLES.map((h) => ({ par: h.par, strokes: null }));
    this.holeIndex = 0;
    this.startHole(0, true);
    this.sendHello();
  }

  private applyBallColor(hex: string): void {
    const ball = this.ballMesh.children[0] as THREE.Mesh | undefined;
    const material = ball?.material as THREE.MeshStandardMaterial | undefined;
    if (material) material.color.set(hex);
    this.ballMesh.visible = true;
  }

  private startHole(index: number, immediate = false): void {
    this.holeIndex = THREE.MathUtils.clamp(index, 0, HOLES.length - 1);
    const spec = HOLES[this.holeIndex];

    this.course?.dispose();
    this.course = new Course(this.scene, this.world, this.materials, spec);

    this.strokes = 0;
    this.records[this.holeIndex].strokes = null;
    this.state = 'ready';
    this.restTimer = 0;
    this.sinkTimer = 0;
    this.aim = null;
    this.pointers.clear();
    this.hideAimGuide();
    this.ballMesh.visible = true;
    this.ballMesh.scale.setScalar(1);

    this.placeBall(spec.tee[0], spec.tee[1]);
    this.lastShotPos.copy(this.ballBody.position);

    this.rig.setDistance(4.7);
    this.rig.faceTo(spec.cup[0] - spec.tee[0], spec.cup[1] - spec.tee[1]);
    this.rig.update(0.016, this.focusPoint(), this.camera, true);

    this.events.onHole?.(spec, this.holeIndex, this.strokes);
    this.events.onStroke?.(this.strokes);
    this.events.onAim?.(0, false);
    if (!immediate) this.audio.ui();
  }

  private advanceHole(): void {
    if (this.holeIndex + 1 >= HOLES.length) {
      this.finish();
      return;
    }
    this.startHole(this.holeIndex + 1);
    const spec = HOLES[this.holeIndex];
    this.events.onBanner?.(`${this.holeIndex + 1}홀`, `${spec.name} · Par ${spec.par}`, 'plain');
  }

  private finish(): void {
    this.state = 'finished';
    this.ballMesh.visible = false;
    this.hideAimGuide();
    const result = this.buildResult();
    this.events.onFinish?.(result);
    this.audio.fanfare();
    this.broadcastState(true);
  }

  private buildResult(): RoundResult {
    const holes = this.records.map((record) => ({ par: record.par, strokes: record.strokes }));
    const total = holes.reduce((sum, hole) => sum + (hole.strokes ?? 0), 0);
    const par = holes.reduce((sum, hole) => sum + hole.par, 0);
    const diff = total - par;
    const verdict = diff === 0 ? '이븐파' : diff < 0 ? `${Math.abs(diff)}언더파` : `+${diff}`;
    return {
      holes,
      total,
      par,
      diff,
      verdict,
      name: this.identity?.name ?? '플레이어',
      date: new Date().toISOString(),
    };
  }

  /** 라운드 전체 다시 치기 */
  restart(): void {
    if (!this.identity) return;
    this.peersDirty = true;
    this.records = HOLES.map((h) => ({ par: h.par, strokes: null }));
    this.startHole(0, true);
    this.events.onBanner?.('다시 한 라운드', '이번엔 언더파에 도전!', 'plain');
    this.broadcast({ type: 'again', id: this.identity.id, name: this.identity.name });
    this.broadcastState(true);
  }

  private placeBall(x: number, z: number): void {
    this.ballBody.wakeUp();
    this.ballBody.position.set(x, BALL_RADIUS + 0.002, z);
    this.ballBody.velocity.setZero();
    this.ballBody.angularVelocity.setZero();
    this.ballBody.quaternion.set(0, 0, 0, 1);
    this.ballBody.collisionResponse = true;
    this.ballMesh.position.set(x, BALL_RADIUS, z);
    this.ballMesh.scale.setScalar(1);
    this.restTimer = 0;
  }

  // ---------------------------------------------------------------- 업데이트

  update(dt: number): void {
    const step = Math.min(dt, 0.05);
    if (this.state === 'idle') {
      this.course?.update(step);
      this.effects.update(step);
      this.rig.orbitBy(-step * 14, 0);
      this.rig.update(step, this.focusPoint(), this.camera);
      return;
    }

    this.world.step(1 / 120, step, 6);

    if (this.state !== 'sinking') {
      this.ballMesh.position.copy(this.ballBody.position);
      this.ballMesh.quaternion.copy(this.ballBody.quaternion);
    }

    this.course?.update(step);

    if (this.state === 'rolling') this.updateRolling(step);
    else if (this.state === 'sinking') this.updateSinking(step);
    else if (this.state === 'between') {
      this.betweenTimer -= step;
      if (this.betweenTimer <= 0) this.advanceHole();
    }

    this.remotes.update(step, this.holeIndex);
    this.effects.update(step);
    this.updateAimGuide();
    this.rig.update(step, this.focusPoint(), this.camera);

    this.netTimer += step;
    if (this.netTimer >= 0.12) {
      this.netTimer = 0;
      this.broadcastState(false);
    }

    if (this.peersDirty) {
      this.peerEmitTimer += step;
      if (this.peerEmitTimer >= 0.4) {
        this.peerEmitTimer = 0;
        this.peersDirty = false;
        this.emitPeers();
      }
    }
    this.prunePeers();
  }

  private focusPoint(): THREE.Vector3 {
    if (this.state === 'idle') {
      const spec = HOLES[0];
      return _vec.set((spec.tee[0] + spec.cup[0]) / 2, 0.3, (spec.tee[1] + spec.cup[1]) / 2);
    }
    return _vec.set(
      this.ballBody.position.x,
      this.ballBody.position.y + 0.06,
      this.ballBody.position.z,
    );
  }

  private updateRolling(dt: number): void {
    const body = this.ballBody;
    const p = body.position;
    const speed = Math.hypot(body.velocity.x, body.velocity.z);

    // 물/아웃 판정
    if (p.y < -0.04) {
      const inWater = this.course?.isInWater(p.x, p.z) ?? false;
      if (inWater) this.penalty('water');
      else if (p.y < -0.7) this.penalty('out');
      return;
    }

    const cup = this.course?.cup;
    if (cup) {
      const dx = cup.x - p.x;
      const dz = cup.z - p.z;
      const dist = Math.hypot(dx, dz);

      // 컵 근처에서 살짝 빨려 들어가는 연출
      if (dist < CUP_ATTRACT_RADIUS && dist > 0.001 && speed < 6.5) {
        const pull = 9.5 * (1 - dist / CUP_ATTRACT_RADIUS);
        body.velocity.x += (dx / dist) * pull * dt;
        body.velocity.z += (dz / dist) * pull * dt;
      }

      const grounded = Math.abs(p.y - BALL_RADIUS) < 0.28;
      if (dist < CUP_RADIUS && speed < 5.2 && grounded) {
        this.holeOut();
        return;
      }
    }

    // 느려질 때는 조금 더 빨리 멈추게 (잔디 저항)
    if (speed > 0.02 && speed < 1.1) {
      const damp = Math.max(0, 1 - 2.4 * dt);
      body.velocity.x *= damp;
      body.velocity.z *= damp;
    }

    if (speed < 0.22 && Math.abs(body.velocity.y) < 0.25) this.restTimer += dt;
    else this.restTimer = 0;

    if (this.restTimer > 0.32) this.settle();
  }

  private settle(): void {
    const body = this.ballBody;
    this.restTimer = 0;
    body.velocity.setZero();
    body.angularVelocity.setZero();
    body.sleep();
    this.state = 'ready';
    this.effects.tap(this.ballMesh.position.clone());
    this.rig.setDistance(4.7);

    const cup = this.course?.cup;
    if (cup) this.rig.faceTo(cup.x - body.position.x, cup.z - body.position.z);

    if (this.strokes >= this.strokeLimit()) {
      this.pickUp();
      return;
    }

    const distance = cup ? Math.hypot(cup.x - body.position.x, cup.z - body.position.z) : 0;
    this.events.onRest?.(distance);
    this.events.onAim?.(0, false);
    this.broadcastState(true);
  }

  private strokeLimit(): number {
    return this.records[this.holeIndex].par + STROKE_LIMIT_EXTRA;
  }

  private pickUp(): void {
    this.records[this.holeIndex].strokes = this.strokes;
    this.state = 'between';
    this.betweenTimer = 1.8;
    this.events.onBanner?.(
      '최대 타수 도달',
      `${this.holeIndex + 1}홀을 ${this.strokes}타로 기록하고 다음 홀로`,
      'plain',
    );
    this.broadcastState(true);
  }

  private holeOut(): void {
    const spec = HOLES[this.holeIndex];
    this.state = 'sinking';
    this.sinkTimer = 1.9;
    this.records[this.holeIndex].strokes = Math.max(1, this.strokes);

    const body = this.ballBody;
    body.velocity.setZero();
    body.angularVelocity.setZero();
    body.sleep();

    const label = verdictLabel(this.strokes, spec.par);
    this.audio.cup();
    if (this.strokes <= spec.par) this.audio.fanfare();
    this.effects.confetti(
      new THREE.Vector3(this.ballMesh.position.x, this.ballMesh.position.y + 0.1, this.ballMesh.position.z),
      this.strokes <= spec.par,
    );
    this.events.onHoled?.(this.holeIndex, this.strokes, label);
    this.events.onAim?.(0, false);
    this.hideAimGuide();

    if (this.identity) {
      this.broadcast({
        type: 'holed',
        id: this.identity.id,
        hole: this.holeIndex,
        strokes: this.strokes,
        name: this.identity.name,
      });
    }
    this.broadcastState(true);
  }

  private updateSinking(dt: number): void {
    const cup = this.course?.cup;
    if (cup) {
      const k = Math.min(1, dt * 10);
      this.ballMesh.position.x += (cup.x - this.ballMesh.position.x) * k;
      this.ballMesh.position.z += (cup.z - this.ballMesh.position.z) * k;
    }
    this.ballMesh.position.y = Math.max(-0.34, this.ballMesh.position.y - dt * 0.55);
    this.ballMesh.scale.setScalar(Math.max(0.35, this.ballMesh.scale.x - dt * 0.5));

    this.sinkTimer -= dt;
    if (this.sinkTimer <= 0) {
      this.state = 'between';
      this.betweenTimer = 0.25;
      this.ballMesh.visible = true;
    }
  }

  private penalty(kind: 'water' | 'out'): void {
    const position = this.ballBody.position.clone();
    this.strokes += 1;
    this.records[this.holeIndex].strokes = this.strokes;

    if (kind === 'water') {
      this.audio.water();
      this.effects.splash(new THREE.Vector3(position.x, -0.05, position.z));
    } else {
      this.audio.bounce(0.7);
    }

    this.placeBall(this.lastShotPos.x, this.lastShotPos.z);
    this.state = 'ready';
    this.restTimer = 0;
    this.rig.setDistance(4.7);

    const cup = this.course?.cup;
    if (cup) this.rig.faceTo(cup.x - this.ballBody.position.x, cup.z - this.ballBody.position.z);

    this.events.onStroke?.(this.strokes);
    this.events.onPenalty?.(kind, this.strokes);
    this.broadcastState(true);

    if (this.strokes >= this.strokeLimit()) this.pickUp();
  }

  // ---------------------------------------------------------------- 조작

  pointerDown(x: number, y: number, pointerId: number, button = 0): void {
    if (this.state === 'finished') return;

    if (button === 2) {
      this.pointers.set(pointerId, { x, y, role: 'orbit' });
      this.cancelAim();
      return;
    }

    const role: 'aim' | 'orbit' = this.pointers.size === 0 && this.state === 'ready' ? 'aim' : 'orbit';
    this.pointers.set(pointerId, { x, y, role });

    if (role === 'aim') this.beginAim(x, y);
    else this.cancelAim();
  }

  pointerMove(x: number, y: number, pointerId: number): void {
    const pointer = this.pointers.get(pointerId);
    if (!pointer) return;
    const dx = x - pointer.x;
    const dy = y - pointer.y;
    pointer.x = x;
    pointer.y = y;

    if (pointer.role === 'aim') this.updateAim(x, y);
    else this.rig.orbitBy(dx, dy, this.pointers.size > 1 ? 0.55 : 1);
  }

  pointerUp(pointerId: number): void {
    const pointer = this.pointers.get(pointerId);
    this.pointers.delete(pointerId);
    if (!pointer) return;
    if (pointer.role === 'aim') this.endAim();
  }

  pointerCancel(pointerId: number): void {
    const pointer = this.pointers.get(pointerId);
    this.pointers.delete(pointerId);
    if (pointer?.role === 'aim') this.cancelAim();
  }

  /** 카메라 회전 (키보드 등) */
  orbitBy(dx: number, dy: number): void {
    this.rig.orbitBy(dx, dy);
  }

  private beginAim(x: number, y: number): void {
    if (this.state !== 'ready') return;
    this.aimBaseForward.set(-Math.sin(this.rig.yaw), 0, -Math.cos(this.rig.yaw)).normalize();
    this.aimBaseRight.set(Math.cos(this.rig.yaw), 0, -Math.sin(this.rig.yaw)).normalize();
    this.aim = { startX: x, startY: y, power: 0, dir: this.aimBaseForward.clone() };
  }

  private updateAim(x: number, y: number): void {
    if (!this.aim) return;
    const dx = x - this.aim.startX;
    const dy = y - this.aim.startY;
    const length = Math.hypot(dx, dy);

    this.aim.power = Math.min(1, length / AIM_MAX_DRAG_PX);
    if (length > 4) {
      const dir = this.aimBaseForward
        .clone()
        .multiplyScalar(dy)
        .addScaledVector(this.aimBaseRight, -dx);
      if (dir.lengthSq() > 1e-5) this.aim.dir = dir.normalize();
    }

    this.events.onAim?.(this.aim.power, this.aim.power > 0.03);
  }

  private endAim(): void {
    const aim = this.aim;
    this.aim = null;
    if (!aim || this.state !== 'ready' || aim.power < 0.06) {
      this.hideAimGuide();
      this.events.onAim?.(0, false);
      return;
    }
    this.fire(aim.dir, aim.power);
  }

  private cancelAim(): void {
    if (!this.aim) return;
    this.aim = null;
    this.hideAimGuide();
    this.events.onAim?.(0, false);
  }

  private fire(dir: THREE.Vector3, power: number): void {
    const speed = MIN_SHOT_SPEED + (MAX_SHOT_SPEED - MIN_SHOT_SPEED) * power;
    this.lastShotPos.set(this.ballBody.position.x, BALL_RADIUS, this.ballBody.position.z);

    this.ballBody.wakeUp();
    this.ballBody.collisionResponse = true;
    this.ballBody.velocity.set(dir.x * speed, 0, dir.z * speed);
    this.ballBody.angularVelocity.set(0, 0, 0);

    this.strokes += 1;
    this.state = 'rolling';
    this.restTimer = 0;
    this.hideAimGuide();

    this.audio.putt(power);
    this.rig.setDistance(5.6);
    this.rig.faceTo(dir.x, dir.z);

    this.events.onStroke?.(this.strokes);
    this.events.onAim?.(0, false);

    if (this.identity) {
      this.broadcast({ type: 'shot', id: this.identity.id, power });
    }
    this.broadcastState(true);
  }

  private hideAimGuide(): void {
    this.aimGuide.visible = false;
    this.aimRing.visible = false;
    this.aimDots.forEach((dot) => {
      dot.visible = false;
    });
  }

  private updateAimGuide(): void {
    const aim = this.aim;
    if (!aim || aim.power < 0.03 || this.state !== 'ready') {
      if (this.aimGuide.visible) this.hideAimGuide();
      return;
    }

    this.aimGuide.visible = true;
    this.aimGuide.position.set(this.ballBody.position.x, 0.022, this.ballBody.position.z);
    this.aimGuide.rotation.y = Math.atan2(aim.dir.x, aim.dir.z);

    const spacing = 0.26 + aim.power * 0.58;
    const count = Math.max(4, Math.round(4 + aim.power * 10));
    for (let i = 0; i < this.aimDots.length; i += 1) {
      const dot = this.aimDots[i];
      dot.visible = i < count;
      if (dot.visible) dot.position.set(0, 0.002, (i + 1) * spacing);
    }

    this.aimRing.visible = true;
    this.aimRing.position.set(0, 0.003, (count + 1) * spacing);

    aimMat.color.setRGB(0.35 + aim.power * 0.65, 0.85 - aim.power * 0.55, 0.45 - aim.power * 0.25);
    aimMat.opacity = 0.55 + aim.power * 0.4;
  }

  /** 디버그/테스트용: 화면 입력 없이 바로 퍼팅 */
  puttRaw(dx: number, dz: number, power: number): void {
    if (this.state !== 'ready') return;
    const dir = new THREE.Vector3(dx, 0, dz);
    if (dir.lengthSq() < 1e-6) dir.set(0, 0, -1);
    dir.normalize();
    this.fire(dir, THREE.MathUtils.clamp(power, 0.05, 1));
  }

  debugState(): { state: GameState; hole: number; strokes: number; pos: [number, number, number]; cup: [number, number] } {
    const cup = this.course?.cup ?? new THREE.Vector3();
    return {
      state: this.state,
      hole: this.holeIndex,
      strokes: this.strokes,
      pos: [this.ballBody.position.x, this.ballBody.position.y, this.ballBody.position.z],
      cup: [cup.x, cup.z],
    };
  }

  // ---------------------------------------------------------------- 네트워크

  sendEmoji(emoji: string): void {
    this.effects.emoji(this.ballMesh.position.clone(), emoji);
    this.audio.emoji();
    if (this.identity) this.broadcast({ type: 'emoji', id: this.identity.id, emoji });
  }

  private sendHello(): void {
    const snapshot = this.snapshot();
    if (snapshot) this.broadcast({ type: 'hello', player: snapshot });
  }

  private leave(): void {
    if (this.identity) this.broadcast({ type: 'bye', id: this.identity.id });
    this.realtime.close();
  }

  private snapshot(): PlayerSnapshot | null {
    if (!this.identity) return null;
    const p = this.ballBody.position;
    return {
      id: this.identity.id,
      name: this.identity.name,
      color: this.identity.color,
      hole: this.holeIndex,
      pos: [round3(p.x), round3(p.y), round3(p.z)],
      strokes: this.strokes,
      total: this.currentTotal(),
      done: this.state === 'finished',
      moving: this.state === 'rolling' || this.state === 'sinking',
      ts: Date.now(),
    };
  }

  private currentTotal(): number {
    let total = 0;
    this.records.forEach((record, index) => {
      if (record.strokes !== null) total += record.strokes;
      else if (index === this.holeIndex) total += this.strokes;
    });
    return total;
  }

  private broadcast(message: NetMessage): void {
    this.realtime.send(message);
  }

  private broadcastState(force: boolean): void {
    const snapshot = this.snapshot();
    if (!snapshot) return;
    if (force || this.realtime.online) {
      this.broadcast({ type: 'state', player: snapshot });
    }
  }

  private handleMessage(message: NetMessage): void {
    if (!this.identity) return;

    switch (message.type) {
      case 'hello': {
        if (message.player.id === this.identity.id) return;
        this.applyPeer(message.player);
        this.broadcastState(true);
        break;
      }
      case 'state': {
        if (message.player.id === this.identity.id) return;
        this.applyPeer(message.player);
        break;
      }
      case 'bye': {
        if (this.peers.delete(message.id)) {
          this.remotes.remove(message.id);
          this.peersDirty = true;
        }
        break;
      }
      case 'emoji': {
        const position = this.remotes.positionOf(message.id) ?? this.ballMesh.position.clone();
        this.effects.emoji(position, message.emoji);
        this.audio.emoji();
        const name = this.peers.get(message.id)?.name ?? '플레이어';
        this.events.onRemoteEmoji?.(name, message.emoji);
        break;
      }
      case 'shot': {
        this.audio.bounce(0.25 + message.power * 0.4);
        break;
      }
      case 'holed': {
        this.events.onRemoteHoled?.(message.name, message.hole, message.strokes);
        this.audio.cup();
        break;
      }
      case 'again': {
        this.events.onToast?.(`${message.name}님이 새 라운드를 시작했어요`);
        break;
      }
      default:
        break;
    }
  }

  private applyPeer(snapshot: PlayerSnapshot): void {
    const previous = this.peers.get(snapshot.id);
    this.peers.set(snapshot.id, snapshot);
    this.remotes.upsert(snapshot);
    this.peersDirty = true;
    if (!previous && !snapshot.done) {
      this.events.onToast?.(`${snapshot.name}님이 입장했어요`);
    }
  }

  private prunePeers(): void {
    const now = Date.now();
    let changed = false;
    for (const [id, peer] of this.peers) {
      if (now - peer.ts > 20000) {
        this.peers.delete(id);
        this.remotes.remove(id);
        changed = true;
      }
    }
    if (changed) this.peersDirty = true;
  }

  private emitPeers(): void {
    this.events.onPeers?.(this.getPeers(), this.realtime.online);
  }

  getPeers(): PlayerSnapshot[] {
    return [...this.peers.values()].sort((a, b) => a.total - b.total || a.name.localeCompare(b.name));
  }

  getLocalSnapshot(): PlayerSnapshot | null {
    return this.snapshot();
  }

  // ---------------------------------------------------------------- 조회/유틸

  get hole(): HoleSpec {
    return HOLES[this.holeIndex];
  }

  get currentStrokes(): number {
    return this.strokes;
  }

  cupDistance(): number {
    const cup = this.course?.cup;
    if (!cup) return 0;
    return Math.hypot(cup.x - this.ballBody.position.x, cup.z - this.ballBody.position.z);
  }

  /** 공을 마지막 샷 위치로 되돌린다 (+1벌타) */
  resetBall(): void {
    if (this.state !== 'ready') return;
    this.strokes += 1;
    this.records[this.holeIndex].strokes = this.strokes;
    this.placeBall(this.lastShotPos.x, this.lastShotPos.z);
    this.events.onStroke?.(this.strokes);
    this.events.onToast?.('공을 되돌렸어요 (+1벌타)');
    this.broadcastState(true);
    if (this.strokes >= this.strokeLimit()) this.pickUp();
  }
}

export function verdictLabel(strokes: number, par: number): string {
  const diff = strokes - par;
  if (strokes === 1) return '홀인원';
  if (diff <= -3) return '알바트로스';
  if (diff === -2) return '이글';
  if (diff === -1) return '버디';
  if (diff === 0) return '파';
  if (diff === 1) return '보기';
  if (diff === 2) return '더블보기';
  if (diff === 3) return '트리플보기';
  return `+${diff}`;
}

function round3(value: number): number {
  return Math.round(value * 1000) / 1000;
}
