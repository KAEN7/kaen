import { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFloader";
import { pageSetting } from "../styles/theme";

const Three = () => {
	const abstract = useRef<any>();

	useEffect(() => {
		let scene = new THREE.Scene(); // 장면 생성

		const webGL: any = {
			canvas: document.querySelector("#canvas"),
			antialias: true,
		};

		let renderer = new THREE.WebGLRenderer(webGL);
		renderer.outputEncoding = THREE.sRGBEncoding; // 색상 인코딩 방식 지정

		// PerspectiveCamera: 원근법 O; OrthographicCamera: 원근법 무시
		let camera = new THREE.PerspectiveCamera(10, 2);
		camera.position.set(0, 0, 100);

		// 배경
		scene.background = new THREE.Color("white");

		// AmbientLight; PointLight; DirectionalLight;
		let light = new THREE.DirectionalLight(0xffff00, 10);
		scene.add(light);

		let loader = new GLTFLoader();
		loader.load("/gltf/rhetorician/scene.gltf", (gltf) => {
			scene.add(gltf.scene); // 해당 모델 추가

			function animate() {
				requestAnimationFrame(animate);
				gltf.scene.rotation.y += 0.002;
				// gltf.scene.rotation.z += 0.001;
				// gltf.scene.rotation.x += 0.003;
				// OrbitControl
				renderer.render(scene, camera);
			}

			animate();
		});
	}, []);

	return (
		<ThreeSection>
			<canvas id="canvas" width="1000" height="1000" ref={abstract}></canvas>
		</ThreeSection>
	);
};

const ThreeSection = styled.section`
	${pageSetting}
`;

export default Three;
