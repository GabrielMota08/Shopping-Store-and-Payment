import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import ItemInProgress from '../ItemInProgress/ItemInProgress';
import './InProgress.css';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import no_products_progress from './no_products_progress.png';

function InProgress(){

    const { cartItems } = useContext(AppContext);
    const [choose, setChoose] = useState(0); // useState returns an array with the state value and the setter function

    const totalItems = cartItems.reduce((acc, item) => {
        return item.quantitySelectedProducts  + acc;
    }, 0);
    
    const totalPrice = cartItems.reduce((acc, item) => {
        return (item.price * item.quantitySelectedProducts) + acc;    
    }, 0);

    return(
        <div className="container_payment">
            <section className="section_payment">
                <div className="top_div_payment">
                    <Link to="/">
                        <h2>
                            <IoArrowBack />
                        </h2>
                    </Link>
                    <Link to="/">
                        <h4>
                    Adicionar produtos
                        </h4>
                    </Link>
                </div>
                <div className="cart_or_saves">
                    <p onClick={() => setChoose(0)}>Carrinho ({totalItems})</p>
                    <p onClick={() => setChoose(1)}>Salvos</p>
                </div>
                <div className="products_progress">
                    {choose === 0 ? cartItems.map((item) => <ItemInProgress key={item.id} data={item} />) : <p>SEM ITENS SALVOS</p>}
                </div>
                {totalPrice > 0 ? 
                    <>
                        <div className="lower_payment">
                            <div className="total_progress">
                                <h4>Total</h4>
                                <h3>{totalPrice.toLocaleString('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })}</h3>
                            </div>
                        </div>
                        <div className="buy_all_progress">
                            <h3>Comprar tudo</h3>
                        </div>
                    </> : <div className="no_product_progress">
                        <img src={no_products_progress} alt="No products in progress" key="none"/>
                    </div>}
            </section>
        </div>
    );
}

export default InProgress;
