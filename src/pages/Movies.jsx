import API from "api/movies";
import { useCallback } from "react";
import { useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import MoviesList from "components/MoviesList";
import { SearchMovieBtnLabel, SearchMovieButton, SearchMovieForm, SearchMovieInput } from "./Movies.styled";
import { GrSearch } from 'react-icons/gr';
import Notiflix from "notiflix";

export default function Movies () {
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

    
      if (inputValue.trim() === '') {
        return Notiflix.Notify.warning('Please enter your request');
      }

      setSearchParams({ query: inputValue });
        
    }

    return (
      <div>
        <SearchMovieForm onSubmit={onSubmit}>
          <SearchMovieInput type="text" placeholder="Search movies by name" />
          <SearchMovieButton type="submit">
            <SearchMovieBtnLabel >Search</SearchMovieBtnLabel>
            <GrSearch/>
          </SearchMovieButton>
        </SearchMovieForm>
        {searchMovies !== null && <MoviesList movies={searchMovies} />}
      </div>
    );
}