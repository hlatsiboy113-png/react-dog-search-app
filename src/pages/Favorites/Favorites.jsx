import { useDogContext } from '../../context/DogContext';
import DogCard from '../../components/DogCard/DogCard';
import './Favorites.css';

function Favorites() {
  const { favorites } = useDogContext();

  return (
    <div className="favorites-page">
      <header className="favorites-page__header">
        <h1>Your Favourites</h1>
        <p>
          {favorites.length === 0
            ? 'No favourites yet — heart a breed to save it here.'
            : `${favorites.length} favourite${favorites.length === 1 ? '' : 's'} saved`}
        </p>
      </header>

      {favorites.length === 0 ? (
        <div className="favorites-page__empty">
          <p>Browse breeds on the home page and tap the heart to add favourites.</p>
        </div>
      ) : (
        <div className="dog-grid">
          {favorites.map((dog) => (
            <DogCard key={dog.id} dog={dog} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
