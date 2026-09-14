import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setFavorites(savedFavorites);
  }, []);

  return (
    <>
      <Navbar />

      <section className="favorites-page">
        <span className="section-label">
          KAYDETTİKLERİN
        </span>

        <h1>Favorilerim ❤️</h1>

        {favorites.length === 0 ? (
          <p className="empty-favorites">
            Henüz favorilerine hayvan eklemedin.
          </p>
        ) : (
          <div className="animals-grid">
            {favorites.map((animal) => (
              <article
                className="animal-card"
                key={animal.name}
              >
                <div className="animal-image">
                  <img
                    src={animal.image}
                    alt={animal.name}
                  />
                </div>
                <button
  className="favorite-button"
  onClick={() => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.name !== animal.name
    );

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    setFavorites(updatedFavorites);
  }}
>
  ♥
</button>

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
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Favorites;