import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dogApi } from '../../services/dogApi';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './DogDetails.css';

function DogDetails({ dog: initialDog, breedId }) {
  const navigate = useNavigate();
  const [fetchedDog, setFetchedDog] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(!initialDog);
  const [imagesLoading, setImagesLoading] = useState(false);
  const [error, setError] = useState(null);

  const dog = initialDog || fetchedDog;

  // Resolve breed from API only when navigation state is missing (refresh / deep link)
  // Async fetch + edge-case error paths intentionally update local UI state.
  useEffect(() => {
    if (initialDog) {
      return;
    }

    if (!breedId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- invalid route state
      setError('No breed id provided.');
      setLoading(false);
      return;
    }

    let cancelled = false;

    const loadBreed = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await dogApi.getBreedById(breedId);
        if (!cancelled) {
          setFetchedDog(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Failed to load breed details');
          setFetchedDog(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadBreed();

    return () => {
      cancelled = true;
    };
  }, [initialDog, breedId]);

  // Gallery images
  useEffect(() => {
    const id = breedId || dog?.id;
    if (!id) return;

    let cancelled = false;

    const fetchImages = async () => {
      setImagesLoading(true);
      try {
        const data = await dogApi.getBreedImages(id, 6);
        if (!cancelled) {
          setImages(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setImages([]);
        }
      } finally {
        if (!cancelled) {
          setImagesLoading(false);
        }
      }
    };

    fetchImages();

    return () => {
      cancelled = true;
    };
  }, [dog?.id, breedId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={() => window.location.reload()}
      />
    );
  }

  if (!dog) {
    return <ErrorMessage message="Breed not found." />;
  }

  const weight = dog.weight?.metric;
  const height = dog.height?.metric;

  return (
    <div className="dog-details">
      <button type="button" className="dog-details-back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="dog-details-header">
        <h1>{dog.name}</h1>
        <div className="dog-details-favorite-wrap">
          <FavoriteButton dog={dog} />
        </div>
      </div>

      <div className="dog-details-info">
        {dog.breed_group && (
          <p>
            <strong>Group:</strong> {dog.breed_group}
          </p>
        )}
        {dog.origin && (
          <p>
            <strong>Origin:</strong> {dog.origin}
          </p>
        )}
        {dog.temperament && (
          <p>
            <strong>Temperament:</strong> {dog.temperament}
          </p>
        )}
        {dog.life_span && (
          <p>
            <strong>Life span:</strong> {dog.life_span}
          </p>
        )}
        {weight && (
          <p>
            <strong>Weight:</strong> {weight} kg
          </p>
        )}
        {height && (
          <p>
            <strong>Height:</strong> {height} cm
          </p>
        )}
        {dog.description && (
          <p className="dog-details-description">{dog.description}</p>
        )}
      </div>

      <div className="dog-details-gallery">
        <h2>Photos</h2>
        {imagesLoading ? (
          <LoadingSpinner />
        ) : images.length === 0 ? (
          <p className="dog-details-gallery-empty">No additional photos available.</p>
        ) : (
          <div className="dog-details-gallery-grid">
            {images.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt={dog.name}
                loading="lazy"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DogDetails;
