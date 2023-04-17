import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { color } from "../styles/theme";
import Image from "next/image";

const Header = () => {
	const routeList = ["about", "stack", "resume"];
	const router = useRouter();

	console.log("router", router.pathname);

	return (
		<HeaderSection>
			<Logo href="/">
				<a>
					<Image
						src={`/images/icon/logo_white.svg`}
						width={30}
						height={30}
						alt={"logo"}
					/>
				</a>
			</Logo>

			<RouteList>
				{routeList.map((route) => (
					<React.Fragment key={route}>
						<Link href={`/${route === "about" ? route : `about/#${route}`}`}>
							<a>{route.toUpperCase()}</a>
						</Link>
					</React.Fragment>
				))}
			</RouteList>
		</HeaderSection>
	);
};

const HeaderSection = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	top: 0;
	width: 100vw;
	height: 8vh;
	position: fixed;
	padding: 0 3rem;
	box-sizing: border-box;
	background: none;
	z-index: 98;
`;

const Logo = styled(Link)`
	background: gray;
	width: 10px;
	height: 10px;
`;

const RouteList = styled.nav`
	display: flex;

	a {
		margin: 1rem;
		font-weight: 500;
		color: ${color.white};
		letter-spacing: 0.15rem;
	}
`;

export default Header;
