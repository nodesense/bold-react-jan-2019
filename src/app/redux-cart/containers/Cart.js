// containers/Cart
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Cart from "../components/Cart";
import * as actions from "../state/actions";

// cart doesn't need any state
// export const mapStateToProps = (state) => {
//     return {
         
//     }
// }

export const mapDispatchToProps = (dispatch) => {
    return {
        // props.addItem
        addItem: function () {
            let id = Math.ceil(Math.random() * 100000);
            let item = {
                id, // syntatic sugar id: id
                name: `Product ${id}`,
                price:  Math.ceil(Math.random() * 100),
                qty: 1
            }

            dispatch(actions.addItem(item));
        },

        //props.actions.addItem, removeItem, etc
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, 
                    mapDispatchToProps) (Cart)