import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky6.png";
import "./Photo.css";

export default function Photo() {
	return (
		<section className='photo'>
			<Bandeau image={imageBandeau} />
			<div className='photo-container'>

      </div>
		</section>
	);
}
