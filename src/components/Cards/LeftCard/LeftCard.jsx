import "./LeftCard.css";

export default function LeftCard(props) {
	return (
		<div className='left-card'>
			<div className='left-card-image'>
					<img src={props.image} alt='' />
			</div>
			<div className='left-card-text'>
				<div className='tag'>{props.tag}</div>
				<h2>{props.title}</h2>
				<p>{props.text}</p>
			</div>
		</div>
	);
}