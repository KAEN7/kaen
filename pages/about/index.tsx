import { useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import Intro from "../../components/about/Intro";
import Overview from "../../components/about/Overview";
import Stack from "../../components/about/Stack";
import Resume from "../../components/about/Resume";
import { customScrollbar } from "../../styles/theme";

const About = () => {
	const [isMobile, setIsMobile] = useState(false);
	const mobile = useMediaQuery({ query: "(max-width: 767px" });

	useEffect(() => {
		if (mobile) {
			setIsMobile(mobile);
		}
	}, [mobile]);

	return (
		<AboutSection mobile={isMobile}>
			<Intro />
			<Overview />
			<Stack />
			<Resume />
		</AboutSection>
	);
};

interface IAboutSection {
	mobile: boolean;
}

const AboutSection = styled.section<IAboutSection>`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100vw;
	height: 100vh;
	padding-top: 8vh;
	padding: ${(props) => (props.mobile ? "0 2rem" : "0 20rem")};
	${customScrollbar};

	.bubble path {
		stroke-dasharray: 136;
		stroke-dashoffset: 0;
		animation: pathAni 5s linear infinite;
	}

	@keyframes pathAni {
		0% {
			stroke-dashoffset: 136;
		}
		50% {
			stroke-dashoffset: 0;
		}
		100% {
			stroke-dashoffset: -136;
		}
	}
`;

export default About;
