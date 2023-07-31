
import { useCallback, useEffect, useState } from "react";
import { API } from "api/movies";
import MoviesList from "components/MoviesList/MoviesList";
import Loader from "components/Loader";
import { Container } from "components/Container/Container.styled";
import SectionTitle from "components/SectionTitle/SectionTitle";

export default function Home() {
  const [movies, setMovies] = useState(null);
  const isLoaded = movies !== null;

  const handleFetchPopular = useCallback(async () => {
    const response = await API.popular();
     if (response.length === 0) {
       return;
    }
    
    setMovies(response);
  }, [])

   useEffect(() => {
     handleFetchPopular();
   }, [handleFetchPopular]);

    return (
      <Container>
        {!isLoaded && <Loader />}
        {isLoaded && <SectionTitle title={'Trending today'} />}
        {isLoaded && <MoviesList movies={movies} />}
      </Container>
    );
}