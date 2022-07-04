import React from 'react';
import { BsSave2 } from 'react-icons/bs';

const SaveButton = () => {
    return (
        <button class="btn btn-sm flex items-center gap-x-2">
            <BsSave2 className='text-md' />
            Save
        </button>
    );
};

export default SaveButton;