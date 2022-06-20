import React from 'react';
import DefaultNavbar from '../../components/DefaultNavbar';
import Features from './Features';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <DefaultNavbar />
            <Header />
            <Features />
        </div>
    );
};

export default Home;