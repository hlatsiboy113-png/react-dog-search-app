import { createContext, useContext, useState } from "react";

const DogContext = createContext();

export function DogProvider({ children }) {
    const [dogs, setDogs] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const isFavorite = (dogId) => {
        return favorites.some(favorite => favorite.id === dogId);
    };

    const toggleFavorite = (dog) => {
        const alreadyFavorite = isFavorite(dog.id);

        if (alreadyFavorite) {
            setFavorites(
                favorites.filter(favorite => favorite.id !== dog.id)
            );
        } else {
            setFavorites([...favorites, dog]);
        }
    };

    return (
        <DogContext.Provider
            value={{
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
                setError
            }}
        >
            {children}
        </DogContext.Provider>
    );
}

export function useDogContext() {
    return useContext(DogContext);
}
