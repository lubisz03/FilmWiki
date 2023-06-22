import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setMovies } from '../actions/movies';
import MoviesList from './MoviesList';
import { setTextFilter } from '../actions/filters';
import { handleStopLoading, handleStartLoading } from '../actions/loading';

const Top100 = (props) => {
  useEffect(() => {
    props.dispatch(handleStartLoading());
    fetch(
      `${process.env.REACT_APP_TMDB_URL}movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=5`
    )
      .then((res) => res.json())
      .then((data) => {
        props.dispatch(setMovies(data.results));
        props.dispatch(handleStopLoading());
      })
      .catch((err) => console.log(err));
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
