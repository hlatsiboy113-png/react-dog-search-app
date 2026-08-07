import DogGrid from '../../components/DogGrid/DogGrid';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <SearchBar />
      <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>Explore Dog Breeds</h2>
      <DogGrid />
    </div>
  );
}

export default Home;
