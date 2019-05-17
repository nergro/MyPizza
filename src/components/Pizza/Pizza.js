import React from 'react';
import './Pizza.scss';
import Ingredients from './Ingredients/Ingredients';

const pizza = () => {
  return (
    <div className='Pizza'>
      <Ingredients />
    </div>
  );
};

export default pizza;
