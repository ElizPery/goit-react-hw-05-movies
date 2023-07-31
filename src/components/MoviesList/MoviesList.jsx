import MoviesListItem from "components/MoviesListItem";
import { MoviesListStyle } from "./MoviesList.styled";
import PropTypes from 'prop-types';

export default function MoviesList({ movies }) {
    return (
        <MoviesListStyle>
            {movies.map(({id, title, poster}) => {
                return (
                    <MoviesListItem
                        key={id}
                        id={id}
                        title={title}
                        poster={poster}
                    />
                )
            })}
        </MoviesListStyle>
    )
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired
    })
  ).isRequired,
};