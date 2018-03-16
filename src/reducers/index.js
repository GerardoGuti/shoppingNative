import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';
import CartReducers from './CartReducers';

export default combineReducers({
    auth: AuthReducer,
    productsStore: CartReducers
});
