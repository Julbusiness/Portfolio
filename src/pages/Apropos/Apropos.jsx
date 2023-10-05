import image from "../../assets/images/desktop4.jpg";
import "./Apropos.css";

export default function Apropos() {
	return (
		<section className='about'>
			<div className='about-container'>
				<img src={image} alt='' />
			</div>
			<div className='explain-container'>
				<div className="about-title-container">
					<h1>À propos</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae recusandae molestiae mollitia magni dicta et hic quas natus accusamus culpa.</p>
				</div>
				<div className="stats">
					<p>
						<span>+3Y </span>
						d'expériences
					</p>
					<p>
						<span>&gt; 20 </span>
						Projets Réalisés
					</p>
					<p>
						<span>+20 </span>
						ans d'expériences professionelles
					</p>
					<p>
						<span>∞ </span>
						motivation
					</p>
				</div>
				<div className="cards">

				</div>
			</div>
		</section>
	);
}
