import React, { Component } from 'react';
import axios from 'axios';
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
    },
    sizePicked: {
      Small: false,
      Large: false,
      Family: false
    },
    anySizePicked: false,
    totalCost: 0,
    showCheckout: false,
    showMessage: false,
    orderSuccess: false,
    orderErrorMsg: ''
  };

  addToppingHandler = topping => {
    const oldTotal = this.state.totalCost;
    const updatedToppings = {
      ...this.state.toppings
    };
    updatedToppings[topping] = true;
    this.setState({
      toppings: updatedToppings,
      totalCost: oldTotal + TOPPING_PRICES[topping]
    });
  };

  removeToppingHandler = topping => {
    const oldTotal = this.state.totalCost;
    const updatedToppings = {
      ...this.state.toppings
    };
    updatedToppings[topping] = false;
    this.setState({
      toppings: updatedToppings,
      totalCost: oldTotal - TOPPING_PRICES[topping]
    });
  };

  pizzaSizeHandler = size => {
    let oldTotal = this.state.totalCost;
    let updatedSize = {
      ...this.state.sizePicked
    };
    if (updatedSize[size] === false && this.state.anySizePicked) {
      return;
    }

    if (updatedSize[size]) {
      updatedSize[size] = false;
      this.setState({
        sizePicked: updatedSize,
        totalCost: oldTotal - SIZE_PRICES[size],
        anySizePicked: false
      });
    } else {
      updatedSize[size] = true;
      this.setState({
        sizePicked: updatedSize,
        totalCost: oldTotal + SIZE_PRICES[size],
        anySizePicked: true
      });
    }
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
    Object.keys(this.state.sizePicked).map(size => {
      if (this.state.sizePicked[size]) {
        sizeObj[size] = SIZE_PRICES[size];
      }
    });
    Object.keys(this.state.toppings).map(topping => {
      if (this.state.toppings[topping]) {
        toppingObj[topping] = TOPPING_PRICES[topping];
      }
    });
    const arr = {
      pizzaSize: sizeObj,
      toppings: toppingObj
    };

    return arr;
  };

  submitOrderHandler = event => {
    const order = this.checkoutContentHandler();
    order['totalPrice'] = this.state.totalCost;
    this.setState({
      showCheckout: false
    });
    axios
      .post('/orders.json', order)
      .then(
        this.setState({
          orderSuccess: true,
          showMessage: true
        })
      )
      .catch(err => {
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
              toppings={this.state.toppings}
              addition={this.addToppingHandler}
              removal={this.removeToppingHandler}
              totalCost={this.state.totalCost}
              pizzaSizeClicked={this.pizzaSizeHandler}
              pizzaSize={this.state.sizePicked}
              anySizePicked={this.state.anySizePicked}
              showCheckout={this.showCheckoutHandler}
            />
          </div>
          <div className='column'>
            <div className='right-col'>
              <Pizza toppings={this.state.toppings} />
            </div>
          </div>
        </div>
        <Modal
          show={this.state.showCheckout}
          dismiss={this.dismissCheckoutHandler}
        >
          <Checkout
            checkout={this.checkoutContentHandler}
            totalCost={this.state.totalCost}
            clicked={this.submitOrderHandler}
          />
        </Modal>
      </div>
    );
  }
}
