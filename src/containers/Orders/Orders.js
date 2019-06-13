import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Orders.scss';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions';

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders(
      localStorage.getItem('token'),
      localStorage.getItem('userId')
    );
  }

  render() {
    let orders = this.props.loading ? (
      <Spinner />
    ) : (
      this.props.orders.map(order => <Order key={order.id} order={order} />)
    );
    if (!this.props.loading && orders.length === 0) {
      orders = <h5>No orders made yet</h5>;
    }
    return (
      <div className='Orders'>
        <h1>Order History</h1>
        <div className='OrderList'>
          {this.props.errorMsg.length > 0 ? this.props.errorMsg : orders}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.order.loading,
    errorMsg: state.order.errorMsg,
    orders: state.order.orders,
    token: state.auth.token,
    userId: state.auth.userId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
