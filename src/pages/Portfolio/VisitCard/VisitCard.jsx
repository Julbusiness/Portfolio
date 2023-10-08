import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky6.png";
import "./VisitCard.css";

export default function VisitCard() {
	return (
		<section className='visitCard'>
			<Bandeau image={imageBandeau} />
			<div className='visitCard-container'>
        
      </div>
		</section>
	);
}
