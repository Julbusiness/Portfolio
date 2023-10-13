import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { searchTerm } from "../../features/search";


export default function SearchBar() {

  const dispatch = useDispatch();

	return (
		<div className='searchBar'>
			<div className='inputSearch'>
				<input
					type='text'
					name='searchBar'
					id='searchBar'
					placeholder='Ex : Javascript, React ...'
					onChange={(e) => dispatch(searchTerm(e.target.value))}
				/>
				<button>
					<span>
						<i className='bx bx-search'></i>
					</span>
				</button>
			</div>
		</div>
	);
}
