import React, { useEffect, useState } from 'react';
import { getTrandingMovies } from 'servises/Api';
import Loader from 'components/Loader';
import Error from 'components/Error';
import MoviesList from 'components/MoviesList';
import { Heading } from './Home.styled';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);

        const trendingMovies = await getTrandingMovies();

        setTrendingMovies(trendingMovies.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <Heading>Trending today</Heading>
      {error !== null && <Error error={error} />}
      {isLoading && <Loader />}
      <MoviesList movies={trendingMovies} />
    </main>
  );
};

export default Home;
