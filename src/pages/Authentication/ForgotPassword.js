import React from 'react';
import Button from '../../components/buttons/Button';
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer';
import DefaultNavbar from '../../components/DefaultNavbar';

const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <div>
            <DefaultNavbar />
            <section className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Reset Your Password Here</h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                        eaque error neque ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>

                <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="enter your email here" className="input input-bordered" />
                    </div>

                    <div className="form-control mt-6">
                        <p className='flex justify-between'>New to Inventory? <span onClick={() => navigate('/register')} className='text-[#F4E06D] underline'>Register Here</span></p>
                    </div>

                    <Button btnText={'Send Password Reset Link'} />
                    <Button btnText={'Cancel'} />
                </form>
            </section>
            <Footer />
        </div>
    );
};

export default ForgotPassword;