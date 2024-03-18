import React from 'react';
import'./Navbar.css';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';
function Navbar(){
    return(
        <>
            <header className="header">
                <div className="container">
                    <SearchBar/>
                    <CartButton className="cart_button"/>
                </div>  
            </header>
        </>
    );
}

export default Navbar;
