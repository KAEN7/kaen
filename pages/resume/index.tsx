import { useEffect } from "react";
import styled from "styled-components";
import {
	color,
	flexCenter,
	flexCenterDir,
	overflowY,
	rainbowText,
} from "../../styles/theme";

const Index = () => {
	const introduce = ["안녕하세요 프론트엔드 개발자 이성훈입니다"];
	const skill = ["skill template"];

	const AboutList: any = [introduce, skill, ["test"]];

	useEffect(() => {
		const AboutListDOM = document.querySelectorAll(".about");

		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 1.0,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(entries);
				entry.isIntersecting
					? entry.target.classList.add("focus")
					: entry.target.classList.remove("focus");
			});
		}, options);

		AboutListDOM.forEach((el: any) => observer.observe(el));
	}, []);

	return (
		<AboutSection>
			<TextBox>
				<MainTextBox>
					{AboutList.map((item: any, idx: number) => (
						<AboutItem key={`About${idx}`} className="about">
							{item.map((intro: string, idx: number) => (
								<span key={`intro${idx}`}>{intro}</span>
							))}
						</AboutItem>
					))}
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
	}

	div {
		position: relative;
		right: 100%;
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
