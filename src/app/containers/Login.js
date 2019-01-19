// containers/FuncCounter.js

import {connect} from 'react-redux';
import Login from '../components/Login'; //react
import * as actions from '../state/actions'; //redux

import {bindActionCreators} from 'redux';
 
export function mapStateToProps(state) {
    console.log('FuncCounter mapStateToProps', state);
    return {
        // component property: value from state
        authenticated: state.auth.authenticated
    }
}
 
export function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        login: function(){
            alert('login')
            const action = actions.login();
            dispatch(action);
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProps) (Login);
