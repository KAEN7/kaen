import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { loadingAtom } from "../store";
import { color, overflowY } from "../styles/theme";

import Resume from "../components/Resume";
import { clipboard } from "../lib/clipboard";
import skill from "../json/skill.json";
import award from "../json/award.json";

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

			<IntroductionBox>
				<h3>EMAIL</h3>
				<li
					onClick={() => clipboard("kusdsuna@naver.com")}
					style={{ cursor: "pointer" }}
				>
					kusdsuna@naver.com
				</li>

				<h3>BIRTHDAY</h3>
				<li>96.02.26</li>

				<h3>INTRO</h3>
				<li>
					{
						"안녕하세요, 리액트와 최적화에 관심이 많은 웹 프론트엔드 개발자입니다\n유저 유입과 유지를 위한 리팩토링을 경험해본 적이 있고\n부족한 부분을 파악하기 위해 커뮤니케이션을 활용합니다"
					}
				</li>

				<li>
					{
						"프론트엔드는 유저와 맨 앞에서 마주하는 직업이기에 \n 사용자 친화적으로 만들어야한다고 생각합니다"
					}
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

		@media ${(props) => props.theme.mobileL} {
			font-size: 5rem;
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
	margin-top: 10rem;
	margin-bottom: 2rem;

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

		@media ${(props) => props.theme.mobileL} {
			width: 100%;
			font-size: 2rem;
		}
	}

	li {
		width: 40rem;
		margin-bottom: 1.5rem;
		list-style: none;
		line-height: 2.4rem;
		font-size: 1.1rem;
		font-weight: bold;
		text-align: left;
		white-space: pre-line;
		color: ${color.white};
		transition: all 0.3s ease 0s;

		&:hover {
			text-shadow: 0px 15px 20px rgba(46, 229, 157, 0.2);
			transform: translateY(-4px);
		}

		&:last-child {
			margin: 0;
		}

		@media ${(props) => props.theme.mobileL} {
			width: 100%;
		}
	}
`;

const SubTitle = styled.h3`
	width: 57rem;
	font-size: 3rem;
	margin-top: 3rem;
	/* text-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4); */
`;

const SkillList = styled.ul`
	display: flex;
	flex-direction: column;
	width: 57rem;
	border-left: 3px solid ${color.darkBg};

	@media ${(props) => props.theme.mobileL} {
		width: 100%;
	}

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

	@media ${(props) => props.theme.mobileL} {
		width: 100%;
	}
`;

export default Home;
