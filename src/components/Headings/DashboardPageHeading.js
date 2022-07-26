import React from 'react';

const DashboardPageHeading = ({ name, value, buttons }) => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-y-4 mb-6">
            <h2 className='lg:text-2xl md:text-xl text-lg text-center font-bold'>
                {name} : <span className='badge badge-lg badge-secondary'>{value}</span>
            </h2>

            <div className='flex items-center gap-x-4'>
                {
                    buttons.map(button => button)
                }
            </div>
        </div>
    );
};

export default DashboardPageHeading;