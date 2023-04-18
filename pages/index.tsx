import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { loadingAtom } from "../store";
import { color, customScrollbar, fadeIn } from "../styles/theme";

import { three } from "../lib/three";
import { useEffect } from "react";
import Link from "next/link";

const Home: NextPage = () => {
	const [_, setLoading] = useRecoilState(loadingAtom);

	const gltfName = "abstract_cloud";

	const loadingHandler = (toggle: boolean) => {
		setLoading(toggle);
	};

	useEffect(() => {
		three(gltfName, loadingHandler);
	}, []);

	return (
		<HomeSection>
			<canvas id={gltfName}></canvas>

			<h1>SUNGHUN LEE</h1>
			<div></div>
			<span>Frontend Developer</span>
			<Link href="/about">
				<a>About me</a>
			</Link>
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
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	background: ${color.black};
	${customScrollbar}

	canvas {
		/* display: none; */
		${fadeIn}
	}

	h1 {
		position: absolute;
		margin: 0 auto;
		top: 336px;
		font-weight: 700;
		font-size: 82.8054px;
		line-height: 100px;
		letter-spacing: 0.32em;
		${fadeIn}
	}

	div {
		position: absolute;
		margin: 0 auto;
		width: 421px;
		height: 3px;
		top: 463px;
		background-color: ${color.gray};
		${fadeIn}
	}

	span {
		position: absolute;
		margin: 0 auto;
		top: 493px;

		font-family: "Inter";
		font-style: normal;
		font-weight: 700;
		font-size: 30.9099px;
		line-height: 37px;
		letter-spacing: 0.12em;
		${fadeIn}
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 258px;
		height: 58.93px;
		top: 639.54px;
		background: none;
		color: ${color.gray};
		border: 3.18519px solid ${color.gray};
		border-radius: 38.2222px;
		box-sizing: border-box;
		font-weight: 700;
		font-size: 24.6134px;
		line-height: 30px;
		${fadeIn}
		cursor: url("/images/cursor.png") 6 6, auto;

		&:hover {
			transition: ease-in-out 2s;
			color: ${color.black};
			background-color: ${color.gray};
		}
	}
`;

export default Home;
