import { ADD_PRODUCT, UPDATE_PRODUCT_QUANTITY, DELETE_PRODUCT_CART, CREATE_ORDER } from '../actions/types';

const SCRATCH_STATE = {
    products: []
};

export default (state = SCRATCH_STATE, action) => {    
    switch (action.type) {
        case ADD_PRODUCT:
            if (state.products.some(product => product._id === action.payload._id)) {
                return state;
            }
            return { ...state, products: [...state.products, action.payload] };
                
        case UPDATE_PRODUCT_QUANTITY:
            return {
                ...state,
                products: state.products.slice().map(element => {
                if (element._id === action.payload.id) {
                    element.quantity = action.payload.quantity;
                }
                return element;
                })
            };
        case DELETE_PRODUCT_CART:
            return (
                { ...state, products: state.products.slice().filter(product => product._id !== action.payload) }
            );
        case CREATE_ORDER:
            return { ...state, products: [] };
        default:
            return state;
    }  
};
