import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { API } from "api/movies";

export const Reviews = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState(null);

    const handleReviewsData = useCallback(async () => {
      if (movieId === undefined) return;
        const response = await API.reviews(movieId);

      setMovieReviews(response);
    }, [movieId]);

    useEffect(() => {
      handleReviewsData();
    }, [handleReviewsData]);

    return (
      <ul>
        {movieReviews !== null &&
          movieReviews.map(review => {
            return (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        {movieReviews !== null && movieReviews.length === 0 && <li><p>No reviews</p></li>}
      </ul>
    );
}
