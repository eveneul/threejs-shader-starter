import * as THREE from "three";

type CreateRendererOptions = {
  canvas: HTMLCanvasElement;
  alpha?: boolean;
  antialias?: boolean;
};

export function createRenderer({
  canvas,
  alpha = true,
  antialias = true,
}: CreateRendererOptions): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha,
    antialias,
    powerPreference: "high-performance",
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  return renderer;
}
