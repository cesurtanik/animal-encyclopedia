import { useState, useEffect } from "react";
import { getAnimal } from "./services/animalApi";
import AnimalDetail from "./pages/AnimalDetail";
import Navbar from "./components/Navbar";
import AnimalCard from "./components/AnimalCard";
import Favorites from "./pages/Favorites";


function App() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("Tümü");
const [habitatFilter, setHabitatFilter] = useState("Tümü");
const [dietFilter, setDietFilter] = useState("Tümü");
const [apiAnimals, setApiAnimals] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
  const animalNames = [
    "lion",
    "elephant",
    "tiger",
    "penguin",
    "giraffe",
    "panda",
    "polar bear",
    "eagle",
  ];

  async function loadAnimals() {
    try {
      const results = await Promise.all(
        animalNames.map((name) => getAnimal(name))
      );

     
const imageMap = {
  lion:
    "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
  elephant:
    "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46",
  tiger:
    "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
  penguin:
    "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7",
  giraffe:
    "https://images.unsplash.com/photo-1547721064-da6cfb341d50",
  panda:
    "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
  "polar bear":
    "https://images.unsplash.com/photo-1589656966895-2f33e7653819",
  eagle:
    "https://images.unsplash.com/photo-1611689342806-0863700ce1e4",
};

const nameMap = {
  lion: "Aslan",
  elephant: "Fil",
  tiger: "Kaplan",
  penguin: "Penguen",
  giraffe: "Zürafa",
  panda: "Panda",
  "polar bear": "Kutup Ayısı",
  eagle: "Kartal",
};

const classMap = {
  Mammalia: "Memeli",
  Aves: "Kuş",
};

const dietMap = {
  Carnivore: "Etçil",
  Herbivore: "Otçul",
  Omnivore: "Hepçil",
};

const animalsFromApi = animalNames.map((query, index) => {
  const matches = results[index] || [];

  const exactMatch =
    matches.find(
      (animal) =>
        animal.name?.toLowerCase() === query.toLowerCase()
    ) || matches[0];

  if (!exactMatch) {
    return null;
  }

  return {
    name: nameMap[query] || exactMatch.name,
    type:
     
      exactMatch.taxonomy?.class ||
      "Bilinmiyor",
   habitat:
  query === "lion" ||
  query === "elephant" ||
  query === "giraffe"
    ? "Savana"
    : query === "tiger" ||
      query === "panda"
    ? "Orman"
    : query === "penguin" ||
      query === "polar bear"
    ? "Antarktika"
    : query === "eagle"
    ? "Dağ"
    : "Bilinmiyor",
    diet:
      dietMap[exactMatch.characteristics?.diet] ||
      exactMatch.characteristics?.diet ||
      "Bilinmiyor",
    description:
      exactMatch.characteristics?.prey ||
      exactMatch.characteristics?.slogan ||
      "Hayvan hakkında bilgi bulunamadı.",
    image: imageMap[query] || null,
  };
}).filter(Boolean);

setApiAnimals(animalsFromApi);


    } catch (error) {
      console.error("API hatası:", error);
    } finally {
      setLoading(false);
    }
  }

  loadAnimals();
}, []);
    const animals = [
    {
      name: "Aslan",
      type: "Memeli",
      habitat: "Savana",
      diet: "Etçil",
      description: "Güçlü ve sosyal bir büyük kedi türü.",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d"
    },
    {
      name: "Fil",
      type: "Memeli",
      habitat: "Savana",
      diet: "Otçul",
      description: "Dünyanın en büyük kara hayvanlarından biridir.",
      image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46"
    },
    {
      name: "Kaplan",
      type: "Memeli",
      habitat: "Orman",
      diet: "Etçil",
      description: "Çizgili kürküyle tanınan güçlü bir yırtıcıdır.",
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5"
    },
    {
      name: "Penguen",
      type: "Kuş",
      habitat: "Antarktika",
      diet: "Etçil",
      description: "Uçamayan ancak çok iyi yüzebilen bir kuştur.",
      image: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7"
    },
        {
      name: "Zürafa",
      type: "Memeli",
      habitat: "Savana",
      diet: "Otçul",
      description: "Uzun boynu ve kendine özgü desenleriyle tanınan bir hayvandır.",
      image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50"
    },
    {
      name: "Panda",
      type: "Memeli",
      habitat: "Orman",
      diet: "Otçul",
      description: "Bambu ağırlıklı beslenen, sakin yapısıyla tanınan bir memelidir.",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7"
    },
    {
      name: "Kutup Ayısı",
      type: "Memeli",
      habitat: "Antarktika",
      diet: "Etçil",
      description: "Soğuk iklimlere uyum sağlamış güçlü bir kutup yırtıcısıdır.",
      image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819"
    },
    {
      name: "Kartal",
      type: "Kuş",
      habitat: "Dağ",
      diet: "Etçil",
      description: "Keskin görüşü ve güçlü uçuş yeteneğiyle bilinen bir yırtıcı kuştur.",
      image: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4"
    },
  ];
  if (window.location.pathname === "/favorites") {
  return <Favorites />;
}
if (window.location.pathname === "/animal") {
  return <AnimalDetail />;
}
const filteredAnimals = (apiAnimals.length > 0 ? apiAnimals : animals).filter((animal) => {
  const matchesSearch = animal.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesType =
    typeFilter === "Tümü" || animal.type === typeFilter;

  const matchesHabitat =
    habitatFilter === "Tümü" || animal.habitat === habitatFilter;

  const matchesDiet =
    dietFilter === "Tümü" || animal.diet === dietFilter;

  return (
    matchesSearch &&
    matchesType &&
    matchesHabitat &&
    matchesDiet
  );
});
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="hero-label">
              🐾 ANIMAL ENCYCLOPEDIA
            </span>

            <h1>
              Dünyadaki hayvanları
              <br />
              <span>keşfet.</span>
            </h1>

            <p>
              Hayvanlar, türler, habitatlar ve beslenme
              hakkında keşfedebileceğin interaktif ansiklopedi.
            </p>

            <div className="search-box">
              <span>🔍</span>

            <input
  type="text"
  placeholder="Bir hayvan ara..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

              <button>Ara</button>
            </div>
          </div>
        </section>

        <section className="animals-section" id="animals">
          <div className="section-header">
            <div>
              <span className="section-label">
                KEŞFET
              </span>

              <h2>Popüler Hayvanlar</h2>
              <div className="filters">
  <select
    value={typeFilter}
    onChange={(e) => setTypeFilter(e.target.value)}
  >
    <option value="Tümü">Tüm Türler</option>
    <option value="Memeli">Memeli</option>
    <option value="Kuş">Kuş</option>
  </select>

  <select
    value={habitatFilter}
    onChange={(e) => setHabitatFilter(e.target.value)}
  >
    <option value="Tümü">Tüm Habitatlar</option>
    <option value="Savana">Savana</option>
    <option value="Orman">Orman</option>
    <option value="Antarktika">Antarktika</option>
    <option value="Dağ">Dağ</option>
  </select>

  <select
    value={dietFilter}
    onChange={(e) => setDietFilter(e.target.value)}
  >
    <option value="Tümü">Tüm Beslenme</option>
    <option value="Etçil">Etçil</option>
    <option value="Otçul">Otçul</option>
  </select>
</div>
{loading && (
  <p className="loading-text">
    Hayvanlar yükleniyor...
  </p>
)}
              <div className="animals-grid">
 {filteredAnimals.map((animal) => (
    <AnimalCard
      key={animal.name}
      animal={animal}
    />
  ))}
</div>
            </div>

           <button
  className="view-all"
  onClick={() => {
  

  document.getElementById("animals").scrollIntoView({
    behavior: "smooth",
  });
}}
>
  Tümünü Gör →
</button>
          </div>
        </section>
                <section className="info-section">
          <div className="info-content">
            <span className="section-label">
              ANIMAL ENCYCLOPEDIA
            </span>

            <h2>Hayvanlar hakkında daha fazlasını keşfet.</h2>

            <p>
              Farklı hayvan türlerini, yaşadıkları habitatları ve
              beslenme şekillerini keşfet. Favori hayvanlarını
              kaydederek daha sonra tekrar inceleyebilirsin.
            </p>
          </div>
        </section>
        <section className="categories-section">
  <div className="section-header">
    <div>
      <span className="section-label">
        KEŞFET
      </span>

      <h2>Hayvan Kategorileri</h2>
    </div>
  </div>

<div
  className="category-card"
  onClick={() => {
    document.getElementById("animals").scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  <span>🦁</span>
  <h3>Memeliler</h3>
  <p>Aslan, fil, kaplan, panda ve daha fazlası.</p>
</div>

   <div
  className="category-card"
  onClick={() => {
    setTypeFilter("Kuş");

    document.getElementById("animals").scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  <span>🦅</span>
  <h3>Kuşlar</h3>
  <p>Penguen, kartal ve farklı kuş türlerini keşfet.</p>
</div>

    <div
  className="category-card"
  onClick={() => {
    document.getElementById("habitats").scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  <span>🌿</span>
  <h3>Doğa ve Habitat</h3>
  <p>Hayvanların yaşadığı farklı ortamları keşfet.</p>
</div>
    
    </section>
  
                <section className="habitats-section" id="habitats">
          <div className="section-header">
            <div>
              <span className="section-label">
                KEŞFET
              </span>
              <h2>Habitatlar</h2>
            </div>
          </div>

          <div className="habitats-grid">
            <div className="habitat-card">
              <span>🌴</span>
              <h3>Orman</h3>
              <p>Kaplanlar ve birçok farklı canlıya ev sahipliği yapar.</p>
            </div>

            <div className="habitat-card">
              <span>🌾</span>
              <h3>Savana</h3>
              <p>Aslanlar ve filler gibi büyük hayvanların yaşam alanıdır.</p>
            </div>

            <div className="habitat-card">
              <span>❄️</span>
              <h3>Antarktika</h3>
              <p>Penguenler gibi soğuk iklime uyum sağlayan canlıların evidir.</p>
            </div>
          </div>
        </section>
      </main>
            <footer className="footer">
        <div className="footer-logo">
          🐾 Animal Encyclopedia
        </div>

        <p>
          Dünyadaki hayvanları keşfet, öğren ve favorilerine ekle.
        </p>

        <span>
          © 2026 Animal Encyclopedia
        </span>
      </footer>
    </>
  );
}

export default App;