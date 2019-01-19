import * as ActionTypes from './action-types';

const INITIAL_STATE = {
    products: [],
    loading: false
}

export default function 
                productReducer(state=INITIAL_STATE, action) {
    console.log('product reducer', state, action);

    switch(action.type) {
        case ActionTypes.INIT_PRODUCTS: 
            return {...state, products: action.payload.products}
        case ActionTypes.INIT_LOADING:
            return {...state, loading: action.payload.loading}
        default:
            return state;
    }
    

}