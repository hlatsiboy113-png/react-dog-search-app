import { useNavigate } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './DogCard.css';

function DogCard({ dog }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/dog/${dog.id}`, { state: { dog } });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  return (
    <div
      className="dog-card"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`View details for ${dog.name}`}
    >
      <div className="dog-card-image-container">
        {dog.image?.url ? (
          <img
            src={dog.image.url}
            alt={dog.name}
            className="dog-card-image"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const placeholder = e.currentTarget.nextElementSibling;
              if (placeholder) placeholder.hidden = false;
            }}
          />
        ) : null}
        <div
          className="dog-card-image-placeholder"
          hidden={Boolean(dog.image?.url)}
        >
          No image
        </div>
        <FavoriteButton dog={dog} />
      </div>
      <div className="dog-card-content">
        <h3 className="dog-card-title">{dog.name}</h3>
        {dog.life_span && (
          <p className="dog-card-info">
            <strong>Life Span:</strong> {dog.life_span}
          </p>
        )}
        {dog.temperament && (
          <p className="dog-card-info">
            <strong>Temperament:</strong> {dog.temperament}
          </p>
        )}
      </div>
    </div>
  );
}

export default DogCard;
