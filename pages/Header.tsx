import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { color, rainbowText } from "../styles/theme";

const Header = () => {
	const routeList = ["about", "portfolio", "resume"];
	const router = useRouter();

	console.log("router", router.pathname);

	return (
		<HeaderSection>
			<Logo>
				<Link href="/">
					<a>KAEN</a>
				</Link>
			</Logo>

			<RouteList>
				{routeList.map((route) => (
					<React.Fragment key={route}>
						<Link href={`/${route}`}>
							<a>{route.toUpperCase()}</a>
						</Link>
						{`/${route}` === router.pathname && <BorderLine></BorderLine>}
					</React.Fragment>
				))}
			</RouteList>
		</HeaderSection>
	);
};

const HeaderSection = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	top: 0;
	width: 100%;
	height: 8vh;
	font-family: "Roboto";
	background: ${color.defaultBg};
`;

const Logo = styled.div`
	display: flex;
	align-items: flex-end;
	background: ${color.deepDarkBg};
	color: ${color.white};
	font-family: "Roboto";
	width: fit-content;
	height: 100%;
	padding: 1rem;
	box-sizing: border-box;

	a {
		letter-spacing: 0.2rem;

		&:hover {
			${rainbowText}
		}
	}
`;

const RouteList = styled.nav`
	display: flex;

	a {
		margin: 1rem;
		font-weight: 500;
		color: ${color.black};
		letter-spacing: 0.15rem;

		&:hover {
			${rainbowText}
		}
	}
`;

const BorderLine = styled.div`
	height: 3px;
	width: 100%;
	background: ${color.black};
`;

export default Header;
