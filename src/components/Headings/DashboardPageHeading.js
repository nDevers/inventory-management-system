import React from 'react';

const DashboardPageHeading = ({ name, value, buttons }) => {
    return (
        <div className="flex justify-between items-center">
            <h2 className='text-2xl text-center font-bold'>{name} : <span className='badge badge-lg badge-secondary'>{value}</span></h2>

            <div className='flex items-center gap-x-4'>
                {
                    buttons.map(button => button)
                }
            </div>
        </div>
    );
};

export default DashboardPageHeading;