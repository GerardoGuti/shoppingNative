import Axios from 'axios';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    USERNAME_CHANGED,
    PHONE_CHANGED,
    PASSWORDCONF_CHANGED,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS,
    ADD_PRODUCT,
    UPDATE_PRODUCT_QUANTITY
  } from './types';
  
  const URL = 'http://localost:3000/api/product';

  export const emailChanged = (email) => {
    return {
      type: EMAIL_CHANGED,
      payload: email
    };
  };

  export const passwordChanged = (password) => {
    return {
      type: PASSWORD_CHANGED,
      payload: password
    };
  };

  export const usernameChanged = (username) => {
    return {
      type: USERNAME_CHANGED,
      payload: username
    };
  };

  export const phoneChanged = (phone) => {
    return {
      type: PHONE_CHANGED,
      payload: phone
    };
  };
  
  export const passwordConfChanged = (passwordConf) => {
    return {
      type: PASSWORDCONF_CHANGED,
      payload: passwordConf
    };
  };

  export const fetchProducts = () => {
    return (dispactch) => {
      dispactch({ type: FETCH_PRODUCTS_SUCCESS });
      Axios.get(URL)
        .then(response => { fecthProductsSuccess(dispactch, response.data); })
        .catch(err => { fecthProductsFail(err); });
    };
  };
  
  const fecthProductsSuccess = (dispatch, products) => {
    return {
      type: FETCH_PRODUCTS,
      payload: products
    };
  };

  const fecthProductsFail = (dispatch) => {
    console.log(dispatch);
  };

  export const addProducttotheCart = (product) => {
    return {
      type: ADD_PRODUCT,
      payload: product
    };
  };

  export const updateItemQty = (id, quantity) => {
    return {
      type: UPDATE_PRODUCT_QUANTITY,
      payload: {
        id,
        quantity
      }
    };
  };
