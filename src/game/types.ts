/** 코스/플레이어/라운드 데이터 타입. */

export type SlabKind = 'fairway' | 'fringe' | 'bridge';

export interface SlabSpec {
  /** 중심 x */
  x: number;
  /** 중심 z */
  z: number;
  /** x 방향 폭 */
  w: number;
  /** z 방향 깊이 */
  d: number;
  /** 상면 높이 (기본 0) */
  y?: number;
  /** 두께 (기본 0.34) */
  h?: number;
  kind?: SlabKind;
}

export interface WallSpec {
  x: number;
  z: number;
  w: number;
  d: number;
  h?: number;
}

export interface BumperSpec {
  x: number;
  z: number;
  r?: number;
}

export interface HumpSpec {
  x: number;
  z: number;
  r?: number;
  lift?: number;
}

export interface MoverSpec {
  x: number;
  z: number;
  w: number;
  d: number;
  h: number;
  axis: 'x' | 'z';
  range: number;
  speed: number;
  phase?: number;
}

export interface WaterSpec {
  x: number;
  z: number;
  w: number;
  d: number;
}

export interface DecorSpec {
  kind: 'tree' | 'rock' | 'cloud';
  x: number;
  z: number;
  y?: number;
  s?: number;
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
  slabs: SlabSpec[];
  walls: WallSpec[];
  bumpers?: BumperSpec[];
  humps?: HumpSpec[];
  movers?: MoverSpec[];
  water?: WaterSpec[];
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
