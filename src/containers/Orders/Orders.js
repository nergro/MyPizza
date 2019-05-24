import React, { Component } from 'react';
import './Orders.scss';
import Order from '../../components/Order/Order';

class Orders extends Component {
  render() {
    return (
      <div className='Orders'>
        <h1>Order History</h1>
        <div className='OrderList'>
          <Order />
          <Order />
          <Order />
        </div>
      </div>
    );
  }
}
export default Orders;
