import * as THREE from 'three';

/** 대기실 캐릭터(골퍼)와 이름표·이모지 말풍선 스프라이트. */

const SKIN = 0xffe0bd;
const INK = 0x1d3038;

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
  sprite.scale.set(0.64, 0.64, 1);
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
}

/** 통통한 골퍼 캐릭터 (몸통 색 = 선택한 공 색상) */
export class Golfer {
  readonly group = new THREE.Group();

  private readonly root = new THREE.Group();
  private readonly armL = new THREE.Group();
  private readonly armR = new THREE.Group();
  private readonly footL: THREE.Mesh;
  private readonly footR: THREE.Mesh;
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
    const deep = base.clone().multiplyScalar(0.66);

    const bodyMat = this.track(new THREE.MeshStandardMaterial({ color: base, roughness: 0.44, metalness: 0.05 }));
    const deepMat = this.track(new THREE.MeshStandardMaterial({ color: deep, roughness: 0.55 }));
    const skinMat = this.track(new THREE.MeshStandardMaterial({ color: SKIN, roughness: 0.72 }));
    const inkMat = this.track(new THREE.MeshStandardMaterial({ color: INK, roughness: 0.55 }));
    const whiteMat = this.track(new THREE.MeshStandardMaterial({ color: 0xfffaf0, roughness: 0.55 }));
    const cheekMat = this.track(new THREE.MeshStandardMaterial({ color: 0xffb3a2, roughness: 0.85 }));
    const clubMat = this.track(new THREE.MeshStandardMaterial({ color: 0xc8ced4, roughness: 0.35, metalness: 0.55 }));

    this.root.position.y = 0;
    this.group.add(this.root);

    // 몸통
    const torso = this.create(new THREE.CapsuleGeometry(0.21, 0.22, 6, 18), bodyMat);
    torso.position.y = 0.52;
    this.root.add(torso);

    // 다리
    const legGeo = new THREE.CapsuleGeometry(0.065, 0.1, 4, 10);
    [-0.09, 0.09].forEach((x) => {
      const leg = this.create(legGeo, deepMat);
      leg.position.set(x, 0.24, 0);
      this.root.add(leg);
    });

    // 발
    const footGeo = new THREE.SphereGeometry(0.078, 14, 10);
    this.footL = this.create(footGeo, whiteMat);
    this.footL.scale.set(1, 0.72, 1.3);
    this.footL.position.set(-0.09, 0.075, 0.03);
    this.footR = this.create(footGeo, whiteMat);
    this.footR.scale.set(1, 0.72, 1.3);
    this.footR.position.set(0.09, 0.075, 0.03);
    this.root.add(this.footL, this.footR);

    // 머리
    const head = this.create(new THREE.SphereGeometry(0.19, 22, 18), skinMat);
    head.position.y = 0.96;
    this.root.add(head);

    // 볼
    const cheekGeo = new THREE.SphereGeometry(0.034, 10, 8);
    [-0.125, 0.125].forEach((x) => {
      const cheek = this.create(cheekGeo, cheekMat);
      cheek.position.set(x, 0.905, 0.115);
      this.root.add(cheek);
    });

    // 눈
    const eyeGeo = new THREE.SphereGeometry(0.032, 12, 10);
    [-0.066, 0.066].forEach((x) => {
      const eye = this.create(eyeGeo, inkMat);
      eye.position.set(x, 0.945, 0.168);
      this.root.add(eye);
    });

    // 모자 (챙 + 돔)
    const brim = this.create(new THREE.CylinderGeometry(0.272, 0.272, 0.024, 26), whiteMat);
    brim.position.y = 0.985;
    this.root.add(brim);
    const dome = this.create(
      new THREE.SphereGeometry(0.203, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.52),
      whiteMat,
    );
    dome.position.y = 0.985;
    this.root.add(dome);
    const button = this.create(new THREE.SphereGeometry(0.024, 10, 8), deepMat);
    button.position.y = 1.174;
    this.root.add(button);

    // 팔
    this.armL.position.set(-0.238, 0.7, 0);
    this.armR.position.set(0.238, 0.7, 0);
    this.armL.rotation.z = 0.2;
    this.armR.rotation.z = -0.2;
    const armGeo = new THREE.CapsuleGeometry(0.055, 0.15, 4, 10);
    const armMeshL = this.create(armGeo, bodyMat);
    armMeshL.position.y = -0.13;
    const armMeshR = this.create(armGeo, bodyMat);
    armMeshR.position.y = -0.13;
    this.armL.add(armMeshL);
    this.armR.add(armMeshR);
    this.root.add(this.armL, this.armR);

    if (options.club) {
      this.holdsClub = true;
      const shaft = this.create(new THREE.CylinderGeometry(0.012, 0.012, 0.62, 8), clubMat);
      shaft.position.set(0, -0.45, 0.02);
      shaft.rotation.x = 0.32;
      const headGeo = new THREE.BoxGeometry(0.13, 0.05, 0.06);
      const clubHead = this.create(headGeo, clubMat);
      clubHead.position.set(0, -0.76, 0.13);
      clubHead.rotation.x = 0.32;
      this.armR.add(shaft, clubHead);
      this.armR.rotation.x = -0.26;
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
      const ringGeo = this.track(new THREE.TorusGeometry(0.4, 0.028, 8, 34));
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

  private create(geometry: THREE.BufferGeometry, material: THREE.Material): THREE.Mesh {
    this.track(geometry);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    return mesh;
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
      label.position.set(0, 1.52, 0);
      this.group.add(label);
      this.label = label;
    }
  }

  setVisible(visible: boolean): void {
    this.group.visible = visible;
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
      { t: 0, arm: -0.26, torso: 0, lean: 0 },
      { t: 0.42, arm: -1.85, torso: -0.36, lean: -0.06 },
      { t: 0.62, arm: 0.5, torso: 0.18, lean: 0.04 },
      { t: 0.78, arm: 1.35, torso: 0.34, lean: 0.08 },
      { t: 1, arm: -0.26, torso: 0, lean: 0 },
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
    return { arm: -0.26, torso: 0, lean: 0 };
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
      this.footL.position.z = 0.03 + pose.lean * 0.2;
      this.footR.position.z = 0.03 - pose.lean * 0.2;
      this.footL.position.y = 0.075;
      this.footR.position.y = 0.075;
      if (t >= 1) {
        this.swingTime = -1;
        this.root.rotation.y = 0;
        this.root.rotation.z = 0;
        this.root.position.y = 0;
        this.armR.rotation.x = this.holdsClub ? -0.26 : 0;
      }
    } else if (this.addressing && this.holdsClub) {
      // 어드레스: 채를 살짝 앞으로 겨누고 상체를 숙인다
      const breathe = Math.sin(this.clock * 1.6) * 0.02;
      this.armR.rotation.x = -0.42 + breathe;
      this.armL.rotation.x = -0.3 + breathe;
      this.root.rotation.y = 0;
    } else {
      if (moving) this.phase += dt * 9.6;
      const swing = moving ? Math.sin(this.phase) : 0;
      this.root.position.y = moving
        ? Math.abs(Math.sin(this.phase)) * 0.05
        : Math.sin(this.clock * 2.1) * 0.008;
      this.armL.rotation.x = swing * 0.5;
      if (!this.holdsClub) this.armR.rotation.x = -swing * 0.4;
      else this.armR.rotation.x = -0.26;
      this.footL.position.z = 0.03 + swing * 0.085;
      this.footR.position.z = 0.03 - swing * 0.085;
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
