/**
 * 그래픽 룩(폴리 ↔ 실사 PBR) 검증 스크립트 (npm run verify:look)
 *
 * - 폴리 모드: 원래 매터리얼·지오메트리·조명이 100% 그대로인지
 * - 실사 모드: PBR 매터리얼(map + normalMap + roughnessMap)로 바뀌고, 각진 메시 대신
 *   분할이 많은 둥근 메시(실사 변형 그룹)가 서고, 병합된 폴리 소품은 감춰지는지
 * - 물: 이중 스크롤 노멀맵을 쓰는 저거칠기 물리 매터리얼로 바뀌는지
 * - 환경맵(IBL): 장면에 연결되고, 폴리로 돌아오면 정확히 해제되는지
 * - 반복 전환에도 메터리얼·텍스처·오브젝트가 늘지 않는지(누수 없음)
 * - 홀을 넘겨도(코스를 새로 만들어도) 현재 룩이 그대로 유지되는지
 *
 * 렌더러/WebGL 없이 로직만 돌린다 (텍스처는 DataTexture 라 DOM 없이도 생성된다).
 */
import * as THREE from 'three';
import { createPine, createRockCluster, createTree } from '../src/game/scenery';
import { Course } from '../src/game/course';
import { HOLES } from '../src/game/courses';
import {
  LOOK_LABEL,
  createLookRenderer,
  getLook,
  markGround,
  registerLookScene,
  releaseLookGeometry,
  setLook,
  syncLook,
  toggleLook,
} from '../src/game/graphics';
import {
  buildEnvironmentScene,
  getEnvironmentTexture,
  pbrStats,
  setEnvironmentTextureForTest,
  surfaceTextures,
} from '../src/game/pbr';

let failures = 0;

function check(label: string, ok: boolean, detail = ''): void {
  if (ok) {
    console.log(`  [OK ] ${label}${detail ? ` — ${detail}` : ''}`);
  } else {
    failures += 1;
    console.log(`  [FAIL] ${label}${detail ? ` — ${detail}` : ''}`);
  }
}

function meshesUnder(root: THREE.Object3D): THREE.Mesh[] {
  const list: THREE.Mesh[] = [];
  root.traverse((object) => {
    const mesh = object as THREE.Mesh;
    if (mesh.isMesh) list.push(mesh);
  });
  return list;
}

function triangles(mesh: THREE.Mesh): number {
  const position = mesh.geometry.getAttribute('position');
  return position ? position.count / 3 : 0;
}

// ---------------------------------------------------------------- 장면 준비

const scene = new THREE.Scene();
const pine = createPine(1);
const tree = createTree(1);
const rocks = createRockCluster(1, 3);
tree.position.set(4, 0, 0);
rocks.position.set(-4, 0, 0);
scene.add(pine, tree, rocks);

const groundGeo = new THREE.PlaneGeometry(40, 40, 4, 4);
groundGeo.rotateX(-Math.PI / 2);
const groundMat = markGround(new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.94 }), 'fairway');
const ground = new THREE.Mesh(groundGeo, groundMat);
scene.add(ground);

const waterGeo = new THREE.CircleGeometry(3, 24);
waterGeo.rotateX(-Math.PI / 2);
const waterMat = new THREE.MeshStandardMaterial({ color: 0x39a9db, transparent: true, opacity: 0.9, roughness: 0.1 });
waterMat.userData.oneoneSurface = 'water';
const water = new THREE.Mesh(waterGeo, waterMat);
water.position.set(-4, 0, 4);
scene.add(water);

const original = new Map<THREE.Mesh, { material: THREE.Material; geometry: THREE.BufferGeometry }>();
scene.traverse((object) => {
  const mesh = object as THREE.Mesh;
  if (mesh.isMesh) original.set(mesh, { material: mesh.material as THREE.Material, geometry: mesh.geometry });
});

registerLookScene(scene);
syncLook(scene);

// ---------------------------------------------------------------- 폴리(기본) 상태

console.log('■ 폴리(Synty) 룩');
check('기본 룩은 폴리', getLook() === 'synty', getLook());
check('토글 라벨은 폴리 / 실사', LOOK_LABEL.synty === '폴리' && LOOK_LABEL.real === '실사', `${LOOK_LABEL.synty} · ${LOOK_LABEL.real}`);
check(
  '폴리 모드에서는 원래 매터리얼 그대로',
  [...original.keys()].every((mesh) => mesh.material === original.get(mesh)?.material),
);
check(
  '폴리 모드에서는 지오메트리도 그대로',
  [...original.keys()].every((mesh) => mesh.geometry === original.get(mesh)?.geometry),
);
check('폴리 모드에서는 환경맵이 없다', scene.environment === null);
check(
  '폴리 모드에서는 실사 변형 그룹이 붙지 않는다',
  (pine.userData.realVariant as THREE.Object3D | undefined) === undefined && pine.children.every((child) => !child.userData.oneoneVariantOf),
);
check('폴리 소품은 플랫 셰이딩', (pine.children[0] as THREE.Mesh).material instanceof THREE.MeshStandardMaterial &&
  ((pine.children[0] as THREE.Mesh).material as THREE.MeshStandardMaterial).flatShading === true);

const polyPineTris = meshesUnder(pine).reduce((sum, mesh) => sum + triangles(mesh), 0);

// ---------------------------------------------------------------- 실사로 전환

console.log('\n■ 실사(PBR) 룩');
const statsBefore = pbrStats();
setLook('real');
check('토글하면 실사 룩', getLook() === 'real', getLook());

const pineMesh = pine.children.find((child) => (child as THREE.Mesh).isMesh) as THREE.Mesh;
check('폴리 메시는 감춰진다', pineMesh.visible === false);
const pineReal = pine.userData.realVariant as THREE.Group | undefined;
check('실사 변형 그룹이 붙는다', Boolean(pineReal), pineReal?.name ?? '없음');
check('실사 변형만 보인다', Boolean(pineReal) && pineReal.visible === true);

const realPineTris = pineReal ? meshesUnder(pineReal).reduce((sum, mesh) => sum + triangles(mesh), 0) : 0;
check(
  '실사 메시는 분할이 훨씬 많다 (각진 폴리 티 벗기기)',
  realPineTris > polyPineTris * 2.5,
  `폴리 ${polyPineTris} → 실사 ${realPineTris} 삼각형`,
);

const realMaterials = (pineReal ? meshesUnder(pineReal) : []).map((mesh) => mesh.material as THREE.MeshStandardMaterial);
check('실사 매터리얼은 모두 oneoneReal 표식을 갖는다', realMaterials.every((material) => material.userData.oneoneReal === true));
check(
  '실사 매터리얼은 플랫 셰이딩을 끈다',
  realMaterials.every((material) => material.flatShading === false),
);
check(
  '실사 매터리얼에는 map · normalMap · roughnessMap 이 모두 있다',
  realMaterials.every((material) => Boolean(material.map) && Boolean(material.normalMap) && Boolean(material.roughnessMap)),
  realMaterials.map((material) => `${material.userData.oneoneSurface}:${[material.map, material.normalMap, material.roughnessMap].filter(Boolean).length}/3`).join(' '),
);
check(
  '실사 매터리얼은 환경 반사 강도를 갖는다',
  realMaterials.every((material) => (material.envMapIntensity ?? 0) > 0),
);
check(
  '나무 껍질과 잎이 서로 다른 PBR 재질로 나뉜다',
  new Set(realMaterials.map((material) => material.userData.oneoneSurface)).size >= 2,
  [...new Set(realMaterials.map((material) => material.userData.oneoneSurface))].join(', '),
);

const groundReal = ground.material as THREE.MeshStandardMaterial;
check('지면이 잔디 PBR 재질로 바뀐다', groundReal.userData.oneoneReal === true && groundReal.userData.oneoneSurface === 'fairway');
check('지면 재질에 텍스처 3종이 붙는다', Boolean(groundReal.map && groundReal.normalMap && groundReal.roughnessMap));
check('지면은 정점 색(스트라이프·구역 톤)을 유지한다', groundReal.vertexColors === true);

const waterReal = water.material as THREE.MeshPhysicalMaterial;
check('물은 물리 매터리얼로 바뀐다', waterReal.isMeshPhysicalMaterial === true, waterReal.type);
check('물에는 노멀맵(잔물결)이 있고 거칠기가 아주 낮다', Boolean(waterReal.normalMap) && waterReal.roughness <= 0.12, `roughness ${waterReal.roughness}`);
check('물은 하늘 환경을 비춘다 (envMapIntensity ≥ 1)', (waterReal.envMapIntensity ?? 0) >= 1, String(waterReal.envMapIntensity));

// PBR 텍스처가 실제로 요철을 담고 있는지 (노멀맵 분산)
const fairwaySet = surfaceTextures('fairway');
const normalData = fairwaySet.normalMap.image.data as Uint8Array;
let normalMin = 255;
let normalMax = 0;
for (let i = 0; i < normalData.length; i += 4) {
  const value = normalData[i];
  if (value < normalMin) normalMin = value;
  if (value > normalMax) normalMax = value;
}
check('잔디 노멀맵에 방향 요철이 있다', normalMax - normalMin > 12, `R ${normalMin}~${normalMax}`);
const colorData = fairwaySet.map.image.data as Uint8Array;
let colorMin = 255;
let colorMax = 0;
for (let i = 0; i < colorData.length; i += 4) {
  const value = colorData[i + 1];
  if (value < colorMin) colorMin = value;
  if (value > colorMax) colorMax = value;
}
check('잔디 색상맵에 잔디 결 변화가 있다', colorMax - colorMin > 20, `G ${colorMin}~${colorMax}`);
check(
  '텍스처 타일이 종류별 미터 단위로 반복된다',
  Math.abs(fairwaySet.map.repeat.x - 1 / 4.2) < 1e-6,
  `repeat ${fairwaySet.map.repeat.x.toFixed(3)}`,
);

// ---------------------------------------------------------------- 환경맵(IBL)

console.log('\n■ 환경맵 (IBL)');
const envScene = buildEnvironmentScene();
let dome = 0;
let sun = 0;
let groundDisc = 0;
envScene.traverse((object) => {
  const mesh = object as THREE.Mesh;
  if (!mesh.isMesh) return;
  const material = mesh.material as THREE.MeshBasicMaterial;
  if (!material?.isMeshBasicMaterial && !(material as THREE.ShaderMaterial).isShaderMaterial) return;
  if (mesh.geometry.type === 'SphereGeometry') dome += 1;
  if (mesh.geometry.type === 'ConeGeometry') groundDisc += 1;
  if (mesh.geometry.type === 'CircleGeometry') groundDisc += 1;
  const color = (material as THREE.MeshBasicMaterial).color;
  if (color && color.r > 3) sun += 1;
});
check('환경 장면에 하늘 돔이 있다', dome >= 1);
check('환경 장면에 태양(HDR 하이라이트)이 있다', sun >= 1, `밝기 ${sun}`);
check('환경 장면에 지면·숲 띠가 있다', groundDisc >= 2);
check('헤드리스에서는 환경맵이 null (렌더러 없음)', getEnvironmentTexture() === null);

// 환경맵이 있으면 장면에 연결되는지 (테스트용 텍스처 주입)
const fakeEnv = new THREE.Texture();
setEnvironmentTextureForTest(fakeEnv);
syncLook();
check('환경맵이 장면에 연결된다', scene.environment === fakeEnv);
setEnvironmentTextureForTest(null);
syncLook();
check('환경맵이 없으면 장면에서 해제된다', scene.environment === null);

// ---------------------------------------------------------------- 반복 전환 · 누수

console.log('\n■ 반복 전환 (누수 없음)');
const statsAfterFirst = pbrStats();
const childrenBefore = pine.children.length;
for (let i = 0; i < 5; i += 1) toggleLook();
setLook('real');
check('다섯 번 오가도 실사 변형 그룹은 하나', pine.children.filter((child) => child.userData.oneoneVariantOf === 'real').length === 1);
check('다섯 번 오가도 소품 자식 수가 늘지 않는다', pine.children.length === childrenBefore, `${childrenBefore} → ${pine.children.length}`);
check(
  '텍스처 캐시가 늘지 않는다',
  pbrStats().textures === statsAfterFirst.textures && pbrStats().kinds === statsAfterFirst.kinds,
  `${statsAfterFirst.textures} → ${pbrStats().textures}`,
);
check('처음 실사로 갈 때 텍스처가 만들어진다', statsAfterFirst.textures > statsBefore.textures, `${statsBefore.textures} → ${statsAfterFirst.textures}`);
check(
  '반복 동기화에도 매터리얼이 흔들리지 않는다',
  ground.material === groundReal && (pineReal ? pineReal.children[0].material : null) === realMaterials[0],
);

// ---------------------------------------------------------------- 폴리로 복귀

console.log('\n■ 폴리로 복귀');
setLook('synty');
check('폴리로 돌아오면 원래 매터리얼', ground.material === groundMat && pineMesh.material === original.get(pineMesh)?.material);
check('폴리로 돌아오면 원래 지오메트리', pineMesh.geometry === original.get(pineMesh)?.geometry);
check('폴리 메시가 다시 보인다', pineMesh.visible === true);
check('실사 변형은 감춰진다', pineReal?.visible === false);
check('물 매터리얼은 처음 그대로', water.material === waterMat);
check('환경맵이 해제된다', scene.environment === null);
check(
  '모든 메시가 원래대로',
  [...original.keys()].every((mesh) => mesh.material === original.get(mesh)?.material && mesh.geometry === original.get(mesh)?.geometry),
);

// ---------------------------------------------------------------- 홀 교체

console.log('\n■ 홀 교체');
setLook('real');
const courseScene = new THREE.Scene();
registerLookScene(courseScene);
const hole1 = new Course(courseScene, HOLES[0]);
syncLook(courseScene);
const kindsOf = (root: THREE.Object3D): Set<string> => {
  const kinds = new Set<string>();
  root.traverse((object) => {
    const mesh = object as THREE.Mesh;
    if (!mesh.isMesh) return;
    const material = mesh.material as THREE.MeshStandardMaterial;
    if (material.userData?.oneoneReal === true) kinds.add(String(material.userData.oneoneSurface));
  });
  return kinds;
};
const hole1Kinds = kindsOf(hole1.group);
check('실사 상태에서 새 홀의 지면·소품이 PBR 로 채워진다', hole1Kinds.has('fairway') && hole1Kinds.has('turf'), [...hole1Kinds].join(', '));
const hole1Variants = (() => {
  let count = 0;
  hole1.group.traverse((object) => {
    if (object.userData?.oneoneVariantOf === 'real') count += 1;
  });
  return count;
})();
check('새 홀에도 실사 변형 메시가 붙는다', hole1Variants > 20, `${hole1Variants}개`);
releaseLookGeometry(hole1.group);
hole1.dispose();
const hole2 = new Course(courseScene, HOLES[1]);
syncLook(courseScene);
check('홀을 넘겨도 실사 룩이 유지된다', kindsOf(hole2.group).has('green'), [...kindsOf(hole2.group)].join(', '));
hole2.dispose();
setLook('synty');
check('홀 교체 후 폴리로 돌아와도 오류 없음', getLook() === 'synty');

// 렌더러 없이도 룩 렌더러가 안전하게 만들어지는지 (WebGL 없으면 생성 불가 → 생략)
check('createLookRenderer 는 함수다', typeof createLookRenderer === 'function');

console.log(`\n그래픽 룩 검증 ${failures === 0 ? '통과 ✅' : `실패 ${failures}건 ❌`}`);
if (failures > 0) process.exit(1);
