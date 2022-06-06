import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Three from "../components/Three";

const Home: NextPage = () => {
	return (
		<HomeSection>
			<Three></Three>
		</HomeSection>
	);
};

const HomeSection = styled.main``;

export default Home;
