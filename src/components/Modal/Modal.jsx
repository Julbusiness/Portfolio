import "./Modal.css";

export default function Modal(props) {
	return (
		<div className='modal'>
			<div className='modal-content' onClick={(e) => e.stopPropagation()}>
				<div className='modal-btn-left' onClick={props.left}>
					<button>
						<i className='bx bx-left-arrow-alt'></i>
					</button>
				</div>
				{props.children}
				<div className='modal-btn-right' onClick={props.right}>
					<button>
						<i className='bx bx-right-arrow-alt'></i>
					</button>
				</div>
				<div className='modal-btn-close' onClick={props.close}>
					<button>
						<i className='bx bx-x'></i>
					</button>
				</div>
			</div>
		</div>
	);
}
