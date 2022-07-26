import React from 'react';
import { FcCancel } from 'react-icons/fc';

const CancelButton = ({ extraClass }) => {
    return (
        <button className={`btn btn-xs flex gap-x-2 ${extraClass}`}>
            <FcCancel className='text-lg' />
            Cancel
        </button>
    );
};

export default CancelButton;