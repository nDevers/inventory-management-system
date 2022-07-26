import React from 'react';
import { MdOutlineAddBox } from 'react-icons/md';

const NewButton = ({ modalId, btnSize = 'btn-xs', title}) => {
    return (
        <label htmlFor={`${modalId}`} className={`btn ${btnSize} gap-x-2 modal-button`}>
            <MdOutlineAddBox className='text-lg' />
            {title}
        </label>
    );
};

NewButton.defaultProps = {
    title: "New"
}

export default NewButton;