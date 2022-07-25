import React from 'react';
import DefaultNavbar from '../components/DefaultNavbar';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div>
            <DefaultNavbar />
            <section className='flex flex-col h-screen justify-center items-center'>
                <h2 className='lg:text-9xl md:text-7xl text-6xl text-secondary font-bold font-mono'>404</h2>
                <h3 className='lg:text-4xl md:text-3xl text-2xl text-accent font-semibold mt-8 mb-16'>Page Not Found!</h3>
                <a href='/' className="btn rounded-xs border-0 px-10 capitalize text-md bg-secondary text-white hover:opacity-70 hover:bg-secondary">Back to Home</a>
            </section>
            <Footer />
        </div>
    );
};

export default NotFound;