import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { startLogin, startLogout } from '../actions/auth';
import { setGenres } from '../actions/genres';
import { setGenre } from '../actions/filters';
import { toggleGenres, toggleNav } from '../actions/dropdown';

const DropdownGenre = (props) => {
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_TMDB_URL}genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => props.dispatch(setGenres(data.genres)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='dropdown-menu'>
      <button
        className='dropdown-button'
        onClick={() => props.dispatch(toggleGenres())}>
        Genres
      </button>
      {props.isGenres && (
        <ul className='open'>
          {props.genres.map((genre) => (
            <Link key={genre.id} to={`/genre/${genre.id}`}>
              <li
                backgroundColor='black'
                onClick={() => {
                  props.dispatch(setGenre(genre.name));
                  props.dispatch(toggleNav());
                }}>
                {genre.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    genres: state.genres,
    isGenres: state.dropdown.genres,
  };
};

export default connect(mapStateToProps)(DropdownGenre);
