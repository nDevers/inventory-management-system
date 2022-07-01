import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (event) => {
        event.preventDefault();

    }

    return (
        <div class="card flex-shrink-0 w-4/12 shadow-2xl bg-base-100 mx-auto my-20">
            <form onSubmit={handleLogin} class="card-body">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" class="input input-bordered" />
                    <label class="label">
                        <Link to='/forgot-password' className='text-[#F4E06D] label-text-alt link link-hover'>Forgot Password?</Link>
                    </label>
                </div>

                <div class="form-control mt-4">
                    <label class="label cursor-pointer">
                        <input type="checkbox" class="checkbox checkbox-primary" />
                        <span class="label-text">Remember Me</span>
                    </label>
                </div>

                <div class="form-control mt-6">
                    <button type='submit' class="btn btn-primary">Login</button>
                </div>
                <div class="form-control mt-6">
                    <p className='flex justify-between'>New to Inventory? <Link to='/register' className='text-[#F4E06D] underline'>Register Here</Link></p>
                </div>
            </form >
        </div >
    );
};

export default Login;