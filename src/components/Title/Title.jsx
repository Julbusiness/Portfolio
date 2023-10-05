import "./Title.css";

export default function Title(props) {
	return (
		<h2 className='title-container'>
			<p className='title-props'>{props.title}</p>
			<div className='line'></div>
			<div className='fat'></div>
		</h2>
	);
}
