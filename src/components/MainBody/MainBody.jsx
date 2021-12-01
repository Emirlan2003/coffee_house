import React from 'react';
import { Link } from 'react-router-dom';
import './MainBody.css'

const MainBody = () => {
    return (
        <>
        <div className="mainBody" id="home">
            <div className="bodyBlock">
                 <h1 className="bodyText">FRESH COFFEE IN <br/> THE MORNING</h1>
                 <p  className="bodyText2">Coffee house is a great place where you can not only sit pleasantly,<br/> have a cup of aromatic drink or have a snack</p>
                 <Link to="/add">
                      <button className="bodyBtn">Add to assortment</button>
                 </Link>
            </div>
        </div>
        </>
    );
};

export default MainBody;