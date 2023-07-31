// import { search } from "api/movies";
import { API } from "api/movies";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesList from "components/MoviesList/MoviesList";

export function Movies () {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchMovies, setSearchMovies] = useState(null);
    const query = searchParams.get('query');
    // const isFirstRender = useRef(true);

    const handleSearchMovies = useCallback(async (query) => {
        if (query === null) return;
        const response = await API.search(query);
        if (response.length === 0) {
        return;
        }

        setSearchMovies(response);
    }, []);

    useEffect(() => {
        // if (isFirstRender) {
        //     isFirstRender.current = false;
        //     return;
        // }

        handleSearchMovies(query)
    }, [query, handleSearchMovies])

    const onSubmit = (e) => {
        e.preventDefault();

        const inputValue = e.target.elements[0].value;

        setSearchParams({ query: inputValue });
        
    }

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Search movies by name" />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
        {searchMovies !== null && <MoviesList movies={searchMovies} />}
      </div>
    );
}