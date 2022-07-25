import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import DefaultNavbar from '../../components/DefaultNavbar';
import Footer from '../../components/Footer';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (event) => {
        event.preventDefault();

    }

    return (
        <div>
            <DefaultNavbar />
            <section className="card flex-shrink-0 w-4/12 shadow-2xl bg-base-100 mx-auto my-20">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to='/forgot-password' className='text-[#F4E06D] label-text-alt link link-hover'>Forgot Password?</Link>
                        </label>
                    </div>

                    <div className="form-control mt-4">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="label-text">Remember Me</span>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-control mt-6">
                        <p className='flex justify-between'>New to Inventory? <Link to='/register' className='text-[#F4E06D] underline'>Register Here</Link></p>
                    </div>
                </form >
            </section >
            <Footer />
        </div>
    );
};

export default Login;