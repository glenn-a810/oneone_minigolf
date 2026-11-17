/**
 * 타이밍 스윙 게이지 + 샷 보정 검증 (npm run verify:swing)
 *
 * 1) 3-탭 게이지 상태 흐름 (시작 → 파워 확정 → 임팩트)
 * 2) Perfect / Good / Miss 판정과 훅·슬라이스 방향, 파워 보정
 * 3) 탭 없이 지나가면 스윙 취소
 * 4) 실제 게임에서 같은 파워·다른 타이밍의 샷이 좌우로 갈라지는지
 */
import * as THREE from 'three';
import { Game } from '../src/game/game';
import { AudioEngine } from '../src/game/audio';
import { createRealtime } from '../src/net/realtime';
import { SwingMeter, planShot, PERFECT_WINDOW, GOOD_WINDOW } from '../src/game/swing';

let failures = 0;
function check(label: string, condition: boolean, detail = ''): void {
  const mark = condition ? 'OK ' : 'FAIL';
  if (!condition) failures += 1;
  console.log(`  [${mark}] ${label}${detail ? ` — ${detail}` : ''}`);
}

console.log('— 게이지 상태 흐름 —');
{
  const meter = new SwingMeter();
  check('시작 전 idle', meter.phase === 'idle');

  meter.start();
  check('1탭 → power 단계', meter.phase === 'power');

  let seconds = 0;
  const dt = 1 / 60;
  while (meter.phase === 'power' && seconds < 5) {
    meter.update(dt);
    seconds += dt;
  }
  check('파워 게이지가 1.25초 안팎으로 100%까지 찬다', seconds > 1.0 && seconds < 1.5, `${seconds.toFixed(2)}s`);
  check('100%에서 자동으로 impact 단계', meter.phase === 'impact' && meter.power === 1);

  let back = 0;
  while (meter.value > 0 && back < 5) {
    meter.update(dt);
    back += dt;
  }
  check('임팩트 존까지 약 1초', back > 0.8 && back < 1.2, `${back.toFixed(2)}s`);
}

console.log('\n— 파워 확정과 판정 —');
{
  const meter = new SwingMeter();
  meter.start();
  // 40% 지점까지 진행 후 탭 → 파워 확정
  while (meter.value < 0.4) meter.update(1 / 60);
  const plan = meter.tap();
  check('2탭은 샷을 내지 않고 파워만 확정', plan === null && meter.phase === 'impact');
  check('확정 파워 저장', Math.abs(meter.power - 0.4) < 0.05, `${meter.power.toFixed(2)}`);

  // 임팩트 존(0)에 정확히 도달했을 때 탭
  while (meter.value > 0) meter.update(1 / 120);
  const perfect = meter.tap();
  check('존 중앙 탭 → perfect', perfect?.grade === 'perfect', perfect?.grade ?? 'none');
  check('perfect 는 방향·곡률 편차 0', perfect?.yawOffset === 0 && perfect?.curve === 0);
  check('perfect 는 파워 보정 없음', perfect?.power === perfect?.rawPower);
}

console.log('\n— 훅 / 슬라이스 방향 —');
{
  const early = planShot(0.7, GOOD_WINDOW * 0.7);
  const late = planShot(0.7, -GOOD_WINDOW * 0.7);
  check('빠른 탭(양수 오차) = 훅(왼쪽)', early.yawOffset < 0 && early.curve < 0, `${early.yawOffset.toFixed(3)}, ${early.curve.toFixed(2)}`);
  check('늦은 탭(음수 오차) = 슬라이스(오른쪽)', late.yawOffset > 0 && late.curve > 0, `${late.yawOffset.toFixed(3)}, ${late.curve.toFixed(2)}`);
  check('Good 판정 구간', early.grade === 'good' && late.grade === 'good', `${early.grade}/${late.grade}`);
  check('Good 은 파워가 살짝 깎인다', early.power < early.rawPower && early.power > early.rawPower * 0.9);

  const miss = planShot(0.7, MISS_EDGE());
  check('큰 오차 = miss', miss.grade === 'miss', `${miss.grade} (오차 ${miss.error.toFixed(2)})`);
  check('Miss 는 파워가 더 깎인다', miss.power < early.power, `${miss.power.toFixed(2)} < ${early.power.toFixed(2)}`);
  check('Perfect 존은 Good 보다 좁다', PERFECT_WINDOW < GOOD_WINDOW);
}

function MISS_EDGE(): number {
  return GOOD_WINDOW + 0.01;
}

console.log('\n— 탭을 놓치면 취소 —');
{
  const meter = new SwingMeter();
  meter.start();
  while (meter.value < 0.5) meter.update(1 / 60);
  meter.tap();
  let timedOut = false;
  let guard = 0;
  while (!timedOut && guard < 1000) {
    const result = meter.update(1 / 60);
    timedOut = result.timedOut;
    guard += 1;
  }
  check('임팩트 존을 지나면 스윙 취소', timedOut && meter.phase === 'idle');
}

// ---------------------------------------------------------------- 실제 샷 비교

console.log('\n— 실제 샷: 같은 파워, 다른 타이밍 —');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();
const realtime = createRealtime('oneone-swing-test');

const game = new Game({
  scene,
  camera,
  audio: new AudioEngine(),
  realtime,
  events: {},
});
game.join({ id: 'swing-tester', name: '스윙', color: '#ff7a59' });

function shoot(power: number, error: number): { x: number; z: number; strokes: number } {
  game.restart();
  game.setClub('1W');
  const start = game.debugState();
  game.debugAimAt(start.pos[0], start.pos[2] - 100); // 정면(-z) 조준
  game.debugFire(power, error, '1W');
  for (let i = 0; i < 3000; i += 1) {
    game.update(1 / 60);
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
check('어긋난 샷은 조준선에서 크게 벗어난다', Math.hypot(hook.x, hook.z - straight.z) > 1.5);

realtime.close();
console.log(`\n${failures === 0 ? '모든 검증 통과 ✅' : `${failures}개 검증 실패 ❌`}`);
process.exit(failures === 0 ? 0 : 1);
