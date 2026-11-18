import { AUTO_PING, GolfRoom, MAX_CLIENTS, type Env } from './room';

/**
 * 원온 미니골프 실시간 동기화 워커.
 *
 *   GET  /health          → 200 { ok: true, … }                (헬스 체크)
 *   GET  /rooms/:room     → { ok, room, clients }              (방 상태 확인)
 *   GET  /ws?room=lobby   → WebSocket 업그레이드 (방 하나 = DO 하나)
 *   GET  /ws/lobby        → 위와 동일 (경로 방식)
 *
 * 방 이름은 [A-Za-z0-9][A-Za-z0-9_-]{0,31}. 없으면 lobby.
 */
export { GolfRoom };

const SERVICE = 'oneone-minigolf-sync';
const ROOM_PATTERN = /^[A-Za-z0-9][A-Za-z0-9_-]{0,31}$/;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'access-control-allow-origin': '*',
    },
  });
}

function roomFrom(url: URL, pathRoom?: string): string | null {
  const raw = pathRoom ? decodeURIComponent(pathRoom) : (url.searchParams.get('room') ?? 'lobby');
  if (!ROOM_PATTERN.test(raw)) return null;
  return raw;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'access-control-allow-origin': '*',
          'access-control-allow-methods': 'GET,OPTIONS',
          'access-control-allow-headers': '*',
        },
      });
    }

    if (request.method !== 'GET') {
      return json({ ok: false, error: 'method not allowed' }, 405);
    }

    if (url.pathname === '/' || url.pathname === '/health') {
      return json({
        ok: true,
        service: SERVICE,
        rooms: ['lobby', 'play-1'],
        maxClientsPerRoom: MAX_CLIENTS,
        keepAlive: AUTO_PING,
        endpoints: {
          websocket: '/ws?room=<room>  또는  /ws/<room>',
          roomStatus: '/rooms/<room>',
        },
        now: new Date().toISOString(),
      });
    }

    const wsPath = url.pathname.match(/^\/ws(?:\/([^/]+))?\/?$/);
    const roomPath = url.pathname.match(/^\/rooms\/([^/]+)\/?$/);

    if (wsPath) {
      const room = roomFrom(url, wsPath[1]);
      if (!room) return json({ ok: false, error: 'invalid room name' }, 400);

      const upgrade = request.headers.get('Upgrade');
      if (!upgrade || upgrade.toLowerCase() !== 'websocket') {
        return json({ ok: false, error: 'expected websocket upgrade', room }, 426);
      }

      const stub = env.GOLF_ROOM.get(env.GOLF_ROOM.idFromName(room));
      return stub.fetch(request);
    }

    if (roomPath) {
      const room = roomFrom(url, roomPath[1]);
      if (!room) return json({ ok: false, error: 'invalid room name' }, 400);
      const stub = env.GOLF_ROOM.get(env.GOLF_ROOM.idFromName(room));
      return stub.fetch(request);
    }

    return json({ ok: false, error: 'not found', service: SERVICE }, 404);
  },
};
