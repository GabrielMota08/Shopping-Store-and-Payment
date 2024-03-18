import React, { useState } from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';

function Provider({children}){

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartVisible, setCartVisible] = useState(false);

    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems,
        cartVisible,
        setCartVisible,
    };
    return(
        <AppContext.Provider value={ value }>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;

Provider.propTypes = {
    children: PropTypes.any,
}.isRequired;
