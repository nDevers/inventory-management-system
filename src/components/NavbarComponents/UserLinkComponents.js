import React from 'react';
import { Link } from 'react-router-dom';

const UserLinkComponents = ({ to, extraClass, icon, name, extraComponent }) => {
    return (
        <li>
            <Link to={to} class={`flex items-center gap-x-2 ${extraClass}`}>
                {icon}
                {name}
                {extraComponent}
            </Link>
        </li>
    );
};

export default UserLinkComponents;