import Bandeau from "../../components/Bandeau/Bandeau";
import image from "/assets/images/bandeaux-sticky/bandeau-sticky7.png";
import "./Contact.css";

export default function Contact() {
	return (
		<section className='contact'>
			<Bandeau image={image} />
		</section>
	);
}
