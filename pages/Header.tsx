import Link from "next/link";
import styled from "styled-components";

const Header = () => {
	return (
		<HeaderSection>
			<Logo>GALLERY</Logo>
			<RouteList>
				<Link href="/">
					<a>GALLERY</a>
				</Link>
				<Link href="/">
					<a>VIEW</a>
				</Link>
				<Link href="/">
					<a>DESC</a>
				</Link>
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
	background: black;
	color: white;
	font-family: "Roboto";
	width: fit-content;
	height: 100%;
	padding: 1rem;
	box-sizing: border-box;
`;

const RouteList = styled.nav`
	display: flex;

	a {
		margin: 1rem;
		font-weight: 500;
	}
`;

export default Header;
