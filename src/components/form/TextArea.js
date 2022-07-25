import React from 'react';

const TextArea = ({ title = 'TextArea' }) => {
    return (
        <div>
            <label className="label">
                <span className="label-text">{title}</span>
            </label>
            <textarea type="text" placeholder="Type here" className="textarea textarea-xs textarea-bordered" />
        </div>
    );
};

export default TextArea;