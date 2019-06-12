import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Orders.scss';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions';

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const orders = this.props.loading ? (
      <Spinner />
    ) : (
      this.props.orders.map(order => <Order key={order.id} order={order} />)
    );
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
    orders: state.order.orders
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(actions.fetchOrders())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
