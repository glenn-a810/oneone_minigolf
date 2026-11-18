import { GAUGE_IMPACT_SECONDS, GAUGE_POWER_SECONDS } from './constants';

/**
 * 홀드 & 릴리즈 스윙 게이지 (2단계).
 *
 * 1) `파워` — 스윙 버튼(또는 게이지)을 마우스로 누르거나 손가락으로 누르고 있는 동안
 *    게이지가 0% → 100% 로 차오르고, 100%에 닿으면 다시 0% 쪽으로 내려간다(왕복).
 *    **손을 떼는 순간(pointerup)의 게이지 위치가 파워로 확정된다.**
 * 2) `임팩트` — 파워가 확정되면 게이지가 왼쪽 임팩트 존(0%)으로 돌아오고,
 *    사용자가 타이밍에 맞춰 한 번 탭하면 정확도가 결정되며 샷이 나간다.
 *    존 한가운데를 맞추면 Perfect, 살짝 어긋나면 Good(훅/슬라이스), 크게 어긋나면 Miss.
 */

export type GaugePhase = 'idle' | 'power' | 'impact' | 'done';
export type ShotGrade = 'perfect' | 'good' | 'miss';

/** 게이지를 떼는 순간 확정되는 최소 파워 (너무 살짝 차올라도 이만큼은 나간다) */
export const MIN_POWER = 0.12;
/** 이보다 짧게 눌렀다 떼면 실수 탭으로 보고 스윙을 취소한다 (초) */
export const MIN_HOLD_SECONDS = 0.14;

/** Perfect 존 (게이지 값 기준 ±) */
export const PERFECT_WINDOW = 0.045;
/** Good 존 */
export const GOOD_WINDOW = 0.105;
/** Miss 로 처리되는 최대 오차 */
export const MISS_WINDOW = 0.19;
/** 이 지점을 넘도록 탭하지 않으면 스윙이 취소된다 */
export const IMPACT_LIMIT = 0.24;

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
  /** 파워 게이지가 움직이는 방향 (1 = 차오르는 중, -1 = 100% 뒤 내려오는 중) */
  direction: 1 | -1 = 1;
  /** 이번에 누르고 있던 시간 (초) */
  heldFor = 0;
  private lastPlan: ShotPlan | null = null;

  get active(): boolean {
    return this.phase === 'power' || this.phase === 'impact';
  }

  get result(): ShotPlan | null {
    return this.lastPlan;
  }

  /** 손을 떼기 전, 지금 확정될 파워 (0~1) */
  get livePower(): number {
    return Math.max(MIN_POWER, Math.min(1, this.value));
  }

  /** 스윙 시작 — 버튼/게이지를 누른 순간 (홀드 시작) */
  beginHold(): boolean {
    if (this.phase === 'power' || this.phase === 'impact') return false;
    this.phase = 'power';
    this.value = 0;
    this.power = 0;
    this.direction = 1;
    this.heldFor = 0;
    this.lastPlan = null;
    return true;
  }

  /**
   * 손을 뗀 순간 (pointerup / keyup).
   * - `power`: 지금 게이지 위치가 파워로 확정되고 임팩트(정확도) 단계로 넘어간다
   * - `tooShort`: 너무 짧은 실수 탭 → 스윙 취소
   * - `null`: 파워 단계가 아니면 아무 일도 없다
   */
  release(): 'power' | 'tooShort' | null {
    if (this.phase !== 'power') return null;
    if (this.heldFor < MIN_HOLD_SECONDS) {
      this.reset();
      return 'tooShort';
    }
    this.power = this.livePower;
    this.value = this.power;
    this.phase = 'impact';
    return 'power';
  }

  /** 누르고 있던 스윙을 취소한다 (pointercancel · 창 포커스 아웃 등) */
  cancelHold(): boolean {
    if (this.phase !== 'power') return false;
    this.reset();
    return true;
  }

  /** 임팩트(정확도) 타이밍 탭 */
  tap(): ShotPlan | null {
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
      // 누르고 있는 동안 0% → 100% 로 차오르고, 100%에 닿으면 다시 내려오며 왕복한다
      this.heldFor += dt;
      this.value += (this.direction * dt) / GAUGE_POWER_SECONDS;
      if (this.value >= 1) {
        this.value = 1;
        this.direction = -1;
      } else if (this.value <= 0 && this.direction < 0) {
        this.value = 0;
        this.direction = 1;
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
    this.direction = 1;
    this.heldFor = 0;
    this.lastPlan = null;
  }

  get hint(): string {
    if (this.phase === 'idle') return '스윙! 을 꾹 누르면 파워가 차요';
    if (this.phase === 'power') {
      if (this.value >= 0.999) return '최대 파워! 떼면 확정돼요';
      if (this.direction < 0) return '100% 지나 내려오는 중 · 떼면 확정';
      return '꾹 누른 채 원하는 파워에서 떼세요';
    }
    if (this.phase === 'impact') return '임팩트 존에서 탭!';
    return '샷!';
  }
}
