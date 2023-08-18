import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'servises/Api';
import Loader from 'components/Loader';
import Error from 'components/Error';
import MovieInfo from 'components/MovieInfo';
import AdditionalInfo from 'components/AdditionalInfo';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovie = async () => {
      if (!movieId) return;

      try {
        setIsLoading(true);

        const movieInfo = await getMovieById(movieId);

        setMovie(movieInfo);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <main>
      {isLoading && <Loader />}
      {error !== null && <Error error={error} />}
      <Link to={backLinkHref.current}>Go back</Link>
      {movie !== null && <MovieInfo movie={movie} />}
      <AdditionalInfo />
    </main>
  );
};

export default MovieDetail;
