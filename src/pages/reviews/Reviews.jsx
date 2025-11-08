import { useEffect, useState } from "react";
import { getReviews } from "../../services/reviewService";
import ReviewCard from "../../components/reviewcard/ReviewCard";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getReviews();
      console.log(data);
      setReviews(data);
    };
    fetchReviews();
  }, []);

  return (
    <div>
      <h2>⭐ Reseñas de Videojuegos</h2>
      {reviews.length === 0 ? (
        <p>No hay reseñas registradas aún.</p>
      ) : (
        <div className="reviews-grid">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Reviews;
