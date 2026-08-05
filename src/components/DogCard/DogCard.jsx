import FavoriteButton from "./FavoriteButton";

function DogCard({ dog }) {
    return (
        <div>
            <img src={dog.image} alt={dog.name} />

            <h3>{dog.name}</h3>

            <FavoriteButton dog={dog} />
        </div>
    );
}