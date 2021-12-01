import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from '../../context/ProductContext';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { checkProductInCart } from '../Basket/BasketFunction';
import { checkProductInLike } from './LikesFunction';
import './ProductCard.css'

const ProductCard = ({ item }) => {
    const { products, getChosen, addProductToCart, getLike, addProductToLike } = useContext(productContext)

    function setChosen(){
        products.map(elem => {
            if(item.id === elem.id){
                getChosen(elem)
            }
        })
    }


    useEffect(() => {
        getLike()
    }, [])


   

    

    return (
        <div className="cardBlock">
             <Link to={`/details/${item.id}`}>
                 <img src={item.img} alt="" id={item.id}/>
             </Link>
                 {item.brand}<br/>
                 {item.price}  kgz
                 <div className="iconsFavorite">
                     <AddShoppingCartIcon onClick={() => addProductToCart(item)} color={checkProductInCart(item.id) ? 'primary' : ''}/>
                     <BookmarkSharpIcon onClick={setChosen}/>
                 </div>
                 <span>
                     <FavoriteIcon className="kingIcon" onClick={() => addProductToLike(item)} color={checkProductInLike(item.id) ? 'secondary' : ''}/>
                 </span>
            </div>
    );
};

export default ProductCard;