import React from 'react';

const ModalCloseButton = ({ modalId }) => {
    return (
        <label for={`${modalId}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    );
};

export default ModalCloseButton;