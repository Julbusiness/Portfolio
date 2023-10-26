import BandeauHome from "../../components/BandeauHome/BandeauHome";
import data from "../../data/data.json";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import "./Home.css";

export default function Home() {
	const homeData = data.homeData.links;
	let content;

	content = homeData.map((link, index) => (
		<div className='home-card' key={link.id}>
			<Link to={link.route} className='link'>
			<div className="home-card-image">
				<img src={`/assets/images/accueil/${link.image}`} alt='' />
			</div>
				<h3 className='title-card'>{link.title}</h3>
			</Link>
		</div>
	));

	return (
		<section className='home'>
			<BandeauHome />
			<div className='home-container'>
				<div className='home-wrapper'>
					<div className='title-start'>
						<Title title='Transformez vos idées en réalités digitales' />
					</div>
					<div className='home-card-container'>{content}</div>
				</div>
			</div>
		</section>
	);
}
