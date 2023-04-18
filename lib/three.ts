import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Stats from "three/examples/jsm/libs/stats.module";

export const three = (name: string, loadingHandler: any) => {
	loadingHandler(true);

	let mouseX = 0,
		mouseY = 0;
	let windowHalfX = window.innerWidth / 2;
	let windowHalfY = window.innerHeight / 2;

	const scene = new THREE.Scene();
	// scene.add(new THREE.AxesHelper(5));

	const webGL: any = {
		canvas: document.querySelector(`#${name}`),
		antialias: true,
		alpha: true,
	};

	// RENDERER
	const renderer = new THREE.WebGLRenderer(webGL);
	// renderer.physicallyCorrectLights = true;

	renderer.shadowMap.enabled = true;
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.setSize(window.innerWidth, window.innerHeight);

	// LIGHT
	// const light = new THREE.SpotLight();
	const light = new THREE.DirectionalLight(0xffffff, 0.5);
	// const light = new THREE.AmbientLight(0x404040);
	light.position.set(4, 4, 5);
	scene.add(light);

	// const light1 = new THREE.AmbientLight(0xffffff, 0.2);
	// scene.add(light1);

	// CAMERA
	const camera = new THREE.PerspectiveCamera(
		15,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	camera.position.x = 5;
	camera.position.y = 10;
	camera.position.z = 10;

	// let helper = new THREE.CameraHelper(light.shadow.camera);
	// scene.add(helper);

	// scene.background = new THREE.Color(color.defaultBg);

	// document.body.appendChild(renderer.domElement);

	const controls = new OrbitControls(camera, renderer.domElement);
	controls.enableDamping = false;

	// LOADER
	const loader = new GLTFLoader();
	loader.load(
		`/gltf/${name}/scene.gltf`,
		function (gltf: any) {
			const model = gltf.scene;

			model.position.setX(4);
			model.position.setY(0);
			model.position.setX(0);

			gltf.scene.traverse(function (child: any) {
				if ((child as THREE.Mesh).isMesh) {
					const m = child as THREE.Mesh;
					m.receiveShadow = true;
					m.castShadow = true;
				}
				if ((child as THREE.Light).isLight) {
					const l = child as THREE.Light;
					l.castShadow = true;
					l.shadow.bias = -0.003;
					l.shadow.mapSize.width = 2048;
					l.shadow.mapSize.height = 2048;
				}
			});

			function animate() {
				requestAnimationFrame(animate);

				gltf.scene.rotation.z += 0.0001;
				gltf.scene.rotation.y -= 0.0001;
				// gltf.scene.rotation.x -= 0.001;

				controls.update();

				render();

				stats.update();
			}

			renderer.domElement.addEventListener(
				"mousemove",
				onDocumentMouseMove,
				false
			);

			animate();

			function onDocumentMouseMove(event: any) {
				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;
			}

			scene.add(gltf.scene);
		},
		(xhr: any) => {
			console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
		},
		(error: any) => {
			console.error(error);
		}
	);

	// () => {
	// 	window.addEventListener("resize", onWindowResize, false);
	// 	function onWindowResize() {
	// 		camera.aspect = window.innerWidth / window.innerHeight;
	// 		camera.updateProjectionMatrix();
	// 		renderer.setSize(window.innerWidth, window.innerHeight);
	// 		render();
	// 	}
	// };

	const stats = Stats();
	// document.body.appendChild(stats.dom);

	function render() {
		renderer.render(scene, camera);

		loadingHandler(false);
	}
};
