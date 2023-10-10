import { useState } from "react";
import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky6.png";
import "./Logo.css";
import Title from "../../../components/Title/Title";
import data from "../../../data/data.json";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";

export default function Logo() {
	// State et Constante pour la modal

	const [slideNumber, setSlideNumber] = useState(0);
	const [openModal, setOpenModal] = useState(false);
	const logoData = data.portfolioData.logo;

	// Fonctions pour la modal

	const handleOpenModal = (index) => {
		console.log(index);
		setSlideNumber(index);
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const prevSlide = () => {
		slideNumber === 0
			? setSlideNumber(logoData.length - 1)
			: setSlideNumber(slideNumber - 1);
	};

	const nextSlide = () => {
		slideNumber === logoData.length - 1
			? setSlideNumber(0)
			: setSlideNumber(slideNumber + 1);
	};

	// Contenu pour la modal

	let contentWithoutModal;
	contentWithoutModal = logoData.map((card, index) => (
		<div
			className='card-image'
			key={index}
			onClick={() => handleOpenModal(index)}
		>
			<img
				src={`/assets/images/logos/${card.image}`}
				alt=''
				className='image-grid'
			/>
		</div>
	));

	let contentWithModal;
	contentWithModal = (
		<img
			src={`/assets/images/logos/${logoData[slideNumber].image}`}
			alt=''
			key={logoData[slideNumber].id}
			className='image-modal'
		/>
	);

	return (
		<section className='logo'>
			<Bandeau image={imageBandeau} />
			<div className='logo-container'>
				<Link to='/portfolio'>
					<button className='btnPrev'>
						<i className='bx bx-left-arrow-alt'></i>
					</button>
				</Link>
				<div className='title-start'>
					<Title title='Logo' />
				</div>
				<div className='logos'>
					{openModal && (
						<Modal close={handleCloseModal} left={prevSlide} right={nextSlide}>
							{contentWithModal}
						</Modal>
					)}
					<div className='galleryImages'>{logoData && contentWithoutModal}</div>
				</div>
			</div>
		</section>
	);
}
