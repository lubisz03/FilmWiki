import React, { useEffect } from 'react';
import { setTextFilter, sortByAlphabet } from '../actions/filters';
import { connect } from 'react-redux';
import MoviesList from './MoviesList';
import { handleStartLoading, handleStopLoading } from '../actions/loading';
import { setMovies } from '../actions/movies';

const WatchedPage = (props) => {
  useEffect(() => {
    props.dispatch(handleStartLoading());
    props.dispatch(sortByAlphabet());
    props.dispatch(setMovies(props.watched));
    props.dispatch(handleStopLoading());
    props.dispatch(setTextFilter(''));
  }, [props.watched, props.wishlist]);

  if (props.isLoading) {
    return <LoadingPage />;
  } else {
    return <MoviesList />;
  }
};

const mapsStateToProps = (state) => {
  return {
    isLoading: state.loading,
    watched: state.watchedMovies,
    wishlist: state.wishlistedMovies,
  };
};

export default connect(mapsStateToProps)(WatchedPage);
