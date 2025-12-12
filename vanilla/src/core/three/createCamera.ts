import * as THREE from "three";

type CreateCameraOptions = {
  fov?: number; // 시야각
  near?: number;
  far?: number;
  position?: [number, number, number];
};

export function createCamera(
  options: CreateCameraOptions = {}
): THREE.PerspectiveCamera {
  const { fov = 45, near = 0.1, far = 100, position = [0, 0, 5] } = options;

  const camera = new THREE.PerspectiveCamera(
    fov,
    window.innerWidth / window.innerHeight,
    near,
    far
  );

  camera.position.set(...position);

  return camera;
}
