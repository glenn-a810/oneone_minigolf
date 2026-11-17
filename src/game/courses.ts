import type { HoleSpec } from './types';

/**
 * 3홀 미니골프 코스 정의.
 *
 * 좌표계: x = 오른쪽, z = 카메라 뒤쪽(+z). 티에서 -z 방향으로 공을 보낸다. 1 유닛 = 1m.
 * 모든 바닥은 y=0 평면에 상면이 맞춰져 있고, 벽은 바닥 위로 솟는다.
 */
export const HOLES: HoleSpec[] = [
  {
    index: 0,
    par: 2,
    name: '스타트 라인',
    hint: '뱅크월에 튕겨 방향을 바꿔보세요',
    tee: [0, 0.6],
    cup: [0, -5.9],
    slabs: [{ x: 0, z: -2.45, w: 3.4, d: 8.1 }],
    walls: [
      { x: -1.85, z: -2.45, w: 0.3, d: 8.1 },
      { x: 1.85, z: -2.45, w: 0.3, d: 8.1 },
      { x: 0, z: -6.65, w: 3.7, d: 0.3 },
      { x: 0, z: 1.75, w: 3.7, d: 0.3 },
    ],
    decor: [
      { kind: 'tree', x: -3.5, z: -0.4, s: 1.1 },
      { kind: 'tree', x: 3.6, z: -4.4, s: 0.95 },
      { kind: 'tree', x: -3.4, z: -5.6, s: 0.8 },
      { kind: 'rock', x: 3.1, z: 0.6, s: 0.7 },
      { kind: 'rock', x: -3.0, z: -2.6, s: 0.5 },
      { kind: 'cloud', x: -2.0, z: -9.0, y: 5.4, s: 1.0 },
      { kind: 'cloud', x: 5.5, z: -2.0, y: 6.4, s: 0.8 },
    ],
  },
  {
    index: 1,
    par: 3,
    name: '코너 턴',
    hint: '오른쪽으로 꺾인 뒤 둥근 경사 범프가 기다려요',
    tee: [0, 0.6],
    cup: [6.9, -4.1],
    slabs: [
      { x: 0, z: -2.2, w: 3.2, d: 7.6 },
      { x: 5.0, z: -4.1, w: 6.8, d: 3.8 },
    ],
    walls: [
      { x: -1.75, z: -2.2, w: 0.3, d: 7.6 },
      { x: 1.75, z: -0.3, w: 0.3, d: 3.8 },
      { x: 3.4, z: -6.15, w: 10.0, d: 0.3 },
      { x: 8.55, z: -4.1, w: 0.3, d: 3.8 },
      { x: 5.0, z: -2.05, w: 6.8, d: 0.3 },
      { x: 0, z: 1.75, w: 3.5, d: 0.3 },
    ],
    bumpers: [
      { x: 1.05, z: -2.75, r: 0.28 },
      { x: 2.7, z: -5.5, r: 0.26 },
      { x: 4.5, z: -2.6, r: 0.24 },
    ],
    humps: [{ x: 5.0, z: -4.1, r: 2.6, lift: 0.13 }],
    decor: [
      { kind: 'tree', x: 10.4, z: -2.2, s: 1.05 },
      { kind: 'tree', x: 10.2, z: -6.4, s: 0.85 },
      { kind: 'tree', x: -3.4, z: -3.2, s: 0.9 },
      { kind: 'rock', x: 1.2, z: -7.4, s: 0.6 },
      { kind: 'rock', x: 8.0, z: -7.2, s: 0.55 },
      { kind: 'cloud', x: 3.0, z: -10.0, y: 5.8, s: 1.1 },
      { kind: 'cloud', x: 11.5, z: -4.0, y: 6.6, s: 0.7 },
    ],
  },
  {
    index: 2,
    par: 3,
    name: '워터 브리지',
    hint: '움직이는 장애물을 피해 좁은 다리로 건너세요',
    tee: [0, 0.6],
    cup: [0.8, -9.0],
    slabs: [
      { x: 0, z: -0.9, w: 3.6, d: 5.0 },
      { x: 0.8, z: -4.9, w: 1.4, d: 3.0, kind: 'bridge' },
      { x: 0, z: -8.5, w: 3.6, d: 4.2 },
    ],
    walls: [
      { x: -1.95, z: -0.9, w: 0.3, d: 5.0 },
      { x: 1.95, z: -0.9, w: 0.3, d: 5.0 },
      { x: -1.95, z: -8.5, w: 0.3, d: 4.2 },
      { x: 1.95, z: -8.5, w: 0.3, d: 4.2 },
      { x: 0, z: -10.75, w: 3.9, d: 0.3 },
      { x: 0, z: 1.75, w: 3.9, d: 0.3 },
    ],
    movers: [{ x: 0, z: -2.2, w: 1.3, d: 0.45, h: 0.55, axis: 'x', range: 1.1, speed: 1.15 }],
    water: [{ x: 0, z: -4.9, w: 3.6, d: 3.0 }],
    decor: [
      { kind: 'tree', x: -3.6, z: -2.0, s: 1.0 },
      { kind: 'tree', x: 3.7, z: -7.6, s: 0.9 },
      { kind: 'tree', x: -3.4, z: -9.8, s: 0.8 },
      { kind: 'rock', x: 3.2, z: -1.2, s: 0.6 },
      { kind: 'cloud', x: -4.5, z: -5.0, y: 5.6, s: 0.9 },
      { kind: 'cloud', x: 4.0, z: -12.0, y: 6.2, s: 1.0 },
    ],
  },
];

export function holeSunTarget(index: number): [number, number] {
  const hole = HOLES[index] ?? HOLES[0];
  return hole.cup;
}
