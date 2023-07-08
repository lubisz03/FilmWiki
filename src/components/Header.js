import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { closeAll, toggleNav } from '../actions/dropdown';
import DropdownAccount from './DropdownAccount';
import TextSearch from './TextSearch';
import DropdownGenres from './DropdownGenres';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='content-container header-container'>
        <Link
          to='/'
          onClick={() => {
            props.dispatch(closeAll());
          }}>
          <h1>
            Film<span>Wiki</span>
          </h1>
        </Link>
        <div className='dropdown-menu'>
          <button
            className='dropdown-button dropdown-header'
            onClick={() => props.dispatch(toggleNav())}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          {props.isNav && (
            <ul className='open'>
              <Link to='/'>
                <li onClick={() => props.dispatch(toggleNav())}>Trending</li>
              </Link>
              <li>
                <DropdownGenres />
              </li>
              <Link to='/top100'>
                <li onClick={() => props.dispatch(toggleNav())}>TOP 100</li>
              </Link>
              <Link to='/upcoming'>
                <li onClick={() => props.dispatch(toggleNav())}>Upcoming</li>
              </Link>
              <li>
                <TextSearch />
              </li>
              <li>
                <DropdownAccount />
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    genres: state.genres,
    isAuthenticated: state.auth.uid,
    isNav: state.dropdown.nav,
  };
};

export default connect(mapStateToProps)(Header);
