import * as THREE from "three";

export function createExperience(scene: THREE.Scene) {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  return {
    update(dt: number) {
      mesh.rotation.y += dt;
      mesh.rotation.x += dt * 0.6;
    },

    dispost() {
      geometry.dispose();
      material.dispose();
    },
  };
}
