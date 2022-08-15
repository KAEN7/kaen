import Link from "next/link";
import styled from "styled-components";
import { color } from "../styles/theme";

const Header = () => {
	const routeList = ["about", "portfolio", "resume"];

	return (
		<HeaderSection>
			<Logo>
				<Link href="/">
					<a>KAEN</a>
				</Link>
			</Logo>

			<RouteList>
				{routeList.map((route) => (
					<Link href={`/${route}`} key={route}>
						<a>{route.toUpperCase()}</a>
					</Link>
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
`;

const Logo = styled.div`
	display: flex;
	align-items: flex-end;
	background: ${color.black};
	color: ${color.white};
	font-family: "Roboto";
	width: fit-content;
	height: 100%;
	padding: 1rem;
	box-sizing: border-box;

	a {
		letter-spacing: 0.2rem;
	}
`;

const RouteList = styled.nav`
	display: flex;

	a {
		margin: 1rem;
		font-weight: 500;
		color: ${color.black};
		letter-spacing: 0.15rem;
	}
`;

export default Header;
