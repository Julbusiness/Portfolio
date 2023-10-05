import image from "../../assets/images/desktop4.jpg";
import "./Apropos.css";

export default function Apropos() {
	return (
		<section className='about'>
			<div className='about-container'>
				<img src={image} alt='' />
			</div>
			<div className='explain-container'>
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
					<div className='card'>
						<div className='card-text'>
							<h2>Qui suis-je ?</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
								recusandae molestiae mollitia magni dicta et hic quas natus
								accusamus culpa.
							</p>
						</div>
						<div className='card-image'>
							<img src={image} alt='' />
						</div>
					</div>
					<div className='card'>
						<div className='card-text'>
							<h2>Qu'est-ce que je fais ?</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
								recusandae molestiae mollitia magni dicta et hic quas natus
								accusamus culpa.
							</p>
						</div>
						<div className='card-image'>
							<img src={image} alt='' />
						</div>
					</div>
					<div className='card'>
						<div className='card-text'>
							<h2>Qu'est-ce que je recherche ?</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
								recusandae molestiae mollitia magni dicta et hic quas natus
								accusamus culpa.
							</p>
						</div>
						<div className='card-image'>
							<img src={image} alt='' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
