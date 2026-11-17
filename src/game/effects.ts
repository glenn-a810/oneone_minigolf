import * as THREE from 'three';

interface Burst {
  points: THREE.Points;
  velocities: Float32Array;
  material: THREE.PointsMaterial;
  life: number;
  maxLife: number;
  gravity: number;
  spin: number;
}

interface EmojiSprite {
  sprite: THREE.Sprite;
  life: number;
  maxLife: number;
  drift: number;
}

/** 3D 파티클(축하 컨페티/물보라)과 떠오르는 이모지 스프라이트. */
export class Effects {
  private bursts: Burst[] = [];
  private emojis: EmojiSprite[] = [];
  private emojiCache = new Map<string, THREE.CanvasTexture>();

  constructor(private scene: THREE.Scene) {}

  private spawnBurst(
    position: THREE.Vector3,
    colors: number[],
    count: number,
    speed: number,
    up: number,
    size: number,
    life: number,
    gravity: number,
  ): void {
    const positions = new Float32Array(count * 3);
    const colorArray = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const c = new THREE.Color();

    for (let i = 0; i < count; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * speed;
      positions[i * 3] = position.x + (Math.random() - 0.5) * 0.1;
      positions[i * 3 + 1] = position.y + Math.random() * 0.1;
      positions[i * 3 + 2] = position.z + (Math.random() - 0.5) * 0.1;

      velocities[i * 3] = Math.cos(angle) * r;
      velocities[i * 3 + 1] = up * (0.4 + Math.random() * 0.9);
      velocities[i * 3 + 2] = Math.sin(angle) * r;

      c.setHex(colors[Math.floor(Math.random() * colors.length)]);
      colorArray[i * 3] = c.r;
      colorArray[i * 3 + 1] = c.g;
      colorArray[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const material = new THREE.PointsMaterial({
      size,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    points.frustumCulled = false;
    this.scene.add(points);
    this.bursts.push({ points, velocities, material, life: life, maxLife: life, gravity, spin: 1 });
  }

  /** 홀인/축하 컨페티 */
  confetti(position: THREE.Vector3, strong = false): void {
    const colors = [0xff7a59, 0xffcc4d, 0x4cc9f0, 0x9ae66e, 0xb98cff, 0xffffff];
    this.spawnBurst(position, colors, strong ? 140 : 80, strong ? 3.6 : 2.6, strong ? 5.2 : 3.8, 0.11, 2.2, 7.5);
  }

  /** 물보라 */
  splash(position: THREE.Vector3): void {
    const colors = [0x8fd8ff, 0xffffff, 0x4cc9f0];
    this.spawnBurst(position, colors, 60, 1.8, 3.2, 0.1, 0.9, 9);
  }

  /** 공이 멈출 때 나는 작은 먼지 */
  tap(position: THREE.Vector3): void {
    this.spawnBurst(position, [0xffffff, 0xdcf2c9], 12, 0.8, 1.1, 0.06, 0.5, 4);
  }

  private emojiTexture(char: string): THREE.CanvasTexture {
    const cached = this.emojiCache.get(char);
    if (cached) return cached;

    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, 128, 128);
      ctx.font = '96px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(char, 64, 72);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    this.emojiCache.set(char, texture);
    return texture;
  }

  /** 플레이어 머리 위로 떠오르는 이모지 */
  emoji(position: THREE.Vector3, char: string): void {
    if (typeof document === 'undefined') return;
    const material = new THREE.SpriteMaterial({
      map: this.emojiTexture(char),
      transparent: true,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(0.62, 0.62, 1);
    sprite.position.copy(position).add(new THREE.Vector3(0, 0.55, 0));
    this.scene.add(sprite);
    this.emojis.push({ sprite, life: 1.9, maxLife: 1.9, drift: (Math.random() - 0.5) * 0.35 });
  }

  update(dt: number): void {
    for (let i = this.bursts.length - 1; i >= 0; i -= 1) {
      const burst = this.bursts[i];
      burst.life -= dt;
      if (burst.life <= 0) {
        this.scene.remove(burst.points);
        burst.points.geometry.dispose();
        burst.material.dispose();
        this.bursts.splice(i, 1);
        continue;
      }

      const attr = burst.points.geometry.getAttribute('position') as THREE.BufferAttribute;
      const array = attr.array as Float32Array;
      for (let p = 0; p < array.length; p += 3) {
        burst.velocities[p + 1] -= burst.gravity * dt;
        array[p] += burst.velocities[p] * dt;
        array[p + 1] += burst.velocities[p + 1] * dt;
        array[p + 2] += burst.velocities[p + 2] * dt;
      }
      attr.needsUpdate = true;
      burst.material.opacity = Math.min(1, burst.life / (burst.maxLife * 0.6));
      burst.material.size *= 0.999;
    }

    for (let i = this.emojis.length - 1; i >= 0; i -= 1) {
      const item = this.emojis[i];
      item.life -= dt;
      if (item.life <= 0) {
        this.scene.remove(item.sprite);
        item.sprite.material.dispose();
        this.emojis.splice(i, 1);
        continue;
      }
      const t = 1 - item.life / item.maxLife;
      item.sprite.position.y += dt * 0.7;
      item.sprite.position.x += dt * item.drift;
      item.sprite.material.opacity = Math.min(1, (1 - t) * 1.8);
      const scale = 0.62 + Math.sin(t * Math.PI) * 0.12;
      item.sprite.scale.set(scale, scale, 1);
    }
  }

  clear(): void {
    this.bursts.forEach((b) => {
      this.scene.remove(b.points);
      b.points.geometry.dispose();
      b.material.dispose();
    });
    this.bursts.length = 0;
    this.emojis.forEach((e) => {
      this.scene.remove(e.sprite);
      e.sprite.material.dispose();
    });
    this.emojis.length = 0;
  }
}
