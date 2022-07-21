import React from 'react';

const PricingCard = () => {
    return (
        <article className="block p-6 text-center shadow-xl bg-gray-50 rounded-xl">
            <h5 className="text-3xl font-bold text-blue-600">Basic Plan</h5>

            <h6 className="mt-1 text-sm text-gray-900">Perfect for Small Businesses</h6>

            <div className="mt-4 text-gray-900">
                <h6>
                    <span className="text-2xl">$</span>
                    <span className="inline text-5xl font-bold">9</span>
                    <span className="text-xs">/ month</span>
                </h6>

                <p className="text-xs text-gray-700 mt-0.5">Billed Annually</p>
            </div>

            <ul className="mt-8 space-y-2.5 text-gray-900">
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline w-6 h-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>

                    Free Updates to the Hub
                </li>

                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline w-6 h-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>

                    Priority Support via Email
                </li>

                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline w-6 h-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>

                    Frontend API Access
                </li>

                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline w-6 h-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>

                    New & Additional Features
                </li>

                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline w-6 h-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>

                    Customisable Admin UI
                </li>
            </ul>

            <a
                className="inline-block px-8 py-3 mt-8 text-sm font-medium text-white transition bg-blue-600 rounded hover:bg-blue-700 hover:shadow-xl active:bg-blue-500 focus:outline-none focus:ring"
                href="/"
            >
                Let's Get Started
            </a>
        </article>
    );
};

export default PricingCard;