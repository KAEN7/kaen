import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { loadingAtom } from "../store";
import { color, customScrollbar, fadeIn, overflowY } from "../styles/theme";

import Resume from "../components/Resume";
import { clipboard } from "../lib/clipboard";
import skill from "../json/skill.json";
import award from "../json/award.json";
import Image from "next/image";

const Home: NextPage = () => {
	const [_, setLoading] = useRecoilState(loadingAtom);

	const loadingHandler = (toggle: boolean) => {
		setLoading(toggle);
	};

	return (
		<HomeSection>
			<h1>
				이성훈
				<Image
					width={38}
					height={38}
					src={"/images/icon/stamp.png"}
					alt="stamp"
				/>
			</h1>
			<h2>Frontend Developer</h2>

			<HrefBox>
				<a href="https://github.com/KAEN7">GitHub</a>
				<a href="https://kusdsuna.tistory.com/">Blog</a>
			</HrefBox>

			<IntroductionBox>
				<h3>EMAIL</h3>
				<li
					onClick={() => clipboard("kusdsuna@naver.com")}
					style={{ cursor: "pointer" }}
				>
					kusdsuna@naver.com
				</li>

				<h3>INTRO</h3>

				<li className="introHeader">
					안녕하세요, 웹 프론트엔드 개발자 이성훈입니다.
				</li>
				<li>
					사용자에게 좋은 경험을 제공하여 보람을 느끼고 싶은 마음에 개발자가
					되었습니다.
				</li>
				<li>웹 프론트엔드에 관심이 많아 다양한 관련된 경험을 쌓고 싶습니다.</li>
				<li>
					조금씩이나마 얻게된 지식을 공유하고 오픈소스에도 기여하려 노력하고
					있습니다.
				</li>
			</IntroductionBox>

			<SubTitle>경력</SubTitle>
			<Resume />

			<SubTitle>기술</SubTitle>
			<SkillList>
				{Object.keys(skill).map((stack: any, idx: number) => {
					const skills: any = { ...skill };

					return (
						<li key={idx}>
							<h4>{stack.toUpperCase()}</h4>

							<ul>
								{skills[stack].map((item: any) => (
									<li key={item}>
										● <span>{item}</span>
									</li>
								))}
							</ul>
						</li>
					);
				})}
			</SkillList>

			<SubTitle>수상</SubTitle>
			<AwardList>
				{award.map((item) => (
					<li key={item}>{item}</li>
				))}
			</AwardList>
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
	${customScrollbar}

	h1 {
		font-size: 13rem;
		color: ${color.deepDarkBg};
		margin: 0;
		margin-top: 23rem;
		text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease 0s;
		${fadeIn}

		&:hover {
			text-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
		}

		@media ${(props) => props.theme.mobileL} {
			font-size: 5rem;
			text-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
		}
	}

	h2 {
		letter-spacing: 0.5rem;
		color: ${color.black};
		text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
		${fadeIn}
	}
`;

const HrefBox = styled.div`
	display: flex;
	justify-content: space-around;
	width: 25rem;
	margin-top: 10rem;
	margin-bottom: 2rem;
	${fadeIn}

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

	h3 {
		width: 40rem;
		font-weight: 800;
		color: ${color.orange};

		&:hover {
			text-shadow: 0px 1px 10px ${color.orange};
		}

		@media ${(props) => props.theme.mobileL} {
			font-size: 2rem;
		}
	}

	li {
		width: 40rem;
		margin-bottom: 1rem;
		list-style: none;
		line-height: 2.4rem;
		font-size: 1.05rem;
		font-weight: bold;
		text-align: left;
		white-space: pre-line;
		color: ${color.white};
		transition: all 0.3s ease 0s;

		&:hover {
			transform: translateY(-2px);
		}

		&:last-child {
			margin: 0;
		}
	}

	.introHeader {
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
	}
`;

const SubTitle = styled.h3`
	width: 57rem;
	font-size: 3rem;
	margin-top: 3rem;
`;

const SkillList = styled.ul`
	display: flex;
	flex-direction: column;
	width: 57rem;
	border-left: 3px solid ${color.darkBg};

	li {
		display: flex;
		align-items: flex-start;
		list-style: none;
		margin: 1rem;

		h4 {
			padding: 0;
			margin: 0;
			width: 6rem;
			word-wrap: break-word;
			color: ${color.orange};
		}

		ul {
			li {
				margin: 0;
				margin-bottom: 1rem;

				span {
					margin-left: 0.8rem;
				}
			}
		}
	}
`;

const AwardList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	width: 57rem;
	margin-bottom: 10rem;
`;

export default Home;
