import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>🎮 GameTracker</h1>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/games">Videojuegos</Link>
        </li>
        <li>
          <Link to="/add-game">Agregar Juego</Link>
        </li>
        <li>
          <Link to="/reviews">Reseñas</Link>
        </li>
        <li>
          <Link to="/add-review">Agregar Reseñas</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
