import { Link } from "react-router-dom";


export default function MoviesListItem({id, title}) {
    return (
        <li>
            <Link to={`/movies/${id}`} >
                <p>{title}</p>
            </Link>
        </li>
    )
}