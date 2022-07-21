import React from 'react';

const Input = ({ title = 'Input Field', type = 'text', placeholder = 'Type Here', name, isRequired }) => {
    return (
        <div>
            <label className="label">
                <span className="label-text">{title}</span>
            </label>
            <input type={type} placeholder={placeholder} className="input input-xs input-bordered w-full max-w-xs" name={name} required={isRequired} />
        </div>
    );
};

export default Input;