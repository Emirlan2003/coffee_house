import React, { useContext, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { productContext } from '../../context/ProductContext';
import './HistoryOrder.css'

const HistoryOrder = () => {
    const { history, getHistory } = useContext(productContext)


    useEffect(() => {
        getHistory()
    }, [])


    
    

    const {
        handleLogout,
        user: { email },
      } = useAuth();




    let date = new Date().getDate()

    return (
        <>
            <table className="tableH">
                <thead>
                   <tr>
                       <th>Data</th>
                       <th>Image</th>
                       <th>Brand</th>
                       <th>Count</th>
                       <th>SubPrice</th>
                       <th>Customer</th>
                   </tr>
                </thead>
                <tbody className="tbodyH">
                    {history.map(elem => (
                        <>
                        <tr key={elem.id}>
                            <td>{date}.12.2021</td>
                            <td><img src={elem.item.img} alt="" className="coffeeTable"/></td>
                            <td>{elem.item.brand}</td>
                            <td>{elem.count}</td>
                            <td>{elem.item.price} kgz</td>
                            <td>{email}</td>
                        </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default HistoryOrder;