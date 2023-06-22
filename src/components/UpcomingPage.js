import React, { useEffect } from 'react';
import { setTextFilter } from '../actions/filters';
import { connect } from 'react-redux';
import { setMovies } from '../actions/movies';
import MoviesList from './MoviesList';
import { handleStartLoading, handleStopLoading } from '../actions/loading';

const UpcomingPage = (props) => {
  useEffect(() => {
    props.dispatch(handleStartLoading());
    fetch(
      `${process.env.REACT_APP_TMDB_URL}movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
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

export default connect(mapsStateToProps)(UpcomingPage);
