import { GAUGE_IMPACT_SECONDS, GAUGE_POWER_SECONDS } from './constants';

/**
 * 타이밍 스윙 게이지 (3-탭).
 *
 * 1) `스윙!` — 게이지가 왼쪽(0%)에서 오른쪽(100%)으로 부드럽게 차오른다.
 * 2) `파워!` — 차오르던 지점에서 탭하면 그 지점이 파워로 확정된다.
 * 3) `임팩트!` — 게이지가 다시 왼쪽 임팩트 존(0%)으로 돌아온다. 존 한가운데를 맞추면 Perfect,
 *    살짝 어긋나면 Good(훅/슬라이스 살짝), 크게 어긋나면 Miss(방향·비거리 손실).
 */

export type GaugePhase = 'idle' | 'power' | 'impact' | 'done';
export type ShotGrade = 'perfect' | 'good' | 'miss';

export interface ShotPlan {
  grade: ShotGrade;
  /** 보정이 끝난 최종 파워 (0~1) */
  power: number;
  /** 파워 확정 시점의 값 */
  rawPower: number;
  /** 임팩트 타이밍 오차 (양수 = 빠름, 음수 = 늦음) */
  error: number;
  /** 방향 보정 (rad, 양수 = 오른쪽) */
  yawOffset: number;
  /** 탄도 휘어짐 (-1~1, 양수 = 오른쪽으로 슬라이스) */
  curve: number;
  /** 파워 보정 배율 */
  powerMul: number;
}

/** Perfect 존 (게이지 값 기준 ±) */
export const PERFECT_WINDOW = 0.045;
/** Good 존 */
export const GOOD_WINDOW = 0.105;
/** Miss 로 처리되는 최대 오차 */
export const MISS_WINDOW = 0.19;
/** 이 지점을 넘도록 탭하지 않으면 스윙이 취소된다 */
export const IMPACT_LIMIT = 0.24;

export interface SwingUpdate {
  changed: boolean;
  /** 탭 없이 임팩트 존을 지나쳐 스윙이 취소됨 */
  timedOut: boolean;
  plan: ShotPlan | null;
}

/** 한 번의 샷 결과를 실제 발사 값으로 바꾼다. */
export function planShot(rawPower: number, error: number): ShotPlan {
  const abs = Math.abs(error);
  const grade: ShotGrade = abs <= PERFECT_WINDOW ? 'perfect' : abs <= GOOD_WINDOW ? 'good' : 'miss';
  const powerMul = grade === 'perfect' ? 1 : grade === 'good' ? 0.955 : 0.87;
  // 빠르면 훅(왼쪽), 늦으면 슬라이스(오른쪽)
  const direction = -error;
  const perfect = grade === 'perfect';
  return {
    grade,
    rawPower,
    power: Math.max(0.08, Math.min(1, rawPower * powerMul)),
    error,
    yawOffset: perfect ? 0 : direction * 0.32,
    curve: perfect ? 0 : direction * 5.2,
    powerMul,
  };
}

export class SwingMeter {
  phase: GaugePhase = 'idle';
  /** 현재 게이지 위치 (0~1, 임팩트 존 아래로는 음수) */
  value = 0;
  /** 확정된 파워 */
  power = 0;
  private lastPlan: ShotPlan | null = null;

  get active(): boolean {
    return this.phase === 'power' || this.phase === 'impact';
  }

  get result(): ShotPlan | null {
    return this.lastPlan;
  }

  /** 스윙 시작 (1탭) */
  start(): boolean {
    if (this.phase === 'power' || this.phase === 'impact') return false;
    this.phase = 'power';
    this.value = 0;
    this.power = 0;
    this.lastPlan = null;
    return true;
  }

  /**
   * 탭 처리.
   * - 파워 단계면 파워 확정 후 임팩트 단계로
   * - 임팩트 단계면 샷 결과를 돌려준다
   */
  tap(): ShotPlan | null {
    if (this.phase === 'power') {
      this.power = Math.max(0.12, Math.min(1, this.value));
      this.value = this.power;
      this.phase = 'impact';
      return null;
    }
    if (this.phase === 'impact') {
      const plan = planShot(this.power, this.value);
      this.lastPlan = plan;
      this.phase = 'done';
      return plan;
    }
    return null;
  }

  update(dt: number): SwingUpdate {
    if (this.phase === 'power') {
      this.value += dt / GAUGE_POWER_SECONDS;
      if (this.value >= 1) {
        this.value = 1;
        this.power = 1;
        this.phase = 'impact';
        return { changed: true, timedOut: false, plan: null };
      }
      return { changed: true, timedOut: false, plan: null };
    }

    if (this.phase === 'impact') {
      this.value -= dt / GAUGE_IMPACT_SECONDS;
      if (this.value <= -IMPACT_LIMIT) {
        this.value = 0;
        this.phase = 'idle';
        this.power = 0;
        return { changed: true, timedOut: true, plan: null };
      }
      return { changed: true, timedOut: false, plan: null };
    }

    return { changed: false, timedOut: false, plan: null };
  }

  reset(): void {
    this.phase = 'idle';
    this.value = 0;
    this.power = 0;
    this.lastPlan = null;
  }

  get hint(): string {
    if (this.phase === 'idle') return '스윙! 을 눌러 게이지를 시작하세요';
    if (this.phase === 'power') return '원하는 파워에서 다시 탭!';
    if (this.phase === 'impact') return '임팩트 존에서 탭!';
    return '샷!';
  }
}
