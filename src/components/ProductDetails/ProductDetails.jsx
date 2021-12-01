import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { productContext } from '../../context/ProductContext';
import comments from '../../assets/comment.jpg'
import "./ProductDetails.css"

const ProductDetails = () => {
    const { currentProduct, getDetails, deleteTopic, editTopic } = useContext(productContext)
    const [ deleteTask, setDeleteTask ] = useState({})

   let params = useParams().id

    useEffect(() => {
        getDetails(params)
    })

    useEffect(() => {
        setDeleteTask(currentProduct.id)
    }, [currentProduct])



    // function saveRating(){
    //     history.map(elem => {
    //        let totalCounter = 0 
    //        if(currentProduct.brand === elem.item.brand){
    //             totalCounter = elem.count + totalCounter
    //        }
    //        return totalCounter
    //     })
    // }
    // saveRating()
    



    return (
        <>
        <div className="detailsMainBlock">
            <div>
                <img src={currentProduct.img} alt="" />
                <div className="star">★★★★★</div>
            </div>

                <div className="detailsBlock">
                    <div className="detailsBrand">{currentProduct.brand}</div>
                    <div className="detailsPrice">{currentProduct.price} kgz</div>
                    <div className="detailsDescription">{currentProduct.description}</div>
                    <Link to="/">
                         <button onClick={() => deleteTopic(deleteTask)}>Delete</button>
                    </Link>
                    <Link to={`/edit/${currentProduct.id}`}>
                          <button onClick={() => editTopic(currentProduct.id)}>Edit</button>
                    </Link>
                </div>
        </div>
                    <div>
                        <Link to={`/comments/${currentProduct.id}`}>
                             <img src={comments} alt="" className="comments"/>
                        </Link>
                    </div>
        </>
    );
};

export default ProductDetails;