import { useEffect } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Portfolio = () => {
	const counts = [0, 10, 20, 30, 40, 50];

	useEffect(() => {
		const area: any = document.querySelector(".slide-area");
		const circle: any = document.querySelector(".card-transition");

		let isGrabbing = false;
		let position = 20;
		let startPosition = 0;
		let dropPosition = 20;

		area.addEventListener("mousedown", (event: any) => {
			area.classList.add("--grabbing");
			isGrabbing = true;

			startPosition = event.clientX;
		});

		area.addEventListener("mousemove", (event: any) => {
			if (!isGrabbing) {
				return;
			}

			const screenWidth = area.getBoundingClientRect().width;
			const positionPercentage = (100 / screenWidth) * event.clientX;
			position = (40 / 100) * (100 - positionPercentage);

			circle.style.transform = `rotate(-${position}deg)`;
		});

		area.addEventListener("mouseup", () => {
			area.classList.remove("--grabbing");
			isGrabbing = false;

			var closest = counts.reduce(function (prev, curr) {
				return Math.abs(curr - position) < Math.abs(prev - position)
					? curr
					: prev;
			});

			dropPosition = closest;

			circle.style.transform = `rotate(-${dropPosition}deg)`;
		});
	}, []);

	return (
		<PortfolioSection>
			<div className="container">
				<div className="slide-area">
					<div className="slide-container">
						<div className="card-holder">
							<div className="card-transition">
								{counts.map((deg) => (
									<div
										className="card"
										key={`${deg}DEG`}
										style={{ transform: `rotate(${deg}deg)` }}
									></div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</PortfolioSection>
	);
};

const PortfolioSection = styled.div`
	overflow: hidden;

	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
	}
	.slide-area {
		--width: 288px;
		--height: calc(var(--width) / 3 * 4);
		--origin: calc(var(--height) * 6);
		width: 100%;
		height: var(--height);
		position: relative;
		cursor: grab;

		&.--grabbing {
			cursor: grabbing;
		}
	}
	.slide-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 300%;
	}

	.card-holder {
		position: absolute;
		width: var(--width);
		height: 50vh;
		left: 50%;
		top: 0;
		transform: translateX(-50%);
	}

	.card-transition {
		transform: rotate(-20deg);
		transform-origin: calc(var(--width) / 2) var(--origin);
		transition: transform 0.1s linear;
	}

	.card {
		--rotation: 0deg;

		position: absolute;
		top: 0px;
		left: 0px;
		background: black;
		height: var(--height);
		width: var(--width);
		transform: rotate(var(--rotation));
		transform-origin: 50% var(--origin);
		overflow: hidden;
		border-radius: 17px;
	}
`;

export default Portfolio;
