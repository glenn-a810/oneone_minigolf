import * as THREE from 'three';

/** 코스 장식(나무·바위·구름)과 공 메쉬. 지오메트리는 홀 교체 시 dispose()로 정리한다. */

const trunkMat = new THREE.MeshStandardMaterial({ color: 0xa9764f, roughness: 0.95 });
const leafMats = [
  new THREE.MeshStandardMaterial({ color: 0x63c96a, roughness: 0.85, flatShading: true }),
  new THREE.MeshStandardMaterial({ color: 0x4fb85c, roughness: 0.85, flatShading: true }),
  new THREE.MeshStandardMaterial({ color: 0x7fdd85, roughness: 0.85, flatShading: true }),
];
const rockMat = new THREE.MeshStandardMaterial({ color: 0xb9c2c9, roughness: 0.95, flatShading: true });
const cloudMat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 1,
  flatShading: true,
  emissive: 0xffffff,
  emissiveIntensity: 0.12,
});

const trunkGeo = new THREE.CylinderGeometry(0.05, 0.075, 0.52, 6);
const leafGeo = new THREE.SphereGeometry(1, 10, 8);
const rockGeo = new THREE.IcosahedronGeometry(1, 0);
const cloudGeo = new THREE.SphereGeometry(1, 10, 8);

export function createTree(scale = 1): THREE.Group {
  const g = new THREE.Group();

  const trunk = new THREE.Mesh(trunkGeo, trunkMat);
  trunk.position.y = 0.26;
  trunk.castShadow = true;
  g.add(trunk);

  const blobs: Array<[number, number, number, number]> = [
    [0, 0.66, 0, 0.36],
    [0.2, 0.5, 0.14, 0.25],
    [-0.18, 0.54, -0.12, 0.23],
    [0.02, 0.86, -0.02, 0.2],
  ];
  blobs.forEach(([x, y, z, r], i) => {
    const leaf = new THREE.Mesh(leafGeo, leafMats[i % leafMats.length]);
    leaf.position.set(x, y, z);
    leaf.scale.setScalar(r);
    leaf.castShadow = true;
    g.add(leaf);
  });

  g.scale.setScalar(scale);
  return g;
}

export function createRock(scale = 1): THREE.Mesh {
  const rock = new THREE.Mesh(rockGeo, rockMat);
  const s = scale;
  rock.scale.set(0.26 * s, 0.2 * s, 0.24 * s);
  rock.position.y = 0.1 * s;
  rock.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
  rock.castShadow = true;
  rock.receiveShadow = true;
  return rock;
}

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

/** 플레이어 공 (색상 + 회전 확인용 흰 점) */
export function createBall(color: number, radius: number, transparent = false): THREE.Group {
  const g = new THREE.Group();

  const mat = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.34,
    metalness: 0.06,
    transparent,
    opacity: transparent ? 0.62 : 1,
  });
  const ball = new THREE.Mesh(new THREE.SphereGeometry(radius, 24, 18), mat);
  ball.castShadow = !transparent;
  g.add(ball);

  const dotMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.5,
    transparent,
    opacity: transparent ? 0.75 : 1,
  });
  const dot = new THREE.Mesh(new THREE.SphereGeometry(radius * 0.24, 10, 8), dotMat);
  dot.position.set(0, radius * 0.9, 0);
  g.add(dot);

  return g;
}

