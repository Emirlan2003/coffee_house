import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';
import Auth from './components/Auth/Auth';
import Basket from './components/Basket/Basket';
import Check from './components/Check/Check';
import Chosen from './components/Chosen/Chosen';
import Comments from './components/Comments/Comments';
import ProductEdit from './components/Edit/ProductEdit';
import Header from './components/Header/Header';
import HistoryOrder from './components/HistoryOrder/HistoryOrder';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Order from './components/Order/Order';
import Payment from './components/Payment/Payment';
import ProductDetails from './components/ProductDetails/ProductDetails';
import RealChat from './components/RealChat/RealChat';
import Subscribe from './components/Subscribe/Subscribe';
import AuthContextProvider from './context/AuthContext';
import ProductContextProvider from './context/ProductContext';


const MainRoutes = () => {
    return (
        <ProductContextProvider>
            <AuthContextProvider>
                <BrowserRouter>
                    <Header />
                     <Routes>
                         <Route path='/' element={<Home />} />
                         <Route path="/add" element={<AddProduct />} />
                         <Route path="/details/:id" element={<ProductDetails />} />
                         <Route path="/edit/:id" element={<ProductEdit />} />
                         <Route path="/auth" element={<Auth/>} />
                         <Route path="/chosen" element={<Chosen />} />
                         <Route path="/comments/:id" element={<Comments />} />
                         <Route path="/basket" element={<Basket />} />
                         <Route path="/chat" element={<RealChat />} />
                         <Route path="/order" element={<Order />} />
                         <Route path="/payment" element={<Payment />} />
                         <Route path="/check" element={<Check />} />
                         <Route path="/history" element={<HistoryOrder />} />
                         <Route path="/menu" element={<Menu />} />
                         <Route path="/sub" element={<Subscribe />} />
                     </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </ProductContextProvider>
    );
};

export default MainRoutes;