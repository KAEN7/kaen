import Image from "next/image";
import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { color, flexCenter, flexCenterDir, overflowY, rainbowText } from "../../styles/theme";

const Index = () => {
	const frontend = ["javascript", "typescript", "styledComponents", "redux", "nextjs", "recoil"];
	const backend = [];
	const tools = ["confluence", "figma", "git", "jira", "notion"];
	const infra = ["aws", "vercel"];

	const skillList: any = { frontend: frontend, tools: tools, infra: infra };

	const aboutRef = useRef<any>();

	const handleScroll = useCallback((e: any) => {
		const items = e.target.children[0];

		Object.values(items.children).forEach((item: any, idx: number) => {
			item.style.marginLeft = `${10 * idx}px`;
		});
	}, []);

	useLayoutEffect(() => {
		if (aboutRef.current) {
			aboutRef.current.addEventListener("scroll", handleScroll);
			// eslint-disable-next-line react-hooks/exhaustive-deps
			return () => aboutRef.current.removeEventListener("scroll", handleScroll);
		}
	}, [handleScroll]);

	return (
		<AboutSection>
			<TextBox>
				<MainTextBox ref={aboutRef}>
					<AboutItem className="about">
						<span>안녕하세요 프론트엔드 개발자 이성훈입니다</span>
						<span>웹 프론트엔드 엔지니어로 일하고 있으며</span>
						<span>React와 Recoil을 사용해서 개발하고 있습니다</span>
						<span>저는 코드를 줄이고 재활용 시키는 것에 관심이 많으며</span>
						<span>지속적인 기록을 중요하게 생각합니다</span>
						<span>개인적인 의견보다 팀의 의견을 듣는 것이 중요하다고 생각합니다</span>
					</AboutItem>

					<>
						{Object.keys(skillList).map((key) => {
							return (
								<SkillBox key={key}>
									<h2>{key.toUpperCase()}</h2>
									<div className="skillGroup">
										{skillList[key].map((skill: string) => {
											return (
												<div key={skill} className="skillBox">
													<Image src={`/images/skill/${skill}.png`} alt={skill} width={85} height={85} />
													<span>{skill.toUpperCase() === "STYLEDCOMPONENTS" ? "STYLED\nCOMPONENTS" : skill.toUpperCase()}</span>
												</div>
											);
										})}
									</div>
								</SkillBox>
							);
						})}
					</>
				</MainTextBox>
				<SubTextBox>
					<a href="https://github.com/KAEN7" target="_blank" rel="noreferrer">
						Github
					</a>
					<a href="https://kusdsuna.tistory.com/" target="_blank" rel="noreferrer">
						Tistory
					</a>
				</SubTextBox>
			</TextBox>
		</AboutSection>
	);
};

const AboutSection = styled.section`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: ${color.defaultBg};
`;

const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 50%;
	height: 80%;
	border-left: 2px solid ${color.deepDarkBg};
	padding: 14px;
	box-sizing: border-box;
`;

const MainTextBox = styled.div`
	${flexCenterDir}
	${overflowY}

	justify-content: flex-start;
	align-items: flex-start;
	height: 100%;
	width: 100%;
	scroll-snap-type: y mandatory;

	span {
		color: ${color.black};
	}

	.focus {
		background: gray;
	}
`;

const AboutItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	min-height: 100%;
	width: 100%;
	scroll-snap-align: center;

	span {
		font-family: "Anton";
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		letter-spacing: 0.2rem;
	}

	div {
		position: relative;
		right: 100%;
	}
`;

const SkillBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	min-height: 100%;
	width: 100%;
	scroll-snap-align: center;

	.skillGroup {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}

	.skillBox {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1rem;

		span {
			margin-top: 13px;
			font-weight: bold;
			white-space: pre-wrap;
		}
	}
`;

const SubTextBox = styled.div`
	${flexCenter}

	justify-content: flex-start;

	a {
		width: fit-content;
		padding: 3px 0.5rem;
		color: ${color.gray};
		margin-right: 5px;
		font-family: "Roboto";

		&:hover {
			${rainbowText}
		}
	}
`;

export default Index;
