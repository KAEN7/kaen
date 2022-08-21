import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import {
	color,
	flexCenter,
	flexCenterDir,
	overflowY,
	rainbowText,
} from "../../styles/theme";

const Index = () => {
	const frontend = [
		"javascript",
		"typescript",
		"styledComponents",
		"redux",
		"nextjs",
		"recoil",
	];
	const backend = [];
	const tools = ["confluence", "figma", "git", "jira", "notion"];
	const infra = ["aws", "vercel"];

	const skillList: any = { frontend: frontend, tools: tools, infra: infra };

	return (
		<AboutSection>
			<TextBox>
				<MainTextBox>
					<AboutItem className="about">
						<span>안녕하세요 프론트엔드 개발자 이성훈입니다</span>
						<span>저는 코드를 줄이고 재활용 시키는 것에 관심이 많아</span>
						<span>Atomic 디자인 패턴을 사용하고있고</span>
						<span>지속적인 기록을 중요하게 생각해서</span>
						<span>리팩토링과 정리를 하고 있습니다</span>
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
													<Image
														src={`/images/skill/${skill}.png`}
														alt={skill}
														width={85}
														height={85}
													/>
													<span>
														{skill.toUpperCase() === "STYLEDCOMPONENTS"
															? "STYLED\nCOMPONENTS"
															: skill.toUpperCase()}
													</span>
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
					<a
						href="https://kusdsuna.tistory.com/"
						target="_blank"
						rel="noreferrer"
					>
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
