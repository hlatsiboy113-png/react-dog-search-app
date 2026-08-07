import { useDogContext } from '../../context/DogContext';
import './FavoriteButton.css';

function FavoriteButton({ dog }) {
  const { isFavorite, toggleFavorite } = useDogContext();

  if (!dog?.id) return null;

  const favorited = isFavorite(dog.id);

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(dog);
  };

  return (
    <button
      type="button"
      className={`favorite-button ${favorited ? 'favorite-button--active' : ''}`}
      onClick={handleClick}
      aria-pressed={favorited}
      aria-label={favorited ? `Remove ${dog.name} from favourites` : `Add ${dog.name} to favourites`}
    >
      <span aria-hidden="true">{favorited ? '♥' : '♡'}</span>
    </button>
  );
}

export default FavoriteButton;
