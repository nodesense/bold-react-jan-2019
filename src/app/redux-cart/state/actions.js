// action creators
// redux-cart/state/actions.js
import * as ActionTypes from "./action-types";
import * as api from "./api";

export const addItem = (item) => {
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload: {
            item
        }
    }
}

export const removeItem = (id) => {
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        payload: {
            id
        }
    }
}


export const updateItem = (id, qty) => {
    return {
        type: ActionTypes.UPDATE_ITEM_IN_CART,
        payload: {
            id,
            qty: parseInt(qty)
        }
    }
}

export const empty = () => {
    return {
        type: ActionTypes.EMPTY_CART
    }
}

export const initProducts = (products) => {
    return {
        type: ActionTypes.INIT_PRODUCTS,
        payload: {
            products
            //products: products
        }
    }
}

// return object, sync
export const initLoading = (loading) => {
    return {
        type: ActionTypes.INIT_LOADING,
        payload: {loading}
    }
}

// redux-thunk, to implement ajax/async code in actions.js
// return a function as an action, not object as action - Thunk design
export function fetchProductFromServer2() {
    return function asyncFetchProduct(dispatch, getState) {
        // called by thunk middleware
        console.log('called by thunk');

        // initialize loading to true
        dispatch(initLoading(true)); 

        api.getAllProducts()
            .then (products => {
                // dispatch initProducts with products
                dispatch(initProducts(products));
                dispatch(initLoading(false));  
             
            })

    }
}

export function fetchProductFromServer() {
    return async  (dispatch, getState) => {
        // called by thunk middleware
        console.log('called by thunk');

        try {
            // initialize loading to true
            dispatch(initLoading(true)); 
            const products = await api.getProducts();
            dispatch(initProducts(products));
            dispatch(initLoading(false)); 
        }catch(error) {

        }

    }
}