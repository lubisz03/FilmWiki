import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setTextFilter } from '../actions/filters';
import { connect } from 'react-redux';
import { setMovies } from '../actions/movies';
import { handleStartLoading, handleStopLoading } from '../actions/loading';
import MoviesList from './MoviesList';

const GenrePage = (props) => {
  const x = useParams().id;
  useEffect(() => {
    props.dispatch(handleStartLoading());
    fetch(
      `${process.env.REACT_APP_TMDB_URL}discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=${x}&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        props.dispatch(setMovies(data.results));
        props.dispatch(handleStopLoading());
      })
      .catch((err) => console.log(err));
    props.dispatch(setTextFilter(''));
  }, [x]);

  return <MoviesList />;
};

export default connect()(GenrePage);
