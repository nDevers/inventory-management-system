import React from 'react';

const Select = ({ title = 'Select Field', name, isRequired }) => {
    return (
        <div className="div">
            <label className="label">
                <span className="label-text">{title}</span>
            </label>
            <select className="select select-bordered select-xs w-full max-w-xs" name={name} required={isRequired}>
                <option disabled selected>Small</option>
                <option>Small Apple</option>
                <option>Small Orange</option>
                <option>Small Tomato</option>
            </select>
        </div>
    );
};

export default Select;