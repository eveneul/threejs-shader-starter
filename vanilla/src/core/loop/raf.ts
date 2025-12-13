export function createRef() {
  let lastTime = performance.now();
  const fns = new Set<(dt: number) => void>();

  function loop(now: number) {
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    fns.forEach((fn) => fn(dt));
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  return {
    add(fn: (dt: number) => void) {
      fns.add(fn);
    },

    remove(fn: (dt: number) => void) {
      fns.delete(fn);
    },
  };
}
