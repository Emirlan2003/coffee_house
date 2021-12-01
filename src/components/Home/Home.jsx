import React from 'react';
import About from '../AboutUs/About';
import MainBody from '../MainBody/MainBody';
import ProductList from '../ProductList/ProductList'
import Recomended from '../Recomended/Recomended';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
           <MainBody />
           <About />
           <ProductList />
           <Recomended />
        </div>
    );
};

export default Home;