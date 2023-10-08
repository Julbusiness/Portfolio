import "./Portfolio.css";
import Bandeau from "../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky5.png";
import imageCard from "/assets/images/cards/card1.png";
import Title from "../../components/Title/Title";
import SearchBar from "../../components/SearchBar/SearchBar";
import LeftCard from "../../components/Cards/LeftCard/LeftCard";
import data from "../../data/data.json";

export default function Portfolio() {

	const portfolioData = data.map((item) => item.portfolioData);
	console.log(portfolioData);

	let content;
	content = portfolioData.map((item, index) =>
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
		<section className='portfolio'>
			<Bandeau image={imageBandeau} />
			<div className='portfolio-container'>
				{/* <div className='title-start'>
					<Title title='Portfolio' />
				</div> */}
				<div className="search-container">
					<SearchBar />
				</div>
				<div className="portfolio-cards">
					<ul>
						{content}
					</ul>
				</div>
			</div>
		</section>
	);
}
