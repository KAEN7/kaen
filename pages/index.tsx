import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import Portfolio from "./portfolio/Portfolio";
import Three from "../components/Three";

const Home: NextPage = () => {
	return (
		<HomeSection>
			<Portfolio />
			<Three></Three>
		</HomeSection>
	);
};

const HomeSection = styled.main`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	overflow: hidden;
	margin: 0;
	padding: 0;
`;

export default Home;
