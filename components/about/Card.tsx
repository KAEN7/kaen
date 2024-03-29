import styled, { css } from "styled-components";
import { color, customScrollbar, overflowY } from "../../styles/theme";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loadingAtom } from "../../store";
import { three } from "../../lib/three";
import Image from "next/image";

const Card = ({ item }: any) => {
	const [_, setLoading] = useRecoilState(loadingAtom);
	// ! toggle 기능 임시 비활성화 상태
	const [toggle, setToggle] = useState(false);
	const { company, logo, date, position, achievement, resume } = item;

	const loadingHandler = (toggle: boolean) => {
		setLoading(toggle);
	};

	const returnType = (type: string) => {
		switch (type) {
			case "company":
				return color.point;
			case "project":
				return color.subPoint;
			case "award":
				return color.yellow;
			default:
				return color.black;
		}
	};

	useEffect(() => {
		// three(gltfName, loadingHandler);
	}, []);

	return (
		<CardItem toggle={toggle} onClick={() => setToggle(false)}>
			{toggle ? (
				<Detail>
					<>
						<h3>
							<Image
								src={`/images/icon/${logo}.png`}
								width={20}
								height={20}
								alt={company}
								priority
							/>
							{" " + company}
						</h3>
						<span style={{ display: "flex", marginBottom: "0.5rem" }}>{date}</span>
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
												priority
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
												priority
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
						priority
					/>
					{/* <canvas id={gltfName}></canvas> */}
					{/* <span>{date}</span> */}

					<TypeColor type={returnType(item.type)}></TypeColor>
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
	box-shadow: 0px 0px 5px ${color.gray};
	cursor: pointer;

	&:hover {
		box-shadow: 0px 0px 15px ${color.gray};
	}

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

interface ITypeColor {
	type: string;
}

const TypeColor = styled.div<ITypeColor>`
	background: ${(props) => props.type};
	width: 50%;
	height: 10px;
`;

export default Card;
