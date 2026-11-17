import * as THREE from 'three';
import type { HoleRecord, HoleSpec, PlayerIdentity, PlayerSnapshot, RoundResult, SurfaceKind } from './types';
import { HOLES } from './courses';
import { Course } from './course';
import { CameraRig } from './camera';
import { Effects } from './effects';
import type { AudioEngine } from './audio';
import { createBall } from './scenery';
import { Golfer } from '../lobby/avatar';
import { BALL_RADIUS, MIN_POWER_RATIO, STROKE_LIMIT_EXTRA } from './constants';
import { GolfBall, previewShot, type TrajectoryPreview } from './ball';
import {
  clubMaxDistance,
  estimateDistance,
  getClub,
  liePenalty,
  powerForDistance,
  recommendClub,
  type Club,
  type ClubId,
} from './clubs';
import { SwingMeter, type ShotPlan } from './swing';
import type { NetMessage, Realtime } from '../net/realtime';
import { Remotes } from '../net/remotes';

export type BannerTone = 'coral' | 'good' | 'plain';

/** 카메라 시점 — 백뷰 / 착지 지점 타겟뷰 / 전체 코스 탑뷰 */
export type ViewMode = 'back' | 'target' | 'top';

export const VIEW_LABEL: Record<ViewMode, string> = {
  back: '백뷰',
  target: '타겟뷰',
  top: '탑뷰',
};

/** 백뷰 → 타겟뷰 → 탑뷰 → 백뷰 */
const VIEW_ORDER: ViewMode[] = ['back', 'target', 'top'];

export interface GameEvents {
  onHole?: (spec: HoleSpec, holeIndex: number, strokes: number) => void;
  onStroke?: (strokes: number) => void;
  onGauge?: (state: GaugeView) => void;
  onClub?: (club: ClubId, recommended: ClubId, distance: number, surface: SurfaceKind) => void;
  onView?: (mode: ViewMode) => void;
  onShot?: (plan: ShotPlan, club: Club) => void;
  onHoled?: (holeIndex: number, strokes: number, label: string) => void;
  onPenalty?: (kind: 'water' | 'out', strokes: number) => void;
  onFinish?: (result: RoundResult) => void;
  onBanner?: (title: string, sub: string, tone: BannerTone) => void;
  onToast?: (text: string) => void;
  onRest?: (distanceToCup: number, surface: SurfaceKind, strokes: number) => void;
  onLanding?: (distanceToCup: number) => void;
  onPeers?: (peers: PlayerSnapshot[], online: boolean) => void;
  onRemoteEmoji?: (name: string, emoji: string) => void;
  onRemoteHoled?: (name: string, hole: number, strokes: number) => void;
}

export interface GaugeView {
  phase: 'idle' | 'power' | 'impact' | 'done';
  value: number;
  power: number;
  hint: string;
  /** 지금 선택된 클럽 */
  club: ClubId;
  /** 남은 거리 (컵까지, m) */
  distance: number;
  /** 선택 클럽의 최대 비거리 (100% 파워, 현재 라이) */
  clubMax: number;
  /** 현재 게이지 파워 % (0~100) */
  powerPercent: number;
  /** 현재 파워의 예상 비거리 (m) */
  estimate: number;
  /** 목표 거리에 필요한 파워 (0~1, 1 초과 = 이 클럽으로 부족) */
  neededPower: number;
}

export interface GameOptions {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  audio: AudioEngine;
  realtime: Realtime;
  events?: GameEvents;
}

type GameState = 'idle' | 'ready' | 'gauge' | 'flight' | 'sinking' | 'between' | 'finished';

interface PointerState {
  x: number;
  y: number;
  role: 'aim' | 'orbit';
}

const AIM_DOT_COUNT = 30;
const PREVIEW_INTERVAL = 0.08;

const aimDotMaterial = new THREE.MeshBasicMaterial({
  color: 0xffb35c,
  transparent: true,
  opacity: 0.98,
  depthWrite: false,
  toneMapped: false,
});

const aimDashMaterial = new THREE.MeshBasicMaterial({
  color: 0xfff1c4,
  transparent: true,
  opacity: 0.85,
  depthWrite: false,
  toneMapped: false,
});

const _vec = new THREE.Vector3();
const _camFocus = new THREE.Vector3();
const _addr = new THREE.Vector3();

/** 골퍼가 공 옆에 서는 거리 (m) */
const ADDRESS_SIDE = 0.42;
const ADDRESS_BACK = 0.12;
/** 새 공 자리로 걸어가는 속도 (m/s) */
const WALK_SPEED = 9;

/** 홀 진행 · 스윙 게이지 · 샷 물리 · 스코어 · 네트워크를 관리하는 게임 컨트롤러 */
export class Game {
  readonly events: GameEvents;
  private readonly scene: THREE.Scene;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly audio: AudioEngine;
  private readonly realtime: Realtime;

  private readonly rig = new CameraRig(0.42, 10.5);
  private readonly effects: Effects;
  private readonly remotes: Remotes;

  private readonly ball = new GolfBall();
  private readonly ballVisual: THREE.Group;
  private golfer: Golfer | null = null;

  private readonly aimDots: THREE.Mesh[] = [];
  private readonly aimDashes: THREE.Mesh[] = [];
  private readonly aimRing: THREE.Mesh;
  private readonly aimLandingRing: THREE.Mesh;
  private readonly aimGuide = new THREE.Group();

  private readonly meter = new SwingMeter();

  private course: Course | null = null;
  private identity: PlayerIdentity | null = null;
  private state: GameState = 'idle';
  private holeIndex = 0;
  private strokes = 0;
  private records: HoleRecord[] = HOLES.map((h) => ({ par: h.par, strokes: null }));

  private clubId: ClubId = '1W';
  private recommended: ClubId = '1W';
  /** 플레이어가 직접 클럽을 골랐는지 (다음 샷 준비 때 추천으로 초기화) */
  private clubManual = false;
  private aimYaw = 0;
  private viewMode: ViewMode = 'back';

  /** 골퍼가 서 있는 자리 (샷 뒤에도 제자리에 남도록 따로 들고 있는다) */
  private readonly golferPos = new THREE.Vector3();
  private golferFacing = 0;

  private readonly pointers = new Map<number, PointerState>();
  private readonly lastShotPos = new THREE.Vector3();
  private sinkTimer = 0;
  private betweenTimer = 0;
  private netTimer = 0;
  private peersDirty = false;
  private peerEmitTimer = 0;
  private previewTimer = 0;
  private preview: TrajectoryPreview | null = null;
  private lastSurface: SurfaceKind = 'fairway';
  private readonly peers = new Map<string, PlayerSnapshot>();

  constructor(options: GameOptions) {
    this.scene = options.scene;
    this.camera = options.camera;
    this.audio = options.audio;
    this.realtime = options.realtime;
    this.events = options.events ?? {};

    this.ballVisual = createBall(0xff7a59, BALL_RADIUS);
    this.ballVisual.visible = false;
    this.scene.add(this.ballVisual);

    this.effects = new Effects(this.scene);
    this.remotes = new Remotes(this.scene);

    // 조준 가이드: 점선 궤적 + 착지 링 + 정지 지점 링
    const dotGeo = new THREE.SphereGeometry(0.16, 10, 8);
    dotGeo.rotateX(-Math.PI / 2);
    for (let i = 0; i < AIM_DOT_COUNT; i += 1) {
      const dot = new THREE.Mesh(dotGeo, aimDotMaterial);
      dot.visible = false;
      dot.renderOrder = 3;
      this.aimGuide.add(dot);
      this.aimDots.push(dot);
    }
    const ringGeo = new THREE.RingGeometry(0.42, 0.56, 36);
    ringGeo.rotateX(-Math.PI / 2);
    this.aimRing = new THREE.Mesh(
      ringGeo,
      new THREE.MeshBasicMaterial({
        color: 0xffe066,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
      }),
    );
    this.aimRing.renderOrder = 3;
    this.aimRing.visible = false;
    this.aimGuide.add(this.aimRing);

    const landingGeo = new THREE.RingGeometry(0.6, 0.78, 40);
    landingGeo.rotateX(-Math.PI / 2);
    this.aimLandingRing = new THREE.Mesh(
      landingGeo,
      new THREE.MeshBasicMaterial({
        color: 0x8fe9ff,
        transparent: true,
        opacity: 0.75,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
      }),
    );
    this.aimLandingRing.renderOrder = 3;
    this.aimLandingRing.visible = false;
    this.aimGuide.add(this.aimLandingRing);

    // 바닥 조준 점선 (공에서 목표 방향으로)
    const dashGeo = new THREE.PlaneGeometry(0.16, 1.1);
    dashGeo.rotateX(-Math.PI / 2);
    for (let i = 0; i < 18; i += 1) {
      const dash = new THREE.Mesh(dashGeo, aimDashMaterial);
      dash.visible = false;
      dash.renderOrder = 4;
      this.aimGuide.add(dash);
      this.aimDashes.push(dash);
    }

    this.aimGuide.visible = false;
    this.scene.add(this.aimGuide);

    this.realtime.onMessage((message) => this.handleMessage(message));
    if (typeof window !== 'undefined') {
      window.addEventListener('pagehide', () => this.leave());
    }

    // 입장 화면 뒤에도 코스가 보이도록 첫 홀을 미리 세운다
    this.course = new Course(this.scene, HOLES[0]);
    this.placeBall(HOLES[0].tee[0], HOLES[0].tee[1]);
    this.aimYaw = this.yawTo(HOLES[0].tee[0], HOLES[0].tee[1], HOLES[0].cup[0], HOLES[0].cup[1]);
    this.refreshRecommended(this.ball.x, this.ball.z, true);
    this.rig.setAim(this.aimYaw, true);
    this.rig.setDistance(18);
    this.rig.setPitch(0.5);
    this.rig.update(0.016, this.focusPoint(), this.camera, true, 2);
  }

  // ---------------------------------------------------------------- 입장/홀 진행

  join(identity: PlayerIdentity): void {
    this.identity = identity;
    this.applyBallColor(identity.color);
    this.records = HOLES.map((h) => ({ par: h.par, strokes: null }));
    this.holeIndex = 0;
    this.viewMode = 'back';
    this.startHole(0, true);
    this.sendHello();
  }

  private applyBallColor(hex: string): void {
    const ball = this.ballVisual.children[0] as THREE.Mesh | undefined;
    const material = ball?.material as THREE.MeshStandardMaterial | undefined;
    if (material) material.color.set(hex);
    this.ballVisual.visible = true;
  }

  private startHole(index: number, immediate = false): void {
    this.holeIndex = THREE.MathUtils.clamp(index, 0, HOLES.length - 1);
    const spec = HOLES[this.holeIndex];

    this.course?.dispose();
    this.course = new Course(this.scene, spec);

    this.strokes = 0;
    this.records[this.holeIndex].strokes = null;
    this.state = 'ready';
    this.meter.reset();
    this.pointers.clear();
    this.clubManual = false;
    this.aimYaw = this.yawTo(spec.tee[0], spec.tee[1], spec.cup[0], spec.cup[1]);
    this.placeBall(spec.tee[0], spec.tee[1]);
    this.refreshRecommended(this.ball.x, this.ball.z, true);
    this.effects.clear();
    this.effects.clearTrail();
    this.snapGolfer();
    this.events.onView?.(this.viewMode);

    this.rig.setAim(this.aimYaw, true);
    this.rig.setDistance(10.5);
    this.rig.setPitch(0.42);
    this.rig.update(0.016, this.focusPoint(), this.camera, true, 2);

    this.ensureGolfer();
    this.events.onHole?.(spec, this.holeIndex, this.strokes);
    this.events.onStroke?.(this.strokes);
    this.emitGauge();
    this.emitClub();
    this.refreshPreview(true);
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
    this.ballVisual.visible = false;
    this.hideAimGuide();
    this.golfer?.setVisible(false);
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

  restart(): void {
    if (!this.identity) return;
    this.peersDirty = true;
    this.records = HOLES.map((h) => ({ par: h.par, strokes: null }));
    this.golfer?.setVisible(true);
    this.startHole(0, true);
    this.events.onBanner?.('다시 한 라운드', '이번엔 언더파에 도전!', 'plain');
    this.broadcast({ type: 'again', id: this.identity.id, name: this.identity.name });
    this.broadcastState(true);
  }

  exitToLobby(): void {
    if (this.identity) this.broadcast({ type: 'bye', id: this.identity.id });
    this.identity = null;
    this.state = 'idle';
    this.viewMode = 'back';
    this.events.onView?.(this.viewMode);
    this.ballVisual.visible = false;
    this.meter.reset();
    this.pointers.clear();
    this.hideAimGuide();
    this.effects.clear();
    this.remotes.clear();
    this.peers.clear();
    this.peersDirty = false;
    this.golfer?.dispose();
    if (this.golfer) {
      this.scene.remove(this.golfer.group);
      this.golfer = null;
    }
  }

  private ensureGolfer(): void {
    if (!this.identity) return;
    if (this.golfer) {
      this.golfer.setVisible(true);
      return;
    }
    const golfer = new Golfer({ color: this.identity.color, club: true });
    this.golfer = golfer;
    this.scene.add(golfer.group);
    this.snapGolfer();
  }

  /** 골퍼가 공 옆에서 어드레스하는 자리 */
  private addressSpot(out: THREE.Vector3): THREE.Vector3 {
    const forwardX = Math.sin(this.aimYaw);
    const forwardZ = -Math.cos(this.aimYaw);
    const rightX = Math.cos(this.aimYaw);
    const rightZ = Math.sin(this.aimYaw);
    return out.set(
      this.ball.x - forwardX * ADDRESS_BACK + rightX * ADDRESS_SIDE,
      0,
      this.ball.z - forwardZ * ADDRESS_BACK + rightZ * ADDRESS_SIDE,
    );
  }

  /** 골퍼를 공 옆 새 자리로 바로 옮긴다 (홀 시작·입장 시) */
  private snapGolfer(): void {
    this.addressSpot(this.golferPos);
    this.golferFacing = this.aimYaw;
    if (this.golfer) {
      this.golfer.group.position.copy(this.golferPos);
      this.golfer.group.rotation.y = Math.atan2(Math.sin(this.aimYaw), -Math.cos(this.aimYaw));
    }
  }

  private placeBall(x: number, z: number): void {
    const surface = this.surfaceAt(x, z);
    const height = surface === 'green' ? 0.01 : surface === 'bunker' ? 0.005 : 0;
    this.ball.x = x;
    this.ball.y = height + BALL_RADIUS;
    this.ball.z = z;
    this.ball.vx = 0;
    this.ball.vy = 0;
    this.ball.vz = 0;
    this.ball.stopped = true;
    this.ball.airborne = false;
    this.ball.rolling = false;
    this.ball.surface = surface;
    this.lastSurface = surface;
    this.ballVisual.position.set(this.ball.x, this.ball.y, this.ball.z);
    this.ballVisual.scale.setScalar(1);
  }

  private surfaceAt(x: number, z: number): SurfaceKind {
    return this.course ? this.course.surfaceAt(x, z).kind : 'fairway';
  }

  private yawTo(fromX: number, fromZ: number, toX: number, toZ: number): number {
    return Math.atan2(toX - fromX, -(toZ - fromZ));
  }

  // ---------------------------------------------------------------- 업데이트

  update(dt: number): void {
    const step = Math.min(dt, 0.05);

    if (this.state === 'idle') {
      this.course?.update(step);
      this.effects.update(step);
      this.rig.orbitBy(step * 0.22, 0);
      this.rig.update(step, this.focusPoint(), this.camera, false, 4);
      return;
    }

    this.course?.update(step);

    if (this.state === 'flight') this.updateFlight(step);
    else if (this.state === 'sinking') this.updateSinking(step);
    else if (this.state === 'between') {
      this.betweenTimer -= step;
      if (this.betweenTimer <= 0) this.advanceHole();
    }

    if (this.state === 'gauge') {
      const result = this.meter.update(step);
      if (result.changed) this.emitGauge();
      if (result.timedOut) {
        this.state = 'ready';
        this.meter.reset();
        this.events.onToast?.('임팩트를 놓쳤어요! 다시 스윙하세요');
        this.emitGauge();
        this.refreshPreview(true);
      }
    }

    this.syncVisuals(step);
    this.remotes.update(step, this.holeIndex);
    this.effects.update(step);

    if (this.state === 'ready' || this.state === 'gauge') {
      this.previewTimer += step;
      if (this.previewTimer >= PREVIEW_INTERVAL) {
        this.previewTimer = 0;
        this.refreshPreview(false);
      }
    }

    this.updateCamera(step);

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
      return _vec.set((spec.tee[0] + spec.green.x) / 2, 0.4, (spec.tee[1] + spec.green.z) / 2);
    }
    return _vec.set(this.ball.x, this.ball.y + 0.1, this.ball.z);
  }

  private updateCamera(dt: number): void {
    this.rig.setAim(this.aimYaw);
    const flying = this.state === 'flight' || this.state === 'sinking';

    switch (this.viewMode) {
      case 'top':
        // 전체 코스 탑뷰: 티와 그린 사이를 넓게 내려다본다
        this.rig.setDistance(this.topViewDistance());
        this.rig.setPitch(1.16);
        this.rig.update(dt, this.topViewFocus(), this.camera, false, 0);
        return;
      case 'target':
        // 찜지 예정 지점/그린 상공 타겟뷰: 착지 링·그린·벙커·연못이 한눈에
        this.rig.setDistance(flying ? 19 : 20);
        this.rig.setPitch(0.6);
        this.rig.update(dt, this.targetViewFocus(), this.camera, false, 0);
        return;
      default:
        break;
    }

    if (flying) {
      this.rig.setDistance(this.ball.airborne ? 16 : 13);
      this.rig.setPitch(0.36);
      this.rig.update(dt, this.focusPoint(), this.camera, false, 3);
      return;
    }
    this.rig.setDistance(this.state === 'finished' ? 13 : 10.5);
    this.rig.setPitch(0.42);
    this.rig.update(dt, this.focusPoint(), this.camera, false, 1.5);
  }

  /** 타겟뷰 시선: 조준한 착지 지점(없으면 그린 중앙), 비행 중에는 공 */
  private targetViewFocus(): THREE.Vector3 {
    if (this.state === 'flight' || this.state === 'sinking') {
      return _camFocus.set(this.ball.x, this.ball.y, this.ball.z);
    }
    const target = this.preview?.rest ?? this.preview?.landing;
    if (target) return _camFocus.set(target.x, 0.15, target.z);
    const cup = this.course?.cup;
    return cup ? _camFocus.set(cup.x, 0.15, cup.z) : _camFocus.set(this.ball.x, 0.15, this.ball.z);
  }

  /** 탑뷰 시선: 티(공)와 그린 중앙의 중간 */
  private topViewFocus(): THREE.Vector3 {
    const green = HOLES[this.holeIndex].green;
    return _camFocus.set((this.ball.x + green.x) / 2, 0.2, (this.ball.z + green.z) / 2);
  }

  private topViewDistance(): number {
    const green = HOLES[this.holeIndex].green;
    const span = Math.hypot(green.x - this.ball.x, green.z - this.ball.z);
    return THREE.MathUtils.clamp(span * 1.5, 34, 86);
  }

  private syncVisuals(dt: number): void {
    if (this.state === 'sinking') return;
    this.ballVisual.position.set(this.ball.x, this.ball.y, this.ball.z);

    // 굴림 회전 (딤플이 보이도록)
    const speed = Math.hypot(this.ball.vx, this.ball.vz);
    if (speed > 0.02) {
      const axis = _vec.set(this.ball.vz, 0, -this.ball.vx).normalize();
      this.ballVisual.rotateOnWorldAxis(axis, (speed * dt) / BALL_RADIUS);
    }

    this.updateGolfer(dt);
  }

  /**
   * 골퍼 위치.
   * - 스윙·비행·착지·홀아웃 중: 샷을 친 자리에 그대로 서서 공만 날아가는 걸 본다
   * - 샷 준비(ready/gauge): 새 공 옆 자리로 걸어가 어드레스 자세
   */
  private updateGolfer(dt: number): void {
    const golfer = this.golfer;
    if (!golfer) return;

    const shotInProgress =
      this.state === 'flight' || this.state === 'sinking' || this.state === 'between' || this.state === 'finished';

    const face = (yaw: number) => {
      this.golferFacing = yaw;
      golfer.group.rotation.y = Math.atan2(Math.sin(yaw), -Math.cos(yaw));
    };

    if (shotInProgress) {
      golfer.group.position.copy(this.golferPos);
      face(this.golferFacing);
      golfer.setAddressing(false);
      golfer.update(dt, false);
      return;
    }

    const goal = this.addressSpot(_addr);
    const dx = goal.x - this.golferPos.x;
    const dz = goal.z - this.golferPos.z;
    const dist = Math.hypot(dx, dz);
    const walking = dist > 0.06;

    if (walking) {
      // 먼 거리도 1초 안에 도착하도록 걸음 속도를 거리에 맞춰 올린다
      const speed = Math.max(WALK_SPEED, dist / 0.9);
      const step = Math.min(dist, speed * dt);
      this.golferPos.x += (dx / dist) * step;
      this.golferPos.z += (dz / dist) * step;
    } else {
      this.golferPos.copy(goal);
    }

    golfer.group.position.copy(this.golferPos);
    face(this.aimYaw);
    golfer.setAddressing(!walking);
    golfer.update(dt, walking);
  }

  private updateFlight(dt: number): void {
    const ctx = this.course
      ? { surfaceAt: this.course.surfaceAt, obstacles: this.course.obstacles, cup: { x: this.course.cup.x, z: this.course.cup.z } }
      : null;
    if (!ctx) return;

    const substeps = 2;
    const sub = dt / substeps;
    for (let i = 0; i < substeps; i += 1) {
      const events = this.ball.step(sub, ctx);
      for (const event of events) this.handleBallEvent(event);
      if (this.state !== 'flight') return;
    }

    // 궤적 잔상
    if (!this.ball.stopped && (this.ball.airborne || this.ball.horizontalSpeed > 1.2)) {
      const color = this.ball.airborne ? new THREE.Color(0xfff3c4) : new THREE.Color(0xbfefff);
      this.effects.trailPush(_vec.set(this.ball.x, this.ball.y, this.ball.z), color);
    }
  }

  private handleBallEvent(event: ReturnType<GolfBall['step']>[number]): void {
    switch (event.type) {
      case 'land':
      case 'bounce': {
        const surface = event.surface;
        const position = new THREE.Vector3(event.x, event.y, event.z);
        this.effects.divot(position, surface);
        this.effects.ring(position, 0.25, 1.6 + event.strength * 2, 0.45, 0xffffff);
        if (event.type === 'bounce') this.audio.bounce(0.3 + event.strength * 0.6);
        this.rig.setAim(this.aimYaw);
        if (event.type === 'land') {
          const distance = this.cupDistanceFrom(event.x, event.z);
          this.events.onLanding?.(distance);
        }
        break;
      }
      case 'obstacle':
        this.audio.bounce(0.4 + event.strength * 0.5);
        this.effects.divot(new THREE.Vector3(event.x, event.y, event.z), 'rough');
        break;
      case 'cup':
        this.holeOut();
        break;
      case 'water':
        this.penalty('water');
        break;
      case 'out':
        this.penalty('out');
        break;
      case 'stop':
        this.settle();
        break;
      default:
        break;
    }
  }

  private cupDistanceFrom(x: number, z: number): number {
    const cup = this.course?.cup;
    if (!cup) return 0;
    return Math.hypot(cup.x - x, cup.z - z);
  }

  private settle(): void {
    this.state = 'ready';
    this.meter.reset();
    this.lastSurface = this.surfaceAt(this.ball.x, this.ball.z);
    this.effects.tap(new THREE.Vector3(this.ball.x, this.ball.y, this.ball.z));
    this.effects.clearTrail();
    this.aimYaw = this.yawTo(this.ball.x, this.ball.z, this.course?.cup.x ?? 0, this.course?.cup.z ?? 0);
    this.refreshRecommended(this.ball.x, this.ball.z, true);
    this.rig.setDistance(10.5);

    if (this.strokes >= this.strokeLimit()) {
      this.pickUp();
      return;
    }

    const distance = this.cupDistanceFrom(this.ball.x, this.ball.z);
    this.events.onRest?.(distance, this.lastSurface, this.strokes);
    this.events.onStroke?.(this.strokes);
    this.emitGauge();
    this.emitClub();
    this.refreshPreview(true);
    this.broadcastState(true);
  }

  private strokeLimit(): number {
    return this.records[this.holeIndex].par + STROKE_LIMIT_EXTRA;
  }

  private pickUp(): void {
    this.records[this.holeIndex].strokes = this.strokes;
    this.state = 'between';
    this.betweenTimer = 2.0;
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
    this.sinkTimer = 2.0;
    this.records[this.holeIndex].strokes = Math.max(1, this.strokes);
    this.ball.vx = 0;
    this.ball.vz = 0;

    const label = verdictLabel(this.strokes, spec.par);
    this.audio.cup();
    if (this.strokes <= spec.par) this.audio.fanfare();
    this.effects.confetti(
      new THREE.Vector3(this.ball.x, this.ball.y + 0.1, this.ball.z),
      this.strokes <= spec.par,
    );
    this.effects.clearTrail();
    this.events.onHoled?.(this.holeIndex, this.strokes, label);
    this.meter.reset();
    this.emitGauge();
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
      const k = Math.min(1, dt * 8);
      this.ballVisual.position.x += (cup.x - this.ballVisual.position.x) * k;
      this.ballVisual.position.z += (cup.z - this.ballVisual.position.z) * k;
    }
    this.ballVisual.position.y = Math.max(-0.45, this.ballVisual.position.y - dt * 0.5);
    this.ballVisual.scale.setScalar(Math.max(0.42, this.ballVisual.scale.x - dt * 0.45));

    this.sinkTimer -= dt;
    if (this.sinkTimer <= 0) {
      this.state = 'between';
      this.betweenTimer = 0.2;
    }
  }

  private penalty(kind: 'water' | 'out'): void {
    this.strokes += 1;
    this.records[this.holeIndex].strokes = this.strokes;

    if (kind === 'water') {
      this.audio.water();
      this.effects.splash(new THREE.Vector3(this.ball.x, -0.05, this.ball.z));
    } else {
      this.audio.bounce(0.7);
    }

    this.placeBall(this.lastShotPos.x, this.lastShotPos.z);
    this.state = 'ready';
    this.meter.reset();
    this.aimYaw = this.yawTo(this.ball.x, this.ball.z, this.course?.cup.x ?? 0, this.course?.cup.z ?? 0);
    this.refreshRecommended(this.ball.x, this.ball.z, true);
    this.snapGolfer();
    this.rig.setDistance(10.5);

    this.events.onStroke?.(this.strokes);
    this.events.onPenalty?.(kind, this.strokes);
    this.emitGauge();
    this.emitClub();
    this.refreshPreview(true);
    this.broadcastState(true);

    if (this.strokes >= this.strokeLimit()) this.pickUp();
  }

  // ---------------------------------------------------------------- 조작 (조준/스윙)

  pointerDown(x: number, y: number, pointerId: number, button = 0): void {
    if (this.state === 'finished') return;
    if (button === 2 || this.pointers.size > 0) {
      this.pointers.set(pointerId, { x, y, role: 'orbit' });
      return;
    }
    this.pointers.set(pointerId, { x, y, role: 'aim' });
  }

  pointerMove(x: number, y: number, pointerId: number): void {
    const pointer = this.pointers.get(pointerId);
    if (!pointer) return;
    const dx = x - pointer.x;
    const dy = y - pointer.y;
    pointer.x = x;
    pointer.y = y;

    if (pointer.role === 'aim' && (this.state === 'ready' || this.state === 'gauge')) {
      this.aimYaw += dx * 0.0042;
      this.rig.setPitch(this.rig.pitch - dy * 0.0022);
      this.refreshPreview(true);
    } else {
      this.rig.orbitBy(dx, dy);
    }
  }

  pointerUp(pointerId: number): void {
    this.pointers.delete(pointerId);
  }

  pointerCancel(pointerId: number): void {
    this.pointers.delete(pointerId);
  }

  /** 좌우 조준 (버튼/키) */
  aimBy(delta: number): void {
    if (this.state !== 'ready' && this.state !== 'gauge') return;
    this.aimYaw += delta;
    this.refreshPreview(true);
  }

  setAimYaw(yaw: number): void {
    this.aimYaw = yaw;
    this.refreshPreview(true);
  }

  get aim(): number {
    return this.aimYaw;
  }

  /** 클럽 수동 변경 */
  setClub(id: ClubId): void {
    if (this.state !== 'ready' && this.state !== 'gauge') return;
    this.clubId = id;
    this.clubManual = id !== this.recommended;
    this.audio.ui();
    this.emitClub();
    this.emitGauge();
    this.refreshPreview(true);
  }

  /** 카메라 시점 순환 (백뷰 → 타겟뷰 → 탑뷰) */
  cycleView(): ViewMode {
    const index = VIEW_ORDER.indexOf(this.viewMode);
    this.viewMode = VIEW_ORDER[(index + 1) % VIEW_ORDER.length];
    this.audio.ui();
    this.events.onView?.(this.viewMode);
    return this.viewMode;
  }

  /** 특정 시점으로 지정 (검증/디버그용) */
  setView(mode: ViewMode): void {
    this.viewMode = mode;
    this.events.onView?.(this.viewMode);
  }

  get view(): ViewMode {
    return this.viewMode;
  }

  /** 현재 선택된 클럽 */
  get currentClub(): Club {
    return getClub(this.clubId);
  }

  get clubMax(): number {
    return clubMaxDistance(getClub(this.clubId), this.surfaceAt(this.ball.x, this.ball.z));
  }

  /** 목표(컴)까지 남은 거리로 필요한 파워 (1 초과 = 이 클럽으로 부족) */
  get neededPower(): number {
    return powerForDistance(
      getClub(this.clubId),
      this.surfaceAt(this.ball.x, this.ball.z),
      this.cupDistanceFrom(this.ball.x, this.ball.z),
    );
  }

  /** 현재 파워에서의 예상 비거리 (m) */
  estimateFor(power: number): number {
    return estimateDistance(getClub(this.clubId), this.surfaceAt(this.ball.x, this.ball.z), power);
  }

  get club(): Club {
    return getClub(this.clubId);
  }

  /**
   * 스윙 버튼/스페이스바 한 번 = 게이지 한 단계.
   * 1탭 시작 → 2탭 파워 → 3탭 임팩트.
   */
  swingTap(): void {
    if (this.state === 'ready') {
      if (this.meter.start()) {
        this.state = 'gauge';
        this.audio.ui();
        this.emitGauge();
        this.refreshPreview(true);
      }
      return;
    }
    if (this.state !== 'gauge') return;

    const plan = this.meter.tap();
    if (!plan) {
      this.audio.ui();
      this.emitGauge();
      return;
    }
    this.fireShot(plan);
  }

  private fireShot(plan: ShotPlan): void {
    const club = getClub(this.clubId);
    const surface = this.surfaceAt(this.ball.x, this.ball.z);
    this.lastSurface = surface;

    const speed =
      club.speed * (MIN_POWER_RATIO + (1 - MIN_POWER_RATIO) * plan.power) * liePenalty(surface);
    const yaw = this.aimYaw + plan.yawOffset;

    this.lastShotPos.set(this.ball.x, 0, this.ball.z);
    if (club.roll) {
      this.ball.launchRoll(Math.max(0.8, speed), yaw, surface);
    } else {
      this.ball.launch({ speed, loft: club.loft, yaw, curve: plan.curve }, surface);
    }

    this.strokes += 1;
    this.state = 'flight';
    this.meter.reset();
    this.hideAimGuide();

    const impact = new THREE.Vector3(this.ball.x, this.ball.y, this.ball.z);
    this.effects.spark(impact, plan.grade);
    this.audio.shot(club.id, plan.power);
    this.golfer?.playSwing(club.roll ? 0.6 : 0.92);

    this.rig.setDistance(14);
    this.events.onShot?.(plan, club);
    this.events.onStroke?.(this.strokes);
    this.events.onGauge?.(this.gaugeView());
    this.broadcastState(true);

    if (this.identity) {
      this.broadcast({ type: 'shot', id: this.identity.id, power: plan.power, club: club.id });
    }
  }

  // ---------------------------------------------------------------- 가이드

  private refreshRecommended(x: number, z: number, force = false): void {
    const distance = this.cupDistanceFrom(x, z);
    const surface = this.surfaceAt(x, z);
    this.lastSurface = surface;
    this.recommended = recommendClub(distance, surface);
    // 새 샷 준비 단계에서는 추천 클럽으로 초기화하고, 플레이어가 직접 고른 클럽은 존중한다
    if (force) this.clubManual = false;
    if (!this.clubManual) this.clubId = this.recommended;
    this.emitClub();
  }

  private currentLaunch(): { speed: number; loft: number; power: number; roll: boolean } {
    const club = getClub(this.clubId);
    let power = 1;
    if (this.state === 'gauge') {
      power =
        this.meter.phase === 'power'
          ? Math.max(0.12, Math.min(1, this.meter.value))
          : Math.max(0.12, Math.min(1, this.meter.power));
    }
    const speed =
      club.speed * (MIN_POWER_RATIO + (1 - MIN_POWER_RATIO) * power) * liePenalty(this.lastSurface);
    return { speed, loft: club.loft, power, roll: club.roll };
  }

  private refreshPreview(force: boolean): void {
    if (!this.course) return;
    if (this.state !== 'ready' && this.state !== 'gauge') {
      if (force) this.hideAimGuide();
      return;
    }

    const launch = this.currentLaunch();
    const ctx = {
      surfaceAt: this.course.surfaceAt,
      obstacles: this.course.obstacles,
      cup: { x: this.course.cup.x, z: this.course.cup.z },
    };
    const start = {
      x: this.ball.x,
      y: this.ball.y,
      z: this.ball.z,
      surface: this.lastSurface,
    };

    const preview = launch.roll
      ? previewShot(
          { speed: Math.max(1, launch.speed), loft: 0, yaw: this.aimYaw, curve: 0 },
          ctx,
          start,
          { rolling: true, speed: Math.max(1, launch.speed), maxSeconds: 6 },
        )
      : previewShot(
          { speed: launch.speed, loft: launch.loft, yaw: this.aimYaw, curve: 0 },
          ctx,
          start,
        );
    this.preview = preview;

    // 점선 궤적 — 짧은 퍼트에서 점이 뭉치지 않도록 경로 길이에 맞춰 간격·크기를 조절한다
    const points = preview.points;
    let pathLen = 0;
    for (let i = 1; i < points.length; i += 1) {
      pathLen += Math.hypot(points[i].x - points[i - 1].x, points[i].z - points[i - 1].z);
    }
    const spacing = Math.max(0.75, Math.min(2.6, pathLen / Math.max(1, AIM_DOT_COUNT - 1)));
    const dotScale = Math.min(1, Math.max(0.42, spacing / 1.7));
    let shown = 0;
    let travelled = 0;
    let nextAt = 0;
    for (let i = 0; i < points.length && shown < AIM_DOT_COUNT; i += 1) {
      if (i > 0) {
        travelled += Math.hypot(points[i].x - points[i - 1].x, points[i].z - points[i - 1].z);
      }
      if (travelled + 1e-6 < nextAt) continue;
      const dot = this.aimDots[shown];
      dot.visible = true;
      dot.position.set(points[i].x, Math.max(0.035, points[i].y + 0.02), points[i].z);
      dot.scale.setScalar(Math.max(0.34, dotScale * (1 - shown / (AIM_DOT_COUNT * 2.4))));
      shown += 1;
      nextAt = travelled + spacing;
    }
    for (let i = shown; i < AIM_DOT_COUNT; i += 1) {
      this.aimDots[i].visible = false;
    }

    if (preview.landing) {
      this.aimRing.visible = true;
      this.aimRing.position.set(preview.landing.x, 0.04, preview.landing.z);
    } else {
      this.aimRing.visible = false;
    }

    if (preview.rest) {
      this.aimLandingRing.visible = true;
      this.aimLandingRing.position.set(preview.rest.x, 0.045, preview.rest.z);
    } else {
      this.aimLandingRing.visible = false;
    }

    // 바닥 점선: 공 → 착지점(또는 정지점)
    const target = preview.rest ?? preview.landing;
    const forwardX = Math.sin(this.aimYaw);
    const forwardZ = -Math.cos(this.aimYaw);
    const reach = target
      ? Math.hypot(target.x - this.ball.x, target.z - this.ball.z)
      : 40;
    const dashCount = Math.min(this.aimDashes.length, Math.max(0, Math.floor((reach - 1.5) / 2.1)));
    for (let i = 0; i < this.aimDashes.length; i += 1) {
      const dash = this.aimDashes[i];
      if (i >= dashCount) {
        dash.visible = false;
        continue;
      }
      const step = 1.8 + i * 2.1;
      dash.visible = true;
      dash.position.set(this.ball.x + forwardX * step, 0.055, this.ball.z + forwardZ * step);
      dash.rotation.y = this.aimYaw;
      const scale = 1 - (i / this.aimDashes.length) * 0.45;
      dash.scale.set(scale, 1, scale);
    }

    this.aimGuide.visible = true;
    aimDotMaterial.opacity = preview.water ? 0.5 : 0.98;
    aimDashMaterial.color.setHex(preview.water ? 0xff8f8f : 0xfff1c4);
  }

  private hideAimGuide(): void {
    this.aimGuide.visible = false;
    this.aimRing.visible = false;
    this.aimLandingRing.visible = false;
    this.aimDots.forEach((dot) => {
      dot.visible = false;
    });
    this.aimDashes.forEach((dash) => {
      dash.visible = false;
    });
  }

  private gaugeView(): GaugeView {
    const distance = this.cupDistanceFrom(this.ball.x, this.ball.z);
    const power = this.state === 'gauge' ? this.meter.power : 0;
    const live = this.state === 'gauge' && this.meter.phase === 'power' ? this.meter.value : power;
    return {
      phase: this.meter.phase,
      value: this.meter.value,
      power: this.meter.power,
      hint: this.meter.hint,
      club: this.clubId,
      distance,
      clubMax: this.clubMax,
      powerPercent: Math.round(Math.max(0, Math.min(1, live)) * 100),
      estimate: this.estimateFor(live),
      neededPower: this.neededPower,
    };
  }

  private emitGauge(): void {
    this.events.onGauge?.(this.gaugeView());
  }

  private emitClub(): void {
    this.events.onClub?.(
      this.clubId,
      this.recommended,
      this.cupDistanceFrom(this.ball.x, this.ball.z),
      this.lastSurface,
    );
  }

  // ---------------------------------------------------------------- 디버그/검증

  /** 화면 입력 없이 바로 샷 (검증 스크립트용) */
  debugFire(power: number, error = 0, clubId?: ClubId): void {
    if (this.state !== 'ready') return;
    if (clubId) this.clubId = clubId;
    this.state = 'gauge';
    this.fireShot({
      grade: Math.abs(error) <= 0.045 ? 'perfect' : Math.abs(error) <= 0.105 ? 'good' : 'miss',
      power,
      rawPower: power,
      error,
      yawOffset: -error * 0.32,
      curve: -error * 5.2,
      powerMul: 1,
    });
  }

  debugState(): {
    state: GameState;
    hole: number;
    strokes: number;
    pos: [number, number, number];
    cup: [number, number];
    surface: SurfaceKind;
    club: ClubId;
    aim: number;
    distance: number;
    view: ViewMode;
  } {
    const cup = this.course?.cup ?? new THREE.Vector3();
    return {
      state: this.state,
      hole: this.holeIndex,
      strokes: this.strokes,
      pos: [this.ball.x, this.ball.y, this.ball.z],
      cup: [cup.x, cup.z],
      surface: this.surfaceAt(this.ball.x, this.ball.z),
      club: this.clubId,
      aim: this.aimYaw,
      distance: this.cupDistanceFrom(this.ball.x, this.ball.z),
      view: this.viewMode,
    };
  }

  /** 검증용: 골퍼·공 위치 (샷 후 골퍼가 제자리에 있는지 확인) */
  debugGolfer(): { x: number; z: number; ballX: number; ballZ: number; facing: number } {
    return {
      x: this.golferPos.x,
      z: this.golferPos.z,
      ballX: this.ball.x,
      ballZ: this.ball.z,
      facing: this.golferFacing,
    };
  }

  /** 검증용: 선택 클럽의 최대 비거리·필요 파워·예상 비거리 */
  debugShotInfo(): { club: ClubId; clubMax: number; neededPower: number; distance: number; estimate50: number } {
    return {
      club: this.clubId,
      clubMax: this.clubMax,
      neededPower: this.neededPower,
      distance: this.cupDistanceFrom(this.ball.x, this.ball.z),
      estimate50: this.estimateFor(0.5),
    };
  }

  /** 검증용: 지금 공 상태(비행/굴림)를 직접 읽는다 */
  debugBall(): { x: number; y: number; z: number; stopped: boolean; airborne: boolean; surface: SurfaceKind } {
    return {
      x: this.ball.x,
      y: this.ball.y,
      z: this.ball.z,
      stopped: this.ball.stopped,
      airborne: this.ball.airborne,
      surface: this.ball.surface,
    };
  }

  /** 검증용: 목표 지점을 향해 조준 */
  debugAimAt(x: number, z: number): void {
    this.aimYaw = this.yawTo(this.ball.x, this.ball.z, x, z);
    this.refreshPreview(true);
  }

  /** 검증용: 지정한 파워로 예상 궤적 (봇/시뮬레이션) */
  debugPreviewAt(power: number): TrajectoryPreview | null {
    if (!this.course) return null;
    const club = getClub(this.clubId);
    const clamped = Math.max(0.05, Math.min(1, power));
    const speed =
      club.speed * (MIN_POWER_RATIO + (1 - MIN_POWER_RATIO) * clamped) * liePenalty(this.lastSurface);
    const ctx = {
      surfaceAt: this.course.surfaceAt,
      obstacles: this.course.obstacles,
      cup: { x: this.course.cup.x, z: this.course.cup.z },
    };
    const start = { x: this.ball.x, y: this.ball.y, z: this.ball.z, surface: this.lastSurface };
    if (club.roll) {
      const rollSpeed = Math.max(0.8, speed);
      return previewShot({ speed: rollSpeed, loft: 0, yaw: this.aimYaw, curve: 0 }, ctx, start, {
        rolling: true,
        speed: rollSpeed,
      });
    }
    return previewShot({ speed, loft: club.loft, yaw: this.aimYaw, curve: 0 }, ctx, start);
  }

  /** 검증용: 예상 궤적 */
  debugPreview(): TrajectoryPreview | null {
    this.refreshPreview(true);
    return this.preview;
  }

  /** 검증용: 스윙 게이지를 직접 조작 */
  debugGauge(): SwingMeter {
    return this.meter;
  }

  /** 검증용: 코스 지면/거리 */
  debugSurfaceAt(x: number, z: number): SurfaceKind {
    return this.surfaceAt(x, z);
  }

  // ---------------------------------------------------------------- 네트워크

  sendEmoji(emoji: string): void {
    this.effects.emoji(
      new THREE.Vector3(this.ball.x, this.ball.y, this.ball.z),
      emoji,
    );
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
    return {
      id: this.identity.id,
      name: this.identity.name,
      color: this.identity.color,
      hole: this.holeIndex,
      pos: [round3(this.ball.x), round3(this.ball.y), round3(this.ball.z)],
      strokes: this.strokes,
      total: this.currentTotal(),
      done: this.state === 'finished',
      moving: this.state === 'flight' || this.state === 'sinking',
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
        const position = this.remotes.positionOf(message.id) ?? new THREE.Vector3(0, 0, 0);
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

  get stateName(): GameState {
    return this.state;
  }

  cupDistance(): number {
    return this.cupDistanceFrom(this.ball.x, this.ball.z);
  }

  get surface(): SurfaceKind {
    return this.lastSurface;
  }

  get recommendedClub(): ClubId {
    return this.recommended;
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

  /** 테스트용: 마지막 샷 위치 */
  get lastShot(): THREE.Vector3 {
    return this.lastShotPos;
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
