import React from 'react';
import { FaProductHunt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div class="drawer drawer-mobile shadow-xl">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content uppercase">
                    <li className='flex'><Link to=''>Summary</Link></li>
                    <li className='flex'><Link to='products'>Products</Link></li>
                    <li className='flex'><Link to='create-product'>Create Product</Link></li>
                    <li><Link to='required-items'>Required Items</Link></li>
                    <li><Link to='orders'>Orders</Link></li>
                    <li><Link to='purchases'>Purchases</Link></li>
                    <li><Link to='setup'>Setup</Link></li>
                    <li><Link to='returns'>Returns</Link></li>
                    <li><Link to='employees'>Employees</Link></li>
                    <li><Link to='customers'>Customers</Link></li>
                    <li><Link to='suppliers'>Suppliers</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;