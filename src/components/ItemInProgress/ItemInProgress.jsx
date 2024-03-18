import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import FreeShipping from '../FreeShipping/FreeShipping';
import './ItemInProgress.css';
import { FaTruck } from 'react-icons/fa6';
import AppContext from '../../context/AppContext';

function ItemInProgress({ data }){

    const {title, thumbnail, price, shipping, id} = data;
    const { cartItems, setCartItems } = useContext(AppContext);

    function addProductProgress(){
        const indexToAdd = cartItems.findIndex((item) => item.id === id);
        if (indexToAdd !== -1) {
            cartItems[indexToAdd].quantitySelectedProducts = cartItems[indexToAdd].quantitySelectedProducts + 1;
            const updatedItems = [...cartItems];
            setCartItems(updatedItems);
        }
    }

    function decreaseProductProgress(){
        const indexToDecrease = cartItems.findIndex((item) => item.id === id);
        if (indexToDecrease !== -1) {
            cartItems[indexToDecrease].quantitySelectedProducts = cartItems[indexToDecrease].quantitySelectedProducts - 1;
            const updatedItems = [...cartItems];
            setCartItems(updatedItems);
        }
    }
    
    const handleRemoveItem = () => {
        const indexToRemove = cartItems.findIndex((item) => item.id === id);
        if (indexToRemove !== -1) {
            cartItems[indexToRemove].quantitySelectedProducts = 0;
            const updatedItems = [...cartItems.slice(0, indexToRemove), ...cartItems.slice(indexToRemove + 1)];
            setCartItems(updatedItems);
            console.log(updatedItems);
        }
    };


    return (
        <div className="item_progress">
            <div className="divImg_progress">
                <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" />
            </div>
            <section className="section_info">
                <div className="info_progress">
                    <h2 className="name_product_progress">{title}</h2>
                    <div className="free_shipping_progress">
                        <FaTruck />
                        <FreeShipping e={shipping.free_shipping}/>
                    </div>
                    <div className="options_product_progress">
                        <h4>Comprar agora</h4>
                        <p>|</p>
                        <h4>Salvar para depois</h4>
                        <p>|</p>
                        <h4 onClick={ handleRemoveItem }>Excluir</h4>
                    </div>
                </div>
                <div className="more_info_progress">
                    <div className="quantity_menu_progress">
                        <h2 className="remove_product_progress">
                            {data.quantitySelectedProducts === 1 ? <span className="gray_decrease">-</span> : <span className="blue_decrease" onClick={ decreaseProductProgress }>-</span>}
                        </h2>
                        <h2 className="quantity_product_progress">{data.quantitySelectedProducts}</h2>
                        <h2 className="add_product_progress" onClick={addProductProgress}>+</h2>
                    </div>
                    <div className="price_product_progress">
                        <h1 className="price_product_progress"> 
                            {price.toLocaleString('pt-br',{
                                style: 'currency',
                                currency: 'BRL',
                            })}
                            {data.quantitySelectedProducts > 1 && ` x ${data.quantitySelectedProducts}`}
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ItemInProgress;

ItemInProgress.propTypes = {
    data: PropTypes.object,
}.isRequired;

