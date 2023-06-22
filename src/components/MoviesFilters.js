import React from 'react';
import { connect } from 'react-redux';
import { sortByRating, sortByAlphabet } from '../actions/filters';
import { toggleSort } from '../actions/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCheck } from '@fortawesome/free-solid-svg-icons';

const MoviesFilters = (props) => {
  return (
    <div className='dropdown-menu sort'>
      <button
        className='dropdown-button sort'
        onClick={() => props.dispatch(toggleSort())}>
        Sort by&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      {props.isSort && (
        <ul className='open'>
          {props.filters.sortBy === 'alphabet' ? (
            <li
              value='alphabet'
              onClick={() => {
                props.dispatch(sortByAlphabet());
                props.dispatch(toggleSort());
              }}>
              Alphabet&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faCheck} />
            </li>
          ) : (
            <li
              value='alphabet'
              onClick={() => {
                props.dispatch(sortByAlphabet());
                props.dispatch(toggleSort());
              }}>
              Alphabet
            </li>
          )}
          {props.filters.sortBy === 'rating' ? (
            <li
              value='rating'
              onClick={() => {
                props.dispatch(sortByRating());
                props.dispatch(toggleSort());
              }}>
              Rating&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faCheck} />
            </li>
          ) : (
            <li
              value='rating'
              onClick={() => {
                props.dispatch(sortByRating());
                props.dispatch(toggleSort());
              }}>
              Rating
            </li>
          )}
          {}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    isSort: state.dropdown.sort,
  };
};

export default connect(mapStateToProps)(MoviesFilters);
