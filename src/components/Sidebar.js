import React from 'react';
import { FaProductHunt } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div class="drawer drawer-mobile shadow-xl bg-[#191d24]">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content uppercase">
                    <li className='flex'>
                        <FaProductHunt className='text-white mr-4' />
                        <a>Products</a>
                    </li>
                    <li><a>Required Items</a></li>
                    <li><a>Orders</a></li>
                    <li><a>Purchases</a></li>
                    <li><a>Setup</a></li>
                    <li><a>Returns</a></li>
                    <li><a>Employees</a></li>
                    <li><a>Customers</a></li>
                    <li><a>Suppliers</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;