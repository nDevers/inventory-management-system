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
        <div className="navbar bg-blue-300">
            <div className="navbar-start p-0 m-0">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <LinkComponents to={''} icon={<MdSpaceDashboard className='text-lg' />} name={'Dashboard'} />

                        <DetailsComponent
                            icon={<RiProductHuntFill className='text-lg' />}
                            name={'Products'}
                            subMenus={
                                [
                                    <LinkComponents
                                        to={'products/pharmacy'}
                                        icon={<MdLocalPharmacy className='text-lg' />}
                                        name={'Pharmacy'} />,

                                    <LinkComponents
                                        to={'products/non-pharmacy'}
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
                                        to={'returns/customers'}
                                        icon={<FaUser className='text-lg' />}
                                        name={'Customers'} />,

                                    <LinkComponents
                                        to={'returns/expires-or-damages'}
                                        icon={<RiFileDamageFill className='text-lg' />}
                                        name={'Expires / Damages'} />
                                ]
                            } />

                        <DetailsComponent
                            icon={<AiFillSetting className='text-lg' />}
                            name={'Setup'}
                            subMenus={
                                [
                                    <LinkComponents
                                        to={'setup/categories'}
                                        icon={<BiCategory className='text-lg' />}
                                        name={'Categories'} />,

                                    <LinkComponents
                                        to={'setup/unit-types'}
                                        icon={<BiUnite className='text-lg' />}
                                        name={'Unit Types'} />,

                                    <LinkComponents
                                        to={'setup/companies'}
                                        icon={<AiFillCopyrightCircle className='text-lg' />}
                                        name={'Companies'} />
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
                <Link className="btn btn-ghost text-xl uppercase flex items-center md:hidden lg:hidden p-0 m-0" to='/'>
                    <img className='w-12' src={logo} alt="logo" />
                    String LAB
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <div className='flex items-center text-sm breadcrumbs'>
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
                </ul>
            </div>
            <div className="navbar-end p-0 m-0">
                <div className="dropdown dropdown-end">
                    <div tabIndex="0" className='flex items-center cursor-pointer'>
                        <p className='mr-4 hidden md:block lg:block'>User Name</p>
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" alt='user avatar' />
                            </div>
                        </label>
                    </div>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <UserLinkComponents
                            to={'/profile'}
                            icon={<RiProfileLine className='text-lg' />}
                            name={'Profile'}
                            extraComponent={<span className="badge">New</span>} />

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