import { useState } from "react";
import Bandeau from "../../components/Bandeau/Bandeau";
import image from "/assets/images/bandeaux-sticky/bandeau-sticky7.png";
import contactImage from "/assets/images/accueil/contact.jpg";
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
						<h2>Julien DUTRUCH</h2>
						<p className='tel'>06.76.13.88.26</p>
						<p className='email'>devprojules@gmail.com</p>
						<form method='post' onSubmit={handleSubmit}>
							<label htmlFor='name'>
								<input
									type='text'
									name='name'
									id='name'
									value={data.name}
									onChange={handleChange}
									placeholder='Nom'
								/>
							</label>
							<label htmlFor='email'>
								<input
									type='email'
									name='email'
									id='email'
									onChange={handleChange}
									value={data.email}
									placeholder='Email'
								/>
							</label>
							<label htmlFor='subject'>
								<input
									type='text'
									name='subject'
									id="subject"
									onChange={handleChange}
									value={data.subject}
									placeholder='Sujet'
								/>
							</label>
							<label htmlFor='message'>
								<textarea
									name='message'
									id='message'
									value={data.message}
									cols='30'
									rows='10'
									onChange={handleChange}
									placeholder='Message'
								></textarea>
							</label>
							<button type='submit'>Envoyer</button>
						</form>
					</div>
					<div className='right-card-image'>
						<img src={contactImage} alt='' />
					</div>
				</div>
			</div>
		</section>
	);
}
