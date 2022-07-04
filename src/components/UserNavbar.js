import React from 'react';
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png';
import { RiSettings5Fill, RiProfileLine, RiLogoutBoxRFill, RiProductHuntFill, RiProfileFill, RiShoppingCartFill, RiFileDamageFill, RiAdminFill } from 'react-icons/ri';
import UserLinkComponents from './NavbarComponents/UserLinkComponents';
import LinkComponents from './NavbarComponents/LinkComponents';
import { MdLocalPharmacy, MdSpaceDashboard } from 'react-icons/md';
import DetailsComponent from './NavbarComponents/DetailsComponent';
import { BiCategory, BiGitPullRequest, BiUnite } from 'react-icons/bi';
import { AiFillCopyrightCircle, AiFillCreditCard, AiFillSetting } from 'react-icons/ai';
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb';
import { FaThList, FaUser, FaUsers, FaRegFolder } from 'react-icons/fa';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';

const UserNavbar = () => {
    return (
        <div class="navbar">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <LinkComponents to={''} icon={<MdSpaceDashboard className='text-lg' />} name={'Dashboard'} />

                        <DetailsComponent
                            icon={<RiProductHuntFill className='text-lg' />}
                            name={'Products'}
                            subMenus={
                                [
                                    <LinkComponents
                                        to={'products/non-pharmacy'}
                                        icon={<MdLocalPharmacy className='text-lg' />}
                                        name={'Pharmacy'} />,

                                    <LinkComponents
                                        to={'products/pharmacy'}
                                        icon={<RiProfileFill className='text-lg' />}
                                        name={'Non Pharmacy'} />
                                ]
                            } />

                        <DetailsComponent
                            icon={<BiGitPullRequest className='text-lg' />}
                            name={'Requested Items'}
                            subMenus={
                                [
                                    <LinkComponents
                                        to={'requested-items/pharmacy'}
                                        icon={<MdLocalPharmacy className='text-lg' />}
                                        name={'Pharmacy'} />,

                                    <LinkComponents
                                        to={'requested-items/non-pharmacy'}
                                        icon={<RiProfileFill className='text-lg' />}
                                        name={'Non Pharmacy'} />
                                ]
                            } />

                        <DetailsComponent
                            icon={<RiShoppingCartFill className='text-lg' />}
                            name={'Orders'}
                            subMenus={
                                [
                                    <LinkComponents
                                        to={'orders/pharmacy'}
                                        icon={<MdLocalPharmacy className='text-lg' />}
                                        name={'Pharmacy'} />,

                                    <LinkComponents
                                        to={'orders/non-pharmacy'}
                                        icon={<RiProfileFill className='text-lg' />}
                                        name={'Non Pharmacy'} />
                                ]
                            } />

                        <DetailsComponent
                            icon={<AiFillCreditCard className='text-lg' />}
                            name={'Purchases'}
                            subMenus={
                                [
                                    <LinkComponents
                                        to={'purchases/pharmacy'}
                                        icon={<MdLocalPharmacy className='text-lg' />}
                                        name={'Pharmacy'} />,

                                    <LinkComponents
                                        to={'purchases/non-pharmacy'}
                                        icon={<RiProfileFill className='text-lg' />}
                                        name={'Non Pharmacy'} />
                                ]
                            } />

                        <DetailsComponent
                            icon={<TbTruckReturn className='text-lg' />}
                            name={'Returns'}
                            subMenus={
                                [
                                    <LinkComponents
                                        to={'returns/customer'}
                                        icon={<FaUser className='text-lg' />}
                                        name={'Customer'} />,

                                    <LinkComponents
                                        to={'returns/expire-or-damage'}
                                        icon={<RiFileDamageFill className='Expire / Damage' />}
                                        name={'Customer'} />
                                ]
                            } />

                        <DetailsComponent
                            icon={<AiFillSetting className='text-lg' />}
                            name={'Setup'}
                            subMenus={
                                [
                                    <LinkComponents
                                        to={'setup/category'}
                                        icon={<BiCategory className='text-lg' />}
                                        name={'Category'} />,

                                    <LinkComponents
                                        to={'setup/unit-type'}
                                        icon={<BiUnite className='text-lg' />}
                                        name={'Unit Type'} />,

                                    <LinkComponents
                                        to={'setup/company'}
                                        icon={<AiFillCopyrightCircle className='text-lg' />}
                                        name={'Company'} />
                                ]
                            } />

                        <LinkComponents to={'employees'} icon={<RiAdminFill className='text-lg' />} name={'Employees'} />

                        <LinkComponents to={'customers'} icon={<FaUsers className='text-lg' />} name={'Customers'} />

                        <DetailsComponent
                            icon={<TbTruckDelivery className='text-lg' />}
                            name={'Suppliers'}
                            subMenus={
                                [
                                    <LinkComponents
                                        to={'suppliers/list'}
                                        icon={<FaThList className='text-md' />}
                                        name={'List'} />,

                                    <LinkComponents
                                        to={'suppliers/payment'}
                                        icon={<BsCreditCard2BackFill className='text-lg' />}
                                        name={'Payment'} />,

                                    <LinkComponents
                                        to={'suppliers/documents'}
                                        icon={<HiDocumentText className='text-lg' />}
                                        name={'Documents'} />
                                ]
                            } />
                    </ul>
                </div>
                <Link class="btn btn-ghost text-xl uppercase flex items-center" to='/'>
                    <img className='w-12' src={logo} alt="logo" />
                    String LAB
                </Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <div className='flex items-center'>
                        <div class="text-sm breadcrumbs">
                            <ul>
                                <UserLinkComponents
                                    to={'/'}
                                    icon={<FaRegFolder className='text-md' />}
                                    name={'Home'} />

                                <UserLinkComponents
                                    to={'/dashboard'}
                                    icon={<MdSpaceDashboard className='text-md' />}
                                    name={'Dashboard'} />

                                <UserLinkComponents
                                    to={'/dashboard'}
                                    icon={<MdSpaceDashboard className='text-md' />}
                                    name={'Dashboard'} />
                            </ul>
                        </div>
                    </div>
                </ul>
            </div>
            <div class="navbar-end">
                <div class="dropdown dropdown-end">
                    <div tabindex="0" className='flex items-center cursor-pointer'>
                        <p className='mr-4'>User Name</p>
                        <label class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                    </div>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <UserLinkComponents
                            to={'/profile'}
                            icon={<RiProfileLine className='text-lg' />}
                            name={'Profile'}
                            extraComponent={<span class="badge">New</span>} />

                        <UserLinkComponents
                            to={'/settings'}
                            icon={<RiSettings5Fill className='text-lg' />}
                            name={'Settings'} />

                        <UserLinkComponents
                            to={'/'}
                            icon={<RiLogoutBoxRFill className='text-lg' />}
                            name={'Logout'} />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserNavbar;