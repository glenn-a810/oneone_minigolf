import * as THREE from 'three';

/**
 * 골퍼 뒤에서 공을 따라가는 3인칭 카메라.
 * - 조준 방향(yaw) 뒤쪽에 서서 공과 홀을 함께 본다
 * - 비행 중에는 살짝 멀어지며 공을 따라가고, 멈추면 다시 가까이 붙는다
 * - 위치/시선은 지수 감쇠로 부드럽게 보간한다
 */
export class CameraRig {
  yaw = 0;
  pitch = 0.34;
  distance = 10;

  private targetYaw = 0;
  private targetPitch = 0.34;
  private targetDistance = 10;
  private smoothDistance = 10;
  private smoothPitch = 0.34;
  private readonly smoothPos = new THREE.Vector3();
  private readonly smoothLook = new THREE.Vector3();
  private initialized = false;

  constructor(pitch = 0.34, distance = 10) {
    this.pitch = pitch;
    this.targetPitch = pitch;
    this.distance = distance;
    this.targetDistance = distance;
    this.smoothDistance = distance;
    this.smoothPitch = pitch;
  }

  /** 조준 방향(라디안, 0 = -z)을 바라보도록 카메라를 뒤에 세운다 */
  setAim(yaw: number, immediate = false): void {
    this.targetYaw = yaw;
    if (immediate) this.yaw = yaw;
  }

  setDistance(distance: number): void {
    this.targetDistance = distance;
  }

  setPitch(pitch: number): void {
    this.targetPitch = THREE.MathUtils.clamp(pitch, 0.08, 1.4);
  }

  nudgePitch(delta: number): void {
    this.setPitch(this.targetPitch + delta);
  }

  /** 카메라를 직접 회전 (자유 시점, 미리보기용) */
  orbitBy(dx: number, dy: number): void {
    this.yaw += -dx * 0.005;
    this.targetYaw = this.yaw;
    this.nudgePitch(dy * 0.003);
  }

  snap(focus: THREE.Vector3, camera?: THREE.Camera): void {
    this.yaw = this.targetYaw;
    this.smoothPitch = this.targetPitch;
    this.smoothDistance = this.targetDistance;
    this.initialized = false;
    this.update(0.016, focus, camera ?? null, true);
  }

  /** 공 위치 + 조준 방향 + 살짝 앞쪽 시선 */
  update(
    dt: number,
    focus: THREE.Vector3,
    camera: THREE.Camera | null,
    immediate = false,
    lookAhead = 0,
  ): void {
    let diff = this.targetYaw - this.yaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.yaw += diff * (immediate ? 1 : 1 - Math.exp(-6 * dt));

    const lerp = immediate ? 1 : 1 - Math.exp(-4 * dt);
    this.smoothDistance += (this.targetDistance - this.smoothDistance) * lerp;
    this.smoothPitch += (this.targetPitch - this.smoothPitch) * lerp;

    const dist = this.smoothDistance;
    const horizontal = dist * Math.cos(this.smoothPitch);
    const height = dist * Math.sin(this.smoothPitch);

    const forwardX = Math.sin(this.yaw);
    const forwardZ = -Math.cos(this.yaw);

    const desiredX = focus.x - forwardX * horizontal;
    const desiredY = focus.y + height;
    const desiredZ = focus.z - forwardZ * horizontal;

    const lookX = focus.x + forwardX * lookAhead;
    const lookY = focus.y + 0.25 + lookAhead * 0.06;
    const lookZ = focus.z + forwardZ * lookAhead;

    if (!this.initialized || immediate) {
      this.smoothPos.set(desiredX, desiredY, desiredZ);
      this.smoothLook.set(lookX, lookY, lookZ);
      this.initialized = true;
    } else {
      const k = 1 - Math.exp(-7 * dt);
      this.smoothPos.x += (desiredX - this.smoothPos.x) * k;
      this.smoothPos.y += (desiredY - this.smoothPos.y) * k;
      this.smoothPos.z += (desiredZ - this.smoothPos.z) * k;
      const kLook = 1 - Math.exp(-10 * dt);
      this.smoothLook.x += (lookX - this.smoothLook.x) * kLook;
      this.smoothLook.y += (lookY - this.smoothLook.y) * kLook;
      this.smoothLook.z += (lookZ - this.smoothLook.z) * kLook;
    }

    if (camera) {
      camera.position.copy(this.smoothPos);
      camera.lookAt(this.smoothLook);
    }
  }
}
