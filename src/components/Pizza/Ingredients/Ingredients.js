import React from 'react';
import './Ingredients.scss';
import Ingredient from './Ingredient/Ingredient';

const ingredients = () => {
  return (
    <React.Fragment>
      <div className='Crust'>
        <div className='CrustGround'>
          <Ingredient ingredient='Pepperoni' />
          <Ingredient ingredient='Bacon' />
          <Ingredient ingredient='Ham' />
          <Ingredient ingredient='Chicken' />
          <Ingredient ingredient='Olives' />
          <Ingredient ingredient='Jalapenos' />
          <Ingredient ingredient='Mushrooms' />
          <Ingredient ingredient='Peppers' />
          <Ingredient ingredient='Onions' />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ingredients;
