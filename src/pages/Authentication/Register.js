import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import registerGif from '../../Assets/GIF/register.gif';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
    };

    return (
        <section class="relative flex flex-wrap lg:h-screen lg:items-center">
            <div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                <div class="max-w-lg mx-auto text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl">Create Your Inventory Account</h1>

                    <p class="mt-4 text-gray-500">
                        Sign up today and unlock intelligent inventory management solution, feel the power of automation and more.
                    </p>
                </div>

                <form onSubmit={handleRegister} class="card-body">
                    <div className='grid grid-cols-2 gap-4 justify-between'>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">First Name</span>
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="first name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Last Name</span>
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="last name" class="input input-bordered" />
                        </div>
                    </div>
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
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Confirm Password</span>
                        </label>
                        <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="confirm password" class="input input-bordered" />

                        <div class="form-control mt-4">
                            <label class="label cursor-pointer flex items-center">
                                <input type="checkbox" class="checkbox checkbox-sm checkbox-primary" />
                                <p class="label-text">By signing up with a third party service, you agree to accept String LAB's <Link to='/terms-and-conditions' className='underline'>Terms of service</Link> and <Link to='privacy-policy' className='underline'>Privacy policy</Link></p>
                            </label>
                        </div>
                    </div>
                    <div class="form-control mt-6">
                        <button type='submit' class="btn btn-primary text-white">Register</button>
                    </div>
                    <div class="form-control mt-6">
                        <p className='flex justify-between'>Already a member? <span onClick={() => navigate('/login')} className='text-[#F4E06D] underline'>Login Here</span></p>
                    </div>
                </form>
            </div>

            <div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
                <img
                    class="absolute inset-0 object-cover w-full h-full"
                    src={registerGif}
                    alt=""
                />
            </div>
        </section>
    );
};

export default Register;