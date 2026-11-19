/**
 * 홀드 & 릴리즈 스윙 게이지 + 샷 보정 검증 (npm run verify:swing)
 *
 * 1) 누르고 있는 동안 파워가 차오르고, 100%에서 왕복하며, 떼는 순간 그 지점의 파워가 확정된다
 * 2) 너무 짧게 눌렀다 뗀 실수 탭은 스윙을 취소한다
 * 3) Perfect / Good / Miss 판정과 훅·슬라이스 방향, 파워 보정
 * 4) 임팩트 타이밍을 놓치면 스윙 취소
 * 5) 실제 게임에서 홀드 → 릴리즈 → 임팩트 탭 순서로 샷이 나가고, 같은 파워에서 타이밍만 다르면 좌우로 갈라지는지
 */
import * as THREE from 'three';
import { Game } from '../src/game/game';
import { AudioEngine } from '../src/game/audio';
import { createRealtime } from '../src/net/realtime';
import {
  SwingMeter,
  planShot,
  PERFECT_WINDOW,
  GOOD_WINDOW,
  MIN_HOLD_SECONDS,
  MIN_POWER,
  type ShotPlan,
} from '../src/game/swing';
import { GAUGE_POWER_SECONDS } from '../src/game/constants';

let failures = 0;
function check(label: string, condition: boolean, detail = ''): void {
  const mark = condition ? 'OK ' : 'FAIL';
  if (!condition) failures += 1;
  console.log(`  [${mark}] ${label}${detail ? ` — ${detail}` : ''}`);
}

const DT = 1 / 60;

console.log('— 홀드: 누르고 있는 동안 파워가 찬다 —');
{
  const meter = new SwingMeter();
  check('시작 전 idle', meter.phase === 'idle');

  meter.beginHold();
  check('누르면 power 단계', meter.phase === 'power');
  check('게이지는 0%에서 시작', meter.value === 0 && meter.direction === 1);

  let seconds = 0;
  while (meter.value < 1 && seconds < 5) {
    meter.update(DT);
    seconds += DT;
  }
  check(
    `${GAUGE_POWER_SECONDS}초 안팎으로 100%까지 찬다`,
    seconds > GAUGE_POWER_SECONDS - 0.1 && seconds < GAUGE_POWER_SECONDS + 0.1,
    `${seconds.toFixed(2)}s`,
  );
  check('100%에서도 손을 떼기 전까지 power 단계 유지', meter.phase === 'power' && meter.value === 1);
  check('100%에 닿으면 방향이 내려가기로 바뀐다', meter.direction === -1);
}

console.log('\n— 100% 이후는 왕복한다 —');
{
  const meter = new SwingMeter();
  meter.beginHold();
  let guard = 0;
  while (meter.value < 1 && guard < 2000) {
    meter.update(DT);
    guard += 1;
  }
  for (let i = 0; i < 20; i += 1) meter.update(DT);
  check('100%를 지나면 게이지가 다시 내려온다', meter.value < 0.9, `${meter.value.toFixed(2)}`);

  while (meter.value > 0 && guard < 6000) {
    meter.update(DT);
    guard += 1;
  }
  check('0% 아래로는 내려가지 않는다', meter.value === 0 && meter.direction === 1);
  for (let i = 0; i < 30; i += 1) meter.update(DT);
  check('0%에서 다시 차오른다', meter.value > 0.2 && meter.direction === 1, `${meter.value.toFixed(2)}`);
  check('왕복 중에도 좌표 범위를 벗어나지 않는다', meter.value >= 0 && meter.value <= 1);
}

console.log('\n— 떼는 순간 파워 확정 —');
{
  const meter = new SwingMeter();
  meter.beginHold();
  let guard = 0;
  while (meter.value < 0.4 && guard < 2000) {
    meter.update(DT);
    guard += 1;
  }
  const held = meter.value;
  const result = meter.release();
  check('떼면 파워 확정 후 impact 단계', result === 'power' && meter.phase === 'impact');
  check(
    '확정 파워 = 뗀 지점의 게이지',
    Math.abs(meter.power - held) < 0.03,
    `${meter.power.toFixed(3)} / ${held.toFixed(3)}`,
  );
  check('파워 확정 시 게이지는 확정 지점에서 시작', Math.abs(meter.value - meter.power) < 1e-6);

  const before = meter.power;
  for (let i = 0; i < 10; i += 1) meter.update(DT);
  check(
    '확정 후 파워는 그대로, 게이지만 임팩트 존으로 내려온다',
    meter.power === before && meter.value < before,
  );
}

console.log('\n— 내려오는 중에 떼면 그만큼 낮은 파워 —');
{
  const meter = new SwingMeter();
  meter.beginHold();
  let guard = 0;
  while (meter.value < 1 && guard < 2000) {
    meter.update(DT);
    guard += 1;
  }
  for (let i = 0; i < 18; i += 1) meter.update(DT); // 100% → 아래로 내려오는 중
  const value = meter.value;
  meter.release();
  check(
    '하강 중 릴리즈는 그 지점의 파워로 확정',
    Math.abs(meter.power - Math.max(MIN_POWER, value)) < 0.03 && meter.power < 0.95,
    `${meter.power.toFixed(2)}`,
  );
}

console.log('\n— 너무 짧은 탭은 취소 —');
{
  const meter = new SwingMeter();
  meter.beginHold();
  meter.update(DT); // 1프레임(약 0.017초)만 누르고 뗌
  const result = meter.release();
  check(`홀드가 ${MIN_HOLD_SECONDS}초 미만이면 tooShort`, result === 'tooShort');
  check('게이지는 idle로 돌아가고 파워도 0', meter.phase === 'idle' && meter.power === 0 && meter.value === 0);
  check('취소 뒤에는 샷이 나가지 않는다', meter.tap() === null);

  meter.beginHold();
  for (let i = 0; i < 30; i += 1) meter.update(DT);
  check('cancelHold 는 홀드 중이면 되돌린다', meter.cancelHold() && meter.phase === 'idle' && meter.power === 0);
  check('취소 뒤 취소는 무시', meter.cancelHold() === false);
}

console.log('\n— 정확도 판정 —');
{
  const meter = new SwingMeter();
  meter.beginHold();
  let guard = 0;
  while (meter.value < 0.4 && guard < 2000) {
    meter.update(DT);
    guard += 1;
  }
  meter.release();

  while (meter.value > 0) meter.update(1 / 180);
  const perfect = meter.tap();
  check('존 중앙 탭 → perfect', perfect?.grade === 'perfect', perfect?.grade ?? 'none');
  check('perfect 는 방향·곡률 편차 0', perfect?.yawOffset === 0 && perfect?.curve === 0);
  check('perfect 는 파워 보정 없음', perfect?.power === perfect?.rawPower);
}

console.log('\n— 훅 / 슬라이스 방향 —');
{
  const early = planShot(0.7, GOOD_WINDOW * 0.7);
  const late = planShot(0.7, -GOOD_WINDOW * 0.7);
  check(
    '빠른 탭(양수 오차) = 훅(왼쪽)',
    early.yawOffset < 0 && early.curve < 0,
    `${early.yawOffset.toFixed(3)}, ${early.curve.toFixed(2)}`,
  );
  check(
    '늦은 탭(음수 오차) = 슬라이스(오른쪽)',
    late.yawOffset > 0 && late.curve > 0,
    `${late.yawOffset.toFixed(3)}, ${late.curve.toFixed(2)}`,
  );
  check('Good 판정 구간', early.grade === 'good' && late.grade === 'good', `${early.grade}/${late.grade}`);
  check('Good 은 파워가 살짝 깎인다', early.power < early.rawPower && early.power > early.rawPower * 0.9);

  const miss = planShot(0.7, GOOD_WINDOW + 0.01);
  check('큰 오차 = miss', miss.grade === 'miss', `${miss.grade}`);
  check('Miss 는 파워가 더 깎인다', miss.power < early.power, `${miss.power.toFixed(2)} < ${early.power.toFixed(2)}`);
  check('Perfect 존은 Good 보다 좁다', PERFECT_WINDOW < GOOD_WINDOW);
}

console.log('\n— 임팩트를 놓치면 취소 —');
{
  const meter = new SwingMeter();
  meter.beginHold();
  while (meter.value < 0.5) meter.update(DT);
  meter.release();
  let timedOut = false;
  let guard = 0;
  while (!timedOut && guard < 2000) {
    const result = meter.update(DT);
    timedOut = result.timedOut;
    guard += 1;
  }
  check('임팩트 존을 지나면 스윙 취소', timedOut && meter.phase === 'idle');
}

// ---------------------------------------------------------------- 실제 게임 (홀드 → 릴리즈 → 탭)

console.log('\n— 실제 게임: 버튼 홀드 → 릴리즈 → 임팩트 탭 —');

let lastPlan: ShotPlan | null = null;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();
const realtime = createRealtime('oneone-swing-test');

const game = new Game({
  scene,
  camera,
  audio: new AudioEngine(),
  realtime,
  events: { onShot: (plan) => (lastPlan = plan) },
});
game.join({ id: 'swing-tester', name: '스윙', color: '#ff7a59' });

/** 게이지가 target 파워에 닿을 때까지 프레임을 돌린다 (update 가 게이지를 움직인다) */
function holdUntil(target: number): void {
  let guard = 0;
  while (game.debugGauge().value < target && guard < 2000) {
    game.update(DT);
    guard += 1;
  }
}

/** 확정 파워에서 임팩트 존(0)까지 게이지가 돌아오기를 기다린다 */
function waitImpactZone(): void {
  let guard = 0;
  while (game.debugGauge().value > 0 && guard < 2000) {
    game.update(DT);
    guard += 1;
  }
}

/** 실제 입력 순서 그대로: 누르고 있기 → 떼기 → 타이밍 탭 */
function swingByInput(power: number): {
  power: number;
  grade?: string;
  fired: boolean;
  impactSeconds: number;
  swung: boolean;
} {
  game.restart();
  game.setClub('1W');
  const start = game.debugState();
  game.debugAimAt(start.pos[0], start.pos[2] - 100); // 정면(-z) 조준
  lastPlan = null;

  game.swingPress();
  const started = game.debugState().state === 'gauge';
  holdUntil(power);
  game.swingRelease();
  const confirmed = game.debugGauge().power;
  waitImpactZone();
  game.swingTap(); // 정확도 타이밍 탭
  const motion = game.debugState().state;

  // 탭하면 골퍼 스윙 모션이 먼저 시작되고, 임팩트 프레임(약 0.15초)에 공이 출발한다
  let frames = 0;
  while (game.debugState().state === 'swing' && frames < 120) {
    game.update(DT);
    frames += 1;
  }

  return {
    power: confirmed,
    grade: lastPlan?.grade,
    fired: started && motion === 'swing' && game.debugState().state === 'flight',
    impactSeconds: frames / 60,
    swung: game.debugClubSwing(),
  };
}

console.log('\n— 실제 게임: 입력 순서·엣지케이스 —');
{
  game.restart();
  game.swingPress();
  const afterPress = game.debugState().state;
  holdUntil(0.3);
  const whileHolding = game.debugGauge().value;
  game.swingRelease();
  const afterRelease = game.debugState().state;
  const meterPhase = game.debugGauge().phase;
  game.swingCancel(); // 임팩트 단계에서는 취소되지 않는다

  check('샷 준비(ready)에서 누르면 게이지 시작', afterPress === 'gauge');
  check('누르고 있는 동안 게이지가 차오른다', whileHolding > 0.25, `${whileHolding.toFixed(2)}`);
  check('떼면 샷 전에 임팩트(정확도) 단계로', afterRelease === 'gauge' && meterPhase === 'impact');
  check('임팩트 단계에서는 cancelHold 가 취소하지 않는다', game.debugGauge().phase === 'impact');

  // 실수 탭(빠르게 눌렀다 뗌)
  game.restart();
  game.swingPress();
  game.update(DT);
  game.swingRelease();
  check(
    '너무 짧은 탭은 스윙을 취소하고 준비 상태로',
    game.debugState().state === 'ready' && game.debugGauge().phase === 'idle',
  );

  // 드래그 취소(pointercancel)
  game.swingPress();
  game.update(DT);
  game.update(DT);
  game.swingCancel();
  check('드래그 취소도 준비 상태로 되돌린다', game.debugState().state === 'ready' && game.debugGauge().power === 0);

  // pointerup 을 놓친 뒤 새로 누르면 게이지가 멈추지 않고 다시 시작한다
  game.swingPress();
  holdUntil(0.5);
  game.swingPress();
  check(
    '홀드 중 다시 누르면 게이지를 처음부터 다시 시작',
    game.debugState().state === 'gauge' && game.debugGauge().phase === 'power' && game.debugGauge().value < 0.15,
    `${game.debugGauge().value.toFixed(2)}`,
  );
  game.swingCancel();
  check('다시 시작한 홀드도 취소 가능', game.debugState().state === 'ready');
}

{
  const run = swingByInput(0.6);
  const state = game.debugState();
  check('홀드 & 릴리즈 & 탭으로 실제 샷이 나간다 (+1타)', run.fired && state.strokes === 1, `${state.state} / ${state.strokes}타`);
  check('뗀 지점의 파워가 그대로 확정된다', Math.abs(run.power - 0.6) < 0.06, `${run.power.toFixed(2)}`);
  check('임팩트 존 탭은 perfect 로 판정', run.grade === 'perfect', run.grade ?? 'none');
  check(
    '탭 → 스윙 모션 → 임팩트(0.12~0.18초)에 공이 출발한다',
    run.impactSeconds >= 0.11 && run.impactSeconds <= 0.2,
    `${run.impactSeconds.toFixed(2)}초`,
  );
  check('탭한 순간 골퍼가 스윙 모션을 시작한다', run.swung, run.swung ? '스윙 중' : '모션 없음');
}

// ---------------------------------------------------------------- 궤적 비교

function shoot(power: number, error: number): { x: number; z: number; strokes: number } {
  game.restart();
  game.setClub('1W');
  const start = game.debugState();
  game.debugAimAt(start.pos[0], start.pos[2] - 100); // 정면(-z) 조준
  game.debugFire(power, error, '1W');
  for (let i = 0; i < 3000; i += 1) {
    game.update(DT);
    if (game.debugState().state === 'ready') break;
  }
  const ball = game.debugBall();
  return { x: ball.x, z: ball.z, strokes: game.debugState().strokes };
}

const straight = shoot(0.6, 0);
const hook = shoot(0.6, 0.09);
const slice = shoot(0.6, -0.09);

console.log(`  perfect: x=${straight.x.toFixed(2)}m z=${straight.z.toFixed(2)}m`);
console.log(`  훅(빠른 탭): x=${hook.x.toFixed(2)}m z=${hook.z.toFixed(2)}m`);
console.log(`  슬라이스(늦은 탭): x=${slice.x.toFixed(2)}m z=${slice.z.toFixed(2)}m`);

check('퍼펙트 샷은 조준선 가까이 (|x| < 2m)', Math.abs(straight.x) < 2, `${straight.x.toFixed(2)}m`);
check('훅 샷은 왼쪽으로 벗어난다', hook.x < straight.x - 1.5, `${hook.x.toFixed(2)} < ${straight.x.toFixed(2)} - 1.5`);
check('슬라이스 샷은 오른쪽으로 벗어난다', slice.x > straight.x + 1.5, `${slice.x.toFixed(2)} > ${straight.x.toFixed(2)} + 1.5`);

// 홀드 길이 = 파워 → 비거리
function flightDistance(): number {
  const tee = game.hole.tee;
  for (let i = 0; i < 3000; i += 1) {
    game.update(DT);
    if (game.debugState().state === 'ready') break;
  }
  const ball = game.debugBall();
  return Math.hypot(ball.x - tee[0], ball.z - tee[1]);
}

{
  swingByInput(0.35);
  const short = flightDistance();
  swingByInput(0.95);
  const long = flightDistance();
  console.log(`  35% 홀드 샷: ${short.toFixed(1)}m / 95% 홀드 샷: ${long.toFixed(1)}m`);
  check('파워가 크면 더 멀리 간다', long > short + 5, `${long.toFixed(1)}m > ${short.toFixed(1)}m`);
  check('살짝만 눌렀다 떼면 짧게 간다', short < 30, `${short.toFixed(1)}m`);
}

realtime.close();
console.log(`\n${failures === 0 ? '모든 검증 통과 ✅' : `${failures}개 검증 실패 ❌`}`);
process.exit(failures === 0 ? 0 : 1);
