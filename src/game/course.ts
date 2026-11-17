import * as THREE from 'three';
import type { DecorSpec, HoleSpec, SurfaceInfo, ZoneSpec } from './types';
import type { BallObstacle, SurfaceFn } from './ball';
import { createBush, createPine, createRock, createTree } from './scenery';
import {
  FALLBACK,
  fairwayTexture,
  flagTexture,
  greenTexture,
  roughTexture,
  sandTexture,
  waterTexture,
} from './textures';

/**
 * 한 홀의 3D 코스 — 잔디 섬(러프) 위에 페어웨이 리본, 그린, 벙커, 연못, 깃발,
 * 나무/바위를 절차적 텍스처로 그린다. 동시에 공 물리용 지면 조회(surfaceAt)를 제공한다.
 *
 * 모든 지면은 y=0 평면에 상면이 오도록 만들고, 연못만 -0.14 로 파인다.
 */

const ISLAND_DEPTH = 1.6;
const APRON_Y = -1.6;

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
  geometry.computeVertexNormals();
  return geometry;
}

function ellipseDisc(rx: number, rz: number, segments = 56): THREE.BufferGeometry {
  const geometry = new THREE.CircleGeometry(1, segments);
  geometry.rotateX(-Math.PI / 2);
  geometry.scale(rx, 1, rz);
  return geometry;
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
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly materials: THREE.Material[] = [];
  private readonly textures: THREE.Texture[] = [];
  private waterSurfaces: THREE.Mesh[] = [];
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

  private addMesh(geometry: THREE.BufferGeometry, material: THREE.Material, cast = false): THREE.Mesh {
    this.track(geometry);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    mesh.castShadow = cast;
    this.group.add(mesh);
    return mesh;
  }

  private build(): void {
    const hole = this.spec;

    // 주변 지형 (섬 아래로 이어지는 넓은 러프)
    const apronTexture = roughTexture(0.14);
    const apronMat = this.material({
      color: apronTexture ? 0xffffff : FALLBACK.rough,
      map: apronTexture,
      roughness: 0.98,
    });
    const apronGeo = this.track(new THREE.PlaneGeometry(190, 190, 1, 1));
    apronGeo.rotateX(-Math.PI / 2);
    const apron = new THREE.Mesh(apronGeo, apronMat);
    apron.position.set(hole.green.x, APRON_Y, hole.green.z - 6);
    apron.receiveShadow = true;
    this.group.add(apron);

    // 연못은 섬에 구멍을 뚫어 파인 웅덩이로 보이게 한다
    const waterZones = (hole.zones ?? []).filter((zone) => zone.kind === 'water');
    const holes = waterZones
      .map((zone) => ellipsePoints(zone))
      .filter((points) => points.every((point) => pointInPolygon(this.islandPoly, point.x, point.z)));

    const roughTex = roughTexture(0.2);
    const islandTop = this.material({
      color: roughTex ? 0xffffff : FALLBACK.rough,
      map: roughTex,
      roughness: 0.97,
    });

    const islandGeo = extrudedGround(this.islandPoly, holes, ISLAND_DEPTH);
    const island = new THREE.Mesh(islandGeo, islandTop);
    island.receiveShadow = true;
    this.geometries.push(islandGeo);
    this.group.add(island);

    // 페어웨이 리본 (잔디 스트라이프)
    const fairTex = fairwayTexture(0.25);
    const fairwayMat = this.material({
      color: fairTex ? 0xffffff : FALLBACK.fairway,
      map: fairTex,
      roughness: 0.94,
    });
    const fairwayGeo = extrudedGround(corridorPolygon(this.fairwayLine, hole.fairwayWidth), [], 0.05);
    const fairway = new THREE.Mesh(fairwayGeo, fairwayMat);
    fairway.position.y = 0.006;
    fairway.receiveShadow = true;
    this.geometries.push(fairwayGeo);
    this.group.add(fairway);

    // 그린 + 프린지
    const greenTex = greenTexture(0.32);
    const greenMat = this.material({
      color: greenTex ? 0xffffff : FALLBACK.green,
      map: greenTex,
      roughness: 0.88,
    });
    const fringeMat = this.material({ color: 0x6fc355, roughness: 0.95 });
    const fringe = this.addMesh(ellipseDisc(hole.green.r + 1.55, hole.green.r + 1.55, 64), fringeMat);
    fringe.position.set(hole.green.x, 0.008, hole.green.z);
    const greenMesh = this.addMesh(ellipseDisc(hole.green.r, hole.green.r, 64), greenMat);
    greenMesh.position.set(hole.green.x, 0.014, hole.green.z);

    // 그린 위 거리 가이드 링
    const guideMat = this.material({
      color: 0xffffff,
      transparent: true,
      opacity: 0.28,
      roughness: 0.7,
    });
    [1.4, 2.8, 4.2].forEach((radius) => {
      if (radius > hole.green.r - 0.4) return;
      const ringGeo = this.track(new THREE.RingGeometry(radius - 0.035, radius, 64));
      ringGeo.rotateX(-Math.PI / 2);
      const ring = new THREE.Mesh(ringGeo, guideMat);
      ring.position.set(hole.green.x, 0.02, hole.green.z);
      this.group.add(ring);
    });

    // 벙커
    const sandTex = sandTexture(0.4);
    const sandMat = this.material({
      color: sandTex ? 0xffffff : FALLBACK.sand,
      map: sandTex,
      roughness: 1,
    });
    const sandRimMat = this.material({ color: 0xb59a6c, roughness: 1 });
    for (const zone of hole.zones ?? []) {
      if (zone.kind !== 'bunker') continue;
      const rim = this.addMesh(ellipseDisc(zone.rx + 0.28, zone.rz + 0.28, 48), sandRimMat);
      rim.position.set(zone.x, 0.004, zone.z);
      const sand = this.addMesh(ellipseDisc(zone.rx, zone.rz, 48), sandMat);
      sand.position.set(zone.x, 0.012, zone.z);
    }

    // 연못
    const waterTex = waterTexture(0.12);
    const waterMat = this.material({
      color: waterTex ? 0xffffff : FALLBACK.water,
      map: waterTex,
      roughness: 0.08,
      metalness: 0.45,
      transparent: true,
      opacity: 0.92,
    });
    const basinMat = this.material({ color: 0x5d6b52, roughness: 1, side: THREE.DoubleSide });
    const foamMat = this.material({ color: 0xeaf7ff, roughness: 0.5, transparent: true, opacity: 0.6 });
    for (const zone of waterZones) {
      const basinGeo = this.track(new THREE.CylinderGeometry(zone.rx, zone.rx * 0.92, 1.0, 48, 1, true));
      basinGeo.scale(1, 1, zone.rz / zone.rx);
      const basin = new THREE.Mesh(basinGeo, basinMat);
      basin.position.set(zone.x, -0.5, zone.z);
      basin.receiveShadow = true;
      this.group.add(basin);

      const waterGeo = ellipseDisc(zone.rx * 0.995, zone.rz * 0.995, 56);
      const water = new THREE.Mesh(this.track(waterGeo), waterMat);
      water.position.set(zone.x, -0.14, zone.z);
      this.group.add(water);
      this.waterSurfaces.push(water);

      const foamGeo = this.track(new THREE.TorusGeometry(1, 0.02, 6, 64));
      foamGeo.rotateX(-Math.PI / 2);
      foamGeo.scale(zone.rx, 1, zone.rz);
      const foam = new THREE.Mesh(foamGeo, foamMat);
      foam.position.set(zone.x, -0.02, zone.z);
      this.group.add(foam);
    }

    // 티박스
    const teeMat = this.material({
      color: 0x9adc75,
      roughness: 0.9,
      polygonOffset: true,
      polygonOffsetFactor: -1,
    });
    const teeDisc = this.addMesh(ellipseDisc(2.0, 1.5, 40), teeMat);
    teeDisc.position.set(hole.tee[0], 0.016, hole.tee[1]);
    const teeMarkMat = this.material({ color: 0xffffff, roughness: 0.6 });
    [-0.9, 0.9].forEach((dx) => {
      const marker = this.addMesh(new THREE.SphereGeometry(0.07, 12, 10), teeMarkMat, true);
      marker.position.set(hole.tee[0] + dx, 0.05, hole.tee[1] - 0.7);
    });

    // 컵 + 깃발
    const cupMat = this.material({ color: 0x18251f, roughness: 0.95 });
    const cupDisc = this.addMesh(ellipseDisc(0.19, 0.19, 32), cupMat);
    cupDisc.position.set(this.cup.x, 0.016, this.cup.z);
    const rimMat = this.material({ color: 0xf7f3e6, roughness: 0.5 });
    const rimGeo = this.track(new THREE.TorusGeometry(0.2, 0.014, 8, 32));
    rimGeo.rotateX(-Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.position.set(this.cup.x, 0.02, this.cup.z);
    this.group.add(rim);

    const flagGroup = new THREE.Group();
    const poleMat = this.material({ color: 0xf8f8f2, roughness: 0.35, metalness: 0.35 });
    const pole = this.addMesh(new THREE.CylinderGeometry(0.018, 0.018, 1.7, 10), poleMat, true);
    pole.position.y = 0.85;
    flagGroup.add(pole);
    const flagTex = flagTexture();
    const clothMat = this.material({
      color: flagTex ? 0xffffff : 0xff5c78,
      map: flagTex,
      roughness: 0.72,
      side: THREE.DoubleSide,
    });
    const clothGeo = this.track(new THREE.PlaneGeometry(0.62, 0.38, 10, 4));
    clothGeo.translate(0.31, 0, 0);
    const cloth = new THREE.Mesh(clothGeo, clothMat);
    cloth.position.set(0, 1.44, 0);
    cloth.castShadow = true;
    flagGroup.add(cloth);
    this.flagCloth = cloth;
    this.flagClothBase = (clothGeo.getAttribute('position') as THREE.BufferAttribute).array.slice() as Float32Array;
    flagGroup.position.set(this.cup.x, 0, this.cup.z);
    this.group.add(flagGroup);

    // 장식
    for (const decor of hole.decor ?? []) {
      this.buildDecor(decor);
    }
  }

  private buildDecor(decor: DecorSpec): void {
    const scale = decor.s ?? 1;
    const onIsland = this.contains(decor.x, decor.z);
    const baseY = onIsland ? 0 : APRON_Y;

    const object =
      decor.kind === 'pine'
        ? createPine(scale)
        : decor.kind === 'rock'
          ? createRock(scale)
          : decor.kind === 'bush'
            ? createBush(scale)
            : createTree(scale);

    object.position.set(decor.x, baseY, decor.z);
    object.rotation.y = (decor.x * 7.3 + decor.z * 3.1) % Math.PI;
    if (decor.kind === 'rock') object.position.y = baseY + 0.02;
    this.group.add(object);

    const radius = decor.r ?? (decor.kind === 'rock' ? 0.5 * scale : 0.5 * scale);
    if (radius > 0.02) {
      this.obstacles.push({ x: decor.x, z: decor.z, r: radius });
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

    if (this.flagCloth && this.flagClothBase) {
      const attribute = this.flagCloth.geometry.getAttribute('position') as THREE.BufferAttribute;
      const array = attribute.array as Float32Array;
      for (let i = 0; i < array.length; i += 3) {
        const baseX = this.flagClothBase[i];
        const baseY = this.flagClothBase[i + 1];
        const wave = Math.sin(baseX * 7 + t * 4.2) * 0.045 * (baseX / 0.62);
        array[i + 2] = this.flagClothBase[i + 2] + wave;
        array[i + 1] = baseY + Math.sin(baseX * 5 + t * 3.1) * 0.01 * (baseX / 0.62);
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
    this.flagCloth = null;
    this.flagClothBase = null;
    this.group.clear();
  }
}

/** 좌표가 그린 위인지 (미리보기용 헬퍼) */
