import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import styled from "styled-components";
import Header from "./Header";
import { color } from "../styles/theme";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [click, setClick] = useState(false);
	return (
		<>
			<Head>
				<title>프론트엔드 개발자 이성훈입니다</title>
				<meta name="description" content="find enjoy to Gallery" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DefaultSeo
				title="프론트엔드 개발자 이성훈입니다"
				description="프론트엔드 개발자 이성훈입니다"
				canonical="https://"
				openGraph={{
					type: "website",
					url: "https://",
					title: "프론트엔드 개발자 이성훈입니다, Gallery",
					description: "프론트엔드 개발자 이성훈입니다",
					images: [{ url: "https://images/seo_bg.png" }],
					site_name: "Gallery",
				}}
			/>
			<Cover onClick={() => setClick(true)} click={click}>
				<h1>KUSDSUNA</h1>
			</Cover>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

interface ICover {
	click: boolean;
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
		props.click
			? "polygon(0% 0%)"
			: "polygon(0% 0%, 0% 100%, 25% 100%, 45% 45%, 65% 25%, 75% 55%,	25% 75%, 25% 100%, 100% 100%,	100% 0%	)"};

	h1 {
		font-size: 13rem;
		color: ${color.defaultBg};
	}

	animation: ${(props) => props.click && "growUp 1s"};

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

export default MyApp;
