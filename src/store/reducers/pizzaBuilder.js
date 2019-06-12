import * as actionTypes from '../actions/actionTypes';

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

const initialState = {
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
  checkoutContent: {}
};

const addTopping = (state, action) => {
  const oldTotal = state.totalCost;
  const updatedToppings = {
    ...state.toppings
  };
  updatedToppings[action.topping] = true;
  return {
    ...state,
    toppings: updatedToppings,
    totalCost: oldTotal + TOPPING_PRICES[action.topping]
  };
};

const removeTopping = (state, action) => {
  const oldTotal = state.totalCost;
  const updatedToppings = {
    ...state.toppings
  };
  updatedToppings[action.topping] = false;
  return {
    ...state,
    toppings: updatedToppings,
    totalCost: oldTotal - TOPPING_PRICES[action.topping]
  };
};

const pizzaSizeHandler = (state, action) => {
  let oldTotal = state.totalCost;
  let updatedSize = {
    ...state.sizePicked
  };
  if (updatedSize[action.size] === false && state.anySizePicked) {
    return state;
  }

  if (updatedSize[action.size]) {
    updatedSize[action.size] = false;
    return {
      ...state,
      sizePicked: updatedSize,
      totalCost: oldTotal - SIZE_PRICES[action.size],
      anySizePicked: false
    };
  } else {
    updatedSize[action.size] = true;
    return {
      ...state,
      sizePicked: updatedSize,
      totalCost: oldTotal + SIZE_PRICES[action.size],
      anySizePicked: true
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOPPING:
      return addTopping(state, action);
    case actionTypes.REMOVE_TOPPING:
      return removeTopping(state, action);
    case actionTypes.PIZZA_SIZE_HANDLER:
      return pizzaSizeHandler(state, action);
    default:
      return state;
  }
};

export default reducer;
