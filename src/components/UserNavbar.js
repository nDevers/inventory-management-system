import React from 'react';
import logo from '../assets/logo.png';
import { RiSettings5Fill, RiProfileLine, RiLogoutBoxRFill, RiProductHuntFill, RiProfileFill, RiShoppingCartFill, RiFileDamageFill, RiAdminFill } from 'react-icons/ri';
import { MdLocalPharmacy, MdSpaceDashboard } from 'react-icons/md';
import { BiCategory, BiGitPullRequest, BiUnite } from 'react-icons/bi';
import { AiFillCopyrightCircle, AiFillCreditCard, AiFillSetting } from 'react-icons/ai';
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb';
import { FaThList, FaUser, FaUsers, FaRegFolder } from 'react-icons/fa';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';
import DetailsComponent from './navbar/DetailsComponent';
import LinkComponents from './navbar/LinkComponents';
import UserLinkComponents from './navbar/UserLinkComponents';

const UserNavbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
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
                                        key={1}
                                        to={'products/pharmacy'}
                                        icon={<MdLocalPharmacy className='text-lg' />}
                                        name={'Pharmacy'} />,

                                    <LinkComponents
                                        key={2}
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
                                        key={3}
                                        to={'requested-items/pharmacy'}
                                        icon={<MdLocalPharmacy className='text-lg' />}
                                        name={'Pharmacy'} />,

                                    <LinkComponents
                                        key={4}
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
                                        key={5}
                                        to={'orders/pharmacy'}
                                        icon={<MdLocalPharmacy className='text-lg' />}
                                        name={'Pharmacy'} />,

                                    <LinkComponents
                                        key={6}
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
                                        key={7}
                                        to={'purchases/pharmacy'}
                                        icon={<MdLocalPharmacy className='text-lg' />}
                                        name={'Pharmacy'} />,

                                    <LinkComponents
                                        key={8}
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
                                        key={9}
                                        to={'returns/customer'}
                                        icon={<FaUser className='text-lg' />}
                                        name={'Customer'} />,

                                    <LinkComponents
                                        key={10}
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
                                        key={11}
                                        to={'setup/category'}
                                        icon={<BiCategory className='text-lg' />}
                                        name={'Category'} />,

                                    <LinkComponents
                                        key={12}
                                        to={'setup/unit-type'}
                                        icon={<BiUnite className='text-lg' />}
                                        name={'Unit Type'} />,

                                    <LinkComponents
                                        key={13}
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
                                        key={14}
                                        to={'suppliers/list'}
                                        icon={<FaThList className='text-md' />}
                                        name={'List'} />,

                                    <LinkComponents
                                        key={15}
                                        to={'suppliers/payment'}
                                        icon={<BsCreditCard2BackFill className='text-lg' />}
                                        name={'Payment'} />,

                                    <LinkComponents
                                        key={16}
                                        to={'suppliers/documents'}
                                        icon={<HiDocumentText className='text-lg' />}
                                        name={'Documents'} />
                                ]
                            } />
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost text-xl uppercase flex items-center">
                    <img className='w-12' src={logo} alt="logo" />
                    String LAB
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <div className='flex items-center'>
                        <div className="text-sm breadcrumbs">
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
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex="0" className='flex items-center cursor-pointer'>
                        <p className='mr-4'>User Name</p>
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