import React from 'react';

const InfoCard = ({ name, status }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 bg-teal-500 text-white rounded-md p-2">
            <p className='font-semibold'>{name}</p>
            <h3 className="text-xl font-bold badge badge-lg badge-secondary">+{status}</h3>
        </div>
    );
};

export default InfoCard;