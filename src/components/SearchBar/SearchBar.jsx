import { useDogContext } from "../../context/DogContext";
import "./SearchBar.css";

function SearchBar() {
    const { searchTerm, setSearchTerm } = useDogContext();

    const handleSubmit = (e) => {
    e.preventDefault();
};

    return(

        <form className="search-bar" onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Search dog breeds..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button type="submit">

                Search

            </button>

        </form>

    )

}

export default SearchBar;