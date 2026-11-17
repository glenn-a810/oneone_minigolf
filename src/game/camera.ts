import * as THREE from 'three';

/**
 * 공 뒤에서 공을 따라가는 3인칭 카메라.
 * yaw(좌우 회전)는 부드럽게 목표값으로 따라가고, 위치는 지수 감쇠로 보간한다.
 */
export class CameraRig {
  yaw = 0;
  pitch = 0.46;
  distance = 5.6;

  private targetYaw = 0;
  private targetDistance = 5.6;
  private smoothDist = 5.6;
  private smoothPos = new THREE.Vector3();
  private smoothLook = new THREE.Vector3();
  private initialized = false;

  /** 방향 벡터를 바라보도록 카메라를 정렬 */
  faceTo(dirX: number, dirZ: number, immediate = false): void {
    this.targetYaw = Math.atan2(-dirX, -dirZ);
    if (immediate) this.yaw = this.targetYaw;
  }

  setDistance(distance: number): void {
    this.targetDistance = distance;
  }

  /** 드래그로 카메라 회전 (dx, dy 는 픽셀 델타) */
  orbitBy(dx: number, dy: number, scale = 1): void {
    const dYaw = -dx * 0.0055 * scale;
    this.yaw += dYaw;
    this.targetYaw += dYaw;
    this.pitch = THREE.MathUtils.clamp(this.pitch + dy * 0.0035 * scale, 0.12, 1.12);
  }

  snap(focus: THREE.Vector3): void {
    this.initialized = false;
    this.yaw = this.targetYaw;
    this.update(0.016, focus, null, true);
  }

  update(dt: number, focus: THREE.Vector3, camera: THREE.Camera | null, immediate = false): void {
    let diff = this.targetYaw - this.yaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.yaw += diff * (immediate ? 1 : 1 - Math.exp(-5 * dt));

    const dist = THREE.MathUtils.lerp(this.smoothDist, this.targetDistance, immediate ? 1 : 1 - Math.exp(-4 * dt));
    this.smoothDist = dist;

    const horizontal = dist * Math.cos(this.pitch);
    const height = dist * Math.sin(this.pitch);

    const desiredX = focus.x + Math.sin(this.yaw) * horizontal;
    const desiredY = focus.y + height;
    const desiredZ = focus.z + Math.cos(this.yaw) * horizontal;

    if (!this.initialized || immediate) {
      this.smoothPos.set(desiredX, desiredY, desiredZ);
      this.smoothLook.copy(focus);
      this.initialized = true;
    } else {
      const k = 1 - Math.exp(-9 * dt);
      this.smoothPos.x += (desiredX - this.smoothPos.x) * k;
      this.smoothPos.y += (desiredY - this.smoothPos.y) * k;
      this.smoothPos.z += (desiredZ - this.smoothPos.z) * k;
      this.smoothLook.lerp(focus, 1 - Math.exp(-14 * dt));
    }

    if (camera) {
      camera.position.copy(this.smoothPos);
      camera.lookAt(this.smoothLook);
    }
  }
}
