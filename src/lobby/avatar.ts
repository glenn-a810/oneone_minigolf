import * as THREE from 'three';
import { PALETTE, blob, buildProp, column, lump, plank, type PropPart } from '../game/props';

/** 대기실 캐릭터(골퍼)와 이름표·이모지 말풍선 스프라이트. */

const SKIN = 0xffdfb8;
const SKIN_DARK = 0xe9bc90;
const INK = 0x243238;
const TROUSER = 0xc2ab7d;
const TROUSER_DARK = 0xa08a60;

/** 클럽 종류 — 홀드한 채의 헤드 모양이 달라진다 */
export type ClubLook = 'driver' | 'iron' | 'putter';

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
): void {
  const radius = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

export interface LabelOptions {
  scale?: [number, number];
  canvasWidth?: number;
  canvasHeight?: number;
  fontSize?: number;
  bg?: string;
}

/** 닉네임 말풍선 스프라이트 (캔버스 → 텍스처). DOM 이 없는 환경에서는 null. */
export function createLabelSprite(
  text: string,
  dotColor: string,
  options: LabelOptions = {},
): THREE.Sprite | null {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = options.canvasWidth ?? 320;
  canvas.height = options.canvasHeight ?? 96;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const fontSize = options.fontSize ?? 40;
  const label = text.length > 10 ? `${text.slice(0, 10)}…` : text;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = `800 ${fontSize}px "Pretendard", -apple-system, system-ui, sans-serif`;

  const textWidth = ctx.measureText(label).width;
  const hasDot = Boolean(dotColor);
  const width = Math.min(canvas.width - 8, textWidth + fontSize * (hasDot ? 1.75 : 0.9));
  const height = fontSize * 1.5;
  const x = (canvas.width - width) / 2;
  const y = (canvas.height - height) / 2;

  ctx.fillStyle = options.bg ?? 'rgba(20, 44, 52, 0.82)';
  roundRect(ctx, x, y, width, height, height / 2);
  ctx.fill();

  let textX = x + fontSize * 0.5;
  if (hasDot) {
    ctx.fillStyle = dotColor;
    ctx.beginPath();
    ctx.arc(x + height * 0.46, canvas.height / 2, height * 0.17, 0, Math.PI * 2);
    ctx.fill();
    textX = x + height * 0.78 + fontSize * 0.1;
  }

  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, textX, canvas.height / 2 + 1);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false });
  const sprite = new THREE.Sprite(material);
  const scale = options.scale ?? [1.15, 0.345];
  sprite.scale.set(scale[0], scale[1], 1);
  sprite.renderOrder = 3;
  return sprite;
}

const bubbleTextures = new Map<string, THREE.CanvasTexture>();

/** 머리 위로 둥실 떠오르는 이모지 말풍선. 텍스처는 문자별로 캐시한다. */
export function emojiBubbleSprite(char: string): THREE.Sprite | null {
  if (typeof document === 'undefined') return null;

  let texture = bubbleTextures.get(char);
  if (!texture) {
    const canvas = document.createElement('canvas');
    canvas.width = 192;
    canvas.height = 192;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.clearRect(0, 0, 192, 192);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.97)';
    ctx.strokeStyle = 'rgba(22, 50, 59, 0.16)';
    ctx.lineWidth = 4;
    roundRect(ctx, 16, 8, 160, 138, 46);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(80, 141);
    ctx.lineTo(96, 178);
    ctx.lineTo(114, 141);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.97)';
    ctx.fill();

    ctx.font = '92px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(char, 96, 80);

    texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    bubbleTextures.set(char, texture);
  }

  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(0.72, 0.72, 1);
  sprite.renderOrder = 4;
  return sprite;
}

export interface GolferOptions {
  color: string;
  name?: string;
  /** 발밑에 내 캐릭터 표시 링을 그린다 */
  glow?: boolean;
  /** 골프채를 들게 한다 */
  club?: boolean;
  /** 처음 든 클럽 종류 (기본 아이언) */
  clubType?: ClubLook;
}

/**
 * Synty POLYGON 톤의 골퍼.
 *
 * 바이저 모자·얼굴·목·카라 셔츠·소매·벨트·바지·신발·장갑·클럽(샤프트·호젤·헤드)까지
 * 파츠를 나눠 각진 실루엣을 만든다. 파츠는 정점 색상으로 합쳐 드로우콜을 최소화한다.
 */
export class Golfer {
  readonly group = new THREE.Group();

  private readonly root = new THREE.Group();
  private readonly armL = new THREE.Group();
  private readonly armR = new THREE.Group();
  private readonly footL: THREE.Group;
  private readonly footR: THREE.Group;
  private readonly clubHeads: Record<ClubLook, THREE.Group>;
  private readonly ring: THREE.Mesh | null;
  private readonly holdsClub: boolean;
  private label: THREE.Sprite | null = null;
  private readonly disposables: Array<{ dispose: () => void }> = [];
  private phase = Math.random() * Math.PI * 2;
  private clock = Math.random() * 10;
  private addressing = false;
  private swingTime = -1;
  private swingDuration = 0.92;

  constructor(options: GolferOptions) {
    const base = new THREE.Color(options.color);
    const hex = base.getHex();
    const shirt = hex;

    this.root.position.y = 0;
    this.group.add(this.root);

    // 몸통·다리·머리 (색상별로 캐시되는 합성 메시)
    const body = buildProp(`golfer-body-${hex.toString(16)}`, buildBody(shirt));
    body.position.y = 0;
    this.root.add(body);

    // 신발 (걸음/스윙 때 따로 움직인다)
    const shoeParts = buildShoe();
    this.footL = buildProp('golfer-shoe', shoeParts);
    this.footL.position.set(-0.115, 0.075, 0.02);
    this.footR = buildProp('golfer-shoe', shoeParts);
    this.footR.position.set(0.115, 0.075, 0.02);
    this.root.add(this.footL, this.footR);

    // 팔 (어깨를 축으로 스윙)
    this.armL.position.set(-0.245, 1.45, 0);
    this.armR.position.set(0.245, 1.45, 0);
    this.armL.rotation.z = 0.2;
    this.armR.rotation.z = -0.2;
    this.armL.add(buildProp(`golfer-arm-left-${hex.toString(16)}`, buildArm(shirt, true)));
    this.armR.add(buildProp(`golfer-arm-right-${hex.toString(16)}`, buildArm(shirt, false)));
    this.root.add(this.armL, this.armR);

    this.clubHeads = {
      driver: buildProp('golfer-club-head-driver', buildClubHead('driver')),
      iron: buildProp('golfer-club-head-iron', buildClubHead('iron')),
      putter: buildProp('golfer-club-head-putter', buildClubHead('putter')),
    };

    if (options.club) {
      this.holdsClub = true;
      const clubGroup = new THREE.Group();
      clubGroup.add(buildProp('golfer-club', buildShaft()));
      Object.entries(this.clubHeads).forEach(([look, head]) => {
        head.visible = look === (options.clubType ?? 'iron');
        clubGroup.add(head);
      });
      this.armR.add(clubGroup);
      this.armR.rotation.x = -0.3;
    } else {
      this.holdsClub = false;
    }

    // 이름표
    if (options.name) this.setName(options.name, options.color);

    // 내 캐릭터 표시 링
    if (options.glow) {
      const ringMat = this.track(
        new THREE.MeshStandardMaterial({
          color: base,
          emissive: base,
          emissiveIntensity: 1.1,
          transparent: true,
          opacity: 0.9,
          roughness: 0.4,
        }),
      );
      const ringGeo = this.track(new THREE.TorusGeometry(0.46, 0.03, 8, 34));
      this.ring = new THREE.Mesh(ringGeo, ringMat);
      this.ring.rotation.x = -Math.PI / 2;
      this.ring.position.y = 0.02;
      this.group.add(this.ring);
    } else {
      this.ring = null;
    }
  }

  private track<T extends { dispose: () => void }>(item: T): T {
    this.disposables.push(item);
    return item;
  }

  setName(name: string, color: string): void {
    if (this.label) {
      this.group.remove(this.label);
      const material = this.label.material as THREE.SpriteMaterial;
      material.map?.dispose();
      material.dispose();
      this.label = null;
    }
    const label = createLabelSprite(name, color);
    if (label) {
      label.position.set(0, 2.12, 0);
      this.group.add(label);
      this.label = label;
    }
  }

  setVisible(visible: boolean): void {
    this.group.visible = visible;
  }

  /** 든 클럽의 헤드 모양 전환 (드라이버/아이언/퍼터) */
  setClubLook(look: ClubLook): void {
    if (!this.holdsClub) return;
    Object.entries(this.clubHeads).forEach(([key, head]) => {
      head.visible = key === look;
    });
  }

  /** 어드레스 자세 (공 옆에 서서 채를 겨누는 자세) */
  setAddressing(on: boolean): void {
    this.addressing = on;
  }

  /** 백스윙 → 다운스윙 → 팔로우스루 스윙 모션 재생 */
  playSwing(duration = 0.92): void {
    this.swingDuration = Math.max(0.35, duration);
    this.swingTime = 0;
  }

  get isSwinging(): boolean {
    return this.swingTime >= 0;
  }

  /** 손목/허리 각도 (0~1 진행도) */
  private swingPose(t: number): { arm: number; torso: number; lean: number } {
    type Key = { t: number; arm: number; torso: number; lean: number };
    const keys: Key[] = [
      { t: 0, arm: -0.3, torso: 0, lean: 0 },
      { t: 0.42, arm: -1.85, torso: -0.36, lean: -0.06 },
      { t: 0.62, arm: 0.5, torso: 0.18, lean: 0.04 },
      { t: 0.78, arm: 1.35, torso: 0.34, lean: 0.08 },
      { t: 1, arm: -0.3, torso: 0, lean: 0 },
    ];
    for (let i = 0; i < keys.length - 1; i += 1) {
      const a = keys[i];
      const b = keys[i + 1];
      if (t <= b.t) {
        const raw = b.t === a.t ? 0 : (t - a.t) / (b.t - a.t);
        const k = raw * raw * (3 - 2 * raw);
        return {
          arm: a.arm + (b.arm - a.arm) * k,
          torso: a.torso + (b.torso - a.torso) * k,
          lean: a.lean + (b.lean - a.lean) * k,
        };
      }
    }
    return { arm: -0.3, torso: 0, lean: 0 };
  }

  update(dt: number, moving: boolean): void {
    this.clock += dt;

    // 스윙 모션
    if (this.swingTime >= 0) {
      this.swingTime += dt;
      const t = Math.min(1, this.swingTime / this.swingDuration);
      const pose = this.swingPose(t);
      this.armR.rotation.x = pose.arm;
      this.armL.rotation.x = pose.arm * 0.82;
      this.root.rotation.y = pose.torso;
      this.root.rotation.z = pose.lean;
      this.root.position.y = -pose.lean * 0.12;
      this.footL.position.z = 0.02 + pose.lean * 0.2;
      this.footR.position.z = 0.02 - pose.lean * 0.2;
      this.footL.position.y = 0.075;
      this.footR.position.y = 0.075;
      if (t >= 1) {
        this.swingTime = -1;
        this.root.rotation.y = 0;
        this.root.rotation.z = 0;
        this.root.position.y = 0;
        this.armR.rotation.x = this.holdsClub ? -0.3 : 0;
      }
    } else if (this.addressing && this.holdsClub) {
      // 어드레스: 채를 살짝 앞으로 겨누고 상체를 숙인다
      const breathe = Math.sin(this.clock * 1.6) * 0.02;
      this.armR.rotation.x = -0.46 + breathe;
      this.armL.rotation.x = -0.32 + breathe;
      this.root.rotation.y = 0;
    } else {
      if (moving) this.phase += dt * 9.6;
      const swing = moving ? Math.sin(this.phase) : 0;
      this.root.position.y = moving
        ? Math.abs(Math.sin(this.phase)) * 0.05
        : Math.sin(this.clock * 2.1) * 0.008;
      this.armL.rotation.x = swing * 0.5;
      if (!this.holdsClub) this.armR.rotation.x = -swing * 0.4;
      else this.armR.rotation.x = -0.3;
      this.footL.position.z = 0.02 + swing * 0.085;
      this.footR.position.z = 0.02 - swing * 0.085;
      this.footL.position.y = 0.075 + Math.max(0, swing) * 0.04;
      this.footR.position.y = 0.075 + Math.max(0, -swing) * 0.04;
    }

    if (this.ring) {
      const pulse = 1 + Math.sin(this.clock * 2.6) * 0.07;
      this.ring.scale.set(pulse, pulse, 1);
      const material = this.ring.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.9 + Math.sin(this.clock * 2.6) * 0.35;
    }
  }

  dispose(): void {
    if (this.label) {
      const material = this.label.material as THREE.SpriteMaterial;
      material.map?.dispose();
      material.dispose();
      this.label = null;
    }
    this.disposables.forEach((item) => item.dispose());
    this.disposables.length = 0;
    this.group.clear();
  }
}

// ---------------------------------------------------------------- 몸 파츠

function buildBody(shirt: number): PropPart[] {
  const parts: PropPart[] = [];

  // 바지 다리 (긴 다리 + 무릎 접힘 + 밑단)
  [-0.125, 0.125].forEach((x) => {
    parts.push({ geo: column(0.086, 0.098, 0.46, 6), color: TROUSER, pos: [x, 0.71, 0], jitter: 0.05, shade: 0.2 });
    parts.push({ geo: column(0.074, 0.086, 0.4, 6), color: TROUSER, pos: [x, 0.32, 0], jitter: 0.05, shade: 0.2 });
    parts.push({ geo: column(0.09, 0.09, 0.07, 6), color: TROUSER_DARK, pos: [x, 0.15, 0], jitter: 0.04 });
    parts.push({ geo: column(0.092, 0.092, 0.03, 6), color: TROUSER_DARK, pos: [x, 0.52, 0], jitter: 0.03 });
  });

  // 골반 + 벨트 + 버클
  parts.push({ geo: plank(0.32, 0.2, 0.22), color: TROUSER, pos: [0, 0.95, 0], jitter: 0.05 });
  parts.push({ geo: plank(0.34, 0.065, 0.24), color: 0x2b1f18, pos: [0, 1.035, 0], jitter: 0.04 });
  parts.push({ geo: plank(0.08, 0.07, 0.02), color: PALETTE.gold, pos: [0, 1.035, 0.125], bucket: 'metal', jitter: 0.03 });

  // 셔츠 몸통 (육각 기둥 — 앞면이 평평하다)
  parts.push({
    geo: column(0.19, 0.168, 0.46, 6),
    color: shirt,
    pos: [0, 1.28, 0],
    rot: [0, Math.PI / 6, 0],
    jitter: 0.06,
    shade: 0.2,
  });
  parts.push({
    geo: column(0.174, 0.176, 0.05, 6),
    color: shirt,
    pos: [0, 1.06, 0],
    rot: [0, Math.PI / 6, 0],
    jitter: 0.03,
  });
  // 여밈 단추 + 주머니
  parts.push({ geo: plank(0.045, 0.3, 0.03), color: 0xffffff, pos: [0, 1.3, 0.175], jitter: 0.02 });
  [1.18, 1.28, 1.38].forEach((y) => {
    parts.push({ geo: lump(0.018), color: PALETTE.cream, pos: [0.025, y, 0.19], jitter: 0.02 });
  });
  parts.push({ geo: plank(0.1, 0.1, 0.02), color: shirt, pos: [-0.1, 1.32, 0.172], jitter: 0.03 });

  // 어깨
  parts.push({ geo: column(0.098, 0.104, 0.11, 6), color: shirt, pos: [-0.215, 1.45, 0], jitter: 0.05 });
  parts.push({ geo: column(0.098, 0.104, 0.11, 6), color: shirt, pos: [0.215, 1.45, 0], jitter: 0.05 });

  // 카라
  parts.push({ geo: column(0.092, 0.112, 0.07, 6), color: 0xffffff, pos: [0, 1.53, 0], rot: [0, Math.PI / 6, 0], jitter: 0.03 });
  parts.push({ geo: plank(0.11, 0.05, 0.1), color: 0xffffff, pos: [0, 1.52, 0.1], rot: [0.32, 0, 0], jitter: 0.03 });

  // 목
  parts.push({ geo: column(0.062, 0.072, 0.1, 6), color: SKIN_DARK, pos: [0, 1.57, 0], jitter: 0.03 });

  // 머리 (각진 두상 + 턱 + 이목구비)
  parts.push({ geo: plank(0.23, 0.25, 0.23), color: SKIN, pos: [0, 1.72, 0], jitter: 0.04, shade: 0.12 });
  parts.push({ geo: plank(0.2, 0.06, 0.2), color: SKIN_DARK, pos: [0, 1.6, 0.005], jitter: 0.03 });
  parts.push({ geo: plank(0.055, 0.06, 0.05), color: SKIN, pos: [0, 1.69, 0.125], jitter: 0.03 });
  [-0.12, 0.12].forEach((x) => {
    parts.push({ geo: plank(0.03, 0.08, 0.06), color: SKIN_DARK, pos: [x, 1.71, 0], jitter: 0.03 });
    parts.push({ geo: plank(0.04, 0.05, 0.02), color: INK, pos: [x * 0.42, 1.745, 0.118], jitter: 0.02 });
    parts.push({ geo: plank(0.06, 0.016, 0.025), color: 0x3b2a20, pos: [x * 0.42, 1.785, 0.118], jitter: 0.02 });
  });
  parts.push({ geo: plank(0.055, 0.012, 0.02), color: 0x8a5f52, pos: [0, 1.625, 0.118], jitter: 0.02 });
  // 뒷머리
  parts.push({ geo: plank(0.235, 0.14, 0.07), color: 0x4a3527, pos: [0, 1.72, -0.095], jitter: 0.05 });

  // 바이저 모자 (크라운 + 색 밴드 + 챙 + 단추)
  parts.push({ geo: column(0.126, 0.132, 0.1, 6), color: 0xffffff, pos: [0, 1.88, -0.01], rot: [0, Math.PI / 6, 0], jitter: 0.04 });
  parts.push({ geo: column(0.136, 0.138, 0.035, 6), color: shirt, pos: [0, 1.828, -0.01], rot: [0, Math.PI / 6, 0], jitter: 0.03 });
  parts.push({ geo: plank(0.27, 0.028, 0.16), color: 0xffffff, pos: [0, 1.822, 0.145], rot: [-0.13, 0, 0], jitter: 0.03 });
  parts.push({ geo: lump(0.026), color: shirt, pos: [0, 1.94, -0.01], jitter: 0.02 });

  return parts;
}

function buildShoe(): PropPart[] {
  return [
    { geo: plank(0.15, 0.05, 0.34), color: PALETTE.creamDark, pos: [0, -0.05, 0.02], jitter: 0.03 },
    { geo: plank(0.14, 0.1, 0.27), color: 0xffffff, pos: [0, 0.0, -0.01], jitter: 0.04 },
    { geo: plank(0.13, 0.075, 0.11), color: 0xffffff, pos: [0, -0.02, 0.15], jitter: 0.04 },
    { geo: plank(0.1, 0.02, 0.08), color: PALETTE.metalDark, pos: [0, 0.05, 0.07], jitter: 0.02 },
    { geo: column(0.07, 0.076, 0.06, 6), color: PALETTE.cream, pos: [0, 0.075, -0.02], jitter: 0.03 },
  ];
}

function buildArm(shirt: number, left: boolean): PropPart[] {
  const parts: PropPart[] = [
    { geo: column(0.072, 0.082, 0.22, 6), color: shirt, pos: [0, -0.11, 0], jitter: 0.05, shade: 0.18 },
    { geo: column(0.084, 0.084, 0.04, 6), color: 0xffffff, pos: [0, -0.235, 0], jitter: 0.03 },
    { geo: column(0.05, 0.058, 0.18, 6), color: SKIN, pos: [0, -0.34, 0], jitter: 0.04 },
    { geo: column(0.045, 0.051, 0.17, 6), color: SKIN, pos: [0, -0.51, 0], jitter: 0.04 },
    { geo: column(0.055, 0.055, 0.03, 6), color: 0xffffff, pos: [0, -0.595, 0], jitter: 0.02 },
    { geo: plank(0.075, 0.1, 0.085), color: left ? PALETTE.cream : SKIN, pos: [0, -0.66, 0.01], jitter: 0.03 },
  ];
  return parts;
}

function buildShaft(): PropPart[] {
  return [
    { geo: column(0.019, 0.019, 0.17, 6), color: 0x2b3138, pos: [0, -0.62, 0.02], rot: [0.1, 0, 0], jitter: 0.03 },
    { geo: column(0.013, 0.016, 0.62, 6), color: PALETTE.metal, pos: [0, -0.99, 0.13], rot: [0.24, 0, 0], bucket: 'metal', jitter: 0.03 },
    { geo: column(0.017, 0.02, 0.06, 6), color: PALETTE.metalDark, pos: [0, -1.25, 0.21], rot: [0.24, 0, 0], bucket: 'metal', jitter: 0.03 },
  ];
}

function buildClubHead(look: ClubLook): PropPart[] {
  if (look === 'driver') {
    return [
      { geo: plank(0.19, 0.11, 0.15), color: 0x3a4652, pos: [0, -1.29, 0.245], rot: [0.2, 0.1, 0], jitter: 0.05 },
      { geo: plank(0.2, 0.03, 0.15), color: PALETTE.metal, pos: [0, -1.34, 0.245], rot: [0.2, 0.1, 0], bucket: 'metal', jitter: 0.03 },
      { geo: plank(0.06, 0.04, 0.09), color: PALETTE.coral, pos: [0.09, -1.275, 0.21], jitter: 0.03 },
    ];
  }
  if (look === 'putter') {
    return [
      { geo: plank(0.2, 0.05, 0.1), color: 0x3a4652, pos: [0, -1.295, 0.225], rot: [0.1, 0, 0], jitter: 0.04 },
      { geo: plank(0.16, 0.015, 0.09), color: PALETTE.cream, pos: [0, -1.32, 0.225], jitter: 0.03 },
      { geo: plank(0.03, 0.1, 0.03), color: PALETTE.metalDark, pos: [0, -1.26, 0.2], bucket: 'metal', jitter: 0.02 },
    ];
  }
  return [
    { geo: plank(0.13, 0.1, 0.03), color: PALETTE.metal, pos: [0, -1.295, 0.225], rot: [0.28, 0, 0], bucket: 'metal', jitter: 0.03 },
    { geo: plank(0.11, 0.04, 0.05), color: PALETTE.metalDark, pos: [0, -1.35, 0.235], rot: [0.28, 0, 0], bucket: 'metal', jitter: 0.03 },
    { geo: lump(0.03), color: PALETTE.metalDark, pos: [0, -1.25, 0.21], bucket: 'metal', jitter: 0.02 },
  ];
}

/** 공용: 잔디 위에 서 있는 골퍼의 대략적인 키 (카메라·라벨 배치 참고용) */
export const GOLFER_HEIGHT = 1.9;

/** 작은 나무·바위 장식용 헬퍼가 필요할 때 쓰는 빈 덩어리 (캐시 공유) */
export function simpleBlob(radius = 0.4): THREE.Group {
  return buildProp(`simple-blob-${radius}`, [{ geo: blob(radius), color: PALETTE.leaf, jitter: 0.1 }]);
}
