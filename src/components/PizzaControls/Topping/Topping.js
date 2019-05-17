import React from 'react';
import './Topping.scss';

const topping = props => {
  const classes = 'Icon ' + props.name + '-icon';
  const added = props.added ? true : false;
  return (
    <div className='Topping'>
      <div className='IconWrapper'>
        <div className={classes} />
      </div>
      <div className='Name'>{props.name}</div>
      <div className='Buttons btn-group'>
        <button
          className='Add-btn btn btn-success'
          disabled={added}
          onClick={props.addition}
        >
          Add
        </button>
        <button
          className='Remove-btn btn btn-danger'
          disabled={!added}
          onClick={props.removal}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default topping;
