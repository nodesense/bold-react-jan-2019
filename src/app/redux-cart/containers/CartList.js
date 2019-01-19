
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import CartList from "../components/CartList";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
         items: state.items
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     }
// }

export default connect(mapStateToProps, 
                    null) (CartList)