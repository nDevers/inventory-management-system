import React from 'react';
import { AiFillCreditCard, AiFillCopyrightCircle, AiFillSetting } from 'react-icons/ai';
import { BiCategory, BiUnite, BiGitPullRequest } from 'react-icons/bi';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import { FaUsers, FaThList, FaUser } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { HiDocumentText } from 'react-icons/hi';
import { MdLocalPharmacy, MdSpaceDashboard } from 'react-icons/md';
import { TbTruckReturn, TbTruckDelivery } from 'react-icons/tb';
import { RiProductHuntFill, RiAdminFill, RiShoppingCartFill, RiProfileFill, RiFileDamageFill } from 'react-icons/ri';
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
                <div class="flex flex-col justify-between">
                    <div class="p-2">
                        <nav class="flex flex-col mt-6 space-y-1">
                            <Link
                                to=""
                                class="flex items-center px-4 py-2 text-gray-700 rounded-lg"
                            >
                                <MdSpaceDashboard className='text-lg' />

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
                                        <FiChevronDown className='text-lg' />
                                    </span>
                                </summary>

                                <nav class="mt-1.5 ml-6 flex flex-col">
                                    <Link
                                        to="products/pharmacy"
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <MdLocalPharmacy className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Pharmacy </span>
                                    </Link>

                                    <Link
                                        to="products/non-pharmacy"
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <RiProfileFill className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Non Pharmacy </span>
                                    </Link>
                                </nav>
                            </details>

                            <details class="group">
                                <summary
                                    class="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:hover:text-gray-700"
                                >
                                    <BiGitPullRequest className='text-lg' />

                                    <span class="ml-3 text-sm font-medium"> Requested Items </span>

                                    <span
                                        class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                                    >
                                        <FiChevronDown className='text-lg' />
                                    </span>
                                </summary>

                                <nav class="mt-1.5 ml-6 flex flex-col">
                                    <Link
                                        to="requested-items/pharmacy"
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <MdLocalPharmacy className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Pharmacy </span>
                                    </Link>

                                    <Link
                                        to="requested-items/non-pharmacy"
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <RiProfileFill className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Non Pharmacy </span>
                                    </Link>
                                </nav>
                            </details>

                            <details class="group">
                                <summary
                                    class="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:hover:text-gray-700"
                                >
                                    <RiShoppingCartFill className='text-lg' />

                                    <span class="ml-3 text-sm font-medium"> Orders </span>

                                    <span
                                        class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                                    >
                                        <FiChevronDown className='text-lg' />
                                    </span>
                                </summary>

                                <nav class="mt-1.5 ml-6 flex flex-col">
                                    <Link
                                        to="orders/pharmacy"
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <MdLocalPharmacy className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Pharmacy </span>
                                    </Link>

                                    <Link
                                        to="orders/non-pharmacy"
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <RiProfileFill className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Non Pharmacy </span>
                                    </Link>
                                </nav>
                            </details>

                            <details class="group">
                                <summary
                                    class="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:hover:text-gray-700"
                                >
                                    <AiFillCreditCard className='text-lg' />

                                    <span class="ml-3 text-sm font-medium"> Purchases </span>

                                    <span
                                        class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                                    >
                                        <FiChevronDown className='text-lg' />
                                    </span>
                                </summary>

                                <nav class="mt-1.5 ml-6 flex flex-col">
                                    <Link
                                        to="purchases/pharmacy"
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <MdLocalPharmacy className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Pharmacy </span>
                                    </Link>

                                    <Link
                                        to="purchases/non-pharmacy"
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <RiProfileFill className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Non Pharmacy </span>
                                    </Link>
                                </nav>
                            </details>

                            <details class="group">
                                <summary
                                    class="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:hover:text-gray-700"
                                >
                                    <TbTruckReturn className='text-lg' />

                                    <span class="ml-3 text-sm font-medium"> Returns </span>

                                    <span
                                        class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                                    >
                                        <FiChevronDown className='text-lg' />
                                    </span>
                                </summary>

                                <nav class="mt-1.5 ml-6 flex flex-col">
                                    <Link
                                        to="returns/customer"
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <FaUser className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Customer </span>
                                    </Link>

                                    <Link
                                        to="returns/expire-or-damage"
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <RiFileDamageFill className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Expire / Damage </span>
                                    </Link>
                                </nav>
                            </details>

                            <details class="group">
                                <summary
                                    class="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:hover:text-gray-700"
                                >
                                    <AiFillSetting className='text-lg' />

                                    <span class="ml-3 text-sm font-medium"> Setup </span>

                                    <span
                                        class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                                    >
                                        <FiChevronDown className='text-lg' />
                                    </span>
                                </summary>

                                <nav class="mt-1.5 ml-6 flex flex-col">
                                    <Link
                                        to="setup/category"
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <BiCategory className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Category </span>
                                    </Link>

                                    <Link
                                        to="setup/unit-type"
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <BiUnite className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Unit Type </span>
                                    </Link>

                                    <Link
                                        to="setup/company"
                                        class="flex items-center px-4 py-2 rounded-lg hover:hover:text-gray-700"
                                    >
                                        <AiFillCopyrightCircle className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Company </span>
                                    </Link>
                                </nav>
                            </details>

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
                                        <FiChevronDown className='text-lg' />
                                    </span>
                                </summary>

                                <nav class="mt-1.5 ml-6 flex flex-col">
                                    <Link
                                        to="suppliers/list"
                                        class="flex items-center px-4 py-2  rounded-lg hover:hover:text-gray-700"
                                    >
                                        <FaThList className='text-md' />

                                        <span class="ml-3 text-sm font-medium"> List </span>
                                    </Link>

                                    <Link
                                        to="suppliers/payment"
                                        class="flex items-center px-4 py-2  rounded-lg hover:hover:text-gray-700"
                                    >
                                        <BsCreditCard2BackFill className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Payment </span>
                                    </Link>

                                    <Link
                                        to="suppliers/documents"
                                        class="flex items-center px-4 py-2  rounded-lg hover:hover:text-gray-700"
                                    >
                                        <HiDocumentText className='text-lg' />

                                        <span class="ml-3 text-sm font-medium"> Documents </span>
                                    </Link>
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