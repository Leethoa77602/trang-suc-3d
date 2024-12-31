import * as THREE from 'https://cdn.jsdelivr.net/npm/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('braceletPreview') });

renderer.setSize(500, 300);
camera.position.z = 5;

// Tạo hạt ngọc trai
const pearlGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const pearlMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const pearl = new THREE.Mesh(pearlGeometry, pearlMaterial);
scene.add(pearl);

// Tạo dây
const cordGeometry = new THREE.CylinderGeometry(0.02, 0.02, 2, 32);
const cordMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
const cord = new THREE.Mesh(cordGeometry, cordMaterial);
scene.add(cord);

// Vẽ vòng
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
document.getElementById('pearls').addEventListener('change', (event) => {
  const color = event.target.value === 'pearl1' ? 0xffffff : 0xff0000;
  pearl.material.color.set(color);
});
