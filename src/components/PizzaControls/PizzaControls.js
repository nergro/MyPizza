import React from 'react';
import './PizzaControls.scss';
import Topping from './Topping/Topping';

const pizzaControls = props => {
  return (
    <div className='PizzaControls'>
      <h5>Choose Your Toppings</h5>
      <div className='Toppings '>
        <ul>
          {Object.keys(props.toppings).map((name, i) => {
            return (
              <li key={name + i}>
                <Topping
                  name={name}
                  addition={() => props.addition(name)}
                  removal={() => props.removal(name)}
                  added={props.toppings[name]}
                />
              </li>
            );
          })}
          <li />
        </ul>
      </div>
    </div>
  );
};

export default pizzaControls;
