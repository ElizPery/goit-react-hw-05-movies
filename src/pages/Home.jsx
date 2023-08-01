import { useCallback, useEffect, useState } from "react";
import API from "api/movies";
import MoviesList from "components/MoviesList";
import { Container } from "components/Container/Container.styled";
import SectionTitle from "components/SectionTitle";
import Loader from "components/Loader/Loader";
import Notiflix from "notiflix";

export default function Home() {
  const [movies, setMovies] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchPopular = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await API.popular();
      if (response.length === 0) {
        return;
      }

      setMovies(response);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [])

   useEffect(() => {
     handleFetchPopular();
   }, [handleFetchPopular]);

    return (
      <Container>
        <SectionTitle title={'Trending today'} />
        {isLoading && <Loader />}
        {isError &&
          Notiflix.Notify.failure(
            'Something went wrong, please try another query'
          )}
        {!isLoading && movies !== null && <MoviesList movies={movies} />}
      </Container>
    );
}