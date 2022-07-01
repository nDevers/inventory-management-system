import React from 'react';
import Sidebar from '../../Components/Sidebar';
import UserNavbar from '../../Components/UserNavbar';

const Dashboard = () => {
    return (
        <div>
            <UserNavbar />
            <Sidebar />
        </div>
    );
};

export default Dashboard;