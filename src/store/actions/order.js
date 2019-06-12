import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchOrderStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrderSuccess = fetchedOrders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    fetchedOrders: fetchedOrders
  };
};

export const fetchOrderFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrderStart());
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
        dispatch(fetchOrderSuccess(fetchedOrders));
      })
      .catch(error => dispatch(fetchOrderFail(error)));
  };
};
