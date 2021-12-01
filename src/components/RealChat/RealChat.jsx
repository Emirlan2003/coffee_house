import React, { useContext } from 'react';
import { authContext } from '../../context/AuthContext';

const RealChat = () => {
    const { auth, firestore } = useContext(authContext)
  
    
    return (
       <div>

       </div>
    );
};

export default RealChat;