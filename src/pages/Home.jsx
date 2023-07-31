import { useCallback, useEffect, useState } from "react";
import API from "api/movies";
import MoviesList from "components/MoviesList";
import { Container } from "components/Container/Container.styled";
import SectionTitle from "components/SectionTitle";
import Loader from "components/Loader/Loader";

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
        <SectionTitle title={'Trending today'} />
        {!isLoaded && <Loader />}
        {isLoaded && <MoviesList movies={movies} />}
      </Container>
    );
}