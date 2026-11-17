import * as THREE from 'three';
import { ballTexture, cloudTexture, softDotTexture } from './textures';

/**
 * 코스 장식(소나무·활엽수·바위·덤불·구름)과 공 메쉬.
 * 지오메트리/매터리얼은 모듈 공용이라 홀을 바꿔도 다시 만들지 않는다.
 */

const trunkMat = new THREE.MeshStandardMaterial({ color: 0x9c6b46, roughness: 0.95 });
const trunkDarkMat = new THREE.MeshStandardMaterial({ color: 0x6f4a2f, roughness: 0.96 });
const leafMats = [
  new THREE.MeshStandardMaterial({ color: 0x5cbb52, roughness: 0.86, flatShading: true }),
  new THREE.MeshStandardMaterial({ color: 0x49a844, roughness: 0.86, flatShading: true }),
  new THREE.MeshStandardMaterial({ color: 0x76cf63, roughness: 0.84, flatShading: true }),
  new THREE.MeshStandardMaterial({ color: 0x3f9a3c, roughness: 0.88, flatShading: true }),
];
const pineMats = [
  new THREE.MeshStandardMaterial({ color: 0x2f7d46, roughness: 0.9, flatShading: true }),
  new THREE.MeshStandardMaterial({ color: 0x276b3c, roughness: 0.9, flatShading: true }),
  new THREE.MeshStandardMaterial({ color: 0x388c4e, roughness: 0.88, flatShading: true }),
];
const rockMat = new THREE.MeshStandardMaterial({ color: 0xa9b3b8, roughness: 0.95, flatShading: true });
const bushMat = new THREE.MeshStandardMaterial({ color: 0x54a84b, roughness: 0.92, flatShading: true });
const cloudMat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 1,
  flatShading: true,
  emissive: 0xffffff,
  emissiveIntensity: 0.08,
});

const trunkGeo = new THREE.CylinderGeometry(0.05, 0.085, 0.62, 7);
const trunkTallGeo = new THREE.CylinderGeometry(0.06, 0.11, 1.5, 7);
const leafGeo = new THREE.SphereGeometry(1, 11, 8);
const pineConeGeo = new THREE.ConeGeometry(1, 1, 10);
const rockGeo = new THREE.IcosahedronGeometry(1, 1);
const cloudGeo = new THREE.SphereGeometry(1, 12, 9);

/** 활엽수: 기둥 + 여러 덩어리의 잎 (층층이) */
export function createTree(scale = 1): THREE.Group {
  const g = new THREE.Group();

  const trunk = new THREE.Mesh(trunkGeo, trunkMat);
  trunk.position.y = 0.31;
  trunk.castShadow = true;
  g.add(trunk);

  const blobs: Array<[number, number, number, number, number]> = [
    [0, 0.78, 0, 0.4, 0],
    [0.26, 0.62, 0.16, 0.28, 1],
    [-0.24, 0.66, -0.14, 0.26, 2],
    [0.04, 1.02, -0.03, 0.24, 3],
    [-0.14, 0.9, 0.18, 0.2, 1],
    [0.2, 0.88, -0.2, 0.18, 2],
  ];
  blobs.forEach(([x, y, z, r, mat]) => {
    const leaf = new THREE.Mesh(leafGeo, leafMats[mat % leafMats.length]);
    leaf.position.set(x, y, z);
    leaf.scale.setScalar(r);
    leaf.castShadow = true;
    g.add(leaf);
  });

  g.scale.setScalar(scale);
  return g;
}

/** 소나무: 긴 기둥 + 층층이 원뿔 */
export function createPine(scale = 1): THREE.Group {
  const g = new THREE.Group();

  const trunk = new THREE.Mesh(trunkTallGeo, trunkDarkMat);
  trunk.position.y = 0.75;
  trunk.castShadow = true;
  g.add(trunk);

  const tiers = 4;
  for (let i = 0; i < tiers; i += 1) {
    const t = i / (tiers - 1);
    const radius = 0.62 - t * 0.34;
    const height = 0.75 - t * 0.16;
    const cone = new THREE.Mesh(pineConeGeo, pineMats[i % pineMats.length]);
    cone.scale.set(radius, height, radius);
    cone.position.y = 1.05 + i * 0.42;
    cone.castShadow = true;
    g.add(cone);
  }

  g.scale.setScalar(scale);
  return g;
}

/** 바위: 울퉁불퉁한 돌 + 이끼 덩어리 */
export function createRock(scale = 1): THREE.Mesh {
  const rock = new THREE.Mesh(rockGeo, rockMat);
  const s = scale;
  rock.scale.set(0.34 * s, 0.26 * s, 0.3 * s);
  rock.position.y = 0.13 * s;
  rock.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
  rock.castShadow = true;
  rock.receiveShadow = true;
  return rock;
}

/** 덤불 */
export function createBush(scale = 1): THREE.Group {
  const g = new THREE.Group();
  const blobs: Array<[number, number, number, number]> = [
    [0, 0.16, 0, 0.26],
    [0.2, 0.13, 0.08, 0.18],
    [-0.18, 0.12, -0.06, 0.17],
  ];
  blobs.forEach(([x, y, z, r]) => {
    const blob = new THREE.Mesh(leafGeo, bushMat);
    blob.position.set(x, y, z);
    blob.scale.set(r, r * 0.78, r);
    blob.castShadow = true;
    g.add(blob);
  });
  g.scale.setScalar(scale);
  return g;
}

/** 구름 (대기실에서 사용) */
export function createCloud(scale = 1): THREE.Group {
  const g = new THREE.Group();
  const blobs: Array<[number, number, number, number]> = [
    [0, 0, 0, 0.62],
    [0.62, -0.1, 0.06, 0.44],
    [-0.6, -0.08, -0.05, 0.4],
    [0.2, 0.24, -0.02, 0.34],
  ];
  blobs.forEach(([x, y, z, r]) => {
    const b = new THREE.Mesh(cloudGeo, cloudMat);
    b.position.set(x, y, z);
    b.scale.setScalar(r);
    g.add(b);
  });
  g.scale.setScalar(scale);
  return g;
}

/** 하늘에 띄우는 반투명 구름 스프라이트 */
export function createCloudSprite(scale = 1): THREE.Sprite | null {
  const map = cloudTexture();
  if (!map) return null;
  const material = new THREE.SpriteMaterial({ map, transparent: true, opacity: 0.85, depthWrite: false });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(22 * scale, 9 * scale, 1);
  return sprite;
}

/** 플레이어 공 (딤플 텍스처 + 흰 점) */
export function createBall(color: number, radius: number, transparent = false): THREE.Group {
  const g = new THREE.Group();

  const dimple = ballTexture();
  const mat = new THREE.MeshStandardMaterial({
    color,
    map: dimple ?? null,
    roughness: 0.32,
    metalness: 0.02,
    transparent,
    opacity: transparent ? 0.55 : 1,
  });
  const ball = new THREE.Mesh(new THREE.SphereGeometry(radius, 28, 20), mat);
  ball.castShadow = !transparent;
  g.add(ball);

  const dotMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.45,
    transparent,
    opacity: transparent ? 0.75 : 1,
  });
  const dot = new THREE.Mesh(new THREE.SphereGeometry(radius * 0.22, 10, 8), dotMat);
  dot.position.set(0, radius * 0.92, 0);
  g.add(dot);

  return g;
}

/** 파티클용 소프트 스프라이트 텍스처 */
export function particleTexture(): THREE.Texture | null {
  return softDotTexture();
}
