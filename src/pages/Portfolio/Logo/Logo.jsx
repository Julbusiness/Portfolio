import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky6.png";
import "./Logo.css";
import Title from "../../../components/Title/Title";
import data from "../../../data/data.json";
import { Link } from "react-router-dom";

export default function Logo() {
	const logoData = data.map((item) => item.portfolioData[0].logo);

	let content;
	content = logoData.map((item, index) =>
		item.map((card, index) => (
			<img src={`/assets/images/logos/${card.image}`} alt='' key={card.id} />
		))
	);

	return (
		<section className='logo'>
			<Bandeau image={imageBandeau} />
			<div className='logo-container'>
				<Link to="/portfolio">
					<button>
						<i className='bx bx-left-arrow-alt'></i>
					</button>
				</Link>
				<div className='title-start'>
					<Title title='Logo' />
				</div>
				<div className='logos'>{content}</div>
			</div>
		</section>
	);
}
