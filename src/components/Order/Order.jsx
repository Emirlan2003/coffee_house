import React from 'react';
import { Link } from 'react-router-dom';
import './Order.css'



const Order = () => {
    return (
    <div className="orderMainBlock">
        <div className="orderBlock">
            <h1>Ваши данные</h1>
            <div>Ф.И.О</div>
            <input type="text" className="mainInput"/>
            <div>Ваш E-mail</div>
            <input type="text" className="mainInput"/>
            <div>Ваш номер телефона</div>
            <input type="text" placeholder="+996-(___)-(__)-(__)-(__)" className="mainInput"/>
            <div>На кого оформляем заказ?</div>
            <div>
                 <input type="radio" className="radio"/><span>На себя</span>
                 <input type="radio" className="radio"/><span>На другое лицо</span>
                 <input type="radio" className="radio"/><span>Юридическое лицо</span>
            </div>
            <h1>Доставка</h1>
            <div>Ваш город</div>
            <input type="text" className="mainInput"/>
            <Link to="/payment">
                <button>Перейти к оплате</button>
            </Link>
        </div>
    </div>
    );
};

export default Order;