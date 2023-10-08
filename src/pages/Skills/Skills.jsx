import image from "../../assets/images/bandeaux-sticky/bandeau-sticky1.png";
import card from "../../assets/images/accueil/Card1.png";
import Bandeau from "../../components/Bandeau/Bandeau";
import LeftCard from "../../components/Cards/LeftCard/LeftCard";
import Title from "../../components/Title/Title";

import "./Skills.css";

export default function Skills() {
	return (
		<section className='skills'>
			<Bandeau image={image} />
			<div className='skills-container'>
				<div className='title-start'>
					<Title title='Apprentissage et compétences' />
				</div>
				<div className='categories-container'>
					<div className='category formation-content'>
						<div className='title-content'>
							<ul>
								<li>
									<LeftCard
										image={card}
										tag='Formations'
										title='Titre de concepteur - développeur logiciels'
										text='2023 - OpenClassrooms - Bordeaux lorem ipsum dolor sit amet consectetur adipisicing elit. Quae'
									/>
								</li>
								<li>
									<LeftCard
										image={card}
										tag='Formations'
										title='Titre professionnel de développeur web et web mobile'
										text="2021 - O'Clock - Bordeaux"
									/>
								</li>
								<li>
									<LeftCard
										image={card}
										tag='Formations'
										title='BTS Action Commercial'
										text='< 2021 - ICFA - Bordeaux'
									/>
								</li>
							</ul>
						</div>
					</div>
					<div className='category skill-content'>
						<div className='title-content'>
							<ul>
								<li>
									<LeftCard
										image={card}
										tag='Hard Skills'
										title='HTML'
										text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        recusandae molestiae mollitia magni dicta et hic quas natus
        accusamus culpa.'
									/>
								</li>
								<li>
									<LeftCard
										image={card}
										tag='Hard Skills'
										title='CSS'
										text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        recusandae molestiae mollitia magni dicta et hic quas natus
        accusamus culpa.'
									/>
								</li>
								<li>
									<LeftCard
										image={card}
										tag='Hard Skills'
										title='JACASCRIPT'
										text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        recusandae molestiae mollitia magni dicta et hic quas natus
        accusamus culpa.'
									/>
								</li>
								<li>
									<LeftCard
										image={card}
										tag='Hard Skills'
										title='REACT'
										text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        recusandae molestiae mollitia magni dicta et hic quas natus
        accusamus culpa.'
									/>
								</li>
								<li>
									<LeftCard
										image={card}
										tag='Hard Skills'
										title='PHP'
										text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        recusandae molestiae mollitia magni dicta et hic quas natus
        accusamus culpa.'
									/>
								</li>
								<li>
									<LeftCard
										image={card}
										tag='Hard Skills'
										title='DIVERS'
										text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        recusandae molestiae mollitia magni dicta et hic quas natus
        accusamus culpa.'
									/>
								</li>
							</ul>
						</div>
					</div>
					<div className='category technique-content'>
						<div className='title-content'>
							<ul>
								<li>
									<LeftCard
										image={card}
										tag='Techniques'
										title='Javascript / React'
										text='Réalisation de 14 projets avec cahiers des charges. Utilisation de html, css, javascript, react et quelques libraires'
									/>
								</li>
								<li>
									<LeftCard
										image={card}
										tag='Techniques'
										title='PHP'
										text='Réalisations de petits projets lors de ma formation'
									/>
								</li>
								<li>
									<LeftCard
										image={card}
										tag='Techniques'
										title='Compétences administratives et commerciales'
										text="J'ai acquis des compétences en vente et en gestion de la relation client"
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='skills-container'>
				<div className='title-start'>
					<Title title='Expériences professionnelles' />
				</div>
				<div className='categories-container'>
					<div className='category experience-content'>
						<div className='title-content'>
							<ul>
								<li>
									<LeftCard
										image={card}
										tag='Expériences professionelles'
										title='Qui suis-je ?'
										text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        recusandae molestiae mollitia magni dicta et hic quas natus
        accusamus culpa.'
									/>
								</li>
								<li>
									<LeftCard
										image={card}
										tag='Expériences professionelles'
										title='Qui suis-je ?'
										text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        recusandae molestiae mollitia magni dicta et hic quas natus
        accusamus culpa.'
									/>
								</li>
								<li>
									<LeftCard
										image={card}
										tag='Expériences professionelles'
										title='Qui suis-je ?'
										text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        recusandae molestiae mollitia magni dicta et hic quas natus
        accusamus culpa.'
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

{
	/* <div className='text-container'>
					<h1>Du code à la création.. façonnant le web, pixel par pixel.</h1>
				</div> */
}
