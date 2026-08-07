import { useDogContext } from '../../context/DogContext';
import './SearchBar.css';

function SearchBar() {
  const { searchTerm, setSearchTerm } = useDogContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <label className="visually-hidden" htmlFor="breed-search">
        Search dog breeds
      </label>
      <input
        id="breed-search"
        type="search"
        placeholder="Search dog breeds..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoComplete="off"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
