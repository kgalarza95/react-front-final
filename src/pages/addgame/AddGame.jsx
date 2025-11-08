import { useState } from "react";
import { createGame } from "../../services/gameService";

function AddGame() {
  const [formData, setFormData] = useState({
    titulo: "",
    genero: "",
    plataforma: "",
    añoLanzamiento: "",
    desarrollador: "",
    imagenPortada: "",
    descripcion: "",
    completado: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createGame(formData);
      alert("✅ Videojuego agregado exitosamente!");
      setFormData({
        titulo: "",
        genero: "",
        plataforma: "",
        añoLanzamiento: "",
        desarrollador: "",
        imagenPortada: "",
        descripcion: "",
        completado: false,
      });
    } catch (error) {
      console.error("Error al guardar el videojuego:", error);
      alert("Error al guardar el videojuego");
    }
  };

  return (
    <div>
      <h2>Agregar nuevo videojuego</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={formData.titulo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="genero"
          placeholder="Género"
          value={formData.genero}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="plataforma"
          placeholder="Plataforma"
          value={formData.plataforma}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="añoLanzamiento"
          placeholder="Año de lanzamiento"
          value={formData.añoLanzamiento}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="desarrollador"
          placeholder="Desarrollador"
          value={formData.desarrollador}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imagenPortada"
          placeholder="URL de la portada"
          value={formData.imagenPortada}
          onChange={handleChange}
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="completado"
            checked={formData.completado}
            onChange={handleChange}
          />
          Completado
        </label>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default AddGame;
