import React from 'react';
import menu1 from '../../assets/menu1.jpeg'
import menu2 from '../../assets/menu2.jpeg'
import menu3 from '../../assets/menu3.jpeg'
import menu4 from '../../assets/menu4.jpeg'
import menu5 from '../../assets/menu5.jpeg'
import './Menu.css'

const Menu = () => {
    return (
        <>
        <div className="menuMainBlock">
            <div className="menuBlock">
                  <img src={menu2} alt="" />
                  <img src={menu1} alt="" />
                  <img src={menu3} alt="" />
                  <img src={menu4} alt="" />
                  <img src={menu5} alt="" />
            </div>
        </div>
        
        </>
    );
};

export default Menu;