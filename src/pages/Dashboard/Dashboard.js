import React from 'react';
import Sidebar from '../../Components/Sidebar';
import UserNavbar from '../../Components/UserNavbar';

const Dashboard = () => {
    return (
        <div className='mx-1 md:mx-3'>
            <UserNavbar />
            <Sidebar />
        </div>
    );
};

export default Dashboard;