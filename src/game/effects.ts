import * as THREE from 'three';

interface Burst {
  points: THREE.Points;
  velocities: Float32Array;
  material: THREE.PointsMaterial;
  life: number;
  maxLife: number;
  gravity: number;
}

interface EmojiSprite {
  sprite: THREE.Sprite;
  life: number;
  maxLife: number;
  drift: number;
}

interface Ring {
  mesh: THREE.Mesh;
  material: THREE.MeshBasicMaterial;
  life: number;
  maxLife: number;
  from: number;
  to: number;
}

/**
 * 3D 파티클 — 볼 트레일, 착지 먼지/모래, Perfect 스파크, 물보라, 홀인 컨페티, 이모지.
 * 모두 지오메트리를 매번 만들지 않고 풀처럼 재사용하며, 남은 수명이 끝나면 정리한다.
 */
export class Effects {
  private bursts: Burst[] = [];
  private emojis: EmojiSprite[] = [];
  private rings: Ring[] = [];
  private emojiCache = new Map<string, THREE.CanvasTexture>();

  private readonly trail: THREE.Line;
  private readonly trailPositions: Float32Array;
  private readonly trailColors: Float32Array;
  private readonly trailCount: number;
  private trailFill = 0;

  constructor(private scene: THREE.Scene) {
    this.trailCount = 60;
    this.trailPositions = new Float32Array(this.trailCount * 3);
    this.trailColors = new Float32Array(this.trailCount * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.trailPositions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(this.trailColors, 3));
    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.trail = new THREE.Line(geometry, material);
    this.trail.frustumCulled = false;
    this.trail.visible = false;
    this.scene.add(this.trail);
  }

  /** 공 궤적 빛 잔상 */
  trailPush(position: THREE.Vector3, color = new THREE.Color(0xfff1b8)): void {
    const shift = (this.trailCount - 1) * 3;
    this.trailPositions.copyWithin(0, 3, shift + 3);
    this.trailColors.copyWithin(0, 3, shift + 3);
    this.trailPositions[shift] = position.x;
    this.trailPositions[shift + 1] = position.y;
    this.trailPositions[shift + 2] = position.z;
    this.trailColors[shift] = color.r;
    this.trailColors[shift + 1] = color.g;
    this.trailColors[shift + 2] = color.b;
    // 새로 넣은 점의 이전 값은 어둡게(투명) 시작
    for (let i = 0; i < this.trailCount - 1; i += 1) {
      const k = 1 - i / (this.trailCount - 1);
      const fade = Math.pow(k, 1.7) * 0.85;
      this.trailColors[i * 3] *= 0.86 + 0.14 * fade;
      this.trailColors[i * 3 + 1] *= 0.86 + 0.14 * fade;
      this.trailColors[i * 3 + 2] *= 0.86 + 0.14 * fade;
    }
    this.trailFill = Math.min(this.trailCount, this.trailFill + 1);
    this.trail.visible = true;
    const geometry = this.trail.geometry;
    (geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    (geometry.getAttribute('color') as THREE.BufferAttribute).needsUpdate = true;
  }

  trailFade(dt: number): void {
    if (!this.trail.visible) return;
    let alive = 0;
    for (let i = 0; i < this.trailCount; i += 1) {
      const decay = Math.max(0, 1 - dt * 1.15);
      this.trailColors[i * 3] *= decay;
      this.trailColors[i * 3 + 1] *= decay;
      this.trailColors[i * 3 + 2] *= decay;
      if (this.trailColors[i * 3] > 0.01) alive += 1;
    }
    const attr = this.trail.geometry.getAttribute('color') as THREE.BufferAttribute;
    attr.needsUpdate = true;
    if (alive === 0) this.clearTrail();
  }

  clearTrail(): void {
    this.trail.visible = false;
    this.trailFill = 0;
    this.trailColors.fill(0);
    this.trailPositions.fill(0);
    const attr = this.trail.geometry.getAttribute('color') as THREE.BufferAttribute;
    attr.needsUpdate = true;
  }

  private spawnBurst(
    position: THREE.Vector3,
    colors: number[],
    count: number,
    speed: number,
    up: number,
    size: number,
    life: number,
    gravity: number,
    spread = 0.12,
    additive = false,
  ): void {
    const positions = new Float32Array(count * 3);
    const colorArray = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const c = new THREE.Color();

    for (let i = 0; i < count; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * speed;
      positions[i * 3] = position.x + (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = position.y + Math.random() * spread * 0.6;
      positions[i * 3 + 2] = position.z + (Math.random() - 0.5) * spread;

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
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const points = new THREE.Points(geometry, material);
    points.frustumCulled = false;
    this.scene.add(points);
    this.bursts.push({ points, velocities, material, life, maxLife: life, gravity });
  }

  /** 홀인/버디 축하 */
  confetti(position: THREE.Vector3, strong = false): void {
    const colors = [0xff7a59, 0xffcc4d, 0x4cc9f0, 0x9ae66e, 0xb98cff, 0xffffff, 0xff8fb1];
    this.spawnBurst(position, colors, strong ? 180 : 100, strong ? 4.2 : 3, strong ? 6.4 : 4.6, 0.13, 2.6, 7.2, 0.2);
    this.ring(position, 0.35, strong ? 6.5 : 4.5, 0.7, strong ? 0xffe9a8 : 0xffffff);
  }

  /** 임팩트 스파크 */
  spark(position: THREE.Vector3, grade: 'perfect' | 'good' | 'miss'): void {
    if (grade === 'perfect') {
      this.spawnBurst(position, [0xfff6c8, 0xffe082, 0xffffff, 0xffd166], 46, 2.6, 3.4, 0.09, 0.75, 3.5, 0.1, true);
      this.ring(position, 0.25, 2.4, 0.5, 0xfff0b8);
    } else if (grade === 'good') {
      this.spawnBurst(position, [0xffffff, 0xdcf2c9], 22, 1.6, 2.2, 0.07, 0.5, 4, 0.08);
    } else {
      this.spawnBurst(position, [0xcfe4b0, 0x9ac47a], 16, 1.2, 1.4, 0.07, 0.5, 5, 0.08);
    }
  }

  /** 착지: 잔디/모래 파티클 */
  divot(position: THREE.Vector3, surface: 'green' | 'fringe' | 'fairway' | 'rough' | 'tee' | 'bunker' | 'water' | 'out'): void {
    if (surface === 'bunker') {
      this.spawnBurst(position, [0xf3e3ba, 0xe3cfa1, 0xcdb888], 26, 1.6, 2.4, 0.11, 0.9, 6.5, 0.12);
      return;
    }
    if (surface === 'water') {
      this.splash(position);
      return;
    }
    const colors = surface === 'green' || surface === 'fringe'
      ? [0xb6f08e, 0x8ed86a, 0xdff8c8]
      : [0x9ad877, 0x76b955, 0xd2e9b0];
    this.spawnBurst(position, colors, 22, 1.3, 1.9, 0.09, 0.7, 6, 0.12);
  }

  /** 물보라 */
  splash(position: THREE.Vector3): void {
    const colors = [0xbfefff, 0xffffff, 0x6fd0f2];
    this.spawnBurst(position, colors, 70, 2.2, 3.8, 0.1, 1.05, 9, 0.16);
    this.ring(position, 0.2, 2.2, 0.7, 0xd8f6ff);
  }

  /** 공이 멈출 때 나는 작은 먼지 */
  tap(position: THREE.Vector3): void {
    this.spawnBurst(position, [0xffffff, 0xdcf2c9], 12, 0.8, 1.1, 0.06, 0.5, 4, 0.08);
  }

  /** 퍼짐 링 (충격파) */
  ring(position: THREE.Vector3, from: number, to: number, life: number, color = 0xffffff): void {
    const geometry = new THREE.RingGeometry(0.9, 1, 40);
    geometry.rotateX(-Math.PI / 2);
    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(position.x, Math.max(0.03, position.y - 0.06), position.z);
    mesh.scale.setScalar(from);
    this.scene.add(mesh);
    this.rings.push({ mesh, material, life, maxLife: life, from, to });
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

  /** 머리 위로 떠오르는 이모지 */
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
      const drag = Math.max(0, 1 - dt * 1.1);
      for (let p = 0; p < array.length; p += 3) {
        burst.velocities[p + 1] -= burst.gravity * dt;
        burst.velocities[p] *= drag;
        burst.velocities[p + 2] *= drag;
        array[p] += burst.velocities[p] * dt;
        array[p + 1] += burst.velocities[p + 1] * dt;
        array[p + 2] += burst.velocities[p + 2] * dt;
      }
      attr.needsUpdate = true;
      burst.material.opacity = Math.min(1, burst.life / (burst.maxLife * 0.6));
    }

    for (let i = this.rings.length - 1; i >= 0; i -= 1) {
      const ring = this.rings[i];
      ring.life -= dt;
      if (ring.life <= 0) {
        this.scene.remove(ring.mesh);
        ring.mesh.geometry.dispose();
        ring.material.dispose();
        this.rings.splice(i, 1);
        continue;
      }
      const t = 1 - ring.life / ring.maxLife;
      const scale = ring.from + (ring.to - ring.from) * t;
      ring.mesh.scale.setScalar(scale);
      ring.material.opacity = 0.85 * (1 - t);
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

    this.trailFade(dt);
  }

  clear(): void {
    this.bursts.forEach((b) => {
      this.scene.remove(b.points);
      b.points.geometry.dispose();
      b.material.dispose();
    });
    this.bursts.length = 0;
    this.rings.forEach((r) => {
      this.scene.remove(r.mesh);
      r.mesh.geometry.dispose();
      r.material.dispose();
    });
    this.rings.length = 0;
    this.emojis.forEach((e) => {
      this.scene.remove(e.sprite);
      e.sprite.material.dispose();
    });
    this.emojis.length = 0;
    this.clearTrail();
  }
}
