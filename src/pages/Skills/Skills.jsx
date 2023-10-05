import image from "../../assets/images/bg-skills1.jpg";
import Title from "../../components/Title/Title";

import "./Skills.css";

export default function Skills() {
	return (
		<section className='skills'>
			<div className='skills-image'>
				<img src={image} alt='' />
				{/* <div className='text-container'>
					<h1>Du code à la création.. façonnant le web, pixel par pixel.</h1>
				</div> */}
			</div>
			<div className='skills-content'>
				<Title title='Apprentissage et compétences' />
				<div className='categories-container'>
					<div className='category formation-content'>
						<div className='title-name'>
							<h2>Formations</h2>
						</div>
						<div className='title-content'>
							<ul>
								<li>
									<p className='annee'>2023</p>
									<p className='titre'>
										Titre de concepteur et développeur logiciels et applications
										web Javascript-React
									</p>
									<p className='ecole'>OpenClassrooms</p>
									<p className='lieu'>Bordeaux, remote</p>
								</li>
								<li>
									<p className='annee'>2021</p>
									<p className='titre'>
										Titre professionel de développeur web et mobile (PHP, JS,
										REACT)
									</p>
									<p className='ecole'>O'Clock</p>
									<p className='lieu'>Bordeaux, remote</p>
								</li>
								<li>
									<p className='annee'>Avant 2021</p>
									<p className='titre'>BTS Action Commercial</p>
									<p className='ecole'>ICFA</p>
									<p className='lieu'>Bordeaux</p>
								</li>
							</ul>
						</div>
					</div>
					<div className='category skill-content'>
						<div className='title-name'>
							<h2>Skills</h2>
						</div>
						<div className='title-content'>
							<ul>
								<li>
									<p className='annee'>2023</p>
									<p className='titre'>
										Titre de concepteur et développeur logiciels et applications
										web Javascript-React
									</p>
									<p className='ecole'>OpenClassrooms</p>
									<p className='lieu'>Bordeaux, remote</p>
								</li>
								<li>
									<p className='annee'>2021</p>
									<p className='titre'>
										Titre professionel de développeur web et mobile (PHP, JS,
										REACT)
									</p>
									<p className='ecole'>O'Clock</p>
									<p className='lieu'>Bordeaux, remote</p>
								</li>
								<li>
									<p className='annee'>Avant 2021</p>
									<p className='titre'>BTS Action Commercial</p>
									<p className='ecole'>ICFA</p>
									<p className='lieu'>Bordeaux</p>
								</li>
							</ul>
						</div>
					</div>
					<div className='category technique-content'>
						<div className='title-name'>
							<h2>Techniques</h2>
						</div>
						<div className='title-content'>
							<ul>
								<li>
									<p className='annee'>2023</p>
									<p className='titre'>
										Titre de concepteur et développeur logiciels et applications
										web Javascript-React
									</p>
									<p className='ecole'>OpenClassrooms</p>
									<p className='lieu'>Bordeaux, remote</p>
								</li>
								<li>
									<p className='annee'>2021</p>
									<p className='titre'>
										Titre professionel de développeur web et mobile (PHP, JS,
										REACT)
									</p>
									<p className='ecole'>O'Clock</p>
									<p className='lieu'>Bordeaux, remote</p>
								</li>
								<li>
									<p className='annee'>Avant 2021</p>
									<p className='titre'>BTS Action Commercial</p>
									<p className='ecole'>ICFA</p>
									<p className='lieu'>Bordeaux</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='skills-content'>
				<Title title='Travail et expériences' />
				<div className='categories-container'>
					<div className='category formation-content'>
						<div className='title-name'>
							<h2>Formations</h2>
						</div>
						<div className='title-content'>
							<ul>
								<li>
									<p className='titre'>Développeur Front-end</p>
									<p className='societe'>Projets OpenClassrooms</p>
									<p className='duree'>2023 - 2022</p>
									<div className='title-name'>
										<h2>Front JS - REACT</h2>
									</div>
									<p>J'ai concu et développé des services pour des clients divers, photographes, banques,écoles etc..</p>
								</li>
							</ul>
						</div>
					</div>
					<div className='category skill-content'>
						<div className='title-name'>
							<h2>Skills</h2>
						</div>
						<div className='title-content'>
							<ul>
								<li>
									<p className='annee'>2023</p>
									<p className='titre'>
										Titre de concepteur et développeur logiciels et applications
										web Javascript-React
									</p>
									<p className='ecole'>OpenClassrooms</p>
									<p className='lieu'>Bordeaux, remote</p>
								</li>
							</ul>
						</div>
					</div>
					<div className='category technique-content'>
						<div className='title-name'>
							<h2>Techniques</h2>
						</div>
						<div className='title-content'>
							<ul>
								<li>
									<p className='annee'>2023</p>
									<p className='titre'>
										Titre de concepteur et développeur logiciels et applications
										web Javascript-React
									</p>
									<p className='ecole'>OpenClassrooms</p>
									<p className='lieu'>Bordeaux, remote</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
