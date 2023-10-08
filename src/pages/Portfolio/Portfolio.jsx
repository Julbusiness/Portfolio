import "./Portfolio.css";
import Bandeau from "../../components/Bandeau/Bandeau";
import imageBandeau from "../../assets/images/bandeaux-sticky/bandeau-sticky5.png";
import imageCard from "../../assets/images/cards/card1.png";
import Title from "../../components/Title/Title";
import SearchBar from "../../components/SearchBar/SearchBar";
import LeftCard from "../../components/Cards/LeftCard/LeftCard";

export default function Portfolio() {
	return (
		<section className='portfolio'>
			<Bandeau image={imageBandeau} />
			<div className='portfolio-container'>
				{/* <div className='title-start'>
					<Title title='Portfolio' />
				</div> */}
				<div className="search-container">
					<SearchBar />
				</div>
				<div className="portfolio-cards">
					<ul>
						<li>
							<LeftCard 
								image={imageCard}
								title="Projet 1"
								text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae"
							/>
						</li>
						<li>
							<LeftCard 
								image={imageCard}
								title="Projet 1"
								text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae"
							/>
						</li>
						<li>
							<LeftCard 
								image={imageCard}
								title="Projet 1"
								text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae"
							/>
						</li>
						<li>
							<LeftCard 
								image={imageCard}
								title="Projet 1"
								text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae"
							/>
						</li>
						<li>
							<LeftCard 
								image={imageCard}
								title="Projet 1"
								text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae"
							/>
						</li>
						<li>
							<LeftCard 
								image={imageCard}
								title="Projet 1"
								text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae"
							/>
						</li>
						<li>
							<LeftCard 
								image={imageCard}
								title="Projet 1"
								text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae"
							/>
						</li>
						<li>
							<LeftCard 
								image={imageCard}
								title="Projet 1"
								text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae"
							/>
						</li>
						<li>
							<LeftCard 
								image={imageCard}
								title="Projet 1"
								text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae"
							/>
						</li>
						<li>
							<LeftCard 
								image={imageCard}
								title="Projet 1"
								text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae"
							/>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
