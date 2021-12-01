import React from 'react';
import img from '../../assets/images/about-img.jpeg'
import './about.css'

const About = () => {
    return (
        <div className="aboutBlock" id="about">
            <div  className="aboutChildBlock">
                <h1 className="about">ABOUT</h1><h1 className="us">US</h1>
            </div>
            <div className="aboutMainBlock2">
                <img src={img} alt="" className="aboutImg"/>
                <div className="aboutBlock2">
                    <h1>What Makes Our Coffee Special?</h1>
                    <p>There are two different types of coffee beans: Arabica and Robusta. Colombia, with its ideal topography and climate, is one of the few countries producing 100% Arabica. Arabica coffee is considered the best coffee because it has a sweeter and lighter taste, as well as less caffeine and stronger acidic notes.</p>
                </div>
            </div>
        </div>
    );
};

export default About;