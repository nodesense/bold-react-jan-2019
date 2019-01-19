
import React, {Component} from "react";
import PropTypes from "prop-types";

const Loading = () => (
    <div>
        <h2>Loading ....</h2>
        <img src="/assets/loading.gif" />
    </div>
)

// deconstruct on function argument
// products = props.products
const Products = ({products}) => (
    <ul>
        {
            products.map(product => (
                <li key={product.id}>
                    {product.name}
                </li>
            ))
        }
    </ul>
)


export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
       this.props.fetchProducts();
    }
    
    render() {
        return (
            <div> 
            <h2>Product List</h2>

            {
                this.props.loading? 
                        <Loading /> : 
                        <Products {...this.props} />
            }

            </div>
        )
    }
} 


ProductList.defaultProps = {
    
}

ProductList.propTypes = {
    
}