import type { NextPage } from "next";
import { useEffect } from "react";
import styled from "styled-components";
import { three } from "../lib/three";
import { color } from "../styles/theme";

const Home: NextPage = () => {
	let height;
	useEffect(() => {
		three("mechanical_keyboard");

		height = window.innerHeight / 2;
	}, []);

	const onClickHandler = (gltf: any) => {
		gltf.scene.rotation.y += 0.002;
		gltf.scene.rotation.y += 0.01;
	};

	return (
		<HomeSection>
			<h1>KUSDSUNA</h1>
			<canvas id="mechanical_keyboard"></canvas>
		</HomeSection>
	);
};

const HomeSection = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	background: ${color.defaultBg};

	canvas {
		margin: 0;
		padding: 0;
		position: absolute;
		z-index: 1;
	}

	h1 {
		font-size: 13rem;
		color: ${color.deepDarkBg};
	}
`;

export default Home;
