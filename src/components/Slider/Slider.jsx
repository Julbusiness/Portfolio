import image from "../../assets/desktop.jpeg";
import left from "../../assets/left-arrow.png";
import right from "../../assets/right-arrow.png";
import "./Slider.css";

export default function Slider() {
	
  const containerWheel = (e) => {
      const container = document.querySelector(".gallery");
      container.scrollLeft += e.deltaY;
		};

  const back =(e) => {
    const container = document.querySelector(".gallery");
    container.scrollLeft -= 300;
  }

  const next =(e) => {
    const container = document.querySelector(".gallery");
    container.scrollLeft += 300;
  }

	return (
		<>
			<div className='gallery-wrap'>
				<img src={left} alt='left arrow' id='backBtn' onClick={back}/>
				<div className='gallery' onWheel={containerWheel}>
					<div>
						<span>
							<img src={image} alt='desktop' />
						</span>
						<span>
							<img src={image} alt='desktop' />
						</span>
						<span>
							<img src={image} alt='desktop' />
						</span>
					</div>
					<div>
						<span>
							<img src={image} alt='desktop' />
						</span>
						<span>
							<img src={image} alt='desktop' />
						</span>
						<span>
							<img src={image} alt='desktop' />
						</span>
					</div>
				</div>
				<img src={right} alt='right arrow' id='nextBtn' onClick={next}/>
			</div>
		</>
	);
}
