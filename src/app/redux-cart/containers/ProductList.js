
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
        fetchProducts: function() {
                
            let actionFn = actions.fetchProductsFromServer();
            // dispatching a function
            dispatch(actionFn);
        }, 
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductList)