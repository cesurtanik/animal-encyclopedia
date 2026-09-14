function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🐾 Animal Encyclopedia
      </div>

      <div className="nav-links">
        <a href="/">Ana Sayfa</a>
       <a href="/#animals">Hayvanlar</a>
       <a
  href="/#habitats"
  onClick={(e) => {
    e.preventDefault();

    document.getElementById("habitats").scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  Habitatlar
</a>
        <a href="/favorites">❤️ Favoriler</a>
      </div>
    </nav>
  );
}

export default Navbar;