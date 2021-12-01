import React, { useContext, useEffect } from 'react';
import { productContext } from '../../context/ProductContext';
import { calcTotalPrice } from './BasketFunction';
import './Basket.css'
import { Link } from 'react-router-dom';

const Basket = () => {
    const { getCart, cart, changeProductCount, dispatch, addHistory } = useContext(productContext)

  useEffect(() => {
      getCart()
  }, [])

  function deleteBasket(id){
      let cart = JSON.parse(localStorage.getItem('cart'))
      let filteredCarts = { ...cart, products: cart.products.filter(e => e.item.id !== id)}
      localStorage.setItem('cart', JSON.stringify(filteredCarts))
      calcTotalPrice(cart.products)
      dispatch({
          type: "CHANGE_CHOSEN_COUNT",
          payload: filteredCarts.products.length
      }) 
      getCart()
  }


  

  function saveHistory(){
      let cart = JSON.parse(localStorage.getItem('cart'))
      cart.products.map(elem => {
           addHistory(elem)
      })
  }


  




    return (
        <div className="cart">
        {cart.products ? (
  
       
        <div>
             <>
             <table>
               <thead>
                 <tr>
                   <th>Image</th>
                   <th>title</th>
                   <th>price</th>
                   <th>count</th>
                   <th>subprice</th>
                   <th>Delete</th>
                 </tr>
               </thead>
                <tbody>
            {cart.products.map(elem => (
                     <> 
                    <tr key={elem.item.id}>
                      <td>
                        <img src={elem.item.img} alt="product img" />
                      </td>
                      <td>{elem.item.brand}</td>
                      <td>{elem.item.price} kgz</td>
                      <td>
                        <input className='sum_input' value={elem.count} onChange={(e) => changeProductCount(e.target.value, elem.item.id)} type="number" min="1"/>
                      </td>
                      <td>{elem.subPrice} kgz</td>
                      <td><button className='btn_cartdelete' onClick={() => deleteBasket(elem.item.id)}>Delete</button></td>
                    </tr>
                    </>
                ))}
                </tbody>
             </table>
             <p>Total: {calcTotalPrice(cart.totalPrice)} сом</p>
                <Link to="/order">
                     <button className="btn_buy" onClick={() => saveHistory()}>Buy</button>
                </Link>
              </>
        </div>
            ) : (
              <h1>Loading</h1>
            )}
      </div>
    );
};

export default Basket;