import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Thumb.css';
import { MdAddShoppingCart } from 'react-icons/md';
import FreeShipping from '../FreeShipping/FreeShipping';
import AppContext from '../../context/AppContext';

function Thumb({ data }) {
    const {title, thumbnail, price, shipping} = data;

    const { cartItems, setCartItems } = useContext(AppContext);
    
    const handleAddCart = () => {
        const indexToEdit = cartItems.findIndex((item) => item.id === data.id);
        if (indexToEdit !== -1) {
            cartItems[indexToEdit].quantitySelectedProducts = cartItems[indexToEdit].quantitySelectedProducts + 1;
            const updatedItems = [...cartItems];
            setCartItems(updatedItems);
            console.log(updatedItems);
        } else {
            data.quantitySelectedProducts = 1;
            setCartItems([...cartItems, data]);
        }
        
    };
    return (
        <div className="item">
            <div className="divImg">
                <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" />
            </div>
            <div className="info">
                <h2 className="name_product">{title}</h2>
                <h1 className="price_product"> 
                    {price.toLocaleString('pt-br',{
                        style: 'currency',
                        currency: 'BRL',
                    })}
                </h1>
                <FreeShipping e={shipping.free_shipping}/>
            </div>
            <button type="button" className="addToCart" onClick={ handleAddCart }>
                <MdAddShoppingCart />
            </button>
        </div>
    );
}

export default Thumb;

Thumb.propTypes = {
    data: PropTypes.shape({}),
}.isRequired;
