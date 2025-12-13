import * as THREE from "three";

type ResizeOptions = {
  container?: HTMLElement | null; // 지정하면 특정 element 크기 기준, 생략이면 window 사이즈 기준
  maxDpr?: number; // dpr 상한 보통은 2
  onResize?: (size: { width: number; height: number; dpr: number }) => void;
};

export function createResize(
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer,
  options: ResizeOptions = {}
) {
  const { container = null, maxDpr = 2, onResize } = options;

  function getSize() {
    if (container) {
      const rect = container.getBoundingClientRect();
      return { width: rect.width, height: rect.height };
    }

    return { width: window.innerWidth, height: window.innerHeight };
  }

  function resize() {
    const { width, height } = getSize();
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);

    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height); // updateStyle true

    if (camera instanceof THREE.PerspectiveCamera) {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      return;
    }

    if (camera instanceof THREE.OrthographicCamera) {
      camera.left = -width / 2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = -height / 2;
      camera.updateProjectionMatrix();
      return;
    }
    onResize?.({ width, height, dpr });
  }

  // 컨테이너가 있으면 ResizeObserver가 더 정확함 (레이아웃 변동 때문에)
  let ro: ResizeObserver | null = null;

  if (container && "ResizeObserver" in window) {
    ro = new ResizeObserver(() => resize());
    ro.observe(container);
  } else {
    window.addEventListener("resize", resize);
  }

  resize(); //최초 한번

  return {
    resize,
    dispose() {
      if (ro) {
        ro.disconnect();
      } else {
        window.removeEventListener("resize", resize);
      }
    },
  };
}
