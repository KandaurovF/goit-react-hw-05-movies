import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TrendingMovieItem = ({ trendingMovie }) => {
  return (
    <li>
      <Link to={`/movies/${trendingMovie.id}`}>
        {trendingMovie.original_title}
      </Link>
    </li>
  );
};

TrendingMovieItem.propTypes = {
  trendingMovie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TrendingMovieItem;
