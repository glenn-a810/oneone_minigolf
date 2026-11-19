/**
 * 그래픽 룩(폴리 ↔ 카툰) 검증 스크립트 (npm run verify:look)
 * - 카툰 모드에서 매터리얼이 셀 셰이딩용으로 바뀌고 flatShading 이 꺼지는지
 * - 매끈한 버텍스 노멀이 계산되는지(상자 모서리는 각지게, 곡면은 부드럽게)
 * - 지면/물은 외곽선을 켜지 않고 소품은 켜지는지
 * - 폴리로 되돌리면 원래 매터리얼·지오메트리로 정확히 복원되는지
 * 렌더러/DOM 없이 로직만 돌린다.
 */
import * as THREE from 'three';
import { createPine, createRockCluster } from '../src/game/scenery';
import { Course } from '../src/game/course';
import { HOLES } from '../src/game/courses';
import {
  getLook,
  markGround,
  registerLookScene,
  setLook,
  smoothGeometry,
  syncLook,
} from '../src/game/graphics';

let failures = 0;

function check(label: string, ok: boolean, detail = ''): void {
  if (ok) {
    console.log(`  [OK ] ${label}${detail ? ` — ${detail}` : ''}`);
  } else {
    failures += 1;
    console.log(`  [FAIL] ${label}${detail ? ` — ${detail}` : ''}`);
  }
}

function meshMaterials(root: THREE.Object3D): THREE.Material[] {
  const list: THREE.Material[] = [];
  root.traverse((object) => {
    const mesh = object as THREE.Mesh;
    if (mesh.isMesh && !Array.isArray(mesh.material)) list.push(mesh.material as THREE.Material);
  });
  return list;
}

// ---------------------------------------------------------------- 장면 준비

const scene = new THREE.Scene();
const pine = createPine(1);
pine.position.set(0, 0, 0);
scene.add(pine);

const rocks = createRockCluster(1, 3);
rocks.position.set(3, 0, 0);
scene.add(rocks);

const groundGeo = new THREE.PlaneGeometry(40, 40, 4, 4);
groundGeo.rotateX(-Math.PI / 2);
const groundMat = markGround(new THREE.MeshStandardMaterial({ color: 0x7cc857, roughness: 0.95 }));
scene.add(new THREE.Mesh(groundGeo, groundMat));

const waterGeo = new THREE.CircleGeometry(3, 24);
waterGeo.rotateX(-Math.PI / 2);
const waterMat = new THREE.MeshStandardMaterial({ color: 0x39a9db, transparent: true, opacity: 0.9 });
const water = new THREE.Mesh(waterGeo, waterMat);
water.position.set(-4, 0, 0);
scene.add(water);

const original = new Map<THREE.Mesh, { material: THREE.Material; geometry: THREE.BufferGeometry }>();
scene.traverse((object) => {
  const mesh = object as THREE.Mesh;
  if (!mesh.isMesh) return;
  original.set(mesh, { material: mesh.material as THREE.Material, geometry: mesh.geometry });
});

registerLookScene(scene);
syncLook(scene);

// ---------------------------------------------------------------- 폴리(기본) 상태

check('기본 룩은 Synty 폴리', getLook() === 'synty', getLook());
check(
  '폴리 모드에서는 원래 매터리얼 그대로',
  meshMaterials(scene).every((material) => material.userData.oneoneToon !== true),
);
check(
  '폴리 모드에서는 지오메트리도 그대로',
  [...original.entries()].every(([mesh, saved]) => mesh.geometry === saved.geometry),
);

// ---------------------------------------------------------------- 카툰으로 전환

setLook('toon');
check('토글하면 카툰 룩', getLook() === 'toon');

const pineMesh = pine.children.find((child) => (child as THREE.Mesh).isMesh) as THREE.Mesh;
const pineMaterial = pineMesh.material as THREE.MeshToonMaterial;
check('소품 매터리얼이 셀 셰이딩 매터리얼로 바뀐다', pineMaterial.userData.oneoneToon === true, pineMaterial.type);
check(
  '셀 셰이딩 매터리얼은 플랫 셰이딩을 끈다',
  (pineMaterial as unknown as { flatShading: boolean }).flatShading === false,
);
check('램프 텍스처(그라디언트 맵)를 쓴다', Boolean(pineMaterial.gradientMap), String(pineMaterial.gradientMap?.type));
check('정점 색상(면 톤)은 유지된다', pineMaterial.vertexColors === true);
check('원래 색은 그대로', pineMaterial.color.getHex() === 0xffffff || pineMaterial.color.getHex() !== 0x000000);

const rockMesh = rocks.children.find((child) => (child as THREE.Mesh).isMesh) as THREE.Mesh;
check(
  '바위도 카툰 매터리얼로 바뀐다',
  (rockMesh.material as THREE.Material).userData.oneoneToon === true,
);
check(
  '소품에는 외곽선을 켠다',
  (pineMesh.material as THREE.Material).userData.outlineParameters?.visible === true,
);
check('지면에는 외곽선을 켜지 않는다', groundMat.userData.outlineParameters?.visible === false);
check('물(반투명)에는 외곽선을 켜지 않는다', waterMat.userData.outlineParameters?.visible === false);

// ---------------------------------------------------------------- 매끈한 노멀

check(
  '카툰 모드에서는 매끈 노멀 지오메트리로 교체된다',
  pineMesh.geometry !== original.get(pineMesh)?.geometry && pineMesh.geometry.userData.toonBase !== undefined,
);

const boxGeo = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
const boxSmooth = smoothGeometry(boxGeo);
const boxNormals = boxSmooth.getAttribute('normal') as THREE.BufferAttribute;
let boxFlatCorners = 0;
for (let i = 0; i < boxNormals.count; i += 3) {
  const a = new THREE.Vector3().fromBufferAttribute(boxNormals, i);
  const b = new THREE.Vector3().fromBufferAttribute(boxNormals, i + 1);
  if (a.dot(b) > 0.999) boxFlatCorners += 1;
}
check('상자 모서리(90°)는 각지게 남는다', boxFlatCorners === boxNormals.count / 3, `같은 면 노멀 ${boxFlatCorners}개`);

const sphereGeo = new THREE.SphereGeometry(1, 12, 8);
const sphereSmooth = smoothGeometry(sphereGeo);
const sphereBase = new THREE.SphereGeometry(1, 12, 8);
const baseNormals = sphereBase.getAttribute('normal') as THREE.BufferAttribute;
const smoothNormals = sphereSmooth.getAttribute('normal') as THREE.BufferAttribute;
let smoothedDeltas = 0;
for (let i = 0; i < smoothNormals.count; i += 1) {
  const smooth = new THREE.Vector3().fromBufferAttribute(smoothNormals, i);
  const base = new THREE.Vector3().fromBufferAttribute(baseNormals, i);
  if (smooth.angleTo(base) > 0.02) smoothedDeltas += 1;
}
check('구면 노멀은 곡면을 따라 매끈해진다', smoothedDeltas > 0, `${smoothedDeltas}개 정점 노멀 재계산`);

// ---------------------------------------------------------------- 되돌리기

const toonMaterialAfter = pineMesh.material;
syncLook(scene);
check('반복 동기화에도 매터리얼이 흔들리지 않는다', pineMesh.material === toonMaterialAfter);

setLook('synty');
check('폴리로 되돌리면 원래 매터리얼', pineMesh.material === original.get(pineMesh)?.material);
check('폴리로 되돌리면 원래 지오메트리', pineMesh.geometry === original.get(pineMesh)?.geometry);
check(
  '물 매터리얼은 처음부터 끝까지 그대로',
  water.material === original.get(water)?.material,
);
check(
  '모든 메시가 원래대로',
  [...original.entries()].every(([mesh, saved]) => mesh.material === saved.material && mesh.geometry === saved.geometry),
);

setLook('toon');
setLook('synty');

// ---------------------------------------------------------------- 홀 교체

// 카툰 상태에서 홀을 넘겨도 새 코스가 자동으로 같은 룩을 입고, 지난 홀 사본은 정리된다
setLook('toon');
const courseScene = new THREE.Scene();
registerLookScene(courseScene);
const hole1 = new Course(courseScene, HOLES[0]);
syncLook(courseScene);
const hole1Meshes = (): THREE.Mesh[] => {
  const list: THREE.Mesh[] = [];
  hole1.group.traverse((object) => {
    if ((object as THREE.Mesh).isMesh) list.push(object as THREE.Mesh);
  });
  return list;
};
const hole1AllToon = hole1Meshes().every(
  (mesh) => !(mesh.material as THREE.Material).userData.outlineParameters?.visible ||
    (mesh.material as THREE.Material).userData.oneoneToon === true,
);
check('카툰 상태에서 새 홀도 셀 셰이딩으로 채워진다', hole1AllToon, `메쉬 ${hole1Meshes().length}개`);
hole1.dispose();
const hole2 = new Course(courseScene, HOLES[1]);
syncLook(courseScene);
let hole2Toon = 0;
let hole2Total = 0;
hole2.group.traverse((object) => {
  const mesh = object as THREE.Mesh;
  if (!mesh.isMesh) return;
  hole2Total += 1;
  if ((mesh.material as THREE.Material).userData.oneoneToon === true) hole2Toon += 1;
});
check('홀을 넘겨도 카툰 룩이 유지된다', hole2Toon > 0, `카툰 메쉬 ${hole2Toon}/${hole2Total}`);
hole2.dispose();
setLook('synty');

console.log(`\n그래픽 룩 검증 ${failures === 0 ? '통과 ✅' : `실패 ${failures}건 ❌`}`);
if (failures > 0) process.exit(1);
