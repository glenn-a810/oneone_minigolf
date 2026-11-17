/**
 * 두 개의 게임 인스턴스를 같은 방에 붙여 탭 2개 시나리오를 검증한다.
 * (BroadcastChannel 은 같은 프로세스의 다른 채널 객체끼리도 메시지를 전달한다)
 */
import * as THREE from 'three';
import { Game } from '../src/game/game';
import { AudioEngine } from '../src/game/audio';
import { createRealtime } from '../src/net/realtime';

const ROOM = 'oneone-minigolf-sync-test';

function makeGame(name: string): Game {
  return new Game({
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(),
    audio: new AudioEngine(),
    realtime: createRealtime(ROOM),
    events: {
      onRemoteEmoji: (who, emoji) => console.log(`  ${name} ← ${who}님의 ${emoji}`),
      onRemoteHoled: (who, hole, strokes) => console.log(`  ${name} ← ${who}님 ${hole + 1}홀 ${strokes}타`),
      onToast: (text) => console.log(`  ${name} toast: ${text}`),
    },
  });
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function main(): Promise<void> {
  console.log('— 탭 2개 동기화 검증 —');
  const gameA = makeGame('에이');
  const gameB = makeGame('비');

  gameA.join({ id: 'player-a', name: '에이', color: '#ff7a59' });
  await sleep(80);
  gameB.join({ id: 'player-b', name: '비', color: '#4cc9f0' });
  await sleep(120);

  console.log(`  A가 본 참가자: ${gameA.getPeers().map((p) => p.name).join(', ') || '(없음)'}`);
  console.log(`  B가 본 참가자: ${gameB.getPeers().map((p) => p.name).join(', ') || '(없음)'}`);

  // A가 퍼팅 → B가 A의 위치 변화를 받아야 한다
  gameA.puttRaw(0, -1, 0.6);
  for (let i = 0; i < 30; i += 1) {
    gameA.update(1 / 60);
    gameB.update(1 / 60);
    await sleep(8);
  }

  const peerAInB = gameB.getPeers().find((p) => p.id === 'player-a');
  console.log(`  B가 본 A 위치: ${peerAInB ? peerAInB.pos.map((v) => v.toFixed(2)).join(', ') : '(없음)'} / A 실제 z=${gameA.debugState().pos[2].toFixed(2)}`);

  gameA.sendEmoji('🔥');
  await sleep(80);

  // A가 홀인하면 B에 알림
  for (let i = 0; i < 120; i += 1) {
    gameA.update(1 / 60);
    gameB.update(1 / 60);
    await sleep(8);
    if (gameB.getPeers().find((p) => p.id === 'player-a')?.strokes !== undefined) break;
  }
  console.log(`  A 현재 상태: ${JSON.stringify(gameA.debugState().state)}`);
  await sleep(200);
  console.log('검증 완료');
  process.exit(0);
}

void main();
