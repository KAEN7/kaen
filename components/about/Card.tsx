import styled, { css } from "styled-components";
import { color, customScrollbar, overflowY } from "../../styles/theme";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loadingAtom } from "../../store";
import { three } from "../../lib/three";
import Image from "next/image";

const Card = ({ item }: any) => {
	const [_, setLoading] = useRecoilState(loadingAtom);
	const [toggle, setToggle] = useState(false);
	const { company, logo, date, position, achievement, resume } = item;

	const loadingHandler = (toggle: boolean) => {
		setLoading(toggle);
	};

	useEffect(() => {
		// three(gltfName, loadingHandler);
	}, []);

	return (
		<CardItem toggle={toggle} onClick={() => setToggle(!toggle)}>
			{toggle ? (
				<Detail>
					<>
						<h3>
							<Image
								src={`/images/icon/${logo}.png`}
								width={20}
								height={20}
								alt={company}
							/>
							{" " + company}
						</h3>
						<span style={{ display: "flex", marginBottom: "0.5rem" }}>
							{date}
						</span>
						<span>{position}</span>
					</>

					<ul className="achievementBox">
						{achievement.map((item: any) => (
							<li key={item[0] + "1"}>{item}</li>
						))}
					</ul>

					<ul className="resumeUl">
						{resume.map(({ title, desc, deploy, github }: any) => (
							<li key={title} className="title">
								<span>
									{title}

									{deploy !== "" && (
										<a href={deploy} target="_blank" rel="noreferrer">
											<Image
												src={`/images/icon/browser.png`}
												width={10}
												height={10}
												alt={"deploy"}
											></Image>
										</a>
									)}

									{github !== "" && (
										<a href={github} target="_blank" rel="noreferrer">
											<Image
												src={`/images/icon/github.png`}
												width={10}
												height={10}
												alt={"github"}
											></Image>
										</a>
									)}
								</span>

								{desc.map(({ subTitle, subDesc }: any) => (
									<ul className="subResumeUl" key={subTitle}>
										<li>{subTitle}</li>

										<ul>
											{subDesc.map((desc: any) => (
												<li key={desc}>{desc}</li>
											))}
										</ul>
									</ul>
								))}
							</li>
						))}
					</ul>
				</Detail>
			) : (
				<>
					<span>{company}</span>
					<Image
						src={`/images/icon/${logo}.png`}
						width={150}
						height={150}
						layout="fixed"
						alt={logo}
					/>
					{/* <canvas id={gltfName}></canvas> */}
					<span>{date}</span>
				</>
			)}
		</CardItem>
	);
};

interface ICardItem {
	toggle: boolean;
}

const CardItem = styled.div<ICardItem>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 348px;
	height: 348px;
	padding: 1rem;
	box-sizing: border-box;
	background: ${color.white};
	border-radius: 32.1415px;
	position: relative;
	transition: 0.3s ease-out;

	span {
		font-weight: 500;
		font-size: 25px;
		line-height: 30px;
		text-align: center;
		color: ${color.black};
	}

	canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	${(props) =>
		props.toggle &&
		css`
			transform: scale(2.2);
			z-index: 1;
			box-shadow: 1px 1px 3px ${color.black};
		`}
`;

const Detail = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	${customScrollbar};
	cursor: pointer;
	color: ${color.black};
	z-index: 2;

	span {
		font-size: 0.5rem;
	}

	h3 {
		margin-bottom: 0;
		font-size: 1rem;
	}

	ul,
	li {
		font-size: 0.2rem;
	}
`;

export default Card;
