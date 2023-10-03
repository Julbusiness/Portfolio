import { Link } from "react-router-dom";
import "./404.css";

export default function NotFound() {
	return (
		<div className='notfound'>
			<div className='text'>404 Page Not Found</div>
      <Link to='/' className="liens">Retour &agrave; l&rsquo;accueil</Link>
		</div>
	);
}
