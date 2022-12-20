import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { loadingAtom } from "../store";
import { color, overflowY } from "../styles/theme";

import Resume from "../components/Resume";
import Image from "next/image";

interface IResumeList {
	company: string;
	date: string;
	position: string;
	achievement: Array<string>;
	resume: Array<{
		title: string;
		deploy: string;
		github: string;
		desc: Array<{ subTitle: string; subDesc: Array<string> }>;
	}>;
}

const resumeList: Array<IResumeList> = [
	{
		company: "핀스프로토콜",
		date: "2022.03 ~ 2022.11",
		position: "개발팀/프론트엔드",
		achievement: [],
		resume: [
			{
				title: "peri.Staking",
				deploy: "https://staking.peri.finance/",
				github: "https://github.com/perifinance/peri.staking",
				desc: [
					{
						subTitle: "2가지의 새로운 기능 추가로 유저 유입율 향상",
						subDesc: [
							"Liquidation : 청산 대상자 리스트 및 모달 UI/UX 제작, 구현",
							"Escrow : Escrow 대상 리스트 및 트랜잭션 요청",
						],
					},
					{
						subTitle:
							"기존 로딩 속도 개선을 위해 병렬적 비동기 통신을 통해 기존 16초에서 38% 감소시켜 로딩 속도를 6초 빠르게 개선",
						subDesc: [],
					},
					{
						subTitle: "트랜잭션 요청 로직 모듈화로 복잡도를 개선",
						subDesc: [],
					},
				],
			},
			{
				title: "peri.Dex && peri.Dashboard",
				deploy: "https://dex.peri.finance/",
				github: "https://github.com/perifinance/peri.dex",
				desc: [
					{
						subTitle:
							"기존 The Graph 통신 환경에서 GraphQL = 80%, API = 20%로 개선",
						subDesc: [],
					},
					{
						subTitle:
							"코인 차트 및 UI/UX 개선으로 GA 기준 일평균 유입수 24명에서 38명으로 이용률을 개선",
						subDesc: [],
					},
				],
			},
			{
				title: "유지보수용 툴 제작",
				deploy: "",
				github: "https://github.com/perifinance/tvl-holders",
				desc: [
					{
						subTitle: "TVL_Holders",
						subDesc: [
							"마케팅팀에서 활용되는 지표 수집 자동화 툴 제작",
							"PM2 cron과 Googleapis를 통해 매일 구글스프레드시트에 집계량 등록",
						],
					},
					{
						subTitle: "Monitoring Bot",
						subDesc: [
							"개발팀에서 사용되는 봇 에러 및 로그 메시지를 Google Chat에 전송하는 툴 제작",
						],
					},
				],
			},
			{
				title: "nendNFT",
				deploy: "https://nendnft.com/",
				github: "https://github.com/perifinance/perifinance_NFT",
				desc: [
					{
						subTitle: "CloudFront를 통한 정적 웹사이트 라이브 배포",
						subDesc: [],
					},
					{
						subTitle: "퍼블리싱 및 메타마스크 dApp 브라우저 모바일 반응형 구현",
						subDesc: [],
					},
				],
			},
		],
	},
	{
		company: "예스나우",
		date: "2021.12 ~ 2022.02",
		position: "개발팀/프론트엔드",
		achievement: [],
		resume: [
			{
				title: "",
				deploy: "",
				github: "",
				desc: [
					{
						subTitle:
							"카페24 고객사 쇼핑몰에 핏파인더 설치 및 유지 보수, V2 업데이트 업무, 사이즈 이미지표 설계",
						subDesc: [],
					},
					{
						subTitle:
							"Zeplin과 Styled-components을 통한 디자이너와 의사소통 및 협업",
						subDesc: [],
					},
					{
						subTitle:
							"Atomic 디자인 패턴과 Storybook을 통한 컴포넌트 중심 설계 개발",
						subDesc: [],
					},
					{
						subTitle: "Admin 페이지 프론트 업무, 고객사 계정 생성",
						subDesc: [],
					},
				],
			},
		],
	},
];

const skill = [
	"aws",
	"confluence",
	"figma",
	"git",
	"javascript",
	"jira",
	"nextjs",
	"notion",
	"react",
	"recoil",
	"redux",
	"styledComponents",
	"typescript",
	"vercel",
];

const award = ["2022.11 한화생명 드림플러스 블록체인 해커톤, 크로스트상 수상"];

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

			{/* 
			<Image
				src="/images/arrow.svg"
				alt="arrow"
				width={500}
				height={500}
				// placeholder="blur"
			/> */}

			<IntroductionBox>
				<li>리액트와 최적화에 관심이 많은 웹 프론트엔드 개발자입니다</li>
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
			<Resume list={resumeList}></Resume>

			<SubTitle>기술</SubTitle>
			<SkillList>
				{skill.map((stack) => (
					<li key={stack}>
						<Image
							src={`/images/skill/${stack}.png`}
							width={85}
							height={85}
							alt={stack}
						></Image>
					</li>
				))}
			</SkillList>

			<SubTitle>수상</SubTitle>
			<ul>
				{award.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
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
		width: 40rem;
		margin-bottom: 1.5rem;
		list-style: none;
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
	}
`;

const SubTitle = styled.h3`
	width: 57rem;
	font-size: 3rem;
	margin-top: 3rem;
	text-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
`;

const SkillList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	width: 57rem;

	li {
		list-style: none;
		margin: 1rem;
	}
`;

export default Home;
