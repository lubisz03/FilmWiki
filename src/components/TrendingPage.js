import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LoadingPage from './LoadingPage';
import { setMovies } from '../actions/movies';
import { setTextFilter } from '../actions/filters';
import { handleStartLoading, handleStopLoading } from '../actions/loading';
import { Spinner } from '@chakra-ui/react';
import MoviesList from './MoviesList';

const TrendingPage = (props) => {
  useEffect(() => {
    props.dispatch(handleStartLoading());
    fetch(
      `${process.env.REACT_APP_TMDB_URL}trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
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

export default connect(mapsStateToProps)(TrendingPage);
