import React from 'react';

const FAQs = () => {
    return (
        <section className="bg-gray-100">
            <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
                <div className="items-end justify-between sm:flex">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h2>

                        <p className="max-w-lg mt-8 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium natus sapiente commodi.
                            Aliquid sunt tempore iste repellendus explicabo dignissimos placeat, autem harum dolore reprehenderit quis!
                            Quo totam dignissimos earum.
                        </p>
                    </div>

                    <a
                        className="inline-flex items-center flex-shrink-0 px-5 py-3 mt-8 font-medium text-pink-600 border border-pink-600 rounded-full sm:mt-0 lg:mt-8 hover:bg-pink-600 hover:text-white"
                        href=""
                    >
                        Read all reviews

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 ml-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                <div className="space-y-4 mt-20">
                    <details className="p-6 border-l-4 border-green-500 bg-gray-50 group" open>
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h5 className="text-lg font-medium text-gray-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing?
                            </h5>

                            <span
                                className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                            earum similique!
                        </p>
                    </details>

                    <details className="p-6 border-l-4 border-green-500 bg-gray-50 group">
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h5 className="text-lg font-medium text-gray-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing?
                            </h5>

                            <span
                                className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                            earum similique!
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQs;