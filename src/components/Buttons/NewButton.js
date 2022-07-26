import React from 'react';
import { MdOutlineAddBox } from 'react-icons/md';

const NewButton = ({ modalId, btnSize = 'btn-xs' }) => {
    return (
        <label htmlFor={`${modalId}`} className={`btn ${btnSize} gap-x-2 modal-button`}>
            <MdOutlineAddBox className='text-lg' />
            New
        </label>
    );
};

export default NewButton;