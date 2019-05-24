import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.scss';

const dropdown = props => {
  const classes = props.open ? 'Dropdown Dropdown-open' : 'Dropdown';

  return (
    <div className={classes}>
      <Link to='/' className='drop-link' onClick={props.clicked}>
        Pizza Builder
      </Link>
      <Link to='/orders' className='drop-link' onClick={props.clicked}>
        Orders
      </Link>
    </div>
  );
};

export default dropdown;
