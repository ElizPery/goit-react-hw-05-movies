import API from "api/movies";
import { useCallback} from "react";
import { useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import MoviesList from "components/MoviesList";
import { SearchMovieBtnLabel, SearchMovieButton, SearchMovieForm, SearchMovieInput } from "./Movies.styled";
import { GrSearch } from 'react-icons/gr';
import Notiflix from "notiflix";
import Loader from "components/Loader/Loader";

export default function Movies () {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchMovies, setSearchMovies] = useState(null);
    const query = searchParams.get('query');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchMovies = useCallback(async (query) => {
      if (query === null) return;

      setIsLoading(true);

      try {
        const response = await API.search(query);
        if (response.length === 0) {
          setSearchMovies([]);
          return Notiflix.Notify.failure(`Nothing found by name ${query}`);
        }

        setSearchMovies(response);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }, []);

    useEffect(() => {
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
            <SearchMovieBtnLabel>Search</SearchMovieBtnLabel>
            <GrSearch />
          </SearchMovieButton>
        </SearchMovieForm>
        {isLoading && <Loader />}
        {isError &&
          Notiflix.Notify.failure(
            'Something went wrong, please try another query'
          )}
        {searchMovies !== null && !isLoading && <MoviesList movies={searchMovies} />}
      </div>
    );
}