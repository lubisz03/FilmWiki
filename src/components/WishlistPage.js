import React, { useEffect } from 'react';
import { setTextFilter, sortByAlphabet } from '../actions/filters';
import { connect } from 'react-redux';
import MoviesList from './MoviesList';
import { setMovies } from '../actions/movies';
import { handleStartLoading, handleStopLoading } from '../actions/loading';

const WishlistPage = (props) => {
  useEffect(() => {
    props.dispatch(handleStartLoading());
    props.dispatch(sortByAlphabet());
    props.dispatch(setMovies(props.wishlist));
    props.dispatch(handleStopLoading());
    props.dispatch(setTextFilter(''));
  }, [props.watched, props.wishlist]);

  if (props.isLoading) {
    return <LoadingPage />;
  } else {
    if (props.wishlist.length) {
      return <MoviesList />;
    } else {
      return <h1 className='no-movies'>no movies to display...</h1>;
    }
  }
};

const mapsStateToProps = (state) => {
  return {
    isLoading: state.loading,
    watched: state.movies.watchedMovies,
    wishlist: state.movies.wishlistedMovies,
  };
};

export default connect(mapsStateToProps)(WishlistPage);
