import * as THREE from "three";

type PerspectiveOptions = {
  fov?: number; // 시야각
};

type OrthoOptions = {
  zoom?: number;
};

type CreateCameraOptions = {
  type?: "perspective" | "orthographic";
  near?: number;
  far?: number;
  position?: [number, number, number];
  perspective?: PerspectiveOptions;
  orthographic?: OrthoOptions;
};

export function createCamera(options: CreateCameraOptions = {}) {
  const {
    type = "perspective",
    near = 0.1,
    far = 100,
    position = [0, 0, 5],
    perspective,
    orthographic,
  } = options;

  if (type === "orthographic") {
    const zoom = orthographic?.zoom ?? 1;
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    camera.position.z = 1;

    camera.zoom = zoom;
    camera.updateProjectionMatrix();

    return camera;
  }

  const fov = perspective?.fov ?? 45;

  const camera = new THREE.PerspectiveCamera(
    fov,
    window.innerWidth / window.innerHeight,
    near,
    far
  );

  camera.position.set(...position);

  return camera;
}
