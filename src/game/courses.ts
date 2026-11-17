import type { HoleSpec } from './types';

/**
 * 3홀 골프 코스 정의 — 티박스 → 페어웨이 → 벙커/러프/워터 해저드 → 그린·홀컵.
 *
 * 좌표계: x = 오른쪽, z = 티 쪽이 +, 그린 쪽이 -. 1 유닛 = 1m.
 * `path` 는 페어웨이 중심선이며, 이 선을 따라 잔디 섬이 만들어진다.
 */
export const HOLES: HoleSpec[] = [
  {
    index: 0,
    par: 4,
    name: '퍼스트 드라이브',
    hint: '드라이버로 멀리 보낸 뒤 그린 왼쪽을 노려보세요',
    tee: [0, 32],
    cup: [1.5, -30],
    path: [
      [0, 32],
      [0, 24],
      [-1.5, 12],
      [0, 0],
      [1.5, -12],
      [1.5, -30],
    ],
    fairwayWidth: 6.4,
    roughWidth: 11.2,
    green: { x: 1.5, z: -30, r: 7 },
    zones: [{ kind: 'bunker', x: 8.6, z: -26.5, rx: 3.4, rz: 2.9 }],
    decor: [
      { kind: 'pine', x: -13.4, z: 26, s: 1.35, r: 0.55 },
      { kind: 'tree', x: 13.2, z: 22, s: 1.25, r: 0.6 },
      { kind: 'pine', x: -14.6, z: 12, s: 1.15, r: 0.5 },
      { kind: 'tree', x: 15.4, z: 8, s: 1.1, r: 0.55 },
      { kind: 'pine', x: -13.8, z: -1, s: 1.3, r: 0.5 },
      { kind: 'tree', x: 14.2, z: -8, s: 1.2, r: 0.55 },
      { kind: 'pine', x: 13.6, z: -18, s: 1.05, r: 0.45 },
      { kind: 'tree', x: -13.2, z: -20, s: 1.15, r: 0.5 },
      { kind: 'rock', x: -10.6, z: 4, s: 1.1, r: 0.6 },
      { kind: 'rock', x: 11.4, z: -2.4, s: 0.8, r: 0.5 },
      { kind: 'bush', x: 9.4, z: 14, s: 1, r: 0.4 },
      { kind: 'bush', x: -9.8, z: -14, s: 0.9, r: 0.4 },
      { kind: 'pine', x: 0, z: -40, s: 1.4, r: 0.5 },
      { kind: 'tree', x: -8, z: -38, s: 1.2, r: 0.5 },
      { kind: 'tree', x: 10, z: -37, s: 1.15, r: 0.5 },
    ],
  },
  {
    index: 1,
    par: 4,
    name: '도그레그 벙커',
    hint: '오른쪽으로 휘어지는 코스 · 그린 앞 벙커를 피하세요',
    tee: [0, 34],
    cup: [0, -30],
    path: [
      [0, 34],
      [0, 22],
      [3, 9],
      [7, -5],
      [4, -19],
      [0, -30],
    ],
    fairwayWidth: 6.2,
    roughWidth: 12,
    green: { x: 0, z: -30, r: 7.2 },
    zones: [
      { kind: 'water', x: -12.5, z: -3, rx: 6.4, rz: 7.4 },
      { kind: 'bunker', x: -7.4, z: -26, rx: 3.3, rz: 2.7 },
      { kind: 'bunker', x: 7.6, z: -25, rx: 2.6, rz: 2.2 },
    ],
    decor: [
      { kind: 'tree', x: -14.4, z: 28, s: 1.3, r: 0.55 },
      { kind: 'pine', x: 13.6, z: 30, s: 1.2, r: 0.5 },
      { kind: 'pine', x: -13.2, z: 14, s: 1.05, r: 0.45 },
      { kind: 'tree', x: 15.8, z: 16, s: 1.15, r: 0.55 },
      { kind: 'tree', x: 16.4, z: 1, s: 1.25, r: 0.6 },
      { kind: 'pine', x: -6.4, z: -14, s: 1.1, r: 0.45 },
      { kind: 'tree', x: 13.6, z: -13, s: 1.1, r: 0.5 },
      { kind: 'pine', x: 14.4, z: -30, s: 1.2, r: 0.5 },
      { kind: 'tree', x: -13.6, z: -34, s: 1.25, r: 0.55 },
      { kind: 'rock', x: -8.4, z: 6.4, s: 1, r: 0.6 },
      { kind: 'rock', x: 12.4, z: -4.6, s: 0.85, r: 0.5 },
      { kind: 'bush', x: 9.6, z: 22, s: 1.05, r: 0.4 },
      { kind: 'bush', x: -10.4, z: -20, s: 0.95, r: 0.4 },
      { kind: 'tree', x: -2, z: -40, s: 1.3, r: 0.5 },
    ],
  },
  {
    index: 2,
    par: 3,
    name: '워터 아일랜드',
    hint: '그린 앞 연못을 넘겨야 합니다 · 카트 길까지 거리 재기',
    tee: [0, 22],
    cup: [0.5, -24],
    path: [
      [0, 22],
      [0, 13],
      [0, 3],
      [0, -7],
      [0.5, -16],
      [0.5, -24],
    ],
    fairwayWidth: 6,
    roughWidth: 15,
    green: { x: 0.5, z: -24, r: 7.2 },
    zones: [
      { kind: 'water', x: 0, z: -5.5, rx: 12, rz: 6.2 },
      { kind: 'bunker', x: -7.8, z: -28.5, rx: 3.1, rz: 2.4 },
    ],
    decor: [
      { kind: 'pine', x: -15.6, z: 18, s: 1.3, r: 0.55 },
      { kind: 'tree', x: 15.2, z: 16, s: 1.2, r: 0.6 },
      { kind: 'pine', x: -16.4, z: 4, s: 1.1, r: 0.5 },
      { kind: 'tree', x: 16.6, z: 2, s: 1.15, r: 0.55 },
      { kind: 'pine', x: -15.2, z: -12, s: 1.05, r: 0.45 },
      { kind: 'tree', x: 15.8, z: -14, s: 1.1, r: 0.5 },
      { kind: 'pine', x: -12.6, z: -30, s: 1.2, r: 0.5 },
      { kind: 'tree', x: 12.4, z: -31, s: 1.25, r: 0.55 },
      { kind: 'rock', x: 10.4, z: -3.4, s: 1.1, r: 0.7 },
      { kind: 'rock', x: -10.8, z: -6.2, s: 0.9, r: 0.6 },
      { kind: 'bush', x: 8.6, z: 12, s: 1, r: 0.4 },
      { kind: 'bush', x: -8.4, z: 8, s: 0.95, r: 0.4 },
      { kind: 'pine', x: 4.4, z: -40, s: 1.35, r: 0.5 },
      { kind: 'tree', x: -6.4, z: -38, s: 1.2, r: 0.5 },
    ],
  },
];

export function holeCenter(index: number): [number, number] {
  const hole = HOLES[index] ?? HOLES[0];
  return [hole.green.x, hole.green.z];
}
