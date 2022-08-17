import styled from "styled-components";
import { color, flexCenterDir } from "../../styles/theme";

const index = () => {
	const introduce = ["안녕하세요 프론트엔드 개발자 이성훈입니다"];

	const AboutList: any = [introduce];

	return (
		<AboutSection>
			<TextBox>
				<MainTextBox>
					{AboutList.map((item: any, idx: number) => (
						<AboutItem key={`About${idx}`}>
							{item.map((intro: string, idx: number) => (
								<span key={`intro${idx}`}>{intro}</span>
							))}
						</AboutItem>
					))}
				</MainTextBox>
				<SubTextBox>
					<span>asdfasdf</span>
				</SubTextBox>
			</TextBox>
		</AboutSection>
	);
};

const AboutSection = styled.section`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: ${color.defaultBg};
`;

const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 50%;
	height: 80%;
	border-left: 2px solid ${color.deepDarkBg};
	padding: 14px;
	box-sizing: border-box;
`;

const MainTextBox = styled.div`
	${flexCenterDir}

	align-items: flex-start;

	span {
		color: ${color.black};
	}
`;

const AboutItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	div {
		position: relative;
		right: 100%;
	}
`;

const SubTextBox = styled.div`
	${flexCenterDir}

	align-items: flex-start;

	span {
		color: ${color.gray};
	}
`;

export default index;
