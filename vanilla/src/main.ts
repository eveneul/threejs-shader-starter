import { initThree } from "./core/three";
import { createExperience } from "./experience";
import { createRef } from "./core/loop/raf";
import { createResize } from "./core/loop/resize";

const canvas = document.querySelector<HTMLCanvasElement>("#canvas");
if (!canvas) throw new Error("canvas not found");

const { scene, camera, renderer } = initThree(canvas);

const experience = createExperience(scene);
const raf = createRef();

raf.add((dt) => {
  experience.update(dt);
  renderer.render(scene, camera);
});

createResize(camera, renderer);
