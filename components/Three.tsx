import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFloader";
import { pageSetting, color } from "../styles/theme";

const Three = () => {
	useEffect(() => {
		let scene = new THREE.Scene(); // 장면 생성

		const webGL: any = {
			canvas: document.querySelector("#canvas"),
			antialias: true,
		};

		let renderer = new THREE.WebGLRenderer(webGL);
		renderer.outputEncoding = THREE.sRGBEncoding; // 색상 인코딩 방식 지정
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);

		// PerspectiveCamera: 원근법 O; OrthographicCamera: 원근법 무시
		let camera = new THREE.PerspectiveCamera(
			45,
			window.innerWidth / window.innerHeight,
			1,
			10000
		);
		camera.position.set(0, 0, 150);

		// 배경
		scene.background = new THREE.Color("none");

		// AmbientLight; PointLight; DirectionalLight;
		// let light = new THREE.DirectionalLight(0xffff00, 2);
		let light = new THREE.DirectionalLight(color.white, 1);
		scene.add(light);

		let loader = new GLTFLoader();
		loader.load("/gltf/abstract_cosmic_dust_shape_1/scene.gltf", (gltf) => {
			gltf.scene.scale.set(0.1, 0.1, 0.1);
			const root = gltf.scene;
			scene.add(root); // 해당 모델 추가

			function animate() {
				requestAnimationFrame(animate);
				gltf.scene.rotation.y += 0.01;
				// gltf.scene.rotation.z += 0.001;
				// gltf.scene.rotation.x += 0.003;
				// OrbitControl
				renderer.render(scene, camera);
			}

			animate();
		});

		(function () {
			const canvas: any = document.getElementById("canvas");
			const context = canvas.getContext("2d");

			// resize the canvas to fill browser window dynamically
			window.addEventListener("resize", resizeCanvas, false);

			function resizeCanvas() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
				drawStuff();
			}

			resizeCanvas();

			function drawStuff() {}
		})();
	}, []);

	return (
		<ThreeSection>
			<canvas id="canvas"></canvas>
		</ThreeSection>
	);
};

const ThreeSection = styled.section`
	${pageSetting}

	position: absolute;

	canvas {
		margin: 0;
		padding: 0;
	}
`;

export default Three;
