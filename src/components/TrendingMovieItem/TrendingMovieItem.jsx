import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BASE_IMAGE_URL } from 'servises/Api';
import { format } from 'date-fns';
import notAvailable from '../../img/affiche_nondisponible.jpg';
import { GridItem } from './TrendingMovieItem.styled';

const TrendingMovieItem = ({ trendingMovie }) => {
  const posterUrl = trendingMovie.poster_path
    ? `${BASE_IMAGE_URL}w300${trendingMovie.poster_path}`
    : notAvailable;

  return (
    <GridItem>
      <Link to={`/movies/${trendingMovie.id}`}>
        <img src={posterUrl} alt={trendingMovie.original_title} />
        <p>
          <strong>{trendingMovie.original_title}</strong>{' '}
        </p>
      </Link>
      <p>{format(Date.parse(trendingMovie.release_date), 'dd MMMM yyyy')}</p>
    </GridItem>
  );
};

TrendingMovieItem.propTypes = {
  trendingMovie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TrendingMovieItem;
