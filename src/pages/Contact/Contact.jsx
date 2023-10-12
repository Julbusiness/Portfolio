import { useState } from "react";
import Bandeau from "../../components/Bandeau/Bandeau";
import image from "/assets/images/bandeaux-sticky/bandeau-sticky7.png";
import contactImage from "/assets/images/accueil/contact.jpg";
import profilImage from "/assets/images/accueil/moi.jpg";
import Title from "../../components/Title/Title";
import "./Contact.css";

export default function Contact() {
	const [data, setData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const handleSubmit = () => {
		console.log(data);
	};

	return (
		<section className='contact'>
			<Bandeau image={image} />
			<div className='contact-container'>
				<div className='title-start'>
					<Title title='Contact' />
				</div>
				<div className='right-card'>
					<div className='right-card-text'>
						<div className='pics'>
							<img src={profilImage} alt='' />
						</div>
						<div className='pics-text'>
							<h2>Julien DUTRUCH</h2>
							<p className='tel'>06.76.13.88.26</p>
							<p className='email'>devprojules@gmail.com</p>
						</div>
					</div>
					<div className='right-card-pics'>
						<img src={contactImage} alt='' />
					</div>
				</div>
			</div>
		</section>
	);
}
