/**
 * 골프 물리 + 3홀 자동 플레이 검증 (npm run verify:physics)
 *
 * 1) 클럽별 비거리(캐리/총거리)를 측정해 클럽 시스템이 거리별로 구분되는지 확인
 * 2) 지면별 굴림 마찰(페어웨이/그린/러프/벙커) 확인
 * 3) 봇이 클럽과 파워를 골라 3홀을 실제로 끝까지 플레이 (워터/OB/벙커/퍼팅 포함)
 */
import * as THREE from 'three';
import { Game } from '../src/game/game';
import { AudioEngine } from '../src/game/audio';
import { createRealtime } from '../src/net/realtime';
import { previewShot, type BallEvent, type SurfaceFn } from '../src/game/ball';
import { CLUBS, getClub, recommendClub, liePenalty } from '../src/game/clubs';
import { MIN_POWER_RATIO, STROKE_LIMIT_EXTRA } from '../src/game/constants';
import { HOLES } from '../src/game/courses';
import type { SurfaceKind } from '../src/game/types';

let failures = 0;
function check(label: string, condition: boolean, detail = ''): void {
  const mark = condition ? 'OK ' : 'FAIL';
  if (!condition) failures += 1;
  console.log(`  [${mark}] ${label}${detail ? ` — ${detail}` : ''}`);
}

interface Flight {
  carry: number;
  total: number;
  seconds: number;
  landingSurface: SurfaceKind;
  water: boolean;
}

/** 평평한 지면에서 클럽 한 번의 비거리 측정 */
function measureFlight(
  clubId: string,
  power: number,
  surface: SurfaceKind,
  opts: { rolling?: boolean } = {},
): Flight {
  const flat: SurfaceFn = () => ({ kind: surface, height: surface === 'green' ? 0.01 : 0 });
  const club = getClub(clubId as never);
  const speed = club.speed * (MIN_POWER_RATIO + (1 - MIN_POWER_RATIO) * power) * liePenalty(surface);
  const start = { x: 0, y: 0.09, z: 0, surface };
  const preview = previewShot(
    { speed: opts.rolling ? Math.max(0.8, speed) : speed, loft: club.loft, yaw: 0, curve: 0 },
    { surfaceAt: flat },
    start,
    { rolling: club.roll, speed: Math.max(0.8, speed), maxSeconds: 8 },
  );
  const carry = preview.landing ? Math.hypot(preview.landing.x, preview.landing.z) : 0;
  const rest = preview.rest ? Math.hypot(preview.rest.x, preview.rest.z) : carry;
  return {
    carry,
    total: rest,
    seconds: preview.points.length,
    landingSurface: surface,
    water: preview.water,
  };
}

console.log('— 클럽별 비거리 (평평한 페어웨이, 풀파워) —');
const carryTable: Record<string, number> = {};
for (const club of CLUBS) {
  if (club.roll) continue;
  const flight = measureFlight(club.id, 1, 'fairway');
  carryTable[club.id] = flight.carry;
  console.log(
    `  ${club.name.padEnd(4)} 로프트 ${String(club.loft).padStart(2)}° → 캐리 ${flight.carry.toFixed(1).padStart(5)}m · 총 ${flight.total.toFixed(1).padStart(5)}m`,
  );
}

// 클럽 간 거리 차이가 뚜렷해야 클럽 선택이 의미가 있다
const order = ['driver', 'wood', 'iron', 'wedge'];
for (let i = 0; i < order.length - 1; i += 1) {
  const a = carryTable[order[i]];
  const b = carryTable[order[i + 1]];
  check(
    `${getClub(order[i] as never).name} > ${getClub(order[i + 1] as never).name}`,
    a > b + 3,
    `${a.toFixed(1)}m vs ${b.toFixed(1)}m`,
  );
}
check('드라이버 캐리 35~50m', carryTable.driver >= 35 && carryTable.driver <= 50, `${carryTable.driver.toFixed(1)}m`);
check('웨지 캐리 12~22m', carryTable.wedge >= 12 && carryTable.wedge <= 22, `${carryTable.wedge.toFixed(1)}m`);

console.log('\n— 지면별 굴림 (퍼터 풀파워) —');
const greenRoll = measureFlight('putter', 1, 'green').total;
const fairwayRoll = measureFlight('putter', 1, 'fairway').total;
const roughRoll = measureFlight('putter', 1, 'rough').total;
const sandRoll = measureFlight('putter', 1, 'bunker').total;
console.log(
  `  그린 ${greenRoll.toFixed(1)}m · 페어웨이 ${fairwayRoll.toFixed(1)}m · 러프 ${roughRoll.toFixed(1)}m · 벙커 ${sandRoll.toFixed(1)}m`,
);
check('그린이 페어웨이보다 멀리 굴러간다', greenRoll > fairwayRoll + 2);
check('러프는 페어웨이보다 짧다', roughRoll < fairwayRoll);
check('벙커에서는 거의 멈춘다 (5m 이하)', sandRoll <= 5, `${sandRoll.toFixed(1)}m`);

console.log('\n— 워터 해저드 / OB 판정 —');
const waterSurface: SurfaceFn = (x, z) =>
  Math.abs(x) < 6 && Math.abs(z) < 6 ? { kind: 'water', height: -0.14 } : { kind: 'fairway', height: 0 };
const intoWater = previewShot(
  { speed: 12, loft: 12, yaw: 0, curve: 0 },
  { surfaceAt: waterSurface },
  { x: 0, y: 0.09, z: 12, surface: 'fairway' },
);
check('연못으로 날아가면 water 이벤트', intoWater.water, intoWater.water ? '감지됨' : '감지 실패');

const outSurface: SurfaceFn = (x, z) =>
  Math.abs(x) < 4 && z > -4 ? { kind: 'fairway', height: 0 } : { kind: 'out', height: -0.4 };
const intoOut = previewShot(
  { speed: 20, loft: 12, yaw: 0, curve: 0 },
  { surfaceAt: outSurface },
  { x: 0, y: 0.09, z: 0, surface: 'fairway' },
);
check('섬 밖으로 나가면 out 이벤트', intoOut.out);

// ---------------------------------------------------------------- 3홀 자동 플레이

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(56, 1, 0.1, 320);
const audio = new AudioEngine();
const realtime = createRealtime('oneone-minigolf-test');
const events: string[] = [];

const game = new Game({
  scene,
  camera,
  audio,
  realtime,
  events: {
    onHole: (spec, index) => events.push(`HOLE ${index + 1} (Par ${spec.par}) ${spec.name} · ${Math.round(Math.hypot(spec.cup[0]-spec.tee[0], spec.cup[1]-spec.tee[1]))}m`),
    onHoled: (hole, strokes, label) => events.push(`  HOLED hole=${hole + 1} strokes=${strokes} (${label})`),
    onPenalty: (kind, strokes) => events.push(`  PENALTY ${kind} → ${strokes}타`),
    onFinish: (result) => events.push(`FINISH total=${result.total} par=${result.par} (${result.verdict})`),
  },
});

game.join({ id: 'test-player', name: '테스터', color: '#ff7a59' });

const dt = 1 / 60;

function stepGame(maxFrames: number): void {
  for (let i = 0; i < maxFrames; i += 1) {
    game.update(dt);
    const state = game.debugState().state;
    if (state === 'ready' || state === 'finished' || state === 'between') return;
  }
}

/** 현재 위치에서 목표(컵)까지 가장 가까이 보내는 파워를 찾는다 (봇) */
function chooseShot(): { power: number; club: string } {
  const state = game.debugState();
  const cup = state.cup;
  game.debugAimAt(cup[0], cup[1]);
  const recommended = recommendClub(state.distance, state.surface);
  const club = getClub(recommended);
  game.setClub(club.id);

  let best = { power: 0.9, score: Infinity };
  for (let p = 0.1; p <= 1.0001; p += 0.05) {
    const preview = game.debugPreviewAt(p);
    if (!preview) continue;
    const rest = preview.rest ?? { x: state.pos[0], z: state.pos[2] };
    const dist = Math.hypot(cup[0] - rest.x, cup[1] - rest.z);
    let score = dist;
    if (preview.water) score += 60;
    if (preview.out) score += 120;
    if (preview.holed) score -= 4;
    if (score < best.score) best = { power: p, score };
  }
  return { power: best.power, club: club.id };
}

let guard = 0;
let strokesTotal = 0;
const holeStrokes: number[] = [];

while (guard < 6000) {
  guard += 1;
  const state = game.debugState();
  if (state.state === 'finished') break;
  if (state.state === 'between') {
    game.update(dt);
    continue;
  }
  if (state.state !== 'ready') {
    game.update(dt);
    continue;
  }

  const shot = chooseShot();
  const before = state.strokes;
  game.debugFire(shot.power, 0, shot.club as never);
  stepGame(2000); // 샷이 멈추거나 홀인/벌타 처리될 때까지

  const after = game.debugState();
  if (after.strokes === before && after.state !== 'finished') {
    events.push('  STUCK: 샷이 처리되지 않음');
    break;
  }
  strokesTotal = after.strokes;
}

const final = game.debugState();
events.push(`FINAL state=${final.state} hole=${final.hole + 1} strokes=${final.strokes}`);
console.log('\n— 3홀 자동 플레이 —');
console.log(events.map((line) => `  ${line}`).join('\n'));

// 홀별 기록 확인
const holes = HOLES.map((hole) => {
  const record = game.debugState();
  void record;
  return hole;
});
void holes;

// 스코어카드는 onFinish 이벤트의 결과로 확인
const finishEvent = events.find((line) => line.startsWith('FINISH'));
check('3홀 라운드가 끝까지 진행됨', final.state === 'finished' && Boolean(finishEvent), finishEvent ?? '미완료');
for (let i = 0; i < HOLES.length; i += 1) {
  const holed = events.filter((line) => line.includes(`HOLED hole=${i + 1}`));
  check(`${i + 1}홀 홀인 처리`, holed.length > 0, holed[0]?.trim() ?? '기록 없음');
}
void holeStrokes;
void strokesTotal;

realtime.close();
console.log(`\n${failures === 0 ? '모든 검증 통과 ✅' : `${failures}개 검증 실패 ❌`}`);
process.exit(failures === 0 ? 0 : 1);
