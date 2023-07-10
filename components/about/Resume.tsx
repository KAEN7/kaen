import { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper";
import Tilt from "react-parallax-tilt";
import { useMediaQuery } from "react-responsive";

import resume from "../../json/resume.json";
import Card from "./Card";
import { color } from "../../styles/theme";

const Resume = () => {
	const [isMobile, setIsMobile] = useState(false);
	const mobile = useMediaQuery({ query: "(max-width: 47.9375rem" });

	useEffect(() => {
		if (mobile) {
			setIsMobile(mobile);
		}
	}, [mobile]);

	return (
		<ResumeSection id="resume" mobile={isMobile}>
			<h3>RESUME</h3>

			<Legend>
				{[
					{ title: "Company", color: color.point },
					{ title: "Project", color: color.subPoint },
					{ title: "Award", color: color.yellow },
				].map((label) => (
					<LegendItem key={label.title} color={label.color}>
						<span>{label.title}</span>
						<div className="colorLine"></div>
					</LegendItem>
				))}
			</Legend>

			<Swiper
				effect={"coverflow"}
				centeredSlides={false}
				touchRatio={0}
				slidesPerView={mobile ? 1 : 3}
				navigation={true} // 네비게이션 버튼
				mousewheel={true} // 마우스 휠
				modules={[Navigation, Mousewheel]} // 모듈추가
				className="mySwiper"
			>
				{resume.map((item) => (
					<SwiperSlide key={item.logo}>
						<Tilt
							glareEnable={true}
							tiltMaxAngleX={10}
							tiltMaxAngleY={10}
							perspective={1000}
							glareColor={"rgb(0,0,0,0)"}
						>
							<Card item={item} />
						</Tilt>
					</SwiperSlide>
				))}
			</Swiper>
		</ResumeSection>
	);
};

interface IResumeSection {
	mobile: boolean;
}

const ResumeSection = styled.section<IResumeSection>`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;

	h3 {
		width: 100%;
		font-weight: 700;
		font-size: ${(props) => (props.mobile ? "3rem" : "4.9166rem")};
		text-align: ${(props) => (props.mobile ? "center" : "left")};
		line-height: 5.9375rem;
		letter-spacing: 0.32em;
		margin-bottom: 8.125rem;
	}

	.swiper-wrapper {
		display: -webkit-inline-box;
	}

	.swiper {
		display: flex;
		width: 100%;
	}

	.swiper-slide {
		display: flex;
	}
`;

const Legend = styled.ul`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	padding-right: 0.5em;
	box-sizing: border-box;
	list-style: none;
`;

interface ILegendItem {
	color: string;
}

const LegendItem = styled.li<ILegendItem>`
	display: flex;
	align-items: center;
	margin-right: 1rem;

	.colorLine {
		width: 3rem;
		height: 0.8rem;
		border-radius: 5px;
		background: ${(props) => props.color};
		margin-left: 0.5rem;
	}
`;

export default Resume;
