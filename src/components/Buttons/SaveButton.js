import React from 'react';
import { BsSave2 } from 'react-icons/bs';

const SaveButton = ({ btnSize = 'btn-sm', extraClass }) => {
    return (
        <button class={`btn ${btnSize} flex items-center gap-x-2 ${extraClass}`}>
            <BsSave2 className='text-md' />
            Save
        </button>
    );
};

export default SaveButton;