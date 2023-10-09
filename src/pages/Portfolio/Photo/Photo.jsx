import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky6.png";
import "./Photo.css";
import Title from "../../../components/Title/Title";
import data from "../../../data/data.json";
import { Link } from "react-router-dom";

export default function Photo() {

  const photoData = data.map((item) => item.portfolioData[0].photo);

	let content;
	content = photoData.map((item, index) =>
		item.map((card, index) => (
			<img src={`/assets/images/photos/${card.image}`} alt='' key={card.id} />
		))
	);

	return (
		<section className='photo'>
			<Bandeau image={imageBandeau} />
			<div className='photo-container'>
				<Link to="/portfolio">
					<button>
						<i className='bx bx-left-arrow-alt'></i>
					</button>
				</Link>
				<div className='title-start'>
					<Title title='Photo' />
				</div>
				<div className='photos'>{content}</div>
			</div>
		</section>
	);
}
