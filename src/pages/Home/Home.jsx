import { useDogContext } from '../../context/DogContext';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResultsHeader from '../../components/ResultsHeader/ResultsHeader';
import DogGrid from '../../components/DogGrid/DogGrid';
import './Home.css';

function Home() {
  const { dogs, searchTerm, loading } = useDogContext();

  return (
    <div className="home-page">
      <SearchBar />
      {!loading && (
        <ResultsHeader query={searchTerm.trim()} totalResults={dogs.length} />
      )}
      <DogGrid />
    </div>
  );
}

export default Home;
