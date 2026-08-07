import { useEffect, useState } from 'react';
import { useDogContext } from '../context/DogContext';
import { dogApi } from '../services/dogApi';

const SEARCH_DEBOUNCE_MS = 400;

/**
 * Fetches breeds from The Dog API based on shared searchTerm.
 * Debounces API calls so typing does not fire a request on every keystroke.
 */
export const useDogs = () => {
  const { dogs, loading, error, searchTerm, setDogs, setLoading, setError } =
    useDogContext();

  // Debounced copy of searchTerm drives the actual fetch
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, SEARCH_DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    let cancelled = false;

    const fetchDogs = async () => {
      setLoading(true);
      setError(null);

      try {
        let data;

        if (debouncedTerm && debouncedTerm.trim()) {
          data = await dogApi.searchBreeds(debouncedTerm);
        } else {
          data = await dogApi.getAllBreeds();
        }

        if (!cancelled) {
          setDogs(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Failed to fetch dog breeds');
          setDogs([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchDogs();

    return () => {
      cancelled = true;
    };
  }, [debouncedTerm, setDogs, setLoading, setError]);

  return { dogs, loading, error };
};
