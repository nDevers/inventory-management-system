import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponents = ({ to, icon, name }) => {
    return (
        <Link
            to={to}
            className="flex items-center px-4 py-2 text-gray-700 rounded-lg"
        >
            {
                icon
            }

            <span className="ml-3 text-sm font-medium"> {name} </span>
        </Link>
    );
};

export default LinkComponents;