import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from '../actions/types';

const STATE_SCRATCH = {
    items: []
};

export default (state = STATE_SCRATCH, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state };
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, items: action.payload };
        default:
            return state;
    }
};
