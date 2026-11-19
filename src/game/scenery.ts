import * as THREE from 'three';
import { ballTexture, cloudTexture, softDotTexture } from './textures';
import { PALETTE, buildProp, column, lump, plank, seeded, type PropPart } from './props';

/**
 * 코스·대기실 소품 라이브러리 (Synty POLYGON 톤).
 *
 * 모든 소품은 파츠를 합친 정점 색상 지오메트리라 드로우콜이 1~2개다.
 * 같은 이름(key)의 소품은 지오메트리를 공유하므로 여러 개를 배치해도 가볍다.
 */

// ---------------------------------------------------------------- 나무

/** 소나무: 층층이 겹친 원뿔 수관 + 가지 다발 + 각진 기둥 */
export function createPine(scale = 1): THREE.Group {
  const parts: PropPart[] = [
    // 뿌리 플레어 + 기둥
    { geo: column(0.14, 0.24, 0.3, 5), color: PALETTE.barkDark, pos: [0, 0.15, 0], jitter: 0.06, shade: 0.2 },
    { geo: column(0.07, 0.14, 2.1, 5), color: PALETTE.bark, pos: [0, 1.15, 0], jitter: 0.05, shade: 0.28 },
    { geo: column(0.115, 0.13, 0.12, 5), color: PALETTE.barkDark, pos: [0, 1.0, 0], jitter: 0.04 },
    { geo: column(0.09, 0.105, 0.1, 5), color: PALETTE.barkDark, pos: [0, 1.72, 0], jitter: 0.04 },
  ];

  const tiers: Array<{ y: number; r: number; h: number; color: number }> = [
    { y: 2.5, r: 1.28, h: 1.42, color: PALETTE.pineDark },
    { y: 3.32, r: 1.02, h: 1.34, color: PALETTE.pine },
    { y: 4.06, r: 0.76, h: 1.18, color: PALETTE.pineLight },
    { y: 4.68, r: 0.48, h: 0.92, color: PALETTE.pine },
  ];
  tiers.forEach((tier, index) => {
    parts.push({
      geo: new THREE.ConeGeometry(tier.r, tier.h, 7, 1),
      color: tier.color,
      pos: [0, tier.y, 0],
      rot: [0, index * 0.62, 0],
      jitter: 0.16,
      shade: 0.34,
    });
    // 수관 아래로 삐져나온 가지 다발
    for (let i = 0; i < 3; i += 1) {
      const angle = index * 0.9 + (i / 3) * Math.PI * 2;
      const rad = tier.r * 0.78;
      parts.push({
        geo: new THREE.ConeGeometry(tier.r * 0.3, tier.h * 0.52, 5, 1),
        color: index % 2 === 0 ? PALETTE.pineDark : PALETTE.pine,
        pos: [Math.cos(angle) * rad, tier.y - tier.h * 0.4, Math.sin(angle) * rad],
        rot: [Math.cos(angle) * 0.85, angle, Math.sin(angle) * 0.85],
        jitter: 0.14,
        shade: 0.3,
      });
    }
  });

  parts.push({ geo: new THREE.ConeGeometry(0.13, 0.52, 5), color: PALETTE.pineDark, pos: [0, 5.2, 0], jitter: 0.1 });

  const group = buildProp('pine', parts);
  group.scale.setScalar(scale);
  return group;
}

/** 활엽수: 갈라진 줄기 + 여러 갈래로 뻗은 가지 + 층진 잎 덩어리 */
export function createTree(scale = 1): THREE.Group {
  const parts: PropPart[] = [
    { geo: column(0.16, 0.26, 0.34, 5), color: PALETTE.barkDark, pos: [0, 0.17, 0], jitter: 0.05, shade: 0.2 },
    { geo: column(0.12, 0.2, 1.5, 5), color: PALETTE.bark, pos: [0, 1.02, 0], jitter: 0.06, shade: 0.3 },
    // 갈라진 가지 3개
    { geo: column(0.06, 0.11, 1.0, 5), color: PALETTE.bark, pos: [-0.3, 1.85, 0.05], rot: [0, 0, 0.72], jitter: 0.05 },
    { geo: column(0.06, 0.11, 1.0, 5), color: PALETTE.bark, pos: [0.3, 1.85, -0.06], rot: [0, 0, -0.72], jitter: 0.05 },
    { geo: column(0.05, 0.09, 0.8, 5), color: PALETTE.barkDark, pos: [0, 1.95, 0.24], rot: [-0.6, 0, 0], jitter: 0.05 },
  ];

  const crowns: Array<[number, number, number, number, number]> = [
    [0, 2.55, 0, 1.02, PALETTE.leaf],
    [0.62, 2.32, 0.2, 0.74, PALETTE.leafDark],
    [-0.66, 2.26, -0.12, 0.7, PALETTE.leafLight],
    [0.18, 3.05, -0.42, 0.66, PALETTE.leafLight],
    [-0.24, 2.98, 0.5, 0.62, PALETTE.leaf],
    [0.5, 2.9, 0.62, 0.5, PALETTE.leafDark],
    [-0.62, 2.86, 0.34, 0.48, PALETTE.leaf],
    [0, 3.34, 0.06, 0.5, PALETTE.leafLight],
  ];
  crowns.forEach(([x, y, z, r, color]) => {
    parts.push({
      geo: lump(1),
      color,
      pos: [x, y, z],
      scale: [r, r * 0.88, r],
      rot: [x * 0.4, y * 0.3, z * 0.4],
      jitter: 0.2,
      shade: 0.34,
    });
  });

  const group = buildProp('tree', parts);
  group.scale.setScalar(scale);
  return group;
}

/** 덤불: 낮은 잎 덩어리 + 작은 꽃 */
export function createBush(scale = 1): THREE.Group {
  const parts: PropPart[] = [
    { geo: lump(1), color: PALETTE.leaf, pos: [0, 0.32, 0], scale: [0.52, 0.42, 0.48], jitter: 0.2, shade: 0.3 },
    { geo: lump(1), color: PALETTE.leafDark, pos: [0.36, 0.24, 0.12], scale: [0.34, 0.28, 0.32], rot: [0.4, 0.8, 0], jitter: 0.2 },
    { geo: lump(1), color: PALETTE.leafLight, pos: [-0.32, 0.26, -0.1], scale: [0.32, 0.26, 0.3], rot: [0.2, 1.6, 0.3], jitter: 0.2 },
    { geo: lump(1), color: PALETTE.leaf, pos: [0.04, 0.46, -0.28], scale: [0.26, 0.22, 0.26], jitter: 0.2 },
    { geo: lump(0.16), color: PALETTE.flowerPink, pos: [0.24, 0.46, 0.24], jitter: 0.1 },
    { geo: lump(0.14), color: PALETTE.flowerYellow, pos: [-0.22, 0.44, -0.2], jitter: 0.1 },
  ];
  const group = buildProp('bush', parts);
  group.scale.setScalar(scale);
  return group;
}

/** 바위 군집: 크기·각도가 다른 돌 3~4개 + 이끼 */
export function createRockCluster(scale = 1, seed = 1): THREE.Group {
  const rand = seeded(seed * 977 + 13);
  const tones = [PALETTE.rock, PALETTE.rockLight, PALETTE.rockDark];
  const parts: PropPart[] = [];
  const count = 3 + Math.floor(rand() * 2);
  for (let i = 0; i < count; i += 1) {
    const angle = rand() * Math.PI * 2;
    const radius = i === 0 ? 0 : 0.28 + rand() * 0.42;
    const size = i === 0 ? 0.52 + rand() * 0.16 : 0.22 + rand() * 0.26;
    parts.push({
      geo: lump(1),
      color: tones[Math.floor(rand() * tones.length)],
      pos: [Math.cos(angle) * radius, size * 0.62, Math.sin(angle) * radius],
      scale: [size, size * (0.66 + rand() * 0.3), size * (0.8 + rand() * 0.3)],
      rot: [rand() * 3, rand() * 3, rand() * 3],
      jitter: 0.14,
      shade: 0.24,
    });
  }
  parts.push({
    geo: lump(1),
    color: PALETTE.leafDark,
    pos: [-0.1, 0.52, 0.12],
    scale: [0.3, 0.16, 0.26],
    rot: [0.3, 1, 0.2],
    jitter: 0.18,
  });

  const group = buildProp(`rock-${count}`, parts);
  group.scale.setScalar(scale);
  return group;
}

/** 바위 (기존 API — 군집의 작은 버전) */
export function createRock(scale = 1): THREE.Group {
  const group = createRockCluster(scale, 7);
  return group;
}

// ---------------------------------------------------------------- 물가 소품

/** 갈대 다발 — 연못 가장자리 */
export function createReeds(scale = 1, seed = 1): THREE.Group {
  const rand = seeded(seed * 331 + 5);
  const parts: PropPart[] = [];
  for (let i = 0; i < 6; i += 1) {
    const x = (rand() - 0.5) * 0.5;
    const z = (rand() - 0.5) * 0.5;
    const h = 0.7 + rand() * 0.6;
    parts.push({
      geo: column(0.016, 0.03, h, 4),
      color: rand() > 0.5 ? PALETTE.leafDark : PALETTE.leaf,
      pos: [x, h / 2, z],
      rot: [(rand() - 0.5) * 0.3, 0, (rand() - 0.5) * 0.3],
      jitter: 0.12,
    });
    if (rand() > 0.55) {
      parts.push({
        geo: column(0.055, 0.055, 0.18, 5),
        color: PALETTE.barkDark,
        pos: [x, h - 0.06, z],
        jitter: 0.1,
      });
    }
  }
  const group = buildProp('reeds', parts);
  group.scale.setScalar(scale);
  return group;
}

/** 수련 잎 */
export function createLily(scale = 1): THREE.Group {
  const parts: PropPart[] = [
    { geo: new THREE.CylinderGeometry(0.42, 0.42, 0.03, 7), color: PALETTE.leaf, pos: [0, 0.015, 0], jitter: 0.12 },
    { geo: lump(0.1), color: PALETTE.flowerPink, pos: [0.08, 0.07, -0.05], jitter: 0.1 },
    { geo: lump(0.07), color: PALETTE.white, pos: [-0.06, 0.06, 0.08], jitter: 0.1 },
  ];
  const group = buildProp('lily', parts);
  group.scale.setScalar(scale);
  return group;
}

// ---------------------------------------------------------------- 골프장 소품

/** 코스 벤치: 판재 좌판·등받이 + 각진 다리 */
export function createBench(scale = 1): THREE.Group {
  const parts: PropPart[] = [];
  for (let i = 0; i < 3; i += 1) {
    parts.push({
      geo: plank(1.9, 0.07, 0.14),
      color: i % 2 === 0 ? PALETTE.wood : PALETTE.woodLight,
      pos: [0, 0.46, -0.16 + i * 0.16],
      jitter: 0.08,
    });
  }
  for (let i = 0; i < 2; i += 1) {
    parts.push({
      geo: plank(1.9, 0.14, 0.06),
      color: PALETTE.woodLight,
      pos: [0, 0.74 + i * 0.19, -0.28],
      rot: [-0.14, 0, 0],
      jitter: 0.08,
    });
  }
  [-0.8, 0.8].forEach((x) => {
    parts.push({ geo: plank(0.09, 0.46, 0.1), color: PALETTE.creamDark, pos: [x, 0.23, 0.16], jitter: 0.05 });
    parts.push({ geo: plank(0.09, 0.46, 0.1), color: PALETTE.creamDark, pos: [x, 0.23, -0.2], jitter: 0.05 });
    parts.push({ geo: plank(0.09, 0.08, 0.14), color: PALETTE.creamDark, pos: [x, 0.44, 0.05], jitter: 0.05 });
    parts.push({ geo: plank(0.09, 0.06, 0.5), color: PALETTE.woodDark, pos: [x, 0.62, -0.05], jitter: 0.05 });
    parts.push({ geo: plank(0.12, 0.16, 0.1), color: PALETTE.stoneDark, pos: [x, 0.66, 0.2], jitter: 0.05 });
  });
  const group = buildProp('bench', parts);
  group.scale.setScalar(scale);
  return group;
}

/** 가로등: 돌 기단 + 기둥 + 유리 등 + 지붕 */
export function createLamp(scale = 1): THREE.Group {
  const parts: PropPart[] = [
    { geo: column(0.19, 0.26, 0.16, 6), color: PALETTE.stoneDark, pos: [0, 0.08, 0], jitter: 0.06 },
    { geo: column(0.06, 0.1, 2.5, 6), color: PALETTE.stoneDark, pos: [0, 1.35, 0], jitter: 0.05, shade: 0.2 },
    { geo: column(0.14, 0.14, 0.08, 6), color: PALETTE.stoneLight, pos: [0, 2.6, 0], jitter: 0.05 },
    { geo: plank(0.34, 0.44, 0.34), color: PALETTE.white, pos: [0, 2.88, 0], bucket: 'glow', jitter: 0.02 },
    { geo: new THREE.ConeGeometry(0.32, 0.26, 4), color: PALETTE.stoneDark, pos: [0, 3.22, 0], rot: [0, Math.PI / 4, 0], jitter: 0.05 },
    { geo: lump(0.07), color: PALETTE.gold, pos: [0, 3.4, 0], jitter: 0.05 },
  ];
  [-0.17, 0.17].forEach((x) => {
    [-0.17, 0.17].forEach((z) => {
      parts.push({ geo: plank(0.05, 0.5, 0.05), color: PALETTE.stoneDark, pos: [x, 2.88, z], jitter: 0.03 });
    });
  });
  const group = buildProp('lamp', parts);
  group.scale.setScalar(scale);
  return group;
}

/** 야드지 말뚝: 나무 기둥 + 흰 판 + 색 띠 */
export function createYardagePost(tone: number = PALETTE.coral, scale = 1): THREE.Group {
  const key = tone === PALETTE.gold ? 'yardage-gold' : tone === PALETTE.teal ? 'yardage-teal' : 'yardage';
  const parts: PropPart[] = [
    { geo: plank(0.14, 1.1, 0.14), color: PALETTE.woodDark, pos: [0, 0.55, 0], jitter: 0.07, shade: 0.2 },
    { geo: plank(0.44, 0.34, 0.07), color: PALETTE.cream, pos: [0, 1.2, 0], jitter: 0.04 },
    { geo: plank(0.44, 0.1, 0.09), color: tone, pos: [0, 1.3, 0], jitter: 0.03 },
    { geo: plank(0.5, 0.06, 0.12), color: PALETTE.woodLight, pos: [0, 1.42, 0], jitter: 0.04 },
  ];
  const group = buildProp(key, parts);
  group.scale.setScalar(scale);
  return group;
}

/** 골프 카트: 차체·좌석·캐노피·바퀴 4개 */
export function createGolfCart(scale = 1): THREE.Group {
  const parts: PropPart[] = [
    { geo: plank(1.44, 0.3, 2.3), color: PALETTE.creamDark, pos: [0, 0.48, 0], jitter: 0.05 },
    { geo: plank(1.36, 0.42, 1.5), color: PALETTE.cream, pos: [0, 0.82, -0.06], jitter: 0.05 },
    { geo: plank(1.3, 0.18, 0.12), color: PALETTE.coral, pos: [0, 0.72, 0.78], jitter: 0.04 },
    { geo: plank(1.5, 0.16, 0.16), color: PALETTE.creamDark, pos: [0, 0.42, 1.14], jitter: 0.04 },
    { geo: plank(1.16, 0.16, 0.56), color: 0x4a5b66, pos: [0, 1.06, -0.18], jitter: 0.06 },
    { geo: plank(1.16, 0.52, 0.16), color: 0x3f4f59, pos: [0, 1.3, -0.52], rot: [-0.2, 0, 0], jitter: 0.06 },
    { geo: plank(1.26, 0.62, 0.05), color: PALETTE.glass, pos: [0, 1.42, 0.52], rot: [0.16, 0, 0], jitter: 0.03 },
    { geo: plank(1.34, 0.06, 0.08), color: PALETTE.creamDark, pos: [0, 1.72, 0.48], jitter: 0.03 },
    { geo: plank(1.34, 0.06, 0.08), color: PALETTE.creamDark, pos: [0, 1.12, 0.56], jitter: 0.03 },
    { geo: column(0.05, 0.05, 1.0, 5), color: PALETTE.creamDark, pos: [0.58, 1.5, 0.5], rot: [0.3, 0, 0], jitter: 0.04 },
    { geo: column(0.16, 0.16, 0.06, 8), color: PALETTE.dark, pos: [0.58, 1.98, 0.36], rot: [1.1, 0, 0], jitter: 0.04 },
    { geo: plank(1.6, 0.12, 2.0), color: PALETTE.cream, pos: [0, 2.16, -0.1], jitter: 0.05 },
    { geo: plank(1.66, 0.08, 2.06), color: PALETTE.coral, pos: [0, 2.24, -0.1], jitter: 0.04 },
    { geo: plank(1.44, 0.34, 0.12), color: PALETTE.creamDark, pos: [0, 0.8, -1.08], jitter: 0.05 },
    { geo: plank(0.9, 0.28, 0.14), color: PALETTE.creamDark, pos: [0, 0.78, 1.12], jitter: 0.05 },
  ];
  [
    [0.62, 0.5, 0.7],
    [-0.62, 0.5, 0.7],
    [0.62, 0.5, -0.8],
    [-0.62, 0.5, -0.8],
  ].forEach(([x, , z], index) => {
    parts.push({
      geo: column(0.3, 0.3, 0.18, 10),
      color: PALETTE.dark,
      pos: [x > 0 ? 0.7 : -0.7, 0.3, z],
      rot: [0, 0, Math.PI / 2],
      jitter: 0.05,
    });
    parts.push({
      geo: column(0.12, 0.12, 0.2, 6),
      color: PALETTE.metal,
      pos: [x > 0 ? 0.72 : -0.72, 0.3, z],
      rot: [0, 0, Math.PI / 2],
      bucket: 'metal',
      jitter: 0.03,
    });
    if (index < 2) {
      parts.push({ geo: column(0.06, 0.06, 1.1, 5), color: PALETTE.metalDark, pos: [x > 0 ? 0.68 : -0.68, 1.6, 0.72], bucket: 'metal', jitter: 0.03 });
      parts.push({ geo: column(0.06, 0.06, 1.1, 5), color: PALETTE.metalDark, pos: [x > 0 ? 0.68 : -0.68, 1.6, -0.92], bucket: 'metal', jitter: 0.03 });
    }
  });
  // 캐노피 기둥 4개
  [
    [0.66, 0.7],
    [-0.66, 0.7],
    [0.66, -0.9],
    [-0.66, -0.9],
  ].forEach(([x, z]) => {
    parts.push({ geo: column(0.04, 0.04, 1.1, 4), color: PALETTE.creamDark, pos: [x, 1.62, z], jitter: 0.03 });
  });

  const group = buildProp('cart', parts);
  group.scale.setScalar(scale);
  return group;
}

/** 골프백 거치대: 가방 + 클럽 여러 자루 */
export function createBagStand(scale = 1): THREE.Group {
  const parts: PropPart[] = [
    { geo: plank(0.56, 0.1, 0.5), color: PALETTE.metalDark, pos: [0, 0.05, 0], bucket: 'metal', jitter: 0.04 },
    { geo: column(0.24, 0.26, 0.9, 6), color: PALETTE.coralDark, pos: [0, 0.55, 0], jitter: 0.06 },
    { geo: column(0.26, 0.26, 0.12, 6), color: PALETTE.cream, pos: [0, 1.02, 0], jitter: 0.05 },
    { geo: column(0.05, 0.05, 0.6, 4), color: PALETTE.metal, pos: [0, 0.9, 0.3], rot: [0.9, 0, 0], bucket: 'metal', jitter: 0.02 },
  ];
  for (let i = 0; i < 5; i += 1) {
    const angle = (i / 5) * Math.PI * 2;
    parts.push({
      geo: column(0.012, 0.012, 0.9, 4),
      color: PALETTE.metal,
      pos: [Math.cos(angle) * 0.14, 1.4, Math.sin(angle) * 0.14],
      rot: [Math.sin(angle) * 0.16, 0, -Math.cos(angle) * 0.16],
      bucket: 'metal',
      jitter: 0.02,
    });
    parts.push({
      geo: plank(0.1, 0.04, 0.06),
      color: PALETTE.metalDark,
      pos: [Math.cos(angle) * 0.2, 1.82, Math.sin(angle) * 0.2],
      rot: [0, angle, 0.2],
      bucket: 'metal',
      jitter: 0.02,
    });
  }
  const group = buildProp('bagstand', parts);
  group.scale.setScalar(scale);
  return group;
}

/** 정자(가제보): 육각 기둥 + 난간 + 지붕 */
export function createGazebo(scale = 1): THREE.Group {
  const parts: PropPart[] = [
    { geo: new THREE.CylinderGeometry(2.3, 2.45, 0.28, 6), color: PALETTE.stone, pos: [0, 0.14, 0], jitter: 0.06 },
    { geo: new THREE.CylinderGeometry(2.5, 2.5, 0.1, 6), color: PALETTE.stoneDark, pos: [0, 0.02, 0], jitter: 0.05 },
  ];
  const radius = 2.05;
  for (let i = 0; i < 6; i += 1) {
    const angle = (i / 6) * Math.PI * 2 + Math.PI / 6;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    parts.push({ geo: column(0.1, 0.13, 2.3, 5), color: PALETTE.woodDark, pos: [x, 1.42, z], jitter: 0.05 });
    parts.push({ geo: column(0.16, 0.16, 0.14, 5), color: PALETTE.stoneLight, pos: [x, 0.34, z], jitter: 0.04 });
    // 난간
    const nextAngle = ((i + 1) / 6) * Math.PI * 2 + Math.PI / 6;
    const nx = Math.cos(nextAngle) * radius;
    const nz = Math.sin(nextAngle) * radius;
    const midX = (x + nx) / 2;
    const midZ = (z + nz) / 2;
    const length = Math.hypot(nx - x, nz - z);
    const yaw = Math.atan2(nx - x, nz - z);
    if (i !== 1 && i !== 4) {
      parts.push({ geo: plank(0.08, 0.1, length - 0.3), color: PALETTE.woodLight, pos: [midX, 1.0, midZ], rot: [0, yaw, 0], jitter: 0.05 });
      parts.push({ geo: plank(0.07, 0.08, length - 0.3), color: PALETTE.wood, pos: [midX, 0.68, midZ], rot: [0, yaw, 0], jitter: 0.05 });
    }
  }
  parts.push({ geo: new THREE.CylinderGeometry(2.3, 2.6, 0.16, 6), color: PALETTE.woodDark, pos: [0, 2.62, 0], jitter: 0.05 });
  parts.push({ geo: new THREE.ConeGeometry(2.85, 1.5, 6), color: PALETTE.roof, pos: [0, 3.42, 0], jitter: 0.09, shade: 0.2 });
  parts.push({ geo: new THREE.ConeGeometry(2.95, 0.22, 6), color: PALETTE.roofDark, pos: [0, 2.74, 0], jitter: 0.05 });
  parts.push({ geo: column(0.09, 0.09, 0.34, 6), color: PALETTE.woodDark, pos: [0, 4.2, 0], jitter: 0.04 });
  parts.push({ geo: lump(0.15), color: PALETTE.gold, pos: [0, 4.45, 0], bucket: 'metal', jitter: 0.04 });

  const group = buildProp('gazebo', parts);
  group.scale.setScalar(scale);
  return group;
}

/** 풍차: 홀 랜드마크 */
export function createWindmill(scale = 1): THREE.Group {
  const parts: PropPart[] = [
    { geo: new THREE.CylinderGeometry(2.2, 2.5, 0.4, 8), color: PALETTE.stoneDark, pos: [0, 0.2, 0], jitter: 0.06 },
    { geo: new THREE.CylinderGeometry(1.35, 2.05, 4.6, 8), color: PALETTE.cream, pos: [0, 2.7, 0], jitter: 0.06, shade: 0.24 },
    { geo: new THREE.CylinderGeometry(1.45, 1.5, 0.18, 8), color: PALETTE.stoneDark, pos: [0, 1.9, 0], jitter: 0.04 },
    { geo: new THREE.CylinderGeometry(1.38, 1.42, 0.18, 8), color: PALETTE.stoneDark, pos: [0, 3.7, 0], jitter: 0.04 },
    { geo: new THREE.ConeGeometry(1.7, 1.15, 8), color: PALETTE.roof, pos: [0, 5.55, 0], jitter: 0.08, shade: 0.2 },
    { geo: plank(0.85, 1.6, 0.16), color: PALETTE.woodDark, pos: [0, 0.85, 2.0], jitter: 0.05 },
    { geo: plank(0.95, 0.14, 0.2), color: PALETTE.creamDark, pos: [0, 1.9, 1.98], jitter: 0.04 },
    { geo: plank(0.5, 0.62, 0.14), color: PALETTE.glass, pos: [0, 4.1, 1.32], jitter: 0.03 },
    { geo: plank(0.58, 0.7, 0.1), color: PALETTE.woodDark, pos: [0, 4.1, 1.28], jitter: 0.03 },
    { geo: column(0.2, 0.2, 1.0, 6), color: PALETTE.woodDark, pos: [0, 5.05, 1.3], rot: [Math.PI / 2, 0, 0], jitter: 0.04 },
    { geo: column(0.3, 0.3, 0.4, 8), color: PALETTE.woodDark, pos: [0, 5.05, 1.35], rot: [Math.PI / 2, 0, 0], jitter: 0.04 },
  ];
  // 날개 4장 — 가는 살대 + 가로대
  for (let i = 0; i < 4; i += 1) {
    const angle = (i / 4) * Math.PI * 2;
    const cx = Math.cos(angle) * 1.85;
    const cy = Math.sin(angle) * 1.85;
    parts.push({
      geo: plank(0.13, 3.6, 0.09),
      color: PALETTE.woodLight,
      pos: [cx, 5.05 + cy, 1.38],
      rot: [0, 0, -angle],
      jitter: 0.05,
    });
    for (let k = 0; k < 3; k += 1) {
      const t = 0.55 + k * 0.85;
      parts.push({
        geo: plank(0.62, 0.06, 0.07),
        color: PALETTE.cream,
        pos: [cx + Math.cos(angle + Math.PI / 2) * 0.34 * (k === 1 ? -1 : 1), 5.05 + cy + Math.sin(angle + Math.PI / 2) * 0.34 * (k === 1 ? -1 : 1), 1.4 - t * 0.0],
        rot: [0, 0, -angle],
        jitter: 0.04,
      });
    }
    parts.push({
      geo: plank(0.9, 2.9, 0.05),
      color: PALETTE.cream,
      pos: [cx + Math.cos(angle + Math.PI / 2) * 0.5, 5.05 + cy + Math.sin(angle + Math.PI / 2) * 0.5, 1.42],
      rot: [0, 0, -angle],
      jitter: 0.05,
    });
  }

  const group = buildProp('windmill', parts);
  group.scale.setScalar(scale);
  return group;
}

/** 나무 다리: 아치형 데크 + 난간 */
export function createBridge(length = 6, scale = 1): THREE.Group {
  const parts: PropPart[] = [];
  const segments = 6;
  const arch = 0.9;
  for (let i = 0; i < segments; i += 1) {
    const t = (i + 0.5) / segments;
    const y = Math.sin(t * Math.PI) * arch;
    const z = (t - 0.5) * length;
    parts.push({
      geo: plank(2.2, 0.16, length / segments + 0.06),
      color: i % 2 === 0 ? PALETTE.wood : PALETTE.woodLight,
      pos: [0, y, z],
      rot: [Math.cos(t * Math.PI) * 0.42, 0, 0],
      jitter: 0.07,
    });
  }
  [-1.14, 1.14].forEach((x) => {
    for (let i = 0; i < 3; i += 1) {
      const t = (i + 0.5) / 3;
      const y = Math.sin(t * Math.PI) * arch;
      const z = (t - 0.5) * length;
      parts.push({ geo: plank(0.12, 0.9, 0.12), color: PALETTE.woodDark, pos: [x, y + 0.5, z], jitter: 0.05 });
    }
    for (let i = 0; i < 2; i += 1) {
      const t = (i + 0.5) / 2;
      const y = Math.sin(t * Math.PI) * arch + 0.9;
      const z = (t - 0.5) * length;
      parts.push({ geo: plank(0.1, 0.1, length * 0.62), color: PALETTE.woodLight, pos: [x, y, z], rot: [0, 0, 0], jitter: 0.05 });
    }
  });
  const group = buildProp(`bridge-${length}-${segments}`, parts);
  group.scale.setScalar(scale);
  return group;
}

/** 나무 울타리 (한 칸) */
export function createFence(length = 2.4, scale = 1): THREE.Group {
  const parts: PropPart[] = [];
  const posts = Math.max(2, Math.round(length / 1.6) + 1);
  for (let i = 0; i < posts; i += 1) {
    const x = -length / 2 + (i / (posts - 1)) * length;
    parts.push({ geo: plank(0.13, 1.0, 0.13), color: PALETTE.woodDark, pos: [x, 0.5, 0], jitter: 0.06, shade: 0.15 });
    parts.push({ geo: new THREE.ConeGeometry(0.11, 0.16, 4), color: PALETTE.woodLight, pos: [x, 1.08, 0], rot: [0, Math.PI / 4, 0], jitter: 0.05 });
  }
  parts.push({ geo: plank(length, 0.11, 0.07), color: PALETTE.wood, pos: [0, 0.78, 0], jitter: 0.06 });
  parts.push({ geo: plank(length, 0.1, 0.07), color: PALETTE.woodLight, pos: [0, 0.44, 0], jitter: 0.06 });
  const group = buildProp(`fence-${length}-${posts}`, parts);
  group.scale.setScalar(scale);
  return group;
}

/** 생울타리 (한 칸) */
export function createHedge(length = 2.6, scale = 1): THREE.Group {
  const parts: PropPart[] = [
    { geo: new THREE.BoxGeometry(length, 0.9, 0.85), color: PALETTE.leafDark, pos: [0, 0.45, 0], jitter: 0.14, shade: 0.2 },
    { geo: new THREE.BoxGeometry(length, 0.14, 0.92), color: PALETTE.leaf, pos: [0, 0.95, 0], jitter: 0.16 },
  ];
  const blobs = Math.max(2, Math.round(length / 0.9));
  for (let i = 0; i < blobs; i += 1) {
    parts.push({
      geo: lump(1),
      color: i % 2 === 0 ? PALETTE.leaf : PALETTE.leafLight,
      pos: [-length / 2 + ((i + 0.5) / blobs) * length, 1.0, (i % 2 === 0 ? 0.12 : -0.12)],
      scale: [0.42, 0.24, 0.38],
      rot: [i * 0.5, i * 1.1, 0],
      jitter: 0.18,
    });
  }
  const group = buildProp(`hedge-${length}`, parts);
  group.scale.setScalar(scale);
  return group;
}

/** 클럽하우스 — 석재 기단·목재 골조·박공지붕·포치 */
export function createClubhouse(): THREE.Group {
  const parts: PropPart[] = [
    // 기단과 바닥
    { geo: plank(9.6, 0.4, 6.6), color: PALETTE.stoneDark, pos: [0, 0.2, 0], jitter: 0.06 },
    { geo: plank(9.0, 0.2, 6.0), color: PALETTE.stone, pos: [0, 0.44, 0], jitter: 0.05 },
    // 본체 벽
    { geo: plank(8.4, 2.5, 5.4), color: PALETTE.cream, pos: [0, 1.9, 0], jitter: 0.05, shade: 0.12 },
    // 목재 골조 (모서리 기둥 + 상하 띠)
    { geo: plank(8.7, 0.22, 5.7), color: PALETTE.woodDark, pos: [0, 3.18, 0], jitter: 0.05 },
    { geo: plank(8.7, 0.18, 5.7), color: PALETTE.woodDark, pos: [0, 0.62, 0], jitter: 0.05 },
  ];
  [
    [-4.2, -2.7],
    [4.2, -2.7],
    [-4.2, 2.7],
    [4.2, 2.7],
  ].forEach(([x, z]) => {
    parts.push({ geo: plank(0.26, 2.6, 0.26), color: PALETTE.woodDark, pos: [x, 1.9, z], jitter: 0.05 });
  });
  // 벽 중간 띠 (목재)
  parts.push({ geo: plank(8.44, 0.12, 0.1), color: PALETTE.woodDark, pos: [0, 1.6, 2.72], jitter: 0.04 });
  parts.push({ geo: plank(8.44, 0.12, 0.1), color: PALETTE.woodDark, pos: [0, 1.6, -2.72], jitter: 0.04 });

  // 박공지붕 (두 장의 경사판 + 용마루 + 계단식 박공벽)
  const slopeAngle = 0.5;
  [1, -1].forEach((dir) => {
    parts.push({
      geo: plank(5.4, 0.26, 6.9),
      color: PALETTE.roof,
      pos: [dir * 2.35, 4.58, 0],
      rot: [0, 0, dir * slopeAngle],
      jitter: 0.08,
      shade: 0.18,
    });
    parts.push({
      geo: plank(5.5, 0.12, 7.0),
      color: PALETTE.roofDark,
      pos: [dir * 2.37, 4.44, 0],
      rot: [0, 0, dir * slopeAngle],
      jitter: 0.05,
    });
  });
  parts.push({ geo: plank(0.36, 0.3, 7.1), color: PALETTE.roofDark, pos: [0, 5.94, 0], jitter: 0.05 });
  // 박공 벽 (계단식 판재로 삼각형을 채운다)
  [1, -1].forEach((side) => {
    parts.push({ geo: plank(5.6, 0.5, 0.22), color: PALETTE.cream, pos: [0, 3.55, side * 2.72], jitter: 0.05 });
    parts.push({ geo: plank(4.2, 0.5, 0.22), color: PALETTE.cream, pos: [0, 4.05, side * 2.72], jitter: 0.05 });
    parts.push({ geo: plank(2.7, 0.5, 0.22), color: PALETTE.cream, pos: [0, 4.55, side * 2.72], jitter: 0.05 });
    parts.push({ geo: plank(1.3, 0.5, 0.22), color: PALETTE.cream, pos: [0, 5.05, side * 2.72], jitter: 0.05 });
    parts.push({ geo: plank(0.4, 0.45, 0.22), color: PALETTE.cream, pos: [0, 5.52, side * 2.72], jitter: 0.05 });
  });

  // 현관 포치 (지붕·천장·기둥·난간)
  parts.push({ geo: plank(7.4, 0.22, 2.2), color: PALETTE.wood, pos: [0, 0.5, 3.55], jitter: 0.06 });
  parts.push({ geo: plank(7.6, 0.2, 2.0), color: PALETTE.roof, pos: [0, 3.24, 3.4], rot: [-0.1, 0, 0], jitter: 0.07 });
  parts.push({ geo: plank(7.7, 0.08, 2.06), color: PALETTE.roofDark, pos: [0, 3.12, 3.4], rot: [-0.1, 0, 0], jitter: 0.05 });
  parts.push({ geo: plank(7.3, 0.1, 1.9), color: PALETTE.cream, pos: [0, 3.02, 3.32], jitter: 0.04 });
  [-2.9, -1.0, 1.0, 2.9].forEach((x) => {
    parts.push({ geo: plank(0.18, 2.5, 0.18), color: PALETTE.woodDark, pos: [x, 1.75, 4.35], jitter: 0.05 });
    parts.push({ geo: plank(0.28, 0.14, 0.28), color: PALETTE.stoneLight, pos: [x, 0.54, 4.35], jitter: 0.04 });
  });
  // 포치 난간
  [-2.0, 2.0].forEach((x) => {
    parts.push({ geo: plank(1.6, 0.12, 0.12), color: PALETTE.woodLight, pos: [x, 1.0, 4.35], jitter: 0.05 });
    parts.push({ geo: plank(1.6, 0.1, 0.1), color: PALETTE.wood, pos: [x, 0.72, 4.35], jitter: 0.05 });
  });
  // 계단
  parts.push({ geo: plank(2.6, 0.14, 0.5), color: PALETTE.stone, pos: [0, 0.2, 4.75], jitter: 0.05 });
  parts.push({ geo: plank(3.0, 0.14, 0.5), color: PALETTE.stoneDark, pos: [0, 0.07, 5.15], jitter: 0.05 });

  // 문
  parts.push({ geo: plank(1.5, 2.15, 0.16), color: PALETTE.woodDark, pos: [0, 1.5, 2.72], jitter: 0.05 });
  parts.push({ geo: plank(1.7, 0.16, 0.2), color: PALETTE.woodLight, pos: [0, 2.62, 2.72], jitter: 0.04 });
  parts.push({ geo: plank(0.1, 2.15, 0.2), color: PALETTE.woodLight, pos: [-0.8, 1.5, 2.72], jitter: 0.04 });
  parts.push({ geo: plank(0.1, 2.15, 0.2), color: PALETTE.woodLight, pos: [0.8, 1.5, 2.72], jitter: 0.04 });
  parts.push({ geo: plank(0.5, 0.6, 0.06), color: PALETTE.glass, pos: [0, 1.95, 2.82], jitter: 0.03 });
  parts.push({ geo: lump(0.06), color: PALETTE.gold, pos: [0.55, 1.35, 2.84], bucket: 'metal', jitter: 0.03 });

  // 창문 4개 (앞 2 + 옆 4)
  const windowZ = 2.74;
  [-2.9, 2.9].forEach((x) => {
    parts.push({ geo: plank(1.3, 1.25, 0.12), color: PALETTE.woodLight, pos: [x, 1.95, windowZ - 0.02], jitter: 0.04 });
    parts.push({ geo: plank(1.06, 1.0, 0.14), color: PALETTE.glass, pos: [x, 1.95, windowZ + 0.04], jitter: 0.03 });
    parts.push({ geo: plank(0.08, 1.0, 0.18), color: PALETTE.woodLight, pos: [x, 1.95, windowZ + 0.06], jitter: 0.03 });
    parts.push({ geo: plank(1.06, 0.08, 0.18), color: PALETTE.woodLight, pos: [x, 1.95, windowZ + 0.06], jitter: 0.03 });
    parts.push({ geo: plank(1.5, 0.14, 0.3), color: PALETTE.stone, pos: [x, 1.26, windowZ + 0.06], jitter: 0.04 });
    // 화분
    parts.push({ geo: plank(1.1, 0.26, 0.34), color: PALETTE.woodDark, pos: [x, 0.82, windowZ + 0.18], jitter: 0.04 });
    for (let i = 0; i < 3; i += 1) {
      parts.push({
        geo: lump(0.18),
        color: i % 2 === 0 ? PALETTE.leaf : PALETTE.leafLight,
        pos: [x - 0.32 + i * 0.32, 1.02, windowZ + 0.2],
        jitter: 0.16,
      });
      parts.push({
        geo: lump(0.1),
        color: i % 2 === 0 ? PALETTE.flowerPink : PALETTE.flowerYellow,
        pos: [x - 0.32 + i * 0.32, 1.16, windowZ + 0.26],
        jitter: 0.1,
      });
    }
  });
  [-3.0, 0, 3.0].forEach((z) => {
    [-4.26, 4.26].forEach((x) => {
      parts.push({ geo: plank(0.12, 1.2, 1.2), color: PALETTE.woodLight, pos: [x, 1.95, z], jitter: 0.04 });
      parts.push({ geo: plank(0.14, 0.96, 0.96), color: PALETTE.glass, pos: [x + Math.sign(x) * 0.01, 1.95, z], jitter: 0.03 });
    });
  });

  // 굴뚝
  parts.push({ geo: plank(0.7, 1.7, 0.7), color: PALETTE.stone, pos: [-2.6, 5.0, -1.2], jitter: 0.06 });
  parts.push({ geo: plank(0.86, 0.18, 0.86), color: PALETTE.stoneDark, pos: [-2.6, 5.9, -1.2], jitter: 0.05 });

  // 현판
  parts.push({ geo: plank(3.4, 0.72, 0.14), color: PALETTE.woodDark, pos: [0, 3.05, 2.86], jitter: 0.04 });
  parts.push({ geo: plank(3.2, 0.1, 0.16), color: PALETTE.gold, pos: [0, 3.34, 2.88], bucket: 'metal', jitter: 0.03 });
  parts.push({ geo: plank(3.2, 0.1, 0.16), color: PALETTE.gold, pos: [0, 2.76, 2.88], bucket: 'metal', jitter: 0.03 });
  // 문 옆 랜턴
  [-1.35, 1.35].forEach((x) => {
    parts.push({ geo: plank(0.24, 0.34, 0.24), color: PALETTE.white, pos: [x, 2.2, 2.82], bucket: 'glow', jitter: 0.02 });
    parts.push({ geo: new THREE.ConeGeometry(0.2, 0.16, 4), color: PALETTE.woodDark, pos: [x, 2.45, 2.82], rot: [0, Math.PI / 4, 0], jitter: 0.03 });
  });

  return buildProp('clubhouse', parts);
}

/** 야외 파라솔 + 테이블 */
export function createPatioSet(scale = 1): THREE.Group {
  const parts: PropPart[] = [
    { geo: column(0.5, 0.5, 0.06, 8), color: PALETTE.woodLight, pos: [0, 0.74, 0], jitter: 0.05 },
    { geo: column(0.08, 0.1, 0.74, 6), color: PALETTE.woodDark, pos: [0, 0.37, 0], jitter: 0.05 },
    { geo: column(0.06, 0.06, 2.3, 5), color: PALETTE.creamDark, pos: [0, 1.15, 0], jitter: 0.04 },
    { geo: new THREE.ConeGeometry(1.35, 0.5, 8), color: PALETTE.coral, pos: [0, 2.2, 0], jitter: 0.08 },
    { geo: lump(0.08), color: PALETTE.woodDark, pos: [0, 2.48, 0], jitter: 0.03 },
  ];
  [[0.85, 0], [-0.85, 0], [0, 0.85]].forEach(([x, z]) => {
    parts.push({ geo: plank(0.42, 0.06, 0.42), color: PALETTE.cream, pos: [x, 0.46, z], jitter: 0.04 });
    parts.push({ geo: plank(0.06, 0.46, 0.06), color: PALETTE.creamDark, pos: [x, 0.23, z], jitter: 0.04 });
    parts.push({ geo: plank(0.42, 0.4, 0.06), color: PALETTE.cream, pos: [x, 0.66, z + (z > 0 ? 0.18 : -0.18)], jitter: 0.04 });
  });
  const group = buildProp('patio', parts);
  group.scale.setScalar(scale);
  return group;
}

/** 클럽 깃대 (대기실 장식) */
export function createFlagpole(scale = 1): THREE.Group {
  const parts: PropPart[] = [
    { geo: column(0.22, 0.3, 0.3, 6), color: PALETTE.stoneDark, pos: [0, 0.15, 0], jitter: 0.05 },
    { geo: column(0.05, 0.07, 5.2, 6), color: PALETTE.cream, pos: [0, 2.9, 0], bucket: 'metal', jitter: 0.03 },
    { geo: lump(0.14), color: PALETTE.gold, pos: [0, 5.56, 0], bucket: 'metal', jitter: 0.03 },
    { geo: plank(1.5, 0.9, 0.05), color: PALETTE.coral, pos: [0.78, 4.85, 0], jitter: 0.07 },
    { geo: plank(0.9, 0.5, 0.06), color: PALETTE.cream, pos: [0.6, 4.85, 0.01], jitter: 0.05 },
  ];
  const group = buildProp('flagpole', parts);
  group.scale.setScalar(scale);
  return group;
}

// ---------------------------------------------------------------- 하늘

/** 구름 (대기실에서 사용) */
export function createCloud(scale = 1): THREE.Group {
  const parts: PropPart[] = [
    { geo: lump(1), color: PALETTE.white, pos: [0, 0, 0], scale: [0.72, 0.5, 0.6], jitter: 0.05 },
    { geo: lump(1), color: PALETTE.white, pos: [0.66, -0.06, 0.05], scale: [0.5, 0.38, 0.44], jitter: 0.05 },
    { geo: lump(1), color: PALETTE.white, pos: [-0.64, -0.04, -0.04], scale: [0.46, 0.34, 0.4], jitter: 0.05 },
    { geo: lump(1), color: PALETTE.white, pos: [0.2, 0.26, -0.02], scale: [0.4, 0.3, 0.34], jitter: 0.05 },
  ];
  const group = buildProp('cloud', parts);
  group.scale.setScalar(scale);
  return group;
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

/** 잔디 위 잔디 포기(작은 풀다발) — 지면 디테일 */
export function createGrassTuft(seed = 1): THREE.Group {
  const rand = seeded(seed * 71 + 3);
  const parts: PropPart[] = [];
  for (let i = 0; i < 5; i += 1) {
    const angle = rand() * Math.PI * 2;
    const h = 0.16 + rand() * 0.18;
    parts.push({
      geo: new THREE.ConeGeometry(0.045, h, 3),
      color: rand() > 0.5 ? PALETTE.grassDark : PALETTE.grass,
      pos: [Math.cos(angle) * 0.1, h / 2, Math.sin(angle) * 0.1],
      rot: [Math.cos(angle) * 0.35, angle, Math.sin(angle) * 0.35],
      jitter: 0.14,
    });
  }
  return buildProp(`tuft-${seed % 4}`, parts);
}

/** 돌 옹벽 (한 칸) */
export function createStoneWall(length = 2.6, scale = 1): THREE.Group {
  const rand = seeded(Math.round(length * 131));
  const parts: PropPart[] = [];
  const rows = 3;
  for (let row = 0; row < rows; row += 1) {
    const count = Math.max(2, Math.round(length / 0.85));
    for (let i = 0; i < count; i += 1) {
      const w = (length / count) * (0.86 + rand() * 0.1);
      parts.push({
        geo: plank(w, 0.34, 0.5),
        color: [PALETTE.stone, PALETTE.stoneLight, PALETTE.stoneDark][Math.floor(rand() * 3)],
        pos: [-length / 2 + (i + 0.5) * (length / count) + (rand() - 0.5) * 0.06, 0.18 + row * 0.33, (rand() - 0.5) * 0.06],
        rot: [0, (rand() - 0.5) * 0.08, 0],
        jitter: 0.1,
        shade: 0.18,
      });
    }
  }
  parts.push({ geo: plank(length + 0.1, 0.1, 0.62), color: PALETTE.stoneDark, pos: [0, 1.12, 0], jitter: 0.06 });
  const group = buildProp(`wall-${length}`, parts);
  group.scale.setScalar(scale);
  return group;
}
