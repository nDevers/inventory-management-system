import React from 'react';

const Integration = () => {
    return (
        <section className="text-white bg-blue-600">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-xl">
                    <h2 className="text-4xl font-bold sm:text-6xl">
                        We Integrate With
                    </h2>

                    <p className="mt-4 sm:text-xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic tempore beatae facilis dignissimos rem praesentium
                        officia obcaecati quisquam iure recusandae!
                    </p>
                </div>

                <ul className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                    <li className="p-8 shadow-xl rounded-xl">
                        <p className="text-3xl font-extrabold">50</p>
                        <p className="mt-1 text-xl font-medium">Websites live</p>
                    </li>

                    <li className="p-8 shadow-xl rounded-xl">
                        <p className="text-3xl font-extrabold">190k+</p>
                        <p className="mt-1 text-xl font-medium">Impressions</p>
                    </li>

                    <li className="p-8 shadow-xl rounded-xl">
                        <p className="text-3xl font-extrabold">$150k+</p>
                        <p className="mt-1 text-xl font-medium">Client profits</p>
                    </li>

                    <li className="p-8 shadow-xl rounded-xl">
                        <p className="text-3xl font-extrabold">10</p>
                        <p className="mt-1 text-xl font-medium">New staff</p>
                    </li>

                    <li className="p-8 shadow-xl rounded-xl">
                        <p className="text-3xl font-extrabold">1</p>
                        <p className="mt-1 text-xl font-medium">New office</p>
                    </li>

                    <li className="p-8 shadow-xl rounded-xl">
                        <p className="text-3xl font-extrabold">6</p>
                        <p className="mt-1 text-xl font-medium">New tech stacks</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Integration;