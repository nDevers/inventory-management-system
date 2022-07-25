import React from 'react';

const DashboardPageHeading = ({ name, value }) => {
    return (
        <h2 className='text-2xl text-center font-bold'>{name} : <span className='badge badge-lg badge-secondary'>{value}</span></h2>
    );
};

export default DashboardPageHeading;