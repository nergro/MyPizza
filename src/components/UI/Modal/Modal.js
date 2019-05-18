import React from 'react';
import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  return props.show ? (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.dismiss} />
      <div className='Modal'>{props.children}</div>
    </React.Fragment>
  ) : null;
};

export default modal;
