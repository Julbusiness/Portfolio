import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../../features/modal";
import { slideNumber } from "../../../features/slide";

import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky6.png";
import Title from "../../../components/Title/Title";
import data from "../../../data/data.json";
import Modal from "../../../components/Modal/Modal";
import BackBtn from "../../../components/Buttons/BackBtn/BackBtn";

import "./Photo.css";

export default function Photo() {
	const modal = useSelector((state) => state.modal);
	const slide = useSelector((state) => state.slide.value);
	const dispatch = useDispatch();

	const photoData = data.portfolioData.photo;

	let content;
	content = photoData.map((card, index) => (
		<div
			className='card-image'
			key={index}
			onClick={() => {
				dispatch(openModal());
				dispatch(slideNumber(index));
			}}
		>
			<img src={`/assets/images/photos/${card.image}`} alt='' className="image-grid"/>
		</div>
	));

	let contentModal;
	contentModal = (
		<img
			src={`/assets/images/photos/${photoData[slide].image}`}
			alt=''
			key={photoData[slide].id}
			className='image-modal'
		/>
	);

	return (
		<section className='photo'>
			<Bandeau image={imageBandeau} />
			<div className='photo-container'>
				<BackBtn />
				<div className='title-start'>
					<Title title='Photo' />
				</div>
				<div className='photos'>
					{modal.value && <Modal data={photoData} content={contentModal} />}
					<div className='galleryImages'>{photoData && content}</div>
				</div>
			</div>
		</section>
	);
}
