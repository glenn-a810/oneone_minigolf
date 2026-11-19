import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/**
 * Synty POLYGON 톤의 로우폴리 소품 빌더.
 *
 * - 파츠(기둥·수관·바위·판재…)를 하나의 지오메트리로 합쳐 드로우콜을 1~2개로 유지
 * - 면(삼각형)마다 아주 작은 명도 변주를 넣은 정점 색상(vertex color)으로 입체감을 준다
 * - 모든 매터리얼은 flatShading — 각진 면이 그대로 드러나는 스타일
 *
 * 지오메트리는 이름(key)별로 캐시해 홀을 바꿔도 다시 만들지 않는다.
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
}

const solidMat = new THREE.MeshStandardMaterial({
  vertexColors: true,
  flatShading: true,
  roughness: 0.87,
  metalness: 0.0,
});

const metalMat = new THREE.MeshStandardMaterial({
  vertexColors: true,
  flatShading: true,
  roughness: 0.32,
  metalness: 0.62,
});

const glowMat = new THREE.MeshStandardMaterial({
  vertexColors: true,
  flatShading: true,
  roughness: 0.45,
  metalness: 0.1,
  emissive: new THREE.Color(0xffe6a6),
  emissiveIntensity: 0.75,
});

function materialFor(bucket: Bucket): THREE.Material {
  if (bucket === 'metal') return metalMat;
  if (bucket === 'glow') return glowMat;
  return solidMat;
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
function bakePart(part: PropPart): THREE.BufferGeometry {
  const source = part.geo;
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

  const position = geo.getAttribute('position');
  const count = position.count;
  const colors = new Float32Array(count * 3);
  _color.setHex(part.color);
  const jitter = part.jitter ?? 0.07;
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

interface CachedProp {
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  cast: boolean;
}

const propCache = new Map<string, CachedProp[]>();

/**
 * 파츠 목록을 버킷별로 합쳐 소품 그룹을 만든다.
 * key 가 같으면 지오메트리를 재사용하므로 홀·대기실에서 반복 배치해도 메모리가 늘지 않는다.
 */
export function buildProp(key: string, parts: PropPart[]): THREE.Group {
  let entries = propCache.get(key);
  if (!entries) {
    const buckets: Record<Bucket, THREE.BufferGeometry[]> = { solid: [], metal: [], glow: [] };
    for (const part of parts) {
      const bucket = part.bucket ?? 'solid';
      buckets[bucket].push(bakePart(part));
    }
    entries = [];
    for (const bucket of ['solid', 'metal', 'glow'] as Bucket[]) {
      if (buckets[bucket].length === 0) continue;
      const merged = mergeGeometries(buckets[bucket], false);
      buckets[bucket].forEach((geo) => geo.dispose());
      if (!merged) continue;
      merged.computeBoundingSphere();
      entries.push({ geometry: merged, material: materialFor(bucket), cast: bucket !== 'glow' });
    }
    propCache.set(key, entries);
  }

  const group = new THREE.Group();
  for (const entry of entries) {
    const mesh = new THREE.Mesh(entry.geometry, entry.material);
    mesh.castShadow = entry.cast;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  return group;
}

/** 캐시된 소품 지오메트리 정리 (씬을 완전히 버릴 때만) */
export function disposePropCache(): void {
  propCache.forEach((entries) => entries.forEach((entry) => entry.geometry.dispose()));
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
