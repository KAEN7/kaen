import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "../../styles/theme";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const Intro = () => {
	const [isMobile, setIsMobile] = useState(false);
	const mobile = useMediaQuery({ query: "(max-width: 767px" });

	useEffect(() => {
		if (mobile) {
			setIsMobile(mobile);
		}
	}, [mobile]);

	return (
		<IntroSection mobile={isMobile}>
			<div className="desc">
				<span>안녕하세요.</span>
				<span>프론트엔드 개발자</span>
				<div>
					<Tilt
						glareEnable={true}
						tiltMaxAngleX={10}
						tiltMaxAngleY={10}
						perspective={1000}
						glareColor={"rgb(0,0,0,0)"}
					>
						<h3>이성훈</h3>
					</Tilt>
					<span>입니다</span>
				</div>
			</div>

			<div className="imageBox">
				<Image
					src={`/images/icon/bubble.svg`}
					className="bubble"
					layout="fill"
					alt="bubble"
					priority
				/>
				<Image
					src={`/images/icon/profile.png`}
					className="profile"
					layout="fill"
					alt="profile"
					priority
				/>
				<nav>
					{[
						{ name: "github", url: "https://github.com/KAEN7" },
						{ name: "blog", url: "https://kusdsuna.tistory.com/" },
						{ name: "email", url: "mailto:kusdsuna@naver.com" },
					].map(({ name, url }) => {
						return (
							<Link href={url} passHref key={name}>
								<a target="_blank">
									<Image
										src={`/images/icon/${name}.svg`}
										className={`${name}`}
										width={49}
										height={49}
										alt={`${name}`}
										priority
									/>
								</a>
							</Link>
						);
					})}
				</nav>
			</div>
		</IntroSection>
	);
};

interface IIntroSection {
	mobile: boolean;
}

const IntroSection = styled.section<IIntroSection>`
	display: flex;
	flex-direction: ${(props) => (props.mobile ? "column" : "row")};
	justify-content: space-between;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	background: none;

	.desc {
		display: flex;
		flex-direction: column;
		width: 100%;
		font-weight: 700;
		font-size: ${(props) => (props.mobile ? "2rem" : "43.0588px")};
		line-height: 52px;
		letter-spacing: 0.04em;
		flex: 1;
		${fadeIn};

		${(props) =>
			props.mobile &&
			css`
				padding-top: 9rem;
				box-sizing: border-box;
			`}

		span {
			margin-bottom: 1rem;
		}

		div {
			display: flex;
			align-items: center;

			h3 {
				font-weight: 700;
				font-size: ${(props) => (props.mobile ? "4rem" : "4.9166rem")};
				line-height: 5.9375rem;
				margin: ${(props) => (props.mobile ? "1rem 0" : "3rem 0")};
			}
		}
	}

	.imageBox {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 40rem;
		flex: 1;

		${(props) =>
			props.mobile &&
			css`
				width: 100%;
				height: 10rem;
			`}

		.profile {
			transform: scale(0.65);
		}

		nav {
			position: absolute;
			right: 0;
			bottom: 30px;

			a {
				margin: 0 0.5rem;
			}
		}
	}
`;

export default Intro;
