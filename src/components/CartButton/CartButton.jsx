import React, { useContext } from 'react';
import { BsCart2 } from 'react-icons/bs';
import './CartButton.css';
import AppContext from '../../context/AppContext';
function CartButton(){

    const { cartItems, setCartVisible, cartVisible } = useContext(AppContext);
    
    const totalItems = cartItems.reduce((acc, item) => {
        return item.quantitySelectedProducts  + acc;
    }, 0);
    
    function appearCart(){
        cartVisible === true ? setCartVisible(false) : setCartVisible(true);
    }
    return(
        <button type="button" className="cart_button" onClick={appearCart}>
            <BsCart2 />
            {cartItems.length != 0 && <span className="span">{totalItems}</span>}
        </button>
    );
}

export default CartButton;
