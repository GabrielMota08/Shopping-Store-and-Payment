import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';
var SearchPlaceholder = 'Buscar produtos';

function SearchBar(){
    const { setProducts, setLoading } = useContext(AppContext);
    const [searchValue, setSearchValue] = useState('');

    const HandleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);
        const products = await fetchProducts(searchValue);
        setProducts(products);
        setLoading(false);
        SearchPlaceholder = searchValue;
        setSearchValue('');
    };
    return(
        <form className="form" onSubmit={HandleSearch}>
            <input 
                type="search" 
                className="search_input" 
                value={searchValue}
                placeholder={SearchPlaceholder}
                onChange={({target}) => setSearchValue(target.value)}
                required
            />
            <button className="search_button" type="submit">
                <BsSearch/>
            </button>

        </form>
    );
}

export default SearchBar;
