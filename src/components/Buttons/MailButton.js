import React from 'react';
import { AiFillMail } from 'react-icons/ai';

const MailButton = () => {
    return (
        <button htmlFor='update-pharmacy-product' className={`gap-x-2 modal-button z-10 block p-1 text-blue-700 transition-all bg-blue-100 border-2 border-white rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring`}>
            <AiFillMail />
        </button>
    );
};

export default MailButton;