import React from 'react';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { HiTemplate } from 'react-icons/hi';
import { MdOutlineSummarize, MdOutlineAddBox } from 'react-icons/md';
import { TbTruckReturn, TbTruckDelivery } from 'react-icons/tb';
import { RiProductHuntFill, RiAdminFill, RiShoppingCartFill } from 'react-icons/ri';
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
                <ul class="menu p-4 overflow-y-auto w-52 text-[13px] font-semibold uppercase">
                    <li className='flex'>
                        <Link to=''>
                            <MdOutlineSummarize className='text-lg' />
                            Summary
                        </Link>
                    </li>
                    <li className='flex'>
                        <Link to='products'>
                            <RiProductHuntFill className='text-lg' />
                            Products
                        </Link>
                    </li>
                    <li className='flex'>
                        <Link to='create-product'>
                            <MdOutlineAddBox className='text-lg' />
                            Create Product
                        </Link>
                    </li>
                    <li>
                        <Link to='required-items'>
                            <HiTemplate className='text-lg' />
                            Required Items
                        </Link>
                    </li>
                    <li>
                        <Link to='orders'>
                            <RiShoppingCartFill className='text-lg' />
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link to='purchases'>
                            <BiPurchaseTagAlt className='text-lg' />
                            Purchases
                        </Link>
                    </li>
                    <li>
                        <Link to='setup'>
                            <FiSettings className='text-lg' />
                            Setup
                        </Link>
                    </li>
                    <li>
                        <Link to='returns'>
                            <TbTruckReturn className='text-lg' />
                            Returns
                        </Link>
                    </li>
                    <li>
                        <Link to='employees'>
                            <RiAdminFill className='text-lg' />
                            Employees
                        </Link>
                    </li>
                    <li>
                        <Link to='customers'>
                            <FaUsers className='text-lg' />
                            Customers
                        </Link>
                    </li>
                    <li>
                        <Link to='suppliers'>
                            <TbTruckDelivery className='text-lg' />
                            Suppliers
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;