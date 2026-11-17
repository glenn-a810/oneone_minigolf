import * as CANNON from 'cannon-es';
import { BALL_RADIUS } from './constants';

export interface PhysicsMaterials {
  ground: CANNON.Material;
  wall: CANNON.Material;
  ball: CANNON.Material;
  bumper: CANNON.Material;
  mover: CANNON.Material;
}

export interface PhysicsWorld {
  world: CANNON.World;
  materials: PhysicsMaterials;
  ball: CANNON.Body;
}

/**
 * 미니골프용 물리 월드.
 * - 잔디는 마찰이 조금 있고 튕김이 낮은 재질
 * - 뱅크월/범퍼는 잘 튕기는 재질
 * - 공은 굴러가며 서서히 멈추도록 감쇠(damping)를 준다
 */
export function createWorld(): PhysicsWorld {
  const world = new CANNON.World({
    gravity: new CANNON.Vec3(0, -12, 0),
  });
  world.broadphase = new CANNON.SAPBroadphase(world);
  world.allowSleep = true;
  const solver = world.solver as CANNON.GSSolver;
  solver.iterations = 12;
  solver.tolerance = 0.001;
  world.defaultContactMaterial.contactEquationStiffness = 1e8;
  world.defaultContactMaterial.contactEquationRelaxation = 3;

  const ground = new CANNON.Material('ground');
  const wall = new CANNON.Material('wall');
  const ball = new CANNON.Material('ball');
  const bumper = new CANNON.Material('bumper');
  const mover = new CANNON.Material('mover');

  world.addContactMaterial(
    new CANNON.ContactMaterial(ground, ball, {
      friction: 0.4,
      restitution: 0.06,
      contactEquationStiffness: 1e8,
      contactEquationRelaxation: 3,
    }),
  );
  world.addContactMaterial(
    new CANNON.ContactMaterial(wall, ball, {
      friction: 0.06,
      restitution: 0.62,
    }),
  );
  world.addContactMaterial(
    new CANNON.ContactMaterial(bumper, ball, {
      friction: 0.04,
      restitution: 0.86,
    }),
  );
  world.addContactMaterial(
    new CANNON.ContactMaterial(mover, ball, {
      friction: 0.1,
      restitution: 0.5,
    }),
  );

  const ballBody = new CANNON.Body({
    mass: 0.05,
    shape: new CANNON.Sphere(BALL_RADIUS),
    material: ball,
    linearDamping: 0.34,
    angularDamping: 0.5,
    allowSleep: true,
    sleepSpeedLimit: 0.16,
    sleepTimeLimit: 0.35,
  });
  // 1/120초 고정 스텝으로 얇은 벽을 뚫지 않게 한다 (호출부에서 world.step에 substep 지정)
  ballBody.position.set(0, BALL_RADIUS, 0);
  world.addBody(ballBody);

  return {
    world,
    materials: { ground, wall, ball, bumper, mover },
    ball: ballBody,
  };
}

/** 바닥 조각용 정적 박스 (상면이 y=top) */
export function makeSlabBody(
  world: CANNON.World,
  material: CANNON.Material,
  x: number,
  z: number,
  w: number,
  d: number,
  top = 0,
  thickness = 0.8,
): CANNON.Body {
  const body = new CANNON.Body({
    mass: 0,
    material,
    shape: new CANNON.Box(new CANNON.Vec3(w / 2, thickness / 2, d / 2)),
  });
  body.position.set(x, top - thickness / 2, z);
  world.addBody(body);
  return body;
}

/** 벽/장애물 박스 (바닥 y=base 위로 세운다) */
export function makeWallBody(
  world: CANNON.World,
  material: CANNON.Material,
  x: number,
  z: number,
  w: number,
  h: number,
  d: number,
  base = 0,
): CANNON.Body {
  const body = new CANNON.Body({
    mass: 0,
    material,
    shape: new CANNON.Box(new CANNON.Vec3(w / 2, h / 2, d / 2)),
  });
  body.position.set(x, base + h / 2, z);
  world.addBody(body);
  return body;
}
