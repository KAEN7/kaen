import { css } from "styled-components";

// 기기 사이즈
export const size = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};

// 미디어 스타일
const theme = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopL: `(max-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`,
};

// color
export const color = {
	white: "#F3F2F2",
	black: "#34373C",
	gray: "#9EA1A9",
	defaultBg: "#DDE0E7",
	darkBg: "#B8C0D1",
	deepDarkBg: "#302F30",
	blue: "#0071e3",
	orange: "#f56300",
	beige: "#D6AA9D",
};

// flex 디자인
export const flexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const flexCenterDir = css`
	${flexCenter}

	flex-direction: column;
`;

export const pageSetting = css`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	box-sizing: border-box;
	padding: 3rem;
	overflow-y: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const customScrollbar = css`
	overflow-y: auto;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-thumb {
		height: 30%;
		background: ${color.gray};
		border-radius: 8px;
	}

	&::-webkit-scrollbar-track {
		background: none;
	}
`;

export const overflowY = css`
	overflow-y: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const fadeIn = css`
	animation: fade-in 2s;

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const rainbowText = css`
	white-space: nowrap;

	background: -webkit-linear-gradient(92deg, #95d7e3, #eb76ff);
	background-size: 100vw 100vw;

	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: textAnimate 5s linear infinite alternate;

	@keyframes textAnimate {
		from {
			filter: hue-rotate(0deg);
			background-position-x: 0%;
		}
		to {
			filter: hue-rotate(360deg);
			background-position-x: 600vw;
		}
	}
`;

export type Theme = typeof theme;
