import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setMovies } from '../actions/movies';
import { connect } from 'react-redux';
import MoviesList from './MoviesList';
import { setTextFilter } from '../actions/filters';

const TextSearchMoviesPage = (props) => {
  const x = useParams().text;
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_TMDB_URL}search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${x}&include_adult=false`
    )
      .then((resp) => resp.json())
      .then((data) => {
        props.dispatch(setMovies(data.results));
      })
      .catch((err) => console.log(err));
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

export default connect(mapsStateToProps)(TextSearchMoviesPage);
