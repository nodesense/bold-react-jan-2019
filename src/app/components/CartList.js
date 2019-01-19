// CartList.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate

    // when? update life cycle
    // whenever parent render called on update cycle
    // whenever this.setState called on update cycle
    // not called on forceUpdate
    shouldComponentUpdate(nextProps, nextState) {
        console.log('CartList shouldComponentUpdate');
        console.log('nextProps ', nextProps);
        console.log('currentProps ', this.props);
        
        console.log('this.props.items !== nextProps.items', 
                        this.props.items !== nextProps.items);

        // return true when items are different
        return this.props.items !== nextProps.items;
    }
    
    render() {
        console.log("CartList Render");

        let {items} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }
                    {
                        items.map( item => (
                            <CartItem item={item}
                                      key={item.id}
                                      
                                      updateItem={this.props.updateItem}
                                      removeItem={this.props.removeItem}

                                      />
                        ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}