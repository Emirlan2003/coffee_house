import React from 'react';
import { Link } from 'react-router-dom';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div>
            <div className="subBlock">
                <h1 className="subs">SUBS</h1><h1 className="cribe">CRIBE</h1>
            </div>
                <div className="inpSubBlock">
                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Phone number"/>
                    <input type="text" placeholder="Name"/>
                    <Link to="/">
                         <button class="floating-button">SUBSCRIBE</button>
                    </Link>
                </div>
        </div>
    );
};

export default Subscribe;