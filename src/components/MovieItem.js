import React from 'react';
import { connect } from 'react-redux';
import { startOpenModal } from '../actions/modal';

const MovieItem = (props) => {
  return (
    <div
      className='content-container movie-item'
      onClick={() => props.dispatch(startOpenModal(props.movie))}>
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
