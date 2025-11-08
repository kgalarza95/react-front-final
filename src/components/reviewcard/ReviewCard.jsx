import "./ReviewCard.css";

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <h3>Juego ID: {review.juegoId._id}</h3>
      <p>⭐ {review.puntuacion} / 5</p>
      <p>
        <strong>Dificultad:</strong> {review.dificultad}
      </p>
      <p>
        <strong>Horas jugadas:</strong> {review.horasJugadas}
      </p>
      <p>{review.textoReseña}</p>
      <small>
        {review.recomendaria ? "✅ Lo recomendaría" : "❌ No lo recomendaría"}
      </small>
    </div>
  );
}

export default ReviewCard;
