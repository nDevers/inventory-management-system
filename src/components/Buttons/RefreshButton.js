import React from 'react';
import { FiRefreshCcw } from 'react-icons/fi';

const RefreshButton = () => {
    return (
        <button class="btn btn-sm flex gap-x-2">
            <FiRefreshCcw className='text-md' />
            Refresh
        </button>
    );
};

export default RefreshButton;