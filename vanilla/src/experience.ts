import * as THREE from "three";

export function createExperience(scene: THREE.Scene) {
  const geometry = new THREE.PlaneGeometry(2, 2);
  const material = new THREE.MeshNormalMaterial({
    side: THREE.DoubleSide,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  return {
    update(dt: number) {},

    dispose() {
      geometry.dispose();
      material.dispose();
    },
  };
}
