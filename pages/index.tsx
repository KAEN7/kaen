import type { NextPage } from "next";
import { useEffect } from "react";
import styled from "styled-components";
import { three } from "../lib/three";

const Home: NextPage = () => {
	useEffect(() => {
		three("mechanical_keyboard");
	}, []);

	return (
		<HomeSection>
			<canvas id="canvas"></canvas>
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
	margin: 0;
	padding: 0;

	canvas {
		margin: 0;
		padding: 0;
		position: absolute;
	}
`;

export default Home;
