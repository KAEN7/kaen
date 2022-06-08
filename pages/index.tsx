import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import Logo from "./Logo/Logo";
import Three from "../components/Three";

const Home: NextPage = () => {
	return (
		<HomeSection>
			<Logo></Logo>
			<Three></Three>
		</HomeSection>
	);
};

const HomeSection = styled.main`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	overflow-x: hidden;
`;

export default Home;
