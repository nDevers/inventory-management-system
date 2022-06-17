import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import auth from '../hooks/firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const defaultNavbarItems = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
        <li><Link to='login'>Login</Link></li>
    </>

    const logout = () => {
        signOut(auth);

        toast.success('See you soon!');

        navigate('/');
    };

    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            !user && defaultNavbarItems
                        }
                    </ul>
                </div>
                <a class="btn btn-ghost text-xl uppercase" href='/'>Inventory</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {
                        user ?
                            <div className='flex items-center'>
                                <h3 className='text-lg'>Shop name</h3>
                                <div class="text-sm breadcrumbs">
                                    <ul>
                                        <li>
                                            <a>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                                Documents
                                            </a>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                            Add Document
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            :

                            defaultNavbarItems
                    }
                </ul>
            </div>

            {
                user ?
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
                                <li>
                                    <a class="justify-between">
                                        Profile
                                        <span class="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li onClick={() => logout()}><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>

                    :

                    <div class="navbar-end">
                        <a class="btn" href='/'>Get started</a>
                    </div>
            }
        </div>
    );
};

export default Navbar;