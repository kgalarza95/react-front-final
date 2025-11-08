import { useState } from "react";
import { createGame } from "../../services/gameService";
import "./AddGame.css";
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
      alert("Videojuego agregado exitosamente!");
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
        <div className="form-group">
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label>Título</label>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label>Género</label>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="plataforma"
            value={formData.plataforma}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label>Plataforma</label>
        </div>

        <div className="form-group">
          <input
            type="number"
            name="añoLanzamiento"
            value={formData.añoLanzamiento}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label>Año de lanzamiento</label>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="desarrollador"
            value={formData.desarrollador}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label>Desarrollador</label>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="imagenPortada"
            value={formData.imagenPortada}
            onChange={handleChange}
            placeholder=" "
          />
          <label>URL de la portada</label>
        </div>

        <div className="form-group">
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder=" "
          />
          <label>Descripción</label>
        </div>

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
