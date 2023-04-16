import styled from "styled-components";
import Card from "./Card";

const Resume = () => {
	return (
		<ResumeSection>
			<h3>RESUME</h3>

			<ul>
				{[""].map((item) => (
					<Card key={item} />
				))}
			</ul>
		</ResumeSection>
	);
};

const ResumeSection = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;

	h3 {
		width: 100%;
		font-weight: 700;
		font-size: 78.6652px;
		line-height: 95px;
		letter-spacing: 0.32em;
	}
`;

export default Resume;
