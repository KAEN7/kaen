import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Intro = () => {
	return (
		<IntroSection>
			<div className="desc">
				<span>안녕하세요.</span>
				<span>프론트엔드 개발자</span>
				<div>
					<h3>이성훈</h3>
					<span>입니다</span>
				</div>
			</div>

			<div className="imageBox">
				<Image
					src={`/images/icon/bubble.svg`}
					className="bubble"
					layout="fill"
					alt="bubble"
				/>
				<Image
					src={`/images/icon/profile.png`}
					className="profile"
					layout="fill"
					alt="profile"
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

const IntroSection = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	background: none;

	.desc {
		display: flex;
		flex-direction: column;
		font-weight: 700;
		font-size: 43.0588px;
		line-height: 52px;
		letter-spacing: 0.04em;
		flex: 1;

		div {
			display: flex;
			align-items: center;

			h3 {
				font-weight: 700;
				font-size: 78.6652px;
				line-height: 95px;
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
