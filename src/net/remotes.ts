import * as THREE from 'three';
import type { PlayerSnapshot } from '../game/types';
import { createBall } from '../game/scenery';
import { BALL_RADIUS } from '../game/constants';

interface RemoteItem {
  group: THREE.Group;
  label: THREE.Sprite | null;
  snapshot: PlayerSnapshot;
  target: THREE.Vector3;
}

function nameLabel(name: string, color: string): THREE.Sprite | null {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 96;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const text = name.length > 10 ? `${name.slice(0, 10)}…` : name;
  ctx.font = 'bold 40px "Pretendard", system-ui, sans-serif';
  const width = Math.min(canvas.width - 16, ctx.measureText(text).width + 44);

  ctx.fillStyle = 'rgba(22, 50, 59, 0.82)';
  ctx.beginPath();
  const x = (canvas.width - width) / 2;
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(x, 18, width, 58, 29);
  } else {
    ctx.rect(x, 18, width, 58);
  }
  ctx.fill();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x + 24, 47, 9, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x + 40, 49);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(0.95, 0.36, 1);
  return sprite;
}

/** 다른 탭 플레이어의 반투명 공과 닉네임 라벨 */
export class Remotes {
  private items = new Map<string, RemoteItem>();

  constructor(private scene: THREE.Scene) {}

  upsert(snapshot: PlayerSnapshot): void {
    let item = this.items.get(snapshot.id);

    if (!item) {
      const group = new THREE.Group();
      const ball = createBall(new THREE.Color(snapshot.color).getHex(), BALL_RADIUS, true);
      group.add(ball);

      const label = nameLabel(snapshot.name, snapshot.color);
      if (label) {
        label.position.set(0, BALL_RADIUS + 0.42, 0);
        group.add(label);
      }

      group.position.set(snapshot.pos[0], snapshot.pos[1], snapshot.pos[2]);
      this.scene.add(group);
      item = {
        group,
        label,
        snapshot,
        target: new THREE.Vector3(snapshot.pos[0], snapshot.pos[1], snapshot.pos[2]),
      };
      this.items.set(snapshot.id, item);
    }

    item.snapshot = snapshot;
    item.target.set(snapshot.pos[0], snapshot.pos[1], snapshot.pos[2]);
    if (item.label) item.label.visible = true;
  }

  remove(id: string): void {
    const item = this.items.get(id);
    if (!item) return;
    this.scene.remove(item.group);
    item.group.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.isMesh) mesh.geometry.dispose();
      const mat = (obj as THREE.Mesh).material;
      if (mat) {
        const materials = Array.isArray(mat) ? mat : [mat];
        materials.forEach((m) => {
          const sprite = m as THREE.SpriteMaterial;
          sprite.map?.dispose();
          m.dispose();
        });
      }
    });
    this.items.delete(id);
  }

  clear(): void {
    [...this.items.keys()].forEach((id) => this.remove(id));
  }

  update(dt: number, localHole: number): void {
    for (const item of this.items.values()) {
      const sameHole = item.snapshot.hole === localHole;
      item.group.visible = sameHole;
      if (!sameHole) continue;
      item.group.position.lerp(item.target, 1 - Math.exp(-12 * dt));
    }
  }

  positionOf(id: string): THREE.Vector3 | null {
    const item = this.items.get(id);
    return item ? item.group.position.clone() : null;
  }

  count(): number {
    return this.items.size;
  }
}
