import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { loadingAtom } from "../store";
import { color, overflowY } from "../styles/theme";

import Resume from "../components/Resume";
import Image from "next/image";

const list = [
	{
		company: "",
		date: "",
		position: "",
		Achievement: ["", "", ""],
		resume: [{ title: "", desc: [{ subTitle: "", subDesc: "" }] }],
	},
];

const Home: NextPage = () => {
	const [_, setLoading] = useRecoilState(loadingAtom);

	const loadingHandler = (toggle: boolean) => {
		setLoading(toggle);
	};

	return (
		<HomeSection>
			<h1>이성훈</h1>
			<h2>Frontend Developer</h2>

			<HrefBox>
				<a href="https://github.com/KAEN7">GitHub</a>
				<a href="https://kusdsuna.tistory.com/">Blog</a>
			</HrefBox>

			<Image
				src="/images/arrow.svg"
				alt="arrow"
				width={500}
				height={500}
				// placeholder="blur"
			/>

			<IntroductionBox>
				<li>리액트와 최적화에 관심이 많은 웹 프론트엔드 개발자입니다</li>
				<li>
					{`프론트엔드는 유저와 맨 앞에서 마주하는 직업이기에 \n 사용자 친화적으로
					만들어야한다고 생각합니다`}
				</li>
				<li>
					리팩토링과 최적화에 관심이 많아 개선하기 위해 많은 투자를 하고
					있습니다
				</li>
				<li>개인적인 의견보다 팀원들의 의견을 듣는 것을 중요하게 생각합니다</li>
				<li>
					기억은 짧지만 기록은 길다고 생각하며 지속적인 기록을 하고있습니다
				</li>
			</IntroductionBox>

			<SubTitle>경력</SubTitle>
			<Resume></Resume>
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
	background: ${color.defaultBg};
	${overflowY}
	overflow-x: hidden;

	h1 {
		font-size: 13rem;
		color: ${color.deepDarkBg};
		margin: 0;
		margin-top: 13rem;
		text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease 0s;

		&:hover {
			text-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
		}
	}

	h2 {
		letter-spacing: 0.5rem;
		color: ${color.black};
		text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	}
`;

const HrefBox = styled.div`
	display: flex;
	justify-content: space-around;
	width: 25rem;
	margin-top: 12rem;

	a {
		width: 9rem;
		background: ${color.blue};
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
		color: ${color.white};
		padding: 0.8rem 1rem;
		border-radius: 8px;
		text-align: center;
		cursor: pointer;
		font-size: 1.1rem;
		font-weight: 500;
		transition: all 0.3s ease 0s;

		&:hover {
			background-color: #2ea977;
			box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
			transform: translateY(-7px);
		}
	}
`;

const IntroductionBox = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-top: 9rem;
	background: ${color.deepDarkBg};
	padding: 9rem 1rem;

	li {
		width: 35%;
		margin-bottom: 1.5rem;
		list-style: none;
		font-size: 1.1rem;
		font-weight: bold;
		text-align: left;
		white-space: nowrap;
		color: ${color.white};
		transition: all 0.3s ease 0s;

		&:hover {
			text-shadow: 0px 15px 20px rgba(46, 229, 157, 0.2);
			transform: translateY(-4px);
		}

		&:last-child {
			margin: 0;
		}
	}
`;

const SubTitle = styled.h3`
	font-size: 1.5rem;
	margin-top: 3rem;
`;

export default Home;
