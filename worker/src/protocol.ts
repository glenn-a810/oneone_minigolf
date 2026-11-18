/**
 * 클라이언트(`src/net/realtime.ts`)와 워커가 주고받는 프레임 정의.
 *
 * 게임 앱 메시지(`NetMessage`)는 워커가 내용을 해석하지 않고 그대로 중계한다(opaque payload).
 * 워커가 직접 만드는 것은 연결/끊김/핑 같은 제어 프레임뿐이다.
 */

/** 중계 메시지 한 건의 봉투. mid 는 클라이언트가 붙이는 중복 제거용 id. */
export interface Envelope {
  mid: string;
  msg: { type: string; [key: string]: unknown };
}

/** 클라이언트 → 워커 */
export type ClientFrame =
  | { t: 'msg'; mid?: string; msg?: unknown }
  | { t: 'ping'; ts?: number }
  /** 현재 접속자 스냅샷을 다시 달라 (입장 직후 등) */
  | { t: 'sync' };

/** 신규 입장자에게 보내는 현재 접속자 스냅샷 (각 소켓이 마지막으로 보낸 상태 메시지) */
export interface RosterEntry {
  from: string;
  mid: string;
  msg: { type: string; [key: string]: unknown };
}

/** 워커 → 클라이언트 */
export type ServerFrame =
  | { t: 'ready'; room: string; id: string; count: number; peers: RosterEntry[] }
  | { t: 'msg'; mid: string; from: string; msg: { type: string; [key: string]: unknown }; replay?: boolean }
  | { t: 'presence'; room: string; count: number }
  | { t: 'left'; id: string }
  | { t: 'pong'; ts: number }
  | { t: 'error'; error: string };

/** WebSocket attachment 에 저장하는 값 (Hibernation 후에도 복원된다) */
export interface Attachment {
  /** 이 소켓의 고유 id (플레이어 id 와 별개) */
  id: string;
  joinedAt: number;
  /** 신규 입장자 스냅샷용: 이 소켓이 마지막으로 보낸 상태 메시지 */
  last?: Envelope | null;
}
