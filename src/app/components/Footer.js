// app/components/Footer.js
import React from 'react';
import PropTypes from 'prop-types';

// NOT COMPONENT, it is Variable
const label = <p>Countries</p>;

// Address is a component
// deconstruct, first with address, then state, and city
// address = props.address
// state = address.state
const Address = ( { address: {state, city} }) => (
        <div>
            <p>City {city}</p>
            <p>State {state}</p>
        </div>
);


//FIXME: declare constant as deconstruct

// React calls the function,
// get the virtual dom
// create and return virtual dom
// deconstruct at function declaration
// Footer(props) { let company = props.company; ....}
export default function Footer({company, year, address, countries, children}) {
    console.log('Footer render');
   
    return (
        <div>
            <hr />
            <p > Copyrights @{year}, {company} </p>
            <Address address={ address? address: {} } />
            {label}

            {children}
        </div>
    )
}

// keyword propTypes
Footer.propTypes = {
    // mandatory
    year: PropTypes.number.isRequired, 
    // optional
    company: PropTypes.string,

    // address: PropTypes.object
    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        pincode: PropTypes.number //optional
    }).isRequired
}


// defaultProps is keyword
Footer.defaultProps = {
    company: 'React App'
}
