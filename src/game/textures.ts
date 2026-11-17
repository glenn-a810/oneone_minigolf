import * as THREE from 'three';

/**
 * 절차적(Canvas 2D) 텍스처 — 외부 이미지 없이 잔디 스트라이프, 러프, 그린,
 * 벙커 모래 물결, 나무 데크, 돌바닥, 물/하늘 그라데이션을 만든다.
 *
 * DOM 이 없는 환경(헤드리스 검증 스크립트)에서는 null 을 돌려주고,
 * 호출부는 단색 매터리얼로 대체한다.
 */

const canvasCache = new Map<string, HTMLCanvasElement>();

function context(w: number, h: number): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } | null {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  return { canvas, ctx };
}

/** 시드 고정 난수 (매번 같은 무늬가 나오게) */
function seeded(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function makeTexture(
  key: string,
  w: number,
  h: number,
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
  repeatX = 1,
  repeatY = 1,
): THREE.Texture | null {
  if (typeof document === 'undefined') return null;

  let canvas = canvasCache.get(key);
  if (!canvas) {
    const made = context(w, h);
    if (!made) return null;
    draw(made.ctx, w, h);
    canvas = made.canvas;
    canvasCache.set(key, canvas);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}

function speckle(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  count: number,
  colors: string[],
  rand: () => number,
  size = 2,
): void {
  for (let i = 0; i < count; i += 1) {
    ctx.fillStyle = colors[Math.floor(rand() * colors.length)];
    const x = rand() * w;
    const y = rand() * h;
    const s = size * (0.5 + rand());
    ctx.fillRect(x, y, s, s * (0.6 + rand() * 0.8));
  }
}

/** 페어웨이: 잔디 결 + 잔디 깎은 스트라이프 (텍스처가 4m 타일) */
export function fairwayTexture(repeat = 0.25): THREE.Texture | null {
  return makeTexture(
    'fairway',
    512,
    512,
    (ctx, w, h) => {
      const rand = seeded(1911);
      const base = ctx.createLinearGradient(0, 0, 0, h);
      base.addColorStop(0, '#83cf5f');
      base.addColorStop(1, '#7cc857');
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, w, h);

      // 스트라이프 (잔디 깎은 방향)
      const band = 64;
      for (let x = 0; x < w; x += band) {
        const light = (x / band) % 2 === 0;
        ctx.fillStyle = light ? 'rgba(255,255,255,0.10)' : 'rgba(24,74,32,0.07)';
        ctx.fillRect(x, 0, band, h);
      }

      // 결 방향 텍스처 라인
      for (let i = 0; i < 2200; i += 1) {
        const x = rand() * w;
        const y = rand() * h;
        const len = 4 + rand() * 14;
        ctx.strokeStyle = rand() > 0.5 ? 'rgba(255,255,255,0.05)' : 'rgba(20,66,26,0.07)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + (rand() - 0.5) * 2, y - len);
        ctx.stroke();
      }

      speckle(ctx, w, h, 900, ['#8fdd6c', '#6fbb4f', '#98e074'], rand, 2);
    },
    repeat,
    repeat,
  );
}

/** 러프: 짙은 잔디 + 잡풀 */
export function roughTexture(repeat = 0.2): THREE.Texture | null {
  return makeTexture(
    'rough',
    512,
    512,
    (ctx, w, h) => {
      const rand = seeded(7031);
      ctx.fillStyle = '#4e9a41';
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < 2600; i += 1) {
        const x = rand() * w;
        const y = rand() * h;
        const len = 5 + rand() * 16;
        ctx.strokeStyle = rand() > 0.45 ? 'rgba(126,196,105,0.34)' : 'rgba(38,86,33,0.34)';
        ctx.lineWidth = 1 + rand();
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + (rand() - 0.5) * 5, y - len);
        ctx.stroke();
      }

      // 군데군데 짙은 패치
      for (let i = 0; i < 26; i += 1) {
        const x = rand() * w;
        const y = rand() * h;
        const r = 12 + rand() * 42;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, 'rgba(36,88,34,0.25)');
        grad.addColorStop(1, 'rgba(36,88,34,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      speckle(ctx, w, h, 1200, ['#63ad4c', '#3f8a35', '#79c45e'], rand, 2);
    },
    repeat,
    repeat,
  );
}

/** 그린: 아주 고운 잔디 + 미세한 결 */
export function greenTexture(repeat = 0.34): THREE.Texture | null {
  return makeTexture(
    'green',
    512,
    512,
    (ctx, w, h) => {
      const rand = seeded(3313);
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#8ee167');
      grad.addColorStop(0.5, '#84da5e');
      grad.addColorStop(1, '#90e56b');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // 아주 잔 잔디결
      for (let i = 0; i < 6000; i += 1) {
        const x = rand() * w;
        const y = rand() * h;
        ctx.strokeStyle = rand() > 0.5 ? 'rgba(255,255,255,0.09)' : 'rgba(38,96,40,0.08)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + (rand() - 0.5) * 1.6, y - 2 - rand() * 4);
        ctx.stroke();
      }

      // 부드러운 얼룩 (그린의 미묘한 경사 느낌)
      for (let i = 0; i < 18; i += 1) {
        const x = rand() * w;
        const y = rand() * h;
        const r = 30 + rand() * 90;
        const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
        g2.addColorStop(0, 'rgba(62,132,52,0.10)');
        g2.addColorStop(1, 'rgba(62,132,52,0)');
        ctx.fillStyle = g2;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    },
    repeat,
    repeat,
  );
}

/** 벙커 모래: 물결 자국 */
export function sandTexture(repeat = 0.4): THREE.Texture | null {
  return makeTexture(
    'sand',
    512,
    512,
    (ctx, w, h) => {
      const rand = seeded(5507);
      ctx.fillStyle = '#eddcb2';
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < 60; i += 1) {
        const y = (i / 60) * h + rand() * 6;
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(255,255,255,0.20)' : 'rgba(176,150,104,0.20)';
        ctx.lineWidth = 1 + rand() * 2;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 14) {
          const yy = y + Math.sin((x / w) * Math.PI * 4 + i) * 3;
          if (x === 0) ctx.moveTo(x, yy);
          else ctx.lineTo(x, yy);
        }
        ctx.stroke();
      }
      speckle(ctx, w, h, 2400, ['#f6e8c6', '#ddc79b', '#c9b189'], rand, 2);
    },
    repeat,
    repeat,
  );
}

/** 나무 데크/다리 */
export function woodTexture(repeat = 1): THREE.Texture | null {
  return makeTexture(
    'wood',
    512,
    256,
    (ctx, w, h) => {
      const rand = seeded(8801);
      const planks = 6;
      const ph = h / planks;
      for (let p = 0; p < planks; p += 1) {
        const tint = 200 + Math.floor(rand() * 34);
        ctx.fillStyle = `rgb(${tint}, ${Math.floor(tint * 0.68)}, ${Math.floor(tint * 0.42)})`;
        ctx.fillRect(0, p * ph, w, ph - 2);
        for (let i = 0; i < 90; i += 1) {
          const y = p * ph + rand() * ph;
          ctx.strokeStyle = `rgba(96,62,32,${0.05 + rand() * 0.14})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(0, y);
          for (let x = 0; x <= w; x += 32) {
            ctx.lineTo(x, y + Math.sin(x * 0.02 + rand()) * 1.6);
          }
          ctx.stroke();
        }
        ctx.fillStyle = 'rgba(78,50,26,0.45)';
        ctx.fillRect(0, p * ph + ph - 2, w, 2);
      }
    },
    repeat,
    repeat,
  );
}

/** 돌바닥 (클럽하우스 광장) */
export function stoneTexture(repeat = 1): THREE.Texture | null {
  return makeTexture(
    'stone',
    512,
    512,
    (ctx, w, h) => {
      const rand = seeded(4477);
      ctx.fillStyle = '#c9bda2';
      ctx.fillRect(0, 0, w, h);

      const cell = 64;
      for (let y = 0; y < h; y += cell) {
        const offset = (y / cell) % 2 === 0 ? 0 : cell / 2;
        for (let x = -cell; x < w + cell; x += cell) {
          const gx = x + offset;
          const tint = 232 + Math.floor(rand() * 22);
          ctx.fillStyle = `rgb(${tint}, ${tint - 12}, ${tint - 32})`;
          ctx.fillRect(gx + 2, y + 2, cell - 4, cell - 4);
          ctx.strokeStyle = 'rgba(150,136,110,0.35)';
          ctx.lineWidth = 1;
          ctx.strokeRect(gx + 2, y + 2, cell - 4, cell - 4);
        }
      }
      speckle(ctx, w, h, 2000, ['#ded3bb', '#bcb096', '#e8dfc9'], rand, 2);
    },
    repeat,
    repeat,
  );
}

/** 물 표면: 잔물결 하이라이트 */
export function waterTexture(repeat = 0.15): THREE.Texture | null {
  return makeTexture(
    'water',
    512,
    512,
    (ctx, w, h) => {
      const rand = seeded(9923);
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#2f9fd6');
      grad.addColorStop(0.5, '#3cb2e6');
      grad.addColorStop(1, '#2b8fc4');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < 240; i += 1) {
        const x = rand() * w;
        const y = rand() * h;
        const len = 8 + rand() * 46;
        ctx.strokeStyle = `rgba(255,255,255,${0.04 + rand() * 0.16})`;
        ctx.lineWidth = 1 + rand() * 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(x + len * 0.5, y - 4 - rand() * 6, x + len, y);
        ctx.stroke();
      }
    },
    repeat,
    repeat,
  );
}

/** 하늘 그라데이션 (돔에 입힌다) */
export function skyTexture(): THREE.Texture | null {
  return makeTexture('sky', 64, 512, (ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#3f8fd6');
    grad.addColorStop(0.34, '#7dc0ee');
    grad.addColorStop(0.62, '#bfe4fb');
    grad.addColorStop(0.78, '#e8f7ff');
    grad.addColorStop(1, '#dff3e4');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  });
}

/** 깃발 천 */
export function flagTexture(): THREE.Texture | null {
  return makeTexture('flag', 256, 160, (ctx, w, h) => {
    ctx.fillStyle = '#ff5c78';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    ctx.beginPath();
    ctx.arc(w * 0.28, h * 0.5, h * 0.24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ff5c78';
    ctx.beginPath();
    ctx.arc(w * 0.28, h * 0.5, h * 0.12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = '700 46px system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('ONEOINE', w * 0.44, h * 0.54);
  });
}

/** 골프공 딤플 */
export function ballTexture(): THREE.Texture | null {
  return makeTexture('ball', 256, 256, (ctx, w, h) => {
    const rand = seeded(1211);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);
    for (let y = 8; y < h; y += 15) {
      for (let x = 8; x < w; x += 15) {
        const px = x + (y % 30 === 8 ? 7 : 0) + (rand() - 0.5) * 2;
        const py = y + (rand() - 0.5) * 2;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 5);
        grad.addColorStop(0, 'rgba(186,196,204,0.95)');
        grad.addColorStop(0.7, 'rgba(212,222,229,0.75)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  });
}

/** 부드러운 원형 (파티클·구름·글로우) */
export function softDotTexture(): THREE.Texture | null {
  return makeTexture('softdot', 128, 128, (ctx, w, h) => {
    const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.45, 'rgba(255,255,255,0.55)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  });
}

/** 구름 덩어리 (여러 개 겹친 부드러운 원) */
export function cloudTexture(): THREE.Texture | null {
  return makeTexture('cloud', 256, 128, (ctx, w, h) => {
    const rand = seeded(6262);
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < 14; i += 1) {
      const x = 40 + rand() * (w - 80);
      const y = h * 0.55 + (rand() - 0.5) * h * 0.4;
      const r = 22 + rand() * 34;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, 'rgba(255,255,255,0.95)');
      grad.addColorStop(0.6, 'rgba(255,255,255,0.6)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}

/** 공용: 텍스처가 없을 때 쓰는 단색 매터리얼 색 */
export const FALLBACK = {
  fairway: 0x7cc857,
  rough: 0x4e9a41,
  green: 0x86da5e,
  sand: 0xeddcb2,
  wood: 0xc9a074,
  stone: 0xe6dcc6,
  water: 0x39a9db,
};
