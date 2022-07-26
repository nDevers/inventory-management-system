import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import DeleteModal from '../modals/DeleteModal';

const DeleteButton = ({ deleteApiLink, itemId, name }) => {
    const deleteItem = _id => {
        const url = `${deleteApiLink}${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast(
                        <DeleteModal name={name} />
                    )
                };
            });
    };

    return (
        <button onClick={() => deleteItem(itemId)}
            className="z-10 block p-1 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full active:bg-red-50 hover:scale-110 focus:outline-none focus:ring"
            type="button"
        >
            <RiDeleteBin6Fill />
        </button>
    );
};

export default DeleteButton;