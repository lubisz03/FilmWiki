import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addMovies, setMovies } from '../actions/movies';
import MoviesList from './MoviesList';
import { setTextFilter, sortByRating } from '../actions/filters';
import { handleStopLoading, handleStartLoading } from '../actions/loading';

const Top100 = (props) => {
  useEffect(() => {
    props.dispatch(handleStartLoading());
    props.dispatch(setMovies([]));
    props.dispatch(sortByRating());
    for (let i = 1; i <= 5; i++) {
      props.getData('movie/top_rated', i);
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
    isLoading: state.loading,
  };
};

export default connect(mapsStateToProps)(Top100);
