import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from '../../context/ProductContext';
import './ProductEdit.css'

const ProductEdit = () => {
    const { saveTopic, productsToEdit } = useContext(productContext)
    const [ change, setChange ] = useState(productsToEdit)


    useEffect(() => {
        setChange(productsToEdit)
    }, [productsToEdit])

   

    const handleEditTopic = (e) => {
        let newObj = {
            ...change,
            brand: e.target.value
        }
        setChange(newObj)
    }

    const handleEditTopic2 = (e) => {
        let newObj = {
            ...change,
            img: e.target.value
        }
        setChange(newObj)
    }

    const handleEditTopic3 = (e) => {
        let newObj = {
            ...change,
            price: e.target.value
        }
        setChange(newObj)
    }

    const handleEditTopic4 = (e) => {
        let newObj = {
            ...change,
            description:e.target.value
        }
        setChange(newObj)
    }


    return (
        <div>
            {change ? 
              <div className="addBlock">
            <input 
                  type="text" 
                  placeholder="BRAND"
                  value={change.brand}
                  onChange={handleEditTopic}
                  />
            <input 
                  type="text" 
                  placeholder="IMG URL"
                  value={change.img}
                  onChange={handleEditTopic2}
                  />
            <input 
                  type="text" 
                  placeholder="PRICE"
                  value={change.price}
                  onChange={handleEditTopic3}
                  />
            <input 
                  type="text" 
                  placeholder="DESCRIPTION"
                  value={change.description}
                  onChange={handleEditTopic4}
                  />
            <Link to={`/details/${change.id}`}>
                <button onClick={() => saveTopic(change)}>SAVE</button>
            </Link>    
        </div> 

              : <h1>loading</h1>}

        </div>
    );
};

export default ProductEdit;