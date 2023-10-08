import image from "/assets/images/bandeaux-sticky/bandeau-sticky1.png";
import card from "/assets/images/accueil/Card1.png";
import Bandeau from "../../components/Bandeau/Bandeau";
import LeftCard from "../../components/Cards/LeftCard/LeftCard";
import Title from "../../components/Title/Title";
import data from "../../data/data.json";

import "./Skills.css";

export default function Skills() {
	const formationsData = data.map((item) => item.skillsData[0].formations);
	const hardSlikksData = data.map((item) => item.skillsData[0].hardSkills);
	const techniquesData = data.map((item) => item.skillsData[0].techniques);
	const experiencesData = data.map((item) => item.skillsData[0].experiences);

	let formationsContent;
	formationsContent = formationsData.map((item, index) =>
		item.map((card, index) => (
			<li key={card.id}>
				<LeftCard
					image={`/assets/images/cards/${card.image}`}
					tag={card.tag}
					title={card.title}
					text={card.text}
				/>
			</li>
		))
	);

	let hardSkillsContent;
	hardSkillsContent = hardSlikksData.map((item, index) =>
		item.map((card, index) => (
			<li key={card.id}>
				<LeftCard
					image={`/assets/images/cards/${card.image}`}
					tag={card.tag}
					title={card.title}
					text={card.text}
				/>
			</li>
		))
	);

	let techniquesContent;
	techniquesContent = techniquesData.map((item, index) =>
		item.map((card, index) => (
			<li key={card.id}>
				<LeftCard
					image={`/assets/images/cards/${card.image}`}
					tag={card.tag}
					title={card.title}
					text={card.text}
				/>
			</li>
		))
	);

	let experiencesContent;
	experiencesContent = experiencesData.map((item, index) =>
		item.map((card, index) => (
			<li key={card.id}>
				<LeftCard
					image={`/assets/images/cards/${card.image}`}
					tag={card.tag}
					title={card.title}
					text={card.text}
				/>
			</li>
		))
	);

	return (
		<section className='skills'>
			<Bandeau image={image} />
			<div className='skills-container'>
				<div className='title-start'>
					<Title title='Apprentissage et compétences' />
				</div>
				<div className='categories-container'>
					<div className='category formation-content'>
						<div className='title-content'>
							<ul>{formationsContent}</ul>
						</div>
					</div>
					<div className='category skill-content'>
						<div className='title-content'>
							<ul>{hardSkillsContent}</ul>
						</div>
					</div>
					<div className='category technique-content'>
						<div className='title-content'>
							<ul>{techniquesContent}</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='skills-container'>
				<div className='title-start'>
					<Title title='Expériences professionnelles' />
				</div>
				<div className='categories-container'>
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
