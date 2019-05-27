import React, { Component } from 'react';
import './Order.scss';
import ArrowDown from '../../assets/images/arrowDown.png';
import ArrowUp from '../../assets/images/arrowUp.png';

class Order extends Component {
  state = {
    open: false
  };

  orderClickHandler = () => {
    this.setState(prevState => {
      return {
        open: !this.state.open
      };
    });
  };

  render() {
    /* Getting all toppings if any were added */
    let ings = [];
    if (this.props.order.hasOwnProperty('toppings')) {
      Object.keys(this.props.order.toppings).map(topping => ings.push(topping));
    }
    /* Handling toppings jsx */
    const ingPart =
      ings.length > 0 ? (
        <div className='Order-Info-Bottom'>
          <h5>Ingredients</h5>
          {ings.map(ing => (
            <p>{ing}</p>
          ))}
        </div>
      ) : (
        <div className='Order-Info-Bottom'>
          <h5>Ingredients</h5>
          <p>No toppings were added</p>
        </div>
      );
    /* */
    const orderBottom = this.state.open ? ingPart : null;
    const arrow = this.state.open ? (
      <img src={ArrowUp} alt='Arrow Icon' />
    ) : (
      <img src={ArrowDown} alt='Arrow Icon' />
    );
    return (
      <div className='Order' onClick={this.orderClickHandler}>
        <div className='Order-Info'>
          <div className='Order-Info-Top'>
            <div>
              <h5>Pizza size</h5>
              <p>{Object.keys(this.props.order.pizzaSize)[0]}</p>
            </div>
            <div>
              <h5>Order date</h5>
              <p>{this.props.order.orderDate}</p>
            </div>
            <div>
              <p className='Order-price'>
                <strong>Price:</strong> ${this.props.order.totalPrice}
              </p>
            </div>
          </div>
          {orderBottom}
        </div>
        <div className='Icon'>{arrow}</div>
      </div>
    );
  }
}

export default Order;
