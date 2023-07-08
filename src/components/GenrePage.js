import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setTextFilter, sortByAlphabet } from '../actions/filters';
import { connect } from 'react-redux';
import { addMovies, setMovies } from '../actions/movies';
import { handleStartLoading, handleStopLoading } from '../actions/loading';
import MoviesList from './MoviesList';

const GenrePage = (props) => {
  const x = useParams().id;
  useEffect(() => {
    props.dispatch(handleStartLoading());
    props.dispatch(setMovies([]));
    props.dispatch(sortByAlphabet());
    for (let i = 1; i <= 3; i++) {
      props.getData(
        'discover/movie',
        i,
        `&with_genres=${x}&include_adult=false`
      );
    }
    props.dispatch(handleStopLoading());
    props.dispatch(setTextFilter(''));
  }, [x]);

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

export default connect(mapsStateToProps)(GenrePage);
