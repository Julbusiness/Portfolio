import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../../features/modal";
import { slideNumber } from "../../../features/slide";
import { searchTerm } from "../../../features/search";

import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky5.png";
import Title from "../../../components/Title/Title";
import data from "../../../data/data.json";
import LeftCard from "../../../components/Cards/LeftCard/LeftCard";
import Modal from "../../../components/Modal/Modal";
import BackBtn from "../../../components/Buttons/BackBtn/BackBtn";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

import "./Web.css";

export default function Web() {
	const modal = useSelector((state) => state.modal);
	const slide = useSelector((state) => state.slide.value);
	const search = useSelector((state) => state.search);
	const dispatch = useDispatch();

	const webData = data.portfolioData.web;
	const modalData = webData[slide].modalImage;
	console.log(webData[slide].modalImage);

	let content;
	content = webData
		.filter((website) =>
			website.tags.toLowerCase().includes(search.value.toLowerCase())
		)
		.map((card, index) => {
			return (
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
					/>
					<Link to={card.link}>
						<i className='bx bx-link-external'></i>
					</Link>
				</li>
			);
		});

	let contentModal;
	contentModal =
		modalData &&
		modalData.map((card, index) => {
			console.log(card.image);
			<li key={card.id}>
				<img
					src={`/assets/images/web/${card.image}`}
					className='image-modal'
				/>
				{/* <h2 className='title-image'>{modalData[slide].title}</h2> */}
			</li>;
		});

	return (
		<section className='web'>
			<Bandeau image={imageBandeau} />
			<div className='web-container'>
				<BackBtn />
				<div className='title-start'>
					<div className='title-wrapper'>
						<Title title='Sites Web' />
					</div>
					<div className='search-container'>
						<SearchBar />
					</div>
				</div>
				<div className='web-cards'>
					<ul>
						{modal.value && <Modal data={modalData} content={contentModal} />}
						<div className='galleryImages'>{webData && content}</div>
					</ul>
				</div>
			</div>
		</section>
	);
}
