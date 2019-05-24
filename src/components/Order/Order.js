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
    const orderBottom = this.state.open ? (
      <div className='Order-Info-Bottom'>
        <h5>Ingredients</h5>
        <p>Pepperoni</p>
        <p>Ham</p>
        <p>Chicken</p>
      </div>
    ) : null;
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
              <p>Family</p>
            </div>
            <div>
              <h5>Order date</h5>
              <p>2019-04-04</p>
            </div>
            <div>
              <p className='Order-price'>
                <strong>Price:</strong> $11.00
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
