import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const DogContext = createContext(null);

const FAVORITES_STORAGE_KEY = 'pawfinder-favorites';

function loadFavoritesFromStorage() {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function DogProvider({ children }) {
  const [dogs, setDogs] = useState([]);
  const [favorites, setFavorites] = useState(loadFavoritesFromStorage);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Persist favourites so shared state survives refresh
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (err) {
      console.error('Failed to persist favourites:', err);
    }
  }, [favorites]);

  const isFavorite = useCallback(
    (dogId) => favorites.some((favorite) => String(favorite.id) === String(dogId)),
    [favorites]
  );

  const toggleFavorite = useCallback((dog) => {
    if (!dog?.id) return;

    setFavorites((prev) => {
      const exists = prev.some((f) => String(f.id) === String(dog.id));
      if (exists) {
        return prev.filter((f) => String(f.id) !== String(dog.id));
      }
      return [...prev, dog];
    });
  }, []);

  const value = {
    dogs,
    setDogs,
    favorites,
    setFavorites,
    isFavorite,
    toggleFavorite,
    searchTerm,
    setSearchTerm,
    loading,
    setLoading,
    error,
    setError,
  };

  return <DogContext.Provider value={value}>{children}</DogContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components -- context hook colocated with provider
export function useDogContext() {
  const context = useContext(DogContext);
  if (!context) {
    throw new Error('useDogContext must be used within a DogProvider');
  }
  return context;
}
