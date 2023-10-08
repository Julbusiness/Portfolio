import Bandeau from "../../components/Bandeau/Bandeau";
import CardTwo from "../../components/Cards/LeftCard/LeftCard";
import image from "../../assets/images/accueil/desktop4.jpg";

import "./Confiance.css";
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Confiance() {
	return (
		<section className='confiance'>
			<Bandeau image={image} />
			<SearchBar />
		</section>
	);
}
