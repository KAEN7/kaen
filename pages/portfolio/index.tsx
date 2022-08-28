import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { three } from "../../lib/portfolio";
import { loadingAtom } from "../../store";
import { color } from "../../styles/theme";
import Slider from "./Slider";

const Portfolio = () => {
	const [_, setLoading] = useRecoilState(loadingAtom);

	const loadingHandler = (toggle: boolean) => {
		setLoading(toggle);
	};

	useEffect(() => {
		three("lowpoly_65_mechanical_keyboard", loadingHandler);

		document.addEventListener("scroll", () =>
			console.log(document.documentElement.scrollTop)
		);
	}, []);

	return (
		<PortfolioSection>
			<canvas id="lowpoly_65_mechanical_keyboard"></canvas>
			<CircleBg />

			<Slider></Slider>
		</PortfolioSection>
	);
};

const PortfolioSection = styled.div`
	overflow: hidden;
	z-index: 1;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	position: relative;
	background: ${color.defaultBg};

	canvas {
		position: absolute;
	}
`;

const CircleBg = styled.div`
	min-width: 1200px;
	min-height: 1200px;
	background: none;
	border: 7px solid;
	border-radius: 50%;
	position: relative;
	left: 18px;
`;

export default Portfolio;