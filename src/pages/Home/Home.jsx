import desktop from "../../assets/images/desktop1.jpg";
import accueil from "../../assets/images/accueil.jpg";
import presentation from "../../assets/images/presentation.jpg";
import skills from "../../assets/images/skills.jpg";
import projet from "../../assets/images/projet.jpg";
import confiance from "../../assets/images/confiance.jpg";
import contact from "../../assets/images/contact.jpg";

import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<section className='home'>
			<div className='image-container'>
				<div className='image-home'>
					<img src={desktop} alt='desktop' />
				</div>
				<h1 className='title'>
					Julien<span>.</span>
				</h1>
				<div className='profession'>Développeur Front-End</div>
			</div>
			<div className='slide-container'>
				<div className='description-container'>
					<p className='description'>
						Transformez vos idées en réalités digitales
					</p>
				</div>
				<div className='line'></div>
				<div className='fat'></div>
				<div className='scroll-container'>
					<div className='slide'>
						<Link to='/' className='link'>
							<img src={accueil} alt='' />
							<p className='title-card'>Accueil</p>
						</Link>
					</div>
					<div className='slide'>
						<Link to='/presentation' className='link'>
							<img src={presentation} alt='' />
							<p className='title-card'>Présentation</p>
						</Link>
					</div>
					<div className='slide'>
						<Link to='/skills' className='link'>
							<img src={skills} alt='' />
							<p className='title-card'>Skills</p>
						</Link>
					</div>
					<div className='slide'>
						<Link to='/projets' className='link'>
							<img src={projet} alt='' />
							<p className='title-card'>Projets</p>
						</Link>
					</div>
					<div className='slide'>
						<Link to='/confiance' className='link'>
							<img src={confiance} alt='' />
							<p className='title-card'>Confiance</p>
						</Link>
					</div>
					<div className='slide'>
						<Link to='/contact' className='link'>
							<img src={contact} alt='' />
							<p className='title-card'>Contact</p>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
