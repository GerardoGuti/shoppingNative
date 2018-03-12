import { ADD_PRODUCT, UPDATE_PRODUCT_QUANTITY } from '../actions/types';

const SCRATCH_STATE = {
    products: []
};

export default (state = SCRATCH_STATE, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            if (!state.products.some(i => i.product === action.payload.product)) {
                action.payload.quantity = 1;
                return { ...state, product: [...state.products, action.payload] };
            }
            return state;
        case UPDATE_PRODUCT_QUANTITY:
            return {
                ...state,
                items: state.items.slice().map(element => {
                if (element._id === action.payload.id) {
                    element.quantity = action.payload.quantity;
                }
                return element;
                })
            };
        default:
            return state;
    }
};
