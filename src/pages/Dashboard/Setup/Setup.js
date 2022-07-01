import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Setup = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex justify-between mb-6">
                <button onClick={() => navigate('setup-category')} class="btn modal-button gap-2">
                    New Category
                </button>
                <button class="btn gap-2">
                    Print
                </button>
            </div>
        </div>
    );
};

export default Setup;