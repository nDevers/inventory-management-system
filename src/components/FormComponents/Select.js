import React from 'react';

const Select = ({ title = 'Select Field', name, isRequired, options = ['Option 1', 'Option 2'] }) => {
    return (
        <div className="div">
            <label className="label">
                <span className="label-text">{title}</span>
            </label>
            <select className="select select-bordered select-xs w-full max-w-xs" name={name} required={isRequired}>
                <option disabled>Choose an option</option>

                {
                    options.map((option, index) => <option key={index}>{option}</option>)
                }
            </select>
        </div>
    );
};

export default Select;