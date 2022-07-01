import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = (event) => {
        event.preventDefault();

    }

    return (
        <section class="relative flex flex-wrap lg:h-screen lg:items-center">
            <div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                <div class="max-w-lg mx-auto text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl">Create Your Inventory Account</h1>

                    <p class="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                        eaque error neque ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>

                <form onSubmit={handleRegister} class="card-body">
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

                        <div class="form-control mt-4">
                            <label class="label cursor-pointer">
                                <input type="checkbox" class="checkbox checkbox-primary" />
                                <span class="label-text">I accept the terms and condition</span>
                            </label>
                        </div>
                    </div>
                    <div class="form-control mt-6">
                        <button type='submit' class="btn btn-primary">Login</button>
                    </div>
                    <div class="form-control mt-6">
                        <p className='flex justify-between'>Already a member? <span onClick={() => navigate('/login')} className='text-[#F4E06D] underline'>Login Here</span></p>
                    </div>
                </form>
            </div>

            <div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
                <img
                    class="absolute inset-0 object-cover w-full h-full"
                    src="https://www.hyperui.dev/photos/team-1.jpeg"
                    alt=""
                />
            </div>
        </section>
    );
};

export default Register;