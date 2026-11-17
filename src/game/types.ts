/** 코스/플레이어/라운드 데이터 타입. */

/** 공이 놓인 지면 종류. 굴림 마찰과 샷 난이도가 달라진다. */
export type SurfaceKind = 'tee' | 'fairway' | 'rough' | 'green' | 'fringe' | 'bunker' | 'water' | 'out';

export interface SurfaceInfo {
  kind: SurfaceKind;
  /** 지면 높이 (m) */
  height: number;
}

/** 물·벙커처럼 코스 위에 얹히는 영역 (타원) */
export interface ZoneSpec {
  kind: 'water' | 'bunker';
  x: number;
  z: number;
  /** x 방향 반지름 */
  rx: number;
  /** z 방향 반지름 */
  rz: number;
}

/** 나무·바위 (공이 부딪히는 충돌 반경 포함) */
export interface DecorSpec {
  kind: 'tree' | 'rock' | 'pine' | 'bush';
  x: number;
  z: number;
  s?: number;
  /** 공 충돌 반경 (0 이면 충돌 없음) */
  r?: number;
}

export interface HoleSpec {
  index: number;
  par: number;
  name: string;
  hint: string;
  /** 티 위치 [x, z] */
  tee: [number, number];
  /** 컵 위치 [x, z] */
  cup: [number, number];
  /** 페어웨이 중심선 (z 가 큰 쪽 = 티, 작은 쪽 = 그린) */
  path: Array<[number, number]>;
  /** 페어웨이 반폭 (m) */
  fairwayWidth: number;
  /** 러프 포함 섬 반폭 (m) */
  roughWidth: number;
  /** 그린 (원) */
  green: { x: number; z: number; r: number };
  /** 물·벙커 */
  zones?: ZoneSpec[];
  decor?: DecorSpec[];
}

export interface HoleRecord {
  par: number;
  strokes: number | null;
}

export interface RoundResult {
  holes: HoleRecord[];
  total: number;
  par: number;
  diff: number;
  verdict: string;
  name: string;
  date: string;
}

export interface PlayerIdentity {
  id: string;
  name: string;
  color: string;
}

export interface PlayerSnapshot {
  id: string;
  name: string;
  color: string;
  hole: number;
  pos: [number, number, number];
  strokes: number;
  total: number;
  done: boolean;
  moving: boolean;
  ts: number;
}
