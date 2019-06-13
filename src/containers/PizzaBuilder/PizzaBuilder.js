import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import './PizzaBuilder.scss';
import Pizza from '../../components/Pizza/Pizza';
import PizzaControls from '../../components/PizzaControls/PizzaControls';
import Modal from '../../components/UI/Modal/Modal';
import Checkout from '../../components/Checkout/Checkout';
import FlashMessage from '../../components/UI/FlashMessage/FlashMessage';
import Spinner from '../../components/UI/Spinner/Spinner';

class PizzaBuilder extends Component {
  state = {
    showCheckout: false
  };

  showCheckoutHandler = () => {
    this.setState({
      showCheckout: true
    });
  };

  dismissCheckoutHandler = () => {
    this.setState({
      showCheckout: false
    });
  };

  checkoutContentHandler = () => {
    let sizeObj = {};
    let toppingObj = {};
    Object.keys(this.props.sizePicked).map(size => {
      if (this.props.sizePicked[size]) {
        sizeObj[size] = this.props.size_prices[size];
      }
      return sizeObj;
    });
    Object.keys(this.props.toppings).map(topping => {
      if (this.props.toppings[topping]) {
        toppingObj[topping] = this.props.topping_prices[topping];
      }
      return toppingObj;
    });
    const arr = {
      pizzaSize: sizeObj,
      toppings: toppingObj
    };

    return arr;
  };

  submitOrderHandler = () => {
    const order = this.checkoutContentHandler();
    order['totalPrice'] = this.props.totalCost.toFixed(2);
    this.setState({
      showCheckout: false
    });
    /* Getting todays date */
    var today = new Date();
    var dd = String(today.getDate());
    var mm = String(today.getMonth() + 1);
    var yyyy = today.getFullYear();
    if (mm.length === 1) {
      mm = '0' + mm;
    }
    if (dd.length === 1) {
      dd = '0' + dd;
    }
    var hours = String(today.getHours());
    var minutes = String(today.getMinutes());
    if (hours.length === 1) {
      hours = '0' + hours;
    }
    if (minutes.length === 1) {
      minutes = '0' + minutes;
    }
    today = yyyy + '-' + mm + '-' + dd + ' ' + hours + ':' + minutes;
    order['orderDate'] = today;
    order['userId'] = this.props.userId;
    this.props.purchasePizza(order, this.props.token);
  };

  render() {
    let message = null;
    if (this.props.showMessage) {
      message = this.props.orderSuccess ? (
        <FlashMessage type='success'>
          <strong>Success!</strong> Your order was received. :)
        </FlashMessage>
      ) : (
        <FlashMessage type='danger'>
          <strong>Warning!</strong> {this.props.orderErrorMsg}
        </FlashMessage>
      );
    }

    return (
      <div className='PizzaBuilder'>
        {this.props.loading ? <Spinner /> : null}
        {message}
        <div className='row'>
          <div className='column'>
            <PizzaControls
              toppings={this.props.toppings}
              addition={this.props.addTopping}
              removal={this.props.removeTopping}
              totalCost={this.props.totalCost}
              pizzaSizeClicked={this.props.pizzaSizeHandler}
              pizzaSize={this.props.sizePicked}
              anySizePicked={this.props.anySizePicked}
              showCheckout={this.showCheckoutHandler}
            />
          </div>
          <div className='column'>
            <div className='right-col'>
              <Pizza toppings={this.props.toppings} />
            </div>
          </div>
        </div>
        <Modal
          show={this.state.showCheckout}
          dismiss={this.dismissCheckoutHandler}
        >
          <Checkout
            checkout={this.checkoutContentHandler}
            totalCost={this.props.totalCost}
            clicked={this.submitOrderHandler}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toppings: state.pizzaBuilder.toppings,
    totalCost: state.pizzaBuilder.totalCost,
    sizePicked: state.pizzaBuilder.sizePicked,
    anySizePicked: state.pizzaBuilder.anySizePicked,
    showMessage: state.pizzaBuilder.showMessage,
    orderSuccess: state.pizzaBuilder.orderSucceed,
    orderErrorMsg: state.pizzaBuilder.orderErrorMsg,
    loading: state.pizzaBuilder.loading,
    topping_prices: state.pizzaBuilder.topping_prices,
    size_prices: state.pizzaBuilder.size_prices,
    userId: state.auth.userId,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTopping: topping => dispatch(actions.addTopping(topping)),
    removeTopping: topping => dispatch(actions.removeTopping(topping)),
    pizzaSizeHandler: size => dispatch(actions.pizzaSizeHandler(size)),
    purchasePizza: (orderData, token) =>
      dispatch(actions.purchasePizza(orderData, token))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzaBuilder);
