import React from 'react';
import Advantage from './Advantage';
import Agent from './Agent';
import Banner from './Banner';
import CarBlog from './CarBlog';
import Featured from './Featured';
import Footer from './Footer';
import GetInTouch from './GetInTouch';
import Offers from './Offers';
import Search from './Search';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Search />
            <Featured />
            <Advantage />
            <Offers />
            <Agent />
            <Testimonial />
            <CarBlog />
            <GetInTouch />
            <Footer />
        </div>
    );
};

export default Home;