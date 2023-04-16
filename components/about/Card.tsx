import styled from "styled-components";
import { color } from "../../styles/theme";

const Card = () => {
	return (
		<CardItem>
			<span>로스트골드</span>
			<canvas></canvas>
			<span>0000.00 - 0000.00</span>
		</CardItem>
	);
};

const CardItem = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 348px;
	height: 348px;
	padding: 1rem;
	box-sizing: border-box;
	background: ${color.white};
	border-radius: 32.1415px;

	span {
		font-weight: 400;
		font-size: 25px;
		line-height: 30px;
		text-align: center;
		color: ${color.black};
	}

	&:hover {
		transform: scale(1.11);
		transition: 0.6s ease-out;
	}
`;

export default Card;
