import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky6.png";
import "./Photo.css";
import Title from "../../../components/Title/Title";
import data from "../../../data/data.json";
import BackBtn from "../../../components/Buttons/BackBtn/BackBtn";

export default function Photo() {
	const photoData = data.portfolioData.photo;

	let content;
	content = photoData.map((card, index) => (
		<div className='card-image' key={card.id}>
			<img src={`/assets/images/photos/${card.image}`} alt='' />
		</div>
	));

	return (
		<section className='photo'>
			<Bandeau image={imageBandeau} />
			<div className='photo-container'>
				<BackBtn />
				<div className='title-start'>
					<Title title='Photo' />
				</div>
				<div className='photos'>{content}</div>
			</div>
		</section>
	);
}
