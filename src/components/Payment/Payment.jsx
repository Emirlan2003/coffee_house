import React, { useContext } from 'react';
import { productContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';
import { calcTotalPrice } from "../Basket/BasketFunction"
import './Payment.css'

const Payment = () => {
    const { cart }  = useContext(productContext)




    return (
        <>
    <div className="grandBlock">
        <div className="paymentBlock">
        <div className="cardMainBlock">
            <div className="summa">
                 Сумма к оплате<input type="text" value={calcTotalPrice(cart.totalPrice)}/> сом
            </div>
            <div>
                 <img src="https://tuttobene-spa.ru/cosmetics/info/payment/logos.jpg" alt="" />
            </div>
            <div className="cardBlock1">
                <div className="cardText">Номер карты-это 14-19 цифр на лицевой стороне вашей <div className="cardText2">банковской карты</div></div>
                <input type="text" className="cardNumber" placeholder="Номер карты"/>
                <div className="cardText3">СРОК ДЕЙСТВИЯ</div>
                <div className="childBlock">
                    <input type="text" className="cardInput1" placeholder="MM"/>
                    /
                    <input type="text" className="cardInput2" placeholder="ГГ"/>
                </div>
            </div>
            <div className="cardBlock2">
                <div className="line2"></div>
                <input type="text" className="cvv" placeholder="CVV2" />
            </div>
        </div>

         <Link to="/check">
            <button className="mainBtn"><b>Оплатить {calcTotalPrice(cart.totalPrice)} Coм</b></button>
         </Link>
        

        </div>
    </div>
        </>
    );
};

export default Payment;