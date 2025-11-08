import { useState } from "react";
import { createReview } from "../../services/reviewService";
import "./AddReview.css";
function AddReview() {
  const [formData, setFormData] = useState({
    juegoId: "",
    puntuacion: 3,
    textoReseña: "",
    horasJugadas: "",
    dificultad: "Normal",
    recomendaria: false,
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
      await createReview(formData);
      alert("Reseña agregada exitosamente!");
      setFormData({
        juegoId: "",
        puntuacion: 3,
        textoReseña: "",
        horasJugadas: "",
        dificultad: "Normal",
        recomendaria: false,
      });
    } catch (error) {
        console.error("Error al guardar la reseña:", error);
      alert("Error al guardar la reseña");
    }
  };

  return (
    <div>
      <h2>Agregar nueva reseña</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="juegoId"
          placeholder="ID del Juego"
          value={formData.juegoId}
          onChange={handleChange}
          required
        />
        <label>
          Puntuación (1-5):
          <input
            type="number"
            name="puntuacion"
            min="1"
            max="5"
            value={formData.puntuacion}
            onChange={handleChange}
            required
          />
        </label>
        <textarea
          name="textoReseña"
          placeholder="Escribe tu reseña..."
          value={formData.textoReseña}
          onChange={handleChange}
        />
        <input
          type="number"
          name="horasJugadas"
          placeholder="Horas jugadas"
          value={formData.horasJugadas}
          onChange={handleChange}
        />
        <select
          name="dificultad"
          value={formData.dificultad}
          onChange={handleChange}
        >
          <option value="Fácil">Fácil</option>
          <option value="Normal">Normal</option>
          <option value="Difícil">Difícil</option>
        </select>
        <label>
          <input
            type="checkbox"
            name="recomendaria"
            checked={formData.recomendaria}
            onChange={handleChange}
          />
          ¿Lo recomendarías?
        </label>
        <button type="submit">Guardar reseña</button>
      </form>
    </div>
  );
}

export default AddReview;
