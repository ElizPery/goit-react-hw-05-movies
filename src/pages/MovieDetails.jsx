import { Outlet, useLocation, useParams} from "react-router-dom";
import { Suspense, useCallback, useState } from "react";
import MovieDetailsItem from "components/MovieDetailsItem";
import API from "api/movies";
import { useEffect } from "react";
import Loader from 'components/Loader';
import { BackLink, Border, IdditionalInfoContainer, InfoTitle, AddInfoListItem, AddInfoList, AddInfoLink } from "./MovieDetails.styled";
import { Container } from "components/Container/Container.styled";

export default function MovieDetails (){
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const isLoaded = movieInfo !== null;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const handleMovieDetailes = useCallback(async () => {
    if (movieId === undefined) return;
    const response = await API.movieDetails(movieId);

    setMovieInfo(response);
  }, [movieId, setMovieInfo]);

  useEffect(() => {
    handleMovieDetailes()
  }, [handleMovieDetailes])

    return (
      <Container>
        {!isLoaded && <Loader />}
        {isLoaded && (
          <div>
            <Border>
              <BackLink to={backLinkHref}>{'\u21FD'} Back</BackLink>
            </Border>
            <MovieDetailsItem details={movieInfo} />
          </div>
        )}
        {isLoaded && (
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
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </Container>
    );
}