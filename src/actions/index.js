import Axios from 'axios';
import firebase from 'firebase';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    USERNAME_CHANGED,
    PHONE_CHANGED,
    PASSWORDCONF_CHANGED,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS,
    ADD_PRODUCT,
    UPDATE_PRODUCT_QUANTITY,
    DELETE_PRODUCT_CART,
    CREATE_ORDER,
    SIGNIN_USER,
    LOGIN_USER,
    LOGOUT_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS
} from './types';
  
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
    const url = 'http://localhost:3000/api/order';
    return (dispactch) => {
      dispactch({ type: FETCH_PRODUCTS_SUCCESS });
      Axios.get(url)
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

  export const updateItemQuantity = (id, quantity) => {
    return {
      type: UPDATE_PRODUCT_QUANTITY,
      payload: {
        id,
        quantity
      }
    };
  };

  export const deleteProductCart = (id) => {
    return {
      type: DELETE_PRODUCT_CART,
      payload: id
    };
  };

  export const createOrder = body => {
    const url = 'http://localhost:3000/api/order';
  
    return dispatch => {
      dispatch({ type: CREATE_ORDER });
      Axios.post(url, body)
        .then(response => {
          console.log(response);
        }).catch(err => {
          console.log(err);
        });
    };
  }; 
  
  export const signInUser = ({ username, email, password }) => {
    const url = 'http://localhost:3000/api/order';
    return dispatch => {
      const body = {
        name: username,
        lastnamefa: 'default',
        lastnamemo: 'default',
        birthdate: '1980-11-20',
        address: email
      };
      Axios.post(url, body)
        .then(result => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
              dispatch({ type: SIGNIN_USER, payload: result });
              //Actions.main();
            }).catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    };
  };
  
  export const loginUser = ({ email, password }) => {
    return (dispatch) => {
      dispatch({ type: LOGIN_USER });
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserOnAPI(dispatch, email))
        .catch(err => loginUserFail(dispatch, err));
    };
  };
  
  const loginUserOnAPI = (dispatch, email) => {
    const url = 'http://localhost:3000/api/order';
    Axios.get(url)
      .then(users => {
        const filtered = users.filter(elt => elt.address === email);
        if (filtered.length) {
          loginUserSuccess(dispatch, filtered[0]);
        }// TODO: not logged in because inexistent user in api
      }).catch(err => console.log(err));
  };
  
  export const logoutUser = () => {
    return (dispatch) => {
      dispatch({ type: LOGOUT_USER });
      //Actions.auth();
    };
  };
  
  const loginUserFail = dispatch => {
    dispatch({ type: LOGIN_USER_FAIL });
  };
  
  const loginUserSuccess = (dispatch, user) => {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
  
    //Actions.main();
  };
