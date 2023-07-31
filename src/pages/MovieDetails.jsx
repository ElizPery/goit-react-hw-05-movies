import { Link, Outlet, useLocation, useParams} from "react-router-dom";
import { useCallback, useState } from "react";
import MovieDetailsItem from "components/MovieDetailsItem";
import API from "api/movies";
import { useEffect } from "react";
import Loader from 'components/Loader';

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
      <div>
        {!isLoaded && <Loader />}
        {isLoaded && (
          <div>
            <Link to={backLinkHref}>Back</Link>
            <MovieDetailsItem details={movieInfo} />
          </div>
        )}
        {isLoaded && (
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
        )}
        <Outlet />
      </div>
    );
}