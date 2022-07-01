import React from 'react';
import { BsPrinterFill } from 'react-icons/bs';
import { MdOutlineAddBox } from 'react-icons/md';
import OrderRow from './OrderRow';

const Orders = () => {
    const tableHead = <tr>
        <th className='text-xs' >SN</th>
        <th className='text-xs' >Voucher</th>
        <th className='text-xs' >Supplier</th>
        <th className='text-xs' >Creator</th>
        <th className='text-xs' >Status</th>
        <th className='text-xs' >Quantity</th>
        <th className='text-xs' >VAT</th>
        <th className='text-xs' >Discount</th>
        <th className='text-xs' >Price</th>
        <th className='text-xs' >Payable Price</th>
        <th className='text-xs' >Created At</th>
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
        <div>
            <h2>Orders</h2>

            <div className='grid grid-cols-6 gap-4 mb-2'>
                <div className="div">
                    <label class="label">
                        <span class="label-text">From</span>
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
                        <span class="label-text">To</span>
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
                        <span class="label-text">Period</span>
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
                        <span class="label-text">TP Price</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                </div>

                <div>
                    <label class="label">
                        <span class="label-text">Payable TP Price</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                </div>

                <div>
                    <label class="label">
                        <span class="label-text">MRP Price</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-xs input-bordered w-full max-w-xs" />
                </div>
            </div>

            <div className='flex justify-between gap-4 text-xs'>
                <div className='grid grid-cols-5 gap-2 mb-4'>
                    <button class="btn btn-xs capitalize">Daily Product Order</button>
                    <button class="btn btn-xs capitalize">Monthly Product Order</button>
                    <button class="btn btn-xs capitalize">Supplier Wise Product Order</button>
                    <button class="btn btn-xs capitalize">Product Order</button>
                    <button class="btn btn-xs capitalize">Canceled Order</button>
                </div>

                <div className='grid grid-cols-2 gap-2 mb-2'>
                    <button class="btn btn-xs gap-2">
                        Print
                        <BsPrinterFill />
                    </button>
                    <button class="btn btn-xs gap-2">
                        New
                        <MdOutlineAddBox />
                    </button>
                </div>
            </div>

            <table class="table table-zebra table-compact w-full">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    <OrderRow />
                    <OrderRow />
                    <OrderRow />
                    <OrderRow />
                </tbody>
                <tfoot>
                    {
                        tableHead
                    }
                </tfoot>
            </table>
        </div>
    );
};

export default Orders;