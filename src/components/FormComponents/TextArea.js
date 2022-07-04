import React from 'react';

const TextArea = ({ title = 'TextArea' }) => {
    return (
        <div>
            <label class="label">
                <span class="label-text">{title}</span>
            </label>
            <textarea type="text" placeholder="Type here" class="textarea textarea-xs textarea-bordered" />
        </div>
    );
};

export default TextArea;