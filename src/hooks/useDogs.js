import { useEffect } from 'react';
import { useDogContext } from '../context/DogContext';
import { dogApi } from '../services/dogApi';

export const useDogs = () => {
  const { dogs, loading, error, searchTerm, setDogs, setLoading, setError } =
    useDogContext();

  useEffect(() => {
    const fetchDogs = async () => {
      setLoading(true);
      setError(null);

      try {
        let data;

        if (searchTerm && searchTerm.trim()) {
          data = await dogApi.searchBreeds(searchTerm);
        } else {
          data = await dogApi.getAllBreeds();
        }

        setDogs(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch dog breeds');
        setDogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, [searchTerm, setDogs, setLoading, setError]);

  return { dogs, loading, error };
};
