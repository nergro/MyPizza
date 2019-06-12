import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  errorMsg: ''
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: action.fetchedOrders };
    case actionTypes.FETCH_ORDERS_FAIL:
      return { ...state, loading: false, errorMsg: action.error.message };
    default:
      return state;
  }
};

export default reducer;
