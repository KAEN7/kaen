import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Stats from "three/examples/jsm/libs/stats.module";
import { color } from "../styles/theme";

export const three = (name: any) => {
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
	const light = new THREE.SpotLight();
	light.position.set(5, 5, 5);
	scene.add(light);

	// CAMERA
	const camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	camera.position.x = 0.4;
	camera.position.y = 2;
	camera.position.z = 1;

	// scene.background = new THREE.Color(color.defaultBg);

	// document.body.appendChild(renderer.domElement);

	const controls = new OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true;

	// LOADER
	const loader = new GLTFLoader();
	loader.load(
		`/gltf/${name}/scene.gltf`,
		function (gltf) {
			gltf.scene.traverse(function (child) {
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

				gltf.scene.rotation.z -= 0.001;
				gltf.scene.rotation.y -= 0.002;
				gltf.scene.rotation.x -= 0.003;

				controls.update();

				render();

				stats.update();
			}

			animate();

			scene.add(gltf.scene);
		},
		(xhr) => {
			console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
		},
		(error) => {
			console.log(error);
		}
	);

	() => {
		window.addEventListener("resize", onWindowResize, false);
		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
			render();
		}
	};

	const stats = Stats();
	// document.body.appendChild(stats.dom);

	function render() {
		renderer.render(scene, camera);
	}
};
