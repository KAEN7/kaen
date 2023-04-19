import { useEffect, useState } from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import { useMediaQuery } from "react-responsive";

const Stack = () => {
	const [isMobile, setIsMobile] = useState(false);
	const mobile = useMediaQuery({ query: "(max-width: 47.9375rem" });

	useEffect(() => {
		if (mobile) {
			setIsMobile(mobile);
		}
	}, [mobile]);

	return (
		<StackSection id="stack" mobile={isMobile}>
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
					<Tilt
						key={stack}
						glareEnable={true}
						tiltMaxAngleX={10}
						tiltMaxAngleY={10}
						perspective={1000}
						glareColor={"rgb(0,0,0,0)"}
					>
						<StackItem color={color} mobile={isMobile}>
							{stack}
						</StackItem>
					</Tilt>
				))}
			</ul>
		</StackSection>
	);
};

interface IStackSection {
	mobile: boolean;
}

const StackSection = styled.section<IStackSection>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100vh;

	h3 {
		width: 100%;
		font-weight: 700;
		font-size: ${(props) => (props.mobile ? "3rem" : "4.9166rem")};
		text-align: ${(props) => (props.mobile ? "center" : "left")};
		line-height: 5.9375rem;
		letter-spacing: 0.32em;
	}

	ul {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		list-style-type: none;
		width: 100%;
		padding: 0;
	}
`;

interface IStackItem {
	color: string;
	mobile: boolean;
}

const StackItem = styled.li<IStackItem>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 1rem 0.5rem;
	padding: ${(props) => (props.mobile ? "0.3rem 1.3rem" : "0.5rem 3rem")};
	background: ${(props) => props.color};
	border-radius: 2.0625rem;
	font-weight: 700;
	font-size: ${(props) => (props.mobile ? "1.4rem" : "2.5rem")};
	line-height: 3rem;
	filter: saturate(75%);
`;

export default Stack;
