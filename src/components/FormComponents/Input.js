import React from 'react';

const Input = ({ title = 'Input Field', name, isRequired }) => {
    return (
        <div>
            <label class="label">
                <span class="label-text">{title}</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" name={name} required={isRequired} />
        </div>
    );
};

export default Input;