import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { CREASE_REAL, roundedGeometry, smoothNormals } from './geo';
import { createSurfaceMaterial, type SurfaceKind } from './pbr';

/**
 * 소품 빌더 — 폴리(Synty POLYGON)와 실사(PBR) 두 모드를 모두 낸다.
 *
 * - 폴리: 파츠(기둥·수관·바위·판재…)를 하나의 지오메트리로 합치고, 면마다 명도 변주를 넣은
 *   정점 색상 + flatShading 으로 각진 면을 그대로 드러낸다.
 * - 실사: 같은 파츠를 분할이 많은 둥근 메시로 바꾸고(smoothNormals) 표면 종류별
 *   PBR 텍스처(잔디·목재·바위·금속…)를 입혀 유기적인 실루엣과 재질감을 낸다.
 *
 * 지오메트리는 이름(key)별로 캐시하고, 실사용 지오메트리는 처음 필요할 때만 만든다.
 * 폴리 모드만 쓰는 사용자는 실사 메시 메모리를 쓰지 않는다.
 */

/** 코스·대기실 공용 팔레트 (Synty POLYGON 계열의 쨍한 단색 톤) */
export const PALETTE = {
  grass: 0x74c24a,
  grassLight: 0x88cf5b,
  grassMid: 0x68b544,
  grassDark: 0x51993a,
  fairway: 0x8bd257,
  fairwayDark: 0x83ca50,
  green: 0xa8e579,
  greenDark: 0x9ada6a,
  fringe: 0x88cd55,
  rough: 0x5da844,
  roughDark: 0x54983c,
  meadow: 0x4a8536,
  meadowDark: 0x427a2f,
  sand: 0xf0dcaa,
  sandLight: 0xf7e8c2,
  sandDark: 0xdcc48c,
  soil: 0x8f6a46,
  soilDark: 0x6f5137,
  soilLight: 0xa9835a,
  rock: 0xa9b2b8,
  rockLight: 0xc0c8cc,
  rockDark: 0x868f96,
  stone: 0xdbd2bb,
  stoneLight: 0xeee6d2,
  stoneDark: 0xb9ae95,
  water: 0x3bb7dd,
  waterDeep: 0x2a93bd,
  wood: 0xc08a52,
  woodLight: 0xd6a369,
  woodDark: 0x8e6238,
  bark: 0x8a5a3b,
  barkDark: 0x66412b,
  leaf: 0x56b24a,
  leafLight: 0x6ec95c,
  leafDark: 0x3f9440,
  pine: 0x2f7f47,
  pineLight: 0x3c9452,
  pineDark: 0x246639,
  coral: 0xff7a59,
  coralDark: 0xe2603f,
  cream: 0xfaf2e0,
  creamDark: 0xe8dcc4,
  teal: 0x2f9e9a,
  tealDark: 0x247d7c,
  roof: 0xd9534a,
  roofDark: 0xb23f38,
  sky: 0x9fd6f5,
  metal: 0xb9c2c9,
  metalDark: 0x8d979e,
  gold: 0xf2c14e,
  white: 0xffffff,
  glass: 0x9ed3e6,
  flowerPink: 0xff8fa8,
  flowerYellow: 0xffd166,
  flowerPurple: 0xc79bff,
  dark: 0x2c3b40,
} as const;

export type Bucket = 'solid' | 'metal' | 'glow';

/**
 * 표면 종류 추론 — 파츠 색으로 재질을 정한다.
 * (팔레트 색이 곧 재질이므로 소품 정의를 고치지 않아도 실사 재질이 붙는다)
 */
const KIND_BY_COLOR = new Map<number, SurfaceKind>();
function assignKind(kind: SurfaceKind, colors: readonly number[]): void {
  for (const color of colors) KIND_BY_COLOR.set(color, kind);
}
assignKind('wood', [PALETTE.wood, PALETTE.woodLight, PALETTE.woodDark]);
assignKind('bark', [PALETTE.bark, PALETTE.barkDark]);
assignKind('leaf', [
  PALETTE.leaf,
  PALETTE.leafLight,
  PALETTE.leafDark,
  PALETTE.pine,
  PALETTE.pineLight,
  PALETTE.pineDark,
  PALETTE.grass,
  PALETTE.grassLight,
  PALETTE.grassMid,
  PALETTE.grassDark,
  PALETTE.fairway,
  PALETTE.fairwayDark,
  PALETTE.green,
  PALETTE.greenDark,
  PALETTE.fringe,
  PALETTE.rough,
  PALETTE.roughDark,
  PALETTE.meadow,
  PALETTE.meadowDark,
]);
assignKind('sand', [PALETTE.sand, PALETTE.sandLight, PALETTE.sandDark]);
assignKind('soil', [PALETTE.soil, PALETTE.soilDark, PALETTE.soilLight]);
assignKind('rock', [PALETTE.rock, PALETTE.rockLight, PALETTE.rockDark]);
assignKind('stone', [PALETTE.stone, PALETTE.stoneLight, PALETTE.stoneDark]);
assignKind('metal', [PALETTE.metal, PALETTE.metalDark, PALETTE.gold]);
assignKind('skin', [0xffdfb8, 0xe9bc90]);
assignKind('fabric', [
  PALETTE.cream,
  PALETTE.creamDark,
  PALETTE.white,
  PALETTE.coral,
  PALETTE.coralDark,
  PALETTE.teal,
  PALETTE.tealDark,
  PALETTE.roof,
  PALETTE.roofDark,
  PALETTE.glass,
  PALETTE.flowerPink,
  PALETTE.flowerYellow,
  PALETTE.flowerPurple,
  PALETTE.dark,
  PALETTE.sky,
]);

/** 파츠의 표면 종류 (버킷과 색으로 결정) */
export function surfaceKindOfPart(part: PropPart): SurfaceKind {
  if (part.kind) return part.kind;
  const bucket = part.bucket ?? 'solid';
  if (bucket === 'metal') return 'metal';
  if (bucket === 'glow') return 'fabric';
  return KIND_BY_COLOR.get(part.color) ?? 'fabric';
}

export interface PropPart {
  geo: THREE.BufferGeometry;
  color: number;
  pos?: readonly [number, number, number];
  rot?: readonly [number, number, number];
  scale?: number | readonly [number, number, number];
  /** metal = 광택 금속, glow = 발광(램프 유리·포탈) */
  bucket?: Bucket;
  /** 면 단위 명도 변주 폭 (0~0.3). 기본 0.07 */
  jitter?: number;
  /** 아래쪽을 어둡게 하는 정도 (0~0.5). 기본 0.12 */
  shade?: number;
  /** 표면 종류를 직접 지정 (기본은 색으로 추론) */
  kind?: SurfaceKind;
  /** 실사 메시의 분할 단계 (작은 잎 덩어리는 1) */
  realDetail?: number;
}

const polyMaterials = new Map<string, THREE.MeshStandardMaterial>();

/** 폴리 룩 매터리얼 — 종류별로 같은 파라미터의 인스턴스를 따로 둬, 실사 룩에서 재질을 1:1로 바꿀 수 있게 한다 */
function polyMaterial(kind: SurfaceKind, bucket: Bucket): THREE.MeshStandardMaterial {
  const key = `${bucket}|${kind}`;
  const cached = polyMaterials.get(key);
  if (cached) return cached;
  const material = new THREE.MeshStandardMaterial({
    vertexColors: true,
    flatShading: true,
    roughness: bucket === 'metal' ? 0.32 : bucket === 'glow' ? 0.45 : 0.87,
    metalness: bucket === 'metal' ? 0.62 : bucket === 'glow' ? 0.1 : 0.0,
    ...(bucket === 'glow' ? { emissive: new THREE.Color(0xffe6a6), emissiveIntensity: 0.75 } : {}),
  });
  material.name = `poly-${bucket}-${kind}`;
  material.userData.oneoneSurface = kind;
  material.userData.oneonePropBucket = bucket;
  polyMaterials.set(key, material);
  return material;
}

const realMaterials = new Map<string, THREE.Material>();

/** 실사 룩 매터리얼 — 표면 종류별 PBR 텍스처 + 환경 반사 */
function realMaterial(kind: SurfaceKind, bucket: Bucket): THREE.Material {
  const key = `${bucket}|${kind}`;
  const cached = realMaterials.get(key);
  if (cached) return cached;
  const material =
    bucket === 'glow'
      ? createSurfaceMaterial('fabric', {
          vertexColors: true,
          roughness: 0.5,
          metalness: 0.05,
          emissive: 0xffe6a6,
          emissiveIntensity: 0.55,
          envIntensity: 0.5,
        })
      : createSurfaceMaterial(kind, {
          vertexColors: true,
          ...(bucket === 'metal' ? { roughness: 0.3, metalness: 0.95, envIntensity: 1.5 } : {}),
        });
  material.name = `real-${bucket}-${kind}`;
  material.userData.oneonePropBucket = bucket;
  realMaterials.set(key, material);
  return material;
}

/** 시드 고정 난수 */
export function seeded(seed: number): () => number {
  let state = seed >>> 0 || 1;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

const paintRand = seeded(0x51ed);

const _matrix = new THREE.Matrix4();
const _euler = new THREE.Euler();
const _quat = new THREE.Quaternion();
const _position = new THREE.Vector3();
const _scale = new THREE.Vector3();
const _color = new THREE.Color();

/** 지오메트리를 변환하고 면 단위 색을 입혀 비인덱스 지오메트리로 만든다 */
function bakePart(part: PropPart, real = false): THREE.BufferGeometry {
  const kind = surfaceKindOfPart(part);
  const organic = kind === 'leaf' || kind === 'rock';
  const source = real ? roundedGeometry(part.geo, organic, part.realDetail) : part.geo;
  const geo = source.index ? source.toNonIndexed() : source.clone();
  geo.deleteAttribute('uv');
  geo.deleteAttribute('uv1');
  geo.deleteAttribute('uv2');

  if (part.scale !== undefined) {
    if (typeof part.scale === 'number') _scale.setScalar(part.scale);
    else _scale.set(part.scale[0], part.scale[1], part.scale[2]);
  } else {
    _scale.set(1, 1, 1);
  }
  _position.set(part.pos?.[0] ?? 0, part.pos?.[1] ?? 0, part.pos?.[2] ?? 0);
  _euler.set(part.rot?.[0] ?? 0, part.rot?.[1] ?? 0, part.rot?.[2] ?? 0);
  _quat.setFromEuler(_euler);
  _matrix.compose(_position, _quat, _scale);
  geo.applyMatrix4(_matrix);
  geo.computeVertexNormals();
  // 실사 메시는 곡면을 살린 부드러운 노멀 (죽은 면이 없도록)
  if (real) smoothNormals(geo, CREASE_REAL);

  const position = geo.getAttribute('position');
  const count = position.count;
  const colors = new Float32Array(count * 3);
  _color.setHex(part.color);
  // 실사 모드는 면 단위 색 변주를 줄인다 (실제 표면은 면마다 색이 튀지 않는다)
  const jitter = (part.jitter ?? 0.07) * (real ? 0.4 : 1);
  const shade = part.shade ?? 0.12;

  let minY = Infinity;
  let maxY = -Infinity;
  for (let i = 0; i < count; i += 1) {
    const y = position.getY(i);
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  const span = Math.max(1e-4, maxY - minY);

  for (let i = 0; i < count; i += 3) {
    const factor = 1 + (paintRand() - 0.5) * jitter;
    const midY = (position.getY(i) + position.getY(i + 1) + position.getY(i + 2)) / 3;
    const heightT = (midY - minY) / span;
    const tone = factor * (1 - shade * (1 - heightT));
    for (let k = 0; k < 3; k += 1) {
      const index = (i + k) * 3;
      colors[index] = Math.min(1, _color.r * tone);
      colors[index + 1] = Math.min(1, _color.g * tone);
      colors[index + 2] = Math.min(1, _color.b * tone);
    }
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return geo;
}

interface CachedEntry {
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  cast: boolean;
  kind: SurfaceKind;
}

interface CachedProp {
  parts: PropPart[];
  poly: CachedEntry[];
  real?: CachedEntry[];
}

const propCache = new Map<string, CachedProp>();

/** 파츠를 표면 종류·버킷별로 합쳐 메시 목록을 만든다 */
function buildEntries(parts: PropPart[], real: boolean): CachedEntry[] {
  const buckets = new Map<string, { bucket: Bucket; kind: SurfaceKind; geometries: THREE.BufferGeometry[] }>();
  for (const part of parts) {
    const bucket = part.bucket ?? 'solid';
    const kind = surfaceKindOfPart(part);
    const key = `${bucket}|${kind}`;
    let slot = buckets.get(key);
    if (!slot) {
      slot = { bucket, kind, geometries: [] };
      buckets.set(key, slot);
    }
    slot.geometries.push(bakePart(part, real));
  }

  const entries: CachedEntry[] = [];
  buckets.forEach((slot) => {
    const merged = mergeGeometries(slot.geometries, false);
    slot.geometries.forEach((geo) => geo.dispose());
    if (!merged) return;
    merged.computeBoundingSphere();
    entries.push({
      geometry: merged,
      material: real ? realMaterial(slot.kind, slot.bucket) : polyMaterial(slot.kind, slot.bucket),
      cast: slot.bucket !== 'glow',
      kind: slot.kind,
    });
  });
  return entries;
}

/**
 * 파츠 목록을 합쳐 소품 그룹을 만든다 (폴리 룩).
 * key 가 같으면 지오메트리를 재사용하므로 홀·대기실에서 반복 배치해도 메모리가 늘지 않는다.
 * 실사 룩의 메시는 `realVariant` 로 따로 붙인다 (그래픽스 룩 시스템이 붙이고 감춘다).
 */
export function buildProp(key: string, parts: PropPart[]): THREE.Group {
  let entry = propCache.get(key);
  if (!entry) {
    entry = { parts, poly: buildEntries(parts, false) };
    propCache.set(key, entry);
  }

  const group = new THREE.Group();
  group.userData.propKey = key;
  for (const item of entry.poly) {
    const mesh = new THREE.Mesh(item.geometry, item.material);
    mesh.castShadow = item.cast;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  return group;
}

// ---------------------------------------------------------------- 실사 변형

const realDetail = new Map<string, (parts: PropPart[]) => PropPart[]>();

/**
 * 실사 모드에서만 덧붙는 디테일 파츠를 등록한다.
 * 예: 잎 덩어리를 더 많이 흩뿌려 수관을 풍성하게, 바위에 작은 돌을 더.
 * key 는 정확히 일치하거나 접두어(예: `golfer-body`)로 찾는다.
 */
export function registerRealDetail(key: string, build: (parts: PropPart[]) => PropPart[]): void {
  realDetail.set(key, build);
}

function realDetailFor(key: string): ((parts: PropPart[]) => PropPart[]) | undefined {
  const exact = realDetail.get(key);
  if (exact) return exact;
  let best: string | null = null;
  realDetail.forEach((_value, prefix) => {
    if (!key.startsWith(prefix)) return;
    if (!best || prefix.length > best.length) best = prefix;
  });
  return best ? realDetail.get(best) : undefined;
}

/**
 * 소품 key 의 실사 메시 그룹을 만든다 (지오메트리는 key 별로 한 번만 생성·캐시).
 * 반환된 그룹은 소품 그룹의 자식으로 붙여 룩에 따라 보이고 감춘다.
 */
export function realVariantFor(key: string): THREE.Group | null {
  const entry = propCache.get(key);
  if (!entry) return null;
  if (!entry.real) {
    const detail = realDetailFor(key);
    const parts = detail ? [...entry.parts, ...detail(entry.parts)] : entry.parts;
    entry.real = buildEntries(parts, true);
  }
  const group = new THREE.Group();
  group.name = `${key}-real`;
  group.userData.oneoneVariantOf = 'real';
  for (const item of entry.real) {
    const mesh = new THREE.Mesh(item.geometry, item.material);
    mesh.castShadow = item.cast;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  return group;
}

/** 캐시된 소품 지오메트리 정리 (씬을 완전히 버릴 때만) */
export function disposePropCache(): void {
  propCache.forEach((entry) => {
    entry.poly.forEach((item) => item.geometry.dispose());
    entry.real?.forEach((item) => item.geometry.dispose());
  });
  propCache.clear();
}

const _faceColor = new THREE.Color();

/**
 * 정적인 메시들을 매터리얼·그림자 설정별로 하나로 합친다 (드로우콜 절감).
 * - 투명 매터리얼(물·링·포탈)과 skip 에 들어 있는 오브젝트(움직이는 것)는 건너뛴다
 * - root 의 월드 변환이 항등일 때만 사용한다
 * @returns 새로 만든 지오메트리 (호출부가 dispose 해야 한다)
 */
export function mergeStaticMeshes(root: THREE.Object3D, skip?: Set<THREE.Object3D>): THREE.BufferGeometry[] {
  root.updateMatrixWorld(true);
  const buckets = new Map<string, { material: THREE.Material; cast: boolean; geometries: THREE.BufferGeometry[] }>();
  const collected: THREE.Mesh[] = [];

  root.traverse((object) => {
    const mesh = object as THREE.Mesh;
    if (!mesh.isMesh) return;
    if (Array.isArray(mesh.material)) return;
    const material = mesh.material as THREE.MeshStandardMaterial;
    if (material.map || material.transparent) return;
    if (!mesh.geometry.getAttribute('color')) return;
    let node: THREE.Object3D | null = mesh;
    while (node) {
      if (skip?.has(node)) return;
      node = node.parent;
    }
    collected.push(mesh);
  });

  for (const mesh of collected) {
    const material = mesh.material as THREE.Material;
    const key = `${material.uuid}|${mesh.castShadow ? 1 : 0}|${mesh.receiveShadow ? 1 : 0}`;
    let bucket = buckets.get(key);
    if (!bucket) {
      bucket = { material, cast: mesh.castShadow, geometries: [] };
      buckets.set(key, bucket);
    }
    const geometry = mesh.geometry.clone();
    geometry.applyMatrix4(mesh.matrixWorld);
    bucket.geometries.push(geometry);
  }

  const created: THREE.BufferGeometry[] = [];
  for (const mesh of collected) mesh.parent?.remove(mesh);

  for (const bucket of buckets.values()) {
    const merged = mergeGeometries(bucket.geometries, false);
    bucket.geometries.forEach((geometry) => geometry.dispose());
    if (!merged) continue;
    merged.computeBoundingSphere();
    const mesh = new THREE.Mesh(merged, bucket.material);
    mesh.castShadow = bucket.cast;
    mesh.receiveShadow = true;
    root.add(mesh);
    created.push(merged);
  }

  return created;
}

const faceRand = seeded(0x2f31);
export function paintFaces(
  geometry: THREE.BufferGeometry,
  colorAt: (cx: number, cy: number, cz: number, ny: number, out: THREE.Color) => THREE.Color,
  jitter = 0.055,
): THREE.BufferGeometry {
  const geo = geometry.index ? geometry.toNonIndexed() : geometry;
  geo.deleteAttribute('uv');
  const position = geo.getAttribute('position');
  const count = position.count;
  const colors = new Float32Array(count * 3);

  const edgeA = new THREE.Vector3();
  const edgeB = new THREE.Vector3();
  const normal = new THREE.Vector3();

  for (let i = 0; i < count; i += 3) {
    const ax = position.getX(i);
    const ay = position.getY(i);
    const az = position.getZ(i);
    const bx = position.getX(i + 1);
    const by = position.getY(i + 1);
    const bz = position.getZ(i + 1);
    const cx = position.getX(i + 2);
    const cy = position.getY(i + 2);
    const cz = position.getZ(i + 2);

    const mx = (ax + bx + cx) / 3;
    const my = (ay + by + cy) / 3;
    const mz = (az + bz + cz) / 3;

    edgeA.set(bx - ax, by - ay, bz - az);
    edgeB.set(cx - ax, cy - ay, cz - az);
    normal.crossVectors(edgeA, edgeB).normalize();

    colorAt(mx, my, mz, normal.y, _faceColor);
    const tone = 1 + (faceRand() - 0.5) * jitter;
    for (let k = 0; k < 3; k += 1) {
      const index = (i + k) * 3;
      colors[index] = Math.min(1, _faceColor.r * tone);
      colors[index + 1] = Math.min(1, _faceColor.g * tone);
      colors[index + 2] = Math.min(1, _faceColor.b * tone);
    }
  }

  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return geo;
}

// ---------------------------------------------------------------- 지오메트리 단축 헬퍼

/** 육각/팔각 기둥 — 원기둥보다 각진 로우폴리 실루엣 */
export function column(rTop: number, rBottom: number, height: number, sides = 6): THREE.CylinderGeometry {
  return new THREE.CylinderGeometry(rTop, rBottom, height, sides, 1);
}

/** 네모 판재 */
export function plank(w: number, h: number, d: number): THREE.BoxGeometry {
  return new THREE.BoxGeometry(w, h, d);
}

/** 울퉁불퉁한 돌 — 이코사헤드론 0단계 */
export function lump(radius = 1): THREE.IcosahedronGeometry {
  return new THREE.IcosahedronGeometry(radius, 0);
}

/** 매끈한 잎 덩어리 — 이코사헤드론 1단계 (면이 조금 더 많다) */
export function blob(radius = 1): THREE.IcosahedronGeometry {
  return new THREE.IcosahedronGeometry(radius, 1);
}
