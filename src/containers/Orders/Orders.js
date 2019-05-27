import React, { Component } from 'react';
import './Orders.scss';
import Order from '../../components/Order/Order';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
  state = {
    orders: [],
    loading: false
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    axios
      .get('orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({
          orders: fetchedOrders,
          loading: false
        });
      })
      .catch(err => err);
  }

  render() {
    const orders = this.state.loading ? (
      <Spinner />
    ) : (
      this.state.orders.map(order => <Order key={order.id} order={order} />)
    );
    return (
      <div className='Orders'>
        <h1>Order History</h1>
        <div className='OrderList'>{orders}</div>
      </div>
    );
  }
}
export default Orders;
