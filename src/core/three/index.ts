import * as THREE from "three";
import { createScene } from "./createScene";
import { createCamera } from "./createCamera";
import { createRenderer } from "./createRenderer";

export function initThree(canvas: HTMLCanvasElement) {
  const scene = createScene();
  const camera = createCamera({
    type: "orthographic",
    orthographic: { zoom: 1 },
    position: [0, 0, 1],
  });
  const renderer = createRenderer({ canvas });

  return {
    scene,
    camera,
    renderer,
  } as {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
    renderer: THREE.WebGLRenderer;
  };
}
