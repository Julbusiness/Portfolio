import Title from "../../components/Title/Title";
import image from "../../assets/images/desktop4.jpg";
import "./Presentation.css";

export default function Presentation() {
	return (
		<section className='about'>
			<div className='about-container'>
				<img src={image} alt='' />
				<div className='text-container'>
					<h1>Du code à la création.. façonnant le web, pixel par pixel.</h1>
				</div>
			</div>
			<div className='explain-container'>
				<Title title='Construire le Futur Numérique' />
				<p className='details'>
					En tant que développeur web et logiciel, je crois fermement que la
					technologie peut améliorer notre monde, et c'est cette passion qui
					guide chacune de mes réalisations. Je me consacre à comprendre les
					besoins de mes clients et à traduire ces besoins en expériences
					digitales mémorables. Pour moi, chaque projet est un voyage, une
					aventure où innovation, créativité et technique se rejoignent.
				</p>
				<Title title='La Magie derrière chaque Clic' />
				<p className='details'>
					Avez-vous déjà réfléchi à ce qui se passe derrière chaque bouton,
					chaque animation, ou chaque formulaire sur un site web ou une
					application ? C'est là que j'interviens. Avec une combinaison de
					compétences techniques et d'une vision créative, je m'efforce de
					donner vie à des expériences digitales qui enchantent, informent et
					engagent. Mon but est de créer des interfaces intuitives et des
					systèmes puissants qui répondent aux besoins actuels tout en étant
					prêts pour l'avenir.
				</p>
			</div>
		</section>
	);
}
