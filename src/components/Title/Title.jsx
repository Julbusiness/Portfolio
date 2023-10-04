import "./Title.css";

export default function Title(props) {
	return (
		<>
			<div className='title-container'>
				<p className='title'>
					{props.title}
				</p>
				<div className='line'></div>
				<div className='fat'></div>
			</div>
		</>
	);
}
