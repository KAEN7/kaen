import styled from "styled-components";

const Stack = () => {
	return (
		<StackSection id="stack">
			<h3>STACK</h3>

			<ul>
				{[
					{ stack: "React", color: "#01D7FF" },
					{ stack: "JavaScript", color: "#F7DF1E" },
					{ stack: "Next.js", color: "#000000" },
					{ stack: "TypeScript", color: "#007ACC" },
					{ stack: "Redux", color: "#764ABC" },
					{ stack: "Recoil", color: "#000000" },
					{ stack: "AWS", color: "#FF9900" },
					{ stack: "Jira", color: "#2684FF" },
					{ stack: "Styled Component", color: "#EA9672" },
					{ stack: "Vercel", color: "#000000" },
					{ stack: "MongoDB", color: "#10AA50" },
				].map(({ stack, color }) => (
					<StackItem key={stack} color={color}>
						{stack}
					</StackItem>
				))}
			</ul>
		</StackSection>
	);
};

const StackSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100vh;

	h3 {
		width: 100%;
		font-weight: 700;
		font-size: 78.6652px;
		line-height: 95px;
		letter-spacing: 0.32em;
	}

	ul {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		list-style-type: none;
		width: 100%;
	}
`;

interface IStackItem {
	color: string;
}

const StackItem = styled.li<IStackItem>`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0.5rem;
	padding: 0.5rem 3rem;
	background: ${(props) => props.color};
	border-radius: 33px;
	font-weight: 700;
	font-size: 40px;
	line-height: 48px;
	filter: saturate(75%);
`;

export default Stack;
