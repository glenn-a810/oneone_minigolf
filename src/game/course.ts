import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import type { HoleSpec, MoverSpec } from './types';
import { makeSlabBody, makeWallBody, type PhysicsMaterials } from './physics';
import { createCloud, createRock, createTree } from './scenery';

/** 코스 재질 (홀을 바꿔도 재사용) */
const MAT = {
  fairway: new THREE.MeshStandardMaterial({ color: 0x8fdc72, roughness: 0.96 }),
  bridge: new THREE.MeshStandardMaterial({ color: 0xd9b485, roughness: 0.9 }),
  skirt: new THREE.MeshStandardMaterial({ color: 0xc2a077, roughness: 0.98 }),
  wall: new THREE.MeshStandardMaterial({ color: 0xfbf6e7, roughness: 0.75 }),
  bumper: new THREE.MeshStandardMaterial({ color: 0xff7a59, roughness: 0.45 }),
  bumperRing: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 }),
  hump: new THREE.MeshStandardMaterial({ color: 0x79d363, roughness: 0.94 }),
  mover: new THREE.MeshStandardMaterial({ color: 0xffa14d, roughness: 0.5 }),
  water: new THREE.MeshStandardMaterial({
    color: 0x2fb2e2,
    roughness: 0.12,
    metalness: 0.1,
    transparent: true,
    opacity: 0.86,
    depthWrite: false,
  }),
  waterSurface: new THREE.MeshStandardMaterial({
    color: 0x9ae8ff,
    roughness: 0.05,
    metalness: 0.2,
    transparent: true,
    opacity: 0.65,
    depthWrite: false,
  }),
  cup: new THREE.MeshStandardMaterial({ color: 0x1b2a24, roughness: 0.9 }),
  pole: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 }),
  flag: new THREE.MeshStandardMaterial({ color: 0xff5c7a, roughness: 0.7, side: THREE.DoubleSide }),
  teeMark: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 }),
};

interface SlabMesh {
  mesh: THREE.Mesh;
  /** 메쉬 상면이 로컬 y=0 이 되도록 하는 오프셋 */
  topOffset: number;
}

function roundedRectShape(w: number, d: number, radius: number): THREE.Shape {
  const x = w / 2;
  const y = d / 2;
  const r = Math.max(0.002, Math.min(radius, x * 0.96, y * 0.96));
  const s = new THREE.Shape();
  s.moveTo(-x + r, -y);
  s.lineTo(x - r, -y);
  s.quadraticCurveTo(x, -y, x, -y + r);
  s.lineTo(x, y - r);
  s.quadraticCurveTo(x, y, x - r, y);
  s.lineTo(-x + r, y);
  s.quadraticCurveTo(-x, y, -x, y - r);
  s.lineTo(-x, -y + r);
  s.quadraticCurveTo(-x, -y, -x + r, -y);
  return s;
}

/** 모서리가 둥근 얇은 판(잔디/벽/다리). 물리 충돌은 박스로 근사한다. */
function makeSlab(w: number, d: number, h: number, radius: number): {
  geometry: THREE.ExtrudeGeometry;
  topOffset: number;
} {
  const bevel = Math.min(0.045, h * 0.25, Math.min(w, d) * 0.05);
  const geometry = new THREE.ExtrudeGeometry(roundedRectShape(w, d, radius), {
    depth: Math.max(0.02, h - bevel * 2),
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 2,
    curveSegments: 5,
    steps: 1,
  });
  geometry.rotateX(-Math.PI / 2);
  geometry.computeVertexNormals();
  return { geometry, topOffset: -(h - bevel) };
}

interface MoverRuntime {
  body: CANNON.Body;
  mesh: THREE.Mesh;
  spec: MoverSpec;
  baseX: number;
  baseZ: number;
  phase: number;
}

interface CloudRuntime {
  obj: THREE.Object3D;
  baseX: number;
  phase: number;
}

/** 한 홀의 3D 비주얼 + 물리 바디 묶음 */
export class Course {
  readonly group = new THREE.Group();
  readonly cup = new THREE.Vector3();
  readonly tee = new THREE.Vector3();
  readonly waterRects: Array<{ x: number; z: number; w: number; d: number }> = [];

  private geometries: THREE.BufferGeometry[] = [];
  private bodies: CANNON.Body[] = [];
  private movers: MoverRuntime[] = [];
  private clouds: CloudRuntime[] = [];
  private waterSurfaces: THREE.Mesh[] = [];
  private flagCloth: THREE.Mesh | null = null;
  private time = 0;

  constructor(
    private scene: THREE.Scene,
    private world: CANNON.World,
    private materials: PhysicsMaterials,
    readonly spec: HoleSpec,
  ) {
    this.cup.set(spec.cup[0], 0, spec.cup[1]);
    this.tee.set(spec.tee[0], 0, spec.tee[1]);
    this.build();
    scene.add(this.group);
  }

  private addSlabMesh(w: number, d: number, h: number, radius: number, material: THREE.Material): SlabMesh {
    const { geometry, topOffset } = makeSlab(w, d, h, radius);
    this.geometries.push(geometry);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    return { mesh, topOffset };
  }

  private build(): void {
    const spec = this.spec;

    // 바닥
    for (const slab of spec.slabs) {
      const h = slab.h ?? 0.34;
      const top = slab.y ?? 0;
      const radius = Math.min(0.18, Math.min(slab.w, slab.d) * 0.3);
      const material = slab.kind === 'bridge' ? MAT.bridge : MAT.fairway;
      const { mesh, topOffset } = this.addSlabMesh(slab.w, slab.d, h, radius, material);
      mesh.position.set(slab.x, top + topOffset, slab.z);
      this.group.add(mesh);

      // 섬 아래 흙 기둥
      const skirt = this.addSlabMesh(slab.w * 0.94, slab.d * 0.94, 1.2, radius, MAT.skirt);
      skirt.mesh.position.set(slab.x, top - h + 0.02 + skirt.topOffset, slab.z);
      skirt.mesh.castShadow = false;
      this.group.add(skirt.mesh);

      this.bodies.push(makeSlabBody(this.world, this.materials.ground, slab.x, slab.z, slab.w, slab.d, top));
    }

    // 벽(뱅크월)
    for (const wall of spec.walls) {
      const h = wall.h ?? 0.6;
      const thickness = Math.min(wall.w, wall.d);
      const radius = Math.min(0.1, thickness * 0.45);
      const { mesh, topOffset } = this.addSlabMesh(wall.w, wall.d, h, radius, MAT.wall);
      mesh.position.set(wall.x, h + topOffset, wall.z);
      this.group.add(mesh);
      this.bodies.push(makeWallBody(this.world, this.materials.wall, wall.x, wall.z, wall.w, h, wall.d, 0));
    }

    // 둥근 경사 범프 (반쯤 묻은 구)
    for (const hump of spec.humps ?? []) {
      const r = hump.r ?? 2.4;
      const lift = hump.lift ?? 0.12;
      const geo = new THREE.SphereGeometry(r, 28, 18);
      this.geometries.push(geo);
      const mesh = new THREE.Mesh(geo, MAT.hump);
      mesh.position.set(hump.x, lift - r, hump.z);
      mesh.receiveShadow = true;
      this.group.add(mesh);

      const body = new CANNON.Body({ mass: 0, material: this.materials.ground, shape: new CANNON.Sphere(r) });
      body.position.set(hump.x, lift - r, hump.z);
      this.world.addBody(body);
      this.bodies.push(body);
    }

    // 범퍼(돔)
    for (const bumper of spec.bumpers ?? []) {
      const r = bumper.r ?? 0.28;
      const centerY = r - 0.2;
      const geo = new THREE.SphereGeometry(r, 22, 16);
      this.geometries.push(geo);
      const mesh = new THREE.Mesh(geo, MAT.bumper);
      mesh.position.set(bumper.x, centerY, bumper.z);
      mesh.castShadow = true;
      this.group.add(mesh);

      const ringGeo = new THREE.TorusGeometry(r * 1.02, 0.022, 8, 26);
      ringGeo.rotateX(-Math.PI / 2);
      this.geometries.push(ringGeo);
      const ring = new THREE.Mesh(ringGeo, MAT.bumperRing);
      ring.position.set(bumper.x, 0.014, bumper.z);
      this.group.add(ring);

      const body = new CANNON.Body({ mass: 0, material: this.materials.bumper, shape: new CANNON.Sphere(r) });
      body.position.set(bumper.x, centerY, bumper.z);
      this.world.addBody(body);
      this.bodies.push(body);
    }

    // 움직이는 장애물
    for (const mover of spec.movers ?? []) {
      const { mesh, topOffset } = this.addSlabMesh(mover.w, mover.d, mover.h, 0.06, MAT.mover);
      mesh.position.set(mover.x, mover.h + topOffset, mover.z);
      this.group.add(mesh);

      const stripe = this.addSlabMesh(mover.w * 0.72, mover.d * 0.5, 0.06, 0.03, MAT.bumperRing);
      stripe.mesh.position.set(0, 0.02 + stripe.topOffset, 0);
      stripe.mesh.castShadow = false;
      mesh.add(stripe.mesh);

      const body = new CANNON.Body({
        mass: 0,
        type: CANNON.Body.KINEMATIC,
        material: this.materials.mover,
        shape: new CANNON.Box(new CANNON.Vec3(mover.w / 2, mover.h / 2, mover.d / 2)),
      });
      body.position.set(mover.x, mover.h / 2, mover.z);
      this.world.addBody(body);
      this.bodies.push(body);
      this.movers.push({
        body,
        mesh,
        spec: mover,
        baseX: mover.x,
        baseZ: mover.z,
        phase: mover.phase ?? 0,
      });
    }

    // 워터 해저드
    for (const water of spec.water ?? []) {
      this.waterRects.push({ x: water.x, z: water.z, w: water.w, d: water.d });

      const { mesh, topOffset } = this.addSlabMesh(water.w, water.d, 1.7, 0.2, MAT.water);
      mesh.position.set(water.x, -0.16 + topOffset, water.z);
      mesh.receiveShadow = false;
      mesh.castShadow = false;
      this.group.add(mesh);

      const surfaceGeo = new THREE.PlaneGeometry(water.w, water.d);
      surfaceGeo.rotateX(-Math.PI / 2);
      this.geometries.push(surfaceGeo);
      const surface = new THREE.Mesh(surfaceGeo, MAT.waterSurface);
      surface.position.set(water.x, -0.13, water.z);
      this.group.add(surface);
      this.waterSurfaces.push(surface);

      // 물가의 흰 거품 라인
      const foamGeo = new THREE.BoxGeometry(water.w, 0.02, 0.06);
      this.geometries.push(foamGeo);
      for (const zEdge of [-1, 1]) {
        const foam = new THREE.Mesh(foamGeo, MAT.bumperRing);
        foam.position.set(water.x, -0.1, water.z + (water.d / 2) * zEdge);
        this.group.add(foam);
      }
    }

    // 컵 + 깃발
    const holeGeo = new THREE.CircleGeometry(0.21, 28);
    holeGeo.rotateX(-Math.PI / 2);
    this.geometries.push(holeGeo);
    const holeMesh = new THREE.Mesh(holeGeo, MAT.cup);
    holeMesh.position.set(this.cup.x, 0.007, this.cup.z);
    holeMesh.receiveShadow = true;
    this.group.add(holeMesh);

    const rimGeo = new THREE.TorusGeometry(0.212, 0.015, 8, 30);
    rimGeo.rotateX(-Math.PI / 2);
    this.geometries.push(rimGeo);
    const rim = new THREE.Mesh(rimGeo, MAT.teeMark);
    rim.position.set(this.cup.x, 0.014, this.cup.z);
    this.group.add(rim);

    const flag = new THREE.Group();
    const poleGeo = new THREE.CylinderGeometry(0.016, 0.016, 1.15, 8);
    this.geometries.push(poleGeo);
    const pole = new THREE.Mesh(poleGeo, MAT.pole);
    pole.position.y = 0.575;
    pole.castShadow = true;
    flag.add(pole);

    const clothGeo = new THREE.PlaneGeometry(0.44, 0.26);
    clothGeo.translate(0.22, 0, 0);
    this.geometries.push(clothGeo);
    const cloth = new THREE.Mesh(clothGeo, MAT.flag);
    cloth.position.set(0, 1.0, 0);
    cloth.castShadow = true;
    flag.add(cloth);
    this.flagCloth = cloth;

    flag.position.set(this.cup.x, 0, this.cup.z);
    this.group.add(flag);

    // 티 마커
    const teeGeo = new THREE.CircleGeometry(0.22, 26);
    teeGeo.rotateX(-Math.PI / 2);
    this.geometries.push(teeGeo);
    const teeMesh = new THREE.Mesh(teeGeo, MAT.teeMark);
    teeMesh.position.set(this.tee.x, 0.006, this.tee.z);
    this.group.add(teeMesh);

    // 장식 (나무·바위는 작은 잔디 발판 위에 올려 공중에 뜨지 않게 한다)
    for (const decor of spec.decor ?? []) {
      const scale = decor.s ?? 1;
      if (decor.kind === 'tree' || decor.kind === 'rock') {
        const padRadius = decor.kind === 'tree' ? 0.62 : 0.46;
        const pad = this.addSlabMesh(padRadius * 2, padRadius * 2, 0.3, padRadius, MAT.fairway);
        pad.mesh.position.set(decor.x, pad.topOffset, decor.z);
        pad.mesh.castShadow = false;
        this.group.add(pad.mesh);

        const padSkirt = this.addSlabMesh(padRadius * 1.8, padRadius * 1.8, 0.9, padRadius * 0.9, MAT.skirt);
        padSkirt.mesh.position.set(decor.x, -0.28 + padSkirt.topOffset, decor.z);
        padSkirt.mesh.castShadow = false;
        this.group.add(padSkirt.mesh);
      }

      if (decor.kind === 'tree') {
        const tree = createTree(scale);
        tree.position.set(decor.x, decor.y ?? 0, decor.z);
        this.group.add(tree);
      } else if (decor.kind === 'rock') {
        const rock = createRock(scale);
        rock.position.set(decor.x, decor.y ?? 0, decor.z);
        this.group.add(rock);
      } else {
        const cloud = createCloud(scale);
        cloud.position.set(decor.x, decor.y ?? 5.5, decor.z);
        this.group.add(cloud);
        this.clouds.push({ obj: cloud, baseX: decor.x, phase: Math.random() * Math.PI * 2 });
      }
    }
  }

  update(dt: number): void {
    this.time += dt;
    const t = this.time;

    // 움직이는 장애물: 목표 위치로 속도를 맞춰 이동 (공에 운동량이 전달된다)
    for (const mover of this.movers) {
      const { spec, body } = mover;
      const offset = Math.sin(t * spec.speed + mover.phase) * spec.range;
      const targetX = spec.axis === 'x' ? mover.baseX + offset : mover.baseX;
      const targetZ = spec.axis === 'z' ? mover.baseZ + offset : mover.baseZ;
      if (dt > 0) {
        body.velocity.set((targetX - body.position.x) / dt, 0, (targetZ - body.position.z) / dt);
      }
      mover.mesh.position.x = body.position.x;
      mover.mesh.position.z = body.position.z;
    }

    if (this.flagCloth) {
      this.flagCloth.rotation.y = Math.sin(t * 2.4) * 0.35;
      this.flagCloth.scale.x = 0.92 + Math.sin(t * 5.1) * 0.08;
    }

    for (let i = 0; i < this.waterSurfaces.length; i += 1) {
      const surface = this.waterSurfaces[i];
      surface.position.y = -0.13 + Math.sin(t * 1.7 + i) * 0.012;
      surface.rotation.z = Math.sin(t * 0.9 + i) * 0.004;
    }

    for (const cloud of this.clouds) {
      cloud.obj.position.x = cloud.baseX + Math.sin(t * 0.16 + cloud.phase) * 0.9;
      cloud.obj.position.y += Math.sin(t * 0.7 + cloud.phase) * 0.0006;
    }
  }

  /** 공 위치가 물에 떨어졌는지 */
  isInWater(x: number, z: number): boolean {
    return this.waterRects.some(
      (r) => Math.abs(x - r.x) <= r.w / 2 + 0.02 && Math.abs(z - r.z) <= r.d / 2 + 0.02,
    );
  }

  dispose(): void {
    this.scene.remove(this.group);
    for (const geometry of this.geometries) {
      geometry.dispose();
    }
    this.geometries.length = 0;
    for (const body of this.bodies) {
      this.world.removeBody(body);
    }
    this.bodies.length = 0;
    this.movers.length = 0;
    this.waterSurfaces.length = 0;
    this.clouds.length = 0;
    this.group.clear();
  }
}
