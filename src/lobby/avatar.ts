import * as THREE from 'three';
import { PALETTE, blob, buildProp, column, lump, plank, type PropPart } from '../game/props';
import {
  PUTT_IMPACT_SECONDS,
  PUTT_MOTION_SECONDS,
  SWING_IMPACT_SECONDS,
  SWING_MOTION_SECONDS,
} from '../game/constants';

/** 대기실 캐릭터(골퍼)와 이름표·이모지 말풍선 스프라이트. */

const SKIN = 0xffdfb8;
const SKIN_DARK = 0xe9bc90;
const INK = 0x243238;
const TROUSER = 0xc2ab7d;
const TROUSER_DARK = 0xa08a60;

/** 클럽 종류 — 홀드한 채의 헤드 모양이 달라진다 */
export type ClubLook = 'driver' | 'iron' | 'putter';

/** 스윙 모션 종류 — 풀스윙(공을 띄워 보낸다) / 퍼팅(그린을 굴린다) */
export type SwingStyle = 'full' | 'putt';

/** 골퍼 자세 (팔·어깨·상체 각도) */
interface Pose {
  /** 오른팔 x 회전 (음수 = 앞, 양수 = 뒤로 감아올림) */
  armR: number;
  armL: number;
  /** 손목(채 피벗) 각도 — 백스윙에서 채를 세워 올린다 */
  wrist: number;
  /** 몸통 비틀림 */
  torso: number;
  /** 좌우 기울기 */
  lean: number;
  /** 엉덩이/무릎 높이 */
  dip: number;
}

interface SwingState {
  t: number;
  duration: number;
  impact: number;
  style: SwingStyle;
  from: Pose;
}

const ADDRESS_FULL: Pose = { armR: -0.46, armL: -0.32, wrist: 0, torso: 0, lean: 0, dip: 0 };
const COCKED_FULL: Pose = { armR: 2.55, armL: 2.1, wrist: -0.15, torso: -0.5, lean: 0.08, dip: -0.04 };
const IMPACT_FULL: Pose = { armR: -0.5, armL: -0.4, wrist: 0.12, torso: 0.16, lean: -0.03, dip: -0.06 };
const FOLLOW_FULL: Pose = { armR: -1.9, armL: -1.6, wrist: 0.5, torso: 0.45, lean: -0.05, dip: -0.04 };

const ADDRESS_PUTT: Pose = { armR: -0.56, armL: -0.44, wrist: 0, torso: 0, lean: 0, dip: -0.05 };
const COCKED_PUTT: Pose = { armR: 0.5, armL: 0.4, wrist: -0.16, torso: -0.07, lean: 0, dip: -0.06 };
const IMPACT_PUTT: Pose = { armR: -0.62, armL: -0.5, wrist: 0.08, torso: 0.04, lean: 0, dip: -0.06 };
const FOLLOW_PUTT: Pose = { armR: -0.98, armL: -0.82, wrist: 0.18, torso: 0.06, lean: 0, dip: -0.05 };

function mixPose(a: Pose, b: Pose, k: number): Pose {
  const t = Math.max(0, Math.min(1, k));
  const ease = t * t * (3 - 2 * t);
  return {
    armR: a.armR + (b.armR - a.armR) * ease,
    armL: a.armL + (b.armL - a.armL) * ease,
    wrist: a.wrist + (b.wrist - a.wrist) * ease,
    torso: a.torso + (b.torso - a.torso) * ease,
    lean: a.lean + (b.lean - a.lean) * ease,
    dip: a.dip + (b.dip - a.dip) * ease,
  };
}

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
  /** 손목 피벗 — 이 그룹을 돌리면 손목으로 채가 세워진다 */
  private clubPivot: THREE.Group | null = null;
  private readonly ring: THREE.Mesh | null;
  private readonly holdsClub: boolean;
  private label: THREE.Sprite | null = null;
  private readonly disposables: Array<{ dispose: () => void }> = [];
  private phase = Math.random() * Math.PI * 2;
  private clock = Math.random() * 10;
  private addressing = false;
  /** 차지 중 백스윙 깊이 (0 = 어드레스, 1 = 풀 백스윙) */
  private charge = 0;
  private chargeSmooth = 0;
  /** 진행 중인 스윙 모션 */
  private swing: SwingState | null = null;
  /** 검증용 자세 고정 */
  private poseOverride: Pose | null = null;

  constructor(options: GolferOptions) {
    const base = new THREE.Color(options.color);
    const hex = base.getHex();
    const shirt = hex;

    this.root.position.y = 0;
    // 골퍼는 움직이므로 실사 메시를 정적 병합에서 제외한다
    this.group.userData.oneoneDynamic = true;
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
      // 손(팔 끝) 위치에 피벗을 두고, 그 아래에 채를 매단다 (피벗을 돌리면 손목 스냅)
      const pivot = new THREE.Group();
      pivot.position.set(0, -0.6, 0.01);
      clubGroup.position.set(0, 0.6, -0.01);
      pivot.add(clubGroup);
      this.armR.add(pivot);
      this.clubPivot = pivot;
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

  /**
   * 차지 중 백스윙 깊이 (0 = 어드레스, 1 = 풀 백스윙).
   * 스윙 버튼을 꾹 누르는 동안 파워에 비례해 감아올리는 자세를 만든다.
   * 손을 떼도 임팩트 탭까지는 이 자세를 유지한다.
   */
  setCharge(amount: number): void {
    const next = Math.max(0, Math.min(1, Number.isFinite(amount) ? amount : 0));
    this.charge = next;
  }

  /**
   * 백스윙 → 다운스윙 → 임팩트 → 팔로우스루 모션.
   * 임팩트 시각(`impact`)에 클럽 헤드가 공에 닿는 순간이 온다 — 게임은 그 프레임에 공을 내보낸다.
   */
  playSwing(style: SwingStyle = 'full'): void {
    const putt = style === 'putt';
    this.swing = {
      t: 0,
      duration: putt ? PUTT_MOTION_SECONDS : SWING_MOTION_SECONDS,
      impact: putt ? PUTT_IMPACT_SECONDS : SWING_IMPACT_SECONDS,
      style,
      from: this.currentPose(),
    };
    // 스윙이 시작되면 차지는 모션에 넘긴다
    this.charge = 0;
    this.chargeSmooth = 0;
  }

  get isSwinging(): boolean {
    return this.swing !== null;
  }

  /** 지금 자세 (스윙 시작점으로 쒜기 위해) */
  private currentPose(): Pose {
    return this.swing ? this.swingPose(this.swing) : this.chargePose();
  }

  /** 검증용: 자세 상태 */
  debugInfo(): Record<string, number | boolean> {
    return {
      charge: this.charge,
      smooth: this.chargeSmooth,
      addressing: this.addressing,
      holdsClub: this.holdsClub,
      swinging: this.swing !== null,
      armR: this.armR.rotation.x,
      wrist: this.clubPivot?.rotation.x ?? 0,
      torso: this.root.rotation.y,
    };
  }

  /** 검증용: 특정 자세를 그대로 보여준다 (null 이면 해제) */
  debugPose(pose: Partial<Pose> | null): void {
    this.poseOverride = pose ? { ...ADDRESS_FULL, ...pose } : null;
  }

  /** 차지 깊이에 따른 백스윙 자세 */
  private chargePose(): Pose {
    const keys = this.clubHeads.putter.visible ? 'putt' : 'full';
    const base = keys === 'putt' ? ADDRESS_PUTT : ADDRESS_FULL;
    const cocked = keys === 'putt' ? COCKED_PUTT : COCKED_FULL;
    const breath = Math.sin(this.clock * 1.6) * 0.02;
    const mixed = mixPose(base, cocked, this.chargeSmooth);
    return { ...mixed, armR: mixed.armR + breath, armL: mixed.armL + breath };
  }

  /** 진행 중인 스윙 모션의 자세 */
  private swingPose(swing: SwingState): Pose {
    const putt = swing.style === 'putt';
    const address = putt ? ADDRESS_PUTT : ADDRESS_FULL;
    const impact = putt ? IMPACT_PUTT : IMPACT_FULL;
    const follow = putt ? FOLLOW_PUTT : FOLLOW_FULL;
    const followAt = swing.impact + (swing.duration - swing.impact) * 0.45;

    if (swing.t <= swing.impact) {
      // 다운스윙: 느리게 시작해 임팩트 직전 가장 빠르다
      const raw = swing.impact <= 0 ? 1 : swing.t / swing.impact;
      const accel = raw * raw;
      return mixPose(swing.from, impact, accel);
    }
    if (swing.t <= followAt) {
      const k = (swing.t - swing.impact) / Math.max(0.01, followAt - swing.impact);
      return mixPose(impact, follow, Math.min(1, k * 1.15));
    }
    const k = (swing.t - followAt) / Math.max(0.01, swing.duration - followAt);
    return mixPose(follow, address, k);
  }

  /** 자세를 팔·몸통·발에 반영 */
  private applyPose(pose: Pose): void {
    this.armR.rotation.x = pose.armR;
    this.armL.rotation.x = pose.armL;
    if (this.clubPivot) this.clubPivot.rotation.x = pose.wrist;
    // 백스윙·팔로우스루에서 두 팔을 몸 앞으로 모은다
    const together = Math.min(1, Math.abs(pose.torso) * 2.2);
    this.armR.rotation.z = -0.2 + together * 0.12;
    this.armL.rotation.z = 0.2 - together * 0.12;
    this.root.rotation.y = pose.torso;
    this.root.rotation.z = pose.lean;
    this.root.position.y = pose.dip;
    const sway = pose.torso * 0.14;
    this.footL.position.z = 0.02 + sway;
    this.footR.position.z = 0.02 - sway;
    this.footL.position.y = 0.075;
    this.footR.position.y = 0.075;
  }

  update(dt: number, moving: boolean): void {
    this.clock += dt;

    if (this.poseOverride) {
      this.applyPose(this.poseOverride);
      return;
    }

    // 스윙 모션 (백스윙 → 다운스윙 → 임팩트 → 팔로우스루)
    if (this.swing) {
      this.swing.t += dt;
      if (this.swing.t >= this.swing.duration) {
        this.swing = null;
        this.applyPose(this.holdsClub ? ADDRESS_FULL : { ...ADDRESS_FULL, armR: 0, armL: 0 });
        this.root.rotation.y = 0;
        this.root.rotation.z = 0;
        this.root.position.y = 0;
        this.footL.position.z = 0.02;
        this.footR.position.z = 0.02;
      } else {
        this.applyPose(this.swingPose(this.swing));
        return;
      }
    }

    // 차지(백스윙 감아올리기) — 목표 자세로 부드럽게 따라간다
    const target = this.addressing && this.holdsClub ? this.charge : 0;
    this.chargeSmooth += (target - this.chargeSmooth) * (1 - Math.exp(-22 * dt));

    if (this.addressing && this.holdsClub) {
      this.applyPose(this.chargePose());
    } else {
      this.chargeSmooth = 0;
      if (moving) this.phase += dt * 9.6;
      const swing = moving ? Math.sin(this.phase) : 0;
      this.root.position.y = moving
        ? Math.abs(Math.sin(this.phase)) * 0.05
        : Math.sin(this.clock * 2.1) * 0.008;
      this.root.rotation.y = 0;
      this.root.rotation.z = 0;
      this.armL.rotation.x = swing * 0.5;
      this.armR.rotation.z = -0.2;
      this.armL.rotation.z = 0.2;
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
