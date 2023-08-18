import React from 'react';
import PropTypes from 'prop-types';
import { BASE_IMAGE_URL } from 'servises/Api';
import notAvailable from '../../img/affiche_nondisponible.jpg';
import { format } from 'date-fns';

import { Wrapper } from './MovieInfo.styled';
import { MovieInfoWrapper } from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `${BASE_IMAGE_URL}w300${movie.poster_path}`
    : notAvailable;

  const backdropUrl = movie.backdrop_path
    ? `${BASE_IMAGE_URL}w1280${movie.backdrop_path}`
    : null;

  return (
    <MovieInfoWrapper backdropUrl={backdropUrl}>
      <h2>
        {movie.original_title} ({format(Date.parse(movie.release_date), 'yyyy')}
        )
      </h2>
      <Wrapper>
        <img src={posterUrl} alt={movie.original_title} />
        <div>
          <p>
            <b>Rating: {movie.vote_average}</b>
          </p>
          <p>
            <i>{movie.tagline}</i>
          </p>
          <p>
            <strong>Overview</strong>
          </p>
          <p>{movie.overview}</p>
          <p>
            <strong>Genres</strong>
          </p>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p>
            Relise date:{' '}
            {format(Date.parse(movie.release_date), 'dd MMMM yyyy')}
          </p>
          <p>Duration: {movie.runtime} min</p>
        </div>
      </Wrapper>
    </MovieInfoWrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    runtime: PropTypes.number,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default MovieInfo;
