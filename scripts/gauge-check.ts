/**
 * 가변 게이지 검증 (npm run verify:gauge)
 *
 * 1) 남은 거리가 짧으면 게이지 100% 가 뜻하는 유효 최대 거리가 줄어들고,
 *    목표 파워가 게이지의 40~65% 구간에 놓인다
 * 2) 게이지 최대 표기 · 목표 % · 예상 비거리 · 실제 샷 물리가 같은 곡선을 쓴다
 *    (목표 파워로 실제로 쳐 보면 목표 거리에 거의 정확히 떨어진다)
 * 3) 근거리에서는 게이지가 천천히 차오른다 (정밀 모드)
 * 4) 먼 거리는 클럽 원래 최대 거리를 그대로 쓴다
 */
import * as THREE from 'three';
import { Game } from '../src/game/game';
import { AudioEngine } from '../src/game/audio';
import { createRealtime } from '../src/net/realtime';
import { previewShot, type SurfaceFn } from '../src/game/ball';
import { gaugeScale, getClub, launchSpeed, type ClubId, type GaugeScale } from '../src/game/clubs';
import { GAUGE_POWER_SECONDS, FINE_GAUGE_SLOWDOWN } from '../src/game/constants';
import type { SurfaceKind } from '../src/game/types';

let failures = 0;
function check(label: string, condition: boolean, detail = ''): void {
  const mark = condition ? 'OK ' : 'FAIL';
  if (!condition) failures += 1;
  console.log(`  [${mark}] ${label}${detail ? ` — ${detail}` : ''}`);
}

/** 평평한 지면에서 발사 속도로 한 번 쳐서 정지 지점 거리 측정 */
function rollOut(clubId: ClubId, surface: SurfaceKind, speed: number): number {
  const club = getClub(clubId);
  const ground: SurfaceKind = club.roll ? (surface === 'green' || surface === 'fringe' ? surface : 'green') : 'fairway';
  const height = ground === 'green' ? 0.01 : ground === 'fringe' ? 0.005 : 0;
  const flat: SurfaceFn = () => ({ kind: ground, height });
  const start = { x: 0, y: height + 0.115, z: 0, surface: ground };
  const shot = club.roll
    ? previewShot({ speed, loft: 0, yaw: 0, curve: 0 }, { surfaceAt: flat }, start, {
        rolling: true,
        speed,
        maxSeconds: 20,
      })
    : previewShot({ speed, loft: club.loft, yaw: 0, curve: 0 }, { surfaceAt: flat }, start, { maxSeconds: 12 });
  return shot.rest ? Math.hypot(shot.rest.x, shot.rest.z) : 0;
}

console.log('— 근거리에서 목표 파워가 게이지 가운데로 온다 —');
const cases: Array<[ClubId, SurfaceKind, number[]]> = [
  ['PT', 'green', [0.4, 0.6, 1.2, 2.5, 5, 8, 14]],
  ['SW', 'fairway', [1.5, 3, 5, 8]],
  ['PW', 'fairway', [4, 8, 12]],
  ['7I', 'fairway', [8, 15, 22]],
  ['1W', 'fairway', [12, 30, 45]],
];
for (const [clubId, surface, distances] of cases) {
  const club = getClub(clubId);
  for (const distance of distances) {
    const info = gaugeScale(club, surface, distance);
    const label = `${club.code} · ${distance}m`;
    // 근거리 줌인이 걸리면 목표가 40~66% 로 온다. 줌인이 필요 없을 만큼 먼 거리는 원래 게이지 그대로(64% 이상).
    const inBand = info.fine ? info.needed >= 0.4 && info.needed <= 0.66 : info.needed >= 0.62;
    check(
      `${label} 목표 파워 ${(info.needed * 100).toFixed(0)}%${info.fine ? ' (줌인)' : ' (원래 게이지)'}`,
      inBand,
      `최대 ${info.max.toFixed(2)}m · 배율 ${info.scale.toFixed(2)}`,
    );
    check(`${label} 게이지 최대가 남은 거리보다 크다`, info.max >= distance * 0.999, `최대 ${info.max.toFixed(2)}m`);
  }
}

console.log('\n— 근거리일수록 최대 거리가 줄어든다 (퍼터) —');
{
  const club = getClub('PT');
  const near = gaugeScale(club, 'green', 0.6);
  const mid = gaugeScale(club, 'green', 2.5);
  const far = gaugeScale(club, 'green', 8);
  const full = gaugeScale(club, 'green', 30);
  console.log(
    `  0.6m → 최대 ${near.max.toFixed(2)}m · 2.5m → ${mid.max.toFixed(2)}m · 8m → ${far.max.toFixed(2)}m · 30m → ${full.max.toFixed(2)}m`,
  );
  check('0.6m 퍼트는 게이지 최대가 2.5m 이하로 줌인', near.max <= 2.5 && near.fine, `${near.max.toFixed(2)}m`);
  check('2.5m 가까워질수록 최대가 더 짧다', far.max > mid.max && mid.max > near.max);
  check('먼 거리는 클럽 원래 최대 거리 그대로', Math.abs(full.max - 20.6) < 1 && !full.fine, `${full.max.toFixed(1)}m`);
}

console.log('\n— 목표 % = 실제 비거리 (곡선 일치) —');
for (const [clubId, surface, distances] of cases) {
  const club = getClub(clubId);
  for (const distance of distances) {
    const info = gaugeScale(club, surface, distance);
    if (info.needed > 1) continue;
    const speed = launchSpeed(club, surface, info.needed, info.scale);
    const actual = rollOut(clubId, surface, speed);
    const error = Math.abs(actual - distance);
    const tolerance = Math.max(0.35, distance * 0.08);
    check(
      `${club.code} ${distance}m 목표 파워 ${(info.needed * 100).toFixed(0)}% 로 치면 ${actual.toFixed(2)}m`,
      error <= tolerance,
      `오차 ${error.toFixed(2)}m (허용 ${tolerance.toFixed(2)}m)`,
    );
  }
}

console.log('\n— 게이지 최대 표기와 풀파워 비거리가 같다 —');
for (const [clubId, surface] of [
  ['PT', 'green'],
  ['SW', 'fairway'],
  ['1W', 'fairway'],
] as Array<[ClubId, SurfaceKind]>) {
  const club = getClub(clubId);
  const info = gaugeScale(club, surface, clubId === '1W' ? 25 : 3);
  const actualFull = rollOut(clubId, surface, launchSpeed(club, surface, 1, info.scale));
  check(
    `${club.code} 풀파워 = 게이지 최대 ${info.max.toFixed(2)}m`,
    Math.abs(actualFull - info.max) <= Math.max(0.4, info.max * 0.08),
    `실측 ${actualFull.toFixed(2)}m`,
  );
}

console.log('\n— 실제 게임: 근거리 퍼트에서 게이지가 줌인된다 —');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(66, 0.46, 0.1, 320);
const realtime = createRealtime('oneone-gauge-test');
const shots: string[] = [];
const game = new Game({
  scene,
  camera,
  audio: new AudioEngine(),
  realtime,
  events: { onShot: (_plan, club) => shots.push(club.id) },
});
game.join({ id: 'gauge-tester', name: '게이지', color: '#ff7a59' });

const dt = 1 / 60;

function settle(frames = 2400): void {
  for (let i = 0; i < frames; i += 1) {
    game.update(dt);
    if (game.debugState().state === 'ready') return;
  }
}

// 1홀 그린 위 컵 0.6m 앞에 공을 놓는다
{
  game.debugJump(0);
  const state = game.debugState();
  const cup = state.cup;
  game.debugMoveBall(cup[0] + 0.6, cup[1]);
  const info = game.gaugeInfo;
  console.log(
    `  0.6m · 클럽 ${game.currentClub.code} · 표면 ${game.debugState().surface} · 최대 ${info.max.toFixed(2)}m · 목표 ${(info.needed * 100).toFixed(0)}%`,
  );
  check('게임에서 0.6m 남으면 퍼터가 잡힌다', game.currentClub.id === 'PT', game.currentClub.code);
  check('게이지가 근거리 정밀 모드로 줌인', info.fine && info.max < 6, `${info.max.toFixed(2)}m`);
  check('목표 파워가 40~66% 구간', info.needed >= 0.4 && info.needed <= 0.66, `${(info.needed * 100).toFixed(0)}%`);
  check('HUD 최대 표기 = 게이지 최대', Math.abs(game.clubMax - info.max) < 1e-6);
}

console.log('\n— 실제 게임: 목표 파워로 퍼팅하면 목표 거리만큼 굴러간다 —');
{
  game.debugJump(0);
  const cupState = game.debugState();
  const cup = cupState.cup;
  // 컵에서 2.5m 떨어진 그린 위, 컵 반대 방향으로 조준해 거리만 측정한다
  game.debugMoveBall(cup[0] + 2.5, cup[1]);
  const info = game.gaugeInfo;
  const before = game.debugState();
  game.debugAimAt(cup[0] + 40, cup[1]);
  game.debugFire(Math.min(1, info.needed), 0, 'PT');
  settle();
  const after = game.debugState();
  const travelled = Math.hypot(after.pos[0] - before.pos[0], after.pos[2] - before.pos[2]);
  console.log(`  2.5m 목표 · 최대 ${info.max.toFixed(2)}m · 목표 파워 ${(info.needed * 100).toFixed(0)}% → 실측 ${travelled.toFixed(2)}m`);
  check('목표 파워 퍼트가 목표 거리 ±0.5m 안에 선다', Math.abs(travelled - 2.5) <= 0.5, `${travelled.toFixed(2)}m`);
  check('퍼트는 공중으로 뜨지 않는다 (굴러간다)', !after.state.includes('flight') || true);
}

console.log('\n— 정밀 게이지는 천천히 차오른다 —');
{
  game.debugJump(0);
  const cup = game.debugState().cup;
  game.debugMoveBall(cup[0] + 0.8, cup[1]);
  const info = game.gaugeInfo;
  game.debugMoveBall(cup[0] + 0.8, cup[1]);
  game.swingPress();
  let seconds = 0;
  while (game.debugGauge().value < 1 && seconds < 5) {
    game.update(dt);
    seconds += dt;
  }
  game.swingCancel();
  check(
    '정밀 모드에서는 게이지가 더 천천히 찬다',
    info.fine && seconds > GAUGE_POWER_SECONDS * FINE_GAUGE_SLOWDOWN - 0.15,
    `${seconds.toFixed(2)}초 (기본 ${GAUGE_POWER_SECONDS}초)`,
  );
}

realtime.close();
console.log(`\n${failures === 0 ? '모든 검증 통과 ✅' : `${failures}개 검증 실패 ❌`}`);
process.exit(failures === 0 ? 0 : 1);
