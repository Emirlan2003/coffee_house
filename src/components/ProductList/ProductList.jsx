import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../context/ProductContext';
import history from '../../helpers/history';
import FilterBrand from '../FilterBrand/FilterBrand';
import MainPagination from '../MainPagination/MainPagination';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css'

const ProductList = () => {
    const { getTopic, products, getData } = useContext(productContext)
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ cardsPerPage ] = useState(6)
    const [ searchValue, setSearchValue ] = useState('')

    // useEffect(() => {
    //     getTopic()
    // }, [])


    useEffect(() => {
        getData()
    }, [])
   

    const lastindex = currentPage * cardsPerPage
    const firstindex = lastindex - cardsPerPage
    const currentCard = products.slice(firstindex, lastindex)


    function paginate(pageNumber){
        setCurrentPage(pageNumber)
    }


    function handleValue(e){
        const search = new URLSearchParams(history.location.search)
        search.set('q', e.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        setSearchValue(e.target.value)
        getData(search.toString())
    }


    return (
        <>
        <div className="listMainBlock">
            <div className="listBlock">
                <h1 className="our">OUR</h1><h1 className="menu">MENU</h1>
            </div>
        </div>
        
        <div className="searchBlock">
            <input 
                  type="search" 
                  name='q'
                  className="search"
                  placeholder="     ...Search"
                  onChange={handleValue}
                  />
        </div>

        <div className='radioInput'>
                <FilterBrand className="filterBrand"/>
        </div>


        <div className="productsBlock" id="products">
              {currentCard ? currentCard.map(item => (
                  <ProductCard key={item.id} item={item}/>
              )) : <h1>loading</h1>}
        </div>

        <div>
            <MainPagination 
                 paginate={paginate}
                 totalCards={products.length}
                 cardsPerPage={cardsPerPage}
            />
        </div>
        </>
    );
};

export default ProductList;