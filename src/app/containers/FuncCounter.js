// containers/FuncCounter.js

import {connect} from 'react-redux';
import FuncCounter from '../components/FuncCounter'; //react
import * as actions from '../state/actions'; //redux

import {bindActionCreators} from 'redux';

//bindActionCreators?
// action creator, dispatch  
// create a wrapper that (bind dispatch func with action creator func)
// call wrapper function, 
//                  1. calls action creator
//                  2. dispatch the action

// state = store.getState()
// who calls this method? ans: Container component
// when? Ans. 1. when component initialized first time
// Ans 2. On every subscribe
// returns? return props, those are passed to React component FuncCounter
export function mapStateToProps(state) {
    console.log('FuncCounter mapStateToProps', state);
    return {
        // component property: value from state
        counter: state.counter
    }
}

// dispatch = store.dispatch
// who call this? Container component
// when? on every component instantance creation, once once per component inst
export function mapDispatchToProps(dispatch) {
    return {
        //propName: function(){}
        // this method is called by component, when incr btn clicked
        increment: function() {
            const action = actions.increment(1);
            console.log('dispatching action ', action);
            dispatch(action);
        },

        // wrap one function
        decrement: bindActionCreators(actions.decrement, dispatch),

        // Otherwise
        // props.actions.increment, props.actions.decrement
        actions: bindActionCreators(actions, dispatch)
    }
}

// create a container for FuncCounter
// Smart Component/Container Component/Higher Order Component
// container takes care of subscribe, unsubscribe, calling getState
// Containers are pure component [implements shouldComponentUpdate, prevent unnessary render]
// store comes from? Provider 
const FuncCounterContainer = connect(mapStateToProps, mapDispatchToProps) (FuncCounter);

export default FuncCounterContainer;

// while importing, alias by default
// import FuncCounter from '../container/FuncCounter;