import type { SurfaceKind } from './types';
import { MIN_POWER_RATIO } from './constants';

/**
 * 실제 골프처럼 번호별로 나눈 클럽 체계.
 *
 * - `carry` = 풀파워 캐리(공이 처음 지면에 닿는 거리), `total` = 굴러간 뒤 최종 거리.
 * - 값은 `scripts/physics-check.ts` 가 평평한 페어웨이에서 실제 물리로 측정한 값이다.
 *   (로프트가 높을수록 탄도는 높고 런은 짧다 → 같은 그린이라도 클럽마다 남는 거리가 다르다)
 * - 미니 코스 스케일(1 유닛 = 1m)에 맞춰 실제 클럽보다 짧게 잡았다.
 */
export type ClubId = '1W' | '3W' | '5I' | '7I' | '9I' | 'PW' | 'SW' | 'PT';

export interface Club {
  id: ClubId;
  /** 버튼·HUD 에 쓰는 짧은 표기 */
  code: string;
  name: string;
  /** 로프트 각 (도) */
  loft: number;
  /** 풀파워 발사 속도 (m/s) */
  speed: number;
  /** 풀파워 캐리 (m, 페어웨이 실측) */
  carry: number;
  /** 풀파워 총비거리 (m, 페어웨이 실측 — 런 포함) */
  total: number;
  /** 풀파워 탄도 정점 (m, 실측) */
  apex: number;
  /** 설명 */
  note: string;
  /** 퍼터는 지면 굴림 */
  roll: boolean;
}

export const CLUBS: Club[] = [
  { id: '1W', code: '1W', name: '드라이버', loft: 12, speed: 35, carry: 44.3, total: 58.4, apex: 2.6, note: '가장 멀리 · 낮은 탄도 · 긴 런', roll: false },
  { id: '3W', code: '3W', name: '우드', loft: 17, speed: 28, carry: 39.9, total: 47.8, apex: 3.3, note: '페어웨이 우드 · 중간 탄도', roll: false },
  { id: '5I', code: '5I', name: '5번 아이언', loft: 25, speed: 21.9, carry: 34.1, total: 37.7, apex: 4.2, note: '긴 아이언 · 낮은 런', roll: false },
  { id: '7I', code: '7I', name: '7번 아이언', loft: 33, speed: 18, carry: 28, total: 29.7, apex: 4.7, note: '기본 아이언 · 높은 탄도', roll: false },
  { id: '9I', code: '9I', name: '9번 아이언', loft: 40, speed: 15.2, carry: 22, total: 22.7, apex: 4.7, note: '짧은 아이언 · 부드러운 착지', roll: false },
  { id: 'PW', code: 'PW', name: '피칭웨지', loft: 48, speed: 12.8, carry: 16, total: 16.4, apex: 4.5, note: '어프로치 · 거의 안 굴러감', roll: false },
  { id: 'SW', code: 'SW', name: '샌드웨지', loft: 58, speed: 10.5, carry: 10, total: 10.2, apex: 4, note: '높이 띄우기 · 벙커 탈출', roll: false },
  { id: 'PT', code: 'PT', name: '퍼터', loft: 0, speed: 8, carry: 0, total: 20.6, apex: 0, note: '그린에서 굴리기', roll: true },
];

export function getClub(id: ClubId): Club {
  return CLUBS.find((club) => club.id === id) ?? CLUBS[0];
}

/** 거리 → 비거리 곡선 지수. 실측(파워별 굴림 포함 거리)에 맞춘 보정값. */
const DISTANCE_EXPONENT = 1.75;

/** 파워 구간이 아닌 값이 들어와도 0~1 로 자른다 */
function clamp01(value: number): number {
  return Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : 0;
}

/** 파워(0~1) → 발사 속도 비율 (0 파워에서도 MIN_POWER_RATIO 만큼은 나간다) */
export function powerRatio(power: number): number {
  return MIN_POWER_RATIO + (1 - MIN_POWER_RATIO) * clamp01(power);
}

/** 지면별 샷 난이도(러프/벙커에서 파워가 깎인다) */
export function liePenalty(surface: SurfaceKind): number {
  switch (surface) {
    case 'rough':
      return 0.88;
    case 'bunker':
      return 0.82;
    case 'fringe':
      return 0.97;
    default:
      return 1;
  }
}

/** 현재 라이에서 이 클럽으로 낼 수 있는 최대 총비거리 (100% 파워) */
export function clubMaxDistance(club: Club, surface: SurfaceKind): number {
  return club.total * Math.pow(liePenalty(surface), DISTANCE_EXPONENT);
}

/** 파워에 따른 예상 총비거리 (m) */
export function estimateDistance(club: Club, surface: SurfaceKind, power: number): number {
  return clubMaxDistance(club, surface) * Math.pow(powerRatio(power), DISTANCE_EXPONENT);
}

/** 목표 거리에 필요한 파워 (0~1). 이 클럽으로 닿지 않으면 1 보다 커진다. */
export function powerForDistance(club: Club, surface: SurfaceKind, distance: number): number {
  const max = clubMaxDistance(club, surface);
  if (max <= 0.05) return 1;
  const ratio = Math.pow(Math.max(0, distance) / max, 1 / DISTANCE_EXPONENT);
  return (ratio - MIN_POWER_RATIO) / (1 - MIN_POWER_RATIO);
}

/** 짧은 클럽부터 긴 클럽 순서 (추천 탐색용) */
const ASCENDING: ClubId[] = ['SW', 'PW', '9I', '7I', '5I', '3W', '1W'];

/**
 * 남은 거리와 지면 상태로 클럽을 추천한다.
 * - 그린/그린 주변: 퍼터
 * - 벙커: 샌드웨지 (탈출)
 * - 그 밖: 풀스윙으로 닿는 가장 짧은 클럽 (남는 거리가 작을수록 짧은 클럽)
 */
export function recommendClub(distance: number, surface: SurfaceKind): ClubId {
  if (surface === 'green') return distance <= 30 ? 'PT' : 'PW';
  if (surface === 'fringe') return distance <= 18 ? 'PT' : 'PW';
  if (surface === 'bunker') return 'SW';
  // 라이 페널티를 감안해 '페어웨이 기준'으로 필요한 비거리를 구한 뒤,
  // 풀스윙에 5% 여유를 두고 닿는 가장 짧은 클럽을 고른다 (남는 파워는 타이밍용)
  const need = (distance / Math.pow(liePenalty(surface), DISTANCE_EXPONENT)) * 1.05;
  for (const id of ASCENDING) {
    if (getClub(id).total >= need) return id;
  }
  return '1W';
}

export const SURFACE_LABEL: Record<SurfaceKind, string> = {
  tee: '티박스',
  fairway: '페어웨이',
  rough: '러프',
  green: '그린',
  fringe: '그린 주변',
  bunker: '벙커',
  water: '워터',
  out: '아웃',
};
