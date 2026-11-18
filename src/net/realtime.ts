import type { PlayerSnapshot } from '../game/types';

/** 대기실(로비)에서 공유하는 플레이어 상태. */
export interface LobbySnapshot {
  id: string;
  name: string;
  color: string;
  pos: [number, number, number];
  /** 캐릭터가 바라보는 방향 (라디안) */
  heading: number;
  moving: boolean;
  ts: number;
}

/**
 * 실시간 동기화 메시지. 모두 순수 JSON 이라 어떤 전송 계층에도 그대로 실을 수 있다.
 *
 * 전송 계층(`Realtime`)은 두 가지를 동시에 쓴다.
 * 1) Cloudflare Worker + Durable Object WebSocket — 서로 다른 PC·휴대폰 사이 동기화
 *    `wss://oneone-minigolf-sync.a810-glenn.workers.dev/ws?room=<room>`
 * 2) BroadcastChannel — 같은 브라우저 탭끼리(오프라인·로컬 개발) 즉시 동기화
 *
 * 두 경로로 같은 메시지가 도착할 수 있으므로 봉투(envelope)에 붙인 mid 로 한 번만 처리한다.
 */
export type NetMessage =
  | { type: 'hello'; player: PlayerSnapshot }
  | { type: 'state'; player: PlayerSnapshot }
  | { type: 'bye'; id: string }
  | { type: 'emoji'; id: string; emoji: string }
  | { type: 'shot'; id: string; power: number; club?: string }
  | { type: 'holed'; id: string; hole: number; strokes: number; name: string }
  | { type: 'again'; id: string; name: string }
  // ---- 3D 대기실(로비) ----
  | { type: 'lobby'; player: LobbySnapshot }
  | { type: 'lobby-bye'; id: string }
  | { type: 'lobby-emoji'; id: string; emoji: string }
  | { type: 'playroom'; id: string; name: string; joined: boolean };

/** 방 이름. 서버에서는 방 하나가 Durable Object 하나다. */
export const LOBBY_ROOM = 'lobby';
export const PLAY_ROOM = 'play-1';

/** 어떤 경로로 연결되어 있는지 */
export type NetMode =
  /** 서버 WebSocket 연결됨 (다른 기기와 동기화) */
  | 'websocket'
  /** 서버 연결 시도 중 */
  | 'connecting'
  /** 같은 브라우저 탭끼리만 (BroadcastChannel) */
  | 'local'
  /** 아무 경로도 없음 */
  | 'offline';

export interface NetStatus {
  room: string;
  mode: NetMode;
  /** 서버가 알려준 같은 방 접속자 수 (자신 포함, 모르면 0) */
  peers: number;
  /** 연속 재연결 시도 횟수 */
  attempt: number;
}

export interface Realtime {
  /** 실시간 계층이 실제로 연결되어 있는지 (탭 간 동기화 가능 여부) */
  readonly online: boolean;
  readonly mode: NetMode;
  send(message: NetMessage): void;
  onMessage(handler: (message: NetMessage) => void): () => void;
  /** 연결 상태 변화 구독 (UI 표시용) */
  onStatus(handler: (status: NetStatus) => void): () => void;
  /** 현재 접속자 스냅샷을 다시 요청한다 (입장 직후 상대 목록을 바로 받기 위해) */
  resync?(): void;
  close(): void;
}

/** 페이지에 붙는 기본 서버 (worker/wrangler.toml 의 name + workers.dev 서브도메인) */
const DEFAULT_SERVER = 'wss://oneone-minigolf-sync.a810-glenn.workers.dev';
const DEFAULT_ROOM = LOBBY_ROOM;
const BROADCAST_PREFIX = 'oneone-minigolf';

/** WebSocket 생성자 주입용 (테스트에서 가짜 소켓을 넣는다) */
export interface WebSocketLike {
  readyState: number;
  send(data: string): void;
  close(code?: number, reason?: string): void;
  onopen: ((event: unknown) => void) | null;
  onmessage: ((event: { data: unknown }) => void) | null;
  onclose: ((event: unknown) => void) | null;
  onerror: ((event: unknown) => void) | null;
}
export type WebSocketFactory = (url: string) => WebSocketLike;

export interface RealtimeOptions {
  /**
   * 붙을 WebSocket 주소. `null` 이면 서버를 쓰지 않는다.
   * 지정하지 않으면 `VITE_WS_URL` → (개발 모드가 아니면) 기본 서버 순으로 정한다.
   */
  url?: string | null;
  /** BroadcastChannel 병행 여부 (기본: 지원하면 켬) */
  local?: boolean;
  /** WebSocket 구현 (기본: 브라우저 전역 WebSocket) */
  webSocket?: WebSocketFactory | null;
  /** 만들자마자 서버에 붙을지 (기본 true, false 면 첫 send 때 연결) */
  autoConnect?: boolean;
  /** 재연결 백오프 배율 (기본 1; 테스트에서 짧게) */
  backoffScale?: number;
}

interface Envelope {
  mid: string;
  msg: NetMessage;
}

const BASE_DELAY = 500;
const MAX_DELAY = 20000;
const PING_INTERVAL = 25000;
const SILENCE_LIMIT = 70000;
const QUEUE_LIMIT = 64;
const SEEN_LIMIT = 800;

function envValue(): string | null {
  try {
    const meta = import.meta as unknown as { env?: Record<string, unknown> };
    const value = meta?.env?.VITE_WS_URL;
    return typeof value === 'string' && value.length > 0 ? value : null;
  } catch {
    return null;
  }
}

function isDev(): boolean {
  try {
    const meta = import.meta as unknown as { env?: Record<string, unknown> };
    return meta?.env?.DEV === true;
  } catch {
    return false;
  }
}

function normalizeUrl(input: string | null | undefined): string | null {
  if (!input) return null;
  let raw = input.trim();
  if (raw.length === 0) return null;
  if (raw === 'off' || raw === '0' || raw === 'false' || raw === 'none') return null;
  if (raw.startsWith('http://')) raw = `ws://${raw.slice('http://'.length)}`;
  else if (raw.startsWith('https://')) raw = `wss://${raw.slice('https://'.length)}`;
  if (!/^wss?:\/\//i.test(raw)) return null;
  try {
    return new URL(raw).toString();
  } catch {
    return null;
  }
}

/** 주소에 방 이름을 붙인다 (`/ws?room=lobby`) */
function withRoom(base: string, room: string): string {
  try {
    const url = new URL(base);
    if (url.pathname === '/' || url.pathname === '') url.pathname = '/ws';
    if (!url.searchParams.has('room')) url.searchParams.set('room', room);
    return url.toString();
  } catch {
    return base;
  }
}

/** `?ws=` 쿼리로 서버를 바꾸거나 끌 수 있다 (예: `?ws=off`, `?ws=wss://내서버/ws`) */
function urlFromLocation(): string | null | undefined {
  if (typeof window === 'undefined' || !window.location) return undefined;
  try {
    const params = new URLSearchParams(window.location.search);
    if (!params.has('ws')) return undefined;
    const raw = params.get('ws') ?? '';
    if (raw === 'off' || raw === '0' || raw === 'false' || raw === '') return null;
    return normalizeUrl(raw);
  } catch {
    return undefined;
  }
}

function resolveServerUrl(room: string, requested: string | null | undefined): string | null {
  if (requested !== undefined) {
    const explicit = normalizeUrl(requested);
    return explicit ? withRoom(explicit, room) : null;
  }
  const fromQuery = urlFromLocation();
  if (fromQuery !== undefined) {
    return fromQuery ? withRoom(fromQuery, room) : null;
  }
  const fromEnv = normalizeUrl(envValue());
  if (fromEnv) return withRoom(fromEnv, room);

  // 로컬 개발(vite dev)에서는 기본으로 붙지 않는다 — 탭 간 동기화는 BroadcastChannel 로 충분하고,
  // 배포된 서버에 붙어 보고 싶으면 ?ws=wss://oneone-minigolf-sync.a810-glenn.workers.dev/ws
  if (isDev()) return null;
  return withRoom(DEFAULT_SERVER, room);
}

function defaultSocketFactory(url: string): WebSocketLike {
  return new WebSocket(url) as unknown as WebSocketLike;
}

function createClientId(): string {
  try {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID().slice(0, 8);
  } catch {
    /* fallthrough */
  }
  return Math.random().toString(36).slice(2, 10);
}

/**
 * 방 하나에 대한 실시간 채널.
 * 서버 WebSocket(다른 기기)과 BroadcastChannel(같은 브라우저 탭)을 함께 쓰고,
 * 끊기면 지수 백오프로 다시 붙는다.
 */
class NetChannel implements Realtime {
  readonly room: string;
  private readonly serverUrl: string | null;
  private readonly useLocal: boolean;
  private readonly autoConnect: boolean;
  private readonly socketFactory: WebSocketFactory | null;
  private readonly backoffScale: number;
  private readonly clientId = createClientId();

  private readonly handlers = new Set<(message: NetMessage) => void>();
  private readonly statusHandlers = new Set<(status: NetStatus) => void>();
  private readonly seen = new Map<string, number>();
  private readonly queue: Envelope[] = [];
  private local: BroadcastChannel | null = null;

  private socket: WebSocketLike | null = null;
  private attempt = 0;
  private seq = 0;
  private serverPeers = 0;
  private lastInbound = 0;
  private closed = false;
  private started = false;
  private syncPending = false;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private pingTimer: ReturnType<typeof setInterval> | null = null;
  private detachWindow: (() => void) | null = null;

  constructor(room: string, options: RealtimeOptions = {}) {
    this.room = room;
    this.autoConnect = options.autoConnect ?? true;
    this.backoffScale = options.backoffScale ?? 1;
    this.serverUrl = resolveServerUrl(room, options.url);

    const wantLocal = options.local ?? true;
    if (wantLocal && typeof BroadcastChannel !== 'undefined') {
      try {
        this.local = new BroadcastChannel(`${BROADCAST_PREFIX}:${room}`);
        this.local.onmessage = (event: MessageEvent<unknown>) => this.receive(event.data);
      } catch {
        this.local = null;
      }
    }
    this.useLocal = this.local !== null;

    if (options.webSocket === null) {
      this.socketFactory = null;
    } else if (options.webSocket) {
      this.socketFactory = options.webSocket;
    } else {
      this.socketFactory = this.serverUrl && typeof WebSocket !== 'undefined' ? defaultSocketFactory : null;
    }

    if (this.autoConnect) this.connect();
    this.attachWindow();
  }

  // ---------------------------------------------------------------- 상태

  get mode(): NetMode {
    if (this.socket && this.socket.readyState === 1) return 'websocket';
    if (this.serverUrl && this.socketFactory) {
      // 여러 번 실패했으면 '연결 중' 에 머물러 있지 않고 솔직하게 로컬/오프라인으로 표시한다
      if (this.attempt >= 3) return this.useLocal ? 'local' : 'offline';
      return 'connecting';
    }
    if (this.useLocal) return 'local';
    return 'offline';
  }

  get online(): boolean {
    return this.mode === 'websocket' || this.useLocal;
  }

  get status(): NetStatus {
    return { room: this.room, mode: this.mode, peers: this.serverPeers, attempt: this.attempt };
  }

  onStatus(handler: (status: NetStatus) => void): () => void {
    this.statusHandlers.add(handler);
    handler(this.status);
    return () => this.statusHandlers.delete(handler);
  }

  private emitStatus(): void {
    if (this.statusHandlers.size === 0) return;
    const status = this.status;
    this.statusHandlers.forEach((handler) => {
      try {
        handler(status);
      } catch {
        /* 무시 */
      }
    });
  }

  // ---------------------------------------------------------------- 연결

  private connect(): void {
    if (this.closed) return;
    this.started = true;
    if (!this.serverUrl || !this.socketFactory) {
      this.emitStatus();
      return;
    }
    if (this.socket && (this.socket.readyState === 0 || this.socket.readyState === 1)) return;

    let socket: WebSocketLike | null = null;
    try {
      socket = this.socketFactory(this.serverUrl);
    } catch {
      socket = null;
    }

    if (!socket) {
      this.scheduleReconnect();
      return;
    }

    this.socket = socket;
    this.lastInbound = Date.now();

    socket.onopen = () => {
      if (this.closed) return;
      this.attempt = 0;
      this.lastInbound = Date.now();
      this.flushQueue();
      if (this.syncPending) {
        this.syncPending = false;
        this.resync();
      }
      this.startPing();
      this.emitStatus();
    };

    socket.onmessage = (event) => {
      this.lastInbound = Date.now();
      this.receive(event.data);
    };

    socket.onerror = () => {
      /* onclose 가 뒤따라 온다 */
    };

    socket.onclose = () => {
      if (this.socket === socket) this.socket = null;
      this.stopPing();
      if (this.closed) return;
      this.scheduleReconnect();
    };

    this.emitStatus();
  }

  private scheduleReconnect(): void {
    if (this.closed || this.reconnectTimer !== null) return;
    const base = Math.min(MAX_DELAY, BASE_DELAY * 2 ** Math.min(this.attempt, 6));
    const delay = Math.max(200, Math.round(base * this.backoffScale * (0.75 + Math.random() * 0.5)));
    this.attempt += 1;
    this.emitStatus();
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.connect();
    }, delay);
  }

  private startPing(): void {
    this.stopPing();
    this.pingTimer = setInterval(() => {
      const socket = this.socket;
      if (!socket || socket.readyState !== 1) return;
      if (Date.now() - this.lastInbound > SILENCE_LIMIT) {
        // 응답이 오래 없다 — 소켓을 정리하고 다시 붙는다
        try {
          socket.close();
        } catch {
          /* 무시 */
        }
        return;
      }
      try {
        // 워커의 setWebSocketAutoResponse('ping' → 'pong') 가 DO 를 깨우지 않고 바로 응답한다
        socket.send('ping');
      } catch {
        /* 무시 */
      }
    }, PING_INTERVAL);
  }

  private stopPing(): void {
    if (this.pingTimer !== null) {
      clearInterval(this.pingTimer);
      this.pingTimer = null;
    }
  }

  private attachWindow(): void {
    if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') return;
    const wake = () => {
      if (this.closed || !this.started) return;
      if (!this.socket) {
        if (this.reconnectTimer !== null) {
          clearTimeout(this.reconnectTimer);
          this.reconnectTimer = null;
        }
        this.connect();
      }
    };
    window.addEventListener('online', wake);
    window.addEventListener('focus', wake);
    this.detachWindow = () => {
      window.removeEventListener('online', wake);
      window.removeEventListener('focus', wake);
    };
  }

  // ---------------------------------------------------------------- 송신

  send(message: NetMessage): void {
    if (this.closed) return;
    const envelope: Envelope = { mid: `${this.clientId}-${++this.seq}`, msg: message };

    if (this.local) {
      try {
        this.local.postMessage(envelope);
      } catch {
        /* 무시 */
      }
    }

    const socket = this.socket;
    if (socket && socket.readyState === 1 && this.serverUrl) {
      this.sendOverSocket(envelope);
      return;
    }

    if (!this.serverUrl) {
      // 서버를 쓰지 않는 모드(로컬 전용)에서는 BroadcastChannel 이 유일한 경로다
      return;
    }

    // 서버 연결 전: 같은 브라우저 탭이 없을 때만 큐에 쌓아 두었다가 연결되면 보낸다
    if (!this.useLocal) {
      this.enqueue(envelope);
      this.connect();
    }
  }

  resync(): void {
    if (this.closed) return;
    const socket = this.socket;
    if (socket && socket.readyState === 1) {
      try {
        socket.send(JSON.stringify({ t: 'sync' }));
      } catch {
        /* 무시 */
      }
      return;
    }
    this.syncPending = true;
    this.connect();
  }

  private sendOverSocket(envelope: Envelope): void {
    const socket = this.socket;
    if (!socket) return;
    try {
      socket.send(JSON.stringify({ t: 'msg', mid: envelope.mid, msg: envelope.msg }));
    } catch {
      /* 무시 — onclose 가 재연결을 건다 */
    }
  }

  private enqueue(envelope: Envelope): void {
    this.queue.push(envelope);
    if (this.queue.length > QUEUE_LIMIT) this.queue.splice(0, this.queue.length - QUEUE_LIMIT);
  }

  private flushQueue(): void {
    if (this.queue.length === 0) return;
    const pending = this.queue.splice(0, this.queue.length);
    pending.forEach((envelope) => this.sendOverSocket(envelope));
  }

  // ---------------------------------------------------------------- 수신

  private receive(raw: unknown): void {
    if (raw === null || raw === undefined) return;

    if (typeof raw === 'string') {
      const text = raw.trim();
      if (text.length === 0) return;
      if (text === 'pong') return; // keepalive 응답
      let parsed: unknown;
      try {
        parsed = JSON.parse(text);
      } catch {
        return;
      }
      this.receiveFrame(parsed);
      return;
    }

    // BroadcastChannel 로 온 봉투 객체
    this.receiveFrame(raw);
  }

  private receiveFrame(frame: unknown): void {
    if (!frame || typeof frame !== 'object') return;
    const value = frame as Record<string, unknown>;

    // 서버 제어 프레임
    if (typeof value.t === 'string') {
      switch (value.t) {
        case 'msg': {
          const mid = typeof value.mid === 'string' ? value.mid : '';
          this.deliver({ mid, msg: value.msg as NetMessage });
          return;
        }
        case 'presence': {
          const count = typeof value.count === 'number' ? value.count : 0;
          if (count !== this.serverPeers) {
            this.serverPeers = count;
            this.emitStatus();
          }
          return;
        }
        case 'left': {
          const id = typeof value.id === 'string' ? value.id : '';
          if (!id) return;
          this.deliver({ mid: `left:${id}`, msg: { type: 'bye', id } });
          this.deliver({ mid: `left-lobby:${id}`, msg: { type: 'lobby-bye', id } });
          return;
        }
        case 'ready': {
          if (typeof value.count === 'number') {
            this.serverPeers = value.count;
            this.emitStatus();
          }
          this.replayRoster(value.peers);
          return;
        }
        case 'pong':
        case 'error':
        default:
          return;
      }
    }

    // BroadcastChannel 봉투 { mid, msg }
    if (value.mid !== undefined || value.msg !== undefined) {
      const mid = typeof value.mid === 'string' ? value.mid : '';
      this.deliver({ mid, msg: value.msg as NetMessage });
    }
  }

  /** 새로 붙었을 때 서버가 보내 준 기존 접속자 상태를 그대로 흘려 준다 */
  private replayRoster(peers: unknown): void {
    if (!Array.isArray(peers)) return;
    peers.forEach((entry) => {
      if (!entry || typeof entry !== 'object') return;
      const value = entry as Record<string, unknown>;
      const source = typeof value.mid === 'string' ? value.mid : '';
      // 스냅샷은 요청할 때마다 새로 받는 값이므로 매번 다른 mid 로 처리한다
      // (이전에 받은 스냅샷과 같은 mid 면 중복 제거에 걸려 무시된다)
      const mid = `replay:${source}:${++this.seq}`;
      this.deliver({ mid, msg: value.msg as NetMessage });
    });
  }

  private deliver(envelope: Envelope): void {
    const msg = envelope.msg;
    if (!msg || typeof msg !== 'object' || typeof (msg as { type?: unknown }).type !== 'string') return;

    if (envelope.mid) {
      const now = Date.now();
      const seenAt = this.seen.get(envelope.mid);
      if (seenAt !== undefined) return;
      this.seen.set(envelope.mid, now);
      if (this.seen.size > SEEN_LIMIT) {
        // 오래된 항목부터 정리 (삽입 순서 = 시간 순서)
        const overflow = this.seen.size - SEEN_LIMIT;
        let removed = 0;
        for (const key of this.seen.keys()) {
          this.seen.delete(key);
          removed += 1;
          if (removed >= overflow) break;
        }
      }
    }

    this.handlers.forEach((handler) => {
      try {
        handler(msg);
      } catch (error) {
        console.warn('[realtime] 메시지 처리 실패', error);
      }
    });
  }

  onMessage(handler: (message: NetMessage) => void): () => void {
    this.handlers.add(handler);
    return () => this.handlers.delete(handler);
  }

  // ---------------------------------------------------------------- 종료

  close(): void {
    if (this.closed) return;
    this.closed = true;
    this.stopPing();
    if (this.reconnectTimer !== null) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.detachWindow?.();
    this.detachWindow = null;
    const socket = this.socket;
    this.socket = null;
    if (socket) {
      try {
        socket.close();
      } catch {
        /* 무시 */
      }
    }
    if (this.local) {
      this.local.onmessage = null;
      try {
        this.local.close();
      } catch {
        /* 무시 */
      }
      this.local = null;
    }
    this.handlers.clear();
    this.statusHandlers.clear();
  }
}

/** 방 하나에 대한 실시간 채널을 만든다. 기본 방은 lobby. */
export function createRealtime(room = DEFAULT_ROOM, options: RealtimeOptions = {}): NetChannel {
  return new NetChannel(room, options);
}
