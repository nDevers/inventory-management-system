import React from 'react';

const ModalCloseButton = ({ modalId }) => {
    return (
        <label htmlFor={`${modalId}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    );
};

export default ModalCloseButton;