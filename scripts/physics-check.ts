/**
 * 헤드리스 검증 스크립트 (npm run verify:physics)
 * - 퍼팅 감쇠 상수로 "풀파워 굴러가는 거리"를 측정
 * - 실제 3홀을 자동 플레이해서 컵 도달 가능 여부/물·OB 처리/스코어 흐름을 확인
 * 렌더러/DOM 없이 게임 로직과 물리만 돌린다.
 */
import * as THREE from 'three';
import { Game } from '../src/game/game';
import { createWorld, makeSlabBody } from '../src/game/physics';
import { AudioEngine } from '../src/game/audio';
import { createRealtime } from '../src/net/realtime';
import { BALL_RADIUS, MAX_SHOT_SPEED, MIN_SHOT_SPEED } from '../src/game/constants';
import { HOLES } from '../src/game/courses';

function travelDistance(power: number): { distance: number; seconds: number } {
  const { world, materials, ball } = createWorld();
  makeSlabBody(world, materials.ground, 0, -40, 8, 120, 0);
  ball.position.set(0, BALL_RADIUS, 0);
  const speed = MIN_SHOT_SPEED + (MAX_SHOT_SPEED - MIN_SHOT_SPEED) * power;
  ball.velocity.set(0, 0, -speed);
  ball.wakeUp();

  let seconds = 0;
  const dt = 1 / 120;
  while (seconds < 20) {
    world.step(dt, dt, 1);
    seconds += dt;
    if (ball.velocity.length() < 0.12) break;
  }
  return { distance: Math.abs(ball.position.z), seconds };
}

console.log('— 퍼팅 파워별 이동 거리 (잔디, 감쇠 포함) —');
for (const power of [0.25, 0.5, 0.75, 1]) {
  const { distance, seconds } = travelDistance(power);
  console.log(`  파워 ${(power * 100).toFixed(0).padStart(3)}% → ${distance.toFixed(2)}m (${seconds.toFixed(1)}초)`);
}

console.log('\n— 3홀 자동 플레이 —');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(56, 1, 0.1, 200);
const audio = new AudioEngine();
const realtime = createRealtime('oneone-minigolf-test');
const events: string[] = [];

const game = new Game({
  scene,
  camera,
  audio,
  realtime,
  events: {
    onHole: (spec, index) => events.push(`HOLE ${index + 1} (Par ${spec.par}) ${spec.name}`),
    onHoled: (hole, strokes, label) => events.push(`  HOLED hole=${hole + 1} strokes=${strokes} (${label})`),
    onPenalty: (kind, strokes) => events.push(`  PENALTY ${kind} → ${strokes}타`),
    onFinish: (result) => events.push(`FINISH total=${result.total} par=${result.par} (${result.verdict})`),
  },
});

game.join({ id: 'test-player', name: '테스터', color: '#ff7a59' });

const dt = 1 / 60;
let guard = 0;

/** 홀별로 노려야 할 지점 (코너·다리 같은 경유지 포함) */
let lane = 1;
function waypoint(hole: number, x: number, z: number): [number, number] {
  const cup = HOLES[hole].cup;
  if (hole === 1) {
    // L자 코너: 먼저 오른쪽으로 꺾인 통로로 보낸 뒤 컵을 노린다
    if (z > -3.0) return [0.5, -4.3];
    return [cup[0], cup[1]];
  }
  if (hole === 2) {
    // 워터 해저드: 움직이는 장애물 옆 빈 틈 → 다리 입구 → 다리 건너 → 컵
    if (z > -1.95) return [lane * 1.15, -3.1];
    if (z > -3.2) return [0.8, -3.15];
    if (z > -6.3) return [0.8, -8.2];
    return [cup[0], cup[1]];
  }
  return [cup[0], cup[1]];
}

let lastStart: [number, number] | null = null;

while (guard < 50000) {
  guard += 1;
  const state = game.debugState();

  if (state.state === 'finished') break;

  if (state.state === 'ready') {
    // 직전 샷이 거의 움직이지 않았다면 장애물에 막힌 것 → 반대 레인으로 시도
    if (lastStart && Math.hypot(state.pos[0] - lastStart[0], state.pos[2] - lastStart[1]) < 0.45) {
      lane = -lane;
    }
    lastStart = [state.pos[0], state.pos[2]];

    const [tx, tz] = waypoint(state.hole, state.pos[0], state.pos[2]);
    const dx = tx - state.pos[0];
    const dz = tz - state.pos[2];
    const distance = Math.hypot(dx, dz);
    // 거리 → 파워 역산 (약 15% 오버)
    const speedNeeded = (distance * 0.92 + 0.3) * 1.15;
    const power = Math.min(1, Math.max(0.2, (speedNeeded - MIN_SHOT_SPEED) / (MAX_SHOT_SPEED - MIN_SHOT_SPEED)));
    if (process.env.SHOT_LOG) {
      console.log(
        `    shot #${state.strokes + 1} hole${state.hole + 1} from (${state.pos[0].toFixed(2)}, ${state.pos[2].toFixed(2)}) → (${tx}, ${tz}) d=${distance.toFixed(2)} p=${power.toFixed(2)}`,
      );
    }
    game.puttRaw(dx, dz, power);
  }

  game.update(dt);
}

const final = game.debugState();
events.push(`FINAL state=${final.state} hole=${final.hole + 1} strokes=${final.strokes}`);
console.log(events.map((line) => `  ${line}`).join('\n'));

realtime.close();
console.log('\n검증 스크립트 종료');
