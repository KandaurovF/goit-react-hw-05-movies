import React from 'react';
import PropTypes from 'prop-types';
import TrendingMovieItem from 'components/TrendingMovieItem';

const TrendingMoviesList = ({ trendingMovies }) => {
  const showTrendingMovies =
    Array.isArray(trendingMovies) && trendingMovies.length > 0;

  return (
    <ul>
      {showTrendingMovies &&
        trendingMovies.map(trendingMovie => (
          <TrendingMovieItem
            key={trendingMovie.id}
            trendingMovie={trendingMovie}
          />
        ))}
    </ul>
  );
};

TrendingMoviesList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default TrendingMoviesList;
