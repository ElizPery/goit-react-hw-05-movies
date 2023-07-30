import MoviesListItem from "components/MoviesListItem/MoviesListItem"

export default function MoviesList({ movies }) {
    return (
        <ul>
            {movies.map(({id, title}) => {
                return (
                    <MoviesListItem
                        key={id}
                        id={id}
                        title={title}
                    />
                )
            })}
        </ul>
    )
}