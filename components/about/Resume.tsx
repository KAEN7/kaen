import styled from "styled-components";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Mousewheel } from "swiper";
import resume from "../../json/resume.json";
import Tilt from "react-parallax-tilt";

const Resume = () => {
	return (
		<ResumeSection id="resume">
			<h3>RESUME</h3>

			<Swiper
				effect={"coverflow"}
				grabCursor={false}
				centeredSlides={false}
				touchRatio={0}
				slidesPerView={3}
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
							<Card gltfName="pynth" item={item} />
						</Tilt>
					</SwiperSlide>
				))}
			</Swiper>
		</ResumeSection>
	);
};

const ResumeSection = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;

	h3 {
		width: 100%;
		font-weight: 700;
		font-size: 78.6652px;
		line-height: 95px;
		letter-spacing: 0.32em;
		margin-bottom: 130px;
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

export default Resume;
