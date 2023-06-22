import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { startLogin, startLogout } from '../actions/auth';
import { toggleAccount, toggleNav } from '../actions/dropdown';

const DropdownAccount = (props) => {
  if (props.isAuthenticated) {
    return (
      <div className='dropdown-menu'>
        <button
          className='dropdown-button'
          onClick={() => props.dispatch(toggleAccount())}>
          My Account&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faUser} />
        </button>
        {props.isAccount && (
          <ul className='open'>
            <Link to='/wishlist'>
              <li onClick={() => props.dispatch(toggleNav())}>Wishlist</li>
            </Link>
            <Link to='/watched'>
              <li onClick={() => props.dispatch(toggleNav())}>Watched</li>
            </Link>
            <li
              onClick={() => {
                props.dispatch(startLogout());
                props.dispatch(toggleNav());
              }}>
              Logout
            </li>
          </ul>
        )}
      </div>
    );
  } else {
    return (
      <div className='dropdown-menu'>
        <button
          className='dropdown-button'
          onClick={() => props.dispatch(toggleAccount())}>
          Login&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faUser} />
        </button>
        {props.isAccount && (
          <ul className='open'>
            <li
              onClick={() => {
                props.dispatch(startLogin());
                props.dispatch(toggleNav());
              }}>
              Login via Google
            </li>
          </ul>
        )}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.uid,
  isAccount: state.dropdown.account,
});

export default connect(mapStateToProps)(DropdownAccount);
