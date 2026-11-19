import * as THREE from 'three';
import {
  PALETTE,
  buildProp,
  column,
  lump,
  paintFaces,
  plank,
  seeded,
  type PropPart,
} from '../game/props';
import { markGround } from '../game/graphics';
import type { SurfaceKind } from '../game/pbr';
import {
  createBagStand,
  createBench,
  createClubhouse,
  createFlagpole,
  createFence,
  createGolfCart,
  createGrassTuft,
  createHedge,
  createLamp,
  createLily,
  createPatioSet,
  createPine,
  createReeds,
  createRockCluster,
  createTree,
} from '../game/scenery';
import { waterTexture } from '../game/textures';
import { createLabelSprite } from './avatar';

/**
 * 3D 대기실(클럽하우스 광장) 비주얼.
 *
 * Synty POLYGON 톤: 각진 잔디 지형, 돌 광장, 연못, 목재 클럽하우스,
 * 플레이룸 게이트, 그리고 벤치·가로등·울타리·카트·정원 소품까지 손으로 배치한다.
 * 이동 판정용 장애물 목록(obstacles)도 여기서 함께 돌려준다.
 */

const PLAZA_RADIUS = 15.2;
export const PLAZA_GATE = new THREE.Vector3(0, 0, -9);

export interface Obstacle {
  x: number;
  z: number;
  r: number;
}

export interface PlazaHandle {
  obstacles: Obstacle[];
  gate: THREE.Group;
  gateRing: THREE.Mesh | null;
  gateInner: THREE.Mesh | null;
  gateHalo: THREE.Mesh | null;
  gateGlow: THREE.PointLight | null;
  update: (dt: number) => void;
}

function noise2(x: number, z: number): number {
  const s = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453;
  return s - Math.floor(s);
}

function turf(base: number, x: number, z: number, out: THREE.Color): THREE.Color {
  const wave = Math.sin(x * 0.19 + Math.cos(z * 0.15) * 1.5) * Math.cos(z * 0.17 + Math.sin(x * 0.11) * 1.1);
  out.setHex(base);
  out.offsetHSL(0, 0, wave * 0.016);
  return out;
}

/** 원판을 고리·부채꼴 격자로 나눈 지면 (면마다 색을 다르게 칠하기 좋다) */
function discGrid(radius: number, rings: number, segments: number): THREE.BufferGeometry {
  const positions: number[] = [];
  for (let i = 0; i < rings; i += 1) {
    const r0 = (radius * i) / rings;
    const r1 = (radius * (i + 1)) / rings;
    const a0 = i === 0 ? 4 : segments;
    for (let j = 0; j < a0; j += 1) {
      const t0 = (j / segments) * Math.PI * 2;
      const t1 = ((j + 1) / segments) * Math.PI * 2;
      const p0 = [Math.cos(t0) * r0, 0, Math.sin(t0) * r0];
      const p1 = [Math.cos(t1) * r0, 0, Math.sin(t1) * r0];
      const p2 = [Math.cos(t0) * r1, 0, Math.sin(t0) * r1];
      const p3 = [Math.cos(t1) * r1, 0, Math.sin(t1) * r1];
      if (i === 0) {
        positions.push(...p0, ...p2, ...p3);
      } else {
        positions.push(...p0, ...p2, ...p3, ...p0, ...p3, ...p1);
      }
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
}

/** 플레이룸 게이트 안쪽의 빛나는 소용돌이 (캔버스 그라데이션) */
function portalTexture(): THREE.Texture | null {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const gradient = ctx.createRadialGradient(128, 128, 6, 128, 128, 126);
  gradient.addColorStop(0, 'rgba(236, 255, 255, 0.98)');
  gradient.addColorStop(0.35, 'rgba(126, 238, 255, 0.9)');
  gradient.addColorStop(0.72, 'rgba(62, 200, 255, 0.55)');
  gradient.addColorStop(1, 'rgba(62, 200, 255, 0.06)');
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(128, 128, 126, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
  ctx.lineWidth = 3;
  for (let i = 0; i < 3; i += 1) {
    ctx.beginPath();
    const offset = (i / 3) * Math.PI * 2;
    for (let a = 0; a < Math.PI * 1.5; a += 0.08) {
      const r = 12 + a * 16;
      const x = 128 + Math.cos(a + offset) * r;
      const y = 128 + Math.sin(a + offset) * r;
      if (a === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/** 꽃밭 한 칸 */
function createFlowerBed(seed: number): THREE.Group {
  const rand = seeded(seed * 53 + 17);
  const parts: PropPart[] = [
    { geo: new THREE.CylinderGeometry(1.05, 1.1, 0.26, 9), color: PALETTE.stoneDark, pos: [0, 0.13, 0], jitter: 0.06 },
    { geo: new THREE.CylinderGeometry(0.95, 0.95, 0.08, 9), color: PALETTE.soil, pos: [0, 0.27, 0], jitter: 0.05 },
  ];
  const colors = [PALETTE.flowerPink, PALETTE.flowerYellow, PALETTE.flowerPurple, PALETTE.white];
  for (let i = 0; i < 9; i += 1) {
    const angle = rand() * Math.PI * 2;
    const radius = rand() * 0.7;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    parts.push({
      geo: lump(0.16),
      color: PALETTE.leaf,
      pos: [x, 0.36, z],
      scale: [1, 0.7, 1],
      jitter: 0.16,
    });
    parts.push({
      geo: lump(0.075),
      color: colors[Math.floor(rand() * colors.length)],
      pos: [x, 0.48, z],
      jitter: 0.1,
    });
  }
  return buildProp(`flowerbed-${seed % 3}`, parts);
}

export function buildPlaza(root: THREE.Group): PlazaHandle {
  const rand = seeded(20261119);
  const obstacles: Obstacle[] = [];

  // ---------------------------------------------------------------- 지면

  // 광장 바깥 들판 (멀리까지 이어지는 잔디)
  const fieldGeo = new THREE.CircleGeometry(70, 56);
  fieldGeo.rotateX(-Math.PI / 2);
  const fieldPainted = paintFaces(
    fieldGeo,
    (cx, _cy, cz, _ny, out) => turf(noise2(Math.floor(cx * 0.03), Math.floor(cz * 0.03)) > 0.45 ? PALETTE.meadow : PALETTE.meadowDark, cx, cz, out),
    0.07,
  );
  const field = new THREE.Mesh(
    fieldPainted,
    markGround(new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.98 }), 'turf'),
  );
  field.position.y = -0.46;
  field.receiveShadow = true;
  root.add(field);

  // 광장 기단 (위는 잔디, 옆은 흙 단면)
  const baseGeo = new THREE.CylinderGeometry(PLAZA_RADIUS, PLAZA_RADIUS - 0.9, 1.7, 56, 1);
  const basePainted = paintFaces(
    baseGeo,
    (cx, cy, cz, ny, out) => {
      if (ny > 0.6) return turf(PALETTE.grass, cx, cz, out);
      if (cy > 0.2) return turf(PALETTE.grassDark, cx, cz, out);
      if (cy > -0.5) {
        out.setHex(PALETTE.soil);
        return out;
      }
      out.setHex(PALETTE.soilDark);
      return out;
    },
    0.07,
  );
  const base = new THREE.Mesh(
    basePainted,
    markGround(new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.97 }), 'turf'),
  );
  base.position.y = -0.85;
  base.receiveShadow = true;
  base.castShadow = true;
  root.add(base);

  // 돌 광장 바닥
  const stoneMat = markGround(new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.9 }), 'stone');
  const stoneGeo = paintFaces(
    discGrid(5.15, 4, 34),
    (cx, _cy, cz, _ny, out) => {
      const ring = Math.floor(Math.hypot(cx, cz) / 1.3);
      const alt = noise2(ring * 3 + Math.floor(cx * 0.7), Math.floor(cz * 0.7)) > 0.5;
      out.setHex(alt ? PALETTE.stone : PALETTE.stoneLight);
      return out;
    },
    0.05,
  );
  const stoneFloor = new THREE.Mesh(stoneGeo, stoneMat);
  stoneFloor.position.y = 0.014;
  stoneFloor.receiveShadow = true;
  root.add(stoneFloor);

  // 광장 테두리 링
  const borderRingGeo = new THREE.RingGeometry(5.15, 5.6, 40);
  borderRingGeo.rotateX(-Math.PI / 2);
  const borderRing = new THREE.Mesh(
    paintFaces(borderRingGeo, (_cx, _cy, _cz, _ny, out) => {
      out.setHex(PALETTE.stoneDark);
      return out;
    }),
    stoneMat,
  );
  borderRing.position.y = 0.02;
  borderRing.receiveShadow = true;
  root.add(borderRing);

  // 게이트로 이어지는 돌길
  for (let i = 0; i < 6; i += 1) {
    const slab = new THREE.Mesh(
      paintFaces(
        plank(2.5, 0.12, 0.95),
        (_cx, _cy, _cz, _ny, out) => {
          out.setHex(i % 2 === 0 ? PALETTE.stone : PALETTE.stoneLight);
          return out;
        },
        0.05,
      ),
      stoneMat,
    );
    slab.position.set((rand() - 0.5) * 0.12, 0.03, -3.4 - i * 0.95);
    slab.receiveShadow = true;
    slab.castShadow = true;
    root.add(slab);
  }

  // ---------------------------------------------------------------- 연못

  const pondX = 7.8;
  const pondZ = -3.6;
  const pondR = 2.8;
  const waterTex = waterTexture(1.4);
  const waterMat = new THREE.MeshStandardMaterial({
    color: waterTex ? 0xffffff : PALETTE.water,
    map: waterTex,
    roughness: 0.12,
    metalness: 0.3,
    transparent: true,
    opacity: 0.93,
  });
  waterMat.userData.oneoneSurface = 'water';
  const pond = new THREE.Mesh(new THREE.CircleGeometry(pondR, 40), waterMat);
  pond.rotation.x = -Math.PI / 2;
  pond.position.set(pondX, 0.018, pondZ);
  root.add(pond);
  const pondHandle = pond;

  // 연못 테두리 돌
  for (let i = 0; i < 12; i += 1) {
    const angle = (i / 12) * Math.PI * 2;
    const rock = createRockCluster(0.42 + rand() * 0.18, i + 21);
    rock.position.set(pondX + Math.cos(angle) * (pondR + 0.16), 0.02, pondZ + Math.sin(angle) * (pondR + 0.16));
    rock.rotation.y = angle;
    root.add(rock);
  }
  for (let i = 0; i < 5; i += 1) {
    const angle = rand() * Math.PI * 2;
    const reeds = createReeds(0.9 + rand() * 0.4, i + 4);
    reeds.position.set(pondX + Math.cos(angle) * (pondR - 0.15), 0.02, pondZ + Math.sin(angle) * (pondR - 0.15));
    root.add(reeds);
  }
  for (let i = 0; i < 4; i += 1) {
    const angle = rand() * Math.PI * 2;
    const radius = rand() * 1.7;
    const lily = createLily(0.7 + rand() * 0.5);
    lily.position.set(pondX + Math.cos(angle) * radius, 0.03, pondZ + Math.sin(angle) * radius);
    lily.rotation.y = rand() * 3;
    root.add(lily);
  }
  // 연못 옆 작은 나무 데크
  const deck = new THREE.Group();
  deck.position.set(pondX - pondR - 0.3, 0.02, pondZ + 0.6);
  deck.rotation.y = 0.5;
  for (let i = 0; i < 4; i += 1) {
    deck.add(
      new THREE.Mesh(
        paintFaces(
          plank(1.5, 0.1, 0.32),
          (_cx, _cy, _cz, _ny, out) => {
            out.setHex(i % 2 === 0 ? PALETTE.wood : PALETTE.woodLight);
            return out;
          },
          0.06,
        ),
        markGround(new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.88 }), 'wood'),
      ),
    );
  }
  deck.children.forEach((child, index) => {
    child.position.set(0, 0.06, -0.5 + index * 0.33);
  });
  root.add(deck);
  obstacles.push({ x: pondX, z: pondZ, r: pondR + 0.35 });

  // ---------------------------------------------------------------- 클럽하우스

  const clubhouse = createClubhouse();
  const houseX = -9.7;
  const houseZ = 2.4;
  clubhouse.position.set(houseX, 0, houseZ);
  clubhouse.rotation.y = 0.5;
  root.add(clubhouse);
  obstacles.push({ x: houseX, z: houseZ, r: 5.1 });

  const houseSign = createLabelSprite('ONEOINE CLUBHOUSE', '#ffd9a0', {
    scale: [3.6, 0.55],
    canvasWidth: 640,
    canvasHeight: 100,
    fontSize: 44,
    bg: 'rgba(255, 122, 89, 0.92)',
  });
  if (houseSign) {
    houseSign.position.set(houseX + 1.6, 3.15, houseZ + 3.2);
    houseSign.material.rotation = 0;
    root.add(houseSign);
  }

  // 클럽하우스 앞 소품: 카트·골프백·파라솔
  const cart = createGolfCart(1);
  cart.position.set(-12.4, 0, -4.8);
  cart.rotation.y = 1.15;
  root.add(cart);
  obstacles.push({ x: -12.4, z: -4.8, r: 1.35 });

  const bag = createBagStand(1);
  bag.position.set(-5.6, 0, 5.4);
  bag.rotation.y = 0.4;
  root.add(bag);
  obstacles.push({ x: -5.6, z: 5.4, r: 0.5 });

  const patio = createPatioSet(1);
  patio.position.set(-9.4, 0, 10.4);
  patio.rotation.y = -0.3;
  root.add(patio);
  obstacles.push({ x: -9.4, z: 10.4, r: 1.2 });

  // ---------------------------------------------------------------- 벤치 · 가로등 · 꽃밭

  const benchSpots: Array<[number, number, number]> = [
    [-4.3, 6.4, 0.35],
    [4.6, 4.2, -0.9],
    [-5.4, -3.4, 1.15],
    [6.4, 1.0, -1.3],
  ];
  benchSpots.forEach(([x, z, rot]) => {
    const bench = createBench(1);
    bench.position.set(x, 0, z);
    bench.rotation.y = rot;
    root.add(bench);
    obstacles.push({ x, z, r: 0.95 });
  });

  const lampSpots: Array<[number, number]> = [
    [-3.2, -6.2],
    [3.2, -6.2],
    [-6.6, 0.4],
    [6.6, -0.6],
    [-2.2, 6.6],
    [2.6, 7.4],
  ];
  lampSpots.forEach(([x, z]) => {
    const lamp = createLamp(1);
    lamp.position.set(x, 0, z);
    lamp.rotation.y = rand() * 0.6;
    root.add(lamp);
    obstacles.push({ x, z, r: 0.3 });
  });

  const bedSpots: Array<[number, number, number]> = [
    [8.4, 6.4, 1],
    [-11.2, -3.6, 2],
    [3.6, -9.6, 3],
  ];
  bedSpots.forEach(([x, z, seed]) => {
    const bed = createFlowerBed(seed);
    bed.position.set(x, 0, z);
    root.add(bed);
    obstacles.push({ x, z, r: 1.05 });
  });

  // 클럽 깃대
  const flagpole = createFlagpole(1);
  flagpole.position.set(5.6, 0, -6.2);
  root.add(flagpole);
  obstacles.push({ x: 5.6, z: -6.2, r: 0.35 });

  // ---------------------------------------------------------------- 나무 · 바위 · 울타리

  const treeSpots: Array<[number, number, number, boolean]> = [
    [-12.4, -2.2, 1.25, false],
    [-11.4, 8.4, 1.1, true],
    [11.4, 6.8, 1.05, false],
    [12.6, -1.2, 1.15, true],
    [-7.2, -10.4, 1.0, false],
    [8.2, -11.2, 0.95, true],
    [-1.4, 13.4, 1.05, false],
    [-2.8, -12.6, 0.9, true],
    [12.8, -8.4, 1.15, false],
    [-13.2, 3.4, 0.85, true],
    [7.6, 11.6, 0.95, false],
    [-9.6, 10.8, 1.0, true],
  ];
  treeSpots.forEach(([x, z, s, pine]) => {
    const tree = pine ? createPine(s) : createTree(s);
    tree.position.set(x, 0, z);
    tree.rotation.y = rand() * Math.PI;
    root.add(tree);
    obstacles.push({ x, z, r: 0.6 * s });
  });

  const rockSpots: Array<[number, number, number]> = [
    [-7.4, 7.4, 0.75],
    [9.8, 2.2, 0.65],
    [4.9, -7.6, 0.6],
    [-9.8, -5.8, 0.55],
    [10.8, -5.2, 0.6],
  ];
  rockSpots.forEach(([x, z, s]) => {
    const rock = createRockCluster(s, Math.round(x * 3 + z));
    rock.position.set(x, 0.02, z);
    rock.rotation.y = rand() * 3;
    root.add(rock);
  });

  // 광장 가장자리 생울타리 + 기둥 (게이트 앞은 비워 둔다)
  const hedgeCount = 22;
  for (let i = 0; i < hedgeCount; i += 1) {
    const angle = (i / hedgeCount) * Math.PI * 2;
    const x = Math.cos(angle) * (PLAZA_RADIUS - 0.75);
    const z = Math.sin(angle) * (PLAZA_RADIUS - 0.75);
    // 게이트로 향하는 길목은 통행을 위해 비운다
    if (Math.abs(x) < 3.2 && z < -6) continue;
    const segment = Math.cos(angle * 9) > 0.4 ? createHedge(2.1, 1) : createFence(2.1, 1);
    segment.position.set(x, 0.02, z);
    segment.rotation.y = -angle + Math.PI / 2;
    root.add(segment);
  }

  // 광장 안쪽 잔디 포기
  for (let i = 0; i < 26; i += 1) {
    const angle = rand() * Math.PI * 2;
    const radius = 5.9 + rand() * 7.2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    if (Math.hypot(x - pondX, z - pondZ) < pondR + 1) continue;
    if (Math.hypot(x - houseX, z - houseZ) < 5.4) continue;
    if (Math.abs(x) < 2.2 && z < -4) continue;
    const tuft = createGrassTuft(i + 11);
    tuft.position.set(x, 0.01, z);
    tuft.rotation.y = rand() * 3;
    tuft.scale.setScalar(0.9 + rand() * 0.5);
    root.add(tuft);
  }

  // 섬 밖으로 보이는 원경 숲
  for (let i = 0; i < 16; i += 1) {
    const angle = (i / 16) * Math.PI * 2 + rand() * 0.2;
    const radius = 22 + rand() * 14;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const tree = i % 3 === 0 ? createPine(1.7 + rand() * 0.8) : createTree(1.6 + rand() * 0.9);
    tree.position.set(x, -0.46, z);
    tree.rotation.y = rand() * 3;
    root.add(tree);
  }

  // ---------------------------------------------------------------- 플레이룸 게이트

  const gate = new THREE.Group();
  gate.position.copy(PLAZA_GATE);
  root.add(gate);

  const gateStoneMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.85 });
  gateStoneMat.userData.oneoneSurface = 'stone' satisfies SurfaceKind;
  const gateGlowMat = new THREE.MeshStandardMaterial({
    color: 0x6fe6ff,
    emissive: 0x35c8ff,
    emissiveIntensity: 1.4,
    roughness: 0.25,
    metalness: 0.15,
    flatShading: true,
  });

  const addGateMesh = (geo: THREE.BufferGeometry, material: THREE.Material, color?: number): THREE.Mesh => {
    const painted = color === undefined ? geo : paintFaces(geo, (_cx, _cy, _cz, _ny, out) => {
      out.setHex(color);
      return out;
    }, 0.05);
    const mesh = new THREE.Mesh(painted, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    gate.add(mesh);
    return mesh;
  };

  // 단상과 계단
  addGateMesh(new THREE.CylinderGeometry(2.9, 3.15, 0.26, 14), gateStoneMat, PALETTE.stoneDark).position.y = -0.02;
  addGateMesh(new THREE.CylinderGeometry(2.6, 2.75, 0.2, 14), gateStoneMat, PALETTE.stone).position.y = 0.16;
  addGateMesh(new THREE.CylinderGeometry(2.35, 2.45, 0.12, 14), gateStoneMat, PALETTE.stoneLight).position.y = 0.3;

  // 기둥
  [-1.78, 1.78].forEach((x) => {
    const pillar = addGateMesh(plank(0.66, 3.1, 0.66), gateStoneMat, PALETTE.stone);
    pillar.position.set(x, 1.85, 0);
    addGateMesh(new THREE.CylinderGeometry(0.4, 0.5, 0.36, 8), gateStoneMat, PALETTE.stoneDark).position.set(x, 0.52, 0);
    addGateMesh(plank(0.8, 0.16, 0.8), gateStoneMat, PALETTE.stoneLight).position.set(x, 3.46, 0);
    const cap = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.2, 0.72), gateGlowMat);
    cap.position.set(x, 3.66, 0);
    gate.add(cap);
    // 기둥 홈 장식
    addGateMesh(plank(0.72, 0.1, 0.72), gateStoneMat, PALETTE.stoneDark).position.set(x, 1.0, 0);
    obstacles.push({ x: PLAZA_GATE.x + x, z: PLAZA_GATE.z, r: 0.5 });
  });

  // 상단 보 + 표지판
  addGateMesh(plank(4.6, 0.42, 0.72), gateStoneMat, PALETTE.stone).position.set(0, 3.9, 0);
  addGateMesh(plank(4.9, 0.14, 0.86), gateStoneMat, PALETTE.stoneDark).position.set(0, 4.16, 0);
  addGateMesh(new THREE.ConeGeometry(0.5, 0.5, 4), gateStoneMat, PALETTE.stoneLight).position.set(0, 4.48, 0);

  // 빛나는 링 + 포탈
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0x6fe6ff,
    emissive: 0x35c8ff,
    emissiveIntensity: 1.4,
    roughness: 0.25,
    metalness: 0.2,
  });
  const gateRing = new THREE.Mesh(new THREE.TorusGeometry(1.36, 0.11, 14, 48), ringMat);
  gateRing.position.y = 1.72;
  gate.add(gateRing);

  const ringInner = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.035, 8, 44), ringMat);
  ringInner.position.y = 1.72;
  gate.add(ringInner);

  const portalMap = portalTexture();
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    map: portalMap,
    transparent: true,
    opacity: 0.9,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const gateInner = new THREE.Mesh(new THREE.CircleGeometry(1.28, 48), innerMat);
  gateInner.position.set(0, 1.72, 0.02);
  gate.add(gateInner);

  const haloMat = new THREE.MeshBasicMaterial({
    color: 0x9beeff,
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const gateHalo = new THREE.Mesh(new THREE.CircleGeometry(1.9, 48), haloMat);
  gateHalo.position.set(0, 0.34, 0);
  gateHalo.rotation.x = -Math.PI / 2;
  gate.add(gateHalo);

  const gateGlow = new THREE.PointLight(0x9fe8ff, 6, 12, 2);
  gateGlow.position.set(0, 1.9, 0.9);
  gate.add(gateGlow);

  // 게이트 표지판
  const sign = createLabelSprite('플레이룸 ⛳', '#8ff3ff', {
    scale: [2.8, 0.8],
    canvasWidth: 512,
    canvasHeight: 146,
    fontSize: 62,
    bg: 'rgba(12, 38, 48, 0.9)',
  });
  if (sign) {
    sign.position.set(0, 4.95, 0);
    gate.add(sign);
  }

  // 게이트 옆 화톳불 기둥
  [-2.7, 2.7].forEach((x) => {
    const post = new THREE.Mesh(
      paintFaces(column(0.12, 0.16, 1.5, 6), (_cx, _cy, _cz, _ny, out) => {
        out.setHex(PALETTE.woodDark);
        return out;
      }),
      gateStoneMat,
    );
    post.position.set(x, 0.75, 0.2);
    post.castShadow = true;
    gate.add(post);
    const flame = new THREE.Mesh(
      new THREE.ConeGeometry(0.2, 0.42, 5),
      new THREE.MeshStandardMaterial({
        color: 0xffd479,
        emissive: 0xffa63d,
        emissiveIntensity: 1.5,
        roughness: 0.5,
        flatShading: true,
      }),
    );
    flame.position.set(x, 1.62, 0.2);
    gate.add(flame);
  });

  // ---------------------------------------------------------------- 업데이트

  let time = 0;
  const update = (dt: number): void => {
    time += dt;
    const t = time;
    const material = pondHandle.material as THREE.MeshStandardMaterial;
    if (material.map) {
      material.map.offset.x = (material.map.offset.x + dt * 0.012) % 1;
      material.map.offset.y = (material.map.offset.y + dt * 0.02) % 1;
    }
    ringMat.emissiveIntensity = 1.25 + Math.sin(t * 2.2) * 0.45;
    gateRing.scale.setScalar(1 + Math.sin(t * 2.2) * 0.012);
    innerMat.opacity = 0.78 + Math.sin(t * 1.7) * 0.12;
    gateInner.rotation.z += dt * 0.35;
    const scale = 1 + Math.sin(t * 2.6) * 0.03;
    gateInner.scale.set(scale, scale, 1);
    haloMat.opacity = 0.24 + Math.sin(t * 1.4) * 0.08;
    gateHalo.rotation.z -= dt * 0.18;
    gateGlow.intensity = 5 + Math.sin(t * 2.1) * 1.4;
  };

  // 스카이라인: 광장 위를 도는 구름 덩어리
  for (let i = 0; i < 6; i += 1) {
    const angle = rand() * Math.PI * 2;
    const radius = 8 + rand() * 18;
    const cloudParts: PropPart[] = [
      { geo: lump(1), color: PALETTE.white, pos: [0, 0, 0], scale: [2.0, 1.0, 1.4], jitter: 0.04 },
      { geo: lump(1), color: PALETTE.white, pos: [1.6, -0.2, 0.2], scale: [1.2, 0.75, 0.9], jitter: 0.04 },
      { geo: lump(1), color: PALETTE.white, pos: [-1.6, -0.15, -0.1], scale: [1.1, 0.7, 0.85], jitter: 0.04 },
      { geo: lump(1), color: PALETTE.white, pos: [0.4, 0.6, 0], scale: [1.0, 0.7, 0.8], jitter: 0.04 },
    ];
    const cloud = buildProp('lobby-cloud', cloudParts);
    cloud.position.set(Math.cos(angle) * radius, 11 + rand() * 5, Math.sin(angle) * radius);
    cloud.rotation.y = rand() * 3;
    root.add(cloud);
  }

  return {
    obstacles,
    gate,
    gateRing,
    gateInner,
    gateHalo,
    gateGlow,
    update,
  };
}
