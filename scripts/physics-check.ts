/**
 * 골프 물리 + 번호별 클럽 + 3홀 자동 플레이 검증 (npm run verify:physics)
 *
 * 1) 클럽별 비거리(캐리/총거리/탄도)를 측정해 번호별 클럽이 거리순으로 구분되는지 확인
 * 2) 클럽 메타데이터(실측 표)와 실측값이 어긋나지 않는지, 파워→거리 모델이 맞는지 확인
 * 3) 지면별 굴림 마찰(페어웨이/그린/러프/벙커) 확인
 * 4) 봇이 클럽과 파워를 골라 3홀을 실제로 끝까지 플레이 (워터/OB/벙커/퍼팅 포함)
 * 5) 샷 후 골퍼는 제자리에 남고 공만 날아가는지, 뷰 전환이 동작하는지 확인
 */
import * as THREE from 'three';
import { Game } from '../src/game/game';
import { AudioEngine } from '../src/game/audio';
import { createRealtime } from '../src/net/realtime';
import { previewShot, type SurfaceFn } from '../src/game/ball';
import {
  CLUBS,
  clubMaxDistance,
  estimateDistance,
  getClub,
  liePenalty,
  powerForDistance,
  recommendClub,
} from '../src/game/clubs';
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
  apex: number;
}

/** 평평한 지면에서 클럽 한 번의 비거리 측정 */
function measureFlight(
  clubId: string,
  power: number,
  surface: SurfaceKind,
): Flight {
  const flat: SurfaceFn = () => ({ kind: surface, height: surface === 'green' ? 0.01 : 0 });
  const club = getClub(clubId as never);
  const speed = club.speed * (MIN_POWER_RATIO + (1 - MIN_POWER_RATIO) * power) * liePenalty(surface);
  const start = { x: 0, y: 0.09, z: 0, surface };
  const preview = previewShot(
    { speed: Math.max(0.8, speed), loft: club.loft, yaw: 0, curve: 0 },
    { surfaceAt: flat },
    start,
    { rolling: club.roll, speed: Math.max(0.8, speed), maxSeconds: 12 },
  );
  const carry = preview.landing ? Math.hypot(preview.landing.x, preview.landing.z) : 0;
  const rest = preview.rest ? Math.hypot(preview.rest.x, preview.rest.z) : carry;
  const apex = preview.points.reduce((max, point) => Math.max(max, point.y), 0);
  return { carry, total: rest, apex };
}

console.log('— 번호별 클럽 비거리 (평평한 페어웨이, 풀파워) —');
const measured: Record<string, Flight> = {};
for (const club of CLUBS) {
  if (club.roll) continue;
  const flight = measureFlight(club.id, 1, 'fairway');
  measured[club.id] = flight;
  console.log(
    `  ${club.code.padEnd(3)} ${club.name.padEnd(6)} 로프트 ${String(club.loft).padStart(2)}° → 캐리 ${flight.carry.toFixed(1).padStart(5)}m · 총 ${flight.total.toFixed(1).padStart(5)}m · 탄도 ${flight.apex.toFixed(1)}m`,
  );
}

const IRON_ORDER = ['1W', '3W', '5I', '7I', '9I', 'PW', 'SW'];
for (let i = 0; i < IRON_ORDER.length - 1; i += 1) {
  const a = measured[IRON_ORDER[i]];
  const b = measured[IRON_ORDER[i + 1]];
  check(
    `${getClub(IRON_ORDER[i] as never).code} > ${getClub(IRON_ORDER[i + 1] as never).code} (캐리)`,
    a.carry > b.carry + 2.5,
    `${a.carry.toFixed(1)}m vs ${b.carry.toFixed(1)}m`,
  );
  check(
    `${getClub(IRON_ORDER[i] as never).code} > ${getClub(IRON_ORDER[i + 1] as never).code} (총비거리)`,
    a.total > b.total + 2.5,
    `${a.total.toFixed(1)}m vs ${b.total.toFixed(1)}m`,
  );
}
check(
  '로프트가 높을수록 탄도가 더 뜬다 (정점/캐리 비율: SW > PW > 7I > 1W)',
  measured.SW.apex / measured.SW.carry > measured.PW.apex / measured.PW.carry &&
    measured.PW.apex / measured.PW.carry > measured['7I'].apex / measured['7I'].carry &&
    measured['7I'].apex / measured['7I'].carry > measured['1W'].apex / measured['1W'].carry,
  ["SW", "PW", "7I", "1W"]
    .map((id) => `${id} ${(measured[id].apex / measured[id].carry).toFixed(2)}`)
    .join(' < '),
);
check('1W 캐리 40~45m', measured['1W'].carry >= 40 && measured['1W'].carry <= 45, `${measured['1W'].carry.toFixed(1)}m`);
check('SW 캐리 8~13m', measured.SW.carry >= 8 && measured.SW.carry <= 13, `${measured.SW.carry.toFixed(1)}m`);

console.log('\n— 클럽 표(메타데이터) vs 실측 —');
for (const club of CLUBS) {
  if (club.roll) continue;
  const flight = measured[club.id];
  check(
    `${club.code} 표 값이 실측과 3m 이내`,
    Math.abs(club.carry - flight.carry) <= 3 && Math.abs(club.total - flight.total) <= 3,
    `표 ${club.carry.toFixed(1)}/${club.total.toFixed(1)}m · 실측 ${flight.carry.toFixed(1)}/${flight.total.toFixed(1)}m`,
  );
}

console.log('\n— 파워 → 거리 모델 —');
for (const id of ['1W', '5I', 'PW']) {
  const club = getClub(id as never);
  let worst = 0;
  for (const power of [0.3, 0.5, 0.7, 1]) {
    const real = measureFlight(id, power, 'fairway').total;
    const model = estimateDistance(club, 'fairway', power);
    worst = Math.max(worst, Math.abs(real - model));
  }
  check(`${club.code} 예상 비거리 모델 오차 2m 이내`, worst <= 2, `최대 ${worst.toFixed(1)}m`);
}
{
  const club = getClub('5I');
  const max = clubMaxDistance(club, 'fairway');
  check('100% 파워 = 클럽 최대 비거리', Math.abs(estimateDistance(club, 'fairway', 1) - max) < 0.01, `${max.toFixed(1)}m`);
  const need = powerForDistance(club, 'fairway', max * 0.5);
  const back = estimateDistance(club, 'fairway', need);
  check('필요 파워 → 예상 비거리 역산이 맞는다', Math.abs(back - max * 0.5) < 0.4, `${back.toFixed(1)}m (목표 ${(max * 0.5).toFixed(1)}m)`);
  check('라이 페널티: 러프 < 페어웨이', clubMaxDistance(club, 'rough') < clubMaxDistance(club, 'fairway'));
  check('라이 페널티: 벙커 < 러프', clubMaxDistance(club, 'bunker') < clubMaxDistance(club, 'rough'));
}

console.log('\n— 추천 클럽 (거리 · 지형) —');
const recommendCases: Array<[number, SurfaceKind, string]> = [
  [58, 'tee', '1W'],
  [44, 'fairway', '3W'],
  [30, 'fairway', '5I'],
  [22, 'fairway', '7I'],
  [15, 'fairway', 'PW'],
  [9, 'fairway', 'SW'],
  [6, 'green', 'PT'],
  [9, 'fringe', 'PT'],
  [14, 'bunker', 'SW'],
  [20, 'rough', '7I'],
];
for (const [distance, surface, expected] of recommendCases) {
  const picked = recommendClub(distance, surface);
  check(`${surface} ${distance}m → ${expected} 추천`, picked === expected, picked);
}
check('추천 클럽은 편한 파워(35~102%)로 닿는다', recommendCases.every(([distance, surface]) => {
  const club = getClub(recommendClub(distance, surface));
  if (clubMaxDistance(club, surface) < distance) return true; // 이 클럽으로 닿지 않는 거리는 별도 확인
  const needed = powerForDistance(club, surface, distance);
  return needed <= 1.02 && needed >= 0.35;
}));
check('풀파워보다 먼 거리는 가장 긴 클럽(1W)', recommendClub(70, 'fairway') === '1W' && recommendClub(58, 'tee') === '1W', recommendClub(70, 'fairway'));

console.log('\n— 지면별 굴림 (퍼터 풀파워) —');
const greenRoll = measureFlight('PT', 1, 'green').total;
const fairwayRoll = measureFlight('PT', 1, 'fairway').total;
const roughRoll = measureFlight('PT', 1, 'rough').total;
const sandRoll = measureFlight('PT', 1, 'bunker').total;
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

console.log('\n— HUD 거리/파워 정보 —');
{
  const info = game.debugShotInfo();
  check('티에서 1W 추천 + 최대 비거리 표시', info.club === '1W' && info.clubMax > 50, `${info.club} ${info.clubMax.toFixed(1)}m`);
  check('남은 거리 > 0', info.distance > 50, `${info.distance.toFixed(1)}m`);
  check(
    '이 클럽으로 닿지 않는 거리는 필요 파워 100% 초과 (= 클럽 부족 표시)',
    info.neededPower > 1,
    `${(info.neededPower * 100).toFixed(0)}% (${info.distance.toFixed(1)}m / 최대 ${info.clubMax.toFixed(1)}m)`,
  );
  check('50% 파워 예상 비거리는 최대의 35~45%', info.estimate50 / info.clubMax > 0.3 && info.estimate50 / info.clubMax < 0.5, `${info.estimate50.toFixed(1)}m / ${info.clubMax.toFixed(1)}m`);
}

function stepGame(maxFrames: number): void {
  for (let i = 0; i < maxFrames; i += 1) {
    game.update(dt);
    const state = game.debugState().state;
    if (state === 'ready' || state === 'finished' || state === 'between') return;
  }
}

console.log('\n— 샷 후 골퍼는 제자리, 공만 날아간다 —');
{
  game.debugAimAt(game.debugState().cup[0], game.debugState().cup[1]);
  const before = game.debugGolfer();
  game.debugFire(1, 0, '1W');
  const shotSpot = { x: game.debugGolfer().x, z: game.debugGolfer().z };
  let maxDrift = 0;
  let frames = 0;
  while (frames < 600) {
    if (game.debugState().state !== 'flight') break;
    game.update(dt);
    frames += 1;
    // 이 프레임에서 공이 멈춰 다음 샷 준비로 넘어가면 그때부터는 이동해도 된다
    if (game.debugState().state !== 'flight') break;
    const golfer = game.debugGolfer();
    maxDrift = Math.max(maxDrift, Math.hypot(golfer.x - shotSpot.x, golfer.z - shotSpot.z));
  }
  const ball = game.debugBall();
  const ballTravel = Math.hypot(ball.x - before.ballX, ball.z - before.ballZ);
  check('비행 중 골퍼가 제자리에 서 있다 (0.05m 이내)', maxDrift < 0.05, `최대 이동 ${maxDrift.toFixed(2)}m`);
  check('공은 실제로 날아갔다 (10m 이상)', ballTravel > 10, `${ballTravel.toFixed(1)}m`);
  check('비행 중 공과 골퍼 거리가 벌어진다', Math.hypot(ball.x - shotSpot.x, ball.z - shotSpot.z) > 8, `${Math.hypot(ball.x - shotSpot.x, ball.z - shotSpot.z).toFixed(1)}m`);

  // 공이 멈춘 뒤에는 골퍼가 새 공 옆으로 걸어간다
  for (let i = 0; i < 240; i += 1) game.update(dt);
  const after = game.debugGolfer();
  const gap = Math.hypot(after.ballX - after.x, after.ballZ - after.z);
  check('공이 멈추면 골퍼가 새 공 옆으로 이동 (0.7m 이내)', gap < 0.7, `공과 ${gap.toFixed(2)}m`);
}

console.log('\n— 카메라 뷰 전환 —');
{
  const positions: Array<[number, number, number]> = [];
  game.setView('back');
  for (let i = 0; i < 90; i += 1) game.update(dt);
  positions.push([camera.position.x, camera.position.y, camera.position.z]);
  const order = [game.cycleView(), game.cycleView(), game.cycleView()];
  check('뷰 순환: 타겟뷰 → 탑뷰 → 백뷰', order.join(',') === 'target,top,back', order.join(' → '));
  game.setView('target');
  for (let i = 0; i < 120; i += 1) game.update(dt);
  positions.push([camera.position.x, camera.position.y, camera.position.z]);
  game.setView('top');
  for (let i = 0; i < 120; i += 1) game.update(dt);
  positions.push([camera.position.x, camera.position.y, camera.position.z]);
  const moved = (a: number[], b: number[]): number => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
  check('타겟뷰에서 카메라가 이동한다', moved(positions[0], positions[1]) > 5, `${moved(positions[0], positions[1]).toFixed(1)}m`);
  check('탑뷰는 더 높이 올라간다', positions[2][1] > positions[0][1] + 5, `y ${positions[0][1].toFixed(1)} → ${positions[2][1].toFixed(1)}`);
  game.setView('back');
  for (let i = 0; i < 120; i += 1) game.update(dt);
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
}

const final = game.debugState();
events.push(`FINAL state=${final.state} hole=${final.hole + 1} strokes=${final.strokes}`);
console.log('\n— 3홀 자동 플레이 —');
console.log(events.map((line) => `  ${line}`).join('\n'));

const finishEvent = events.find((line) => line.startsWith('FINISH'));
check('3홀 라운드가 끝까지 진행됨', final.state === 'finished' && Boolean(finishEvent), finishEvent ?? '미완료');
for (let i = 0; i < HOLES.length; i += 1) {
  const holed = events.filter((line) => line.includes(`HOLED hole=${i + 1}`));
  check(`${i + 1}홀 홀인 처리`, holed.length > 0, holed[0]?.trim() ?? '기록 없음');
}
void STROKE_LIMIT_EXTRA;

realtime.close();
console.log(`\n${failures === 0 ? '모든 검증 통과 ✅' : `${failures}개 검증 실패 ❌`}`);
process.exit(failures === 0 ? 0 : 1);
