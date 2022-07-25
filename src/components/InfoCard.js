import React from 'react';

const InfoCard = ({ extraClass, name, status }) => {
    return (
        <div className={`${extraClass} flex flex-col items-center justify-center gap-2 bg-teal-400 text-white rounded-md p-2`}>
            <p className='font-semibold text-center'>{name}</p>
            <h3 className="text-xl font-bold badge badge-lg badge-secondary">{status}</h3>
        </div>
    );
};

export default InfoCard;