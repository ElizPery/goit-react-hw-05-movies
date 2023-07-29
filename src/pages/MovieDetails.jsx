import { Link, Outlet } from "react-router-dom";

export const MovieDetails = () => {
    return (
      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">reviews</Link>
        <Outlet/>
      </div>
    );
}