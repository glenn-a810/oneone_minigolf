/**
 * 대기실(로비) 검증 스크립트 (npm run verify:lobby)
 * - 두 개의 대기실 인스턴스를 같은 방에 붙여 위치/이모지/플레이룸 이동 동기화 확인
 * - 게이트까지 걸어가면 플레이룸 입장 이벤트가 발생하는지 확인
 * - 로비 게스트가 실제로 움직이는지 확인
 * 렌더러/DOM 없이 로직만 돌린다.
 */
import * as THREE from 'three';
import { Lobby } from '../src/lobby/lobby';
import { AudioEngine } from '../src/game/audio';
import { createRealtime } from '../src/net/realtime';

const ROOM = 'oneone-lobby-test';
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const toasts: Record<string, string[]> = { A: [], B: [] };
const counts: Record<string, string[]> = { A: [], B: [] };
const emotes: Record<string, string[]> = { A: [], B: [] };
let enteredFromA = 0;

function makeLobby(label: 'A' | 'B'): Lobby {
  return new Lobby({
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(),
    audio: new AudioEngine(),
    realtime: createRealtime(ROOM),
    events: {
      onEnterPlayroom: () => {
        if (label === 'A') enteredFromA += 1;
        toasts[label].push('→ 플레이룸 입장 트리거');
      },
      onPlayers: (lobbyPeers, playroomPeers) => {
        counts[label].push(`대기실 ${1 + lobbyPeers.length}명 · 플레이룸 ${playroomPeers.length}명`);
        lobbyPeers.forEach((peer) => emotes[label].push(peer.name));
      },
      onToast: (text) => toasts[label].push(text),
    },
  });
}

async function tick(lobbies: Lobby[], frames: number): Promise<void> {
  for (let i = 0; i < frames; i += 1) {
    lobbies.forEach((lobby) => lobby.update(1 / 60));
    await sleep(5);
  }
}

async function main(): Promise<void> {
  console.log('— 대기실 동기화 검증 —');
  const a = makeLobby('A');
  const b = makeLobby('B');

  a.enter({ id: 'lobby-a', name: '에이', color: '#ff7a59' });
  await sleep(60);
  b.enter({ id: 'lobby-b', name: '비', color: '#4cc9f0' });
  await tick([a, b], 20);

  console.log(`  A가 본 대기실 사람: ${a.getPeers().map((p) => p.name).join(', ') || '(없음)'}`);
  console.log(`  B가 본 대기실 사람: ${b.getPeers().map((p) => p.name).join(', ') || '(없음)'}`);
  console.log(`  로비 게스트 수: ${a.guestCount}명`);

  // A가 광장을 앞으로(-z) 걷는다
  const startZ = a.localPosition[2];
  const guestsBefore = a.debugGuests();
  a.debugInput(0, -1);
  await tick([a, b], 30);
  const walkedZ = a.localPosition[2];
  const guestsAfter = a.debugGuests();

  const peerA = b.getPeers().find((peer) => peer.id === 'lobby-a');
  console.log(`  A 이동: z ${startZ.toFixed(2)} → ${walkedZ.toFixed(2)} (${(startZ - walkedZ).toFixed(2)}m)`);
  console.log(`  B가 본 A 위치: ${peerA ? peerA.pos.map((v) => v.toFixed(2)).join(', ') : '(없음)'}`);

  // 이모지 브로드캐스트
  const before = b.getPeers().length;
  a.sendEmoji('🎉');
  await sleep(60);
  console.log(`  B가 받은 대기실 인원 갱신 횟수: ${counts.B.length} / 이모지 후 인원 ${before}`);

  // 게이트까지 계속 걸어가면 플레이룸 입장 이벤트
  for (let i = 0; i < 260 && enteredFromA === 0; i += 1) {
    a.update(1 / 60);
    b.update(1 / 60);
    await sleep(4);
  }
  a.debugInput(0, 0);
  console.log(`  게이트 도착 위치: ${a.localPosition.map((v) => v.toFixed(2)).join(', ')}`);
  console.log(`  플레이룸 입장 트리거: ${enteredFromA > 0 ? 'OK' : '발생하지 않음'}`);

  // A가 플레이룸으로 들어가면 B는 목록에서 A를 대기실에서 빼고 플레이룸으로 표시
  a.setMode('idle');
  await tick([a, b], 25);
  console.log(`  B가 본 마지막 인원: ${counts.B[counts.B.length - 1]}`);
  console.log(`  B 토스트: ${toasts.B.slice(-2).join(' / ')}`);

  // A가 대기실로 복귀
  a.returnFromPlayroom();
  await tick([a, b], 25);
  console.log(`  복귀 후 B가 본 인원: ${counts.B[counts.B.length - 1]}`);
  console.log(`  B가 본 A 위치: ${b.getPeers().find((p) => p.id === 'lobby-a')?.pos.join(', ') ?? '(없음)'}`);

  const moved = guestsAfter.filter((pos, index) => {
    const before = guestsBefore[index];
    return Math.hypot(pos[0] - before[0], pos[1] - before[1]) > 0.05;
  }).length;
  console.log(`  로비 게스트 ${a.guestCount}명 중 ${moved}명이 광장을 거닐었어요`);

  console.log('검증 완료');
  process.exit(0);
}

void main();
