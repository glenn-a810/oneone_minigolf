/**
 * 프론트엔드 ↔ 워커 프로토콜 통합 검증 (npm run verify:net)
 *
 * 진짜 `createRealtime`(앱이 쓰는 그 코드)을 가짜 WebSocket 으로 GolfRoomHub 에 붙여서
 * "다른 기기 두 대" 상황을 만든다. BroadcastChannel 은 꺼 두어(각자 다른 PC 라고 가정)
 * 오직 서버 WebSocket 경로로만 동기화되는지 확인한다.
 *
 * - 플레이룸: 두 골퍼의 입장/샷/이모지/타수 동기화
 * - 대기실: 두 골퍼의 이동·이모지 동기화
 * - 같은 방 사람에게만 전달 (방 분리)
 * - BroadcastChannel + WebSocket 이중 경로에서 같은 메시지가 두 번 처리되지 않음 (중복 제거)
 * - 서버 연결이 끊기면 지수 백오프로 다시 붙는다
 */
import * as THREE from 'three';
import { GolfRoomHub, type LiveSocket, type SocketHost } from '../src/room';
import {
  createRealtime,
  LOBBY_ROOM,
  PLAY_ROOM,
  type NetMessage,
  type WebSocketFactory,
  type WebSocketLike,
} from '../../src/net/realtime';
import { Game } from '../../src/game/game';
import { Lobby } from '../../src/lobby/lobby';
import { AudioEngine } from '../../src/game/audio';

declare const process: { exit(code?: number): void };

let failures = 0;

function check(label: string, ok: boolean, detail = ''): void {
  if (ok) {
    console.log(`  [OK ] ${label}${detail ? ` — ${detail}` : ''}`);
  } else {
    failures += 1;
    console.log(`  [FAIL] ${label}${detail ? ` — ${detail}` : ''}`);
  }
}

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

// ---------------------------------------------------------------- 가짜 서버/소켓

class ServerSocket implements LiveSocket {
  attachment: unknown = null;
  client: ClientSocket;
  private open = true;

  constructor(client: ClientSocket) {
    this.client = client;
  }

  send(data: string): void {
    if (!this.open) return;
    this.client.deliver(data);
  }

  close(code?: number, reason?: string): void {
    this.open = false;
    this.client.closeFromServer(code, reason);
  }

  serializeAttachment(value: unknown): void {
    this.attachment = value;
  }

  deserializeAttachment(): unknown {
    return this.attachment;
  }

  kill(): void {
    this.open = false;
  }
}

class ClientSocket implements WebSocketLike {
  readyState = 0;
  onopen: ((event: unknown) => void) | null = null;
  onmessage: ((event: { data: unknown }) => void) | null = null;
  onclose: ((event: unknown) => void) | null = null;
  onerror: ((event: unknown) => void) | null = null;
  server: ServerSocket | null = null;

  send(data: string): void {
    if (this.readyState !== 1 || !this.server) return;
    roomOf(this.server).hub.onMessage(this.server, data);
  }

  close(): void {
    if (this.readyState === 3) return;
    this.readyState = 3;
    if (this.server) {
      const server = this.server;
      roomOf(server).disconnect(server);
      this.server = null;
    }
    this.onclose?.({ code: 1000 });
  }

  deliver(data: string): void {
    this.onmessage?.({ data });
  }

  closeFromServer(code = 1006, reason = ''): void {
    if (this.readyState === 3) return;
    this.readyState = 3;
    this.server = null;
    this.onclose?.({ code, reason });
  }
}

class FakeRoom implements SocketHost {
  readonly sockets: ServerSocket[] = [];
  readonly hub: GolfRoomHub;

  constructor(readonly name: string) {
    this.hub = new GolfRoomHub(this, name);
  }

  getWebSockets(): ServerSocket[] {
    return this.sockets;
  }

  disconnect(socket: ServerSocket): void {
    this.hub.onClose(socket);
    const index = this.sockets.indexOf(socket);
    if (index >= 0) this.sockets.splice(index, 1);
  }
}

const rooms = new Map<string, FakeRoom>();
const roomOwner = new WeakMap<ServerSocket, FakeRoom>();

function roomOf(socket: ServerSocket): FakeRoom {
  const room = roomOwner.get(socket);
  if (!room) throw new Error('socket 이 방에 연결되어 있지 않습니다');
  return room;
}

function room(name: string): FakeRoom {
  let found = rooms.get(name);
  if (!found) {
    found = new FakeRoom(name);
    rooms.set(name, found);
  }
  return found;
}

const opened: ClientSocket[] = [];
let connectionCount = 0;

/** ws://fake/ws?room=<room> 을 가짜 Durable Object 로 연결한다 */
const fakeNetwork: WebSocketFactory = (url: string) => {
  const parsed = new URL(url);
  const name = parsed.searchParams.get('room') ?? LOBBY_ROOM;
  const target = room(name);
  const client = new ClientSocket();
  const server = new ServerSocket(client);
  client.server = server;
  target.sockets.push(server);
  roomOwner.set(server, target);
  opened.push(client);
  connectionCount += 1;

  setTimeout(() => {
    if (client.readyState !== 0) return;
    client.readyState = 1;
    target.hub.onConnect(server);
    client.onopen?.({});
  }, 0);

  return client;
};

/** 서버가 소켓을 강제로 끊는다 (터널링/네트워크 끊김 흉내) */
function dropConnections(name: string): number {
  const target = room(name);
  const sockets = [...target.sockets];
  sockets.forEach((socket) => {
    roomOf(socket).disconnect(socket);
    socket.kill();
    socket.client.closeFromServer(1006, 'network lost');
  });
  return sockets.length;
}

function channel(roomName: string, local: boolean, backoffScale = 1) {
  return createRealtime(roomName, {
    url: 'ws://fake/ws',
    webSocket: fakeNetwork,
    local,
    backoffScale,
  });
}

// ---------------------------------------------------------------- 플레이룸

let remoteEmojis = 0;

async function playroomScenario(): Promise<void> {
  console.log('· 플레이룸 (다른 기기 두 대, 서버 경유)');
  const netA = channel(PLAY_ROOM, false);
  const netB = channel(PLAY_ROOM, false);

  const gameA = new Game({
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(),
    audio: new AudioEngine(),
    realtime: netA,
    events: {},
  });
  const gameB = new Game({
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(),
    audio: new AudioEngine(),
    realtime: netB,
    events: {
      onRemoteEmoji: () => {
        remoteEmojis += 1;
      },
    },
  });

  gameA.join({ id: 'player-a', name: '에이', color: '#ff7a59' });
  await sleep(120);
  gameB.join({ id: 'player-b', name: '비', color: '#4cc9f0' });
  await sleep(160);

  check('B 가 A 를 본다', gameB.getPeers().some((peer) => peer.id === 'player-a'));
  check('A 가 B 를 본다', gameA.getPeers().some((peer) => peer.id === 'player-b'));
  check('연결 상태 = websocket', netA.mode === 'websocket', netA.mode);
  check('서버가 알려준 접속자 수', netA.status.peers === 2, String(netA.status.peers));

  const start = gameA.debugState();
  gameA.debugAimAt(start.cup[0], start.cup[1]);
  gameA.debugFire(0.6, 0, '1W' as never);
  for (let i = 0; i < 30; i += 1) {
    gameA.update(1 / 60);
    gameB.update(1 / 60);
    await sleep(8);
  }

  const peerA = gameB.getPeers().find((peer) => peer.id === 'player-a');
  check('샷 이후 B 가 보는 A 위치가 갱신됨', Boolean(peerA) && peerA!.pos[2] > 1, peerA ? peerA.pos.map((v) => v.toFixed(2)).join(',') : '없음');

  gameA.sendEmoji('🔥');
  await sleep(120);
  check('이모지가 B 에 전달됨', remoteEmojis > 0, `${remoteEmojis}회`);

  for (let i = 0; i < 40; i += 1) {
    gameA.update(1 / 60);
    gameB.update(1 / 60);
    await sleep(5);
  }
  const peerStrokes = gameB.getPeers().find((peer) => peer.id === 'player-a')?.strokes;
  check('타수 동기화', peerStrokes === gameA.debugState().strokes, `${peerStrokes} / ${gameA.debugState().strokes}`);

  netA.close();
  netB.close();
  await sleep(80);
}

// ---------------------------------------------------------------- 대기실

async function lobbyScenario(): Promise<void> {
  console.log('· 대기실 (다른 기기 두 대, 서버 경유)');
  const netA = channel(LOBBY_ROOM, false);
  const netB = channel(LOBBY_ROOM, false);
  const playersSeen: string[][] = [];

  const lobbyA = new Lobby({
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(),
    audio: new AudioEngine(),
    realtime: netA,
    events: {},
  });
  const lobbyB = new Lobby({
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(),
    audio: new AudioEngine(),
    realtime: netB,
    events: {
      onPlayers: (lobbyPeers) => playersSeen.push(lobbyPeers.map((peer) => peer.name)),
    },
  });

  lobbyA.enter({ id: 'lobby-a', name: '에이', color: '#ff7a59' });
  await sleep(120);
  lobbyB.enter({ id: 'lobby-b', name: '비', color: '#4cc9f0' });
  await sleep(160);

  check('B 대기실에서 A 를 본다', lobbyB.getPeers().some((peer) => peer.name === '에이'));

  const startZ = lobbyA.localPosition[2];
  lobbyA.debugInput(0, -1);
  for (let i = 0; i < 30; i += 1) {
    lobbyA.update(1 / 60);
    lobbyB.update(1 / 60);
    await sleep(8);
  }
  lobbyA.debugInput(0, 0);

  const peerA = lobbyB.getPeers().find((peer) => peer.name === '에이');
  const moved = startZ - lobbyA.localPosition[2];
  check('A 이동이 서버를 거쳐 전달됨', moved > 0.1 && Boolean(peerA) && peerA!.pos[2] < startZ, `${moved.toFixed(2)}m`);

  netA.close();
  netB.close();
  await sleep(80);
}

// ---------------------------------------------------------------- 방 분리 / 중복 제거 / 재연결

async function isolationScenario(): Promise<void> {
  console.log('· 방 분리 (대기실 ↔ 플레이룸)');
  const lobbyNet = channel(LOBBY_ROOM, false);
  const playNet = channel(PLAY_ROOM, false);
  let lobbyReceived = 0;
  lobbyNet.onMessage((message: NetMessage) => {
    lobbyReceived += 1;
    void message;
  });

  await sleep(120);
  playNet.send({ type: 'emoji', id: 'x', emoji: '🔥' });
  await sleep(120);
  check('플레이룸 메시지가 대기실 방으로 새지 않음', lobbyReceived === 0, `${lobbyReceived}건`);

  lobbyNet.close();
  playNet.close();
  await sleep(80);
}

async function dedupeScenario(): Promise<void> {
  console.log('· 중복 제거 (같은 브라우저 탭 + 서버 경로 동시 사용)');
  const netA = channel('dedupe-check', true);
  const netB = channel('dedupe-check', true);
  const received: string[] = [];
  netB.onMessage((message) => received.push(message.type));

  await sleep(120);
  netA.send({ type: 'emoji', id: 'a', emoji: '👏' });
  await sleep(160);

  check('같은 메시지를 한 번만 처리', received.filter((type) => type === 'emoji').length === 1, `${received.join(',')}`);

  netA.close();
  netB.close();
  await sleep(80);
}

async function reconnectScenario(): Promise<void> {
  console.log('· 재연결 (서버 연결이 끊겼을 때)');
  const net = channel('reconnect-check', false, 0.05);
  const statuses: string[] = [];
  net.onStatus((status) => statuses.push(status.mode));

  await sleep(120);
  check('처음 연결됨', net.mode === 'websocket', net.mode);

  const before = connectionCount;
  dropConnections('reconnect-check');
  await sleep(500);

  check('끊긴 뒤 새 연결을 시도함', connectionCount > before, `${before} → ${connectionCount}`);
  check('재연결 후 websocket 상태', net.mode === 'websocket', net.mode);
  check('상태 이력에 connecting 포함', statuses.includes('connecting'), statuses.join(' → '));

  net.close();
  await sleep(80);
}

// ---------------------------------------------------------------- 실행

async function main(): Promise<void> {
  console.log('— 프론트엔드 ↔ 워커 실시간 동기화 검증 —');
  await playroomScenario();
  await lobbyScenario();
  await isolationScenario();
  await dedupeScenario();
  await reconnectScenario();

  opened.forEach((socket) => {
    if (socket.readyState !== 3) socket.close();
  });

  console.log(failures === 0 ? '\n모든 검증 통과 ✅' : `\n${failures}건 실패 ❌`);
  process.exit(failures === 0 ? 0 : 1);
}

void main();
