import styled from "styled-components";
import Intro from "../../components/about/Intro";
import { customScrollbar } from "../../styles/theme";
import Overview from "../../components/about/Overview";
import Stack from "../../components/about/Stack";
import Resume from "../../components/about/Resume";

const About = () => {
	return (
		<AboutSection>
			<Intro />
			<Overview />
			<Stack />
			<Resume />
		</AboutSection>
	);
};

const AboutSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100vw;
	height: 100vh;
	padding-top: 8vh;
	padding: 0 20rem;
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
