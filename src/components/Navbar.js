import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const navbarItems = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
        <li><Link to='login'>Login</Link></li>
    </>

    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navbarItems
                        }
                    </ul>
                </div>
                <a class="btn btn-ghost text-xl uppercase" href='/'>Inventory</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {
                        navbarItems
                    }
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn" href='/'>Get started</a>
            </div>
        </div>
    );
};

export default Navbar;