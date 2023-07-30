import { Link } from "react-router-dom";
import { ListItem } from "./MoviesListItem.styled";

export default function MoviesListItem({id, title}) {
    return (
      <ListItem>
        <Link to={`/movies/${id}`}>{title}
        </Link>
      </ListItem>
    );
}