import React from 'react';
import NonPharmacyProductsRow from './NonPharmacyProductsRow';
import { BsPrinter, BsSave2 } from 'react-icons/bs';
import { FcCancel } from 'react-icons/fc';
import { MdOutlineAddBox } from 'react-icons/md';
import PrintButton from '../../../../Components/Buttons/PrintButton';
import SaveButton from '../../../../Components/Buttons/SaveButton';
import CancelButton from '../../../../Components/Buttons/CancelButton';
import NewButton from '../../../../Components/Buttons/NewButton';

const PharmacyProducts = () => {
    const tableHead = <tr>
        <th className='text-xs' >SN</th>
        <th className='text-xs' >Code</th>
        <th className='text-xs' >Product Name</th>
        <th className='text-xs' >Category</th>
        <th className='text-xs' >Strength</th>
        <th className='text-xs' >Company</th>
        <th className='text-xs' >Stock</th>
        <th className='text-xs' >Pack Type</th>
        <th className='text-xs' >Pack Size</th>
        <th className='text-xs' >TP</th>
        <th className='text-xs' >MRP</th>
        <th className='text-xs' >TP</th>
        <th className='text-xs' >MRP</th>
        <th className='text-xs' >Actions</th>
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
                <NewButton modalId={'create-new-product'} />

                <PrintButton />
            </div>

            <input type="checkbox" id="create-new-product" class="modal-toggle" />
            <label for="create-new-product" class="modal cursor-pointer">
                <label class="modal-box w-11/12 max-w-4xl relative" for="">
                    <label for="create-new-product" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg text-center uppercase mb-2">Create a Non Pharmacy Product</h3>

                    <div className='grid grid-cols-5 gap-4 mb-2'>
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
                                <span class="label-text">Strength</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                        </div>

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
                                <span class="label-text">Company</span>
                            </label>
                            <select class="select select-bordered select-xs w-full max-w-xs">
                                <option disabled selected>Small</option>
                                <option>Small Apple</option>
                                <option>Small Orange</option>
                                <option>Small Tomato</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex flex-col w-full lg:flex-row mt-4 place-content-center">
                        <div class="grid">
                            <h3 className='text-xl'>Purchase Area</h3>

                            <div className='grid grid-cols-2 gap-x-4'>
                                <div>
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
                                        <span class="label-text">Pack Size</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-x-4'>
                                <div>
                                    <label class="label">
                                        <span class="label-text">Pack TP</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                </div>

                                <div>
                                    <label class="label">
                                        <span class="label-text">Unit TP</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                </div>
                            </div>

                            <div>
                                <label class="label">
                                    <span class="label-text">Purchase VAT</span>
                                </label>
                                <div className='grid grid-cols-2 gap-x-4'>
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                </div>
                            </div>

                            <div>
                                <label class="label">
                                    <span class="label-text">Purchase Discount</span>
                                </label>
                                <div className='grid grid-cols-2 gap-x-4'>
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                </div>
                            </div>

                            <SaveButton />
                        </div>

                        <div class="divider lg:divider-horizontal"></div>

                        <div class="grid">
                            <h3 className='text-xl'>Purchase Area</h3>

                            <div className='grid grid-cols-2 gap-x-4'>
                                <div>
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
                                        <span class="label-text">Pack Size</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-x-4'>
                                <div>
                                    <label class="label">
                                        <span class="label-text">Pack TP</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                </div>

                                <div>
                                    <label class="label">
                                        <span class="label-text">Unit TP</span>
                                    </label>
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                </div>
                            </div>

                            <div>
                                <label class="label">
                                    <span class="label-text">Purchase VAT</span>
                                </label>
                                <div className='grid grid-cols-2 gap-x-4'>
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                </div>
                            </div>

                            <div>
                                <label class="label">
                                    <span class="label-text">Purchase Discount</span>
                                </label>
                                <div className='grid grid-cols-2 gap-x-4'>
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                                </div>
                            </div>

                            <CancelButton />
                        </div>
                    </div>
                </label>
            </label>

            <table class="table table-zebra table-compact w-full">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    <NonPharmacyProductsRow />
                    <NonPharmacyProductsRow />
                    <NonPharmacyProductsRow />
                    <NonPharmacyProductsRow />
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

export default PharmacyProducts;