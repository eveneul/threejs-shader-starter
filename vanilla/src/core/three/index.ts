import { createScene } from "./createScene";
import { createCamera } from "./createCamera";
import { createRenderer } from "./createRenderer";

export function initThree(canvas: HTMLCanvasElement) {
  const scene = createScene();
  const camera = createCamera();
  const renderer = createRenderer({ canvas });

  return {
    scene,
    camera,
    renderer,
  };
}
