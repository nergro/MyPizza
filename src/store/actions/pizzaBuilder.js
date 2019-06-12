import * as actionTypes from './actionTypes';

export const addTopping = topping => {
  return {
    type: actionTypes.ADD_TOPPING,
    topping: topping
  };
};

export const removeTopping = topping => {
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
