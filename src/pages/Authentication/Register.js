import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../hooks/firebase.init';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        return toast.error(`Error: ${error?.message}`);
    }
    if (loading) {
        return <Loading />;
    }
    if (user) {
        return (
            <div>
                <p>Registered User: {user.email}</p>
            </div>
        );
    }

    const handleSignup = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div class="card flex-shrink-0 w-4/12 shadow-2xl bg-base-100 mx-auto my-20">
            <form onSubmit={handleSignup} class="card-body">
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
                    <button type='submit' class="btn btn-primary">Register</button>
                </div>
                <div class="form-control mt-6">
                    <p className='flex justify-between'>Already a member? <span onClick={() => navigate('/login')} className='text-[#F4E06D] underline'>Login Here</span></p>
                </div>
            </form>
        </div>
    );
};

export default Register;