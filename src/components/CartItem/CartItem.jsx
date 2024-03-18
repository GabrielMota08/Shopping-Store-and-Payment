import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';
import { BsCartDashFill } from 'react-icons/bs';
import AppContext from '../../context/AppContext';

function CartItem({ data }){

    const { cartItems, setCartItems } = useContext(AppContext);
    const {id, title, thumbnail, price, quantitySelectedProducts} = data;


    const handleRemoveItem = () => {
        const indexToRemove = cartItems.findIndex((item) => item.id === id);
        if (indexToRemove !== -1) {
            const updatedItems = [...cartItems.slice(0, indexToRemove), ...cartItems.slice(indexToRemove + 1)];
            setCartItems(updatedItems);
            console.log(updatedItems);
        }
    };

    return(
        <section className="cart-item" id={id}>
            <img
                src={thumbnail}
                alt="imagem do produto"
                className="cart-item-image"
            />
            <div className="cart-item-content">
                <h3 className="cart-item-title">{title}</h3>
                <h3 className="cart-item-price">{price.toLocaleString('pt-br',{
                    style: 'currency',
                    currency: 'BRL',
                })}</h3>
                <h4 className="cart_item_quantity">{quantitySelectedProducts} Unidade{quantitySelectedProducts > 1 && 's'}</h4>
            </div>
            <button
                type="button"
                className="button_remove_item"
                onClick={ handleRemoveItem }
            >
                <BsCartDashFill />
            </button>
        </section>
    );
}

export default CartItem;

CartItem.propTypes = {
    data: PropTypes.object,
}.isRequired;

