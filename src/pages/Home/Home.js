import React from 'react';
import DefaultNavbar from '../../Components/DefaultNavbar';
import Footer from '../../Components/Footer';
import CustomersStories from './CustomersStories';
import FAQs from './FAQs';
import Features from './Features';
import Header from './Header';
import Integration from './Integration';

const Home = () => {
    return (
        <div>
            <DefaultNavbar />
            <Header />
            <Features />
            <Integration />
            <CustomersStories />
            <FAQs />
            <Footer />
        </div>
    );
};

export default Home;