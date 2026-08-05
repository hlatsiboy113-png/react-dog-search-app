import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dogApi } from '../../services/dogApi';
import { useDogContext } from '../../context/DogContext';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './DogDetails.css';

function DogDetails({ dog, breedId }) {
  const navigate = useNavigate();
  const { isFavorite } = useDogContext();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const data = await dogApi.getBreedImages(breedId || dog.id, 6);
        setImages(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [dog, breedId]);

  if (!dog) return <LoadingSpinner />;

  return (
    <div className="dog-details">
      <button onClick={() => navigate(-1)}>Back</button>
      <div className="dog-details-header">
        <h1>{dog.name}</h1>
        <FavoriteButton dog={dog} isFavorite={isFavorite(dog.id)} />
      </div>
      <div className="dog-details-info">
        <p><strong>Temperament:</strong> {dog.temperament}</p>
        <p><strong>Weight:</strong> {dog.weight.metric} kg</p>
        <p><strong>Height:</strong> {dog.height.metric} cm</p>
      </div>
      <div className="dog-details-gallery">
        {loading ? <LoadingSpinner /> : images.map(img => (
          <img key={img.id} src={img.url} alt={dog.name} />
        ))}
      </div>
    </div>
  );
}

export default DogDetails;
