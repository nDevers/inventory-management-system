import React from 'react';
import Sidebar from '../../components/Sidebar';
import UserNavbar from '../../components/UserNavbar';

const Dashboard = () => {
    return (
        <div>
            <UserNavbar />
            <Sidebar />
        </div>
    );
};

export default Dashboard;