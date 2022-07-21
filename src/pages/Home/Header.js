import React from 'react';

const Header = () => {
    return (
        <div className="hero min-h-screen bg-[#fbf3db]">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <button className="btn border-0 rounded-full bg-[#ffffff] mb-8 text-[#3b3b3b] px-8 font-bold text-lg">Inventory Management</button>
                    <h1 className="text-6xl font-bold text-[#3b3b3b]"><span className='text-[#edc14c]'>Inventory management</span> that’s seamless, easy and efficient.</h1>
                    <p className="py-6 text-[#6f5f65] text-lg">Cloud ERP software empowers you to effectively manage your biggest investment and get up-to-the-minute inventory knowledge.</p>
                    <button className="btn btn-primary border-0 bg-[#edc14c]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;