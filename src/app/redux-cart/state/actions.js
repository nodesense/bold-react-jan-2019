// action creators

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

// initLoading(true) => action object

// thunk, return function as an action
// async, return a function as an action
export function fetchProductsFromServer() {
    
    return function(dispatch, getState) {
        console.log('***CALLED BY Middleware')
        // async code
        dispatch(initLoading(true));
        return api.getProducts()
                  .then (products => {
                      dispatch(initProducts(products))
                      dispatch(initLoading(false));
                  })
    }
    
}