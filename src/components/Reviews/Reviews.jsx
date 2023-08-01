import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import API from "api/movies";
import Loader from "components/Loader/Loader";
import Notiflix from "notiflix";
import { ReviewItem, ReviewName, ReviewsContainer, ReviewsList, NoReviewsItem, NoReviews } from "./Reviews.style";

const Reviews = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    

    const handleReviewsData = useCallback(async () => {
      if (movieId === undefined) return;

      setIsLoading(true);

      try {
        const response = await API.reviews(movieId);
        setMovieReviews(response);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }, [movieId]);

    useEffect(() => {
      handleReviewsData();
    }, [handleReviewsData]);

  return (
    <ReviewsContainer>
      {isLoading && <Loader />}
      {isError &&
        Notiflix.Notify.failure(
          'Something went wrong, please try another query'
        )}
      {!isLoading && (
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
        </ReviewsList>
      )}
    </ReviewsContainer>
  );
}

export default Reviews;
