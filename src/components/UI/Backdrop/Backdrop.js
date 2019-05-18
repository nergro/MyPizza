import React from 'react';
import './Backdrop.scss';

const backdrop = props => {
  return props.show ? (
    <div className='Backdrop' onClick={props.clicked} />
  ) : null;
};

export default backdrop;
