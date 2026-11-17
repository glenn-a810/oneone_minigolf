/** 게임 전역 상수 — 물리/조작감 튜닝 값은 여기서 한 번에 고친다. */

/** 공 반지름 (m). 실제 골프공보다 조금 크게 잡아 화면에서 잘 보이게 한다. */
export const BALL_RADIUS = 0.115;
/** 컵 판정 반경 (공 중심 기준, m) */
export const CUP_RADIUS = 0.16;
/** 컵 근처에서 공이 살짝 빨려 들어가는 반경 */
export const CUP_ATTRACT_RADIUS = 0.62;

/** 중력 (m/s²) */
export const GRAVITY = 9.81;
/** 공기 저항 계수 (a = -k·|v|·v) */
export const AIR_DRAG = 0.0042;
/** 바람 (m/s², 아주 약하게) */
export const WIND = { x: 0.35, z: -0.22 };

/** 파워 0 일 때 속도 비율 */
export const MIN_POWER_RATIO = 0.18;

/** 홀당 최대 타수 = Par + 이 값 */
export const STROKE_LIMIT_EXTRA = 5;

/** 스윙 게이지: 0 → 100% 까지 걸리는 시간(초) */
export const GAUGE_POWER_SECONDS = 1.25;
/** 임팩트 존까지 되돌아오는 시간(초) */
export const GAUGE_IMPACT_SECONDS = 1.0;

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

/** 대기실 이모지 바 (채팅 없이 감정만 주고받는다) */
export const LOBBY_EMOJIS = ['👋', '⛳', '🔥', '👏', '😂', '🎉'] as const;

export function randomNickname(): string {
  const base = NICKNAMES[Math.floor(Math.random() * NICKNAMES.length)];
  const n = Math.floor(Math.random() * 90) + 10;
  return `${base}${n}`;
}
