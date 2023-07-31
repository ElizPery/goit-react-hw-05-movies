import { useEffect, useState, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import API from "api/movies";
import Loader from "components/Loader/Loader";
import { NoReviews, NoReviewsItem, ReviewItem, ReviewName, ReviewsContainer, ReviewsList } from "./Reviews.style";

const Reviews = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState(null);
    const isLoading = useRef(false);

    const handleReviewsData = useCallback(async () => {
      if (movieId === undefined) return;
      isLoading.current = true;
      const response = await API.reviews(movieId);
      isLoading.current = false

      setMovieReviews(response);
    }, [movieId]);

    useEffect(() => {
      handleReviewsData();
    }, [handleReviewsData]);

  return (
    <ReviewsContainer>
      {isLoading.current && <Loader />}
      {!isLoading.current &&
        <ReviewsList>
        {movieReviews !== null &&
          movieReviews.map(review => {
            return (
              <ReviewItem key={review.id}>
                <ReviewName>{review.author}</ReviewName>
                <p>{review.content}</p>
              </ReviewItem>
            );
          })}
        {movieReviews !== null && movieReviews.length === 0 && (
          <NoReviewsItem>
            <NoReviews>Sorry, no reviews found</NoReviews>
          </NoReviewsItem>
        )}
      </ReviewsList>}
    </ReviewsContainer>
  );
}

export default Reviews;
