import video from "/assets/videos/accueil.mp4"
import "./BandeauHome.css";

export default function BandeauHome() {
	return (
		<div className='bandeauHome-container'>
      <video src={video} autoPlay></video>
		</div>
	);
}
