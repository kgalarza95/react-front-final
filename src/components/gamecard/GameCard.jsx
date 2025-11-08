function GameCard({ game }) {
  return (
    <div className="game-card">
      <img
        src={game.imagenPortada || "https://via.placeholder.com/150"}
        alt={game.titulo}
        width="150"
      />
      <h3>{game.titulo}</h3>
      <p>
        {game.genero} | {game.plataforma}
      </p>
      <small>{game.añoLanzamiento}</small>
    </div>
  );
}

export default GameCard;
