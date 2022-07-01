import React from 'react';
import ProductsRow from './ProductsRow';
import { BsPrinter, BsSave2 } from 'react-icons/bs';
import { FcCancel } from 'react-icons/fc';
import { MdOutlineAddBox } from 'react-icons/md';

const Products = () => {
    const tableHead = <tr>
        <th className='text-xs' >SN</th>
        <th className='text-xs' >Code</th>
        <th className='text-xs' >Trade Name</th>
        <th className='text-xs' >Category</th>
        <th className='text-xs' >Strength</th>
        <th className='text-xs' >Company</th>
        <th className='text-xs' >Stock</th>
        <th className='text-xs' >TP</th>
        <th className='text-xs' >MRP</th>
        <th className='text-xs' >
            <select class="select select-bordered select-xs w-full max-w-xs">
                <option selected>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
                <option>60</option>
                <option>70</option>
                <option>80</option>
                <option>90</option>
                <option>100</option>
            </select>
        </th>
    </tr>;

    return (
        <section>
            <div className="flex justify-between mb-6">
                <label for="create-new-product" class="btn btn-sm gap-2 modal-button">
                    <MdOutlineAddBox className='text-lg' />
                    New
                </label>
                <button class="btn btn-sm gap-2">
                    <BsPrinter className='text-md' />
                    Print
                </button>
            </div>

            <input type="checkbox" id="create-new-product" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box w-12/12 max-w-5xl">
                    <label for="create-new-product" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg mb-2">Create a Product</h3>

                    <div className='grid grid-cols-4 gap-4 mb-2'>
                        <div>
                            <label class="label">
                                <span class="label-text">Trade Name</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Generic Name</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Barcode</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                        </div>

                        <div className="div">
                            <label class="label">
                                <span class="label-text">Strength</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className='grid grid-cols-5 gap-4 mb-2'>
                        <div className="div">
                            <label class="label">
                                <span class="label-text">Category</span>
                            </label>
                            <select class="select select-bordered select-xs w-full max-w-xs">
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
                            <select class="select select-bordered select-xs w-full max-w-xs">
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
                            <select class="select select-bordered select-xs w-full max-w-xs">
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
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Minimum Stock To Alert</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className='flex justify-between gap-4 mb-2'>
                        <div>
                            <label class="label">
                                <span class="label-text">Sold Days For Purchase Required</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Minimum Stock To Alert</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
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
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="div">
                                    <label class="label">
                                        <span class="label-text">Purchase Unit Type</span>
                                    </label>
                                    <select class="select select-bordered select-xs w-full max-w-xs">
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
                                        <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full" />
                                        <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label class="label">
                                    <span class="label-text">Purchase Vat</span>
                                </label>
                                <div className="grid grid-cols-3 gap-4">
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered max-w-xs" />
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full" />
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full" />
                                </div>
                            </div>

                            <div>
                                <label class="label">
                                    <span class="label-text">Purchase Discount</span>
                                </label>
                                <div className="grid grid-cols-3 gap-4">
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered max-w-xs" />
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full" />
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full" />
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
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="div">
                                    <label class="label">
                                        <span class="label-text">Sales Unit Type</span>
                                    </label>
                                    <select class="select select-bordered select-xs w-full max-w-xs">
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
                                        <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full" />
                                        <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label class="label">
                                    <span class="label-text">Sales Vat</span>
                                </label>
                                <div className="grid grid-cols-3 gap-4">
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered max-w-xs" />
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full" />
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full" />
                                </div>
                            </div>

                            <div>
                                <label class="label">
                                    <span class="label-text">Sales Discount</span>
                                </label>
                                <div className="grid grid-cols-3 gap-4">
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered max-w-xs" />
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full" />
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full" />
                                </div>
                            </div>

                            <div>
                                <label class="label">
                                    <span class="label-text">Max Sales Discount</span>
                                </label>
                                <div className="grid grid-cols-3 gap-4">
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered max-w-xs" />
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full" />
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-around items-center my-4'>
                        <button class="btn btn-sm flex items-center gap-2">
                            <BsSave2 className='text-md' />
                            Save
                        </button>
                        <label for="create-new-product" class="btn btn-sm flex items-center gap-2">
                            <FcCancel className='text-lg' />
                            Cancel
                        </label>
                    </div>
                </div>
            </div>

            <table class="table table-zebra table-compact w-full">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    <ProductsRow />
                    <ProductsRow />
                    <ProductsRow />
                    <ProductsRow />
                </tbody>
                <tfoot>
                    {
                        tableHead
                    }
                </tfoot>
            </table>
        </section >
    );
};

export default Products;