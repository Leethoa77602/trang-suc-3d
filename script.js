// Khởi tạo cảnh 3D
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, 400);
document.getElementById('viewer').appendChild(renderer.domElement);

// Thêm ngọc vào cảnh
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

// Hiệu ứng xoay
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Thay đổi màu ngọc khi người dùng chọn
document.getElementById('ngoc').addEventListener('change', function(event) {
  const color = event.target.value === 'white' ? 0xffffff : 0x000000;
  sphere.material.color.set(color);
});
// Khởi tạo cảnh 3D
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, 400);
document.getElementById('viewer').appendChild(renderer.domElement);

camera.position.z = 5;

// Ngọc
const ngocGeometry = new THREE.SphereGeometry(1, 32, 32);
const ngocMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const ngoc = new THREE.Mesh(ngocGeometry, ngocMaterial);
scene.add(ngoc);

// Charm
const charmGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const charmMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 }); // Màu vàng
const charm = new THREE.Mesh(charmGeometry, charmMaterial);
charm.position.set(1.5, 0, 0); // Đặt charm gần ngọc
scene.add(charm);

// Dây
const dayGeometry = new THREE.CylinderGeometry(0.05, 0.05, 5, 32);
const dayMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 }); // Màu dây da
const day = new THREE.Mesh(dayGeometry, dayMaterial);
day.rotation.z = Math.PI / 2; // Nằm ngang
scene.add(day);

// Khóa
const khoaGeometry = new THREE.TorusGeometry(0.3, 0.1, 16, 100);
const khoaMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa }); // Màu xám
const khoa = new THREE.Mesh(khoaGeometry, khoaMaterial);
khoa.position.set(-2.5, 0, 0); // Đặt khóa đầu dây
scene.add(khoa);

// Tương tác người dùng
document.getElementById('ngoc').addEventListener('change', function (event) {
  const color = event.target.value === 'white' ? 0xffffff : 0x000000;
  ngoc.material.color.set(color);
});

document.getElementById('charm').addEventListener('change', function (event) {
  const value = event.target.value;
  if (value === 'none') {
    charm.visible = false;
  } else {
    charm.visible = true;
    charm.material.color.set(value === 'gold' ? 0xffd700 : 0xc0c0c0); // Vàng hoặc Bạc
  }
});

document.getElementById('day').addEventListener('change', function (event) {
  const value = event.target.value;
  day.material.color.set(value === 'leather' ? 0x8b4513 : 0xd3d3d3); // Da hoặc Kim loại
});

document.getElementById('khoa').addEventListener('change', function (event) {
  const value = event.target.value;
  khoa.material.color.set(value === 'basic' ? 0xaaaaaa : 0xff69b4); // Thường hoặc Fancy
});

// Hoạt động render
function animate() {
  requestAnimationFrame(animate);
  ngoc.rotation.y += 0.01; // Xoay ngọc để nhìn đẹp
  charm.rotation.y += 0.01; // Xoay charm
  renderer.render(scene, camera);
}
animate();
