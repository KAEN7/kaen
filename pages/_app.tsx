import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<Head>
				<title>프론트엔드 개발자 이성훈입니다</title>
				<meta name="description" content="프론트엔드 개발자 이성훈입니다" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DefaultSeo
				title="프론트엔드 개발자 이성훈입니다"
				description="프론트엔드 개발자 이성훈입니다"
				canonical="https://kaen.site"
				openGraph={{
					type: "website",
					url: "https://kaen.site",
					title: "프론트엔드 개발자 이성훈입니다",
					description: "프론트엔드 개발자 이성훈입니다",
					images: [{ url: "https://images/seo_bg.png" }],
					site_name: "KAEN",
				}}
			/>

			<Component {...pageProps} />
		</RecoilRoot>
	);
}

export default MyApp;
