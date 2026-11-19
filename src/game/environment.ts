import * as THREE from 'three';
import { createCloudSprite } from './scenery';
import { skyTexture, softDotTexture } from './textures';
import { markGround } from './graphics';

/**
 * 하늘 돔 + 구름 + 태양 글로우 + 원경 언덕.
 * 플레이룸과 대기실이 같은 톤(맑은 하늘·부드러운 안개·따뜻한 햇빛)을 쓰도록 공용으로 만든다.
 */

export function applyRendererLook(renderer: THREE.WebGLRenderer): void {
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
}

export interface SkyOptions {
  radius?: number;
  cloudCount?: number;
  sunDirection?: THREE.Vector3;
  hills?: boolean;
}

export interface SkyHandle {
  update: (dt: number) => void;
  dispose: () => void;
}

export function buildSky(scene: THREE.Scene, options: SkyOptions = {}): SkyHandle {
  const radius = options.radius ?? 170;
  const cloudCount = options.cloudCount ?? 9;
  const group = new THREE.Group();

  const skyMap = skyTexture();
  const domeGeo = new THREE.SphereGeometry(radius, 32, 20);
  const domeMat = new THREE.MeshBasicMaterial({
    map: skyMap ?? null,
    color: skyMap ? 0xffffff : 0x9fd6f5,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
  });
  const dome = new THREE.Mesh(domeGeo, domeMat);
  dome.renderOrder = -10;
  group.add(dome);

  // 태양 글로우
  const sunDir = (options.sunDirection ?? new THREE.Vector3(0.42, 0.62, 0.5)).clone().normalize();
  const glowMap = softDotTexture();
  if (glowMap) {
    const glowMat = new THREE.SpriteMaterial({
      map: glowMap,
      color: 0xfff3cf,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      fog: false,
      blending: THREE.AdditiveBlending,
    });
    const glow = new THREE.Sprite(glowMat);
    glow.position.copy(sunDir).multiplyScalar(radius * 0.82);
    glow.scale.setScalar(radius * 0.52);
    group.add(glow);
  }

  // 구름 스프라이트 (천천히 흐른다)
  const clouds: Array<{ sprite: THREE.Sprite; angle: number; radius: number; speed: number; y: number }> = [];
  for (let i = 0; i < cloudCount; i += 1) {
    const sprite = createCloudSprite(0.7 + Math.random() * 0.9);
    if (!sprite) break;
    const angle = (i / cloudCount) * Math.PI * 2 + Math.random() * 0.5;
    const distance = 60 + Math.random() * 60;
    const y = 26 + Math.random() * 22;
    sprite.position.set(Math.cos(angle) * distance, y, Math.sin(angle) * distance);
    sprite.material.opacity = 0.55 + Math.random() * 0.3;
    group.add(sprite);
    clouds.push({ sprite, angle, radius: distance, speed: 0.006 + Math.random() * 0.008, y });
  }

  // 원경 언덕/숲 실루엣 — 폴리는 7각 봉우리, 실사는 같은 자리를 둥근 능선으로 바꾼다
  if (options.hills !== false) {
    // 원경 언덕은 텍스처 없이 매트한 초록면으로 (먼 거리에서 텍스처가 반짝이지 않게)
    const hillMat = markGround(
      new THREE.MeshStandardMaterial({ color: 0x4f8f52, roughness: 1, flatShading: true }),
      'turf',
    );
    hillMat.userData.oneonePlainReal = true;
    for (let i = 0; i < 26; i += 1) {
      const angle = (i / 26) * Math.PI * 2 + Math.random() * 0.25;
      // 들판(반경 100m) 밖에 두어 지면과 교차하며 생기는 지글거림을 피한다
      const distance = 112 + Math.random() * 38;
      const size = 18 + Math.random() * 18;
      const hill = new THREE.Mesh(new THREE.ConeGeometry(size, size * 0.62, 7), hillMat);
      hill.position.set(Math.cos(angle) * distance, -9 + Math.random() * 2.5, Math.sin(angle) * distance);
      hill.rotation.y = Math.random() * Math.PI;
      hill.receiveShadow = false;
      hill.userData.realRound = true;
      group.add(hill);
    }
  }

  scene.add(group);

  let time = 0;
  return {
    update(dt: number): void {
      time += dt;
      for (const cloud of clouds) {
        cloud.angle += cloud.speed * dt;
        cloud.sprite.position.x = Math.cos(cloud.angle) * cloud.radius;
        cloud.sprite.position.z = Math.sin(cloud.angle) * cloud.radius;
        cloud.sprite.position.y = cloud.y + Math.sin(time * 0.25 + cloud.angle) * 0.6;
      }
    },
    dispose(): void {
      scene.remove(group);
      domeGeo.dispose();
      domeMat.dispose();
      group.traverse((object) => {
        const sprite = object as THREE.Sprite;
        if (sprite.isSprite) sprite.material.dispose();
        const mesh = object as THREE.Mesh;
        if (mesh.isMesh) mesh.geometry.dispose();
      });
    },
  };
}
