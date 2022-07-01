import React from 'react';

const CreateProduct = () => {
    return (
        <div>
            <h3 class="font-bold text-lg mb-2">Create a Product</h3>

            <div className='grid grid-cols-4 gap-4 mb-2'>
                <div>
                    <label class="label">
                        <span class="label-text">Trade Name</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full max-w-xs" />
                </div>

                <div>
                    <label class="label">
                        <span class="label-text">Generic Name</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full max-w-xs" />
                </div>

                <div>
                    <label class="label">
                        <span class="label-text">Barcode</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full max-w-xs" />
                </div>

                <div className="div">
                    <label class="label">
                        <span class="label-text">Strength</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full max-w-xs" />
                </div>
            </div>

            <div className='grid grid-cols-5 gap-4 mb-2'>
                <div className="div">
                    <label class="label">
                        <span class="label-text">Category</span>
                    </label>
                    <select class="select select-bordered select-sm w-full max-w-xs">
                        <option disabled selected>Small</option>
                        <option>Small Apple</option>
                        <option>Small Orange</option>
                        <option>Small Tomato</option>
                    </select>
                </div>

                <div className="div">
                    <label class="label">
                        <span class="label-text">Counter</span>
                    </label>
                    <select class="select select-bordered select-sm w-full max-w-xs">
                        <option disabled selected>Small</option>
                        <option>Small Apple</option>
                        <option>Small Orange</option>
                        <option>Small Tomato</option>
                    </select>
                </div>

                <div className="div">
                    <label class="label">
                        <span class="label-text">Company</span>
                    </label>
                    <select class="select select-bordered select-sm w-full max-w-xs">
                        <option disabled selected>Small</option>
                        <option>Small Apple</option>
                        <option>Small Orange</option>
                        <option>Small Tomato</option>
                    </select>
                </div>

                <div>
                    <label class="label">
                        <span class="label-text">Sold Days For Purchase Required</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full max-w-xs" />
                </div>

                <div>
                    <label class="label">
                        <span class="label-text">Minimum Stock To Alert</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full max-w-xs" />
                </div>
            </div>

            <div className='flex justify-between gap-4 mb-2'>
                <div>
                    <label class="label">
                        <span class="label-text">Sold Days For Purchase Required</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full max-w-xs" />
                </div>

                <div>
                    <label class="label">
                        <span class="label-text">Minimum Stock To Alert</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full max-w-xs" />
                </div>
            </div>

            <div class="divider"></div>

            <div class="flex flex-col w-full lg:flex-row">
                <div class="grid flex-grow card">
                    <div className='flex justify-between items-center'>
                        <h3 className='text-xl'>Purchase Area</h3>
                        <div>
                            <label class="label">
                                <span class="label-text">Unit Conversion</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="div">
                            <label class="label">
                                <span class="label-text">Purchase Unit Type</span>
                            </label>
                            <select class="select select-bordered select-sm w-full max-w-xs">
                                <option disabled selected>Small</option>
                                <option>Small Apple</option>
                                <option>Small Orange</option>
                                <option>Small Tomato</option>
                            </select>
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Unit TP Price (S/P)</span>
                            </label>
                            <div className='flex justify-between gap-4'>
                                <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
                                <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label class="label">
                            <span class="label-text">Purchase Vat</span>
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered max-w-xs" />
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
                        </div>
                    </div>

                    <div>
                        <label class="label">
                            <span class="label-text">Purchase Discount</span>
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered max-w-xs" />
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
                        </div>
                    </div>
                </div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow card">
                    <div className='flex justify-between items-center'>
                        <h3 className='text-xl'>Sales Area</h3>
                        <div>
                            <label class="label">
                                <span class="label-text">Profit (%)</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="div">
                            <label class="label">
                                <span class="label-text">Sales Unit Type</span>
                            </label>
                            <select class="select select-bordered select-sm w-full max-w-xs">
                                <option disabled selected>Small</option>
                                <option>Small Apple</option>
                                <option>Small Orange</option>
                                <option>Small Tomato</option>
                            </select>
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Unit MRP (S/P)</span>
                            </label>
                            <div className='flex justify-between gap-4'>
                                <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
                                <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label class="label">
                            <span class="label-text">Sales Vat</span>
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered max-w-xs" />
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
                        </div>
                    </div>

                    <div>
                        <label class="label">
                            <span class="label-text">Sales Discount</span>
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered max-w-xs" />
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
                        </div>
                    </div>

                    <div>
                        <label class="label">
                            <span class="label-text">Max Sales Discount</span>
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered max-w-xs" />
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
                            <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-around items-center my-2'>
                <button class="btn btn-sm gap-2">
                    Refresh
                </button>
                <button class="btn btn-sm gap-2">
                    Print
                </button>
            </div>
        </div>
    );
};

export default CreateProduct;