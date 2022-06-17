import React from 'react';
import loadingGif from '../assets/gif/loading.gif';

const Loading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <img src={loadingGif} alt="loading" />
        </div>
    );
};

export default Loading;