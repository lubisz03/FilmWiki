import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { setTextFilter } from '../actions/filters';

const TextSearch = (props) => {
  return (
    <div className='text-search'>
      <input
        type='text'
        placeholder='Search by title'
        className='text-input'
        value={props.filters.text}
        onChange={(e) => props.dispatch(setTextFilter(e.target.value))}
      />
      &nbsp;&nbsp;
      <Link to={`/search/${props.filters.text}`}>
        <button className='button'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(TextSearch);
