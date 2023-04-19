import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

import { loadingAtom } from "../store";
import { color, customScrollbar, fadeIn } from "../styles/theme";
import { three } from "../lib/three";

const Home: NextPage = () => {
	const [_, setLoading] = useRecoilState(loadingAtom);
	const [isMobile, setIsMobile] = useState(false);
	const mobile = useMediaQuery({ query: "(max-width: 767px" });

	useEffect(() => {
		if (mobile) {
			setIsMobile(mobile);
		}
	}, [mobile]);

	const gltfName = "abstract_cloud";

	const loadingHandler = (toggle: boolean) => {
		setLoading(toggle);
	};

	useEffect(() => {
		three(gltfName, loadingHandler);
	}, []);

	return (
		<HomeSection mobile={isMobile}>
			<canvas id={gltfName}></canvas>

			<h1>SUNGHUN LEE</h1>
			<div></div>
			<span>Frontend Developer</span>

			<Link href="/about" className="wrapper">
				<a>About me</a>
			</Link>
		</HomeSection>
	);
};

interface IHomeSection {
	mobile: boolean;
}

const HomeSection = styled.main<IHomeSection>`
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
	${props => !props.mobile && customScrollbar}

	canvas {
		/* display: none; */
		${fadeIn}
	}

	h1 {
		position: absolute;
		margin: 0 auto;
		top: 21rem;
		font-weight: 700;
		font-size: ${(props) => (props.mobile ? "2rem" : "5.1753rem")};
		line-height: 6.25rem;
		letter-spacing: 0.32em;
		${fadeIn}
	}

	div {
		position: absolute;
		margin: 0 auto;
		width: ${(props) => (props.mobile ? "22rem" : "26.3125rem")};
		height: 0.1875rem;
		top: 28.9375rem;
		background-color: ${color.gray};
		${fadeIn}
	}

	span {
		position: absolute;
		margin: 0 auto;
		top: 30.8125rem;

		font-family: "Inter";
		font-style: normal;
		font-weight: 700;
		font-size: ${(props) => (props.mobile ? "1.3rem" : "1.9319rem")};
		line-height: 2.3125rem;
		letter-spacing: 0.12em;
		${fadeIn}
	}

	.wrapper {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 0;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 16.125rem;
		height: 3.6831rem;
		top: 39.9712rem;
		background: none;
		color: ${color.gray};
		border: 0.1875rem solid ${color.gray};
		border-radius: 3rem;
		box-sizing: border-box;
		font-weight: 700;
		font-size: 1.5383rem;
		line-height: 1.875rem;
		${fadeIn}
		cursor: url("/images/cursor.png") 6 6, auto;

		&:hover {
			box-shadow: 0px 0px 15px ${color.gray};
			color: ${color.white};
		}
	}
`;

export default Home;
