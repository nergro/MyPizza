import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addTopping = topping => {
  return {
    type: actionTypes.ADD_TOPPING,
    topping: topping
  };
};

export const removeTopping = (topping, price) => {
  return {
    type: actionTypes.REMOVE_TOPPING,
    topping: topping
  };
};

export const pizzaSizeHandler = size => {
  return {
    type: actionTypes.PIZZA_SIZE_HANDLER,
    size: size
  };
};

export const purchasePizzaStart = () => {
  return {
    type: actionTypes.PURCHASE_PIZZA_START
  };
};

export const purchasePizzaSuccess = () => {
  return {
    type: actionTypes.PURCHASE_PIZZA_SUCCESS
  };
};

export const purchasePizzaFail = error => {
  return {
    type: actionTypes.PURCHASE_PIZZA_FAIL,
    error: error
  };
};

export const purchasePizza = orderData => {
  return dispatch => {
    dispatch(purchasePizzaStart());
    axios
      .post('/orders.json', orderData)
      .then(response => {
        dispatch(purchasePizzaSuccess());
      })
      .catch(error => {
        dispatch(purchasePizzaFail(error));
      });
  };
};
