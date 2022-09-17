import React from "react";
import styled from "styled-components";
import {
	color,
	flexCenter,
	flexCenterDir,
	overflowY,
	rainbowText,
} from "../../styles/theme";

const resumeList = [
	{
		company: "pynth protocol",
		position: "Frontend",
		duration: "2022.03 -\n재직중",
		project: [
			{
				title: "peri.Staking",
				skill: "React, TypeScript, Redux-toolkit, ethers.js, AWS",
				list: [
					{
						subtitle:
							"ethers.js를 통한 컨트랙트 연결 및 호출 비동기 병렬처리화 속도개선",
					},
					{
						subtitle: "Liquidation",
						description: [
							"C-Ratio(담보비율)이 150이하인 대상자들의 빛을 타 유저들이 대신 값아줄수 있는 기능 구현",
							"Liquidation 대상 리스트 병렬 호출 및 예외처리 로직 구현",
							"liquidator가 가진 pUSD만큼 liquidation 대상의 빛을 갚아주는 Take 로직 구현",
						],
					},
					{
						subtitle: "Escrow",
						description: [
							"52주 동안 쌓인 reward 수령",
							"Escrow 대상 리스트 병렬 호출 및 예외처리 로직 구현",
							"수령가능한 reward 전체 수령 컨트랙트 호출",
						],
					},
				],
			},
			{
				title: "peri.Dex",
				skill: "React, TypeScript, Redux-toolkit, ethers.js, the graph, AWS",
				list: [
					{
						subtitle:
							"기존 그래프 데이터 및 Available balance 값을 받아주던 the graph 로직 DB로 변경 작업 진행중",
					},
				],
			},
			{
				title: "nendNFT",
				skill:
					"React, TypeScript, Recoil-persist, Styled-components, AWS, CloudFront, Amplify",
				list: [
					{
						subtitle: "CloudFront를 통한 정적 웹사이트 라이브 배포",
					},
					{
						subtitle: "Amplify를 통한 테스트 서버 배포",
					},
					{
						subtitle: "퍼블리싱 및 메타마스크 dApp 브라우저 모바일 반응형 구현",
					},
				],
			},
			{
				title: "유지보수용 툴 제작",
				skill: "Node.js, EC2, PM2, Googleapis, Puppeteer, cloudflare-scraper",
				list: [
					{
						subtitle: "TVL_Holders",
						description: [
							"PERI 토큰 tvl 및 holders, twitter follwer 등 api와 크롤링을 통한 집계",
							"PM2 cron과 Googleapis를 통해 매일 구글스프레드시트에 집계량 등록",
							"봇 감지 방지를 위한 cloudflare 우회와 봇 딜레이 처리],",
						],
					},
					{
						subtitle: "Monitoring Bot",
						description: [
							"Googleapis를 사용한 봇 에러 및 성공 메시지 구글 챗 알림 기능 구현",
						],
					},
				],
			},
		],
	},
	{
		company: "개인 프로젝트",
		position: "Frontend",
		duration: "2022.01 -\n진행중",
		project: [
			{
				title: "Lostgold",
				skill:
					"Next.js, TypeScript, Recoil-persist, Styled-components, Storybook, Vercel",
				list: [
					{
						subtitle:
							"Atomic 디자인 패턴과 Storybook을 통한 컴포넌트 중심 설계 개발",
					},
					{
						subtitle:
							"Recoil-persist를 통한 캐릭터 및 개별 재료 골드 가격 전역 관리",
					},
					{
						subtitle:
							"설정페이지로 재료별 가격 및 캐릭터 추가 기능 전역적 관리",
					},
					{ subtitle: "캐릭터 별 골드 계산 로직 구현" },
				],
			},
		],
	},
	{
		company: "yesnow",
		position: "Frontend",
		duration: "2021.12 -\n2022.02",
		project: [
			{
				title: "Fitfinder V2",
				skill: "React, Redux-saga, Styled-components, Storybook, Gitlab",
				list: [
					{
						subtitle:
							"카페24 고객사 쇼핑몰에 핏파인더 설치 및 유지 보수, V2 업데이트 업무, 사이즈 이미지표 업무 수행",
					},
					{
						subtitle:
							"API에 따른 문구 변경 로직 구현 및 치수 변경 로직 작성 등 V2 동작부 프론트 업무 수행",
					},
					{
						subtitle:
							"Zeplin과 Styled-components을 통한 디자이너와 의사소통 및 협업",
					},
					{
						subtitle:
							"Atomic 디자인 패턴과 Storybook을 통한 컴포넌트 중심 설계 개발",
					},
					{
						subtitle:
							"Admin 페이지 프론트 업무 및 Postman을 통한 고객사 계정 생성, 설치 업무 매뉴얼 작성",
					},
				],
			},
		],
	},
];

const Index = () => {
	return (
		<ResumeSection>
			{resumeList.map((resume) => (
				<ResumeBox key={resume.company}>
					<Title>{resume.company.toUpperCase()}</Title>

					<ResumeItem>
						<SubDescription>
							<span>{resume.position}</span>
							<span>{resume.duration}</span>
						</SubDescription>

						<MainDescription>
							{resume.project?.map((project) => {
								const list = project.list;

								return (
									<React.Fragment key={project.title}>
										<Title>
											<Icon />
											{project.title}
										</Title>

										<Skill>{project.skill}</Skill>

										<ProjectList>
											{list.map((item) => (
												<ul key={`${item.subtitle}`}>
													<li>
														{item.subtitle}
														<ul>
															{item.description?.map((el, idx) => {
																return <li key={`asd${idx}`}>{el}</li>;
															})}
														</ul>
													</li>
												</ul>
											))}
										</ProjectList>
									</React.Fragment>
								);
							})}
						</MainDescription>
					</ResumeItem>
				</ResumeBox>
			))}
		</ResumeSection>
	);
};

const ResumeSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100vw;
	height: 100vh;
	background: ${color.defaultBg};
	${overflowY}
`;

const ResumeBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	margin-top: 7rem;
	padding-left: 5.5rem;
	box-sizing: border-box;
`;

const Title = styled.span`
	${flexCenter}

	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 10%;
	font-size: 3rem;
	font-weight: 600;
	letter-spacing: 0.5rem;
`;

const Icon = styled.div`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	background: ${color.deepDarkBg};
	margin-right: 2rem;
`;

const ResumeItem = styled.div`
	display: flex;
	width: 100%;
	height: 90%;
`;

const SubDescription = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-top: 1rem;
	box-sizing: border-box;

	span {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 1rem;
		letter-spacing: 0.2rem;
		box-sizing: border-box;
		white-space: pre-wrap;
	}
`;

const MainDescription = styled.div`
	display: flex;
	flex-direction: column;
	flex: 9;
	border-left: 2px solid ${color.deepDarkBg};
	padding-top: 4rem;
	padding-left: 3rem;
	box-sizing: border-box;
`;

const Skill = styled.span`
	margin: 2rem 0;
	letter-spacing: 0.2rem;
`;

const ProjectList = styled.div`
	letter-spacing: 0.2rem;
	margin-bottom: 7rem;

	li {
		margin-top: 1rem;
	}
`;

export default Index;
