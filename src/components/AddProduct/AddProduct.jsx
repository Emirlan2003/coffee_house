import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from '../../context/ProductContext';
import './AddProduct.css'

const AddProduct = () => {
    const { getTopic } = useContext(productContext)
    const [ brand, setBrand ] = useState('')
    const [ img, setImg ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ price, setPrice ] = useState('')



    const clear = () => {
        setBrand('')
        setImg('')
        setDescription('')
        setPrice('')
    }


    const handleAddTopic = () => {
        let newTopic = {
            brand: brand,
            img: img,
            description: description,
            price: price
        }
        getTopic(newTopic)
        clear()
    }

    



    return (
        <div className="addBlock">
            <input 
                  type="text" 
                  placeholder="BRAND"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  />
            <input 
                  type="text" 
                  placeholder="IMG URL"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  />
            <input 
                  type="text" 
                  placeholder="PRICE"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  />
            <input 
                  type="text" 
                  placeholder="DESCRIPTION"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  />
             <Link to="/">
                 <button onClick={handleAddTopic}>SAVE</button>
             </Link>
        </div>
    );
};

export default AddProduct;