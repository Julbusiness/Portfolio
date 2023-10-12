import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../../features/modal";
import { slideNumber } from "../../../features/slide";

import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky5.png";
import Title from "../../../components/Title/Title";
import data from "../../../data/data.json";
import LeftCard from "../../../components/Cards/LeftCard/LeftCard";
import Modal from "../../../components/Modal/Modal";
import BackBtn from "../../../components/Buttons/BackBtn/BackBtn";

import "./Web.css";

export default function Web() {
	const modal = useSelector((state) => state.modal);
	const slide = useSelector((state) => state.slide.value);
	const dispatch = useDispatch();

	const webData = data.portfolioData.web;

	let content;
	content = webData.map((card, index) => (
		<li
			key={card.id}
			onClick={() => {
				dispatch(openModal());
				dispatch(slideNumber(index));
			}}
		>
			<LeftCard
				image={`/assets/images/cards/${card.image}`}
				title={card.title}
				text={card.text}
				className
			/>
		</li>
	));

	let contentModal;
	contentModal = (
		<li key={webData[slide].id}>
			<video
				src={`/assets/videos/${webData[slide].video}`}
				type="video/mp4"
				className='video-modal'
				controls
			/>
			<h2 className="title-video">{webData[slide].title}</h2>
		</li>
	);

	return (
		<section className='web'>
			<Bandeau image={imageBandeau} />
			<div className='web-container'>
				<BackBtn />
				<div className='title-start'>
					<Title title='Sites Web' />
				</div>
				<div className='web-cards'>
					<ul>
					{modal.value && <Modal data={webData} content={contentModal} />}
						<div className='galleryImages'>{webData && content}</div>
					</ul>
				</div>
			</div>
		</section>
	);
}
