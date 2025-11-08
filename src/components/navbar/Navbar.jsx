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
          <Link to="/add-game">Agregar</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
