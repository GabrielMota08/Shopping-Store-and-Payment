import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import { Link } from 'react-router-dom';

function Cart() {
    const { cartItems, cartVisible } = useContext(AppContext);

    const totalPrice = cartItems.reduce((acc, item) => {
        return item.price + acc;
    }, 0);

    return (
        <section className={`cart ${cartVisible ? 'active_cart' : ''}`}>
            <div className="cart-items">
                {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
            </div>
            <div className="cart-resume">
                Valor total do carrinho:
                <br/>
                {totalPrice.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                })}
                
            </div>
            <div className="payment"><Link to="/Payment"> PAGAMENTO </Link></div>
        </section>
    );
}

export default Cart;
