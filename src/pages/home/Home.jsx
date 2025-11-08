import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>
            🎮 Bienvenido a <span>GameTracker</span>
          </h1>
          <p>
            Lleva el control de tu biblioteca gamer, comparte reseñas, califica
            tus juegos favoritos y descubre nuevas aventuras.
          </p>
          <button
            className="cta-button"
            onClick={() => (window.location.href = "/games")}
          >
            Explorar Juegos
          </button>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/31/13/14/controller-2029396_1280.png"
            alt="Game Controller"
          />
        </div>
      </section>

      <section className="features">
        <h2>¿Qué puedes hacer con GameTracker?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Organizar juegos"
            />
            <h3>Organiza tus juegos</h3>
            <p>Guarda tus títulos, plataformas y logros de forma ordenada.</p>
          </div>
          <div className="feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4470/4470316.png"
              alt="Escribir reseñas"
            />
            <h3>Escribe reseñas</h3>
            <p>Comparte tus opiniones, experiencias y calificaciones.</p>
          </div>
          <div className="feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992700.png"
              alt="Descubrir juegos"
            />
            <h3>Descubre nuevos títulos</h3>
            <p>Explora recomendaciones según tus géneros favoritos.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
