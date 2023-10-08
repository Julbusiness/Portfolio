import { Link } from "react-router-dom";
import "./Portfolio.css";
import Bandeau from "../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky5.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import LeftCard from "../../components/Cards/LeftCard/LeftCard";
import data from "../../data/data.json";

export default function Portfolio() {
	const portfolioData = data.map((item) => item.portfolioData[0].portfolio);

	let content;
	content = portfolioData.map((item, index) =>
		item.map((card, index) => (
			<li key={card.id}>
				<Link to={card.route} className='portfolio-links'>
					<LeftCard
						image={`/assets/images/cards/${card.image}`}
						title={card.title}
					/>
				</Link>
			</li>
		))
	);

	return (
		<section className='portfolio'>
			<Bandeau image={imageBandeau} />
			<div className='portfolio-container'>
				<div className='search-container'>
					<SearchBar />
				</div>
				<div className='portfolio-cards'>
					<ul>{content}</ul>
				</div>
			</div>
		</section>
	);
}
