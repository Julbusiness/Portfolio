import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky5.png";
import Title from "../../../components/Title/Title";
import LeftCard from "../../../components/Cards/LeftCard/LeftCard";
import data from "../../../data/data.json";
import "./Web.css";
import BackBtn from "../../../components/Buttons/BackBtn/BackBtn";

export default function Web() {
	const webData = data.portfolioData.web;

	let content;
	content = webData.map((card, index) => (
		<li key={card.id}>
			<LeftCard
				image={`/assets/images/cards/${card.image}`}
				tag={card.tag}
				title={card.title}
				text={card.text}
				className
			/>
		</li>
	));

	return (
		<section className='web'>
			<Bandeau image={imageBandeau} />
			<div className='web-container'>
				<BackBtn />
				<div className='title-start'>
					<Title title='Sites Web' />
				</div>
				<div className='web-cards'>
					<ul>{content}</ul>
				</div>
			</div>
		</section>
	);
}
