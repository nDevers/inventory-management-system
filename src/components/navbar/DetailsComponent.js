import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

const DetailsComponent = ({ icon, name, subMenus }) => {
    return (
        <details className="group">
            <summary
                className="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:hover:text-gray-700"
            >
                {
                    icon
                }

                <span className="ml-3 text-sm font-medium"> {name} </span>

                <span
                    className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                >
                    <FiChevronDown className='text-lg' />
                </span>
            </summary>

            <nav className="mt-1.5 ml-6 flex flex-col">
                {
                    subMenus?.map((subMenu, index) => <span key={index}>{subMenu}</span>)
                }
            </nav>
        </details>
    );
};

export default DetailsComponent;