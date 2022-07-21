import React from 'react';
import { BiEdit } from 'react-icons/bi';

const EditButton = ({ itemId, modalId }) => {
    const editItem = _id => {
        console.log(`${_id} Clicked`);
    }

    return (
        <button onClick={() => editItem(itemId)} htmlFor={`${modalId}`}
            className="z-10 block p-1 text-blue-700 transition-all bg-blue-100 border-2 border-white rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
            type="button"
        >
            <BiEdit />
        </button>
    );
};

export default EditButton;