import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';
import ProductReducers from './ProductReducers';

export default combineReducers({
    auth: AuthReducer,
    products: ProductReducers
});
