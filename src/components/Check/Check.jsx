import React, { useContext } from 'react';
import './Check.css'
import { useAuth } from '../../context/AuthContext';
import { calcTotalPrice } from '../Basket/BasketFunction';
import { productContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';

const Check = () => {
    
    const { cart, cartLength } = useContext(productContext)

    function localClear(){
        localStorage.clear()
    }


    const {
        handleLogout,
        user: { email },
      } = useAuth();

      let date = new Date().getDate()


    return (
    <div className="mainCheck">
        <div className="checkBlock">
            <h1>Invoice</h1>
            <Link to="/">
                 <button onClick={localClear}>x</button>
            </Link>
            <h2>Заведение: Coffee Club</h2>
            <h3>E-mail заказчика: {email}</h3>
            <h3>Дата: {date}.11.2021</h3>
            <h3>Сумма заказа: {calcTotalPrice(cart.totalPrice)} сом</h3>
        </div>
    </div>
    );
};

export default Check;