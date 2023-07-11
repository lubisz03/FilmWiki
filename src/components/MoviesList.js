import React from 'react';
import selectMovies from '../selectors/movies';
import LoadingPage from './LoadingPage';
import MovieItem from './MovieItem';
import { connect } from 'react-redux';

const MoviesList = (props) => {
  return (
    <div className='content-container movies-list'>
      {props.movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

const mapsStateToProps = (state) => {
  return {
    movies: selectMovies(state.movies.movies, state.filters),
  };
};

export default connect(mapsStateToProps)(MoviesList);
