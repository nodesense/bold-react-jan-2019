
// redux-cart/containers/ProductList.js

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ProductList from "../components/ProductList";
import * as actions from "../state/actions";
import { getProducts } from "../state/api";

const mapStateToProps = (state) => {
    return {
         products: state.product.products,
         loading: state.product.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // this.props.fetchProducts()
        fetchProducts: function() {
            // action function
            const actionFn = actions.fetchProductFromServer();
            //dispatch a function as action
            dispatch(actionFn);
        }, 
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductList)