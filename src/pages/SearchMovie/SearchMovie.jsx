import Error from 'components/Error';
import Loader from 'components/Loader';
import TrendingMoviesList from 'components/TrendingMoviesList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'servises/Api';
// import { getMovieByQuery } from 'servises/Api';

const SearchMovie = () => {
  // const searchQuery = 'batman';
  // const fetchMovieByQuery = getMovieByQuery(searchQuery);
  // console.log('fetchMovieByQuery', fetchMovieByQuery);
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
        setSearchMovie(response);
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
      <h2>SearchMovie</h2>
      <form onSubmit={hendleSubmit}>
        <input
          type="text"
          name="searchValue"
          required
          placeholder="Enter movie title"
        />
        <button type="submit">Search</button>
      </form>

      {error !== null && <Error error={error} />}
      {isLoading && <Loader />}
      <TrendingMoviesList trendingMovies={searchMovie} />
    </div>
  );
};

export default SearchMovie;
