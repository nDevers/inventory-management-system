import React from 'react';
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png';
import { HiMenuAlt3 } from 'react-icons/hi';
import UserLinkComponents from './NavbarComponents/UserLinkComponents';

const DefaultNavbar = () => {
    const defaultNavbarItems = <>
        <UserLinkComponents to={'/'} name={'Home'} />
        <UserLinkComponents to={'about'} name={'About'} />
        <UserLinkComponents to={'contact'} name={'Contact'} />
        <UserLinkComponents to={'login'} name={'Login'} />
        <UserLinkComponents to={'/pricing'} extraClass={'btn btn-sm btn-outline block lg:hidden md:hidden'} name={'Get Started'} />
    </>

    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <Link class="text-lg md:text-lg lg:text-xl font-semibold uppercase flex items-center" to='/'>
                    <img className='w-12' src={logo} alt="logo" />
                    String LAB
                </Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {
                        defaultNavbarItems
                    }
                </ul>

                <div className='block md:hidden lg:hidden'>
                    <Link class=" btn btn-sm md:btn-md lg:btn-md" to='/pricing'>Get started</Link>
                </div>
            </div>
            <div class="navbar-end">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <HiMenuAlt3 className='text-2xl' />
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            defaultNavbarItems
                        }
                    </ul>
                </div>

                <div className='hidden md:block lg:block'>
                    <Link class=" btn btn-sm md:btn-md lg:btn-md" to='/pricing'>Get started</Link>
                </div>
            </div>
        </div>
    );
};

export default DefaultNavbar;