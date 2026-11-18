import type { Attachment, ClientFrame, Envelope, ServerFrame } from './protocol';

/**
 * 방 하나(lobby, play-1 …)를 담당하는 중계 로직.
 *
 * - 연결된 소켓에만 의존하고 상태를 인스턴스에 쌓지 않는다 → Hibernation 으로 DO 가 잠들었다
 *   깨어나도 그대로 동작한다. 필요한 정보는 모두 WebSocket attachment 에 들어 있다.
 * - 게임 메시지는 해석하지 않고 그대로 중계한다 (발신자 제외, 같은 방 전원).
 * - 신규 입장자에게는 기존 소켓들의 마지막 상태 메시지를 모아 스냅샷으로 보내 준다.
 *
 * Cloudflare 전역(WebSocketPair, Response 등)을 쓰지 않아 Node 테스트에서 그대로 돌릴 수 있다.
 */

/** Hibernation API 소켓이 제공하는 최소 기능 (workers-types 의 WebSocket 과 구조적으로 호환) */
export interface LiveSocket {
  send(data: string): void;
  close(code?: number, reason?: string): void;
  serializeAttachment(value: unknown): void;
  deserializeAttachment(): unknown;
}

export interface SocketHost {
  getWebSockets(): LiveSocket[];
}

/** 한 방에 동시에 붙을 수 있는 소켓 수 상한 */
export const MAX_CLIENTS = 64;
/** 한 프레임 최대 길이 (바이트가 아닌 UTF-16 길이 기준, 넉넉히) */
export const MAX_FRAME_CHARS = 16 * 1024;

/** 신규 입장자 스냅샷으로 되살릴 메시지 종류 (위치/점수 상태) */
const SNAPSHOT_TYPES = new Set(['hello', 'state', 'lobby']);
/** 클라이언트가 이 문자열을 보내면 런타임이 DO 를 깨우지 않고 바로 'pong' 을 돌려준다 */
export const AUTO_PING = 'ping';
export const AUTO_PONG = 'pong';

function readAttachment(socket: LiveSocket): Attachment | null {
  try {
    const raw = socket.deserializeAttachment();
    if (!raw || typeof raw !== 'object') return null;
    const value = raw as Partial<Attachment>;
    if (typeof value.id !== 'string') return null;
    return { id: value.id, joinedAt: value.joinedAt ?? 0, last: value.last ?? null };
  } catch {
    return null;
  }
}

function sendFrame(socket: LiveSocket, frame: ServerFrame): void {
  try {
    socket.send(JSON.stringify(frame));
  } catch {
    /* 이미 닫힌 소켓 — 무시 */
  }
}

export class GolfRoomHub {
  private seq = 0;

  constructor(
    private readonly host: SocketHost,
    readonly room: string,
  ) {}

  /** 새 소켓을 방에 붙인다 (acceptWebSocket 직후에 호출) */
  onConnect(socket: LiveSocket): void {
    const self: Attachment = { id: crypto.randomUUID(), joinedAt: Date.now(), last: null };
    socket.serializeAttachment(self);
    this.sendSnapshot(socket, self.id);
    this.broadcastPresence();
  }

  /** 현재 접속자 스냅샷(각 소켓의 마지막 상태 메시지)을 보낸다 */
  private sendSnapshot(socket: LiveSocket, selfId: string | null): void {
    const peers = [];
    for (const other of this.host.getWebSockets()) {
      if (other === socket) continue;
      const attachment = readAttachment(other);
      if (attachment?.last) {
        peers.push({ from: attachment.id, mid: attachment.last.mid, msg: attachment.last.msg });
      }
    }

    sendFrame(socket, {
      t: 'ready',
      room: this.room,
      id: selfId ?? readAttachment(socket)?.id ?? '',
      count: this.clients(),
      peers,
    });
  }

  /** 소켓에서 올라온 프레임 처리 */
  onMessage(socket: LiveSocket, raw: string | ArrayBuffer): void {
    if (typeof raw !== 'string') {
      sendFrame(socket, { t: 'error', error: 'text frames only' });
      return;
    }
    if (raw.length > MAX_FRAME_CHARS) {
      sendFrame(socket, { t: 'error', error: 'frame too large' });
      return;
    }
    if (raw === AUTO_PING) {
      // 보통은 setWebSocketAutoResponse 가 먼저 처리하지만, 그 설정이 없는 경로(테스트 등)도 지원
      socket.send(AUTO_PONG);
      return;
    }

    let frame: ClientFrame;
    try {
      frame = JSON.parse(raw) as ClientFrame;
    } catch {
      sendFrame(socket, { t: 'error', error: 'invalid json' });
      return;
    }
    if (!frame || typeof frame !== 'object') {
      sendFrame(socket, { t: 'error', error: 'invalid frame' });
      return;
    }

    if (frame.t === 'ping') {
      sendFrame(socket, { t: 'pong', ts: typeof frame.ts === 'number' ? frame.ts : Date.now() });
      return;
    }

    if (frame.t === 'sync') {
      if (!readAttachment(socket)) {
        socket.serializeAttachment({ id: crypto.randomUUID(), joinedAt: Date.now(), last: null });
      }
      this.sendSnapshot(socket, null);
      return;
    }

    if (frame.t !== 'msg') {
      sendFrame(socket, { t: 'error', error: 'unknown frame' });
      return;
    }

    const msg = frame.msg;
    if (!msg || typeof msg !== 'object' || typeof (msg as { type?: unknown }).type !== 'string') {
      sendFrame(socket, { t: 'error', error: 'invalid msg' });
      return;
    }

    const attachment = readAttachment(socket) ?? { id: crypto.randomUUID(), joinedAt: Date.now(), last: null };
    if (!readAttachment(socket)) socket.serializeAttachment(attachment);
    const mid =
      typeof frame.mid === 'string' && frame.mid.length > 0 && frame.mid.length <= 80
        ? frame.mid
        : `${attachment.id}:${++this.seq}`;

    const envelope: Envelope = {
      mid,
      msg: msg as Envelope['msg'],
    };

    // 신규 입장자에게 되살려 줄 상태만 attachment 에 남긴다
    if (SNAPSHOT_TYPES.has(envelope.msg.type)) {
      socket.serializeAttachment({ ...attachment, last: envelope } satisfies Attachment);
    }

    const payload = JSON.stringify({ t: 'msg', mid, from: attachment.id, msg: envelope.msg });
    for (const other of this.host.getWebSockets()) {
      if (other === socket) continue;
      try {
        other.send(payload);
      } catch {
        /* 닫힌 소켓 — 무시 */
      }
    }
  }

  /** 소켓이 닫힐 때: 남은 사람들에게 퇴장을 알린다 */
  onClose(socket: LiveSocket): void {
    const attachment = readAttachment(socket);
    if (attachment) {
      const payload = JSON.stringify({ t: 'left', id: attachment.id });
      for (const other of this.host.getWebSockets()) {
        if (other === socket) continue;
        try {
          other.send(payload);
        } catch {
          /* 무시 */
        }
      }
    }
    this.broadcastPresence(socket);
  }

  /** 현재 접속자 수 (exclude 를 빼고 계산) */
  clients(exclude?: LiveSocket): number {
    let count = 0;
    for (const socket of this.host.getWebSockets()) {
      if (socket === exclude) continue;
      count += 1;
    }
    return count;
  }

  private broadcastPresence(exclude?: LiveSocket): void {
    const payload = JSON.stringify({
      t: 'presence',
      room: this.room,
      count: this.clients(exclude),
    } satisfies ServerFrame);
    for (const socket of this.host.getWebSockets()) {
      if (socket === exclude) continue;
      try {
        socket.send(payload);
      } catch {
        /* 무시 */
      }
    }
  }
}

export interface Env {
  GOLF_ROOM: DurableObjectNamespace;
}

/**
 * 방 하나를 담당하는 Durable Object.
 * WebSocket Hibernation API 를 쓰므로 사용자가 없을 때는 Duration 한도를 소모하지 않는다.
 */
export class GolfRoom {
  private readonly hub: GolfRoomHub;

  constructor(
    private readonly ctx: DurableObjectState,
    readonly env: Env,
  ) {
    const room = typeof ctx.id.name === 'string' && ctx.id.name.length > 0 ? ctx.id.name : 'lobby';
    this.hub = new GolfRoomHub(ctx, room);
    // 'ping' → 'pong' 은 런타임이 처리한다 (DO 를 깨우지 않음)
    try {
      ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair(AUTO_PING, AUTO_PONG));
    } catch {
      /* 오래된 런타임에서는 무시 */
    }
  }

  async fetch(request: Request): Promise<Response> {
    const upgrade = request.headers.get('Upgrade');

    // 일반 HTTP GET: 방 상태 확인용 (WebSocket 없이도 DO 가 살아 있는지 볼 수 있다)
    if (!upgrade || upgrade.toLowerCase() !== 'websocket') {
      return Response.json({
        ok: true,
        room: this.hub.room,
        clients: this.hub.clients(),
        maxClients: MAX_CLIENTS,
      });
    }

    if (this.hub.clients() >= MAX_CLIENTS) {
      return new Response('room is full', { status: 503 });
    }

    const pair = new WebSocketPair();
    const client = pair[0];
    const server = pair[1];

    // Hibernation API: DO 가 잠들어도 소켓이 유지되고, 메시지가 오면 깨어난다
    this.ctx.acceptWebSocket(server);
    this.hub.onConnect(server);

    return new Response(null, { status: 101, webSocket: client });
  }

  webSocketMessage(ws: WebSocket, message: string | ArrayBuffer): void {
    this.hub.onMessage(ws, message);
  }

  webSocketClose(ws: WebSocket, code: number, reason: string, _wasClean: boolean): void {
    this.hub.onClose(ws);
    try {
      ws.close(code === 1005 || code === 1006 ? 1000 : code, reason);
    } catch {
      /* 이미 닫힘 */
    }
  }

  webSocketError(ws: WebSocket, _error: unknown): void {
    this.hub.onClose(ws);
    try {
      ws.close(1011, 'socket error');
    } catch {
      /* 이미 닫힘 */
    }
  }
}
