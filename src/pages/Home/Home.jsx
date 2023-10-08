import { useState, useEffect } from "react";
import data from "../../data/data.json";
import { Link } from "react-router-dom";
import desktop from "/assets/images/accueil/desktop1.jpg";
import Title from "../../components/Title/Title";
import "./Home.css";

export default function Home() {
	const currentData = data.map((item) => item.homeData.links);

	let content;

	content = currentData.map(
		(item, index) => (
			item.map((link, index) => (
				<div className='home-card' key={link.id}>
					<Link to={link.route} className='link'>
						<img src={`/assets/images/accueil/${link.image}`} alt='' />
						<h3 className='title-card'>{link.title}</h3>
					</Link>
				</div>
			))
		)
	);

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
				<div className='home-title-start'>
					<Title title='Transformez vos idées en réalités digitales' />
				</div>
				<div className='home-card-container'>{content}</div>
			</div>
		</section>
	);
}
