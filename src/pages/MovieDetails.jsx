import { Link, Outlet, useParams} from "react-router-dom";
import { useCallback, useState } from "react";
import MovieDetailsItem from "components/MovieDetailsItem/MovieDetailsItem";
import { movieDetails } from "api/movies";
import { useEffect } from "react";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  const handleMovieDetailes = useCallback(async () => {
    if (movieId === undefined) return;
    const response = await movieDetails(movieId);

    setMovieInfo(response);
  }, [movieId, setMovieInfo]);

  useEffect(() => {
    handleMovieDetailes()
  }, [handleMovieDetailes])

    return (
      <div>
        {movieInfo !== null  && <MovieDetailsItem details={movieInfo}/>}
        <Link to="cast">Cast</Link>
        <Link to="reviews">reviews</Link>
        <Outlet/>
      </div>
    );
}