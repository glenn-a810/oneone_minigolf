/**
 * Durable Object 중계 로직 검증 (npm run verify:relay)
 *
 * 실제 Cloudflare 전역(WebSocketPair, Response) 없이 GolfRoomHub 만 돌려서
 * - 발신자 제외 브로드캐스트
 * - 신규 입장자 스냅샷(ready.peers)
 * - 퇴장 알림(left)
 * - 접속자 수(presence)
 * - 잘못된 프레임 처리
 * 를 확인한다.
 */
import { GolfRoomHub, type LiveSocket, type SocketHost } from '../src/room';

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

class FakeSocket implements LiveSocket {
  attachment: unknown = null;
  closed = false;
  readonly outbox: string[] = [];

  send(data: string): void {
    this.outbox.push(data);
  }

  close(): void {
    this.closed = true;
  }

  serializeAttachment(value: unknown): void {
    this.attachment = value;
  }

  deserializeAttachment(): unknown {
    return this.attachment;
  }

  /** 마지막으로 받은 프레임을 JSON 으로 */
  frames(): Array<Record<string, unknown>> {
    return this.outbox.map((raw) => {
      try {
        return JSON.parse(raw) as Record<string, unknown>;
      } catch {
        return { raw };
      }
    });
  }

  clear(): void {
    this.outbox.length = 0;
  }
}

class FakeRoom implements SocketHost {
  readonly sockets: FakeSocket[] = [];
  readonly hub: GolfRoomHub;

  constructor(room = 'lobby') {
    this.hub = new GolfRoomHub(this, room);
  }

  getWebSockets(): FakeSocket[] {
    return this.sockets;
  }

  connect(): FakeSocket {
    const socket = new FakeSocket();
    this.sockets.push(socket);
    this.hub.onConnect(socket);
    return socket;
  }

  /** 클라이언트가 프레임을 보낸 것과 동일 (서버 소켓의 send 는 클라이언트로 내려가는 방향) */
  deliver(socket: FakeSocket, raw: string): void {
    this.hub.onMessage(socket, raw);
  }

  disconnect(socket: FakeSocket): void {
    this.hub.onClose(socket);
    const index = this.sockets.indexOf(socket);
    if (index >= 0) this.sockets.splice(index, 1);
  }
}

function hello(id: string, name: string): string {
  return JSON.stringify({
    t: 'msg',
    mid: `${id}-hello`,
    msg: {
      type: 'hello',
      player: { id, name, color: '#ff7a59', hole: 0, pos: [0, 0, 0], strokes: 0, total: 0, done: false, moving: false, ts: 1 },
    },
  });
}

function main(): void {
  console.log('— Durable Object 중계 검증 —');

  const room = new FakeRoom('lobby');
  const a = room.connect();
  const b = room.connect();

  // ready 프레임 구조
  const readyOfB = b.frames().find((frame) => frame.t === 'ready');
  check('신규 접속에 ready 응답', Boolean(readyOfB), readyOfB ? JSON.stringify(readyOfB.room) : '없음');
  check('ready.count 는 자신 포함 접속자 수', readyOfB?.count === 2, String(readyOfB?.count));

  a.clear();
  b.clear();

  // 발신자 제외 중계
  room.deliver(a, hello('player-a', '에이'));
  const relayed = b.frames().find((frame) => frame.t === 'msg');
  check('A 메시지가 B 에게 중계됨', Boolean(relayed), relayed ? String(relayed.mid) : '없음');
  check('발신자 A 에게는 되돌아오지 않음', a.frames().every((frame) => frame.t !== 'msg'));
  check('중계된 메시지 종류 보존', (relayed?.msg as { type?: string } | undefined)?.type === 'hello');

  // 신규 입장자 스냅샷
  const c = room.connect();
  const readyOfC = c.frames().find((frame) => frame.t === 'ready');
  const roster = (readyOfC?.peers as Array<{ msg: { type: string; player?: { id: string } } }> | undefined) ?? [];
  check('신규 입장자에게 기존 접속자 스냅샷', roster.length >= 1, `${roster.length}명`);
  check(
    '스냅샷에 A 의 hello 상태 포함',
    roster.some((entry) => entry.msg?.player?.id === 'player-a'),
  );

  // 접속자 수(presence)
  const presence = c.frames().filter((frame) => frame.t === 'presence').pop();
  check('presence 프레임 브로드캐스트', presence?.count === 3, String(presence?.count));

  // 퇴장 알림
  b.clear();
  const attachmentOfA = a.deserializeAttachment() as { id?: string } | null;
  room.disconnect(a);
  const left = b.frames().find((frame) => frame.t === 'left');
  check('퇴장 시 left 프레임', Boolean(left) && left?.id === attachmentOfA?.id, String(left?.id));

  // 잘못된 프레임
  b.clear();
  room.deliver(c, '이건 json 이 아님');
  const error = c.frames().find((frame) => frame.t === 'error');
  check('깨진 JSON → error 프레임', Boolean(error), String(error?.error));

  // ping → pong
  c.clear();
  room.deliver(c, 'ping');
  check('ping → pong', c.outbox.includes('pong'));
  c.clear();
  room.deliver(c, JSON.stringify({ t: 'ping', ts: 7 }));
  check('JSON ping → pong 프레임', c.frames().some((frame) => frame.t === 'pong' && frame.ts === 7));

  // 방 분리: 다른 방 허브는 이 방 소켓을 보지 못한다
  const other = new FakeRoom('play-1');
  const d = other.connect();
  d.clear();
  room.deliver(c, hello('player-c', '씨'));
  check('다른 방으로는 중계되지 않음', d.frames().every((frame) => frame.t !== 'msg'));

  console.log(failures === 0 ? '\n모든 검증 통과 ✅' : `\n${failures}건 실패 ❌`);
  process.exit(failures === 0 ? 0 : 1);
}

main();
