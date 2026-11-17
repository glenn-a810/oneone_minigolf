import {
  AIR_DRAG,
  BALL_RADIUS,
  CUP_ATTRACT_RADIUS,
  CUP_RADIUS,
  GRAVITY,
  WIND,
} from './constants';
import type { SurfaceInfo, SurfaceKind } from './types';

/** 지면 조회 함수: 좌표 → 지면 종류/높이 */
export type SurfaceFn = (x: number, z: number) => SurfaceInfo;

export interface BallObstacle {
  x: number;
  z: number;
  r: number;
}

export interface LaunchSpec {
  /** 발사 속도 (m/s) */
  speed: number;
  /** 로프트 (도) */
  loft: number;
  /** 조준 방향 (rad, 0 = -z, 양수 = 오른쪽) */
  yaw: number;
  /** 탄도 휘어짐 (-1~1, 양수 = 오른쪽) */
  curve?: number;
}

export type BallEvent =
  | { type: 'land'; x: number; y: number; z: number; surface: SurfaceKind; strength: number }
  | { type: 'bounce'; x: number; y: number; z: number; surface: SurfaceKind; strength: number }
  | { type: 'stop'; x: number; y: number; z: number; surface: SurfaceKind }
  | { type: 'water'; x: number; y: number; z: number }
  | { type: 'out'; x: number; y: number; z: number }
  | { type: 'cup'; x: number; y: number; z: number }
  | { type: 'obstacle'; x: number; y: number; z: number; strength: number };

export interface StepContext {
  surfaceAt: SurfaceFn;
  obstacles?: BallObstacle[];
  cup?: { x: number; z: number };
}

interface SurfacePhysics {
  /** 지면 높이 보정 */
  height: number;
  /** 굴림 마찰 감속 (m/s²) */
  friction: number;
  /** 튕김 계수 */
  restitution: number;
  /** 수평 속도 유지율 */
  keep: number;
}

const SURFACE: Record<SurfaceKind, SurfacePhysics> = {
  tee: { height: 0, friction: 6.4, restitution: 0.3, keep: 0.56 },
  fairway: { height: 0, friction: 6.6, restitution: 0.3, keep: 0.55 },
  fringe: { height: 0.005, friction: 2.7, restitution: 0.26, keep: 0.7 },
  green: { height: 0.01, friction: 1.55, restitution: 0.22, keep: 0.72 },
  rough: { height: 0, friction: 11, restitution: 0.18, keep: 0.42 },
  bunker: { height: 0.005, friction: 18, restitution: 0.05, keep: 0.28 },
  water: { height: -0.14, friction: 6, restitution: 0.05, keep: 0.3 },
  out: { height: -0.4, friction: 6, restitution: 0.1, keep: 0.4 },
};

/** 지면 종류의 물리 파라미터 */
export function surfacePhysics(kind: SurfaceKind): SurfacePhysics {
  return SURFACE[kind];
}

/**
 * 골프공 시뮬레이터.
 *
 * - 공중: 로프트·중력·공기저항·바람·훅/슬라이스(곡률)
 * - 착지: 지면별 튕김 → 굴림(지면별 마찰)
 * - 워터 해저드 / 아웃(섬 밖) / 컵 인
 *
 * 프레임레이트와 무관하게 같은 결과가 나오도록 호출부에서 고정 dt 로 돌린다.
 */
export class GolfBall {
  x = 0;
  y = BALL_RADIUS;
  z = 0;
  vx = 0;
  vy = 0;
  vz = 0;

  airborne = false;
  rolling = false;
  stopped = true;
  surface: SurfaceKind = 'fairway';
  elapsed = 0;

  private curveAccel = 0;
  private rightX = 1;
  private rightZ = 0;
  private restTimer = 0;
  private hazard = false;

  /** 공중/굴림 발사 */
  launch(spec: LaunchSpec, currentSurface: SurfaceKind = 'fairway'): void {
    const loft = (spec.loft * Math.PI) / 180;
    const cosL = Math.cos(loft);
    const sinL = Math.sin(loft);
    const forwardX = Math.sin(spec.yaw);
    const forwardZ = -Math.cos(spec.yaw);

    this.vx = forwardX * spec.speed * cosL;
    this.vz = forwardZ * spec.speed * cosL;
    this.vy = spec.speed * sinL;
    this.curveAccel = (spec.curve ?? 0) * 6.2;
    this.rightX = Math.cos(spec.yaw);
    this.rightZ = Math.sin(spec.yaw);

    this.airborne = loft > 0.001;
    this.rolling = !this.airborne;
    this.stopped = false;
    this.elapsed = 0;
    this.restTimer = 0;
    this.hazard = false;
    this.surface = currentSurface;
    if (this.airborne) {
      this.y = Math.max(this.y, SURFACE[currentSurface].height + BALL_RADIUS + 0.002);
    }
  }

  /** 굴림 발사 (퍼터) */
  launchRoll(speed: number, yaw: number, currentSurface: SurfaceKind = 'green'): void {
    this.vx = Math.sin(yaw) * speed;
    this.vz = -Math.cos(yaw) * speed;
    this.vy = 0;
    this.curveAccel = 0;
    this.airborne = false;
    this.rolling = true;
    this.stopped = false;
    this.elapsed = 0;
    this.restTimer = 0;
    this.hazard = false;
    this.surface = currentSurface;
    this.y = SURFACE[currentSurface].height + BALL_RADIUS;
  }

  get speed(): number {
    return Math.hypot(this.vx, this.vy, this.vz);
  }

  get horizontalSpeed(): number {
    return Math.hypot(this.vx, this.vz);
  }

  step(dt: number, ctx: StepContext): BallEvent[] {
    const events: BallEvent[] = [];
    if (this.stopped || dt <= 0) return events;

    this.elapsed += dt;

    if (this.airborne) {
      this.stepAir(dt, ctx, events);
    } else if (this.rolling) {
      this.stepRoll(dt, ctx, events);
    }

    return events;
  }

  private stepAir(dt: number, ctx: StepContext, events: BallEvent[]): void {
    // 중력 + 공기저항 + 아주 약한 바람 + 훅/슬라이스
    const drag = AIR_DRAG * this.speed;
    const curve = this.curveAccel * Math.exp(-this.elapsed / 1.15);

    this.vx += (-this.vx * drag + WIND.x + this.rightX * curve) * dt;
    this.vy += (-GRAVITY - this.vy * drag) * dt;
    this.vz += (-this.vz * drag + WIND.z + this.rightZ * curve) * dt;

    const prevX = this.x;
    const prevY = this.y;
    const prevZ = this.z;

    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.z += this.vz * dt;

    // 나무/바위 충돌 (낮게 날 때만)
    if (ctx.obstacles && this.y < 2.4) {
      for (const obstacle of ctx.obstacles) {
        const dx = this.x - obstacle.x;
        const dz = this.z - obstacle.z;
        const dist = Math.hypot(dx, dz);
        if (dist > 0.0001 && dist < obstacle.r + BALL_RADIUS) {
          const nx = dx / dist;
          const nz = dz / dist;
          this.x = obstacle.x + nx * (obstacle.r + BALL_RADIUS);
          this.z = obstacle.z + nz * (obstacle.r + BALL_RADIUS);
          const dot = this.vx * nx + this.vz * nz;
          this.vx = (this.vx - 2 * dot * nx) * 0.45;
          this.vz = (this.vz - 2 * dot * nz) * 0.45;
          this.vy *= 0.7;
          events.push({
            type: 'obstacle',
            x: this.x,
            y: this.y,
            z: this.z,
            strength: Math.min(1, Math.hypot(this.vx, this.vz) / 20),
          });
          break;
        }
      }
    }

    const info = ctx.surfaceAt(this.x, this.z);
    const groundY = SURFACE[info.kind].height + BALL_RADIUS;

    if (info.kind === 'water') {
      const waterTop = SURFACE.water.height + BALL_RADIUS * 0.5;
      if (this.y <= waterTop) {
        this.x = this.x;
        this.y = waterTop;
        this.vx = this.vx * 0.2;
        this.vz = this.vz * 0.2;
        this.vy = 0;
        this.stopped = true;
        this.airborne = false;
        this.surface = 'water';
        this.hazard = true;
        events.push({ type: 'water', x: this.x, y: this.y, z: this.z });
        return;
      }
    }

    if (this.y <= groundY && this.vy <= 0) {
      const physics = SURFACE[info.kind];
      this.y = groundY;
      this.surface = info.kind;

      if (info.kind === 'out') {
        this.stopped = true;
        this.airborne = false;
        events.push({ type: 'out', x: this.x, y: this.y, z: this.z });
        return;
      }

      const impact = Math.abs(this.vy);
      // 내리꽂히는 각이 클수록 잔디에 박혀 앞으로 덜 굴러간다 (백스핀 효과)
      const descent = impact / Math.max(1.2, this.horizontalSpeed);
      const bite = Math.min(0.5, descent * 0.55);
      this.vy = impact * physics.restitution;
      this.vx *= physics.keep * (1 - bite);
      this.vz *= physics.keep * (1 - bite);

      const bouncy = this.vy > 1.05;
      events.push(
        bouncy
          ? {
              type: 'bounce',
              x: this.x,
              y: this.y,
              z: this.z,
              surface: info.kind,
              strength: Math.min(1, impact / 9),
            }
          : {
              type: 'land',
              x: this.x,
              y: this.y,
              z: this.z,
              surface: info.kind,
              strength: Math.min(1, impact / 9),
            },
      );

      // 착지 후 굴림으로 전환
      this.airborne = false;
      this.rolling = true;
      this.vy = 0;
      void prevX;
      void prevY;
      void prevZ;

      if (this.horizontalSpeed < 0.12) {
        this.finish(events);
      }
    }
  }

  private stepRoll(dt: number, ctx: StepContext, events: BallEvent[]): void {
    const info = ctx.surfaceAt(this.x, this.z);
    this.surface = info.kind;
    const physics = SURFACE[info.kind];

    if (info.kind === 'water') {
      this.stopped = true;
      this.rolling = false;
      this.hazard = true;
      this.y = SURFACE.water.height + BALL_RADIUS * 0.5;
      events.push({ type: 'water', x: this.x, y: this.y, z: this.z });
      return;
    }
    if (info.kind === 'out') {
      this.stopped = true;
      this.rolling = false;
      events.push({ type: 'out', x: this.x, y: this.y, z: this.z });
      return;
    }

    // 지면 높이에 맞춰 공을 붙인다
    this.y = physics.height + BALL_RADIUS;

    // 컵 근처 빨림
    if (ctx.cup) {
      const dx = ctx.cup.x - this.x;
      const dz = ctx.cup.z - this.z;
      const dist = Math.hypot(dx, dz);
      const speed = this.horizontalSpeed;

      if (dist < CUP_ATTRACT_RADIUS && dist > 0.0001 && speed < 3.6) {
        const pull = 7.2 * (1 - dist / CUP_ATTRACT_RADIUS);
        this.vx += (dx / dist) * pull * dt;
        this.vz += (dz / dist) * pull * dt;
      }

      if (dist < CUP_RADIUS && speed < 2.4) {
        this.stopped = true;
        this.rolling = false;
        this.vx = 0;
        this.vz = 0;
        events.push({ type: 'cup', x: this.x, y: this.y, z: this.z });
        return;
      }
    }

    // 나무/바위와 부딪히면 반사
    if (ctx.obstacles) {
      for (const obstacle of ctx.obstacles) {
        const dx = this.x - obstacle.x;
        const dz = this.z - obstacle.z;
        const dist = Math.hypot(dx, dz);
        if (dist > 0.0001 && dist < obstacle.r + BALL_RADIUS) {
          const nx = dx / dist;
          const nz = dz / dist;
          this.x = obstacle.x + nx * (obstacle.r + BALL_RADIUS);
          this.z = obstacle.z + nz * (obstacle.r + BALL_RADIUS);
          const dot = this.vx * nx + this.vz * nz;
          this.vx = (this.vx - 2 * dot * nx) * 0.42;
          this.vz = (this.vz - 2 * dot * nz) * 0.42;
          events.push({
            type: 'obstacle',
            x: this.x,
            y: this.y,
            z: this.z,
            strength: Math.min(1, this.horizontalSpeed / 18),
          });
          break;
        }
      }
    }

    // 마찰
    const speed = this.horizontalSpeed;
    if (speed > 0.0001) {
      const decel = physics.friction * dt;
      const next = Math.max(0, speed - decel);
      const scale = next / speed;
      this.vx *= scale;
      this.vz *= scale;
    }

    this.x += this.vx * dt;
    this.z += this.vz * dt;

    if (this.horizontalSpeed < 0.16) {
      this.restTimer += dt;
      if (this.restTimer > 0.18) this.finish(events);
    } else {
      this.restTimer = 0;
    }
  }

  private finish(events: BallEvent[]): void {
    this.stopped = true;
    this.rolling = false;
    this.airborne = false;
    this.vx = 0;
    this.vz = 0;
    this.vy = 0;
    events.push({ type: 'stop', x: this.x, y: this.y, z: this.z, surface: this.surface });
  }

  get inHazard(): boolean {
    return this.hazard;
  }
}

// ---------------------------------------------------------------- 예측(가이드)

export interface TrajectoryPreview {
  points: Array<{ x: number; y: number; z: number }>;
  landing: { x: number; z: number } | null;
  rest: { x: number; z: number } | null;
  restSurface: SurfaceKind;
  holed: boolean;
  water: boolean;
  out: boolean;
}

/** 화면 가이드용: 발사 값을 그대로 시뮬레이션해 궤적/착지점/정지점을 구한다. */
export function previewShot(
  spec: LaunchSpec,
  ctx: StepContext,
  start: { x: number; y: number; z: number; surface: SurfaceKind },
  options: { maxSeconds?: number; rolling?: boolean; speed?: number } = {},
): TrajectoryPreview {
  const maxSeconds = options.maxSeconds ?? 7;
  const ball = new GolfBall();
  ball.x = start.x;
  ball.y = start.y;
  ball.z = start.z;
  ball.surface = start.surface;
  if (options.rolling) ball.launchRoll(options.speed ?? spec.speed, spec.yaw, start.surface);
  else ball.launch(spec, start.surface);

  const points: Array<{ x: number; y: number; z: number }> = [{ x: ball.x, y: ball.y, z: ball.z }];
  let landing: { x: number; z: number } | null = null;
  let holed = false;
  let water = false;
  let out = false;

  const dt = 1 / 60;
  let elapsed = 0;
  let sampleTimer = 0;

  while (elapsed < maxSeconds && !ball.stopped) {
    const events = ball.step(dt, ctx);
    elapsed += dt;
    sampleTimer += dt;
    if (sampleTimer >= 0.05) {
      sampleTimer = 0;
      points.push({ x: ball.x, y: ball.y, z: ball.z });
    }
    for (const event of events) {
      if (event.type === 'land' || event.type === 'bounce') {
        if (!landing) landing = { x: event.x, z: event.z };
      } else if (event.type === 'cup') {
        holed = true;
      } else if (event.type === 'water') {
        water = true;
      } else if (event.type === 'out') {
        out = true;
      }
    }
  }

  points.push({ x: ball.x, y: ball.y, z: ball.z });

  return {
    points,
    landing,
    rest: ball.stopped ? { x: ball.x, z: ball.z } : null,
    restSurface: ball.surface,
    holed,
    water,
    out,
  };
}
