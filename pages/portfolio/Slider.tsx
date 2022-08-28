import { useState } from "react";
import styled from "styled-components";
import { color, flexCenterDir, overflowY } from "../../styles/theme";

const portfolioList = [
	{
		title: "peri.Staking",
		duration: "2022.03 - 재직중",
		position: "Frontend React",
		src: "staking",
	},
	{
		title: "peri.Dex",
		duration: "2022.03 - 재직중",
		position: "Frontend React",
		src: "dex",
	},
	{
		title: "nendNFT",
		duration: "2022.03 - 재직중",
		position: "Frontend React",
		src: "nendnft",
	},
	{
		title: "LostGold",
		duration: "2022.01 - 진행중",
		position: "Frontend Next.js",
		src: "lostgold",
	},
	{
		title: "Fitfinder",
		duration: "2021.12 - 2022.02",
		position: "Frontend React",
		src: "fitfinder",
	},
];

const Slider = () => {
	const [index, setIndex] = useState(0);

	const item = portfolioList[index];

	return (
		<SliderSection>
			<SliderBox src={item.src} index={Boolean(index + 1)}>
				<Title>{item.title}</Title>
				<div>
					<span>{item.duration}</span>
					<span>{item.position}</span>
				</div>
			</SliderBox>

			<PortfolioNav>
				{portfolioList.map((_, idx) => (
					<NavBtn
						onClick={() => setIndex(idx)}
						key={`button${idx}`}
						index={idx === index}
					></NavBtn>
				))}
			</PortfolioNav>
		</SliderSection>
	);
};

const SliderSection = styled.div`
	display: flex;
	min-width: 1000px;
	position: relative;
	right: 22rem;
	padding-left: 5rem;
`;

const Title = styled.h3`
	font-size: 2rem;
	width: 300px;
	padding: 0.5rem;
	background: black;
`;

interface ISliderBox {
	src: string;
	index: boolean;
}

const SliderBox = styled.div<ISliderBox>`
	${flexCenterDir}
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	min-height: 600px;
	height: 600px;
	background-image: ${(props) => `url(/images/portfolio/${props.src}.png)`};
	background-repeat: no-repeat;
	background-position: center center;
	color: ${color.white};
	padding-left: 18px;

	div {
		display: flex;
		flex-direction: column;

		span {
			margin-bottom: 10px;
			background: black;
			padding: 0.1rem 0.5rem;
			font-weight: 500;
		}
	}

	/* transition: all 1s growUp;
	animation: growUp 1s; */

	/* animation: ${(props) => props.index && "growUp 1s"}; */

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

const PortfolioNav = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 40px;
`;

interface INavBtn {
	index: boolean;
}

const NavBtn = styled.div<INavBtn>`
	width: 15px;
	height: 15px;
	border: 2px solid ${color.deepDarkBg};
	border-radius: 50%;
	margin-bottom: 1.5rem;
	cursor: pointer;
	background: ${(props) => props.index && color.deepDarkBg};
`;

export default Slider;
