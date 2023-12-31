import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'servises/Api';
import Loader from 'components/Loader';
import Error from 'components/Error';
import MovieInfo from 'components/MovieInfo';
import AdditionalInfo from 'components/AdditionalInfo';
import Button from 'components/Button';
import { StyledLink, Wrapper } from './MovieDetail.styled';

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
    <Wrapper>
      {isLoading && <Loader />}
      {error !== null && <Error error={error} />}
      <StyledLink to={backLinkHref.current}>
        <Button type="button">Go back</Button>
      </StyledLink>
      {movie !== null && <MovieInfo movie={movie} />}
      <AdditionalInfo />
    </Wrapper>
  );
};

export default MovieDetail;
