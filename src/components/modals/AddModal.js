import React from 'react';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';

const AddModal = ({ name = '' }) => {
    return (
        <div className="p-2 rounded-lg flex items-center gap-x-3">
            <BsFillArrowUpRightSquareFill className='text-green-500 text-3xl' />
            <p className='text-center text-black'>{name} Added successfully.</p>
        </div>
    );
};

export default AddModal;