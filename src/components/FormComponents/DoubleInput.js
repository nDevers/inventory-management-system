import React from 'react';

const DoubleInput = ({ title = 'Double Input Field' }) => {
    return (
        <div>
            <label class="label">
                <span class="label-text">{title}</span>
            </label>
            <div className='grid grid-cols-2 gap-x-4'>
                <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
            </div>
        </div>
    );
};

export default DoubleInput;