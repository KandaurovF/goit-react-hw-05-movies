import React from 'react';
import PropTypes from 'prop-types';
import { MovieInfoWrapper } from 'pages/MovieDetail/MovieDetails.styled';
import { BASE_IMAGE_URL } from 'servises/Api';
import notAvailable from '../../img/affiche_nondisponible.jpg';
import { format } from 'date-fns';

const MovieInfo = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `${BASE_IMAGE_URL}w300${movie.poster_path}`
    : notAvailable;

  return (
    <MovieInfoWrapper>
      <h2>
        {movie.original_title} ({format(Date.parse(movie.release_date), 'yyyy')}
        )
      </h2>
      <img src={posterUrl} alt={movie.original_title} />

      <p>{movie.vote_average}</p>
      <p>
        <strong>Ovrerview</strong>
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
    </MovieInfoWrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
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
