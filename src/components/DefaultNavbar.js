import React from 'react';
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from 'react-icons/hi'
import logo from '../assets/logo.png'

const DefaultNavbar = () => {
    const defaultNavbarMenus = [
        {
            "id": 1,
            "link": "/",
            "icon": "",
            "name": "Home",
            "extraComponent": "",
            "extraClass": ""
        },
        {
            "id": 7,
            "link": "dashboard",
            "icon": "",
            "name": "Dashboard",
            "extraComponent": "",
            "extraClass": ""
        },
        {
            "id": 2,
            "link": "about",
            "icon": "",
            "name": "About",
            "extraComponent": "",
            "extraClass": ""
        },
        {
            "id": 3,
            "link": "contact",
            "icon": "",
            "name": "Contact",
            "extraComponent": "",
            "extraClass": ""
        },
        {
            "id": 4,
            "link": "login",
            "icon": "",
            "name": "Login",
            "extraComponent": "",
            "extraClass": ""
        },
        {
            "id": 5,
            "link": "pricing",
            "icon": "",
            "name": "Get Started",
            "extraComponent": "",
            "extraClass": "btn btn-sm btn-secondary text-white border-0 block lg:hidden md:hidden hover:bg-secondary hover:opacity-90"
        }
    ];

    const defaultNavbarItems = <>
        {
            defaultNavbarMenus.map(defaultNavbarMenu =>
                <li key={defaultNavbarMenu.id}>
                    <Link to={defaultNavbarMenu.link}>
                        <span className={`flex items-center gap-x-2 ${defaultNavbarMenu.extraClass}`}>
                            {defaultNavbarMenu.icon}
                            {defaultNavbarMenu.name}
                            {defaultNavbarMenu.extraComponent}
                        </span>
                    </Link>
                </li>)
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to='/' className="text-lg md:text-lg lg:text-xl font-semibold uppercase flex items-center" >
                    <img
                        width={45}
                        height={45}
                        src={logo}
                        alt="logo" />
                    String LAB
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        defaultNavbarItems
                    }
                </ul>

                <div className='block md:hidden lg:hidden'>
                    <a className=" btn btn-sm md:btn-md lg:btn-md" href='/pricing'>Get started</a>
                </div>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <HiMenuAlt3 className='text-2xl' />
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            defaultNavbarItems
                        }
                    </ul>
                </div>

                <div className='hidden md:hidden lg:block'>
                    <a href='/pricing'><span className=" btn bg-secondary border-0 text-white hover:bg-secondary hover:opacity-90">Get started</span></a>
                </div>
            </div>
        </div>
    );
};

export default DefaultNavbar;