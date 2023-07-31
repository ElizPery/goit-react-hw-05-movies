import MoviesListItem from "components/MoviesListItem";
import { MoviesListStyle } from "./MoviesList.styled";

export default function MoviesList({ movies }) {
    return (
        <MoviesListStyle>
            {movies.map(({id, title}) => {
                return (
                    <MoviesListItem
                        key={id}
                        id={id}
                        title={title}
                    />
                )
            })}
        </MoviesListStyle>
    )
}