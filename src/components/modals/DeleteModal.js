import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const DeleteModal = ({ name = '' }) => {
    return (
        <div className="p-2 rounded-lg flex items-center gap-x-3">
            <AiFillDelete className='text-red-500 text-3xl' />
            <p className='text-black'>{name} Deleted successfully.</p>
        </div>
    );
};

export default DeleteModal;