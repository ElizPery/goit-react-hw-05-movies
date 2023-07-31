import { Link, useLocation } from "react-router-dom";
import { ListItem } from "./MoviesListItem.styled";

export default function MoviesListItem({ id, title }) {
  const location = useLocation();
    return (
      <ListItem>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          {title}
        </Link>
      </ListItem>
    );
}