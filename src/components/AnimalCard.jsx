import { useState } from "react";
function AnimalCard({ animal }) {
    const [isFavorite, setIsFavorite] = useState(() => {
  const favorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.some(
    (favorite) => favorite.name === animal.name
  );
});
  return (
    <article
  className="animal-card"
  onClick={() => {
  window.location.href = `/animal?name=${animal.name}`;
}}
>
      <div className="animal-image">
        <img src={animal.image} alt={animal.name} />

       <button
  className="favorite-button"
onClick={(e) => {
  e.stopPropagation();

  const favorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (isFavorite) {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.name !== animal.name
    );

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  } else {
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites, animal])
    );
  }

  setIsFavorite(!isFavorite);
}}
>
  {isFavorite ? "♥" : "♡"}
</button>
      </div>

      <div className="animal-info">
        <span className="animal-type">
          {animal.type}
        </span>

        <h3>{animal.name}</h3>

        <p>{animal.description}</p>

        <div className="animal-meta">
          <span>🌿 {animal.habitat}</span>
          <span>🍖 {animal.diet}</span>
        </div>
        <div className="card-details">
  Detayları Gör →
</div>
      </div>
    </article>
  );
}

export default AnimalCard;