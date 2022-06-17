import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../hooks/firebase.init';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        console.log(user);
    }

    const handleLogin = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password);
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
                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div class="form-control mt-6">
                    <button type='submit' class="btn btn-primary">Login</button>
                </div>
                <div class="form-control mt-6">
                    <p className='flex justify-between'>New to Inventory? <span onClick={() => navigate('/register')} className='text-[#F4E06D] underline'>Register Here</span></p>
                </div>
            </form>
        </div>
    );
};

export default Login;