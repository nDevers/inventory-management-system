import React from 'react';

const DoubleInput = ({ title = 'Double Input Field', name1, name2, type1, type2, placeholder1, placeholder2, value1, value2 }) => {
    return (
        <div>
            <label className="label">
                <span className="label-text">{title}</span>
            </label>
            <div className='grid grid-cols-2 gap-x-4'>
                <input name={name1} type={type1} placeholder={placeholder1} className="input input-xs input-bordered w-full max-w-xs" value={value1} />
                <input name2={name2} type={type2} placeholder={placeholder2} className="input input-xs input-bordered w-full max-w-xs" value={value2} />
            </div>
        </div>
    );
};

export default DoubleInput;