import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { color, fadeIn } from "../../styles/theme";

const Overview = () => {
	const [isMobile, setIsMobile] = useState(false);
	const mobile = useMediaQuery({ query: "(max-width: 767px" });

	useEffect(() => {
		if (mobile) {
			setIsMobile(mobile);
		}
	}, [mobile]);

	return (
		<OverviewSection mobile={isMobile}>
			{!isMobile && (
				<div className="aside">
					<span>OVERVIEW</span>

					<div className="cross">
						<Image
							src={`/images/icon/cross.png`}
							width={30}
							height={30}
							layout="fixed"
							alt={"cross"}
							priority
						/>
					</div>
				</div>
			)}

			<div className="content">
				<span>사용자 경험과 기술 열정을 담은</span>
				<span>
					<h3>프론트엔드 개발자 이성훈</h3> 입니다.
				</span>

				<ul>
					<li>
						항상 디자인적인 요소나 새로운 기술을 도전해보는 것을 좋아합니다.
						사이드 프로젝트와 대회와 같은 환경을 통해 도전하며 빠르게 습득하고
						적용하는 능력을 키웠습니다.
					</li>
					<li>
						개발 생산성을 위한 업무 자동화툴 제작 및 유저에게 직관적인 디자인을
						제공할 수 있는 것에 매력을 느껴 개발을 시작하게 되었습니다.
					</li>
					<li>
						항상 웹 프론트엔드와 새로운 기술에 관심이 많으며, 사용자에게 좋은
						경험과 정보를 제공할 수 있는 개발자가 되는 것이 제 목표입니다.
					</li>
					<li>
						끊임없이 발전하는 IT 산업에서는 지식의 축적이 매우 중요합니다.
						그래서 저는 각종 컨퍼런스 및 개발을 하면서 얻게된 지식들을 정리하고
						블로그에 공유해 지식을 저장하고 알리고 있습니다
					</li>
				</ul>
			</div>
		</OverviewSection>
	);
};

interface IOverviewSection {
	mobile: boolean;
}

const OverviewSection = styled.section<IOverviewSection>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	height: fit-content;
	${fadeIn};

	.aside {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-width: 13.625rem;
		min-height: 36.125rem;
		position: relative;
		background: ${color.white};
		border-radius: 1.5rem;
		margin-right: 3.5625rem;
		padding: 8px 16px;
		box-sizing: border-box;

		span {
			position: absolute;
			font-weight: 700;
			font-size: 1.8171rem;
			line-height: 2.1875rem;
			top: 0.625rem;
			color: ${color.black};
		}

		.cross {
			position: absolute;
			bottom: 1.5625rem;
		}
	}

	.content {
		height: 36.125rem;
		margin-top: 2rem;

		h3 {
			display: flex;
			color: ${color.point};
			font-style: normal;
			font-weight: 700;
			font-size: ${(props) => (props.mobile ? "1.4rem" : "3.3162rem")};
			line-height: 0.125rem;
		}

		span {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			width: 100%;
			color: ${color.white};
			font-style: normal;
			font-weight: 700;
			font-size: ${(props) => (props.mobile ? "1rem" : "2.6912rem")};
		}

		ul {
			li {
				font-weight: 700;
				font-size: ${(props) => (props.mobile ? "1rem" : "1.5625rem")};
				line-height: 2.375rem;
				color: ${color.gray};
				margin-bottom: ${(props) => (props.mobile ? "0.5rem" : "1rem")};
				line-height: ${(props) => (props.mobile ? "1.5rem" : "2.5rem")};
			}
		}
	}
`;

export default Overview;
