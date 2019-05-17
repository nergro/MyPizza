import React from 'react';
import './Ingredients.scss';
import Ingredient from './Ingredient/Ingredient';

const ingredients = props => {
  return (
    <React.Fragment>
      <div className='Crust'>
        <div className='CrustGround'>
          {Object.keys(props.toppings).map((ing, i) => {
            return (
              <Ingredient
                ingredient={ing}
                added={props.toppings[ing]}
                key={ing + i}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ingredients;
