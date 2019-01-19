// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);

        //TODO: assing from props
        this.state = {
            qty: props.item.qty
        }
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty

    onQtyChange = (event) => {
        console.log('event ',event);
        // the control (REAL DOM) triggered event
        const target = event.target;
        const value = target.value; // textbox value
        console.log('value is', value);

        this.setState({
            qty: value
        });

    }

    componentDidMount() {
        // ref is resolved
        this.inputElement.focus();
        // this.priceElement.value = "100000";
        // this.pElement.textContent = "Discount%";
    }
   
    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                   

                    {/* <input 
                            value={this.state.price}
                           
                            type="number"
                            ref= { (elem) => this.priceElement = elem  }
                     /> */}

                    <input 
                            value={this.state.qty}
                            onChange={this.onQtyChange}
                            type="number"
                            ref= { (elem) => this.inputElement = elem  }
                     />
                </td>

                <td>{item.price * item.qty}
                    {/* <p  ref= { (elem) => this.pElement = elem  }>Hello</p> */}
                </td>

                <td> 
                <button onClick={() => this.props.updateItem(item.id, this.state.qty)}>
                        Update
                </button>    
                <button onClick={() => this.props.removeItem(item.id)}>
                        Delete
                </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}