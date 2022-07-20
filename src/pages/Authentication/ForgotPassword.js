import React from 'react';
import Button from '../../components/Buttons/Button';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div class="max-w-lg mx-auto text-center">
                <h1 class="text-2xl font-bold sm:text-3xl">Reset Your Password Here</h1>

                <p class="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                    eaque error neque ipsa culpa autem, at itaque nostrum!
                </p>
            </div>

            <form action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="enter your email here" class="input input-bordered" />
                </div>

                <div class="form-control mt-6">
                    <p className='flex justify-between'>New to Inventory? <span onClick={() => navigate('/register')} className='text-[#F4E06D] underline'>Register Here</span></p>
                </div>

                <Button btnText={'Send Password Reset Link'} />
                <Button btnText={'Cancel'} />
            </form>
        </div>
    );
};

export default ForgotPassword;