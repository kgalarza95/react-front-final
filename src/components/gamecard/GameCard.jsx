import "./GameCard.css";

function GameCard({ game }) {
  return (
    <div className="game-card">
      <img
        className="game-cover"
        src={
          game.imagenPortada ||
          "https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
        }
        alt={game.titulo}
      />
      <div className="game-details">
        <h3>{game.titulo}</h3>
        <p className="genre">{game.genero}</p>
        <p>
          <strong>Plataforma:</strong> {game.plataforma}
        </p>
        <p>
          <strong>Año:</strong> {game.añoLanzamiento}
        </p>
        <p>
          <strong>Desarrollador:</strong> {game.desarrollador}
        </p>
        <p className="description">{game.descripcion}</p>
        <div className="status">
          {game.completado ? (
            <span className="badge completed">✅ Completado</span>
          ) : (
            <span className="badge pending">🎯 Pendiente</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameCard;
