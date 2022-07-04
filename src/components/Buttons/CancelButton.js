import React from 'react';
import { FcCancel } from 'react-icons/fc';

const CancelButton = () => {
    return (
        <button class="btn btn-sm flex gap-x-2">
            <FcCancel className='text-lg' />
            Cancel
        </button>
    );
};

export default CancelButton;