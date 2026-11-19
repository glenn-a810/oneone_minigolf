import * as THREE from 'three';
import {
  createSurfaceMaterial,
  createWaterMaterial,
  ensureEnvironment,
  getEnvironmentTexture,
  prewarmSurfaces,
  updateWaterTime,
  type SurfaceKind,
} from './pbr';
import { realVariantFor } from './props';
import { CREASE_REAL, ensureBoxUv, roundedGeometry, smoothNormals } from './geo';

/**
 * 그래픽 룩(스타일) 전환 — 두 가지를 실시간으로 비교한다.
 *
 * - `synty` : Synty POLYGON 스타일. 각진 로우폴리 + 플랫 셰이딩 + 면 단위 정점 색 (기본값)
 * - `real`  : 실사형식(Realistic PBR). 둥글고 고분할된 메시 + 절차적 PBR 텍스처
 *             (map·normalMap·roughnessMap) + 환경 반사(IBL) + 실사 조명
 *
 * 토글 한 번에 페이지를 새로고침하지 않고 장면 전체를 바꾼다.
 * 씬을 다시 만들지 않고 ① 매터리얼 교체 ② 실사용 메시 그룹 표시/숨김 ③ 환경맵·조명 배분
 * 만 수행하므로 홀을 바꾸거나 새 골퍼가 들어와도 그대로 따라온다.
 */

export type GraphicLook = 'synty' | 'real';

export const LOOK_LABEL: Record<GraphicLook, string> = {
  synty: '폴리',
  real: '실사',
};

const LOOK_KEY = 'oneone:look:v2';
/** 실사 매터리얼 표식 */
const REAL_FLAG = 'oneoneReal';

// ---------------------------------------------------------------- 상태

function readStoredLook(): GraphicLook {
  try {
    const stored = localStorage.getItem(LOOK_KEY);
    if (stored === 'real') return 'real';
    if (stored === 'toon') return 'real'; // 이전 '카툰' 선택은 실사 비교로 이어진다
    return 'synty';
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
let waterClock = 0;

export function getLook(): GraphicLook {
  return current;
}

export function isReal(): boolean {
  return current === 'real';
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
  if (look === 'real') ensureEnvironment(renderer);
  syncLook();
  applyLookLights();
  applyEnvironmentAll();
  applyRendererTone();
  listeners.forEach((listener) => listener(look));
}

/** 폴리 ↔ 실사 한 번씩 전환하고 바뀐 룩을 돌려준다 */
export function toggleLook(): GraphicLook {
  setLook(current === 'real' ? 'synty' : 'real');
  return current;
}

/** 토글 대상 씬 등록 (플레이룸·대기실) */
export function registerLookScene(scene: THREE.Scene): void {
  scenes.add(scene);
  applyLook(scene);
  applyVariantGroups(scene);
  applyEnvironment(scene);
  applyLookLights();
}

// ---------------------------------------------------------------- 조명·환경

/**
 * 룩에 맞춰 조명을 다시 배분한다.
 * 실사 모드에서는 환경맵(IBL)이 반사광을 채우므로 하늘광을 조금 줄이고 태양은 그대로 둔다.
 * 폴리 모드로 돌아오면 처음 세팅값으로 정확히 되돌린다.
 */
function applyLookLights(): void {
  scenes.forEach((scene) => {
    scene.traverse((object) => {
      const light = object as THREE.Light;
      if (!light.isLight) return;
      const data = light.userData as { baseIntensity?: number };
      if (data.baseIntensity === undefined) data.baseIntensity = light.intensity;
      const base = data.baseIntensity;
      let scale = 1;
      if (current === 'real') {
        if ((light as THREE.HemisphereLight).isHemisphereLight) scale = 0.72;
        else if ((light as THREE.DirectionalLight).isDirectionalLight) scale = light.castShadow ? 1.0 : 0.9;
      }
      light.intensity = base * scale;
    });
  });
}

function applyEnvironment(scene: THREE.Scene): void {
  if (current === 'real') {
    scene.environment = getEnvironmentTexture();
    scene.environmentIntensity = 0.95;
  } else {
    scene.environment = null;
    scene.environmentIntensity = 1;
  }
}

function applyEnvironmentAll(): void {
  scenes.forEach((scene) => applyEnvironment(scene));
}

function applyRendererTone(): void {
  if (!renderer) return;
  renderer.toneMappingExposure = 1.0;
}

/** 실사 룩의 물결 시간 — 프레임마다 호출해도 안전하다 */
export function tickLook(dt: number): void {
  waterClock += dt;
  updateWaterTime(waterClock);
}

// ---------------------------------------------------------------- 매터리얼 변환

const realByBase = new WeakMap<THREE.Material, THREE.Material>();

function isRealMaterial(material: THREE.Material): boolean {
  return material.userData?.[REAL_FLAG] === true;
}

/** 폴리 소품 버킷 매터리얼인지 (병합된 소품 메시는 실사 모드에서 숨긴다) */
function isPropBucketMaterial(material: THREE.Material): boolean {
  return typeof material.userData?.oneonePropBucket === 'string' && !isRealMaterial(material);
}

/**
 * 지면/물처럼 별도 취급이 필요한 매터리얼에 표시한다.
 * 표면 종류를 함께 넘기면 실사 룩에서 그 종류의 PBR 텍스처가 붙는다.
 */
export function markGround<T extends THREE.Material>(material: T, kind?: SurfaceKind): T {
  material.userData.oneoneGround = true;
  if (kind) material.userData.oneoneSurface = kind;
  return material;
}

function classifyMaterial(material: THREE.Material): SurfaceKind {
  const tagged = material.userData?.oneoneSurface as SurfaceKind | undefined;
  if (tagged) return tagged;
  const lit = material as THREE.MeshStandardMaterial;
  if (lit.transparent && (lit.roughness ?? 1) <= 0.22) return 'water';
  return 'generic';
}

function isWaterMaterial(material: THREE.Material): boolean {
  return classifyMaterial(material) === 'water';
}

/** 원본 매터리얼에 대응하는 실사 매터리얼 (없으면 새로 만들어 캐시) */
function realMaterialFor(base: THREE.Material): THREE.Material {
  const cached = realByBase.get(base);
  if (cached) return cached;

  const kind = classifyMaterial(base);
  const std = base as THREE.MeshStandardMaterial;
  const color = std.color ?? new THREE.Color(0xffffff);
  const metalLike = (std.metalness ?? 0) >= 0.45;

  const plain = base.userData?.oneonePlainReal === true;
  const material = isWaterMaterial(base)
    ? createWaterMaterial({ color: 0x2a6f80, opacity: Math.max(0.4, std.opacity ?? 1) })
    : plain
    ? (() => {
        // 텍스처 없이 색만 — 원경 언덕처럼 UV 를 주면 오히려 반짝이는 면
        const matte = new THREE.MeshStandardMaterial({
          color: color,
          roughness: std.roughness ?? 0.95,
          metalness: 0,
          flatShading: false,
          vertexColors: std.vertexColors === true,
          envMapIntensity: 0.35,
        });
        matte.userData[REAL_FLAG] = true;
        matte.userData.oneoneSurface = kind;
        matte.name = 'real-hill';
        return matte;
      })()
    : createSurfaceMaterial(metalLike ? 'metal' : kind, {
        color: color,
        vertexColors: std.vertexColors === true,
        side: std.side,
        transparent: std.transparent === true,
        opacity: std.opacity ?? 1,
        depthWrite: std.depthWrite ?? true,
        emissive: std.emissive ? std.emissive.clone() : 0x000000,
        emissiveIntensity: std.emissiveIntensity ?? 1,
        keepMap: std.map ?? null,
        ...(metalLike ? { metalness: Math.max(0.65, std.metalness ?? 0), roughness: std.roughness ?? 0.3 } : {}),
      });

  realByBase.set(base, material);
  return material;
}

function swapMeshToReal(mesh: THREE.Mesh): void {
  const material = mesh.material as THREE.Material | undefined;
  if (!material || Array.isArray(material)) return;
  // 반투명 오버레이(가이드 링·거품·잔물결)와 기본 매터리얼은 폴리 그대로 둔다
  if ((material as THREE.MeshBasicMaterial).isMeshBasicMaterial) return;
  if (isRealMaterial(material)) return;
  if (material.transparent && !isWaterMaterial(material)) return;

  const real = realMaterialFor(material);
  if (real === material) return;
  // PBR 텍스처가 1m 격자로 반복되도록 월드 미터 박스 UV 를 한 번 만들어 둔다
  ensureBoxUv(mesh.geometry as THREE.BufferGeometry);
  if (mesh.userData.syntyMaterial === undefined) mesh.userData.syntyMaterial = material;
  mesh.material = real;
}

function restoreMeshToSynty(mesh: THREE.Mesh): void {
  const base = mesh.userData.syntyMaterial as THREE.Material | undefined;
  if (!base) return;
  mesh.material = base;
  delete mesh.userData.syntyMaterial;
}

/** 소품 그룹(폴리 메시 ↔ 실사 메시) 표시 전환 */
function applyVariant(group: THREE.Object3D): void {
  const key = group.userData?.propKey as string | undefined;
  if (!key) return;

  // 정적 소품은 재질별로 합친 실사 메시(real-merged)가 대신 서므로 개별 변형을 만들지 않는다
  if (group.userData.realMerged === true) {
    for (const child of group.children) {
      const variant = child.userData?.oneoneVariantOf as GraphicLook | undefined;
      child.visible = variant ? variant === current : current !== 'real';
    }
    return;
  }

  let real = group.userData.realVariant as THREE.Group | undefined;
  if (current === 'real' && !real) {
    const built = realVariantFor(key);
    if (built) {
      group.add(built);
      group.userData.realVariant = built;
      real = built;
    }
  }
  if (real) real.visible = current === 'real';

  for (const child of group.children) {
    if (real && child === real) continue;
    const variant = child.userData?.oneoneVariantOf as GraphicLook | undefined;
    if (variant) {
      child.visible = variant === current;
      continue;
    }
    // 폴리 메시: 실사 모드에서는 감춘다 (실사 메시가 같은 자리에 서 있다)
    child.visible = current !== 'real';
  }
}

function applyVariantGroups(root: THREE.Object3D): void {
  const groups: THREE.Object3D[] = [];
  root.traverse((object) => {
    if (object.userData?.propKey) groups.push(object);
    // 합쳐 둔 실사 메시 그룹은 통째로 보이거나 감춘다
    if (object.userData?.oneoneRealMerged) object.visible = current === 'real';
  });
  groups.forEach(applyVariant);
}

function applyLook(root: THREE.Object3D): void {
  root.traverse((object) => {
    const mesh = object as THREE.Mesh;
    if (!mesh.isMesh || (mesh as unknown as THREE.Sprite).isSprite) return;
    const material = mesh.material;
    if (Array.isArray(material) || !material) return;

    if (current === 'real') {
      // 병합된 폴리 소품 덩어리는 숨기고, 소품별 실사 메시를 보여 준다
      if (isPropBucketMaterial(material)) {
        if (mesh.visible) {
          mesh.userData.lookHidden = true;
          mesh.visible = false;
        }
        return;
      }
      if (mesh.userData.realRound === true && !mesh.userData.syntyRoundGeometry) {
        const rounded = smoothNormals(roundedGeometry(mesh.geometry, true), CREASE_REAL);
        mesh.userData.syntyRoundGeometry = mesh.geometry;
        mesh.geometry = rounded;
      }
      swapMeshToReal(mesh);
    } else {
      if (mesh.userData.lookHidden) {
        mesh.visible = true;
        delete mesh.userData.lookHidden;
      }
      const round = mesh.userData.syntyRoundGeometry as THREE.BufferGeometry | undefined;
      if (round) {
        mesh.geometry.dispose();
        mesh.geometry = round;
        delete mesh.userData.syntyRoundGeometry;
      }
      restoreMeshToSynty(mesh);
    }
  });
}

/** 등록된 씬(또는 지정한 하위 트리)에 현재 룩을 적용한다 */
export function syncLook(root?: THREE.Object3D): void {
  if (root) {
    applyLook(root);
    applyVariantGroups(root);
    return;
  }
  scenes.forEach((scene) => {
    applyLook(scene);
    applyVariantGroups(scene);
    applyEnvironment(scene);
  });
}

/** 홀을 버릴 때 룩 시스템이 남긴 표시만 정리한다 (지오메트리는 소유자가 dispose) */
export function releaseLookGeometry(root: THREE.Object3D): void {
  root.traverse((object) => {
    const mesh = object as THREE.Mesh;
    if (!mesh.isMesh) return;
    if (mesh.userData.lookHidden) {
      mesh.visible = true;
      delete mesh.userData.lookHidden;
    }
    delete mesh.userData.syntyMaterial;
  });
}

// ---------------------------------------------------------------- 렌더

export interface LookRenderer {
  render(scene: THREE.Scene, camera: THREE.Camera): void;
  /** 실사 텍스처·환경맵을 미리 만들어 전환 순간 끊김을 없앤다 */
  prewarm(): void;
}

export function createLookRenderer(webgl: THREE.WebGLRenderer): LookRenderer {
  renderer = webgl;
  if (current === 'real') ensureEnvironment(renderer);
  applyRendererTone();
  applyLookLights();
  applyEnvironmentAll();
  return {
    render(scene: THREE.Scene, camera: THREE.Camera): void {
      webgl.render(scene, camera);
    },
    prewarm(): void {
      ensureEnvironment(renderer);
      prewarmSurfaces([
        'turf',
        'fairway',
        'green',
        'sand',
        'soil',
        'rock',
        'stone',
        'wood',
        'bark',
        'leaf',
        'water',
        'metal',
        'fabric',
        'skin',
        'generic',
      ]);
    },
  };
}
