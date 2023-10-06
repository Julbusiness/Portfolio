import { Link } from "react-router-dom";
import desktop from "../../assets/images/accueil/desktop1.jpg";
import accueil from "../../assets/images/accueil/accueil.jpg";
import apropos from "../../assets/images/accueil/apropos.jpg";
import skills from "../../assets/images/accueil/skills.jpg";
import projet from "../../assets/images/accueil/projet.jpg";
import confiance from "../../assets/images/accueil/confiance.jpg";
import contact from "../../assets/images/accueil/contact.jpg";
import Title from "../../components/Title/Title";
import "./Home.css";

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
			<div className='card-container'>
			<div className="home-title-start">
				<Title title="Transformez vos idées en réalités digitales"/>
			</div>
				<div className='home-card-container'>
					<div className='home-card'>
						<Link to='/' className='link'>
							<img src={accueil} alt='' />
							<h3 className='title-card'>Accueil</h3>
						</Link>
					</div>
					<div className='home-card'>
						<Link to='/apropos' className='link'>
							<img src={apropos} alt='' />
							<h3 className='title-card'>À propos</h3>
						</Link>
					</div>
					<div className='home-card'>
						<Link to='/skills' className='link'>
							<img src={skills} alt='' />
							<h3 className='title-card'>Skills</h3>
						</Link>
					</div>
					<div className='home-card'>
						<Link to='/projets' className='link'>
							<img src={projet} alt='' />
							<h3 className='title-card'>Projets</h3>
						</Link>
					</div>
					<div className='home-card'>
						<Link to='/confiance' className='link'>
							<img src={confiance} alt='' />
							<h3 className='title-card'>Confiance</h3>
						</Link>
					</div>
					<div className='home-card'>
						<Link to='/contact' className='link'>
							<img src={contact} alt='' />
							<h3 className='title-card'>Contact</h3>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
