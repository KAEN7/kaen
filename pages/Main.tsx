import type { AppProps } from "next/app";
import Image from "next/image";
import { loadingAtom } from "../store/index";
import Header from "./Header";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { color } from "../styles/theme";
import { useState } from "react";

function Main({ Component, pageProps }: any) {
	const [loading, _] = useRecoilState(loadingAtom);
	const [cover, setCover] = useState(false);

	return (
		<>
			{loading && (
				<Loading>
					<Image
						src="/images/keycap.png"
						alt="loading"
						width={144}
						height={144}
					/>
					<div className="progressBar"></div>
				</Loading>
			)}
			{/* <Cover onClick={() => setCover(true)} cover={cover}>
				<h1>KUSDSUNA</h1>
			</Cover> */}

			<Header />
			<Component {...pageProps} />
		</>
	);
}

const Loading = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	width: 100vw;
	height: 100vh;
	background: ${color.deepDarkBg};
	z-index: 9999;

	.progressBar {
		width: 200px;
		height: 30px;
		border: 7px solid;
		border-image: conic-gradient(
				from var(--angle),
				red,
				yellow,
				lime,
				aqua,
				blue,
				magenta,
				red
			)
			1;

		animation: 2s rotate linear infinite;

		@keyframes rotate {
			to {
				--angle: 360deg;
			}
		}

		@property --angle {
			syntax: "<angle>";
			initial-value: 0deg;
			inherits: false;
		}
	}
`;

interface ICover {
	cover: boolean;
}

const Cover = styled.div<ICover>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: ${color.deepDarkBg};
	position: absolute;
	z-index: 2;
	clip-path: ${(props) =>
		props.cover
			? "polygon(0% 0%)"
			: "polygon(0% 0%, 0% 100%, 25% 100%, 45% 45%, 65% 25%, 75% 55%,	25% 75%, 25% 100%, 100% 100%,	100% 0%	)"};

	h1 {
		font-size: 13rem;
		color: ${color.defaultBg};
	}

	animation: ${(props) => props.cover && "growUp 1s"};

	@keyframes growUp {
		0% {
			clip-path: polygon(
				0% 0%,
				0% 100%,
				25% 100%,
				45% 45%,
				65% 25%,
				75% 55%,
				25% 75%,
				25% 100%,
				100% 100%,
				100% 0%
			);
		}
		10% {
			clip-path: polygon(
				0% 0%,
				0% 100%,
				25% 100%,
				35% 35%,
				65% 15%,
				85% 55%,
				25% 85%,
				25% 100%,
				100% 100%,
				100% 0%
			);
		}
		20% {
			clip-path: polygon(
				0% 0%,
				0% 100%,
				25% 100%,
				35% 15%,
				65% 15%,
				85% 65%,
				35% 95%,
				25% 100%,
				100% 100%,
				100% 0%
			);
		}
		30% {
			clip-path: polygon(
				0% 0%,
				0% 100%,
				5% 100%,
				35% 5%,
				65% 7%,
				90% 70%,
				55% 95%,
				15% 100%,
				100% 100%,
				100% 0%
			);
		}
		40% {
			clip-path: polygon(
				0% 0%,
				0% 100%,
				15% 100%,
				5% 5%,
				75% 0%,
				90% 70%,
				55% 95%,
				15% 100%,
				100% 100%,
				100% 0%
			);
		}
		50% {
			clip-path: polygon(
				0% 0%,
				0% 100%,
				5% 100%,
				5% 0%,
				85% 0%,
				90% 90%,
				55% 100%,
				5% 100%,
				100% 100%,
				100% 0%
			);
		}
		60% {
			clip-path: polygon(
				0% 0%,
				0% 100%,
				0% 100%,
				5% 0%,
				85% 0%,
				90% 100%,
				55% 100%,
				0% 100%,
				100% 100%,
				100% 0%
			);
		}
		70% {
			clip-path: polygon(
				0% 0%,
				0% 100%,
				0% 100%,
				0% 0%,
				85% 0%,
				90% 100%,
				55% 100%,
				0% 100%,
				100% 100%,
				100% 0%
			);
		}
		80% {
			clip-path: polygon(
				0% 0%,
				0% 100%,
				0% 100%,
				0% 0%,
				95% 0%,
				90% 100%,
				55% 100%,
				0% 100%,
				100% 100%,
				100% 0%
			);
		}
		90% {
			clip-path: polygon(
				0% 0%,
				0% 100%,
				0% 100%,
				0% 0%,
				100% 0%,
				95% 100%,
				100% 100%,
				0% 100%,
				100% 100%,
				100% 0%
			);
		}
		100% {
			clip-path: polygon(0% 0%);
		}
	}
`;

export default Main;
