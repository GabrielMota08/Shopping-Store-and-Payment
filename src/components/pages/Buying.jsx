import React from 'react';
import Products from '../Products/Products.jsx';
import Cart from '../Cart/Cart.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import './Buying.css';
function Buying() {
    return (
        <>
            <Navbar />
            <div className="App">
                <Products/>
                <Cart />
            </div>
        </>
    );
}

export default Buying;
