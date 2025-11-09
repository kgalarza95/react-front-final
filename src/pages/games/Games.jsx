import { useEffect, useState } from "react";
import { getGames } from "../../services/gameService";
import GameCard from "../../components/gamecard/GameCard";

function Games() {
  const [games, setGames] = useState([]);

  const API_URL = "http://localhost:4000/api/games";

  useEffect(() => {
    /* const fetchData = async () => {
      const data = await getGames();
      setGames(data);
    }; */

    fetch(API_URL)
      .then((resp) => resp.json())
      .then((data) => setGames(data));

    //fetchData();
  }, []);

  return (
    <div>
      <h2>🎮 Lista de Videojuegos</h2>
      {games.length === 0 ? (
        <p>No hay juegos registrados aún.</p>
      ) : (
        <div className="games-grid">
          {games.map((game) => (

            <GameCard key={game._id} game={game} />

            
          ))}
        </div>
      )}
    </div>
  );
}

export default Games;
