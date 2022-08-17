import type { NextPage } from "next";
import { useEffect } from "react";
import styled from "styled-components";
import { three } from "../lib/three";
import { color } from "../styles/theme";

const Home: NextPage = () => {
	useEffect(() => {
		three("mechanical_keyboard");
	}, []);

	const onClickHandler = (gltf: any) => {
		gltf.scene.rotation.y += 0.002;
		gltf.scene.rotation.y += 0.01;
	};

	return (
		<HomeSection>
			<Cover></Cover>
			<canvas id="canvas"></canvas>
		</HomeSection>
	);
};

const HomeSection = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	background: ${color.defaultBg};

	canvas {
		margin: 0;
		padding: 0;
		position: absolute;
		z-index: 1;
	}
`;

const Cover = styled.div`
	/* width: 100vw;
	height: 100vh; */
	/* position: absolute; */
	background: black;
	z-index: 2;
`;

export default Home;
