import Image from "next/image";
import styled from "styled-components";
import { color } from "../styles/theme";

interface IResume {
	list: Array<{
		company: string;
		date: string;
		position: string;
		achievement: Array<string>;
		resume: Array<{
			title: string;
			deploy: string;
			github: string;
			desc: Array<{ subTitle: string; subDesc: Array<string> }>;
		}>;
	}>;
}

const Resume = ({ list }: IResume) => {
	return (
		<ResumeSection>
			{list.map(({ company, date, position, achievement, resume }) => (
				<ResumeBox key={company}>
					<h3>{company}</h3>
					<span style={{ display: "flex", marginBottom: "0.5rem" }}>
						{date}
					</span>
					<span>{position}</span>

					<ul>
						{achievement.map((item) => (
							<li key={item[0] + "1"}>{item}</li>
						))}
					</ul>

					<ul className="resumeUl">
						{resume.map(({ title, desc, deploy, github }) => (
							<li key={title} className="title">
								<span>
									{title}

									<a href={deploy} target="_blank" rel="noreferrer">
										<Image
											src={`/images/icon/github.png`}
											width={24}
											height={24}
											alt={"github"}
										></Image>
									</a>

									<a href={github} target="_blank" rel="noreferrer">
										<Image
											src={`/images/icon/browser.png`}
											width={24}
											height={24}
											alt={"browser"}
										></Image>
									</a>
								</span>

								{desc.map(({ subTitle, subDesc }) => (
									<ul className="subResumeUl" key={subTitle}>
										<li>{subTitle}</li>

										<ul>
											{subDesc.map((desc) => (
												<li key={desc}>{desc}</li>
											))}
										</ul>
									</ul>
								))}
							</li>
						))}
					</ul>
				</ResumeBox>
			))}
		</ResumeSection>
	);
};

const ResumeSection = styled.div`
	display: flex;
	flex-direction: column;
`;

const ResumeBox = styled.div`
	margin-bottom: 3rem;

	h3 {
		font-size: 2rem;
		font-weight: bold;
	}

	a {
		margin-left: 0.5rem;

		&:first-child {
			margin-left: 1rem;
		}
	}

	.resumeUl {
		padding: 0 2rem;
		padding-bottom: 0.1rem;
		border-left: 3px solid ${color.blue};

		.title {
			margin: 3rem 0;
			list-style: none;

			span {
				display: flex;
				align-items: flex-end;
				font-weight: bold;
				font-size: 1.3rem;
			}
		}
	}

	.subResumeUl {
		padding-left: 10px;
		padding-top: 0.5rem;
	}

	ul {
		li {
			list-style: inside;
			margin-top: 0.5rem;
		}
	}
`;

export default Resume;
