import { useDogContext } from "../context/DogContext";

function FavoriteButton({ dog }) {
    const { isFavorite, toggleFavorite } = useDogContext();

    return (
        <button onClick={() => toggleFavorite(dog)}>
            {isFavorite(dog.id) ? "❤️" : "🤍"}
        </button>
    );
}

export default FavoriteButton;