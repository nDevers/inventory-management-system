import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const UploadButton = ({ btnSize = 'btn-xs' }) => {
    return (
        <button onClick={() => window.print()} className={`btn ${btnSize} gap-x-2`}>
            <FaCloudUploadAlt className='text-md' />
            Upload
        </button>
    );
};

export default UploadButton;