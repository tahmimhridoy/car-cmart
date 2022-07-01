import React from 'react';
import Advantage from './Advantage';
import Banner from './Banner';
import Featured from './Featured';
import Offers from './Offers';
import Search from './Search';

const Home = () => {
    return (
        <div>
            <Banner />
            <Search />
            <Featured />
            <Advantage />
            <Offers />
        </div>
    );
};

export default Home;