import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import './PizzaBuilder.scss';
import Pizza from '../../components/Pizza/Pizza';
import PizzaControls from '../../components/PizzaControls/PizzaControls';
import Modal from '../../components/UI/Modal/Modal';
import Checkout from '../../components/Checkout/Checkout';
import FlashMessage from '../../components/UI/FlashMessage/FlashMessage';

const TOPPING_PRICES = {
  Pepperoni: 1.2,
  Bacon: 1.0,
  Ham: 1.5,
  Chicken: 0.7,
  Olives: 0.6,
  Jalapenos: 0.5,
  Mushrooms: 0.3,
  Peppers: 0.8,
  Onions: 0.6
};

const SIZE_PRICES = {
  Small: 2,
  Large: 3,
  Family: 5
};

class PizzaBuilder extends Component {
  state = {
    showCheckout: false,
    showMessage: false,
    orderSuccess: false,
    orderErrorMsg: ''
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
        sizeObj[size] = SIZE_PRICES[size];
      }
      return sizeObj;
    });
    Object.keys(this.props.toppings).map(topping => {
      if (this.props.toppings[topping]) {
        toppingObj[topping] = TOPPING_PRICES[topping];
      }
      return toppingObj;
    });
    const arr = {
      pizzaSize: sizeObj,
      toppings: toppingObj
    };

    return arr;
  };

  submitOrderHandler = event => {
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
    today = yyyy + '-' + mm + '-' + dd;
    order['orderDate'] = today;

    /* Posting to db */
    axios
      .post('/orders.json', order)
      .then(
        this.setState({
          orderSuccess: true,
          showMessage: true
        })
      )
      .catch(err => {
        console.log(err);
        this.setState({
          orderSuccess: false,
          orderErrorMsg: err.message,
          showMessage: true
        });
      });
  };

  render() {
    let message = null;
    if (this.state.showMessage) {
      message = this.state.orderSuccess ? (
        <FlashMessage type='success'>
          <strong>Success!</strong> Your order was received. :)
        </FlashMessage>
      ) : (
        <FlashMessage type='danger'>
          <strong>Warning!</strong> {this.state.orderErrorMsg}
        </FlashMessage>
      );
    }

    return (
      <div className='PizzaBuilder'>
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
    anySizePicked: state.pizzaBuilder.anySizePicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTopping: topping => dispatch(actions.addTopping(topping)),
    removeTopping: topping => dispatch(actions.removeTopping(topping)),
    pizzaSizeHandler: size => dispatch(actions.pizzaSizeHandler(size))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzaBuilder);
