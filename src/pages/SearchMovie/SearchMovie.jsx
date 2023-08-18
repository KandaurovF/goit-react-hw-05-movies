import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'servises/Api';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';
import Error from 'components/Error';

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
    <div>
      <h2>Search movie</h2>
      <h3>
        Welcome. Millions of movies, TV shows and people to discover. Explore
        now.
      </h3>
      <form onSubmit={hendleSubmit}>
        <input
          type="text"
          name="searchValue"
          autoComplete="off"
          required
          placeholder="Enter movie title"
        />
        <button type="submit">Search</button>
      </form>

      {error !== null && <Error error={error} />}
      {isLoading && <Loader />}
      <MoviesList movies={searchMovie} />
    </div>
  );
};

export default SearchMovie;
