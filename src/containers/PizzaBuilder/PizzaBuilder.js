import React, { Component } from 'react';
import './PizzaBuilder.scss';
import Pizza from '../../components/Pizza/Pizza';
import PizzaControls from '../../components/PizzaControls/PizzaControls';

export default class PizzaBuilder extends Component {
  state = {
    toppings: {
      Pepperoni: false,
      Bacon: false,
      Ham: false,
      Chicken: false,
      Olives: false,
      Jalapenos: false,
      Mushrooms: false,
      Peppers: false,
      Onions: false
    }
  };

  addToppingHandler = topping => {
    const updatedToppings = {
      ...this.state.toppings
    };
    updatedToppings[topping] = true;
    this.setState({
      toppings: updatedToppings
    });
  };

  removeToppingHandler = topping => {
    const updatedToppings = {
      ...this.state.toppings
    };
    updatedToppings[topping] = false;
    this.setState({
      toppings: updatedToppings
    });
  };

  render() {
    return (
      <div className='PizzaBuilder'>
        <div className='row'>
          <div className='column'>
            <PizzaControls
              toppings={this.state.toppings}
              addition={this.addToppingHandler}
              removal={this.removeToppingHandler}
            />
          </div>
          <div className='column'>
            <div className='right-col'>
              <Pizza toppings={this.state.toppings} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
