import './SearchBar.css'

export default function SearchBar() {
	return (
		<div className='searchBar'>
      <div className="inputSearch">
        <input type="text" name="" id="search" placeholder='Ex : Javascript, React ...'/>
        <button>
          <span><i className='bx bx-search'></i></span>
        </button>
      </div>
		</div>
	);
}
