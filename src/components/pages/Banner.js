import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <h1 className='banner-title'>Welcome to Car Cmart</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                <a className='btn-1' href="#">GET STARTED NOW</a>
            </div>
        </section>
    );
};

export default Banner;