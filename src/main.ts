import './style.css';
import * as THREE from 'three';
import { Game, verdictLabel, VIEW_LABEL, type BannerTone, type GaugeView, type ViewMode } from './game/game';
import type { HoleSpec, PlayerIdentity, PlayerSnapshot, RoundResult, SurfaceKind } from './game/types';
import { BALL_COLORS, EMOJIS, randomNickname } from './game/constants';
import { HOLES } from './game/courses';
import { AudioEngine } from './game/audio';
import { createRealtime } from './net/realtime';
import { InputController } from './game/input';
import { bindHoldControl } from './game/swing-input';
import { Lobby, type LobbyPeer } from './lobby/lobby';
import { SURFACE_LABEL, CLUBS, getClub, type ClubId } from './game/clubs';
import { applyRendererLook, buildSky } from './game/environment';

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

applyRendererLook(renderer);
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 320);

/** 플레이룸(미니골프) 씬 */
const gameScene = new THREE.Scene();
gameScene.background = new THREE.Color(0xbfe6ff);
gameScene.fog = new THREE.Fog(0xd6edff, 90, 230);
buildSky(gameScene, {
  radius: 170,
  cloudCount: 10,
  sunDirection: new THREE.Vector3(0.42, 0.66, 0.46),
});

const gameHemi = new THREE.HemisphereLight(0xe6f6ff, 0x7ea76b, 0.62);
gameScene.add(gameHemi);

const gameSun = new THREE.DirectionalLight(0xfff1d6, 2.2);
gameSun.position.set(18, 26, 16);
gameSun.castShadow = true;
gameSun.shadow.mapSize.set(2048, 2048);
gameSun.shadow.camera.left = -28;
gameSun.shadow.camera.right = 28;
gameSun.shadow.camera.top = 28;
gameSun.shadow.camera.bottom = -28;
gameSun.shadow.camera.near = 0.5;
gameSun.shadow.camera.far = 110;
gameSun.shadow.bias = -0.0004;
gameSun.shadow.normalBias = 0.035;
gameScene.add(gameSun);
gameScene.add(gameSun.target);

const gameFill = new THREE.DirectionalLight(0xc6e4ff, 0.45);
gameFill.position.set(-14, 10, -18);
gameScene.add(gameFill);

// ---------------------------------------------------------------- 대기실 씬

const lobbyScene = new THREE.Scene();
lobbyScene.background = new THREE.Color(0xcdeeff);
lobbyScene.fog = new THREE.Fog(0xd9f1ff, 70, 190);
buildSky(lobbyScene, {
  radius: 190,
  cloudCount: 8,
  sunDirection: new THREE.Vector3(0.5, 0.6, 0.42),
});

const lobbyHemi = new THREE.HemisphereLight(0xffffff, 0x93c878, 0.7);
lobbyScene.add(lobbyHemi);

const lobbySun = new THREE.DirectionalLight(0xfff5e0, 2.1);
lobbySun.position.set(16, 22, 12);
lobbySun.castShadow = true;
lobbySun.shadow.mapSize.set(2048, 2048);
lobbySun.shadow.camera.left = -26;
lobbySun.shadow.camera.right = 26;
lobbySun.shadow.camera.top = 26;
lobbySun.shadow.camera.bottom = -26;
lobbySun.shadow.camera.near = 0.5;
lobbySun.shadow.camera.far = 80;
lobbySun.shadow.bias = -0.0004;
lobbySun.shadow.normalBias = 0.04;
lobbyScene.add(lobbySun);
lobbyScene.add(lobbySun.target);

const lobbyFill = new THREE.DirectionalLight(0xd6ecff, 0.5);
lobbyFill.position.set(-14, 9, -16);
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

const gaugeEl = $('gauge');
const gaugeFill = $('gauge-fill');
const gaugeMarker = $('gauge-marker');
const gaugeTarget = $('gauge-target');
const gaugePower = $('gauge-power');
const gaugeHint = $('gauge-hint');
const livePower = $('live-power');
const liveDist = $('live-dist');
const liveGoal = $('live-goal');
const rangeTarget = $('range-target');
const rangeMax = $('range-max');
const rangeClub = $('range-club');
const swingButton = $button('btn-swing');
const swingLabel = $('swing-label');
const swingSub = $('swing-sub');
const clubRow = $('clubs');
const shotDist = $('shot-dist');
const shotLie = $('shot-lie');
const shotClub = $('shot-club');
const viewButton = $button('btn-view');
const viewLabel = $('view-label');
const aimLeft = $button('btn-aim-left');
const aimRight = $button('btn-aim-right');

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
  bannerTimer = window.setTimeout(() => banner.classList.add('hidden'), 2500);
}

function showToast(text: string): void {
  toast.textContent = text;
  toast.classList.remove('hidden');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.add('hidden'), 2300);
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

// ---------------------------------------------------------------- HUD: 게이지/클럽

const gaugePercent = (value: number): number => ((value + 0.25) / 1.25) * 100;

let gaugeLive = false;

const meters = (value: number): string => `${(Math.round(value * 10) / 10).toFixed(1)}m`;

function renderRange(clubId: ClubId, distance: number, clubMax: number): void {
  const club = getClub(clubId);
  rangeTarget.textContent = meters(distance);
  rangeMax.textContent = meters(clubMax);
  rangeClub.textContent = club.code;
}

function renderTargetMarker(needed: number, distance: number, clubMax: number): void {
  const short = needed > 1.02;
  const gap = Math.max(1, Math.round(distance - clubMax));
  gaugeTarget.style.left = `${gaugePercent(short ? 1 : Math.max(0, needed))}%`;
  gaugeTarget.classList.toggle('short', short);
  liveGoal.classList.toggle('short', short);
  liveGoal.textContent = short
    ? `🎯 ${meters(distance)} · ${gap}m 부족`
    : `🎯 목표 ${Math.round(Math.min(1, Math.max(0, needed)) * 100)}%`;
}

function renderGauge(view: GaugeView): void {
  const value = Math.max(-0.25, Math.min(1, view.value));
  gaugeMarker.style.left = `${gaugePercent(value)}%`;

  const fillAmount = view.phase === 'power' ? value : view.power;
  gaugeFill.style.width = `${Math.max(0, fillAmount) * 80}%`;

  const showPower = view.phase === 'impact' || view.phase === 'done';
  gaugePower.style.display = showPower ? 'block' : 'none';
  gaugePower.style.left = `${gaugePercent(view.power)}%`;

  gaugeLive = view.phase === 'power' || view.phase === 'impact';
  gaugeEl.classList.toggle('live', gaugeLive);
  gaugeEl.classList.toggle('charging', view.phase === 'power');
  gaugeEl.classList.toggle('hit', view.phase === 'impact' && Math.abs(view.value) <= 0.105);

  gaugeHint.textContent = view.hint;

  // 목표 거리까지 필요한 파워 위치에 핀 마커 + 현재 파워 % · 예상 비거리
  renderTargetMarker(view.neededPower, view.distance, view.clubMax);
  gaugeTarget.classList.toggle('live', gaugeLive);
  livePower.textContent = `${view.powerPercent}%`;
  liveDist.textContent = meters(view.estimate);
  renderRange(view.club, view.distance, view.clubMax);
  shotClub.textContent = `${getClub(view.club).code} ${getClub(view.club).name}`;

  if (view.phase === 'idle' || view.phase === 'done') {
    swingLabel.textContent = '스윙!';
    swingSub.textContent = '꾹 눌러 파워';
    swingButton.classList.remove('armed', 'impact');
  } else if (view.phase === 'power') {
    swingLabel.textContent = '놓으면 확정';
    swingSub.textContent = `${view.powerPercent}%`;
    swingButton.classList.add('armed');
    swingButton.classList.remove('impact');
  } else {
    swingLabel.textContent = '임팩트!';
    swingSub.textContent = '존에서 탭';
    swingButton.classList.remove('armed');
    swingButton.classList.add('impact');
  }

  const busy = view.phase === 'power' || view.phase === 'impact';
  clubRow.querySelectorAll<HTMLButtonElement>('.club-chip').forEach((button) => {
    button.disabled = busy;
  });
}

function renderClub(clubId: ClubId, recommended: ClubId, distance: number, surface: SurfaceKind): void {
  clubRow.querySelectorAll<HTMLButtonElement>('.club-chip').forEach((button) => {
    const id = button.dataset.club as ClubId | undefined;
    button.classList.toggle('active', id === clubId);
    // 추천 클럽은 지금 골라져 있어도 항상 '추천' 뱃지를 보여준다
    button.classList.toggle('recommended', id === recommended);
    button.setAttribute('aria-pressed', String(id === clubId));
  });
  const club = getClub(clubId);
  shotClub.textContent = `${club.code} ${club.name}`;
  shotLie.textContent = SURFACE_LABEL[surface];
  shotDist.textContent = `${distance < 10 ? distance.toFixed(1) : Math.round(distance)}m`;
}

// 번호별 클럽 버튼 (1W · 3W · 5I · 7I · 9I · PW · SW · PT)
CLUBS.forEach((club) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'club-chip';
  button.dataset.club = club.id;
  button.title = `${club.name} · ${club.note}`;
  button.setAttribute('aria-label', `${club.code} ${club.name}`);

  const code = document.createElement('b');
  code.textContent = club.code;
  const name = document.createElement('span');
  name.textContent = club.short;
  const rec = document.createElement('i');
  rec.className = 'rec-tag';
  rec.textContent = '추천';
  button.append(code, name, rec);
  clubRow.appendChild(button);
});

clubRow.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  const button = target.closest<HTMLButtonElement>('.club-chip');
  if (!button) return;
  const id = button.dataset.club as ClubId | undefined;
  if (!id) return;
  audio.unlock();
  game.setClub(id);
});

function holdAim(button: HTMLButtonElement, delta: number): void {
  let interval = 0;
  const start = (event: Event) => {
    event.preventDefault?.();
    audio.unlock();
    game.aimBy(delta);
    window.clearInterval(interval);
    interval = window.setInterval(() => game.aimBy(delta), 90);
  };
  const stop = () => {
    window.clearInterval(interval);
    interval = 0;
  };
  button.addEventListener('pointerdown', start);
  button.addEventListener('pointerup', stop);
  button.addEventListener('pointerleave', stop);
  button.addEventListener('pointercancel', stop);
}
holdAim(aimLeft, -0.045);
holdAim(aimRight, 0.045);

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
      $('hole-dist').textContent = '0';
      focusSun(spec);
      renderPeers(game.getPeers());
    },
    onStroke: (strokes: number) => {
      $('stroke-count').textContent = String(strokes);
    },
    onGauge: (view: GaugeView) => {
      if (mode !== 'game') return;
      renderGauge(view);
    },
    onClub: (clubId: ClubId, recommended: ClubId, distance: number, surface: SurfaceKind) => {
      if (mode !== 'game') return;
      renderClub(clubId, recommended, distance, surface);
    },
    onView: (mode_: ViewMode) => {
      viewLabel.textContent = VIEW_LABEL[mode_];
      viewButton.classList.toggle('target', mode_ === 'target');
      viewButton.classList.toggle('top', mode_ === 'top');
    },
    onShot: (plan, club) => {
      if (mode !== 'game') return;
      if (plan.grade === 'perfect') {
        showToast(`Perfect! ${club.name} 풀 임팩트`);
      } else if (plan.grade === 'good') {
        showToast(`Good · 살짝 ${plan.error > 0 ? '훅' : '슬라이스'}`);
      } else {
        showToast(`Miss · ${plan.error > 0 ? '훅' : '슬라이스'}가 크게 났어요`);
      }
    },
    onRest: (distance: number, surface: SurfaceKind, strokes: number) => {
      if (mode !== 'game') return;
      shotDist.textContent = `${distance < 10 ? distance.toFixed(1) : Math.round(distance)}m`;
      shotLie.textContent = SURFACE_LABEL[surface];
      $('stroke-count').textContent = String(strokes);
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

// 스윙 버튼·게이지: 누르고 있는 동안 파워가 차오르고, 떼는 순간 확정된다
bindHoldControl(swingButton, game, { onPress: () => audio.unlock() });
bindHoldControl(gaugeEl, game, { onPress: () => audio.unlock() });

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
  onToggleHelp: () => openOnboarding(),
  onToggleView: () => cycleView(),
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
    mode = 'game';
    game.join(me);
    lobby.setMode('idle');
    renderGauge({
      phase: 'idle',
      value: 0,
      power: 0,
      hint: '스윙! 을 꾹 누르면 파워가 차요',
      club: game.currentClub.id,
      distance: game.cupDistance(),
      clubMax: game.clubMax,
      powerPercent: 0,
      estimate: 0,
      neededPower: game.neededPower,
    });
    showBanner('플레이룸 입장', '3홀 · 꾹 눌러 파워, 떼고 타이밍 탭!', 'plain');
    // 첫 입장(또는 ? 버튼)에서만 3단계 가이드를 보여준다
    if (!onboardingSeen()) openOnboarding();
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

function cycleView(): void {
  if (mode !== 'game') return;
  audio.unlock();
  const next = game.cycleView();
  showToast(`🔭 ${VIEW_LABEL[next]}${next === 'back' ? '' : next === 'target' ? ' · 착지 지점 보기' : ' · 코스 전체 보기'}`);
}

viewButton.addEventListener('click', cycleView);

$button('btn-help').addEventListener('click', () => {
  audio.unlock();
  openOnboarding();
});
$button('btn-lobby-help').addEventListener('click', () => {
  audio.unlock();
  help.classList.remove('hidden');
});
$button('btn-help-close').addEventListener('click', () => help.classList.add('hidden'));

// ---------------------------------------------------------------- 첫 입장 가이드

const ONBOARDING_KEY = 'oneone:onboarding:v3';
const onboarding = $('onboarding');
const onbSteps = Array.from(onboarding.querySelectorAll<HTMLElement>('.onb-step'));
const onbDots = Array.from($('onb-dots').querySelectorAll<HTMLElement>('i'));
const onbBack = $button('btn-onb-back');
const onbNext = $button('btn-onb-next');
let onbStep = 0;

function onboardingSeen(): boolean {
  try {
    return localStorage.getItem(ONBOARDING_KEY) === '1';
  } catch {
    return false;
  }
}

function markOnboardingSeen(): void {
  try {
    localStorage.setItem(ONBOARDING_KEY, '1');
  } catch {
    /* 저장 실패는 무시 (매번 다시 보여줄 뿐) */
  }
}

function renderOnbStep(): void {
  onbSteps.forEach((step, index) => step.classList.toggle('active', index === onbStep));
  onbDots.forEach((dot, index) => dot.classList.toggle('on', index === onbStep));
  onbBack.disabled = onbStep === 0;
  onbBack.style.visibility = onbStep === 0 ? 'hidden' : 'visible';
  onbNext.textContent = onbStep === onbSteps.length - 1 ? '스윙 시작!' : '다음';
}

function openOnboarding(): void {
  onbStep = 0;
  renderOnbStep();
  onboarding.classList.remove('hidden');
}

function closeOnboarding(): void {
  onboarding.classList.add('hidden');
  markOnboardingSeen();
}

onbBack.addEventListener('click', () => {
  if (onbStep === 0) return;
  onbStep -= 1;
  audio.ui();
  renderOnbStep();
});

onbNext.addEventListener('click', () => {
  audio.unlock();
  audio.ui();
  if (onbStep >= onbSteps.length - 1) {
    closeOnboarding();
    return;
  }
  onbStep += 1;
  renderOnbStep();
});

$button('btn-onb-skip').addEventListener('click', closeOnboarding);
$button('btn-onb-help').addEventListener('click', () => {
  closeOnboarding();
  help.classList.remove('hidden');
});

renderOnbStep();

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
  const [cx, cz] = spec.green ? [spec.green.x, spec.green.z] : spec.cup;
  gameSun.position.set(cx + 20, 30, cz + 18);
  gameSun.target.position.set(cx, 0, cz);
  gameSun.target.updateMatrixWorld();
}

function resize(): void {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height, false);
  camera.aspect = width / Math.max(1, height);
  camera.fov = width < 560 ? 66 : 55;
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

// HUD의 남은 거리/타수는 프레임과 무관하게 가볍게 갱신
window.setInterval(() => {
  if (mode !== 'game') return;
  if (gaugeLive) return;
  const distance = game.cupDistance();
  shotDist.textContent = `${distance < 10 ? distance.toFixed(1) : Math.round(distance)}m`;
  $('hole-dist').textContent = distance < 10 ? distance.toFixed(1) : String(Math.round(distance));
  $('stroke-count').textContent = String(game.currentStrokes);
  shotLie.textContent = SURFACE_LABEL[game.surface];
  renderRange(game.currentClub.id, distance, game.clubMax);
  livePower.textContent = '0%';
  liveDist.textContent = meters(0);
  renderTargetMarker(game.neededPower, distance, game.clubMax);
}, 200);

window.addEventListener('beforeunload', () => input.dispose());
