import React, { useContext, useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { productContext } from '../../context/ProductContext';
import './Comments.css'



const Comments = () => {
    const { getComments, addComments, comments, currentProduct } = useContext(productContext)
    const [ com, setCom ] = useState('')

   

    useEffect(() => {
        getComments()
    }, [])



    const handleSave = () => {
         let newObj = {
             comment: com
         }
         addComments(newObj)
         setCom('')
    }


    const {
        handleLogout,
        user: { email },
      } = useAuth();
      console.log({ email });



    return (
        <>
        <div  className="comBlock">
            <input 
                  type="text" 
                  value={com}
                  onChange={(e) => setCom(e.target.value)}
                  className="comInput"
                  />
            <button onClick={handleSave}>Send</button>
        </div>

        <div className="jsonBlock">
                {comments ? comments.map(item => (
                     <div className="task">
                             <div className="mainTaskBlock">
                                 <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt="" />
                                 <h2>{email}</h2>
                            </div>
                          <div className="mainTask">{item.comment}</div>
                      </div>
                )) : <h1>loading</h1>}
            </div>
        </>
    );
};

export default Comments;