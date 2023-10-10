import Bandeau from "../../components/Bandeau/Bandeau";
import data from "../../data/data.json";
import image from "/assets/images/bandeaux-sticky/bandeau-sticky5.png";
import "./Apropos.css";
import RightCard from "../../components/Cards/RightCard/RightCard";

export default function Apropos() {
	const aboutData = data.aboutData
	let content;

	content = aboutData.map((card, index) => (
		<RightCard
			image={`/assets/images/cards/${card.image}`}
			title={card.title}
			text={card.content}
			key={card.id}
		/>
	));

	return (
		<section className='about'>
			<Bandeau image={image} />
			<div className='about-container'>
				<div className='about-title-container'>
					<h1>À propos</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
						recusandae molestiae mollitia magni dicta et hic quas natus
						accusamus culpa.
					</p>
				</div>
				<div className='stats'>
					<ul>
						<li>
							<span>+3 </span>
							années d'expériences IT
						</li>
						<li>
							<span>+20 </span>
							Projets Réalisés
						</li>
						<li>
							<span>20 </span>
							ans d'expériences professionelles
						</li>
						<li>
							<span>1 </span>
							motivation à l'infini
						</li>
					</ul>
				</div>
				<div className='cards'>{content}</div>
			</div>
		</section>
	);
}
