import { Link } from "react-router-dom";
import Bandeau from "../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky5.png";
import LeftCard from "../../components/Cards/LeftCard/LeftCard";
import data from "../../data/data.json";
import Title from "../../components/Title/Title";

import "./Portfolio.css";

export default function Portfolio() {
	const portfolioData = data.portfolioData.portfolio;

	let content;
	content = portfolioData.map((card, index) => (
		<li key={card.id}>
			<Link to={card.route} className='portfolio-links'>
				<LeftCard
					image={`/assets/images/cards/${card.image}`}
					title={card.title}
				/>
			</Link>
		</li>
	));

	return (
		<section className='portfolio'>
			<Bandeau image={imageBandeau} />
			<div className='portfolio-container'>
				<div className='title-start'>
					<Title title='Portfolio' />
				</div>
				<div className='portfolio-cards'>
					<ul>{content}</ul>
				</div>
			</div>
		</section>
	);
}
