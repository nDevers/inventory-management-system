import React from 'react';
import DefaultNavbar from '../../components/DefaultNavbar';
import CustomersStories from './CustomersStories';
import FAQs from './FAQs';
import Features from './Features';
import Header from './Header';
import Intigration from './Intigration';

const Home = () => {
    return (
        <div>
            <DefaultNavbar />
            <Header />
            <Features />
            <Intigration />
            <CustomersStories />
            <FAQs />
        </div>
    );
};

export default Home;