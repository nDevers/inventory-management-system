import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { RiArrowRightCircleFill } from 'react-icons/ri';
import DefaultNavbar from '../components/DefaultNavbar';
import Footer from '../components/Footer';

const Pricing = () => {
    const pricing = [
        {
            "id": 1,
            "planName": "Start",
            "price": "Free",
            "features": ['Multi-channel order management', 'All core operations features', 'Warehouse mobile application', 'Advanced multi-location inventory', 'Comprehensive reporting', '2 Ecommerce and app integrations'],
            "description": "Multi-channel orders, inventory, purchasing, packing, shipping, integrations, and reporting all in one system for multi-channel product sellers."
        },
        {
            "id": 2,
            "planName": "Standard",
            "price": "$325/mo",
            "features": ['Multi-channel order management', 'All core operations features', 'Warehouse mobile application', 'Advanced multi-location inventory', 'Comprehensive reporting', '2 Ecommerce and app integrations'],
            "description": "Multi-channel orders, inventory, purchasing, packing, shipping, integrations, reporting, and a QuickBooks Online Advanced edition all in one system."
        },
        {
            "id": 3,
            "planName": "Advanced",
            "price": "$375/mo",
            "features": ['Multi-channel order management', 'All core operations features', 'Warehouse mobile application', 'Advanced multi-location inventory', 'Comprehensive reporting', '2 Ecommerce and app integrations'],
            "description": "Multi-channel orders, inventory, purchasing, packing, shipping, integrations, reporting, and a QuickBooks Online Advanced edition all in one system."
        },
    ]
    return (
        <div>
            <DefaultNavbar />
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-secondary">Pricing</h1>

                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>

                        <div className="flex mx-auto border-2 border-primary rounded overflow-hidden mt-6">
                            <button className="py-1 px-4 bg-primary text-white focus:outline-none">Monthly</button>
                            <button className="py-1 px-4 focus:outline-none">Annually</button>
                        </div>
                    </div>

                    <div className="flex flex-wrap -m-4">
                        {
                            pricing.map(p =>
                                <div key={p.id} className="p-4 xl:w-2/6 md:w-1/2 w-full hover:shadow-lg hover:shadow-secondary">
                                    <div className="h-full p-6 rounded-lg border-2 border-info flex flex-col relative overflow-hidden">
                                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium uppercase">{p.planName}</h2>
                                        <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{p.price}</h1>

                                        {
                                            p.features.map((f, index) =>
                                                <p key={index} className="flex items-center text-gray-600 mb-2">
                                                    <RiArrowRightCircleFill className='text-xl text-primary mr-2' />
                                                    {f}
                                                </p>)
                                        }

                                        <button className="flex items-center justify-between text-white bg-secondary border-0 py-2 px-4 w-full focus:outline-none hover:bg-primary rounded my-4">Button
                                            <FaLongArrowAltRight />
                                        </button>

                                        <p className="text-xs text-gray-500 mt-3">{p.description}</p>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Pricing;