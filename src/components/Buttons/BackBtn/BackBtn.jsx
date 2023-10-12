import { Link } from "react-router-dom";
import './BackBtn.css'

export default function BackBtn() {
	return (
		<Link to='/portfolio'>
			<button className='btnPrev'>
				<i className='bx bx-left-arrow-alt'></i>
			</button>
		</Link>
	);
}
