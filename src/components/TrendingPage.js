import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LoadingPage from './LoadingPage';
import { setMovies } from '../actions/movies';
import { setTextFilter, sortByAlphabet } from '../actions/filters';
import { handleStartLoading, handleStopLoading } from '../actions/loading';
import MoviesList from './MoviesList';

const TrendingPage = (props) => {
  useEffect(() => {
    props.dispatch(handleStartLoading());
    props.dispatch(setMovies([]));
    props.dispatch(sortByAlphabet());
    for (let i = 1; i <= 3; i++) {
      props.getData('trending/movie/week', i);
    }
    props.dispatch(handleStopLoading());
    props.dispatch(setTextFilter(''));
  }, []);

  if (props.isLoading) {
    return <LoadingPage />;
  } else {
    return <MoviesList />;
  }
};

const mapsStateToProps = (state) => {
  return {
    movies: state.movies,
    isLoading: state.loading,
  };
};

export default connect(mapsStateToProps)(TrendingPage);
