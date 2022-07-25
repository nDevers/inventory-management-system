import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiDesktop } from 'react-icons/bi';
import { CgChevronDownR } from 'react-icons/cg';
import { FaReact, FaNodeJs, FaLongArrowAltRight } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';
import { MdSecurity } from 'react-icons/md';
import { SiMongodb, SiHackthebox } from 'react-icons/si';
import DefaultNavbar from '../components/DefaultNavbar';
import Footer from '../components/Footer';

export default function Home() {
    const features = [
        {
            "id": 1,
            "icon": <BiDesktop />,
            "title": "UI Design",
            "description": "Modern and clean looking UI."
        },
        {
            "id": 2,
            "icon": <SiHackthebox />,
            "title": "UX Design",
            "description": "Smooth user experience."
        },
        {
            "id": 3,
            "icon": <SiMongodb />,
            "title": "MongoDB Database",
            "description": "Modern and secure database."
        },
        {
            "id": 4,
            "icon": <FaNodeJs />,
            "title": "NodeJs Backend",
            "description": "Advance backend server."
        },
        {
            "id": 5,
            "icon": <FaReact />,
            "title": "Popular frontend framework ",
            "description": "World's most popular front end framework"
        },
        {
            "id": 6,
            "icon": <MdSecurity />,
            "title": "World class security",
            "description": "Ensure security with JWT."
        }
    ];

    const summary = [
        {
            "id": 1,
            "number": 4,
            "name": "Companies"
        },
        {
            "id": 2,
            "number": 5,
            "name": "Integrations"
        },
        {
            "id": 3,
            "number": 3,
            "name": "Layers of Security"
        }
    ];

    const reviews = [
        {
            "id": 1,
            "icon": "",
            "title": "Business Type: Wholesale",
            "description": "Inventory Management System’s Shopify integration is saving tons of time, now we no longer need to manually upload each individual product up to the website.",
            "reviewer": "Lighting & Decor"
        },
        {
            "id": 2,
            "icon": "",
            "title": "Business Type: Multichannel",
            "description": "I can be at home, or on holiday, and I can always log on to Inventory Management System and see what's going on. I can check my sales for the day without having to do fancy reports, the dashboard gives it to me as I need it",
            "reviewer": "WorkWear"
        },
        {
            "id": 3,
            "icon": "",
            "title": "Business Type: Multichannel retailer",
            "description": "Inventory Management System is cost-effective, super-efficient, and readily available to implement in the least amount of time. We’re very happy with it.",
            "reviewer": "Sand Dollar"
        }
    ];

    const faqs = [
        {
            "id": 1,
            "title": "What does Inventory Module include?",
            "description": "The Inventory module covers all processes involving management of your stocks and services. It includes creating and managing products, services and assets, product families, stock adjustements, stock takes, stock transfers, inventory writte-offs price lists, product availability and much more."
        },
        {
            "id": 2,
            "title": "Can I see the real time update on my inventory?",
            "description": "Yes, Inventory Management System allows you to view the availability of the products in the Product Availability Report. The Report shows the exact quantity of on hand, available, on order and allocated products."
        },
        {
            "id": 3,
            "title": "What is the purpose of the stock adjustment?",
            "description": "Stock Adjustments can be used to update/correct the quantity and price of products in your Inventory. Adjustments could be required for entering new stock, removing damaged or stolen stock, data entry errors and so on."
        }
    ];

    return (
        <div>
            <DefaultNavbar />
            <div className='text-accent'>
                <section className="hero min-h-screen bg-info">
                    <div className="hero-content text-center">
                        <div className="max-w-4xl">
                            <button className="btn border-0 rounded-full bg-base-100 mb-8 text-accent px-8 font-bold text-md hover:bg-base-100">
                                <CgChevronDownR className='mr-4 text-xl text-secondary' />
                                Inventory Management
                            </button>
                            <h1 className="text-6xl font-bold text-accent"><span className='text-secondary'>Inventory management</span> that’s seamless, easy and efficient.</h1>
                            <p className="py-6 text-neutral text-lg">Cloud ERP software empowers you to effectively manage your biggest investment and get up-to-the-minute inventory knowledge.</p>
                            <a href='pricing' className="btn btn-primary border-0 bg-secondary hover:bg-primary text-base-100">Get Started</a>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-xl mx-auto text-center">
                            <h2 className="text-3xl font-bold sm:text-4xl">Features of Inventory Management</h2>

                            <p className="mt-4 text-neutral">
                                Inventory Management System comes with great features and flexibility that is suitable for your needs. Learn more about Inventory Management System features.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                            {
                                features.map(feature => <a key={feature.id}
                                    className="block p-8 transition border border-info shadow-xl rounded-xl hover:shadow-secondary hover:border-secondary"
                                    href="/services/digital-campaigns"
                                >
                                    <span className='text-secondary text-4xl'>
                                        {feature.icon}
                                    </span>

                                    <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>

                                    <p className="mt-1 text-sm text-neutral">
                                        {feature.description}
                                    </p>
                                </a>)
                            }
                        </div>

                        <div className="mt-12 text-center">
                            <a
                                className="inline-flex items-center px-8 py-3 mt-8 text-white bg-secondary border-0 rounded hover:bg-primary"
                                href="/get-started"
                            >
                                <span className="text-sm font-medium"> Learn More </span>

                                <svg
                                    className="w-5 h-5 ml-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* start summary */}
                <section className='max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 mb-32'>
                    <ul
                        className='mt-8 border-2 border-secondary border-opacity-25 divide-y-2 divide-secondary sm:grid sm:divide-y-0 sm:divide-x-2 sm:border-l-0 sm:border-r-0 divide-opacity-25 sm:grid-cols-3 text-center'
                    >
                        {
                            summary.map((s, index) =>
                                <li key={index} className='p-8'>
                                    <p className='text-3xl font-extrabold text-secondary'>{s.number}+</p>
                                    <p className='mt-1 text-xl font-medium'>{s.name}</p>
                                </li>)
                        }
                    </ul>
                </section>
                {/* end summary */}

                <section className="bg-gray-100">
                    <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
                        <div className="items-end justify-between sm:flex">
                            <div className="max-w-xl">
                                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Read trusted reviews from our customers</h2>

                                <p className="max-w-lg mt-8 text-gray-500">
                                    Some of our users and their honest reviews. We do not modify users reviews. We believe in zero compromising rules. Everything we do is fair and honest.
                                </p>
                            </div>

                            <a
                                className="inline-flex items-center flex-shrink-0 px-5 py-3 mt-8 font-medium bg-secondary text-white border-0 rounded-full sm:mt-0 lg:mt-8"
                                href=""
                            >
                                Read all reviews

                                <FaLongArrowAltRight className='text-xl ml-4' />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                reviews.map(review =>
                                    <blockquote key={review.id} className="flex flex-col justify-between h-full p-12 bg-white">
                                        <div>
                                            <div className="flex space-x-0.5 text-primary">
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                            </div>

                                            <div className="mt-4">
                                                <h5 className="text-xl font-bold text-secondary sm:text-2xl">{review.title}</h5>

                                                <p className="mt-4 text-gray-600">
                                                    {review.description}
                                                </p>
                                            </div>
                                        </div>

                                        <footer className="mt-8 text-gray-500"> - {review.reviewer}</footer>
                                    </blockquote>)
                            }
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100">
                    <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
                        <div className="items-end justify-between sm:flex">
                            <div className="max-w-3xl">
                                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h2>

                                <p className="max-w-lg mt-8 text-gray-500">
                                    Learn about our Inventory Management System. Have any questions check here first for your solutions. Do not find answer contact us. We will answer properly.
                                </p>
                            </div>

                            <a
                                className="inline-flex items-center flex-shrink-0 px-5 py-3 mt-8 font-medium bg-secondary text-white border-0 rounded-full sm:mt-0 lg:mt-8"
                                href=""
                            >
                                Read all questions

                                <FaLongArrowAltRight className='text-xl ml-4' />
                            </a>
                        </div>

                        <div className="space-y-4 mt-20">
                            {
                                faqs.map(faq =>
                                    <details key={faq.id} className="p-6 border-l-4 border-secondary bg-gray-50 group">
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h5 className="text-lg font-medium text-gray-900">
                                                {faq.title}
                                            </h5>

                                            <span
                                                className="flex-shrink-0 ml-1.5 p-1 text-secondary bg-white rounded-full sm:p-2"
                                            >
                                                <FiPlusCircle className='text-xl' />
                                            </span>
                                        </summary>

                                        <p className="mt-4 leading-relaxed text-gray-700">
                                            {faq.description}
                                        </p>
                                    </details>)
                            }
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}