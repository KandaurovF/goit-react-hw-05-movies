import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from 'components/MovieItem';
import { GridContainer } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const showMovies = Array.isArray(movies) && movies.length > 0;

  return (
    <GridContainer>
      {showMovies &&
        movies.map(movie => <MovieItem key={movie.id} movie={movie} />)}
    </GridContainer>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default MoviesList;
