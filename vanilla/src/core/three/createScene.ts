import * as THREE from "three";

export type CreateSceneOptions = {
  background?: THREE.ColorRepresentation | null;
  fog?: {
    color?: THREE.ColorRepresentation;
    near?: number;
    far?: number;
  } | null;
};

export function createScene(options: CreateSceneOptions = {}) {
  const scene = new THREE.Scene();

  if (options.background === null) {
    // 백그라운드를 의도적으로 투명하게 설정
    scene.background = null;
  } else if (options.background !== undefined) {
    scene.background = new THREE.Color(options.background);
  }

  if (options.fog) {
    const { color = 0x0b0b0b, near = 5, far = 30 } = options.fog;

    scene.fog = new THREE.Fog(new THREE.Color(color), near, far);
  }

  return scene;
}
