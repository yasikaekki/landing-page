let width = window.innerWidth; //lebar akan disesuaikan sama ukuran jendela aplikasi
let height = window.innerHeight; //tinggi akan disesuaikan sama ukuran jendela aplikasi
const scene = new THREE.Scene(); //deklarasikan scene

const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000); //mendeklarasikan kamera
scene.add(camera); //menambahkan kamera ke dalam scene 1

//mengatur posisi kamera
camera.position.x = 0; //posisi kamera di sumbu x = koordinat 0
camera.position.y = 0; //posisi kamera di sumbu y = koordinat 0
camera.position.z = 5; //posisi kamera di sumbu z = koordinat 5

//menambahkan renderer
const renderer = new THREE.WebGLRenderer({alpha: true}); //alpha true = background transparan, warna menyesuaikan background html
renderer.setSize(width, height); //ukuran menyesuaikan lebar sama tinggi scene
document.body.appendChild(renderer.domElement); //agar html mengenali scene 3d kita sebagai bagian dari <body>

const serf = new THREE.TextureLoader().load('./img/Serf2.jpg');
const kotak = new THREE.BoxGeometry( -2.50, 1.50, 0 ); //tambahkan objek kotak
//angka/nilai pertama = lebar kotak
//angka kedua = tinggi kotak
//angka ketiga = panjang/kedalaman kotak

const objek = new THREE.MeshBasicMaterial( {map: serf} ); //menambah material/warna
const kotak1 = new THREE.Mesh( kotak, objek ); //kotak sama materialnya itu nggak langsung muncul di scene, oleh sebab itu kita harus
//menambahkan kotak sama material/warnanya dalam bentuk mesh. meshnya namanya kotak1.

//atur posisi kotak1
kotak1.position.y = 0; //posisi kotak di sumbu y
kotak1.position.x = -1.8; //posisi kotak di sumbu x
kotak1.position.z = 0; //posisi kotak di sumbu z
scene.add(kotak1); 

//duplikat kotak dengan menambahkan mesh dan material baru
const serf2 = new THREE.TextureLoader().load('./img/Serf1.jpg');
const objek2 = new THREE.MeshBasicMaterial( {map: serf2});
const kotak2 = new THREE.Mesh (kotak, objek2);
scene.add(kotak2);

//atur posisi kotak2
kotak2.position.y = 0; //posisi kotak di sumbu y
kotak2.position.x = 1.8; //posisi kotak di sumbu x
kotak2.position.z = 0; //posisi kotak di sumbu z

window.addEventListener('resize', function() {
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
} );
let controls = new THREE.OrbitControls(camera, renderer.domElement);

function update() {
    kotak1.rotation.y += 0.01; //animasi rotasi pada sumbu y dengan kecepatan 0.01 
    kotak2.rotation.y += 0.01;  
    requestAnimationFrame(update); //untuk menampilkan animasi yang telah dideklarasikan pada function update kalau kita menambahkan animasi
    renderer.render(scene,camera); //untuk merender tampilan 3d dari renderer
}

update(); //memanggil function update