import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

/**
 * 룩 전환용 지오메트리 도구.
 *
 * - `smoothNormals`  : 각진 로우폴리 메시의 정점 노멀을 평균 내 곡면처럼 만든다 (모서리는 유지)
 * - `roundedGeometry`: 로우폴리 파츠(상자·원기둥·원뿔·이코사헤드론)를 분할이 많은 둥근 메시로 바꾼다
 * - `ensureBoxUv`    : 월드 미터 단위 박스 투영 UV 를 만들어 PBR 텍스처를 입힐 수 있게 한다
 *
 * 실사(real) 룩에서만 쓰인다. 폴리 룩은 원래 지오메트리를 그대로 쓰므로 이 파일이 관여하지 않는다.
 */

const CREASE_45 = Math.cos((45 * Math.PI) / 180);
const CREASE_60 = Math.cos((72 * Math.PI) / 180);

const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _c = new THREE.Vector3();
const _ab = new THREE.Vector3();
const _ac = new THREE.Vector3();
const _face = new THREE.Vector3();
const _avg = new THREE.Vector3();
const _e1 = new THREE.Vector3();
const _e2 = new THREE.Vector3();
const _corners = [_a, _b, _c];

/**
 * 같은 위치의 정점 노멀을 면적·각도 가중 평균해 부드러운 곡면 노멀을 만든다.
 * `crease` 보다 크게 꺾인 모서리(상자 모서리 등)는 면 노멀을 그대로 남겨 각을 지킨다.
 *
 * 원본 지오메트리의 normal 속성만 교체하며(비인덱스 기준) 같은 객체를 돌려준다.
 */
export function smoothNormals(geometry: THREE.BufferGeometry, creaseCos: number = CREASE_45): THREE.BufferGeometry {
  let geo = geometry;
  if (geo.index) {
    geo = geo.toNonIndexed();
  }
  const position = geo.getAttribute('position') as THREE.BufferAttribute | undefined;
  if (!position || position.count < 3) return geo;

  const count = position.count;
  const welded = new Int32Array(count);
  const keyToId = new Map<string, number>();
  let weldedCount = 0;
  for (let i = 0; i < count; i += 1) {
    const key = `${Math.round(position.getX(i) * 1000)},${Math.round(position.getY(i) * 1000)},${Math.round(
      position.getZ(i) * 1000,
    )}`;
    let id = keyToId.get(key);
    if (id === undefined) {
      id = weldedCount;
      weldedCount += 1;
      keyToId.set(key, id);
    }
    welded[i] = id;
  }

  const faceCount = Math.floor(count / 3);
  const faceNormals = new Float32Array(faceCount * 3);
  const accum = new Float32Array(weldedCount * 3);

  for (let f = 0; f < faceCount; f += 1) {
    const i0 = f * 3;
    _a.fromBufferAttribute(position, i0);
    _b.fromBufferAttribute(position, i0 + 1);
    _c.fromBufferAttribute(position, i0 + 2);
    _ab.subVectors(_b, _a);
    _ac.subVectors(_c, _a);
    _face.crossVectors(_ab, _ac);
    const area = _face.length();
    if (area > 1e-12) _face.divideScalar(area);
    faceNormals[i0] = _face.x;
    faceNormals[i0 + 1] = _face.y;
    faceNormals[i0 + 2] = _face.z;
    for (let k = 0; k < 3; k += 1) {
      const current = _corners[k];
      _e1.subVectors(_corners[(k + 1) % 3], current);
      _e2.subVectors(_corners[(k + 2) % 3], current);
      const l1 = _e1.length();
      const l2 = _e2.length();
      const weight =
        l1 > 1e-9 && l2 > 1e-9 ? Math.acos(THREE.MathUtils.clamp(_e1.dot(_e2) / (l1 * l2), -1, 1)) : 0;
      const id = welded[i0 + k] * 3;
      accum[id] += _face.x * weight;
      accum[id + 1] += _face.y * weight;
      accum[id + 2] += _face.z * weight;
    }
  }

  const normals = new Float32Array(count * 3);
  for (let f = 0; f < faceCount; f += 1) {
    const i0 = f * 3;
    _face.set(faceNormals[i0], faceNormals[i0 + 1], faceNormals[i0 + 2]);
    const faceLength = _face.length();
    if (faceLength < 1e-9) {
      for (let k = 0; k < 3; k += 1) normals[(i0 + k) * 3 + 1] = 1;
      continue;
    }
    _face.divideScalar(faceLength);
    for (let k = 0; k < 3; k += 1) {
      const vertex = i0 + k;
      const id = welded[vertex] * 3;
      _avg.set(accum[id], accum[id + 1], accum[id + 2]);
      if (_avg.lengthSq() < 1e-12) {
        normals[vertex * 3] = _face.x;
        normals[vertex * 3 + 1] = _face.y;
        normals[vertex * 3 + 2] = _face.z;
        continue;
      }
      _avg.normalize();
      const useAvg = _avg.dot(_face) >= creaseCos;
      normals[vertex * 3] = useAvg ? _avg.x : _face.x;
      normals[vertex * 3 + 1] = useAvg ? _avg.y : _face.y;
      normals[vertex * 3 + 2] = useAvg ? _avg.z : _face.z;
    }
  }

  geo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  return geo;
}

/** 곡면 룩: 60° 까지 부드럽게 (실사 메시는 대부분 둥글다) */
export const CREASE_REAL = CREASE_60;

function hash3(x: number, y: number, z: number): number {
  const s = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453;
  return s - Math.floor(s);
}

/** 정점을 노멀 방향으로 살짝 밀어 유기적인 요철을 만든다 (나뭇잎·바위) */
function organicDisplace(geo: THREE.BufferGeometry, amount: number): void {
  const position = geo.getAttribute('position') as THREE.BufferAttribute;
  const normal = geo.getAttribute('normal') as THREE.BufferAttribute | undefined;
  const seed = Math.abs(Math.round(amount * 10000)) + 1;
  if (!position) return;
  geo.computeVertexNormals();
  const nrm = (geo.getAttribute('normal') as THREE.BufferAttribute) ?? normal;
  for (let i = 0; i < position.count; i += 1) {
    const x = position.getX(i);
    const y = position.getY(i);
    const z = position.getZ(i);
    // 위치 기반이라 같은 정점은 늘 같은 방향으로 밀린다 (이음매가 벌어지지 않는다)
    const n = hash3(x * seed, y * seed, z * seed) - 0.5;
    const nx = nrm ? nrm.getX(i) : 0;
    const ny = nrm ? nrm.getY(i) : 0;
    const nz = nrm ? nrm.getZ(i) : 0;
    position.setXYZ(i, x + nx * n * amount, y + ny * n * amount, z + nz * n * amount);
  }
  geo.computeVertexNormals();
}

interface GeoParams {
  width?: number;
  height?: number;
  depth?: number;
  radius?: number;
  radiusTop?: number;
  radiusBottom?: number;
  radialSegments?: number;
  heightSegments?: number;
  openEnded?: boolean;
  detail?: number;
  tubularSegments?: number;
  thetaSegments?: number;
  phiStart?: number;
  phiLength?: number;
  thetaLength?: number;
  thetaStart?: number;
  segments?: number;
  innerRadius?: number;
  outerRadius?: number;
  widthSegments?: number;
  tube?: number;
  arc?: number;
}

/**
 * 로우폴리 파츠를 분할이 많은 둥근 메시로 변환한다.
 * 치수(폭·높이·지름)는 그대로 두고 면 수만 늘리므로, 소품의 위치·크기 배치는 손대지 않아도 된다.
 */
export function roundedGeometry(
  source: THREE.BufferGeometry,
  organic = false,
  detailOverride?: number,
): THREE.BufferGeometry {
  const params = (source as unknown as { parameters?: GeoParams }).parameters ?? {};
  const type = source.type;
  let out: THREE.BufferGeometry;

  switch (type) {
    case 'BoxGeometry': {
      const w = params.width ?? 1;
      const h = params.height ?? 1;
      const d = params.depth ?? 1;
      const radius = Math.min(w, h, d) * 0.2;
      out = new RoundedBoxGeometry(w, h, d, 2, Math.max(0.001, radius));
      break;
    }
    case 'CylinderGeometry': {
      const rt = params.radiusTop ?? 1;
      const rb = params.radiusBottom ?? 1;
      const h = params.height ?? 1;
      const seg = Math.max(16, params.radialSegments ?? 8);
      const hSeg = Math.max(1, Math.min(4, (params.heightSegments ?? 1) + 1));
      out = new THREE.CylinderGeometry(rt, rb, h, seg, hSeg, params.openEnded ?? false);
      break;
    }
    case 'ConeGeometry': {
      const r = params.radius ?? 1;
      const h = params.height ?? 1;
      const seg = Math.max(20, params.radialSegments ?? 8);
      const hSeg = Math.max(3, params.heightSegments ?? 1);
      out = new THREE.ConeGeometry(r, h, seg, hSeg);
      if (organic) organicDisplace(out, r * 0.06);
      break;
    }
    case 'IcosahedronGeometry': {
      const r = params.radius ?? 1;
      const detail = detailOverride ?? Math.max(1, Math.min(2, (params.detail ?? 0) + 1));
      out = new THREE.IcosahedronGeometry(r, Math.max(1, Math.min(3, detail)));
      if (organic) organicDisplace(out, r * 0.16);
      break;
    }
    case 'SphereGeometry': {
      const r = params.radius ?? 1;
      out = new THREE.SphereGeometry(
        r,
        Math.max(18, params.widthSegments ?? 12),
        Math.max(12, (params.heightSegments ?? 8) + 4),
      );
      break;
    }
    case 'TorusGeometry': {
      out = new THREE.TorusGeometry(
        params.radius ?? 1,
        params.tube ?? 0.4,
        Math.max(10, params.radialSegments ?? 8),
        Math.max(24, params.tubularSegments ?? 16),
      );
      break;
    }
    case 'RingGeometry': {
      out = new THREE.RingGeometry(
        params.innerRadius ?? 0.5,
        params.outerRadius ?? 1,
        Math.max(40, params.thetaSegments ?? 16),
      );
      break;
    }
    case 'CircleGeometry': {
      out = new THREE.CircleGeometry(params.radius ?? 1, Math.max(40, params.segments ?? 16));
      break;
    }
    case 'PlaneGeometry': {
      const w = params.width ?? 1;
      const h = params.height ?? 1;
      const ws = params.widthSegments ?? 1;
      const hs = params.heightSegments ?? 1;
      out = new THREE.PlaneGeometry(w, h, Math.min(16, Math.max(ws, Math.ceil(w * 2))), Math.min(16, Math.max(hs, Math.ceil(h * 2))));
      break;
    }
    default:
      out = source.clone();
      break;
  }

  out.computeVertexNormals();
  return out;
}

/**
 * 지오메트리에 월드 미터 단위 박스 투영 UV 를 만든다 (없을 때만).
 * 면마다 법선이 가장 큰 축을 골라 그 평면 좌표를 그대로 UV 로 쓴다 → 텍스처가 1m 격자로 반복된다.
 * @returns 새로 만들었으면 true
 */
export function ensureBoxUv(geometry: THREE.BufferGeometry): boolean {
  if (geometry.getAttribute('uv')) return false;
  const position = geometry.getAttribute('position') as THREE.BufferAttribute | undefined;
  if (!position) return false;
  const count = position.count;
  const uv = new Float32Array(count * 2);

  for (let i = 0; i < count; i += 3) {
    _a.fromBufferAttribute(position, i);
    _b.fromBufferAttribute(position, i + 1);
    _c.fromBufferAttribute(position, i + 2);
    _ab.subVectors(_b, _a);
    _ac.subVectors(_c, _a);
    _face.crossVectors(_ab, _ac);
    const ax = Math.abs(_face.x);
    const ay = Math.abs(_face.y);
    const az = Math.abs(_face.z);
    const flat = ay >= ax && ay >= az;
    const alongX = !flat && ax >= az;
    for (let k = 0; k < 3; k += 1) {
      const px = position.getX(i + k);
      const py = position.getY(i + k);
      const pz = position.getZ(i + k);
      const u = flat ? px : alongX ? pz : px;
      const v = flat ? pz : py;
      uv[(i + k) * 2] = u;
      uv[(i + k) * 2 + 1] = v;
    }
  }

  geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return true;
}
