import React from 'react';
import'./HeaderPayment.css';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';
import { Link } from 'react-router-dom';

function HeaderPayment(){
    return(
        <header className="header_Payment">
            <div className="container_Payment">
                <Link to="/">
                    <SearchBar/>
                </Link>
                <Link to="/">
                    <CartButton className="cart_button"/>
                </Link>
            </div>  
        </header>
    );
}

export default HeaderPayment;
