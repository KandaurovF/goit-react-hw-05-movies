import React from 'react';
import PropTypes from 'prop-types';
import TrendingMovieItem from 'components/TrendingMovieItem';
import { GridContainer } from './TrendingMoviesList.styled';

const TrendingMoviesList = ({ trendingMovies }) => {
  const showTrendingMovies =
    Array.isArray(trendingMovies) && trendingMovies.length > 0;

  return (
    <GridContainer>
      {showTrendingMovies &&
        trendingMovies.map(trendingMovie => (
          <TrendingMovieItem
            key={trendingMovie.id}
            trendingMovie={trendingMovie}
          />
        ))}
    </GridContainer>
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
