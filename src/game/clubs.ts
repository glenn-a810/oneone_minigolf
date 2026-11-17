import type { SurfaceKind } from './types';

export type ClubId = 'driver' | 'wood' | 'iron' | 'wedge' | 'putter';

export interface Club {
  id: ClubId;
  name: string;
  /** 짧은 이름 (버튼용) */
  short: string;
  /** 로프트 각 (도) */
  loft: number;
  /** 풀파워 발사 속도 (m/s) */
  speed: number;
  /** 설명 */
  note: string;
  /** 퍼터는 지면 굴림 */
  roll: boolean;
}

/**
 * 클럽별 탄도 특성. 1 유닛 = 1m 스케일의 미니 코스에 맞춰 실제보다 짧게 잡았다.
 * - 드라이버(약 42m) > 우드(약 34m) > 아이언(약 27m) > 웨지(약 16m) > 퍼터(굴림 약 14m)
 */
export const CLUBS: Club[] = [
  { id: 'driver', name: '드라이버', short: '드라이버', loft: 13, speed: 34, note: '가장 멀리 · 낮은 탄도', roll: false },
  { id: 'wood', name: '우드', short: '우드', loft: 18, speed: 27, note: '페어웨이 우드', roll: false },
  { id: 'iron', name: '아이언', short: '아이언', loft: 30, speed: 20, note: '어프로치용', roll: false },
  { id: 'wedge', name: '웨지', short: '웨지', loft: 46, speed: 14, note: '높이 띄우기 · 벙커 탈출', roll: false },
  { id: 'putter', name: '퍼터', short: '퍼터', loft: 0, speed: 8, note: '그린에서 굴리기', roll: true },
];

export function getClub(id: ClubId): Club {
  return CLUBS.find((club) => club.id === id) ?? CLUBS[0];
}

/**
 * 남은 거리와 지면 상태로 클럽을 추천한다.
 * 그린 위에서는 퍼터, 벙커에서는 웨지, 그 밖에는 거리별 드라이버/우드/아이언/웨지.
 */
export function recommendClub(distance: number, surface: SurfaceKind): ClubId {
  if (surface === 'green' || (surface === 'fringe' && distance <= 18)) {
    return distance <= 26 ? 'putter' : 'wedge';
  }
  if (surface === 'bunker') return 'wedge';
  if (distance <= 11) return 'wedge';
  if (distance > 36) return 'driver';
  if (distance > 25) return 'wood';
  if (distance > 12) return 'iron';
  return 'wedge';
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
