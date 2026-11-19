import * as THREE from 'three';
import type { DecorSpec, HoleSpec, SurfaceInfo, ZoneSpec } from './types';
import type { BallObstacle, SurfaceFn } from './ball';
import {
  createBagStand,
  createBench,
  createBush,
  createFence,
  createGazebo,
  createGolfCart,
  createGrassTuft,
  createLamp,
  createLily,
  createPine,
  createReeds,
  createRockCluster,
  createStoneWall,
  createTree,
  createWindmill,
  createBridge,
  createYardagePost,
} from './scenery';
import { PALETTE, mergeStaticMeshes, paintFaces, seeded } from './props';
import { FALLBACK, flagTexture, waterTexture } from './textures';

/**
 * 한 홀의 3D 코스.
 *
 * 지면은 모두 **면 단위 정점 색상 + flatShading** 으로 그린다 (Synty POLYGON 톤):
 * 페어웨이·러프·그린·에이프런·티박스·벙커가 색과 단차로 또렷하게 구분되고,
 * 섬 가장자리는 흙 단면이 층층이 드러나는 절벽이 된다.
 *
 * 물리(surfaceAt/contains/obstacles)는 예전과 동일한 규칙을 그대로 쓴다.
 */

const ISLAND_DEPTH = 0.46;
const APRON_Y = -0.4;

export interface Pt {
  x: number;
  z: number;
}

function smoothPath(points: Array<[number, number]>): Pt[] {
  const curve = new THREE.CatmullRomCurve3(
    points.map(([x, z]) => new THREE.Vector3(x, 0, z)),
    false,
    'catmullrom',
    0.4,
  );
  const length = curve.getLength();
  const count = Math.max(16, Math.round(length / 0.6));
  return curve.getSpacedPoints(count).map((p) => ({ x: p.x, z: p.z }));
}

/** 폴리라인을 따라 좌우로 넓힌 리본/섬 폴리곤 */
function corridorPolygon(line: Pt[], halfWidth: number): Pt[] {
  const n = line.length;
  const left: Pt[] = [];
  const right: Pt[] = [];

  for (let i = 0; i < n; i += 1) {
    const prev = line[Math.max(0, i - 1)];
    const next = line[Math.min(n - 1, i + 1)];
    let tx = next.x - prev.x;
    let tz = next.z - prev.z;
    const len = Math.hypot(tx, tz) || 1;
    tx /= len;
    tz /= len;
    const nx = -tz;
    const nz = tx;
    left.push({ x: line[i].x + nx * halfWidth, z: line[i].z + nz * halfWidth });
    right.push({ x: line[i].x - nx * halfWidth, z: line[i].z - nz * halfWidth });
  }

  const end = line[n - 1];
  const endPrev = line[Math.max(0, n - 2)];
  const endDir = { x: end.x - endPrev.x, z: end.z - endPrev.z };
  const endLen = Math.hypot(endDir.x, endDir.z) || 1;
  const endTan = { x: endDir.x / endLen, z: endDir.z / endLen };
  const endLeft = left[n - 1];
  const endLeftDir = { x: endLeft.x - end.x, z: endLeft.z - end.z };

  const start = line[0];
  const startNext = line[Math.min(n - 1, 1)];
  const startDir = { x: start.x - startNext.x, z: start.z - startNext.z };
  const startLen = Math.hypot(startDir.x, startDir.z) || 1;
  const startTan = { x: startDir.x / startLen, z: startDir.z / startLen };
  const startRight = right[0];
  const startRightDir = { x: startRight.x - start.x, z: startRight.z - start.z };

  const polygon: Pt[] = [...left];
  const segments = 10;
  for (let i = 1; i <= segments; i += 1) {
    const a = (Math.PI * i) / segments;
    polygon.push({
      x: end.x + endLeftDir.x * Math.cos(a) + endTan.x * Math.sin(a) * halfWidth,
      z: end.z + endLeftDir.z * Math.cos(a) + endTan.z * Math.sin(a) * halfWidth,
    });
  }
  for (let i = n - 2; i >= 0; i -= 1) polygon.push(right[i]);
  for (let i = 1; i <= segments; i += 1) {
    const a = (Math.PI * i) / segments;
    polygon.push({
      x: start.x + startRightDir.x * Math.cos(a) - startTan.x * Math.sin(a) * halfWidth,
      z: start.z + startRightDir.z * Math.cos(a) - startTan.z * Math.sin(a) * halfWidth,
    });
  }

  return polygon;
}

/**
 * 폴리라인을 따라 만든 격자 리본 지면.
 * ExtrudeGeometry 는 길쭉한 슬리버 삼각형이 생겨 면 단위 색이 쐐기처럼 보이므로,
 * 페어웨이처럼 색 띠가 필요한 곳은 촘촘한 격자로 직접 만든다.
 */
function corridorGrid(
  line: Pt[],
  halfWidth: number,
  lateral = 8,
  keep?: (x: number, z: number) => boolean,
): THREE.BufferGeometry {
  const n = line.length;
  const normals: Array<{ x: number; z: number }> = [];
  for (let i = 0; i < n; i += 1) {
    const prev = line[Math.max(0, i - 1)];
    const next = line[Math.min(n - 1, i + 1)];
    let tx = next.x - prev.x;
    let tz = next.z - prev.z;
    const len = Math.hypot(tx, tz) || 1;
    tx /= len;
    tz /= len;
    normals.push({ x: -tz, z: tx });
  }

  const rows: Pt[][] = [];
  for (let i = 0; i < n; i += 1) {
    const row: Pt[] = [];
    for (let j = 0; j <= lateral; j += 1) {
      const t = (j / lateral) * 2 - 1;
      row.push({ x: line[i].x + normals[i].x * halfWidth * t, z: line[i].z + normals[i].z * halfWidth * t });
    }
    rows.push(row);
  }

  const positions: number[] = [];
  for (let i = 0; i < n - 1; i += 1) {
    for (let j = 0; j < lateral; j += 1) {
      const a = rows[i][j];
      const b = rows[i][j + 1];
      const c = rows[i + 1][j];
      const d = rows[i + 1][j + 1];
      if (keep && !keep((a.x + b.x + c.x + d.x) / 4, (a.z + b.z + c.z + d.z) / 4)) continue;
      positions.push(a.x, 0, a.z, d.x, 0, d.z, c.x, 0, c.z);
      positions.push(a.x, 0, a.z, b.x, 0, b.z, d.x, 0, d.z);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
}

/** 폴리라인을 옆으로 평행 이동 (카트 길·옹벽 배치용) */
function offsetPolyline(line: Pt[], offset: number): Pt[] {
  return line.map((point, i) => {
    const prev = line[Math.max(0, i - 1)];
    const next = line[Math.min(line.length - 1, i + 1)];
    let tx = next.x - prev.x;
    let tz = next.z - prev.z;
    const len = Math.hypot(tx, tz) || 1;
    tx /= len;
    tz /= len;
    return { x: point.x - tz * offset, z: point.z + tx * offset };
  });
}

function pointInPolygon(points: Pt[], x: number, z: number): boolean {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i, i += 1) {
    const xi = points[i].x;
    const zi = points[i].z;
    const xj = points[j].x;
    const zj = points[j].z;
    const intersect = zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi + 1e-12) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function distanceToLine(line: Pt[], x: number, z: number): number {
  let best = Infinity;
  for (let i = 0; i < line.length - 1; i += 1) {
    const a = line[i];
    const b = line[i + 1];
    const abx = b.x - a.x;
    const abz = b.z - a.z;
    const lengthSq = abx * abx + abz * abz;
    let t = lengthSq > 0 ? ((x - a.x) * abx + (z - a.z) * abz) / lengthSq : 0;
    t = Math.max(0, Math.min(1, t));
    const dx = x - (a.x + abx * t);
    const dz = z - (a.z + abz * t);
    const dist = dx * dx + dz * dz;
    if (dist < best) best = dist;
  }
  return Math.sqrt(best);
}

/** 폴리라인 위에서 가장 가까운 지점의 누적 길이 */
function alongPath(line: Pt[], cumulative: number[], x: number, z: number): number {
  let best = Infinity;
  let at = 0;
  for (let i = 0; i < line.length - 1; i += 1) {
    const a = line[i];
    const b = line[i + 1];
    const abx = b.x - a.x;
    const abz = b.z - a.z;
    const lengthSq = abx * abx + abz * abz;
    let t = lengthSq > 0 ? ((x - a.x) * abx + (z - a.z) * abz) / lengthSq : 0;
    t = Math.max(0, Math.min(1, t));
    const dx = x - (a.x + abx * t);
    const dz = z - (a.z + abz * t);
    const dist = dx * dx + dz * dz;
    if (dist < best) {
      best = dist;
      at = cumulative[i] + Math.sqrt(lengthSq) * t;
    }
  }
  return at;
}

function ellipseContains(zone: ZoneSpec, x: number, z: number): boolean {
  const dx = (x - zone.x) / zone.rx;
  const dz = (z - zone.z) / zone.rz;
  return dx * dx + dz * dz <= 1;
}

function shapeFromPolygon(polygon: Pt[], holes: Pt[][] = []): THREE.Shape {
  const shape = new THREE.Shape();
  polygon.forEach((point, index) => {
    const x = point.x;
    const y = -point.z;
    if (index === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  });
  shape.closePath();
  for (const hole of holes) {
    const path = new THREE.Path();
    hole.forEach((point, index) => {
      const x = point.x;
      const y = -point.z;
      if (index === 0) path.moveTo(x, y);
      else path.lineTo(x, y);
    });
    path.closePath();
    shape.holes.push(path);
  }
  return shape;
}

function ellipsePoints(zone: ZoneSpec, segments = 56): Pt[] {
  const points: Pt[] = [];
  for (let i = 0; i < segments; i += 1) {
    const a = (i / segments) * Math.PI * 2;
    points.push({ x: zone.x + Math.cos(a) * zone.rx, z: zone.z + Math.sin(a) * zone.rz });
  }
  return points;
}

function extrudedGround(polygon: Pt[], holes: Pt[][], depth: number): THREE.BufferGeometry {
  const shape = shapeFromPolygon(polygon, holes);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: false,
    curveSegments: 4,
    steps: 1,
  });
  geometry.rotateX(-Math.PI / 2);
  // 압출 두께가 위로 솟지 않고 땅속으로 내려가도록 내린다 (상면이 정확히 y=0)
  geometry.translate(0, -depth, 0);
  geometry.computeVertexNormals();
  return geometry;
}

function ellipseDisc(rx: number, rz: number, segments = 56): THREE.BufferGeometry {
  const geometry = new THREE.CircleGeometry(1, segments);
  geometry.rotateX(-Math.PI / 2);
  geometry.scale(rx, 1, rz);
  return geometry;
}

/** 타원 링 (벙커 테두리·그린 프린지) */
function ellipseRing(inner: number, outer: number, rx: number, rz: number, segments = 56): THREE.BufferGeometry {
  const geometry = new THREE.RingGeometry(inner, outer, segments);
  geometry.rotateX(-Math.PI / 2);
  geometry.scale(rx, 1, rz);
  return geometry;
}

/** 좌표 기반 결정론적 잡음 (0~1) */
function noise2(x: number, z: number): number {
  const s = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453;
  return s - Math.floor(s);
}

/** 잔디 톤: 큰 얼룩 + 면 단위 변주 */
function turfTone(base: number, x: number, z: number, out: THREE.Color): THREE.Color {
  const patch = noise2(Math.floor(x * 0.35), Math.floor(z * 0.35));
  const shift = (patch - 0.5) * 0.1;
  out.setHex(base);
  out.offsetHSL(0, 0, shift * 0.5);
  return out;
}

/** 한 홀의 코스(비주얼 + 지면 질의) */
export class Course {
  readonly group = new THREE.Group();
  readonly cup = new THREE.Vector3();
  readonly tee = new THREE.Vector3();
  readonly spec: HoleSpec;
  readonly obstacles: BallObstacle[] = [];

  private readonly islandPoly: Pt[];
  private readonly fairwayLine: Pt[];
  private readonly pathArc: number[] = [];
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly materials: THREE.Material[] = [];
  private readonly textures: THREE.Texture[] = [];
  private waterSurfaces: THREE.Mesh[] = [];
  private ripples: Array<{ mesh: THREE.Mesh; phase: number; base: number }> = [];
  private flagCloth: THREE.Mesh | null = null;
  private flagClothBase: Float32Array | null = null;
  private time = 0;

  constructor(
    private scene: THREE.Scene,
    readonly hole: HoleSpec,
  ) {
    this.spec = hole;
    this.cup.set(hole.cup[0], 0, hole.cup[1]);
    this.tee.set(hole.tee[0], 0, hole.tee[1]);
    this.fairwayLine = smoothPath(hole.path);
    this.islandPoly = corridorPolygon(this.fairwayLine, hole.roughWidth);
    let total = 0;
    this.pathArc.push(0);
    for (let i = 1; i < this.fairwayLine.length; i += 1) {
      total += Math.hypot(
        this.fairwayLine[i].x - this.fairwayLine[i - 1].x,
        this.fairwayLine[i].z - this.fairwayLine[i - 1].z,
      );
      this.pathArc.push(total);
    }
    this.build();
    scene.add(this.group);
  }

  // ---------------------------------------------------------------- 지면 질의

  surfaceAt = (x: number, z: number): SurfaceInfo => {
    for (const zone of this.spec.zones ?? []) {
      if (zone.kind === 'water' && ellipseContains(zone, x, z)) {
        return { kind: 'water', height: -0.14 };
      }
    }
    for (const zone of this.spec.zones ?? []) {
      if (zone.kind === 'bunker' && ellipseContains(zone, x, z)) {
        return { kind: 'bunker', height: 0.005 };
      }
    }

    const green = this.spec.green;
    const greenDist = Math.hypot(x - green.x, z - green.z);
    if (greenDist <= green.r) return { kind: 'green', height: 0.01 };
    if (greenDist <= green.r + 1.5) return { kind: 'fringe', height: 0.005 };

    if (Math.hypot(x - this.tee.x, z - this.tee.z) <= 2.1) return { kind: 'tee', height: 0 };
    if (distanceToLine(this.fairwayLine, x, z) <= this.spec.fairwayWidth) {
      return { kind: 'fairway', height: 0 };
    }
    if (this.contains(x, z)) return { kind: 'rough', height: 0 };
    return { kind: 'out', height: APRON_Y };
  };

  get surfaceFn(): SurfaceFn {
    return this.surfaceAt;
  }

  contains(x: number, z: number): boolean {
    return pointInPolygon(this.islandPoly, x, z);
  }

  isInWater(x: number, z: number): boolean {
    return (this.spec.zones ?? []).some((zone) => zone.kind === 'water' && ellipseContains(zone, x, z));
  }

  /** 가이드/디버그용: 티에서 홀까지 거리 */
  get length(): number {
    return Math.hypot(this.cup.x - this.tee.x, this.cup.z - this.tee.z);
  }

  // ---------------------------------------------------------------- 만들기

  private track<T extends THREE.BufferGeometry>(geometry: T): T {
    this.geometries.push(geometry);
    return geometry;
  }

  private material(params: THREE.MeshStandardMaterialParameters): THREE.MeshStandardMaterial {
    const material = new THREE.MeshStandardMaterial(params);
    this.materials.push(material);
    if (material.map) this.textures.push(material.map);
    return material;
  }

  /** 정점 색상 + 플랫 셰이딩 지면 매터리얼 */
  private groundMaterial(roughness = 0.94, flatShading = true): THREE.MeshStandardMaterial {
    return this.material({ vertexColors: true, roughness, flatShading });
  }

  private addGround(
    geometry: THREE.BufferGeometry,
    material: THREE.Material,
    paint: (cx: number, cy: number, cz: number, ny: number, out: THREE.Color) => THREE.Color,
    jitter = 0.055,
  ): THREE.Mesh {
    const painted = paintFaces(geometry, paint, jitter);
    this.geometries.push(painted);
    const mesh = new THREE.Mesh(painted, material);
    mesh.receiveShadow = true;
    this.group.add(mesh);
    return mesh;
  }

  private addProp(object: THREE.Object3D, x: number, y: number, z: number, rotY = 0): void {
    object.position.set(x, y, z);
    object.rotation.y = rotY;
    this.group.add(object);
  }

  private build(): void {
    const hole = this.spec;

    // 주변 지형 — 섬 아래로 이어지는 넓은 러프 (면마다 다른 잔디 톤)
    const apronMat = this.groundMaterial(0.98);
    const apronGeo = new THREE.PlaneGeometry(200, 200, 34, 34);
    apronGeo.rotateX(-Math.PI / 2);
    const apron = this.addGround(
      apronGeo,
      apronMat,
      (cx, _cy, cz, _ny, out) => {
        const t = noise2(Math.floor(cx * 0.22), Math.floor(cz * 0.22));
        out.setHex(t > 0.55 ? PALETTE.meadow : PALETTE.meadowDark);
        out.offsetHSL(0, 0, (t - 0.5) * 0.05);
        return out;
      },
      0.06,
    );
    apron.position.set(hole.green.x, APRON_Y, hole.green.z - 6);

    // 연못은 섬에 구멍을 뚫어 파인 웅덩이로 보이게 한다
    const waterZones = (hole.zones ?? []).filter((zone) => zone.kind === 'water');
    /** 연못 위에는 페어웨이·카트 길을 깔지 않는다 (물이 드러나 보이도록) */
    const onLand = (x: number, z: number): boolean =>
      !waterZones.some((zone) => ((x - zone.x) / (zone.rx * 1.04)) ** 2 + ((z - zone.z) / (zone.rz * 1.04)) ** 2 <= 1);
    const holes = waterZones
      .map((zone) => ellipsePoints(zone))
      .filter((points) => points.every((point) => pointInPolygon(this.islandPoly, point.x, point.z)));

    // 잔디 섬 — 위는 러프, 옆면은 층층이 드러난 흙 단면
    const islandMat = this.groundMaterial(0.95);
    const islandGeo = extrudedGround(this.islandPoly, holes, ISLAND_DEPTH);
    const island = this.addGround(
      islandGeo,
      islandMat,
      (cx, cy, cz, ny, out) => {
        if (ny > 0.6) return turfTone(PALETTE.rough, cx, cz, out);
        if (cy > -0.14) return turfTone(PALETTE.roughDark, cx, cz, out);
        if (cy > -0.3) {
          out.setHex(PALETTE.soil);
          return out;
        }
        out.setHex(PALETTE.soilDark);
        return out;
      },
      0.03,
    );
    island.castShadow = true;

    // 페어웨이 — 깎은 잔디 스트라이프가 또렷한 격자 리본 + 어두운 테두리
    const fairwayMat = this.groundMaterial(0.93);
    const hem = this.addGround(
      corridorGrid(this.fairwayLine, hole.fairwayWidth + 0.42, 10, onLand),
      fairwayMat,
      (cx, _cy, cz, _ny, out) => {
        out.setHex(noise2(Math.floor(cx * 0.4), Math.floor(cz * 0.4)) > 0.5 ? PALETTE.fairwayDark : PALETTE.grassDark);
        return out;
      },
      0.05,
    );
    hem.position.y = 0.008;

    const fairway = this.addGround(
      corridorGrid(this.fairwayLine, hole.fairwayWidth, 10, onLand),
      fairwayMat,
      (cx, _cy, cz, _ny, out) => {
        const along = alongPath(this.fairwayLine, this.pathArc, cx, cz);
        const stripe = Math.floor(along / 7.5) % 2 === 0;
        out.setHex(stripe ? PALETTE.fairway : PALETTE.fairwayDark);
        out.offsetHSL(0, 0, (noise2(Math.floor(cx * 0.45), Math.floor(cz * 0.45)) - 0.5) * 0.025);
        return out;
      },
      0.035,
    );
    fairway.position.y = 0.014;

    // 그린 + 프린지 링 + 에이프런 링
    const greenMat = this.groundMaterial(0.88);
    const apronRingMat = this.groundMaterial(0.93);
    const apronRing = this.addGround(
      ellipseRing(0.86, 1.0, hole.green.r + 3.1, hole.green.r + 3.1, 64),
      apronRingMat,
      (cx, _cy, cz, _ny, out) => turfTone(PALETTE.grassDark, cx, cz, out),
      0.05,
    );
    apronRing.position.set(hole.green.x, 0.004, hole.green.z);

    const fringeInner = this.addGround(
      ellipseDisc(hole.green.r + 1.55, hole.green.r + 1.55, 64),
      apronRingMat,
      (cx, _cy, cz, _ny, out) => turfTone(PALETTE.fringe, cx, cz, out),
      0.05,
    );
    fringeInner.position.set(hole.green.x, 0.006, hole.green.z);

    const greenMesh = this.addGround(
      ellipseDisc(hole.green.r, hole.green.r, 64),
      greenMat,
      (cx, _cy, cz, _ny, out) => {
        const rad = Math.hypot(cx - hole.green.x, cz - hole.green.z) / hole.green.r;
        out.setHex(rad < 0.45 ? PALETTE.green : PALETTE.greenDark);
        out.offsetHSL(0, 0, (noise2(Math.floor(cx * 0.8), Math.floor(cz * 0.8)) - 0.5) * 0.035);
        return out;
      },
      0.045,
    );
    greenMesh.position.set(hole.green.x, 0.016, hole.green.z);
    greenMesh.castShadow = false;

    // 그린 위 거리 가이드 링
    const guideMat = this.material({
      color: 0xffffff,
      transparent: true,
      opacity: 0.26,
      roughness: 0.7,
      depthWrite: false,
    });
    [1.4, 2.8, 4.2].forEach((radius) => {
      if (radius > hole.green.r - 0.4) return;
      const ringGeo = this.track(new THREE.RingGeometry(radius - 0.035, radius, 64));
      ringGeo.rotateX(-Math.PI / 2);
      const ring = new THREE.Mesh(ringGeo, guideMat);
      ring.position.set(hole.green.x, 0.022, hole.green.z);
      this.group.add(ring);
    });

    // 벙커 — 모래 바닥 + 살짝 솟은 테두리 턱 + 그늘
    const sandMat = this.groundMaterial(1, false);
    for (const zone of hole.zones ?? []) {
      if (zone.kind !== 'bunker') continue;
      const lip = this.addGround(
        ellipseRing(0.9, 1.1, zone.rx, zone.rz, 44),
        sandMat,
        (_cx, _cy, _cz, _ny, out) => {
          out.setHex(PALETTE.sandDark);
          return out;
        },
        0.05,
      );
      lip.position.set(zone.x, 0.026, zone.z);
      lip.castShadow = true;
      const sand = this.addGround(
        ellipseDisc(zone.rx * 0.98, zone.rz * 0.98, 44),
        sandMat,
        (cx, _cy, cz, _ny, out) => {
          out.setHex(noise2(Math.floor(cx * 0.9), Math.floor(cz * 0.9)) > 0.5 ? PALETTE.sand : PALETTE.sandLight);
          return out;
        },
        0.05,
      );
      sand.position.set(zone.x, 0.021, zone.z);
    }

    // 연못 — 파인 웅덩이 + 잔물결 + 거품 테두리
    const waterTex = waterTexture(0.14);
    const waterMat = this.material({
      color: waterTex ? 0xffffff : FALLBACK.water,
      map: waterTex,
      roughness: 0.1,
      metalness: 0.32,
      transparent: true,
      opacity: 0.94,
    });
    const basinMat = this.groundMaterial(1, false);
    const foamMat = this.material({ color: 0xeaf7ff, roughness: 0.5, transparent: true, opacity: 0.55 });
    for (const zone of waterZones) {
      const basinGeo = this.track(new THREE.CylinderGeometry(zone.rx, zone.rx * 0.9, 1.0, 40, 1, true));
      basinGeo.scale(1, 1, zone.rz / zone.rx);
      const basinPainted = paintFaces(
        basinGeo,
        (_cx, cy, _cz, _ny, out) => {
          out.setHex(cy > -0.5 ? PALETTE.soilLight : PALETTE.soilDark);
          return out;
        },
        0.07,
      );
      this.geometries.push(basinPainted);
      const basin = new THREE.Mesh(basinPainted, basinMat);
      basin.position.set(zone.x, -0.5, zone.z);
      basin.receiveShadow = true;
      this.group.add(basin);

      const waterGeo = ellipseDisc(zone.rx * 0.995, zone.rz * 0.995, 52);
      const water = new THREE.Mesh(this.track(waterGeo), waterMat);
      water.position.set(zone.x, -0.14, zone.z);
      this.group.add(water);
      this.waterSurfaces.push(water);

      const foamGeo = this.track(new THREE.TorusGeometry(1, 0.022, 6, 56));
      foamGeo.rotateX(-Math.PI / 2);
      foamGeo.scale(zone.rx, 1, zone.rz);
      const foam = new THREE.Mesh(foamGeo, foamMat);
      foam.position.set(zone.x, -0.02, zone.z);
      this.group.add(foam);

      // 잔물결 링 3겹
      for (let i = 0; i < 3; i += 1) {
        const ringGeo = this.track(new THREE.RingGeometry(0.92, 1, 40));
        ringGeo.rotateX(-Math.PI / 2);
        ringGeo.scale(zone.rx, 1, zone.rz);
        const ringMat = this.material({
          color: 0xd9f6ff,
          transparent: true,
          opacity: 0.22,
          roughness: 0.3,
          depthWrite: false,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.set(zone.x, -0.135, zone.z);
        ring.scale.setScalar(0.4 + i * 0.22);
        this.group.add(ring);
        this.ripples.push({ mesh: ring, phase: i * 2.1, base: 0.4 + i * 0.22 });
      }

      // 물가 바위·갈대·수련
      const rand = seeded(Math.round(zone.x * 17 + zone.z * 31) + 91);
      for (let i = 0; i < 7; i += 1) {
        const angle = (i / 7) * Math.PI * 2 + rand() * 0.4;
        const rx = zone.rx * (1.02 + rand() * 0.08);
        const rz = zone.rz * (1.02 + rand() * 0.08);
        const x = zone.x + Math.cos(angle) * rx;
        const z = zone.z + Math.sin(angle) * rz;
        if (!this.contains(x, z)) continue;
        if (i % 2 === 0) {
          this.addProp(createReeds(0.9 + rand() * 0.4, i + 1), x, 0, z, rand() * 3);
        } else {
          this.addProp(createRockCluster(0.5 + rand() * 0.25, i + 3), x, -0.02, z, rand() * 3);
        }
      }
      for (let i = 0; i < 3; i += 1) {
        const angle = rand() * Math.PI * 2;
        const rr = rand() * 0.6;
        this.addProp(
          createLily(0.7 + rand() * 0.5),
          zone.x + Math.cos(angle) * zone.rx * rr,
          -0.14,
          zone.z + Math.sin(angle) * zone.rz * rr,
          rand() * 3,
        );
      }
    }

    // 티박스 — 단차 있는 티 패드 + 티 마커
    const teePadMat = this.groundMaterial(0.9, false);
    const teePadGeo = extrudedGround(
      ellipsePoints({ kind: 'bunker', x: hole.tee[0], z: hole.tee[1], rx: 2.3, rz: 1.8 }, 32),
      [],
      0.09,
    );
    const teePad = this.addGround(
      teePadGeo,
      teePadMat,
      (cx, cy, cz, ny, out) => {
        if (ny > 0.6) return turfTone(PALETTE.fairwayDark, cx, cz, out);
        out.setHex(cy > -0.05 ? PALETTE.grassDark : PALETTE.soil);
        return out;
      },
      0.05,
    );
    teePad.position.set(0, 0.02, 0);

    const teeRimMat = this.groundMaterial(0.95, false);
    const teeRim = this.addGround(
      ellipseRing(0.95, 1.0, 2.34, 1.84, 40),
      teeRimMat,
      (_cx, _cy, _cz, _ny, out) => {
        out.setHex(PALETTE.stoneDark);
        return out;
      },
      0.04,
    );
    teeRim.position.set(hole.tee[0], 0.021, hole.tee[1]);

    const teeMarkerMat = this.groundMaterial(0.7, false);
    [-1.0, 1.0].forEach((dx) => {
      const postGeo = new THREE.CylinderGeometry(0.055, 0.07, 0.3, 5);
      const marked = paintFaces(
        postGeo,
        (_cx, cy, _cz, _ny, out) => {
          out.setHex(cy > 0.12 ? PALETTE.coral : PALETTE.cream);
          return out;
        },
        0.04,
      );
      this.geometries.push(marked);
      const marker = new THREE.Mesh(marked, teeMarkerMat);
      marker.position.set(hole.tee[0] + dx, 0.18, hole.tee[1] - 0.9);
      marker.castShadow = true;
      this.group.add(marker);
      const knobGeo = new THREE.SphereGeometry(0.075, 8, 6);
      const knobPainted = paintFaces(
        knobGeo,
        (_cx, _cy, _cz, _ny, out) => {
          out.setHex(PALETTE.coral);
          return out;
        },
        0.04,
      );
      this.geometries.push(knobPainted);
      const knob = new THREE.Mesh(knobPainted, teeMarkerMat);
      knob.position.set(hole.tee[0] + dx, 0.37, hole.tee[1] - 0.9);
      knob.castShadow = true;
      this.group.add(knob);
    });

    // 컵 + 깃발
    const cupMat = this.material({ color: 0x1a2a24, roughness: 0.95 });
    const cupDisc = new THREE.Mesh(this.track(ellipseDisc(0.19, 0.19, 32)), cupMat);
    cupDisc.position.set(this.cup.x, 0.022, this.cup.z);
    this.group.add(cupDisc);
    const rimMat = this.material({ color: 0xf7f3e6, roughness: 0.5 });
    const rimGeo = this.track(new THREE.TorusGeometry(0.2, 0.016, 8, 32));
    rimGeo.rotateX(-Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.position.set(this.cup.x, 0.026, this.cup.z);
    this.group.add(rim);

    const flagGroup = new THREE.Group();
    const poleMat = this.material({ color: 0xf8f8f2, roughness: 0.35, metalness: 0.4 });
    const collarMat = this.material({ color: 0xf2c14e, roughness: 0.3, metalness: 0.7 });
    const pole = new THREE.Mesh(this.track(new THREE.CylinderGeometry(0.02, 0.022, 1.72, 8)), poleMat);
    pole.position.y = 0.86;
    pole.castShadow = true;
    flagGroup.add(pole);
    const collar = new THREE.Mesh(this.track(new THREE.CylinderGeometry(0.035, 0.035, 0.06, 8)), collarMat);
    collar.position.y = 1.58;
    flagGroup.add(collar);
    const finial = new THREE.Mesh(this.track(new THREE.SphereGeometry(0.045, 8, 6)), collarMat);
    finial.position.y = 1.74;
    flagGroup.add(finial);

    const flagTex = flagTexture();
    const clothMat = this.material({
      color: flagTex ? 0xffffff : 0xff5c78,
      map: flagTex,
      roughness: 0.72,
      side: THREE.DoubleSide,
    });
    const clothGeo = this.track(new THREE.PlaneGeometry(0.64, 0.4, 10, 4));
    clothGeo.translate(0.32, 0, 0);
    const cloth = new THREE.Mesh(clothGeo, clothMat);
    cloth.position.set(0, 1.44, 0);
    cloth.castShadow = true;
    flagGroup.add(cloth);
    this.flagCloth = cloth;
    this.flagClothBase = (clothGeo.getAttribute('position') as THREE.BufferAttribute).array.slice() as Float32Array;
    flagGroup.position.set(this.cup.x, 0, this.cup.z);
    this.group.add(flagGroup);

    // 장식 (홀 데이터)
    for (const decor of hole.decor ?? []) {
      this.buildDecor(decor);
    }

    // 홀 테마 랜드마크 · 세부 소품
    this.buildCourseDressing();

    // 정적인 메시는 하나로 합쳐 드로우콜을 줄인다 (깃발 천·물·링은 투명/움직임이라 그대로 둔다)
    this.geometries.push(...mergeStaticMeshes(this.group));
  }

  private buildDecor(decor: DecorSpec): void {
    const scale = decor.s ?? 1;
    const onIsland = this.contains(decor.x, decor.z);
    const baseY = onIsland ? 0 : APRON_Y;

    const object =
      decor.kind === 'pine'
        ? createPine(scale)
        : decor.kind === 'rock'
          ? createRockCluster(scale, Math.round(decor.x * 13 + decor.z * 7))
          : decor.kind === 'bush'
            ? createBush(scale)
            : createTree(scale);

    object.position.set(decor.x, baseY, decor.z);
    object.rotation.y = (decor.x * 7.3 + decor.z * 3.1) % Math.PI;
    if (decor.kind === 'rock') object.position.y = baseY + 0.02;
    this.group.add(object);

    const radius = decor.r ?? 0.5 * scale;
    if (radius > 0.02) {
      this.obstacles.push({ x: decor.x, z: decor.z, r: radius });
    }
  }

  /** 홀마다 다른 랜드마크 + 잔디 포기·울타리·카트 길·야드지 말뚝 */
  private buildCourseDressing(): void {
    const hole = this.spec;
    const rand = seeded(1000 + hole.index * 137);
    const fairwayWidth = hole.fairwayWidth;
    const waterZones = (hole.zones ?? []).filter((zone) => zone.kind === 'water');
    const onLand = (x: number, z: number): boolean =>
      !waterZones.some((zone) => ((x - zone.x) / (zone.rx * 1.04)) ** 2 + ((z - zone.z) / (zone.rz * 1.04)) ** 2 <= 1);

    // 카트 길: 페어웨이 한쪽 옆을 따라가는 좁은 흙길
    const side = hole.index % 2 === 0 ? 1 : -1;
    const cartLine = offsetPolyline(this.fairwayLine, (fairwayWidth + 2.3) * side).filter(
      (point) => this.contains(point.x, point.z),
    );
    if (cartLine.length > 6) {
      const cartMat = this.groundMaterial(0.98, false);
      const cartPath = this.addGround(
        corridorGrid(cartLine, 0.85, 3, onLand),
        cartMat,
        (cx, _cy, cz, _ny, out) => {
          out.setHex(noise2(Math.floor(cx * 1.2), Math.floor(cz * 1.2)) > 0.5 ? PALETTE.sand : PALETTE.sandDark);
          return out;
        },
        0.05,
      );
      cartPath.position.y = 0.02;
    }

    // 야드지 말뚝 2개 (페어웨이 바깥)
    const total = this.pathArc[this.pathArc.length - 1];
    [0.42, 0.76].forEach((ratio, index) => {
      const targetArc = total * ratio;
      let point = this.fairwayLine[0];
      for (let i = 1; i < this.fairwayLine.length; i += 1) {
        if (this.pathArc[i] >= targetArc) {
          point = this.fairwayLine[i];
          break;
        }
      }
      const offsetLine = offsetPolyline(this.fairwayLine, (fairwayWidth + 1.5) * side);
      const at = offsetLine[Math.min(offsetLine.length - 1, Math.round((ratio * offsetLine.length)))];
      const x = at ? at.x : point.x;
      const z = at ? at.z : point.z;
      if (!this.contains(x, z)) return;
      this.group.add(
        (() => {
          const post = createYardagePost(index === 0 ? PALETTE.gold : PALETTE.teal, 1);
          post.position.set(x, 0, z);
          post.rotation.y = rand() * 0.4 - 0.2;
          return post;
        })(),
      );
    });

    // 잔디 포기 (페어웨이 바깥 러프 위)
    for (let i = 0; i < 26; i += 1) {
      const angle = rand() * Math.PI * 2;
      const radius = fairwayWidth + 1.2 + rand() * (hole.roughWidth - fairwayWidth - 2.2);
      const along = 0.06 + rand() * 0.9;
      const index = Math.min(this.fairwayLine.length - 1, Math.max(0, Math.round(along * (this.fairwayLine.length - 1))));
      const base = this.fairwayLine[index];
      const x = base.x + Math.cos(angle) * radius * 0.55;
      const z = base.z + Math.sin(angle) * radius * 0.55;
      if (!this.contains(x, z)) continue;
      if (distanceToLine(this.fairwayLine, x, z) < fairwayWidth + 0.5) continue;
      const tuft = createGrassTuft(i + hole.index * 7);
      tuft.position.set(x, 0.005, z);
      tuft.rotation.y = rand() * Math.PI;
      tuft.scale.setScalar(0.8 + rand() * 0.6);
      this.group.add(tuft);
    }

    // 섬 가장자리 돌 (절벽 위 테두리)
    for (let i = 4; i < this.islandPoly.length - 4; i += 7) {
      const point = this.islandPoly[i];
      const inward = { x: point.x * 0.97, z: point.z * 0.97 };
      const x = inward.x;
      const z = inward.z;
      if (!this.contains(x, z)) continue;
      if (distanceToLine(this.fairwayLine, x, z) < fairwayWidth + 1.2) continue;
      const rock = createRockCluster(0.42 + rand() * 0.3, i);
      rock.position.set(x, 0.02, z);
      rock.rotation.y = rand() * Math.PI;
      this.group.add(rock);
    }

    // 티박스 옆 소품: 가로등 · 골프백 거치대
    const teeSide = hole.index % 2 === 0 ? 1 : -1;
    const lamp = createLamp(1);
    lamp.position.set(hole.tee[0] + 7.6 * teeSide, 0, hole.tee[1] + 3.4);
    lamp.rotation.y = teeSide > 0 ? -0.4 : 0.4;
    this.group.add(lamp);
    if (hole.index !== 0) {
      const bag = createBagStand(1);
      bag.position.set(hole.tee[0] - 6.6 * teeSide, 0, hole.tee[1] + 3.2);
      bag.rotation.y = teeSide > 0 ? 0.5 : -0.5;
      this.group.add(bag);
    }

    // 홀별 랜드마크
    if (hole.index === 0) {
      const gazebo = createGazebo(1);
      this.group.add(gazebo);
      gazebo.position.set(-9.4, 0, -36.4);
      gazebo.rotation.y = 0.5;
      const bench = createBench(1);
      bench.position.set(6.6, 0, -20.5);
      bench.rotation.y = -1.1;
      this.group.add(bench);
      const bag = createBagStand(1);
      bag.position.set(-4.6, 0, 33.4);
      bag.rotation.y = 0.3;
      this.group.add(bag);
      const wall = createStoneWall(6.5, 1);
      wall.position.set(-10.2, 0, -8.5);
      wall.rotation.y = 0.22;
      this.group.add(wall);
    } else if (hole.index === 1) {
      const pond = (hole.zones ?? []).find((zone) => zone.kind === 'water');
      if (pond) {
        const bridge = createBridge(Math.max(6, pond.rz * 1.9));
        bridge.position.set(pond.x, 0.02, pond.z);
        bridge.rotation.y = 0;
        this.group.add(bridge);
        const bench = createBench(1);
        bench.position.set(pond.x + pond.rx + 2.4, 0, pond.z + 1.2);
        bench.rotation.y = -1.4;
        this.group.add(bench);
      }
      const cart = createGolfCart(1);
      cart.position.set(9.6, 0, 16.5);
      cart.rotation.y = 0.7;
      this.group.add(cart);
      const wall = createStoneWall(7, 1);
      wall.position.set(9.4, 0, -18.5);
      wall.rotation.y = -0.3;
      this.group.add(wall);
    } else {
      const windmill = createWindmill(1.25);
      windmill.position.set(19.0, APRON_Y, -46.0);
      windmill.rotation.y = -0.35;
      this.group.add(windmill);
      const wall = createStoneWall(7, 1);
      wall.position.set(-9.8, 0, -30.5);
      wall.rotation.y = 0.12;
      this.group.add(wall);
      const bench = createBench(1);
      bench.position.set(8.2, 0, 20.5);
      bench.rotation.y = 0.8;
      this.group.add(bench);
    }

    // 원경 숲 — 섬 밖 들판을 둘러싼 나무 띠
    const centerX = (hole.tee[0] + hole.green.x) / 2;
    const centerZ = (hole.tee[1] + hole.green.z) / 2;
    for (let i = 0; i < 44; i += 1) {
      const angle = rand() * Math.PI * 2;
      const radius = 62 + rand() * 34;
      const x = centerX + Math.cos(angle) * radius;
      const z = centerZ + Math.sin(angle) * radius;
      if (this.contains(x, z)) continue;
      const tree = i % 3 === 0 ? createPine(1.7 + rand() * 1.4) : createTree(1.6 + rand() * 1.3);
      tree.position.set(x, APRON_Y, z);
      tree.rotation.y = rand() * Math.PI * 2;
      this.group.add(tree);
    }

    // 페어웨이에서 먼 쪽 울타리 (섬 밖)
    for (let i = 0; i < 4; i += 1) {
      const fence = createFence(2.6, 1);
      const angle = 1.9 + i * 0.5;
      const radius = hole.roughWidth + 5.5;
      const x = Math.cos(angle) * radius + hole.green.x;
      const z = Math.sin(angle) * radius + (hole.tee[1] + hole.cup[1]) / 2;
      if (this.contains(x, z)) continue;
      fence.position.set(x, APRON_Y, z);
      fence.rotation.y = angle + Math.PI / 2;
      this.group.add(fence);
    }
  }

  // ---------------------------------------------------------------- 업데이트

  update(dt: number): void {
    this.time += dt;
    const t = this.time;

    for (let i = 0; i < this.waterSurfaces.length; i += 1) {
      const surface = this.waterSurfaces[i];
      surface.position.y = -0.14 + Math.sin(t * 1.5 + i) * 0.008;
      const material = surface.material as THREE.MeshStandardMaterial;
      if (material.map) {
        material.map.offset.x = (t * 0.012) % 1;
        material.map.offset.y = (t * 0.02) % 1;
      }
    }

    for (const ripple of this.ripples) {
      const phase = (t * 0.32 + ripple.phase) % 1;
      ripple.mesh.scale.setScalar(ripple.base * (0.9 + phase * 0.35));
      const material = ripple.mesh.material as THREE.MeshStandardMaterial;
      material.opacity = 0.28 * (1 - phase);
    }

    if (this.flagCloth && this.flagClothBase) {
      const attribute = this.flagCloth.geometry.getAttribute('position') as THREE.BufferAttribute;
      const array = attribute.array as Float32Array;
      for (let i = 0; i < array.length; i += 3) {
        const baseX = this.flagClothBase[i];
        const baseY = this.flagClothBase[i + 1];
        const wave = Math.sin(baseX * 7 + t * 4.2) * 0.05 * (baseX / 0.64);
        array[i + 2] = this.flagClothBase[i + 2] + wave;
        array[i + 1] = baseY + Math.sin(baseX * 5 + t * 3.1) * 0.012 * (baseX / 0.64);
      }
      attribute.needsUpdate = true;
      this.flagCloth.geometry.computeVertexNormals();
    }
  }

  dispose(): void {
    this.scene.remove(this.group);
    this.geometries.forEach((geometry) => geometry.dispose());
    this.geometries.length = 0;
    this.materials.forEach((material) => material.dispose());
    this.materials.length = 0;
    this.textures.forEach((texture) => texture.dispose());
    this.textures.length = 0;
    this.waterSurfaces.length = 0;
    this.ripples.length = 0;
    this.flagCloth = null;
    this.flagClothBase = null;
    this.group.clear();
  }
}
