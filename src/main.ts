import './style.css';
import * as THREE from 'three';
import { Game, verdictLabel, type BannerTone } from './game/game';
import type { HoleSpec, PlayerIdentity, PlayerSnapshot, RoundResult } from './game/types';
import { BALL_COLORS, EMOJIS, randomNickname } from './game/constants';
import { HOLES } from './game/courses';
import { AudioEngine } from './game/audio';
import { createRealtime } from './net/realtime';
import { InputController } from './game/input';
import { Lobby, type LobbyPeer } from './lobby/lobby';

function $(id: string): HTMLElement {
  const element = document.getElementById(id);
  if (!element) throw new Error(`#${id} 요소를 찾을 수 없습니다`);
  return element;
}

function $button(id: string): HTMLButtonElement {
  return $(id) as HTMLButtonElement;
}

// ---------------------------------------------------------------- 3D 기본 세팅

const canvas = $('scene') as HTMLCanvasElement;

let renderer: THREE.WebGLRenderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
} catch {
  const message = document.createElement('div');
  message.style.cssText =
    'position:fixed;inset:0;display:grid;place-items:center;padding:32px;text-align:center;font-weight:700;background:#eaf7ff;color:#16323b;z-index:99';
  message.textContent = '이 브라우저에서는 3D 대기실을 실행할 수 없어요. 최신 Chrome·Safari·Edge에서 열어주세요.';
  document.body.appendChild(message);
  throw new Error('WebGL unavailable');
}

renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const camera = new THREE.PerspectiveCamera(56, 1, 0.1, 260);

/** 플레이룸(미니골프) 씬 */
const gameScene = new THREE.Scene();
gameScene.background = new THREE.Color(0xbfe6ff);
gameScene.fog = new THREE.Fog(0xbfe6ff, 30, 68);

const gameHemi = new THREE.HemisphereLight(0xffffff, 0x9fce87, 1.05);
gameScene.add(gameHemi);

const gameSun = new THREE.DirectionalLight(0xfff4e0, 2.0);
gameSun.position.set(7, 13, 9);
gameSun.castShadow = true;
gameSun.shadow.mapSize.set(1024, 1024);
gameSun.shadow.camera.left = -14;
gameSun.shadow.camera.right = 14;
gameSun.shadow.camera.top = 14;
gameSun.shadow.camera.bottom = -14;
gameSun.shadow.camera.near = 0.5;
gameSun.shadow.camera.far = 46;
gameSun.shadow.bias = -0.0006;
gameSun.shadow.normalBias = 0.02;
gameScene.add(gameSun);
gameScene.add(gameSun.target);

const gameFill = new THREE.DirectionalLight(0xbfe4ff, 0.35);
gameFill.position.set(-8, 6, -10);
gameScene.add(gameFill);

/** 대기실(클럽하우스) 씬 */
const lobbyScene = new THREE.Scene();
lobbyScene.background = new THREE.Color(0xcdeeff);
lobbyScene.fog = new THREE.Fog(0xcdeeff, 46, 104);

const lobbyHemi = new THREE.HemisphereLight(0xffffff, 0x9ad07a, 1.2);
lobbyScene.add(lobbyHemi);

const lobbySun = new THREE.DirectionalLight(0xfff6e2, 2.1);
lobbySun.position.set(12, 18, 10);
lobbySun.castShadow = true;
lobbySun.shadow.mapSize.set(1536, 1536);
lobbySun.shadow.camera.left = -22;
lobbySun.shadow.camera.right = 22;
lobbySun.shadow.camera.top = 22;
lobbySun.shadow.camera.bottom = -22;
lobbySun.shadow.camera.near = 0.5;
lobbySun.shadow.camera.far = 60;
lobbySun.shadow.bias = -0.0005;
lobbySun.shadow.normalBias = 0.03;
lobbyScene.add(lobbySun);
lobbyScene.add(lobbySun.target);

const lobbyFill = new THREE.DirectionalLight(0xd6ecff, 0.4);
lobbyFill.position.set(-12, 8, -14);
lobbyScene.add(lobbyFill);

// ---------------------------------------------------------------- 게임/오디오/네트워크

const audio = new AudioEngine();
const realtime = createRealtime();

const banner = $('banner');
const bannerTitle = $('banner-title');
const bannerSub = $('banner-sub');
const toast = $('toast');
const hud = $('hud');
const lobbyHud = $('lobby-hud');
const entry = $('entry');
const scorecard = $('scorecard');
const help = $('help');
const fadeEl = $('fade');
const gateButton = $button('btn-gate');

let bannerTimer = 0;
let toastTimer = 0;

function showBanner(title: string, sub = '', tone: BannerTone = 'coral'): void {
  bannerTitle.textContent = title;
  bannerSub.textContent = sub;
  banner.className = `banner ${tone === 'coral' ? '' : tone}`.trim();
  banner.classList.remove('hidden');
  banner.style.animation = 'none';
  void banner.offsetWidth;
  banner.style.animation = '';
  window.clearTimeout(bannerTimer);
  bannerTimer = window.setTimeout(() => banner.classList.add('hidden'), 2400);
}

function showToast(text: string): void {
  toast.textContent = text;
  toast.classList.remove('hidden');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.add('hidden'), 2200);
}

// ---------------------------------------------------------------- 화면 모드

type Mode = 'landing' | 'lobby' | 'game';

let mode: Mode = 'landing';
let identity: PlayerIdentity | null = null;
let transitioning = false;

function fadeTo(action: () => void): void {
  transitioning = true;
  fadeEl.classList.add('on');
  window.setTimeout(() => {
    action();
    window.setTimeout(() => fadeEl.classList.remove('on'), 70);
    transitioning = false;
  }, 200);
}

// ---------------------------------------------------------------- 게임/대기실

const game = new Game({
  scene: gameScene,
  camera,
  audio,
  realtime,
  events: {
    onHole: (spec: HoleSpec) => {
      $('hole-no').textContent = `${spec.index + 1}홀`;
      $('hole-par').textContent = `Par ${spec.par}`;
      $('hole-name').textContent = spec.name;
      $('hole-hint').textContent = spec.hint;
      $('stroke-count').textContent = '0';
      $('power-fill').style.width = '0%';
      $('power-hint').textContent = '공을 뒤로 당겨 퍼팅';
      focusSun(spec);
      renderPeers(game.getPeers());
    },
    onStroke: (strokes: number) => {
      $('stroke-count').textContent = String(strokes);
    },
    onAim: (power: number, active: boolean) => {
      const fillEl = $('power-fill');
      fillEl.style.width = `${Math.round(power * 100)}%`;
      $('power-hint').textContent = active
        ? `파워 ${Math.round(power * 100)}% · 놓으면 퍼팅`
        : '공을 뒤로 당겨 퍼팅';
    },
    onHoled: (holeIndex: number, strokes: number, label: string) => {
      if (mode !== 'game') return;
      const spec = HOLES[holeIndex];
      const isGreat = strokes <= spec.par;
      showBanner(`${label}!`, `${holeIndex + 1}홀 · ${strokes}타 (Par ${spec.par})`, isGreat ? 'good' : 'coral');
    },
    onPenalty: (kind, strokes) => {
      if (mode !== 'game') return;
      showToast(kind === 'water' ? `워터 해저드! +1벌타 (${strokes}타)` : `아웃! 공을 되돌렸어요 (${strokes}타)`);
    },
    onBanner: (title: string, sub: string, tone: BannerTone) => {
      if (mode !== 'game') return;
      showBanner(title, sub, tone);
    },
    onToast: (text: string) => {
      if (mode !== 'game') return;
      showToast(text);
    },
    onPeers: (peers: PlayerSnapshot[]) => renderPeers(peers),
    onRemoteHoled: (name: string, hole: number, strokes: number) => {
      if (mode !== 'game') return;
      showBanner(`${name}님 홀인!`, `${hole + 1}홀 · ${strokes}타`, 'plain');
    },
    onFinish: (result: RoundResult) => {
      if (mode !== 'game') return;
      showScorecard(result);
    },
  },
});

const lobby = new Lobby({
  scene: lobbyScene,
  camera,
  audio,
  realtime,
  canvas,
  events: {
    onEnterPlayroom: () => enterPlayroom(),
    onGateChange: (near: boolean) => gateButton.classList.toggle('hidden', !near),
    onPlayers: (lobbyPeers: LobbyPeer[], playroomPeers: LobbyPeer[]) =>
      renderLobbyPeople(lobbyPeers, playroomPeers),
    onToast: (text: string) => {
      if (mode === 'lobby') showToast(text);
    },
  },
});

focusSun(HOLES[0]);

const input = new InputController(canvas, game, {
  onToggleMute: () => toggleMute(),
  onToggleHelp: () => help.classList.toggle('hidden'),
  isActive: () => mode === 'game',
});

// ---------------------------------------------------------------- 입장 화면

const nicknameInput = $('nickname') as HTMLInputElement;
nicknameInput.value = randomNickname();

let selectedColor: string = BALL_COLORS[0].hex;

const colorsEl = $('colors');
BALL_COLORS.forEach((color, index) => {
  const swatch = document.createElement('button');
  swatch.type = 'button';
  swatch.className = 'swatch';
  swatch.style.background = color.hex;
  swatch.title = color.name;
  swatch.setAttribute('aria-label', color.name);
  swatch.setAttribute('aria-pressed', String(index === 0));
  swatch.addEventListener('click', () => {
    selectedColor = color.hex;
    colorsEl.querySelectorAll('.swatch').forEach((el) => el.setAttribute('aria-pressed', 'false'));
    swatch.setAttribute('aria-pressed', 'true');
    audio.unlock();
    audio.ui();
  });
  colorsEl.appendChild(swatch);
});

$button('btn-dice').addEventListener('click', () => {
  nicknameInput.value = randomNickname();
  audio.unlock();
  audio.ui();
});

function createId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `p-${Math.random().toString(36).slice(2, 10)}`;
}

function startLobby(): void {
  if (mode !== 'landing' || transitioning) return;
  const name = (nicknameInput.value.trim() || randomNickname()).slice(0, 12);
  identity = { id: createId(), name, color: selectedColor };

  audio.unlock();
  audio.ui();

  mode = 'lobby';
  entry.classList.add('hidden');
  hud.classList.add('hidden');
  lobbyHud.classList.remove('hidden');
  $('lobby-me-name').textContent = name;
  ($('lobby-me-dot') as HTMLElement).style.background = selectedColor;

  lobby.enter(identity);
  renderLobbyPeople([], []);
  showBanner('클럽하우스 입장', `${name}님, 이모지로 인사하며 광장을 둘러보세요`, 'plain');
}

$button('btn-teeoff').addEventListener('click', startLobby);
nicknameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') startLobby();
});

// ---------------------------------------------------------------- 플레이룸 입장/복귀

function enterPlayroom(): void {
  if (!identity || mode !== 'lobby' || transitioning) return;
  const me = identity;
  audio.unlock();
  audio.portal();
  fadeTo(() => {
    hud.classList.remove('hidden');
    lobbyHud.classList.add('hidden');
    $('me-name').textContent = me.name;
    ($('me-dot') as HTMLElement).style.background = me.color;
    game.join(me);
    lobby.setMode('idle');
    mode = 'game';
    showBanner('플레이룸 입장', '3홀 미니골프 · 1홀부터 시작합니다', 'plain');
  });
}

function returnToLobby(): void {
  if (!identity || mode !== 'game' || transitioning) return;
  audio.unlock();
  audio.ui();
  fadeTo(() => {
    scorecard.classList.add('hidden');
    hud.classList.add('hidden');
    lobbyHud.classList.remove('hidden');
    game.exitToLobby();
    mode = 'lobby';
    lobby.returnFromPlayroom();
    gateButton.classList.add('hidden');
    showToast('대기실로 돌아왔어요 🏛️');
  });
}

gateButton.addEventListener('click', () => {
  audio.unlock();
  audio.ui();
  lobby.requestPlayroom();
});

// ---------------------------------------------------------------- HUD 조작

const soundButton = $button('btn-sound');
const lobbySoundButton = $button('btn-lobby-sound');

function toggleMute(): void {
  audio.unlock();
  audio.setMuted(!audio.muted);
  syncSoundButton();
}

function syncSoundButton(): void {
  const icon = audio.muted ? '🔇' : '🔊';
  [soundButton, lobbySoundButton].forEach((button) => {
    button.textContent = icon;
    button.classList.toggle('off', audio.muted);
  });
}

soundButton.addEventListener('click', toggleMute);
lobbySoundButton.addEventListener('click', toggleMute);
syncSoundButton();

$button('btn-help').addEventListener('click', () => {
  audio.unlock();
  help.classList.remove('hidden');
});
$button('btn-lobby-help').addEventListener('click', () => {
  audio.unlock();
  help.classList.remove('hidden');
});
$button('btn-help-close').addEventListener('click', () => help.classList.add('hidden'));

document.querySelectorAll<HTMLButtonElement>('[data-emoji]').forEach((button) => {
  button.addEventListener('click', () => {
    const emoji = button.dataset.emoji ?? EMOJIS[0];
    audio.unlock();
    game.sendEmoji(emoji);
  });
});

document.querySelectorAll<HTMLButtonElement>('[data-lobby-emoji]').forEach((button) => {
  button.addEventListener('click', () => {
    const emoji = button.dataset.lobbyEmoji ?? '👋';
    audio.unlock();
    lobby.sendEmoji(emoji);
  });
});

$button('btn-lobby').addEventListener('click', returnToLobby);
$button('btn-back-lobby').addEventListener('click', returnToLobby);

// ---------------------------------------------------------------- 참가자 목록

const playersEl = $('players');
let lastPeerSignature = '';

function renderPeers(peers: PlayerSnapshot[]): void {
  const local = game.getLocalSnapshot();
  const signature = JSON.stringify([
    local?.name,
    local?.total,
    local?.hole,
    peers.map((p) => [p.id, p.name, p.color, p.total, p.hole, p.done]),
  ]);
  if (signature === lastPeerSignature) return;
  lastPeerSignature = signature;

  playersEl.replaceChildren();
  if (local) playersEl.appendChild(buildPlayerRow(local, true));
  peers.forEach((peer) => playersEl.appendChild(buildPlayerRow(peer, false)));
}

function buildPlayerRow(snapshot: PlayerSnapshot, isMe: boolean): HTMLElement {
  const row = document.createElement('div');
  row.className = `player-row${isMe ? ' me' : ''}`;

  const dot = document.createElement('i');
  dot.className = 'dot';
  dot.style.background = snapshot.color;

  const name = document.createElement('span');
  name.textContent = isMe ? `${snapshot.name} (나)` : snapshot.name;

  const score = document.createElement('span');
  score.className = 'score';
  score.textContent = snapshot.done ? '완료' : `${snapshot.total}타`;

  row.append(dot, name, score);
  return row;
}

// ---------------------------------------------------------------- 대기실 사람 목록

const lobbyPlayersEl = $('lobby-players');

function renderLobbyPeople(lobbyPeers: LobbyPeer[], playroomPeers: LobbyPeer[]): void {
  const meName = identity?.name ?? '플레이어';
  const meColor = identity?.color ?? BALL_COLORS[0].hex;
  $('lobby-count').textContent = `대기실 ${1 + lobbyPeers.length}명 · 플레이룸 ${playroomPeers.length}명`;

  lobbyPlayersEl.replaceChildren();
  lobbyPlayersEl.appendChild(buildLobbyRow(meName, meColor, false));
  lobbyPeers.forEach((peer) => {
    lobbyPlayersEl.appendChild(buildLobbyRow(peer.name, peer.color, false));
  });
  playroomPeers.forEach((peer) => {
    lobbyPlayersEl.appendChild(buildLobbyRow(peer.name, peer.color, true));
  });
}

function buildLobbyRow(name: string, color: string, inPlayroom: boolean): HTMLElement {
  const row = document.createElement('div');
  row.className = `player-row${inPlayroom ? ' in-playroom' : ''}`;

  const dot = document.createElement('i');
  dot.className = 'dot';
  dot.style.background = color;

  const label = document.createElement('span');
  label.textContent = inPlayroom ? `⛳ ${name}` : name;

  row.append(dot, label);
  return row;
}

// ---------------------------------------------------------------- 스코어카드

const copyHint = $('copy-hint');
let lastResult: RoundResult | null = null;

function resultToText(result: RoundResult): string {
  const lines = [`⛳ 원온 미니골프 기록 — ${result.name}`];
  result.holes.forEach((hole, index) => {
    const spec = HOLES[index];
    const strokes = hole.strokes ?? 0;
    lines.push(`${index + 1}홀 (Par ${hole.par}, ${spec.name}) · ${strokes}타 · ${verdictLabel(strokes, hole.par)}`);
  });
  const diff = result.diff === 0 ? '이븐파' : result.diff < 0 ? `${Math.abs(result.diff)}언더파` : `+${result.diff}`;
  lines.push(`합계 ${result.total}타 / Par ${result.par} (${diff})`);
  lines.push('oneone minigolf');
  return lines.join('\n');
}

function showScorecard(result: RoundResult): void {
  lastResult = result;
  copyHint.textContent = '';

  $('score-sub').textContent = `${result.name} · 총 ${result.total}타 (Par ${result.par})`;

  const body = $('score-body');
  body.replaceChildren();
  result.holes.forEach((hole, index) => {
    const strokes = hole.strokes ?? 0;
    const label = verdictLabel(strokes, hole.par);
    const tr = document.createElement('tr');

    const th = document.createElement('td');
    th.textContent = `${index + 1}홀`;

    const par = document.createElement('td');
    par.textContent = String(hole.par);

    const count = document.createElement('td');
    count.textContent = String(strokes);

    const verdict = document.createElement('td');
    verdict.textContent = label;
    verdict.className = `verdict${strokes < hole.par ? ' under' : ''}`;

    tr.append(th, par, count, verdict);
    body.appendChild(tr);
  });

  $('score-total').textContent = String(result.total);
  const verdictEl = $('score-verdict');
  verdictEl.textContent = result.verdict;
  verdictEl.className = `verdict${result.diff < 0 ? ' under' : ''}`;

  scorecard.classList.remove('hidden');
}

async function copyResult(): Promise<void> {
  if (!lastResult) return;
  const text = resultToText(lastResult);
  try {
    await navigator.clipboard.writeText(text);
    copyHint.textContent = '복사했어요! 붙여넣기 해보세요.';
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(area);
    copyHint.textContent = ok ? '복사했어요! 붙여넣기 해보세요.' : '복사가 막혔어요. 기록을 직접 선택해 주세요.';
  }
}

$button('btn-copy').addEventListener('click', () => {
  void copyResult();
});

$button('btn-again').addEventListener('click', () => {
  scorecard.classList.add('hidden');
  copyHint.textContent = '';
  audio.unlock();
  audio.ui();
  game.restart();
});

// ---------------------------------------------------------------- 카메라/조명/루프

function focusSun(spec: HoleSpec): void {
  const [cx, cz] = spec.cup;
  gameSun.position.set(cx + 7, 13, cz + 9);
  gameSun.target.position.set(cx, 0, cz);
  gameSun.target.updateMatrixWorld();
}

function resize(): void {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height, false);
  camera.aspect = width / Math.max(1, height);
  camera.fov = width < 560 ? 64 : 56;
  camera.updateProjectionMatrix();
}

window.addEventListener('resize', resize);
window.addEventListener('orientationchange', () => window.setTimeout(resize, 120));
resize();

let last = performance.now();

function frame(now: number): void {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;

  if (mode === 'game') {
    game.update(dt);
    renderer.render(gameScene, camera);
  } else {
    lobby.update(dt);
    renderer.render(lobbyScene, camera);
  }

  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);

// 게임 HUD의 남은 거리/타수는 프레임과 무관하게 가볍게 갱신
window.setInterval(() => {
  if (mode !== 'game') return;
  $('hole-dist').textContent = game.cupDistance().toFixed(1);
  $('stroke-count').textContent = String(game.currentStrokes);
}, 180);

window.addEventListener('beforeunload', () => input.dispose());
