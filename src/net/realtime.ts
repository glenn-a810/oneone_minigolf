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
 * 지금은 서버/키 없이 동작하도록 같은 브라우저의 탭끼리만 연결하는
 * BroadcastChannel 어댑터를 쓴다. 실제 배포에서 여러 기기를 붙이려면
 * 아래 Realtime 인터페이스(send / onMessage / close)를 그대로 구현한 어댑터만 갈아 끼우면 된다.
 *
 * - Supabase Realtime:  supabase.channel(room).on('broadcast', {event:'msg'}, ...).subscribe()
 *                       → send() 에서 channel.send({type:'broadcast', event:'msg', payload: msg})
 * - Cloudflare Durable Objects(WebSocket): DO 한 개를 방(room)으로 두고 연결된 소켓에 브로드캐스트
 * - Firebase Realtime DB / Ably / PartyKit 도 동일한 3개 메서드로 감쌀 수 있다.
 *
 * 서버로 옮길 때 신경 쓸 점: 발신자 id 위조 방지, 방(room) 코드 기반 입장, 레이트 리밋,
 * 그리고 쿠폰 발급 같은 보상은 반드시 서버에서 검증(현재 MVP는 쿠폰 기능 제외).
 */
export type NetMessage =
  | { type: 'hello'; player: PlayerSnapshot }
  | { type: 'state'; player: PlayerSnapshot }
  | { type: 'bye'; id: string }
  | { type: 'emoji'; id: string; emoji: string }
  | { type: 'shot'; id: string; power: number }
  | { type: 'holed'; id: string; hole: number; strokes: number; name: string }
  | { type: 'again'; id: string; name: string }
  // ---- 3D 대기실(로비) ----
  | { type: 'lobby'; player: LobbySnapshot }
  | { type: 'lobby-bye'; id: string }
  | { type: 'lobby-emoji'; id: string; emoji: string }
  | { type: 'playroom'; id: string; name: string; joined: boolean };

export interface Realtime {
  /** 실시간 계층이 실제로 연결되어 있는지 (탭 간 동기화 가능 여부) */
  readonly online: boolean;
  send(message: NetMessage): void;
  onMessage(handler: (message: NetMessage) => void): () => void;
  close(): void;
}

const ROOM = 'oneone-minigolf-v1';

/** 같은 오리진의 브라우저 탭끼리 통신하는 기본 어댑터 */
export function createRealtime(room = ROOM): Realtime {
  if (typeof BroadcastChannel === 'undefined') {
    return {
      online: false,
      send: () => undefined,
      onMessage: () => () => undefined,
      close: () => undefined,
    };
  }

  const channel = new BroadcastChannel(room);
  const handlers = new Set<(message: NetMessage) => void>();

  channel.onmessage = (event: MessageEvent<NetMessage>) => {
    const message = event.data;
    if (!message || typeof message.type !== 'string') return;
    handlers.forEach((handler) => handler(message));
  };

  return {
    online: true,
    send(message: NetMessage) {
      channel.postMessage(message);
    },
    onMessage(handler) {
      handlers.add(handler);
      return () => handlers.delete(handler);
    },
    close() {
      handlers.clear();
      channel.close();
    },
  };
}
