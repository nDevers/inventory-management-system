import React from 'react';
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { MdSubdirectoryArrowRight } from 'react-icons/md';
import montasim from '../../Assets/Images/Montasim.jpg';

const About = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold mt-6'>Meet The Developers</h2>

            <div class="container my-24 px-6 mx-auto">
                <section class="mb-32 text-gray-800">
                    <div class="block rounded-lg shadow-lg">
                        <div class="flex flex-wrap items-center">
                            <div class="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                                <div class="mb-6 lg:mb-0 w-80">
                                    <div class="block rounded-lg">
                                        <div class="relative overflow-hidden bg-no-repeat bg-cover">
                                            <img src={montasim} class="w-full rounded-t-lg" alt='user avatar' />
                                            <a href="#!">
                                                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                            </a>
                                            <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                                                style={{ "left": "0", "bottom": "0" }}>
                                                <path fill="#fff"
                                                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="p-6">
                                            <h5 class="text-lg font-bold mb-4">Mohammad Montasim -Al- Mamun Shuvo</h5>
                                            <p class="text-gray-500 mb-4">MERN Stack Web Developer</p>
                                            <ul class="list-inside flex mx-auto justify-center text-blue-600">
                                                <a href="https://github.com/montasim" class="px-2">
                                                    <BsGithub />
                                                </a>
                                                <a href="https://www.linkedin.com/in/montasim" class="px-2">
                                                    <BsLinkedin />
                                                </a>
                                                <a href="https://www.facebook.com/montasimmamun/" class="px-2">
                                                    <BsFacebook />
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                <div class="px-6 py-12 md:px-12">
                                    <h2 class="text-3xl font-bold mb-6">Contribution in this project</h2>
                                    <p class="text-gray-500 mb-6">
                                        Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque iaculis
                                        malesuada. Aenean gravida magna orci, non efficitur est porta id. Donec magna
                                        diam.
                                    </p>

                                    <div class="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6">
                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Support 24/7
                                            </p>
                                        </div>

                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Analytics
                                            </p>
                                        </div>

                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Components
                                            </p>
                                        </div>
                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Updates
                                            </p>
                                        </div>

                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Reports
                                            </p>
                                        </div>

                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Mobile
                                            </p>
                                        </div>
                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Modules
                                            </p>
                                        </div>

                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Blocks
                                            </p>
                                        </div>

                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Templates
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <div class="container my-24 px-6 mx-auto">
                <section class="mb-32 text-gray-800">
                    <div class="block rounded-lg shadow-lg">
                        <div class="flex flex-wrap items-center">
                            <div class="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                                <div class="mb-6 lg:mb-0 w-80">
                                    <div class="block rounded-lg">
                                        <div class="relative overflow-hidden bg-no-repeat bg-cover">
                                            <img src={montasim} class="w-full rounded-t-lg" alt='user avatar' />
                                            <a href="#!">
                                                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                            </a>
                                            <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                                                style={{ "left": "0", "bottom": "0" }}>
                                                <path fill="#fff"
                                                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="p-6">
                                            <h5 class="text-lg font-bold mb-4">Mohammad Montasim -Al- Mamun Shuvo</h5>
                                            <p class="text-gray-500 mb-4">MERN Stack Web Developer</p>
                                            <ul class="list-inside flex mx-auto justify-center text-blue-600">
                                                <a href="https://github.com/montasim" class="px-2">
                                                    <BsGithub />
                                                </a>
                                                <a href="https://www.linkedin.com/in/montasim" class="px-2">
                                                    <BsLinkedin />
                                                </a>
                                                <a href="https://www.facebook.com/montasimmamun/" class="px-2">
                                                    <BsFacebook />
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                <div class="px-6 py-12 md:px-12">
                                    <h2 class="text-3xl font-bold mb-6">Contribution in this project</h2>
                                    <p class="text-gray-500 mb-6">
                                        Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque iaculis
                                        malesuada. Aenean gravida magna orci, non efficitur est porta id. Donec magna
                                        diam.
                                    </p>

                                    <div class="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6">
                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Support 24/7
                                            </p>
                                        </div>

                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Analytics
                                            </p>
                                        </div>

                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Components
                                            </p>
                                        </div>
                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Updates
                                            </p>
                                        </div>

                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Reports
                                            </p>
                                        </div>

                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Mobile
                                            </p>
                                        </div>
                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Modules
                                            </p>
                                        </div>

                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Blocks
                                            </p>
                                        </div>

                                        <div class="mb-6">
                                            <p class="flex items-center">
                                                <svg class="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Templates
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default About;