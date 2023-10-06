import Bandeau from "../../components/Bandeau/Bandeau";
import image from "../../assets/images/bandeaux-sticky/bandeau-sticky1.png";
import "./Apropos.css";
import CardOne from "../../components/Cards/RightCardThin/RightCardThin";

export default function Apropos() {
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
				<div className='cards'>
				<CardOne image={image} title='Qui suis-je ?' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        recusandae molestiae mollitia magni dicta et hic quas natus
        accusamus culpa.'/>
				<CardOne image={image} title="Qu'est ce que je fais ?" text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        recusandae molestiae mollitia magni dicta et hic quas natus
        accusamus culpa.'/>
				<CardOne image={image} title="Qu'est ce que je recherche ?" text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        recusandae molestiae mollitia magni dicta et hic quas natus
        accusamus culpa.'/>
				</div>
			</div>
		</section>
	);
}
