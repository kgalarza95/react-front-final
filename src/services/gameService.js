const API_URL = "http://localhost:4000/api/games";

export const getGames = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Error al obtener los juegos");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const createGame = async (gameData) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(gameData),
        });
        if (!response.ok) throw new Error("Error al crear el juego");
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
