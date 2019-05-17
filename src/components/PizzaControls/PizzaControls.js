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
      <h5>
        <strong>Total Cost:</strong>&nbsp;{props.totalCost.toFixed(2)}$
      </h5>
      <button className='checkout btn'>CHECKOUT</button>
    </div>
  );
};

export default pizzaControls;
