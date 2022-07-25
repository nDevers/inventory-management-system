import React from 'react';
import { BsSave2 } from 'react-icons/bs';

const SaveButton = ({ btnSize = 'btn-xs', extraClass }) => {
    return (
        <button className={`btn ${btnSize} flex items-center gap-x-2 ${extraClass}`}>
            <BsSave2 className='text-md' />
            Save
        </button>
    );
};

export default SaveButton;