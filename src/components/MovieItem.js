import React from 'react';
import { connect } from 'react-redux';
import { addWatchedMovie } from '../actions/watchedMovies';

const MovieItem = (props) => {
  return (
    <div className='content-container movie-item'>
      <img
        src={`${process.env.REACT_APP_TMDB_IMG_URL}${props.movie.poster_path}`}
      />
      <p>{props.movie.title}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.uid,
});

export default connect(mapStateToProps)(MovieItem);

{
  /* {props.isAuthenticated && (
        <div className='content-container'>
          <button className='button'>Add to Wishlist</button>
          <button className='button'>Add to Watched</button>
        </div>
      )} */
}
