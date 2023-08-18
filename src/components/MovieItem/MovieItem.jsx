import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { BASE_IMAGE_URL } from 'servises/Api';
import { format } from 'date-fns';
import notAvailable from '../../img/affiche_nondisponible.jpg';
import { GridItem } from './MovieItem.styled';

const MovieItem = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `${BASE_IMAGE_URL}w300${movie.poster_path}`
    : notAvailable;

  const releaseDate = movie.release_date ? (
    <p>{format(Date.parse(movie.release_date), 'dd MMMM yyyy')}</p>
  ) : null;

  const location = useLocation();

  return (
    <GridItem>
      <Link
        key={movie.id}
        state={{ from: location }}
        to={`/movies/${movie.id}`}
      >
        <img src={posterUrl} alt={movie.original_title} />
        <p>
          <strong>{movie.original_title}</strong>
        </p>
      </Link>
      {releaseDate}
      {/* <p>{format(Date.parse(movie.release_date), 'dd MMMM yyyy')}</p> */}
    </GridItem>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieItem;
