import { Outlet, useLocation, useParams} from "react-router-dom";
import { Suspense, useCallback, useState } from "react";
import MovieDetailsItem from "components/MovieDetailsItem";
import API from "api/movies";
import { useEffect } from "react";
import Loader from 'components/Loader';
import Notiflix from 'notiflix';
import { BackLink, Border, IdditionalInfoContainer, InfoTitle, AddInfoListItem, AddInfoList, AddInfoLink } from "./MovieDetails.styled";
import { Container } from "components/Container/Container.styled";

export default function MovieDetails (){
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const backLinkHref = location.state?.from ?? '/';

  const handleMovieDetailes = useCallback(async () => {
    if (movieId === undefined) return;

    setIsLoading(true);

    try {
      const response = await API.movieDetails(movieId);

      setMovieInfo(response);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }

  }, [movieId, setMovieInfo]);

  useEffect(() => {
    handleMovieDetailes()
  }, [handleMovieDetailes])

    return (
      <Container>
        {isLoading && <Loader />}
        {isError &&
          Notiflix.Notify.failure(
            'Something went wrong, please try another query'
          )}
        {!isLoading && movieInfo !== null && (
          <div>
            <Border>
              <BackLink to={backLinkHref}>{'\u21FD'} Back</BackLink>
            </Border>
            <MovieDetailsItem details={movieInfo} />
          </div>
        )}
        {!isLoading && movieInfo !== null && (
          <IdditionalInfoContainer>
            <InfoTitle>Additional information</InfoTitle>
            <AddInfoList>
              <AddInfoListItem>
                <AddInfoLink to="cast" state={{ from: location.state.from }}>
                  Cast
                </AddInfoLink>
              </AddInfoListItem>
              <AddInfoListItem>
                <AddInfoLink to="reviews" state={{ from: location.state.from }}>
                  Reviews
                </AddInfoLink>
              </AddInfoListItem>
            </AddInfoList>
          </IdditionalInfoContainer>
        )}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    );
}