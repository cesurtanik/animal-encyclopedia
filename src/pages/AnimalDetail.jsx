import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { getAnimal } from "../services/animalApi";

function AnimalDetail() {
  const params = new URLSearchParams(window.location.search);
  const animalName = params.get("name");
  const [apiAnimal, setApiAnimal] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function loadAnimal() {
    if (!animalName) {
      setLoading(false);
      return;
    }

    try {
        const apiNameMap = {
  Aslan: "lion",
  Fil: "elephant",
  Kaplan: "tiger",
  Penguen: "penguin",
  Zürafa: "giraffe",
  Panda: "panda",
  "Kutup Ayısı": "polar bear",
  Kartal: "eagle",
};
      const results = await getAnimal(animalName);
      const exactAnimal =
  results.find(
    (animal) =>
      animal.name?.toLowerCase() === apiName.toLowerCase()
  ) || results[0];

setApiAnimal(
  exactAnimal
    ? {
        name: animalName,
        image:
  animalName === "Aslan"
    ? "https://images.unsplash.com/photo-1546182990-dffeafbe841d"
    : animalName === "Fil"
    ? "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46"
    : animalName === "Kaplan"
    ? "https://images.unsplash.com/photo-1561731216-c3a4d99437d5"
    : animalName === "Penguen"
    ? "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7"
    : animalName === "Zürafa"
    ? "https://images.unsplash.com/photo-1547721064-da6cfb341d50"
    : animalName === "Panda"
    ? "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7"
    : animalName === "Kutup Ayısı"
    ? "https://images.unsplash.com/photo-1589656966895-2f33e7653819"
    : animalName === "Kartal"
    ? "https://images.unsplash.com/photo-1611689342806-0863700ce1e4"
    : null,
        type:
          exactAnimal.taxonomy?.class === "Mammalia"
            ? "Memeli"
            : exactAnimal.taxonomy?.class === "Aves"
            ? "Kuş"
            : exactAnimal.taxonomy?.class || "Bilinmiyor",
        habitat:
  animalName === "Aslan" ||
  animalName === "Fil" ||
  animalName === "Zürafa"
    ? "Savana"
    : animalName === "Kaplan" ||
      animalName === "Panda"
    ? "Orman"
    : animalName === "Penguen" ||
      animalName === "Kutup Ayısı"
    ? "Antarktika"
    : animalName === "Kartal"
    ? "Dağ"
    : "Bilinmiyor",
        diet: exactAnimal.characteristics?.diet || "Bilinmiyor",
        description:
          exactAnimal.characteristics?.prey ||
          exactAnimal.characteristics?.slogan ||
          "Bilgi bulunamadı.",
      }
    : null
);
    } catch (error) {
      console.error("Detay API hatası:", error);
    } finally {
      setLoading(false);
    }
  }

  loadAnimal();
}, [animalName]);

  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    return favorites.some(
      (favorite) => favorite.name === animalName
    );
  });

  const animals = {
    Aslan: {
      name: "Aslan",
      type: "Memeli",
      habitat: "Savana",
      diet: "Etçil",
      lifespan: "10 - 15 yıl",
      description:
        "Aslan, güçlü yapısı ve sosyal yaşamıyla tanınan büyük bir kedi türüdür.",
      image:
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    },

    Fil: {
      name: "Fil",
      type: "Memeli",
      habitat: "Savana",
      diet: "Otçul",
      lifespan: "60 - 70 yıl",
      description:
        "Fil, dünyanın en büyük kara hayvanlarından biridir.",
      image:
        "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46",
    },

    Kaplan: {
      name: "Kaplan",
      type: "Memeli",
      habitat: "Orman",
      diet: "Etçil",
      lifespan: "10 - 15 yıl",
      description:
        "Kaplan, çizgili kürküyle tanınan güçlü bir yırtıcıdır.",
      image:
        "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
    },

    Penguen: {
      name: "Penguen",
      type: "Kuş",
      habitat: "Antarktika",
      diet: "Etçil",
      lifespan: "15 - 20 yıl",
      description:
        "Penguen, uçamayan ancak çok iyi yüzebilen bir kuştur.",
      image:
        "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7",
    },
        Zürafa: {
      name: "Zürafa",
      type: "Memeli",
      habitat: "Savana",
      diet: "Otçul",
      lifespan: "20 - 25 yıl",
      description:
        "Zürafa, uzun boynu ve kendine özgü desenleriyle tanınan bir hayvandır.",
      image:
        "https://images.unsplash.com/photo-1547721064-da6cfb341d50",
    },

    Panda: {
      name: "Panda",
      type: "Memeli",
      habitat: "Orman",
      diet: "Otçul",
      lifespan: "15 - 20 yıl",
      description:
        "Panda, bambu ağırlıklı beslenen sakin yapılı bir memelidir.",
      image:
        "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
    },

    "Kutup Ayısı": {
      name: "Kutup Ayısı",
      type: "Memeli",
      habitat: "Antarktika",
      diet: "Etçil",
      lifespan: "20 - 30 yıl",
      description:
        "Kutup ayısı, soğuk iklimlere uyum sağlamış güçlü bir yırtıcıdır.",
      image:
        "https://images.unsplash.com/photo-1589656966895-2f33e7653819",
    },

    Kartal: {
      name: "Kartal",
      type: "Kuş",
      habitat: "Dağ",
      diet: "Etçil",
      lifespan: "20 - 30 yıl",
      description:
        "Kartal, keskin görüşü ve güçlü uçuş yeteneğiyle tanınan bir yırtıcı kuştur.",
      image:
        "https://images.unsplash.com/photo-1611689342806-0863700ce1e4",
    },
  };

  const animal = apiAnimal || animals[animalName] || animals["Aslan"];
  if (loading) {
  return (
    <>
      <Navbar />
      <main className="animal-detail">
        <p className="loading-text">Hayvan bilgisi yükleniyor...</p>
      </main>
    </>
  );
}

  return (
    <>
      <Navbar />

      <main className="animal-detail">
        <div className="detail-image">
          <img
            src={animal.image}
            alt={animal.name}
          />
        </div>
        <button
  className="back-button"
  onClick={() => {
    window.location.href = "/";
  }}
>
  ← Hayvanlara Dön
</button>

        <div className="detail-content">
         <span className="animal-type">
  {apiAnimal?.type || animal.type}
</span>

          <h1>{animal.name}</h1>

         <p className="detail-description">
  {apiAnimal?.description || animal.description}
</p>

          <div className="detail-info">
            <div className="detail-facts">
  <h2>Temel Bilgiler</h2>

  <p>
    <strong>Tür:</strong> {animal.type}
  </p>

  <p>
    <strong>Yaşam Alanı:</strong> {apiAnimal?.habitat || animal.habitat}
  </p>

  <p>
    <strong>Beslenme:</strong> {apiAnimal?.diet || animal.diet}
  </p>
</div>
            <div>
              <span>🌿 Habitat</span>
              <strong>{animal.habitat}</strong>
            </div>

            <div>
              <span>🍖 Beslenme</span>
              <strong>{animal.diet}</strong>
            </div>

            <div>
              <span>⏳ Yaşam Süresi</span>
              <strong>{animal.lifespan}</strong>
            </div>
          </div>

         <button
  className="favorite-detail"
  onClick={() => {
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

      setIsFavorite(false);
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, animal])
      );

      setIsFavorite(true);
    }
  }}
>
  {isFavorite ? "♥ Favorilerden Çıkar" : "♡ Favorilere Ekle"}
</button>
        </div>
        <section className="similar-section">
  <span className="section-label">
    KEŞFET
  </span>

  <h2>Benzer Hayvanlar</h2>

  <div className="similar-grid">
    <div
      className="similar-card"
      onClick={() => {
        window.location.href = "/animal?name=Aslan";
      }}
    >
      <span>🦁</span>
      <h3>Aslan</h3>
      <p>Memeli · Savana</p>
    </div>

    <div
      className="similar-card"
      onClick={() => {
        window.location.href = "/animal?name=Kaplan";
      }}
    >
      <span>🐅</span>
      <h3>Kaplan</h3>
      <p>Memeli · Orman</p>
    </div>

    <div
      className="similar-card"
      onClick={() => {
        window.location.href = "/animal?name=Zürafa";
      }}
    >
      <span>🦒</span>
      <h3>Zürafa</h3>
      <p>Memeli · Savana</p>
    </div>
  </div>
</section>
      </main>
    </>
  );
}

export default AnimalDetail;