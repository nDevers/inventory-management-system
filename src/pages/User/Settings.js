import React from 'react';
import Footer from '../../components/Footer';
import UserNavbar from '../../components/UserNavbar';

const Settings = () => {
    return (
        <div>
            <UserNavbar />
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32 text-gray-800">
                    <h2>Settings</h2>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Settings;