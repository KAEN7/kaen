import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { color } from "../styles/theme";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Header = () => {
	const routeList = ["about", "stack", "resume"];
	const [isMobile, setIsMobile] = useState(false);
	const mobile = useMediaQuery({ query: "(max-width: 767px" });

	useEffect(() => {
		if (mobile) {
			setIsMobile(mobile);
		}
	}, [mobile]);

	return (
		<HeaderSection mobile={isMobile}>
			<Logo href="/">
				<a>
					<Image
						src={`/images/icon/logo_white.svg`}
						width={30}
						height={30}
						alt={"logo"}
						priority
					/>
				</a>
			</Logo>

			{!isMobile && (
				<RouteList>
					{routeList.map((route) => (
						<React.Fragment key={route}>
							<Link href={`/${route === "about" ? route : `about/#${route}`}`}>
								<a>{route.toUpperCase()}</a>
							</Link>
						</React.Fragment>
					))}
				</RouteList>
			)}
		</HeaderSection>
	);
};

interface IHeaderSection {
	mobile: boolean;
}

const HeaderSection = styled.header<IHeaderSection>`
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

	${(props) =>
		props.mobile &&
		css`
			justify-content: center;
		`}
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
