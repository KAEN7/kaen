import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Gallery</title>
				<meta name="description" content="find enjoy to Gallery" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DefaultSeo
				title="Gallery"
				description="그때 그 갤러리"
				canonical="https://"
				openGraph={{
					type: "website",
					url: "https://",
					title: "그때 그 갤러리, Gallery",
					description: "그때 그 갤러리",
					images: [{ url: "https://images/seo_bg.png" }],
					site_name: "Gallery",
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
