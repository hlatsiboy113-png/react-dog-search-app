import { useDogs } from '../../hooks/useDogs';
import { useDogContext } from '../../context/DogContext';
import DogCard from '../DogCard/DogCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './DogGrid.css';

function DogGrid() {
  const { dogs, loading, error } = useDogs();
  const { searchTerm, setSearchTerm } = useDogContext();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={() => {
          // Retrigger fetch by briefly clearing then restoring term, or force remount via key
          // Simplest reliable retry: toggle searchTerm whitespace-safe refresh
          const term = searchTerm;
          setSearchTerm(term + ' ');
          requestAnimationFrame(() => setSearchTerm(term.trim()));
        }}
      />
    );
  }

  if (!dogs || dogs.length === 0) {
    return (
      <div className="dog-grid-empty">
        <p>
          {searchTerm
            ? `No dog breeds found matching "${searchTerm.trim()}"`
            : 'No dog breeds available'}
        </p>
      </div>
    );
  }

  return (
    <div className="dog-grid">
      {dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))}
    </div>
  );
}

export default DogGrid;
