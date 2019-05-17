import React from 'react';
import './Pizza.scss';
import Ingredients from './Ingredients/Ingredients';

const pizza = props => {
  return (
    <div className='Pizza'>
      <Ingredients toppings={props.toppings} />
    </div>
  );
};

export default pizza;
