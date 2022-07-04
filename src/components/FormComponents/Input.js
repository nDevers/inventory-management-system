import React from 'react';

const Input = ({ title = 'Input Field' }) => {
    return (
        <div>
            <label class="label">
                <span class="label-text">{title}</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
        </div>
    );
};

export default Input;