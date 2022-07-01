import React from 'react';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { FiSettings, FiCornerRightDown } from 'react-icons/fi';
import { HiTemplate, HiBan } from 'react-icons/hi';
import { MdOutlineSummarize, MdOutlineAddBox } from 'react-icons/md';
import { TbTruckReturn, TbTruckDelivery, TbBrandProducthunt } from 'react-icons/tb';
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
                <div class="flex flex-col justify-between border-r w-60">
                    <div class="p-2">
                        <nav class="flex flex-col mt-6 space-y-1">
                            <Link
                                to=""
                                class="flex items-center px-4 py-2 text-gray-700 rounded-lg"
                            >
                                <MdOutlineSummarize className='text-lg' />

                                <span class="ml-3 text-sm font-medium"> Dashboard </span>
                            </Link>

                            <details class="group">
                                <summary
                                    class="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:hover:text-gray-700"
                                >
                                    <RiProductHuntFill className='text-lg' />

                                    <span class="ml-3 text-sm font-medium"> Products </span>

                                    <span
                                        class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                                    >
                                        <FiCornerRightDown className='text-lg' />
                                    </span>
                                </summary>

                                <nav class="mt-1.5 ml-6 flex flex-col">
                                    <a
                                        href=""
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <MdOutlineAddBox className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Create Product </span>
                                    </a>

                                    <a
                                        href=""
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <TbBrandProducthunt className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> All Products </span>
                                    </a>

                                    <a
                                        href=""
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <HiBan className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Banned Products </span>
                                    </a>
                                </nav>
                            </details>

                            <Link
                                to=""
                                class="flex items-center px-4 py-2 text-gray-700 rounded-lg"
                            >
                                <HiTemplate className='text-lg' />

                                <span class="ml-3 text-sm font-medium"> Required Items </span>
                            </Link>

                            <details class="group">
                                <summary
                                    class="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:hover:text-gray-700"
                                >
                                    <RiShoppingCartFill className='text-lg' />

                                    <span class="ml-3 text-sm font-medium"> Orders </span>

                                    <span
                                        class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <nav class="mt-1.5 ml-6 flex flex-col">
                                    <a
                                        href=""
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <MdOutlineAddBox className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Create Order </span>
                                    </a>

                                    <a
                                        href=""
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5 opacity-75"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>

                                        <span class="ml-3 text-sm font-medium"> All Orders </span>
                                    </a>
                                </nav>
                            </details>

                            <Link
                                to=""
                                class="flex items-center px-4 py-2 text-gray-700 rounded-lg"
                            >
                                <BiPurchaseTagAlt className='text-lg' />

                                <span class="ml-3 text-sm font-medium"> Purchases </span>
                            </Link>

                            <details class="group">
                                <summary
                                    class="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:hover:text-gray-700"
                                >
                                    <FiSettings className='text-lg' />

                                    <span class="ml-3 text-sm font-medium"> Setup </span>

                                    <span
                                        class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <nav class="mt-1.5 ml-6 flex flex-col">
                                    <a
                                        href=""
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <MdOutlineAddBox className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Add Category </span>
                                    </a>

                                    <a
                                        href=""
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <MdOutlineAddBox className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Add Admin </span>
                                    </a>

                                    <a
                                        href=""
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5 opacity-75"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>

                                        <span class="ml-3 text-sm font-medium"> Settings </span>
                                    </a>
                                </nav>
                            </details>

                            <Link
                                to=""
                                class="flex items-center px-4 py-2 text-gray-700 rounded-lg"
                            >
                                <TbTruckReturn className='text-lg' />

                                <span class="ml-3 text-sm font-medium"> Returns </span>
                            </Link>

                            <Link
                                to=""
                                class="flex items-center px-4 py-2 text-gray-700 rounded-lg"
                            >
                                <RiAdminFill className='text-lg' />

                                <span class="ml-3 text-sm font-medium"> Employees </span>
                            </Link>

                            <Link
                                to=""
                                class="flex items-center px-4 py-2 text-gray-700 rounded-lg"
                            >
                                <FaUsers className='text-lg' />

                                <span class="ml-3 text-sm font-medium"> Customers </span>
                            </Link>

                            <details class="group">
                                <summary
                                    class="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:hover:text-gray-700"
                                >
                                    <TbTruckDelivery className='text-lg' />

                                    <span class="ml-3 text-sm font-medium"> Suppliers </span>

                                    <span
                                        class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <nav class="mt-1.5 ml-6 flex flex-col">
                                    <a
                                        href=""
                                        class="flex items-center px-4 py-2  rounded-lg hover:hover:text-gray-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5 opacity-75"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                                            />
                                        </svg>

                                        <span class="ml-3 text-sm font-medium"> Banned Suppliers </span>
                                    </a>

                                    <a
                                        href=""
                                        class="flex items-center px-4 py-2  rounded-lg hover:hover:text-gray-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5 opacity-75"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>

                                        <span class="ml-3 text-sm font-medium"> Calendar </span>
                                    </a>
                                </nav>
                            </details>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;