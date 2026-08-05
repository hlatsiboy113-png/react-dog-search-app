feature/dog-api
import { useNavigate } from 'react-router-dom';
import { useDogContext } from '../../context/DogContext';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './DogCard.css';

function DogCard({ dog }) {
  const navigate = useNavigate();
  const { isFavorite } = useDogContext();

  const handleCardClick = () => {
    navigate(`/dog/${dog.id}`, { state: { dog } });
  };

  return (
    <div className="dog-card" onClick={handleCardClick}>
      <div className="dog-card-image-container">
        {dog.image?.url ? (
          <img src={dog.image.url} alt={dog.name} className="dog-card-image" />
        ) : (
          <div className="dog-card-image-placeholder">No image</div>
        )}
        <FavoriteButton dog={dog} isFavorite={isFavorite(dog.id)} />
      </div>
      <div className="dog-card-content">
        <h3>{dog.name}</h3>
        <p><strong>Life Span:</strong> {dog.life_span}</p>
        <p><strong>Temperament:</strong> {dog.temperament}</p>
      </div>
    </div>
  );
}

export default DogCard;

import FavoriteButton from "./FavoriteButton";

function DogCard({ dog }) {
    return (
        <div>
            <img src={dog.image} alt={dog.name} />

            <h3>{dog.name}</h3>

            <FavoriteButton dog={dog} />
        </div>
    );
}

