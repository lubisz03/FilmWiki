import React, { useEffect } from 'react';
import { setTextFilter, sortByAlphabet } from '../actions/filters';
import { connect } from 'react-redux';
import { setMovies } from '../actions/movies';
import MoviesList from './MoviesList';
import { handleStartLoading, handleStopLoading } from '../actions/loading';

const UpcomingPage = (props) => {
  useEffect(() => {
    props.dispatch(handleStartLoading());
    props.dispatch(setMovies([]));
    props.dispatch(sortByAlphabet());
    for (let i = 1; i <= 3; i++) {
      props.getData('movie/upcoming', i);
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

export default connect(mapsStateToProps)(UpcomingPage);
