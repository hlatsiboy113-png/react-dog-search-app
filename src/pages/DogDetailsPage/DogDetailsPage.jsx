import { useParams, useLocation } from 'react-router-dom';
import DogDetails from '../../components/DogDetails/DogDetails';

function DogDetailsPage() {
  const { id } = useParams();
  const location = useLocation();
  const dog = location.state?.dog;

  return (
    <div className="dog-details-page">
      <DogDetails dog={dog} breedId={id} />
    </div>
  );
}

export default DogDetailsPage;
