
import { useCallback, useEffect, useState } from "react";
import { popular } from "api/movies";
import MoviesList from "components/MoviesList/MoviesList";

export default function Home() {
  const [movies, setMovies] = useState(null);
  const isLoaded = movies !== null;

  const handleFetchPopular = useCallback(async () => {
    const response = await popular();
     if (response.length === 0) {
       return;
    }
    
    setMovies(response);
  }, [])

   useEffect(() => {
     handleFetchPopular();
   }, [handleFetchPopular]);

    return (
      <div>
        {!isLoaded && <div>Loading...</div>}
        {isLoaded && <MoviesList movies={movies} />}
      </div>
    );
}