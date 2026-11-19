import * as THREE from 'three';

/**
 * 실사(Realistic PBR) 룩의 재료 엔진.
 *
 * 외부 이미지 파일 없이 **절차적 데이터 텍스처**로 고해상도 PBR 맵을 만든다.
 * 색상 맵(sRGB) · 노멀 맵(높이 필드의 기울기) · 러프니스 맵을 한 번에 생성하고
 * 종류(잔디·모래·바위·목재·물…)별로 캐시해 룩을 오가도 다시 만들지 않는다.
 *
 * 모든 맵은 DataTexture 라서 캔버스(DOM)가 없는 검증 스크립트에서도 그대로 동작한다.
 * 텍스처 좌표는 **1 UV = 1m** 로 쓰고, 종류별 타일 크기에 맞춰 repeat 을 미리 정해 둔다.
 */

// ---------------------------------------------------------------- 종류 정의

export type SurfaceKind =
  | 'turf'
  | 'fairway'
  | 'green'
  | 'sand'
  | 'soil'
  | 'rock'
  | 'stone'
  | 'wood'
  | 'bark'
  | 'leaf'
  | 'water'
  | 'metal'
  | 'fabric'
  | 'skin'
  | 'generic';

interface SurfaceDef {
  /** 텍스처 한 장이 덮는 미터 (UV 1단위 = 1m) */
  tile: number;
  /** 텍스처 해상도 (2의 거듭제곱) */
  size: number;
  /** 노멀 맵 세기 */
  normalStrength: number;
  roughness: number;
  metalness: number;
  envIntensity: number;
}

export const SURFACES: Record<SurfaceKind, SurfaceDef> = {
  turf: { tile: 5.5, size: 512, normalStrength: 0.62, roughness: 0.95, metalness: 0, envIntensity: 0.45 },
  fairway: { tile: 4.2, size: 512, normalStrength: 0.5, roughness: 0.92, metalness: 0, envIntensity: 0.5 },
  green: { tile: 3.0, size: 256, normalStrength: 0.38, roughness: 0.8, metalness: 0, envIntensity: 0.55 },
  sand: { tile: 2.6, size: 512, normalStrength: 1.3, roughness: 0.97, metalness: 0, envIntensity: 0.35 },
  soil: { tile: 3.0, size: 256, normalStrength: 1.2, roughness: 0.98, metalness: 0, envIntensity: 0.3 },
  rock: { tile: 2.6, size: 512, normalStrength: 1.5, roughness: 0.86, metalness: 0, envIntensity: 0.5 },
  stone: { tile: 2.2, size: 256, normalStrength: 0.7, roughness: 0.76, metalness: 0, envIntensity: 0.6 },
  wood: { tile: 1.2, size: 256, normalStrength: 0.28, roughness: 0.58, metalness: 0, envIntensity: 0.6 },
  bark: { tile: 1.0, size: 256, normalStrength: 1.35, roughness: 0.94, metalness: 0, envIntensity: 0.45 },
  leaf: { tile: 1.1, size: 256, normalStrength: 1.0, roughness: 0.72, metalness: 0, envIntensity: 0.55 },
  water: { tile: 3.5, size: 512, normalStrength: 1.0, roughness: 0.07, metalness: 0.02, envIntensity: 1.25 },
  metal: { tile: 0.8, size: 256, normalStrength: 0.35, roughness: 0.3, metalness: 1, envIntensity: 1.5 },
  fabric: { tile: 0.6, size: 256, normalStrength: 0.5, roughness: 0.9, metalness: 0, envIntensity: 0.45 },
  skin: { tile: 0.45, size: 256, normalStrength: 0.25, roughness: 0.55, metalness: 0, envIntensity: 0.55 },
  generic: { tile: 2.0, size: 256, normalStrength: 0.6, roughness: 0.82, metalness: 0, envIntensity: 0.5 },
};

// ---------------------------------------------------------------- 잡음

function hash2(ix: number, iy: number, seed: number): number {
  let h = Math.imul(ix, 374761393) ^ Math.imul(iy, 668265263) ^ Math.imul(seed, 1442695041);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

/** u,v(0~1)를 격자 px×py 로 감싸는 타일링 값 잡음 */
function tnoise(u: number, v: number, px: number, py: number, seed: number): number {
  const x = u * px;
  const y = v * py;
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const fx = x - xi;
  const fy = y - yi;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const x0 = ((xi % px) + px) % px;
  const x1 = ((xi + 1) % px + px) % px;
  const y0 = ((yi % py) + py) % py;
  const y1 = ((yi + 1) % py + py) % py;
  const a = hash2(x0, y0, seed);
  const b = hash2(x1, y0, seed);
  const c = hash2(x0, y1, seed);
  const d = hash2(x1, y1, seed);
  const top = a + (b - a) * sx;
  const bottom = c + (d - c) * sx;
  return top + (bottom - top) * sy;
}

/** 여러 옥타브를 겹친 프랙털 잡음 (0~1) */
function tfbm(u: number, v: number, px: number, py: number, seed: number, octaves: number): number {
  let sum = 0;
  let amp = 0.5;
  let norm = 0;
  let ax = px;
  let ay = py;
  for (let i = 0; i < octaves; i += 1) {
    sum += amp * tnoise(u, v, ax, ay, seed + i * 57);
    norm += amp;
    amp *= 0.5;
    ax = Math.min(1024, ax * 2);
    ay = Math.min(1024, ay * 2);
  }
  return sum / norm;
}

function clamp01(x: number): number {
  return x < 0 ? 0 : x > 1 ? 1 : x;
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp01((x - edge0) / (edge1 - edge0 || 1e-6));
  return t * t * (3 - 2 * t);
}

function mix(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

type Rgb = readonly [number, number, number];

function mixRgb(a: Rgb, b: Rgb, t: number): Rgb {
  return [mix(a[0], b[0], t), mix(a[1], b[1], t), mix(a[2], b[2], t)];
}

// ---------------------------------------------------------------- 표면 샘플러

interface SurfaceSample {
  r: number;
  g: number;
  b: number;
  h: number;
  rough: number;
}

const GRASS_PALETTES: Record<'turf' | 'fairway' | 'green', { dark: Rgb; light: Rgb; dry: Rgb }> = {
  turf: { dark: [0.6, 0.68, 0.5], light: [0.95, 0.98, 0.8], dry: [0.92, 0.88, 0.6] },
  fairway: { dark: [0.68, 0.76, 0.56], light: [1.0, 1.0, 0.86], dry: [0.95, 0.93, 0.68] },
  green: { dark: [0.78, 0.85, 0.68], light: [1.0, 1.0, 0.92], dry: [0.96, 0.95, 0.76] },
};

/**
 * 잔디 결. `freq` 가 높을수록 잔디가 잘고, `roughBase` 가 높을수록 거칠다.
 * 색은 거의 중성(밝기 변화 위주)이라 정점 색(페어웨이 톤·스트라이프)을 그대로 살린다.
 */
function grassSample(
  u: number,
  v: number,
  seed: number,
  freq: number,
  palette: { dark: Rgb; light: Rgb; dry: Rgb },
  dryAmount: number,
  stripe: number,
): SurfaceSample {
  const clump = tfbm(u, v, 4, 4, seed, 3);
  const mid = tfbm(u, v, 11, 11, seed + 11, 3);
  // 잔디 결은 살짝만 세로로 길게 (지나치게 줄무늬처럼 보이지 않도록)
  const blade = tnoise(u, v, freq, Math.max(8, Math.round(freq * 0.62)), seed + 23);
  const tips = tnoise(u, v, Math.round(freq * 1.6), Math.round(freq * 1.6), seed + 31);
  const shade = clamp01(blade * 0.3 + mid * 0.34 + clump * 0.3 + tips * 0.06);
  const dryness = smoothstep(0.56, 0.88, clump) * dryAmount;
  const tone = 0.84 + shade * 0.22 - (1 - tips) * 0.05;
  let color = mixRgb(palette.dark, palette.light, shade);
  color = mixRgb(color, palette.dry, dryness * 0.45);
  // 잔디 깎은 줄무늬 (아주 옅게 — 정점 색의 스트라이프를 거들어 준다)
  const band = 1 + stripe * Math.sin((u + v * 0.25) * Math.PI * 2 * 2);
  return {
    r: clamp01(color[0] * tone * band),
    g: clamp01(color[1] * tone * band),
    b: clamp01(color[2] * tone * band),
    h: shade * 0.65 + tips * 0.25,
    rough: 0.94 - shade * 0.05,
  };
}

function sampleSurface(kind: SurfaceKind, u: number, v: number): SurfaceSample {
  switch (kind) {
    case 'turf':
      return grassSample(u, v, 1901, 96, GRASS_PALETTES.turf, 1.0, 0.012);
    case 'fairway':
      return grassSample(u, v, 3307, 150, GRASS_PALETTES.fairway, 0.6, 0.045);
    case 'green':
      return grassSample(u, v, 5501, 230, GRASS_PALETTES.green, 0.25, 0.03);
    case 'sand': {
      const warp = tfbm(u, v, 3, 3, 7717, 2);
      const ripple = Math.sin((v * 7 + warp * 2.4) * Math.PI * 2);
      const cross = Math.sin((u * 11 + warp * 1.6) * Math.PI * 2) * 0.35;
      const grain = tnoise(u, v, 210, 210, 7723);
      const coarse = tfbm(u, v, 8, 8, 7729, 2);
      const tone = 0.9 + ripple * 0.06 + cross * 0.02 + (grain - 0.5) * 0.16 - coarse * 0.05;
      return {
        r: clamp01(1.0 * tone),
        g: clamp01(0.965 * tone),
        b: clamp01(0.86 * tone - coarse * 0.03),
        h: 0.5 + ripple * 0.22 + cross * 0.1 + (grain - 0.5) * 0.5,
        rough: 0.97 - grain * 0.02,
      };
    }
    case 'soil': {
      const clump = tfbm(u, v, 5, 5, 6619, 3);
      const grit = tnoise(u, v, 170, 170, 6623);
      const pebble = smoothstep(0.78, 0.95, tfbm(u, v, 22, 22, 6637, 2));
      const tone = 0.74 + clump * 0.25 + (grit - 0.5) * 0.16 + pebble * 0.1;
      return {
        r: clamp01(0.94 * tone),
        g: clamp01(0.87 * tone),
        b: clamp01(0.78 * tone),
        h: clump * 0.6 + grit * 0.25 + pebble * 0.2,
        rough: 0.98,
      };
    }
    case 'rock': {
      const body = tfbm(u, v, 5, 5, 4481, 4);
      const crackN = tfbm(u, v, 3, 3, 4483, 3);
      const crack = 1 - smoothstep(0, 0.032, Math.abs(crackN - 0.5));
      const fine = tfbm(u, v, 34, 34, 4487, 2);
      const lichen = smoothstep(0.6, 0.82, tfbm(u, v, 6, 6, 4493, 3));
      const tone = 0.78 + body * 0.3 + (fine - 0.5) * 0.14 - crack * 0.34;
      let color: Rgb = [tone, tone * 1.01, tone * 0.98];
      color = mixRgb(color, [0.62, 0.72, 0.5], lichen * 0.55);
      return {
        r: clamp01(color[0]),
        g: clamp01(color[1]),
        b: clamp01(color[2]),
        h: body * 0.62 + fine * 0.18 - crack * 0.4,
        rough: 0.87 - lichen * 0.05 + (1 - body) * 0.05,
      };
    }
    case 'stone': {
      const blotch = tfbm(u, v, 4, 4, 9719, 3);
      const pit = 1 - smoothstep(0, 0.05, Math.abs(tfbm(u, v, 18, 18, 9721, 2) - 0.5));
      const fine = tnoise(u, v, 190, 190, 9727);
      const tone = 0.82 + blotch * 0.2 + (fine - 0.5) * 0.1 - pit * 0.12;
      return {
        r: clamp01(1.0 * tone),
        g: clamp01(0.985 * tone),
        b: clamp01(0.94 * tone),
        h: blotch * 0.5 + fine * 0.3 - pit * 0.2,
        rough: 0.72 + (1 - blotch) * 0.16,
      };
    }
    case 'wood': {
      const warp = tfbm(u, v, 4, 4, 8801, 3);
      const grain = 0.5 + 0.5 * Math.sin((v * 34 + warp * 1.5) * Math.PI * 2);
      const fine = tnoise(u, v, 60, 220, 8807);
      const knot = smoothstep(0.8, 0.97, tfbm(u, v, 6, 6, 8813, 3));
      const tone = 0.82 + grain * 0.13 + (fine - 0.5) * 0.1 - knot * 0.14;
      return {
        r: clamp01(1.0 * tone),
        g: clamp01(0.93 * tone),
        b: clamp01(0.84 * tone),
        h: grain * 0.4 + fine * 0.35,
        rough: 0.5 + (1 - grain) * 0.16 + knot * 0.1,
      };
    }
    case 'bark': {
      const ridge = tnoise(u, v, 26, 5, 2281);
      const groove = tnoise(u, v, 52, 9, 2287);
      const fine = tfbm(u, v, 60, 24, 2293, 2);
      const tone = 0.52 + ridge * 0.34 + groove * 0.14 + (fine - 0.5) * 0.14;
      return {
        r: clamp01(0.92 * tone),
        g: clamp01(0.8 * tone),
        b: clamp01(0.68 * tone),
        h: ridge * 0.55 + groove * 0.3 + fine * 0.15,
        rough: 0.93,
      };
    }
    case 'leaf': {
      const cluster = tfbm(u, v, 9, 9, 1117, 3);
      const leaves = tnoise(u, v, 64, 64, 1123);
      const vein = tnoise(u, v, 120, 36, 1129);
      const tone = 0.6 + cluster * 0.34 + (leaves - 0.5) * 0.3 + vein * 0.08;
      return {
        r: clamp01(0.9 * tone),
        g: clamp01(1.0 * tone),
        b: clamp01(0.7 * tone),
        h: cluster * 0.5 + leaves * 0.4 + vein * 0.1,
        rough: 0.74 - leaves * 0.06,
      };
    }
    case 'water': {
      const w1 = Math.sin((u * 3 + v * 5 + tfbm(u, v, 3, 3, 313, 2) * 2) * Math.PI * 2);
      const w2 = Math.sin((u * 7 - v * 4 + tfbm(u, v, 5, 5, 317, 2) * 3) * Math.PI * 2);
      const w3 = tfbm(u, v, 14, 14, 331, 3);
      const swell = w1 * 0.45 + w2 * 0.25 + (w3 - 0.5) * 0.3;
      const foam = smoothstep(0.72, 0.95, w3) * 0.25;
      return {
        r: clamp01(0.5 + swell * 0.12 + foam),
        g: clamp01(0.72 + swell * 0.1 + foam),
        b: clamp01(0.78 + swell * 0.06 + foam),
        h: 0.5 + swell * 0.45,
        rough: 0.06 + (1 - Math.abs(swell)) * 0.04,
      };
    }
    case 'metal': {
      const brush = tnoise(u, v, 240, 7, 617);
      const blotch = tfbm(u, v, 6, 6, 619, 2);
      const tone = 0.82 + brush * 0.18 - blotch * 0.06;
      return {
        r: clamp01(tone),
        g: clamp01(tone * 1.005),
        b: clamp01(tone * 1.01),
        h: brush * 0.7 + blotch * 0.3,
        rough: 0.26 + blotch * 0.12,
      };
    }
    case 'fabric': {
      const weaveX = Math.sin(u * Math.PI * 2 * 160);
      const weaveY = Math.sin(v * Math.PI * 2 * 160);
      const weave = (weaveX * weaveY + 1) * 0.5;
      const soft = tfbm(u, v, 8, 8, 863, 2);
      const tone = 0.82 + weave * 0.12 + soft * 0.06;
      return {
        r: clamp01(tone),
        g: clamp01(tone),
        b: clamp01(tone),
        h: weave * 0.6 + soft * 0.4,
        rough: 0.92 - weave * 0.04,
      };
    }
    case 'skin': {
      const pores = tnoise(u, v, 130, 130, 359);
      const flush = tfbm(u, v, 5, 5, 361, 2);
      const tone = 0.94 + (pores - 0.5) * 0.06 - flush * 0.03;
      return {
        r: clamp01(tone),
        g: clamp01(tone * 0.985),
        b: clamp01(tone * 0.97),
        h: pores * 0.5 + flush * 0.5,
        rough: 0.52 + flush * 0.1,
      };
    }
    default: {
      const body = tfbm(u, v, 6, 6, 1013, 3);
      const fine = tnoise(u, v, 150, 150, 1019);
      const tone = 0.84 + body * 0.18 + (fine - 0.5) * 0.1;
      return {
        r: clamp01(tone),
        g: clamp01(tone),
        b: clamp01(tone),
        h: body * 0.6 + fine * 0.4,
        rough: 0.8 + (1 - body) * 0.1,
      };
    }
  }
}

// ---------------------------------------------------------------- 텍스처 생성

export interface SurfaceTextures {
  map: THREE.DataTexture;
  normalMap: THREE.DataTexture;
  roughnessMap: THREE.DataTexture;
}

const textureCache = new Map<SurfaceKind, SurfaceTextures>();
let textureCount = 0;

function makeTexture(data: Uint8Array, size: number, srgb: boolean): THREE.DataTexture {
  const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.anisotropy = 8;
  texture.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  texture.needsUpdate = true;
  textureCount += 1;
  return texture;
}

function buildTextures(kind: SurfaceKind): SurfaceTextures {
  const def = SURFACES[kind];
  const size = def.size;
  const pixels = size * size;
  const color = new Uint8Array(pixels * 4);
  const normal = new Uint8Array(pixels * 4);
  const rough = new Uint8Array(pixels * 4);
  const heights = new Float32Array(pixels);

  for (let y = 0; y < size; y += 1) {
    const v = y / size;
    for (let x = 0; x < size; x += 1) {
      const u = x / size;
      const sample = sampleSurface(kind, u, v);
      const index = y * size + x;
      heights[index] = sample.h;
      const offset = index * 4;
      color[offset] = Math.round(clamp01(sample.r) * 255);
      color[offset + 1] = Math.round(clamp01(sample.g) * 255);
      color[offset + 2] = Math.round(clamp01(sample.b) * 255);
      color[offset + 3] = 255;
      const level = Math.round(clamp01(sample.rough) * 255);
      rough[offset] = level;
      rough[offset + 1] = level;
      rough[offset + 2] = level;
      rough[offset + 3] = 255;
    }
  }

  // 높이 필드 → 노멀 맵 (중앙 차분, 가장자리는 반대편에서 감아 온다)
  const strength = def.normalStrength * 9;
  for (let y = 0; y < size; y += 1) {
    const up = ((y - 1 + size) % size) * size;
    const down = ((y + 1) % size) * size;
    const row = y * size;
    for (let x = 0; x < size; x += 1) {
      const left = (x - 1 + size) % size;
      const right = (x + 1) % size;
      const dx = (heights[row + right] - heights[row + left]) * 0.5;
      const dy = (heights[down + x] - heights[up + x]) * 0.5;
      let nx = -dx * strength;
      let ny = -dy * strength;
      const nz = 1;
      const length = Math.hypot(nx, ny, nz) || 1;
      nx /= length;
      ny /= length;
      const offset = (row + x) * 4;
      normal[offset] = Math.round((nx * 0.5 + 0.5) * 255);
      normal[offset + 1] = Math.round((ny * 0.5 + 0.5) * 255);
      normal[offset + 2] = Math.round((nz / length * 0.5 + 0.5) * 255);
      normal[offset + 3] = 255;
    }
  }

  const set: SurfaceTextures = {
    map: makeTexture(color, size, true),
    normalMap: makeTexture(normal, size, false),
    roughnessMap: makeTexture(rough, size, false),
  };
  const tile = def.tile;
  for (const texture of [set.map, set.normalMap, set.roughnessMap]) {
    texture.repeat.setScalar(1 / tile);
  }
  return set;
}

/** 종류별 PBR 텍스처 세트 (처음 요청할 때 만들어 캐시) */
export function surfaceTextures(kind: SurfaceKind): SurfaceTextures {
  const cached = textureCache.get(kind);
  if (cached) return cached;
  const built = buildTextures(kind);
  textureCache.set(kind, built);
  return built;
}

/** 검증용 통계 — 룩을 여러 번 오가도 이 숫자가 늘지 않아야 한다 */
export function pbrStats(): { kinds: number; textures: number } {
  return { kinds: textureCache.size, textures: textureCount };
}

/** 실사 룩을 처음 켜기 전에 미리 만들어 두면 전환 순간이 끊기지 않는다 */
export function prewarmSurfaces(kinds: SurfaceKind[]): void {
  for (const kind of kinds) surfaceTextures(kind);
}

export const ALL_SURFACES = Object.keys(SURFACES) as SurfaceKind[];

// ---------------------------------------------------------------- 매터리얼

export interface SurfaceMaterialOptions {
  color?: THREE.ColorRepresentation;
  vertexColors?: boolean;
  roughness?: number;
  metalness?: number;
  transparent?: boolean;
  opacity?: number;
  side?: THREE.Side;
  emissive?: THREE.ColorRepresentation;
  emissiveIntensity?: number;
  depthWrite?: boolean;
  /** 기존 텍스처(깃발 천 등)를 그대로 쓰고 싶을 때 */
  keepMap?: THREE.Texture | null;
  envIntensity?: number;
  name?: string;
}

/** 실사 룩용 PBR 매터리얼 (평평한 셰이딩 없이 텍스처·노멀·러프니스·환경 반사) */
export function createSurfaceMaterial(
  kind: SurfaceKind,
  options: SurfaceMaterialOptions = {},
): THREE.MeshStandardMaterial {
  const def = SURFACES[kind];
  const set = surfaceTextures(kind);
  const keepMap = options.keepMap ?? null;
  const material = new THREE.MeshStandardMaterial({
    color: options.color ?? 0xffffff,
    vertexColors: options.vertexColors ?? false,
    roughness: set.roughnessMap ? 1 : options.roughness ?? def.roughness,
    metalness: options.metalness ?? def.metalness,
    transparent: options.transparent ?? false,
    opacity: options.opacity ?? 1,
    side: options.side ?? THREE.FrontSide,
    depthWrite: options.depthWrite ?? true,
    flatShading: false,
    map: keepMap ?? set.map,
    normalMap: kind === 'water' ? null : set.normalMap,
    roughnessMap: set.roughnessMap,
    normalScale: new THREE.Vector2(1, 1),
    emissive: options.emissive ?? 0x000000,
    emissiveIntensity: options.emissiveIntensity ?? 1,
    envMapIntensity: options.envIntensity ?? def.envIntensity,
  });
  material.name = options.name ?? `real-${kind}`;
  material.userData.oneoneReal = true;
  material.userData.oneoneSurface = kind;
  return material;
}

// ---------------------------------------------------------------- 물

interface WaterShader {
  uniforms: { uWaveTime?: { value: number } };
}

const waterMaterials = new Set<THREE.MeshPhysicalMaterial>();

/** 실사 룩의 물 — 이중 스크롤 노멀맵 + 낮은 러프니스 + 환경 반사(하늘·주변이 비친다) */
export function createWaterMaterial(options: { color?: THREE.ColorRepresentation; opacity?: number } = {}): THREE.MeshPhysicalMaterial {
  const def = SURFACES.water;
  const set = surfaceTextures('water');
  const material = new THREE.MeshPhysicalMaterial({
    color: options.color ?? 0x1e5566,
    roughness: def.roughness,
    metalness: def.metalness,
    transparent: true,
    opacity: options.opacity ?? 0.92,
    normalMap: set.normalMap,
    normalScale: new THREE.Vector2(0.45, 0.45),
    roughnessMap: null,
    envMapIntensity: def.envIntensity,
    clearcoat: 0.55,
    clearcoatRoughness: 0.14,
  });
  material.name = 'real-water';
  material.userData.oneoneReal = true;
  material.userData.oneoneSurface = 'water';

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uWaveTime = { value: 0 };
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        ['#include <common>', 'uniform float uWaveTime;'].join('\n'),
      )
      .replace(
        '#include <normal_fragment_maps>',
        [
          '#include <normal_fragment_maps>',
          '#ifdef USE_NORMALMAP_TANGENTSPACE',
          '  // 두 겹으로 천천히 흐르는 잔물결 — 서로 다른 방향으로 스크롤해 간섭 무늬를 만든다',
          '  vec3 waveA = texture2D( normalMap, vNormalMapUv * 1.7 + vec2( uWaveTime * 0.016, uWaveTime * -0.011 ) ).xyz * 2.0 - 1.0;',
          '  vec3 waveB = texture2D( normalMap, vNormalMapUv * 2.9 - vec2( uWaveTime * 0.009, uWaveTime * 0.019 ) ).xyz * 2.0 - 1.0;',
          '  normal = normalize( normal + vec3( waveA.xy + waveB.xy, 0.0 ) * 0.5 );',
          '#endif',
        ].join('\n'),
      );
    (material.userData as { shader?: WaterShader }).shader = shader as WaterShader;
  };
  material.customProgramCacheKey = () => 'oneone-real-water';
  waterMaterials.add(material);
  return material;
}

/** 물결 시간 진행 — 프레임마다 한 번 호출한다 */
export function updateWaterTime(time: number): void {
  waterMaterials.forEach((material) => {
    const shader = (material.userData as { shader?: WaterShader }).shader;
    if (shader?.uniforms.uWaveTime) shader.uniforms.uWaveTime.value = time;
  });
}

// ---------------------------------------------------------------- 환경맵 (IBL)

let environmentTexture: THREE.Texture | null = null;
let environmentTried = false;

/**
 * PMREM 으로 구울 환경 장면 — 하늘 그라데이션 + 밝은 태양 + 지면(잔디) + 먼 숲 띠.
 * 금속·물·잔디가 "지금 이 하늘"을 비추게 만드는 것이 목적이다.
 */
export function buildEnvironmentScene(): THREE.Scene {
  const scene = new THREE.Scene();

  const skyMaterial = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      uTop: { value: new THREE.Color(0x2f74c0) },
      uMid: { value: new THREE.Color(0x9fd0ef) },
      uHorizon: { value: new THREE.Color(0xe8f2e6) },
    },
    vertexShader: [
      'varying vec3 vPos;',
      'void main() {',
      '  vPos = position;',
      '  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
      '}',
    ].join('\n'),
    fragmentShader: [
      'varying vec3 vPos;',
      'uniform vec3 uTop;',
      'uniform vec3 uMid;',
      'uniform vec3 uHorizon;',
      'void main() {',
      '  float h = clamp( vPos.y / 110.0 * 0.5 + 0.5, 0.0, 1.0 );',
      '  vec3 color = mix( uHorizon, uMid, smoothstep( 0.48, 0.62, h ) );',
      '  color = mix( color, uTop, smoothstep( 0.62, 0.95, h ) );',
      '  gl_FragColor = vec4( color, 1.0 );',
      '}',
    ].join('\n'),
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(120, 32, 20), skyMaterial);
  scene.add(sky);

  // 지면 — 아래쪽 반사가 잔디빛이 되도록
  const groundMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.16, 0.3, 0.11), side: THREE.DoubleSide });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(118, 32), groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -6;
  scene.add(ground);

  // 태양 (HDR 값을 넘겨 금속·물에 강한 하이라이트가 맺히게)
  const sunMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(4.2, 3.8, 3.0) });
  const sun = new THREE.Mesh(new THREE.SphereGeometry(5.5, 16, 12), sunMaterial);
  sun.position.set(0.42, 0.62, 0.46).normalize().multiplyScalar(95);
  scene.add(sun);

  // 먼 숲 띠 — 낮은 각도의 반사에 어두운 초록이 섞이도록
  const hillMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.09, 0.18, 0.1) });
  for (let i = 0; i < 18; i += 1) {
    const angle = (i / 18) * Math.PI * 2;
    const hill = new THREE.Mesh(new THREE.ConeGeometry(9 + (i % 3) * 3, 10 + (i % 4) * 3, 8), hillMaterial);
    hill.position.set(Math.cos(angle) * 78, 1.5, Math.sin(angle) * 78);
    scene.add(hill);
  }

  return scene;
}

/**
 * 환경맵을 한 번만 굽는다. 렌더러가 없으면(헤드리스 검증) null.
 */
export function ensureEnvironment(renderer: THREE.WebGLRenderer | null): THREE.Texture | null {
  if (environmentTexture || environmentTried || !renderer) return environmentTexture;
  environmentTried = true;
  const scene = buildEnvironmentScene();
  let pmrem: THREE.PMREMGenerator | null = null;
  try {
    pmrem = new THREE.PMREMGenerator(renderer);
    const target = pmrem.fromScene(scene, 0.02, 0.5, 240);
    environmentTexture = target.texture;
  } catch {
    environmentTexture = null;
  } finally {
    pmrem?.dispose();
    scene.traverse((object) => {
      const mesh = object as THREE.Mesh;
      if (!mesh.isMesh) return;
      mesh.geometry.dispose();
      const material = mesh.material as THREE.Material | THREE.Material[];
      if (Array.isArray(material)) material.forEach((entry) => entry.dispose());
      else material?.dispose();
    });
  }
  return environmentTexture;
}

export function getEnvironmentTexture(): THREE.Texture | null {
  return environmentTexture;
}

/** 검증용: 환경맵을 미리 넣어 둘 수 있게 (실제로는 ensureEnvironment 가 만든다) */
export function setEnvironmentTextureForTest(texture: THREE.Texture | null): void {
  environmentTexture = texture;
  if (texture) environmentTried = true;
}
