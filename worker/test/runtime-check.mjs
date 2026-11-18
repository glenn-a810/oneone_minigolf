/**
 * 실제 워커 런타임(workerd) 통합 확인 — Miniflare 로 워커를 그대로 띄운다.
 *
 *   cd worker && npm install && npm run verify:runtime
 *
 * 확인 항목: /health · WebSocket 업그레이드 101 · 발신자 제외 중계 · 신규 입장자 스냅샷 ·
 *            접속자 수 · 퇴장 알림 · 방 분리 · /rooms/:room
 */
import { Miniflare } from 'miniflare';
import { build } from 'esbuild';

let failures = 0;
const check = (label, ok, detail = '') => {
  if (ok) console.log(`  [OK ] ${label}${detail ? ` — ${detail}` : ''}`);
  else {
    failures += 1;
    console.log(`  [FAIL] ${label}${detail ? ` — ${detail}` : ''}`);
  }
};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

await build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  format: 'esm',
  outfile: '.tmp/worker.mjs',
  platform: 'neutral',
  target: 'es2022',
  logLevel: 'warning',
});

const mf = new Miniflare({
  modules: true,
  scriptPath: '.tmp/worker.mjs',
  compatibilityDate: '2026-01-20',
  durableObjects: { GOLF_ROOM: 'GolfRoom' },
});

/** 웹소켓 업그레이드 응답을 받아 프레임 수집기와 함께 돌려준다 */
async function connect(room) {
  const response = await mf.dispatchFetch(`http://localhost/ws?room=${room}`, {
    headers: { Upgrade: 'websocket' },
  });
  const socket = response.webSocket;
  if (!socket) throw new Error(`websocket upgrade 실패 (${response.status})`);
  const frames = [];
  socket.addEventListener('message', (event) => {
    if (typeof event.data !== 'string') return;
    if (event.data === 'pong') return;
    try {
      frames.push(JSON.parse(event.data));
    } catch {
      /* 무시 */
    }
  });
  if (typeof socket.accept === 'function') socket.accept();
  return { socket, frames, status: response.status };
}

const send = (client, data) => client.socket.send(data);
const waitFor = async (frames, predicate, timeout = 1500) => {
  const started = Date.now();
  while (Date.now() - started < timeout) {
    const found = frames.find(predicate);
    if (found) return found;
    await sleep(20);
  }
  return null;
};

try {
  console.log('— 워커 런타임(workerd) 통합 확인 —');

  const health = await mf.dispatchFetch('http://localhost/health');
  const healthBody = await health.json();
  check('GET /health', health.status === 200 && healthBody.ok === true, healthBody.service);

  const a = await connect('runtime-check');
  check('WebSocket 업그레이드 101', a.status === 101, String(a.status));
  const b = await connect('runtime-check');

  const readyB = await waitFor(b.frames, (frame) => frame.t === 'ready');
  check('ready 프레임', Boolean(readyB), readyB ? `count=${readyB.count}` : '없음');
  check('접속자 수 2명', readyB?.count === 2, String(readyB?.count));

  send(a, JSON.stringify({ t: 'ping', ts: 4242 }));
  const pong = await waitFor(a.frames, (frame) => frame.t === 'pong');
  check('JSON ping → pong', pong?.ts === 4242, String(pong?.ts));

  // setWebSocketAutoResponse('ping' → 'pong')
  let rawPong = false;
  a.socket.addEventListener('message', (event) => {
    if (event.data === 'pong') rawPong = true;
  });
  send(a, 'ping');
  await sleep(250);
  check('문자열 ping 자동 응답', rawPong);

  send(
    a,
    JSON.stringify({ t: 'msg', mid: 'rt-1', msg: { type: 'hello', player: { id: 'rt-a', name: '런타임' } } }),
  );
  const relayed = await waitFor(b.frames, (frame) => frame.t === 'msg' && frame.mid === 'rt-1');
  check('메시지 중계 (발신자 제외)', Boolean(relayed) && !a.frames.some((frame) => frame.mid === 'rt-1'));

  const c = await connect('runtime-check');
  const readyC = await waitFor(c.frames, (frame) => frame.t === 'ready');
  const peers = readyC?.peers ?? [];
  check('신규 입장자 스냅샷', peers.length >= 1, `${peers.length}명`);
  check('스냅샷에 기존 상태 포함', peers.some((entry) => entry.msg?.player?.id === 'rt-a'));

  const sync = await mf.dispatchFetch('http://localhost/rooms/runtime-check');
  const syncBody = await sync.json();
  check('GET /rooms/:room 접속자 3명', syncBody.clients === 3, String(syncBody.clients));

  // 방 분리
  const other = await connect('runtime-other');
  await sleep(200);
  send(a, JSON.stringify({ t: 'msg', mid: 'rt-2', msg: { type: 'emoji', id: 'rt-a', emoji: '🔥' } }));
  await sleep(300);
  check('다른 방으로 새지 않음', !other.frames.some((frame) => frame.mid === 'rt-2'));

  // 퇴장 알림
  b.frames.length = 0;
  a.socket.close();
  const left = await waitFor(b.frames, (frame) => frame.t === 'left');
  check('퇴장 시 left 프레임', Boolean(left));

  c.socket.close();
  other.socket.close();
  await sleep(200);
} finally {
  await mf.dispose();
}

console.log(failures === 0 ? '\n모든 확인 통과 ✅' : `\n${failures}건 실패 ❌`);
process.exit(failures === 0 ? 0 : 1);
