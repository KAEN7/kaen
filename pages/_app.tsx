import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

import { RecoilRoot } from "recoil";

import Main from "./Main";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<Head>
				<title>프론트엔드 개발자 이성훈입니다</title>
				<meta name="description" content="find enjoy to Gallery" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DefaultSeo
				title="프론트엔드 개발자 이성훈입니다"
				description="프론트엔드 개발자 이성훈입니다"
				canonical="https://"
				openGraph={{
					type: "website",
					url: "https://",
					title: "프론트엔드 개발자 이성훈입니다, Gallery",
					description: "프론트엔드 개발자 이성훈입니다",
					images: [{ url: "https://images/seo_bg.png" }],
					site_name: "Gallery",
				}}
			/>

			<Main Component={Component} pageProps={pageProps} />
		</RecoilRoot>
	);
}

export default MyApp;
