var scene, camera, renderer;
var geometry, material, mesh;
var light;

init();
animate();

function init() {
  scene = new THREE.Scene();

  const loader = new THREE.GLTFLoader();
  loader.load( 'scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

  geometry = new THREE.IcosahedronGeometry(200, 1);
  material = new THREE.MeshBasicMaterial({
    color: 0xfffffff,
    wireframe: false,
    wireframeLinewidth: 2,
  });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 500;

  //   light = new THREE.DirectionalLight("rgb(255, 255, 255)", 1.2);
  //   light.position.set(1, 1, 1);
  //   scene.add(light);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  //   renderer.setClearColor("#ffffff");
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
