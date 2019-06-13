import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Dropdown.scss';
const dropdown = props => {
  const classes = props.open ? 'Dropdown Dropdown-open' : 'Dropdown';
  return (
    <div className={classes}>
      <Link to='/' className='drop-link' onClick={props.clicked}>
        Pizza Builder
      </Link>
      {props.loggedIn ? (
        <Link to='/orders' className='drop-link' onClick={props.clicked}>
          Orders
        </Link>
      ) : null}
      {props.loggedIn ? (
        <Link to='/logout' className='drop-link' onClick={props.clicked}>
          Logout
        </Link>
      ) : (
        <Link to='/login' className='drop-link' onClick={props.clicked}>
          Login
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

export default connect(mapStateToProps)(dropdown);
