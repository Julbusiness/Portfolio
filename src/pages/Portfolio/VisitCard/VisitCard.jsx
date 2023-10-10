import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky5.png";
import Title from "../../../components/Title/Title";
import data from "../../../data/data.json";
import RightCard from "../../../components/Cards/RightCard/RightCard";
import { Link } from "react-router-dom";
import "./VisitCard.css";

export default function VisitCard() {
	const visitCardData = data.portfolioData.visitCard;

	let content;
	content = visitCardData.map((card, index) => (
		<Link to='#' className='link' key={card.id}>
			<li>
				<RightCard
					image={`/assets/images/visitCard/${card.image}`}
					title={card.title}
					text={card.text}
				/>
			</li>
		</Link>
	));

	return (
		<section className='visitCard'>
			<Bandeau image={imageBandeau} />
			<div className='visitCard-container'>
				<Link to='/portfolio'>
					<button className='btnPrev'>
						<i className='bx bx-left-arrow-alt'></i>
					</button>
				</Link>
				<div className='title-start'>
					<Title title='Carte de visite' />
				</div>
				<div className='visitCard-cards'>
					<ul>{content}</ul>
				</div>
			</div>
		</section>
	);
}
