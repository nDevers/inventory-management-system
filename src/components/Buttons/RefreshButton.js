import React from 'react';
import { FiRefreshCcw } from 'react-icons/fi';

const RefreshButton = ({ btnSize }) => {
    console.log('refresh')

    return (
        <button class={`btn ${btnSize} flex gap-x-2`} onClick={() => window.location.reload(true)} >
            <FiRefreshCcw className='text-md' />
            Refresh
        </button >
    );
};

export default RefreshButton;