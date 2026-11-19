import * as THREE from 'three';
import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect.js';

/**
 * 그래픽 룩(스타일) 전환 — 두 가지를 실시간으로 비교한다.
 *
 * - `synty` : Synty POLYGON 스타일. 각진 플랫 셰이딩 + 면 단위 정점 색 (기본값)
 * - `toon`  : 실사 조명·그림자 위에 셀 셰이딩·림라이트·외곽선을 얹은 스타일라이즈드 3D 카툰
 *
 * 토글 한 번에 페이지를 새로고침하지 않고 장면 전체를 바꾼다.
 * 씬의 메시를 직접 다시 만들지 않고 ① 매터리얼 교체 ② 매끈한 버텍스 노멀 지오메트리 교체
 * ③ 외곽선 패스(화면 공간) 만 수행하므로 홀을 바꾸거나 새 골퍼가 들어와도 그대로 따라온다.
 */

export type GraphicLook = 'synty' | 'toon';

export const LOOK_LABEL: Record<GraphicLook, string> = {
  synty: '폴리',
  toon: '카툰',
};

const LOOK_KEY = 'oneone:look:v1';
/** 카툰 매터리얼 표식 */
const TOON_FLAG = 'oneoneToon';
/** 매끈 노멀 지오메트리 캐시 키 (원본 지오메트리의 userData) */
const SMOOTH_KEY = 'oneoneSmooth';
/** 면 사이 각도가 이보다 크면(=꺾이면) 노멀을 섞지 않는다 (45°) */
const CREASE_COS = Math.cos((45 * Math.PI) / 180);

// ---------------------------------------------------------------- 상태

function readStoredLook(): GraphicLook {
  try {
    return localStorage.getItem(LOOK_KEY) === 'toon' ? 'toon' : 'synty';
  } catch {
    return 'synty';
  }
}

function storeLook(look: GraphicLook): void {
  try {
    localStorage.setItem(LOOK_KEY, look);
  } catch {
    /* 저장 실패는 무시 — 이번 세션에서만 유지된다 */
  }
}

let current: GraphicLook = typeof localStorage === 'undefined' ? 'synty' : readStoredLook();
const listeners = new Set<(look: GraphicLook) => void>();
const scenes = new Set<THREE.Scene>();
let renderer: THREE.WebGLRenderer | null = null;

export function getLook(): GraphicLook {
  return current;
}

export function isToon(): boolean {
  return current === 'toon';
}

/** 룩이 바뀌면 호출된다 (UI 동기화용) */
export function onLookChange(listener: (look: GraphicLook) => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setLook(look: GraphicLook): void {
  if (look === current) {
    syncLook();
    return;
  }
  current = look;
  storeLook(look);
  syncLook();
  applyRendererTone();
  listeners.forEach((listener) => listener(look));
}

/** 폴리 ↔ 카툰 한 번씩 전환하고 바뀐 룩을 돌려준다 */
export function toggleLook(): GraphicLook {
  setLook(current === 'toon' ? 'synty' : 'toon');
  return current;
}

/** 토글 대상 씬 등록 (플레이룸·대기실) */
export function registerLookScene(scene: THREE.Scene): void {
  scenes.add(scene);
  syncLook(scene);
}

// ---------------------------------------------------------------- 램프 텍스처

let rampCache: THREE.DataTexture | null = null;

/** 2~3단계 셀 음영용 램프 — 단은 또렷하되 경계는 살짝 부드럽게 */
function toonRamp(): THREE.DataTexture {
  if (rampCache) return rampCache;
  const steps = [0.5, 0.5, 0.7, 0.7, 0.86, 0.86, 1.0, 1.0];
  const data = new Uint8Array(steps.length * 4);
  steps.forEach((value, index) => {
    const byte = Math.round(THREE.MathUtils.clamp(value, 0, 1) * 255);
    data[index * 4] = byte;
    data[index * 4 + 1] = byte;
    data[index * 4 + 2] = byte;
    data[index * 4 + 3] = 255;
  });
  const texture = new THREE.DataTexture(data, steps.length, 1, THREE.RGBAFormat);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  rampCache = texture;
  return texture;
}

// ---------------------------------------------------------------- 매터리얼 변환

const toonByBase = new WeakMap<THREE.Material, THREE.Material>();

function isToonMaterial(material: THREE.Material): boolean {
  return material.userData?.[TOON_FLAG] === true;
}

/**
 * 지면/물처럼 외곽선을 그리지 않을 매터리얼에 표시한다.
 * (외곽선은 화면 공간 패스라, 표시가 없으면 기본적으로 그려진다)
 */
export function markGround<T extends THREE.Material>(material: T): T {
  material.userData.outlineParameters = { visible: false };
  return material;
}

/** 이 매터리얼에 외곽선을 그릴지 결정해 userData 에 기록한다 */
function ensureOutlineParameters(material: THREE.Material): void {
  if (material.userData?.outlineParameters) return;
  const lit = (material as THREE.MeshStandardMaterial).isMeshStandardMaterial === true ||
    isToonMaterial(material);
  const visible = lit && !material.transparent && material.opacity >= 1;
  material.userData.outlineParameters = { visible };
}

/** 외곽선 두께·색 (매터리얼별 미세 조정) */
function outlineFor(base: THREE.Material): { visible: boolean; thickness?: number; color?: number[] } {
  const marked = base.userData?.outlineParameters;
  if (marked && marked.visible === false) return { visible: false };
  return { visible: true, thickness: 0.0022, color: [0.055, 0.085, 0.145] };
}

function supportsToon(base: THREE.Material): boolean {
  const any = base as THREE.Material & {
    isMeshStandardMaterial?: boolean;
    isMeshPhongMaterial?: boolean;
    isMeshLambertMaterial?: boolean;
  };
  if (any.isMeshStandardMaterial || any.isMeshPhongMaterial || any.isMeshLambertMaterial) {
    // 물·거품·반투명 링은 지금의 광택/투명도를 그대로 두는 편이 자연스럽다
    return !base.transparent;
  }
  return false;
}

/**
 * MeshStandardMaterial → 셀 셰이딩 매터리얼.
 * 램프 텍스처로 단을 만들고, onBeforeCompile 로 하늘빛 프레넬 림라이트를 얹는다.
 */
function buildToonMaterial(base: THREE.MeshStandardMaterial): THREE.MeshToonMaterial {
  const material = new THREE.MeshToonMaterial({
    color: base.color.clone(),
    map: base.map ?? null,
    gradientMap: toonRamp(),
    vertexColors: base.vertexColors === true,
    side: base.side,
    fog: base.fog,
    depthWrite: base.depthWrite,
    depthTest: base.depthTest,
    opacity: base.opacity,
    transparent: base.transparent,
    emissive: base.emissive ? base.emissive.clone() : new THREE.Color(0x000000),
    emissiveIntensity: base.emissiveIntensity ?? 1,
    emissiveMap: base.emissiveMap ?? null,
  });
  // 각진 면을 부드러운 곡면으로 — 노멀은 sync 단계에서 매끈하게 다시 계산해 넣는다
  (material as unknown as { flatShading: boolean }).flatShading = false;
  material.name = `${base.name || 'mesh'}-toon`;
  material.userData[TOON_FLAG] = true;
  material.userData.look = 'toon';

  const outline = outlineFor(base);
  material.userData.outlineParameters = { ...outline };

  const isGround = outline.visible === false;
  const metal = base.metalness ?? 0;
  const rimColor = new THREE.Color(metal > 0.45 ? 0xf4f9ff : 0xa9d8ff);
  const rimStrength = isGround ? 0.16 : metal > 0.45 ? 0.8 : 0.5;
  const rimPower = metal > 0.45 ? 1.7 : 2.6;

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uRimColor = { value: rimColor };
    shader.uniforms.uRimStrength = { value: rimStrength };
    shader.uniforms.uRimPower = { value: rimPower };
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        '#include <common>\nuniform vec3 uRimColor;\nuniform float uRimStrength;\nuniform float uRimPower;',
      )
      .replace(
        '#include <opaque_fragment>',
        [
          '// 하늘빛 프레넬 림라이트 — 실루엣 가장자리에 하늘 반사광을 얹는다',
          'float rimFacing = 1.0 - clamp( dot( normalize( normal ), normalize( vViewPosition ) ), 0.0, 1.0 );',
          'outgoingLight += uRimColor * ( pow( rimFacing, uRimPower ) * uRimStrength );',
          '#include <opaque_fragment>',
        ].join('\n'),
      );
  };
  material.customProgramCacheKey = () => 'oneone-toon-rim';
  return material;
}

/** 원본 매터리얼에 대응하는 카툰 매터리얼 (없으면 원본 그대로) */
export function toonMaterialFor(base: THREE.Material): THREE.Material {
  if (isToonMaterial(base) || !supportsToon(base)) {
    ensureOutlineParameters(base);
    return base;
  }
  const cached = toonByBase.get(base);
  if (cached) return cached;
  const toon = buildToonMaterial(base as THREE.MeshStandardMaterial);
  toonByBase.set(base, toon);
  ensureOutlineParameters(base);
  return toon;
}

// ---------------------------------------------------------------- 매끈한 노멀

const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _c = new THREE.Vector3();
const _ab = new THREE.Vector3();
const _ac = new THREE.Vector3();
const _face = new THREE.Vector3();
const _avg = new THREE.Vector3();
const _e1 = new THREE.Vector3();
const _e2 = new THREE.Vector3();
const _corners = [_a, _b, _c];

/**
 * 같은 자리의 정점 노멀을 평균 내 곡면을 매끈하게 만든 지오메트리 사본.
 * 45° 이상 꺾이는 모서리(상자 모서리 등)는 그대로 각지게 남긴다.
 */
export function smoothGeometry(base: THREE.BufferGeometry): THREE.BufferGeometry {
  const cached = base.userData?.[SMOOTH_KEY] as THREE.BufferGeometry | undefined;
  if (cached) return cached;

  const geo = base.clone();
  geo.name = `${base.name || 'geo'}-smooth`;
  const position = geo.getAttribute('position') as THREE.BufferAttribute | undefined;
  if (!position || position.count < 3) return geo;

  const count = position.count;
  const welded = new Int32Array(count);
  const keyToId = new Map<string, number>();
  let weldedCount = 0;
  for (let i = 0; i < count; i += 1) {
    const key = `${Math.round(position.getX(i) * 1000)},${Math.round(position.getY(i) * 1000)},${Math.round(
      position.getZ(i) * 1000,
    )}`;
    let id = keyToId.get(key);
    if (id === undefined) {
      id = weldedCount;
      weldedCount += 1;
      keyToId.set(key, id);
    }
    welded[i] = id;
  }

  const faceCount = Math.floor(count / 3);
  const faceNormals = new Float32Array(faceCount * 3);
  const accum = new Float32Array(weldedCount * 3);

  for (let f = 0; f < faceCount; f += 1) {
    const i0 = f * 3;
    _a.fromBufferAttribute(position, i0);
    _b.fromBufferAttribute(position, i0 + 1);
    _c.fromBufferAttribute(position, i0 + 2);
    _ab.subVectors(_b, _a);
    _ac.subVectors(_c, _a);
    _face.crossVectors(_ab, _ac);
    const area = _face.length();
    if (area > 1e-12) _face.divideScalar(area);
    faceNormals[i0] = _face.x;
    faceNormals[i0 + 1] = _face.y;
    faceNormals[i0 + 2] = _face.z;
    // 정점마다 그 모서리에서의 각도로 무게를 준다 (같은 면이 여러 삼각형에 걸쳐도 한 번만 반영)
    for (let k = 0; k < 3; k += 1) {
      const current = _corners[k];
      _e1.subVectors(_corners[(k + 1) % 3], current);
      _e2.subVectors(_corners[(k + 2) % 3], current);
      const l1 = _e1.length();
      const l2 = _e2.length();
      const weight =
        l1 > 1e-9 && l2 > 1e-9
          ? Math.acos(THREE.MathUtils.clamp(_e1.dot(_e2) / (l1 * l2), -1, 1))
          : 0;
      const id = welded[i0 + k] * 3;
      accum[id] += _face.x * weight;
      accum[id + 1] += _face.y * weight;
      accum[id + 2] += _face.z * weight;
    }
  }

  const normals = new Float32Array(count * 3);
  for (let f = 0; f < faceCount; f += 1) {
    const i0 = f * 3;
    _face.set(faceNormals[i0], faceNormals[i0 + 1], faceNormals[i0 + 2]);
    const faceLength = _face.length();
    if (faceLength < 1e-9) {
      for (let k = 0; k < 3; k += 1) {
        normals[(i0 + k) * 3 + 1] = 1;
      }
      continue;
    }
    _face.divideScalar(faceLength);
    for (let k = 0; k < 3; k += 1) {
      const vertex = i0 + k;
      const id = welded[vertex] * 3;
      _avg.set(accum[id], accum[id + 1], accum[id + 2]);
      if (_avg.lengthSq() < 1e-12) {
        normals[vertex * 3] = _face.x;
        normals[vertex * 3 + 1] = _face.y;
        normals[vertex * 3 + 2] = _face.z;
        continue;
      }
      _avg.normalize();
      // 모서리(꺾임)면 면 노멀을 그대로 써서 각을 살린다
      const useAvg = _avg.dot(_face) >= CREASE_COS;
      const nx = useAvg ? _avg.x : _face.x;
      const ny = useAvg ? _avg.y : _face.y;
      const nz = useAvg ? _avg.z : _face.z;
      normals[vertex * 3] = nx;
      normals[vertex * 3 + 1] = ny;
      normals[vertex * 3 + 2] = nz;
    }
  }

  geo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  geo.userData.toonBase = base;
  base.userData[SMOOTH_KEY] = geo;
  return geo;
}

// ---------------------------------------------------------------- 씬에 적용

function applyToMesh(mesh: THREE.Mesh): void {
  const material = mesh.material;
  if (Array.isArray(material) || !material) return;

  if (current === 'toon') {
    const toon = toonMaterialFor(material);
    if (toon !== material && mesh.material !== toon) {
      mesh.userData.syntyMaterial = material;
      mesh.material = toon;
    }
    ensureOutlineParameters(mesh.material as THREE.Material);
    const geometry = mesh.geometry as THREE.BufferGeometry;
    if (!mesh.userData.smoothGeometry && isToonMaterial(mesh.material as THREE.Material) && !geometry.userData?.noSmooth) {
      mesh.userData.syntyGeometry = geometry;
      mesh.geometry = smoothGeometry(geometry);
      mesh.userData.smoothGeometry = true;
    }
  } else {
    const base = mesh.userData.syntyMaterial as THREE.Material | undefined;
    if (base) {
      mesh.material = base;
      delete mesh.userData.syntyMaterial;
    }
    const geo = mesh.userData.syntyGeometry as THREE.BufferGeometry | undefined;
    if (geo) {
      mesh.geometry = geo;
      delete mesh.userData.syntyGeometry;
      delete mesh.userData.smoothGeometry;
    }
  }
}

function applyLook(root: THREE.Object3D): void {
  root.traverse((object) => {
    const mesh = object as THREE.Mesh;
    if (!mesh.isMesh || (mesh as unknown as THREE.Sprite).isSprite) return;
    applyToMesh(mesh);
  });
}

/** 등록된 씬(또는 지정한 하위 트리)에 현재 룩을 적용한다 */
export function syncLook(root?: THREE.Object3D): void {
  if (root) {
    applyLook(root);
    return;
  }
  scenes.forEach((scene) => applyLook(scene));
}

/** 지오메트리를 버릴 때(홀 교체) 매끈 노멀 사본도 함께 정리 */
export function releaseLookGeometry(root: THREE.Object3D): void {
  root.traverse((object) => {
    const mesh = object as THREE.Mesh;
    if (!mesh.isMesh) return;
    const geometry = mesh.geometry as THREE.BufferGeometry | undefined;
    const base = geometry?.userData?.toonBase as THREE.BufferGeometry | undefined;
    if (!geometry || !base) return;
    geometry.dispose();
    if (base.userData) delete base.userData[SMOOTH_KEY];
    if (mesh.userData.smoothGeometry) {
      mesh.geometry = base;
      delete mesh.userData.smoothGeometry;
      delete mesh.userData.syntyGeometry;
    }
  });
}

// ---------------------------------------------------------------- 렌더

export interface LookRenderer {
  render(scene: THREE.Scene, camera: THREE.Camera): void;
  readonly outline: OutlineEffect;
}

function applyRendererTone(): void {
  if (!renderer) return;
  renderer.toneMappingExposure = current === 'toon' ? 1.04 : 1.0;
}

/**
 * 룩에 따라 그리는 렌더러.
 * 카툰 모드에서는 화면 공간 외곽선 패스(OutlineEffect)를 함께 그린다.
 */
export function createLookRenderer(webgl: THREE.WebGLRenderer): LookRenderer {
  renderer = webgl;
  const outline = new OutlineEffect(webgl, {
    defaultThickness: 0.0022,
    defaultColor: [0.055, 0.085, 0.145],
    defaultAlpha: 1,
    defaultKeepAlive: true,
  });
  applyRendererTone();
  return {
    outline,
    render(scene: THREE.Scene, camera: THREE.Camera): void {
      if (current === 'toon') outline.render(scene, camera);
      else webgl.render(scene, camera);
    },
  };
}
