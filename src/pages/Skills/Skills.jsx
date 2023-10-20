import image from "/assets/images/bandeaux-sticky/bandeau-sticky-skills.png";
// import card from "/assets/images/cards/Card1.svg";
import Bandeau from "../../components/Bandeau/Bandeau";
import LeftCard from "../../components/Cards/LeftCard/LeftCard";
import Title from "../../components/Title/Title";
import data from "../../data/data.json";

import "./Skills.css";

export default function Skills() {
	const formationsData = data.skillsData.formations;
	const hardSkillsData = data.skillsData.hardSkills;
	const experiencesData = data.skillsData.experiences;

	let formationsContent;
	formationsContent = formationsData.map((card, index) => (
		<li key={card.id}>
			<LeftCard
				image={`/assets/images/cards/${card.image}`}
				tag={card.tag}
				title={card.title}
				text={card.text}
			/>
		</li>
	));

	let hardSkillsContent;
	hardSkillsContent = hardSkillsData.map((card, index) => (
		<li key={card.id}>
			<LeftCard
				image={`/assets/images/cards/${card.image}`}
				tag={card.tag}
				title={card.title}
				text={card.text}
			/>
		</li>
	));

	let experiencesContent;
	experiencesContent = experiencesData.map((card, index) => (
		<li key={card.id}>
			<LeftCard
				image={`/assets/images/cards/${card.image}`}
				tag={card.tag}
				title={card.title}
				text={card.text}
			/>
		</li>
	));

	return (
		<section className='skills'>
			<Bandeau image={image} />
			<div className='skills-container'>
				<div className='categories-container'>
					<div className='title-start'>
						<Title title='Formations' />
					</div>
					<div className='category formation-content'>
						<div className='title-content'>
							<ul>{formationsContent}</ul>
						</div>
					</div>
					<div className='title-start'>
						<Title title='Compétences' />
					</div>
					<div className='category skill-content'>
						<div className='title-content'>
							<ul>{hardSkillsContent}</ul>
						</div>
					</div>
					<div className='title-start'>
						<Title title='Expériences' />
					</div>
					<div className='category experience-content'>
						<div className='title-content'>
							<ul>{experiencesContent}</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

{
	/* <h1>Du code à la création.. façonnant le web, pixel par pixel.</h1> */
}
