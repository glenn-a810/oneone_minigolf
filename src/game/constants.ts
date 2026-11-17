/** 게임 전역 상수 — 물리/조작감 튜닝 값은 여기서 한 번에 조정한다. */

export const BALL_RADIUS = 0.13;
/** 컵 판정 반경 (공 중심 기준, m) */
export const CUP_RADIUS = 0.27;
/** 컵 근처에서 공이 살짝 빨려 들어가는 반경 */
export const CUP_ATTRACT_RADIUS = 0.82;

/** 최대 파워 속도 (m/s) */
export const MAX_SHOT_SPEED = 11;
/** 최소 파워 속도 (m/s) */
export const MIN_SHOT_SPEED = 0.8;
/** 슬링샷 최대 드래그 거리 (px) */
export const AIM_MAX_DRAG_PX = 160;

/** 홀당 최대 타수 = Par + 이 값 */
export const STROKE_LIMIT_EXTRA = 4;

export const BALL_COLORS = [
  { name: '코랄', hex: '#ff7a59' },
  { name: '라임', hex: '#9ae66e' },
  { name: '스카이', hex: '#4cc9f0' },
  { name: '바이올렛', hex: '#b98cff' },
  { name: '망고', hex: '#ffcc4d' },
  { name: '로즈', hex: '#ff8fb1' },
] as const;

export const NICKNAMES = [
  '버디헌터',
  '원온이',
  '핑크공',
  '싱커',
  '그린킬러',
  '파이어볼',
  '털보골퍼',
  '이븐파',
  '캐디',
  '홀인원',
];

export const EMOJIS = ['👏', '🔥', '⛳', '😂'] as const;

export function randomNickname(): string {
  const base = NICKNAMES[Math.floor(Math.random() * NICKNAMES.length)];
  const n = Math.floor(Math.random() * 90) + 10;
  return `${base}${n}`;
}
