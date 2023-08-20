import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'servises/Api';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';
import Error from 'components/Error';
import {
  PageWrapper,
  SearchbarWrapper,
  SearchForm,
  SearchFormInput,
} from './SearchMovie.styled';
import Button from 'components/Button';

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = searchParams.get('query');

  useEffect(() => {
    if (!queryString) return;

    const fetchMoviesByQuery = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieByQuery(queryString);
        setSearchMovie(response.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesByQuery();
  }, [queryString]);

  const hendleSubmit = e => {
    e.preventDefault();

    const searchValue = e.target.elements.searchValue.value;
    setSearchParams({
      query: searchValue,
    });
  };

  return (
    <PageWrapper>
      <SearchbarWrapper>
        <h3>Welcome.</h3>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <SearchForm onSubmit={hendleSubmit}>
          <SearchFormInput
            type="text"
            name="searchValue"
            autoComplete="off"
            required
            placeholder="Search for a movie..."
          />
          <Button type="submit">Search</Button>
        </SearchForm>
      </SearchbarWrapper>

      {error !== null && <Error error={error} />}
      {isLoading && <Loader />}
      <MoviesList movies={searchMovie} />
    </PageWrapper>
  );
};

export default SearchMovie;
