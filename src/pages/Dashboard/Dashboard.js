import React from 'react';
import Sidebar from '../../components/Sidebar';
import UserNavbar from '../../components/UserNavbar';

const Dashboard = () => {
    return (
        <div className='mx-1 md:mx-3'>
            <UserNavbar />
            <Sidebar />
        </div>
    );
};

export default Dashboard;