import React from "react";
import styled from "styled-components";
import { color, flexCenter, flexCenterDir, overflowY, rainbowText } from "../../styles/theme";

const resumeList = [
	{
		company: "pynth protocol",
		position: "Frontend",
		duration: "2022.03 -\n재직중",
		project: [
			{
				title: "peri.Staking",
				skill: "React, TypeScript, Redux-toolkit, ethers.js, AWS, Jira, Confluence",
				mainDesc: {
					desc: "핀스프로토콜의 dAPP인 staking의 기능 구현과 유지보수를 하고 있습니다",
					deploy: "https://staking.peri.finance/",
					github: "https://github.com/perifinance/peri.staking",
				},
				list: [
					{
						subtitle: "ethers.js를 통한 컨트랙트 연결 및 호출 비동기 병렬처리화 속도개선",
					},
					{
						subtitle: "Liquidation(청산) 구현",
						description: [
							"Liquidation 대상 리스트 병렬 호출 및 예외처리 로직 구현",
							"다른 유저가 청산 대상자의 빚을 대신 갚는 TAKE 기능 구현",
						],
					},
					{
						subtitle: "Escrow(보상) 구현",
						description: ["52주 동안 쌓인 reward 수령", "Escrow 대상 리스트 병렬 호출 및 예외처리 로직 구현"],
					},
				],
			},
			{
				title: "peri.Dex",
				skill: "React, TypeScript, Redux-toolkit, ethers.js, the graph, AWS",
				mainDesc: {
					desc: "핀스프로토콜의 Dex 기능복구와 유지보수를 작업했습니다",
					deploy: "https://dex.peri.finance/exchange",
					github: "https://github.com/perifinance/peri.dex",
				},
				list: [
					{
						subtitle: "기존 The Graph 환경에서 GraphQL로 프론트, 백단 환경 변경",
					},
					{
						subtitle: "사용자 경험 개선을 위한 차트 변경 및 UI, UX",
					},
					{
						subtitle: "바이낸스 API를 이용한 차트 구현",
					},
				],
			},
			{
				title: "peri.Dashboard",
				skill: "React, TypeScript, Redux, GraphQL, ethers.js, AWS",
				mainDesc: {
					desc: "핀스프로토콜의 Dashboard 기능복구와 유지보수를 작업했습니다",
					deploy: "https://dashboard.peri.finance/bridge/submit",
					github: "https://github.com/perifinance/peri.dashboard",
				},
				list: [
					{
						subtitle: "기존 The Graph 환경에서 GraphQL로 프론트, 백단 환경 변경",
					},
				],
			},
			{
				title: "nendNFT",
				skill: "React, TypeScript, Recoil-persist, Styled-components, AWS, CloudFront",
				mainDesc: {
					desc: "핀스프로토콜의 NFT 민팅 서비스 퍼블리싱을 작업했습니다",
					deploy: "https://nendnft.com/",
					github: "https://github.com/perifinance/perifinance_NFT",
				},

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
				mainDesc: {
					desc: "개발 및 마케팅 팀에서 활용되는 툴을 제작했습니다",
					deploy: "",
					github: "https://github.com/perifinance/tvl-holders",
				},
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
						description: ["Googleapis를 사용한 봇 에러 및 성공 메시지 구글 챗 알림 기능 구현"],
					},
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
				mainDesc: { desc: "AI 사이즈 측정 서비스", deploy: "https://www.fitfinder.kr/", github: "" },

				list: [
					{
						subtitle: "카페24 고객사 쇼핑몰에 핏파인더 설치 및 유지 보수, V2 업데이트 업무, 사이즈 이미지표 업무 수행",
					},
					{
						subtitle: "API에 따른 문구 변경 로직 구현 및 치수 변경 로직 작성 등 V2 동작부 프론트 업무 수행",
					},
					{
						subtitle: "Zeplin과 Styled-components을 통한 디자이너와 의사소통 및 협업",
					},
					{
						subtitle: "Atomic 디자인 패턴과 Storybook을 통한 컴포넌트 중심 설계 개발",
					},
					{
						subtitle: "Admin 페이지 프론트 업무 및 Postman을 통한 고객사 계정 생성, 설치 업무 매뉴얼 작성",
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
				skill: "Next.js, TypeScript, Recoil-persist, Styled-components, Storybook, Vercel",
				mainDesc: {
					desc: "로스트아크 주간 골드 획득량 계산",
					deploy: "https://lostgold.vercel.app/",
					github: "https://github.com/KAEN7/lostgold",
				},
				list: [
					{
						subtitle: "Atomic 디자인 패턴과 Storybook을 통한 컴포넌트 중심 설계 개발",
					},
					{
						subtitle: "Recoil-persist를 통한 캐릭터 및 개별 재료 골드 가격 전역 관리",
					},
					{
						subtitle: "설정페이지로 재료별 가격 및 캐릭터 추가 기능 전역적 관리",
					},
					{ subtitle: "캐릭터 별 골드 계산 로직 구현" },
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
								const desc = project.mainDesc;

								return (
									<React.Fragment key={project.title}>
										<Title>
											{/* <Icon /> */}
											{project.title}
										</Title>

										<Skill>{project.skill}</Skill>

										<Description>
											<span>{desc.desc}</span>
											<a href={desc.deploy} target="_blank" rel="noreferrer">
												배포
											</a>
											<a href={desc.github} target="_blank" rel="noreferrer">
												깃헙
											</a>
										</Description>

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

const Description = styled.div`
	display: flex;
	letter-spacing: 0.2rem;

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 1rem;
		background: ${color.deepDarkBg};
		color: ${color.white};
		padding: 0 0.5rem;
		border-radius: 0.3rem;
		box-sizing: border-box;
		font-size: 0.8rem;
	}
`;

const ProjectList = styled.div`
	letter-spacing: 0.2rem;
	margin-bottom: 7rem;

	li {
		margin-top: 1rem;
	}
`;

export default Index;
