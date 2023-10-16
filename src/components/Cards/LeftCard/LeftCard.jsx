import "./LeftCard.css";
import { Link } from "react-router-dom";

export default function LeftCard(props) {
	return (
		<div className='left-card'>
			<div className='left-card-image'>
				<img src={props.image} alt='' />
			</div>
			<div className='left-card-text'>
				<div className='tag'>{props.tag}</div>
				<h2>{props.title}</h2>
				<img src={props.logo} alt="" className="web-logo"/>
				<p>{props.text}</p>
				<Link to={props.link} className='web-link'>
					{props.nameLink}
				</Link>
			</div>
		</div>
	);
}
