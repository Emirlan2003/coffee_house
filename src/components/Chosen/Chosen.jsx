import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { productContext } from '../../context/ProductContext';
import './Chosen.css'

const Chosen = () => {
    const { chosen, getChosen, deleteChosen, getDataChosen } = useContext(productContext)
    

  
    
    useEffect(() => {
        getDataChosen()
    }, [])

    return (
        <div className="productsBlock2">
               {chosen ? chosen.map(item => (
                   <div className="cardBlock3">
                             <button className="x" onClick={() => deleteChosen(item.id)}>x</button>
                         <Link to={`/details/${item.id}`}>
                             <img src={item.img} alt="" id={item.id}/>
                         </Link>
                             {item.brand}<br/>
                             {item.price}  kgz
                        </div>
            )) : <h1>loading</h1>}
        </div>
    );
};

export default Chosen;