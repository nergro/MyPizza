import React from 'react';
import './PizzaControls.scss';
import Topping from './Topping/Topping';
import PizzaLogo from '../../assets/images/pizza.png';

const pizzaControls = props => {
  return (
    <div className='PizzaControls'>
      <h5>Choose Pizza Size</h5>
      <div className='PizzaSize'>
        {Object.keys(props.pizzaSize).map((size, i) => {
          const altMsg = size + ' Pizza';
          let classes = size;
          let style = {
            cursor: 'pointer'
          };
          if (props.anySizePicked) {
            if (!props.pizzaSize[size]) {
              classes = size + ' NotClicked';
              style = {
                cursor: 'not-allowed',
                disabled: 'true',
                filter: 'hue-rotate(180deg)',
                borderRadius: '50%'
              };
            }
          }
          if (props.anySizePicked) {
            if (props.pizzaSize[size]) {
              classes = size + ' Clicked';
            }
          }
          return (
            <input
              type='image'
              className={classes}
              src={PizzaLogo}
              onClick={() => props.pizzaSizeClicked(size)}
              alt={altMsg}
              style={style}
              key={size + i}
            />
          );
        })}
      </div>
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
                  totalCost={props.totalCost}
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
      <button
        className='checkout btn'
        onClick={props.showCheckout}
        disabled={!props.anySizePicked}
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default React.memo(pizzaControls);
