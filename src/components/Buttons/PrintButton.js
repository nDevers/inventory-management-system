import React from 'react';
import { BsPrinter } from 'react-icons/bs';

const PrintButton = ({ btnSize = 'btn-sm' }) => {
    return (
        <button class={`btn ${btnSize} gap-x-2`}>
            <BsPrinter className='text-md' />
            Print
        </button>
    );
};

export default PrintButton;