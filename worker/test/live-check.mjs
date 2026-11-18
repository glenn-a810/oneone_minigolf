/**
 * 실제 워커 런타임 확인용 스크립트 (로컬 `wrangler dev` 또는 배포된 워커 대상)
 *
 *   cd worker && npx wrangler dev --port 8787     # 다른 터미널
 *   node worker/test/live-check.mjs              # 기본 http://127.0.0.1:8787
 *   node worker/test/live-check.mjs https://oneone-minigolf-sync.a810-glenn.workers.dev
 *
 * Node.js 22 이상(전역 WebSocket)에서 실행한다.
 */

const base = (process.argv[2] ?? 'http://127.0.0.1:8787').replace(/\/$/, '');
const wsBase = base.replace(/^http/, 'ws');
const room = `live-${Date.now().toString(36)}`;
const url = `${wsBase}/ws?room=${room}`;

if (typeof WebSocket === 'undefined') {
  console.error('이 스크립트는 전역 WebSocket 이 있는 Node.js 22 이상이 필요합니다. (node -v 로 확인)');
  process.exit(1);
}

let failures = 0;
const check = (label, ok, detail = '') => {
  if (ok) console.log(`  [OK ] ${label}${detail ? ` — ${detail}` : ''}`);
  else {
    failures += 1;
    console.log(`  [FAIL] ${label}${detail ? ` — ${detail}` : ''}`);
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function open(socket) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('open timeout')), 8000);
    socket.addEventListener('open', () => {
      clearTimeout(timer);
      resolve();
    });
    socket.addEventListener('error', (event) => {
      clearTimeout(timer);
      reject(new Error(`socket error: ${event?.message ?? 'unknown'}`));
    });
  });
}

function inbox(socket) {
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
  return frames;
}

async function main() {
  console.log(`— 라이브 워커 확인: ${base} (room=${room}) —`);

  const health = await fetch(`${base}/health`);
  const healthBody = await health.json();
  check('GET /health 200', health.status === 200 && healthBody.ok === true, String(healthBody.service ?? health.status));

  const a = new WebSocket(url);
  const aFrames = inbox(a);
  await open(a);
  const b = new WebSocket(url);
  const bFrames = inbox(b);
  await open(b);
  await sleep(300);

  const readyB = bFrames.find((frame) => frame.t === 'ready');
  check('ready 프레임 수신', Boolean(readyB), readyB ? `count=${readyB.count}` : '없음');
  check('접속자 수 2명', readyB?.count === 2, String(readyB?.count));

  a.send(JSON.stringify({ t: 'ping', ts: 1234 }));
  await sleep(150);
  check('JSON ping → pong', aFrames.some((frame) => frame.t === 'pong' && frame.ts === 1234));

  a.send('ping');
  await sleep(150);

  a.send(JSON.stringify({ t: 'msg', mid: 'm1', msg: { type: 'hello', player: { id: 'live-a', name: '라이브' } } }));
  await sleep(250);
  const relayed = bFrames.find((frame) => frame.t === 'msg' && frame.mid === 'm1');
  check('메시지 중계 (발신자 제외)', Boolean(relayed) && !aFrames.some((frame) => frame.mid === 'm1'));

  // 신규 입장자 스냅샷
  const c = new WebSocket(url);
  const cFrames = inbox(c);
  await open(c);
  await sleep(300);
  const readyC = cFrames.find((frame) => frame.t === 'ready');
  const peers = readyC?.peers ?? [];
  check('신규 입장자 스냅샷', peers.length >= 1, `${peers.length}명`);
  check('스냅샷에 기존 상태 포함', peers.some((entry) => entry.msg?.player?.id === 'live-a'));

  // 방 상태 엔드포인트
  const status = await fetch(`${base}/rooms/${room}`);
  const statusBody = await status.json();
  check('GET /rooms/:room 접속자 3명', statusBody.clients === 3, String(statusBody.clients));

  // 퇴장 알림
  bFrames.length = 0;
  a.close();
  await sleep(400);
  check('퇴장 시 left 프레임', bFrames.some((frame) => frame.t === 'left'));

  b.close();
  c.close();
  await sleep(200);

  console.log(failures === 0 ? '\n모든 확인 통과 ✅' : `\n${failures}건 실패 ❌`);
  process.exit(failures === 0 ? 0 : 1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
