import React from 'react';

const Select = ({ title = 'Select Field' }) => {
    return (
        <div className="div">
            <label class="label">
                <span class="label-text">{title}</span>
            </label>
            <select class="select select-bordered select-xs w-full max-w-xs">
                <option disabled selected>Small</option>
                <option>Small Apple</option>
                <option>Small Orange</option>
                <option>Small Tomato</option>
            </select>
        </div>
    );
};

export default Select;