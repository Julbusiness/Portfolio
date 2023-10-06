import Bandeau from "../../components/Bandeau/Bandeau";
import CardTwo from "../../components/Cards/LeftCard/LeftCard";
import image from "../../assets/images/accueil/desktop4.jpg";

import "./Confiance.css";

export default function Confiance() {
	return (
		<section className='confiance'>
			<Bandeau image={image} />
			<div className='cards'>
				<CardTwo
					image={image}
					tag='Formations'
					title='Qui suis-je ?'
					text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        recusandae molestiae mollitia magni dicta et hic quas natus
        accusamus culpa.'
				/>
			</div>
		</section>
	);
}
