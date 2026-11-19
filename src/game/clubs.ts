import type { SurfaceKind } from './types';
import { MIN_POWER_RATIO } from './constants';
import { previewShot } from './ball';

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
  /** 클럽 버튼에 붙는 한 단어 이름 */
  short: string;
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
  { id: '1W', code: '1W', name: '드라이버', short: '드라이버', loft: 12, speed: 35, carry: 44.3, total: 58.4, apex: 2.6, note: '가장 멀리 · 낮은 탄도 · 긴 런', roll: false },
  { id: '3W', code: '3W', name: '우드', short: '우드', loft: 17, speed: 28, carry: 39.9, total: 47.8, apex: 3.3, note: '페어웨이 우드 · 중간 탄도', roll: false },
  { id: '5I', code: '5I', name: '5번 아이언', short: '아이언', loft: 25, speed: 21.9, carry: 34.1, total: 37.7, apex: 4.2, note: '긴 아이언 · 낮은 런', roll: false },
  { id: '7I', code: '7I', name: '7번 아이언', short: '아이언', loft: 33, speed: 18, carry: 28, total: 29.7, apex: 4.7, note: '기본 아이언 · 높은 탄도', roll: false },
  { id: '9I', code: '9I', name: '9번 아이언', short: '아이언', loft: 40, speed: 15.2, carry: 22, total: 22.7, apex: 4.7, note: '짧은 아이언 · 부드러운 착지', roll: false },
  { id: 'PW', code: 'PW', name: '피칭웨지', short: '피칭', loft: 48, speed: 12.8, carry: 16, total: 16.4, apex: 4.5, note: '어프로치 · 거의 안 굴러감', roll: false },
  { id: 'SW', code: 'SW', name: '샌드웨지', short: '샌드', loft: 58, speed: 10.5, carry: 10, total: 10.2, apex: 4, note: '높이 띄우기 · 벙커 탈출', roll: false },
  { id: 'PT', code: 'PT', name: '퍼터', short: '퍼터', loft: 0, speed: 8, carry: 0, total: 20.6, apex: 0, note: '그린에서 굴리기', roll: true },
];

export function getClub(id: ClubId): Club {
  return CLUBS.find((club) => club.id === id) ?? CLUBS[0];
}

/** 파워 구간이 아닌 값이 들어와도 0~1 로 자른다 */
function clamp01(value: number): number {
  return Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : 0;
}

/** 파워(0~1) → 발사 속도 비율 (0 파워에서도 MIN_POWER_RATIO 만큼은 나간다) */
export function powerRatio(power: number): number {
  return MIN_POWER_RATIO + (1 - MIN_POWER_RATIO) * clamp01(power);
}

/** 발사 속도 비율(0~1) → 그 비율에 해당하는 게이지 파워 */
export function powerFromRatio(ratio: number): number {
  if (!Number.isFinite(ratio)) return 0;
  return (ratio - MIN_POWER_RATIO) / (1 - MIN_POWER_RATIO);
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

// ---------------------------------------------------------------- 실측 거리 곡선
//
// 파워 → 비거리를 1.75 승 같은 근사식으로 두면 근거리에서 오차가 커진다.
// (실제 측정 지수는 클럽·파워마다 1.7~2.0 사이로 달라진다)
// 그래서 클럽·지면마다 '발사 속도 비율 → 실제 총비거리'를 물리 시뮬레이션으로 몇 점 찍어
// 곡선으로 들고 있다가 사이 값을 보간한다. 게이지 표기·목표 %·실제 샷이 모두 이 곡선 하나를
// 쓰므로 세 숫자가 서로 어긋나지 않는다.

const CURVE_SAMPLES = 12;
/** 퍼터가 굴러가는 지면 (굴림 마찰이 거리 곡선을 바꾼다) */
function curveGround(club: Club, surface: SurfaceKind): SurfaceKind {
  if (!club.roll) return 'fairway';
  if (surface === 'green' || surface === 'fringe' || surface === 'bunker') return surface;
  return 'green';
}

const GROUND_HEIGHT: Record<SurfaceKind, number> = {
  tee: 0,
  fairway: 0,
  rough: 0,
  green: 0.01,
  fringe: 0.005,
  bunker: 0.005,
  water: -0.14,
  out: -0.4,
};

export interface ClubCurve {
  club: ClubId;
  ground: SurfaceKind;
  /** 표본 발사 속도 비율 (powerRatio 기준, 0.18 ~ 1) */
  ratios: number[];
  /** 각 비율에서 실제로 측정한 총비거리 (m) */
  distances: number[];
  /** 풀파워 비거리 (m) */
  full: number;
}

const curveCache = new Map<string, ClubCurve>();

/** 클럽·지면의 거리 곡선 (처음 한 번만 시뮬레이션하고 캐시) */
export function clubCurve(club: Club, surface: SurfaceKind): ClubCurve {
  const ground = curveGround(club, surface);
  const key = `${club.id}:${ground}`;
  const cached = curveCache.get(key);
  if (cached) return cached;

  const ratios: number[] = [];
  const distances: number[] = [];
  const height = GROUND_HEIGHT[ground];
  const ctx = {
    surfaceAt: () => ({ kind: ground, height }),
    obstacles: [],
  };
  for (let i = 0; i < CURVE_SAMPLES; i += 1) {
    const ratio = MIN_POWER_RATIO + ((1 - MIN_POWER_RATIO) * i) / (CURVE_SAMPLES - 1);
    const speed = Math.max(0.25, club.speed * ratio);
    const start = { x: 0, y: height + 0.115, z: 0, surface: ground };
    const shot = club.roll
      ? previewShot({ speed, loft: 0, yaw: 0, curve: 0 }, ctx, start, {
          rolling: true,
          speed,
          maxSeconds: 24,
        })
      : previewShot({ speed, loft: club.loft, yaw: 0, curve: 0 }, ctx, start, { maxSeconds: 12 });
    const rest = shot.rest;
    const distance = rest ? Math.hypot(rest.x, rest.z) : 0;
    ratios.push(ratio);
    distances.push(distance);
  }
  // 단조 증가 보정 (같은 거리로 측정된 구간이 있으면 뒤 값을 살짝 올려 역보간이 안정되게)
  for (let i = 1; i < distances.length; i += 1) {
    if (distances[i] <= distances[i - 1]) distances[i] = distances[i - 1] + 0.01;
  }

  const curve: ClubCurve = {
    club: club.id,
    ground,
    ratios,
    distances,
    full: distances[distances.length - 1],
  };
  curveCache.set(key, curve);
  return curve;
}

/** 발사 속도 비율(클럽 풀스피드 대비) → 실제 총비거리 (m) */
export function distanceForRatio(curve: ClubCurve, ratio: number): number {
  const rs = curve.ratios;
  const ds = curve.distances;
  if (!(ratio > 0)) return 0;
  if (ratio <= rs[0]) {
    // 최소 파워 구간 아래는 원점으로 선형 외삽
    return (ds[0] * ratio) / rs[0];
  }
  if (ratio >= rs[rs.length - 1]) {
    const last = rs.length - 1;
    const slope = (ds[last] - ds[last - 1]) / (rs[last] - rs[last - 1]);
    return ds[last] + (ratio - rs[last]) * slope;
  }
  for (let i = 1; i < rs.length; i += 1) {
    if (ratio <= rs[i]) {
      const k = (ratio - rs[i - 1]) / (rs[i] - rs[i - 1]);
      return ds[i - 1] + (ds[i] - ds[i - 1]) * k;
    }
  }
  return ds[ds.length - 1];
}

/** 거리(m) → 그 거리에 닿는 발사 속도 비율 (0~1 밖으로도 나올 수 있다) */
export function ratioForDistance(curve: ClubCurve, distance: number): number {
  const rs = curve.ratios;
  const ds = curve.distances;
  const d = Math.max(0, Number.isFinite(distance) ? distance : 0);
  if (d <= 0) return 0;
  if (d <= ds[0]) return (rs[0] * d) / Math.max(1e-4, ds[0]);
  if (d >= ds[ds.length - 1]) {
    const last = rs.length - 1;
    const slope = (ds[last] - ds[last - 1]) / (rs[last] - rs[last - 1]);
    return rs[last] + (d - ds[last]) / Math.max(1e-4, slope);
  }
  for (let i = 1; i < ds.length; i += 1) {
    if (d <= ds[i]) {
      const k = (d - ds[i - 1]) / Math.max(1e-4, ds[i] - ds[i - 1]);
      return rs[i - 1] + (rs[i] - rs[i - 1]) * k;
    }
  }
  return rs[rs.length - 1];
}

/** 현재 라이에서 이 클럽으로 낼 수 있는 최대 총비거리 (100% 파워) */
export function clubMaxDistance(club: Club, surface: SurfaceKind): number {
  return distanceForRatio(clubCurve(club, surface), liePenalty(surface));
}

/** 파워에 따른 예상 총비거리 (m). scale 은 게이지 줌 배율(발사 속도 배율)이다. */
export function estimateDistance(club: Club, surface: SurfaceKind, power: number, scale = 1): number {
  const ratio = powerRatio(power) * liePenalty(surface) * Math.max(0, scale);
  return distanceForRatio(clubCurve(club, surface), ratio);
}

/** 목표 거리에 필요한 파워 (0~1). 이 클럽으로 닿지 않으면 1 보다 커진다. */
export function powerForDistance(club: Club, surface: SurfaceKind, distance: number): number {
  const ratio = ratioForDistance(clubCurve(club, surface), distance);
  return powerFromRatio(ratio / liePenalty(surface));
}

/** 실제로 공을 내보낼 때 쓰는 발사 속도 (m/s). 게이지 예상 거리와 같은 곡선을 쓴다. */
export function launchSpeed(club: Club, surface: SurfaceKind, power: number, scale = 1): number {
  return club.speed * powerRatio(power) * liePenalty(surface) * Math.max(0, Math.min(2, scale));
}

// ---------------------------------------------------------------- 가변 게이지 (근거리 줌)
//
// 남은 거리가 클럽 최대 비거이에 비해 짧으면 목표 파워가 0% 근처에 붙어 조작이 불가능하다.
// 그래서 게이지 100%가 뜻하는 유효 최대 거리(effectiveMax)를 남은 거리에 맞춰 줄이고,
// 목표 파워가 항상 게이지의 50~64% 구간에 놓이게 한다. (먼 거리는 클럽 원래 값 그대로)

/** 가변 스케일에서 목표 파워의 하한 */
export const GAUGE_TARGET_MIN = 0.5;
/** 가변 스케일에서 목표 파워의 상한 */
export const GAUGE_TARGET_MAX = 0.64;
/** 목표 파워를 이만큼 여유 있게 잡아 게이지 가운데로 끌어올린다 */
export const GAUGE_TARGET_PAD = 0.13;
/** 이보다 좁게 줄이지는 않는다 (너무 짧으면 아주 살짝만 스쳐도 크게 튄다) */
export const GAUGE_SCALE_MIN = 0.045;

export interface GaugeScale {
  /** 게이지 100% 가 나타내는 유효 최대 비거리 (m) */
  max: number;
  /** 실제 발사 속도에 곱하는 배율 (0~1) */
  scale: number;
  /** 이 스케일에서 목표 거리에 필요한 파워 (0~1, 1 초과 = 이 클럽으로 부족) */
  needed: number;
  /** 근거리 정밀 스케일이 걸렸는지 */
  fine: boolean;
  /** 클럽 원래 최대 거리 (m, 현재 라이) */
  fullMax: number;
  /** 남은 거리 (m) */
  distance: number;
}

/** 남은 거리·클럽·라이에 맞춘 게이지 스케일 */
export function gaugeScale(club: Club, surface: SurfaceKind, distance: number): GaugeScale {
  const curve = clubCurve(club, surface);
  const lie = liePenalty(surface);
  const fullMax = distanceForRatio(curve, lie);
  const needRatio = ratioForDistance(curve, distance);
  const needPower = powerFromRatio(needRatio / lie);

  if (!(distance > 0.02) || needPower >= GAUGE_TARGET_MAX) {
    return { max: fullMax, scale: 1, needed: needPower, fine: false, fullMax, distance };
  }

  const target = Math.min(GAUGE_TARGET_MAX, Math.max(GAUGE_TARGET_MIN, needPower + GAUGE_TARGET_PAD));
  const scale = Math.max(GAUGE_SCALE_MIN, Math.min(1, needRatio / (lie * powerRatio(target))));
  const max = distanceForRatio(curve, lie * scale);
  return { max, scale, needed: target, fine: scale < 0.995, fullMax, distance };
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
  const need = (distance / Math.pow(liePenalty(surface), 1.75)) * 1.05;
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
