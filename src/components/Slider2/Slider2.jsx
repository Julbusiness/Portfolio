import image from "../../assets/images/desktop1.jpg";
import left from "../../assets/left-arrow.png";
import right from "../../assets/right-arrow.png";
import "./Slider2.css";

export default function Slider() {
	
  const containerWheel = (e) => {
      const container = document.querySelector(".gallery");
      container.scrollLeft += e.deltaY;
		};

  const back =(e) => {
    const container = document.querySelector(".gallery");
    container.scrollLeft -= 500;
  }

  const next =(e) => {
    const container = document.querySelector(".gallery");
    container.scrollLeft += 500;
  }

	return (
		<>
			<div className='gallery-wrap'>
				<img src={left} alt='left arrow' id='backBtn' onClick={back}/>
				<div className='gallery scrollbar small-scroll' onWheel={containerWheel}>
						<ul>
							<li><img src={image} alt="" /></li>
							<li><img src={image} alt="" /></li>
							<li><img src={image} alt="" /></li>
							<li><img src={image} alt="" /></li>
							<li><img src={image} alt="" /></li>
							<li><img src={image} alt="" /></li>
							<li><img src={image} alt="" /></li>
							<li><img src={image} alt="" /></li>
						</ul>
				</div>
				<img src={right} alt='right arrow' id='nextBtn' onClick={next}/>
			</div>
		</>
	);
}
