import React, { useContext, useEffect } from 'react';
import fetchProducts from '../../api/fetchProducts';
import './Products.css';
import Thumb from '../Thumb/Thumb';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';
function Products(){

    const { products, setProducts, loading, setLoading} = useContext(AppContext);
    
    useEffect(() => {
        fetchProducts('celular').then((response) => {
            const productsWithQuantity = response.map((product) => ({
                ...product,
                quantitySelectedProducts: 0
            }));

            setProducts(productsWithQuantity);
            setLoading(false);
        });
    }, []);

    return(
        (loading ? <Loading /> : 
            <section className="Products">
                {products.map((product) => <Thumb key={product.id} data={product}/>)}      
            </section>
        )
    );
}

export default Products;
