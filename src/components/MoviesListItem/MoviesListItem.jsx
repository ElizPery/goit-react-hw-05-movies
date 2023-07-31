import { Link, useLocation } from "react-router-dom";
import { PosterPhoto, ListItem, ListTitle } from "./MoviesListItem.styled";

export default function MoviesListItem({ id, title, poster }) {
  const location = useLocation();
    return (
      <ListItem>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <PosterPhoto src={poster} alt={title} />
          <ListTitle>{title}</ListTitle>
        </Link>
      </ListItem>
    );
}