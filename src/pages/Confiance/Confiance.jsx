import Bandeau from "../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky-confiance.png";
import Title from "../../components/Title/Title";
import data from "../../data/data.json";
import RightCard from "../../components/Cards/RightCard/RightCard";
import "./Confiance.css";

export default function Confiance() {
	const confianceData = data.confianceData;

	let content;
	content = confianceData.map((item, index) => (
		<li key={item.id}>
			<RightCard
				image={`/assets/images/confiance/${item.image}`}
				title={item.title}
				text={item.text}
			/>
		</li>
	));

	return (
		<section className='confiance'>
			<Bandeau image={imageBandeau} />
			<div className='confiance-container'>
				<div className='title-start'>
					<Title title="Il m'ont fait confiance" />
				</div>
				<div className='confiance-cards'>
					<ul>{content}</ul>
				</div>
			</div>
		</section>
	);
}
