import React from 'react';
//import { MdOutlineAddBox } from 'react-icons/md';
import PrintButton from '../../../../Components/Buttons/PrintButton';
import Input from '../../../../Components/FormComponents/Input';
import Select from '../../../../Components/FormComponents/Select';
import ItemsViewNumber from '../../../../Components/ItemsViewNumber';
import OrderRow from './PharmacyOrderRow';
import SaveButton from '../../../../Components/Buttons/SaveButton';
import CancelButton from '../../../../Components/Buttons/CancelButton';
import NewButton from '../../../../Components/Buttons/NewButton';
import ModalCloseButton from '../../../../Components/Buttons/ModalCloseButton';
import ModalHeading from '../../../../Components/Headings/ModalHeading';

const PharmacyOrders = () => {
    const tableHeadItems = ['SN', 'Voucher', 'Supplier', 'Creator', 'Status', 'Quantity', 'VAT', 'Discount', 'Price', 'Payable Price', 'Created At', <ItemsViewNumber />];

    const tableHead = <tr>
        {
            tableHeadItems?.map(tableHeadItem => <th className='text-xs' >{tableHeadItem}</th>)
        }
    </tr>;

    return (
        <div>
            <h2 className='text-2xl text-center font-bold'>Pharmacy Orders</h2>

            <div className='grid grid-cols-6 gap-4 mb-2'>
                <Select title={'From'} />
                <Select title={'To'} />
                <Select title={'Period'} />
                <Input title={'TP Price'} />
                <Input title={'Payable TP Price'} />
                <Input title={'MRP Price'} />
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
                    <PrintButton/>

                    <NewButton modalId={'create-new-order'} />
                </div>







                <input type="checkbox" id="create-new-order" class="modal-toggle" />
                <label for="create-new-order" class="modal cursor-pointer">
                    <label class="modal-box w-11/12 max-w-4xl relative" for="">
                        <ModalCloseButton modalId={'create-new-order'} />

                        <ModalHeading modalHeading={'Create a Pharmacy order'} />

                        <div class="flex flex-col w-full lg:flex-row mt-4 place-content-center">
                            <div class="grid">
                                <h3 className='text-xl'>Choose product</h3>

                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text">Suplier's only</span> 
                                        <input type="checkbox" class="toggle toggle-sm" checked />
                                    </label>
                                </div>

                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Select title={'Suplier'} />
                                    <Input title={'Tread Name'} />
                                </div>
                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Input title={'Category'} />
                                    <Input title={'Strength'} />
                                </div>
                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Input title={'Box'} />
                                    <Input title={'Unit'} />
                                </div>

                                <SaveButton extraClass={'mt-4'} />
                            </div>

                            <div class="divider lg:divider-horizontal"></div>

                            <div class="grid">
                                <h3 className='text-xl'>Order Items</h3>

                                <div>
                                    <div class="overflow-x-auto">
                                        <table class="table table-compact w-full">
                                            <thead>
                                            <tr>
                                                <th></th> 
                                                <th>Name</th> 
                                                <th>Job</th> 
                                                <th>company</th> 
                                            </tr>
                                            </thead> 
                                            <tbody>
                                            <tr>
                                                <th>1</th> 
                                                <td>Canada</td> 
                                                <td>12/16/2020</td> 
                                                <td>Blue</td>
                                            </tr>
                                            <tr>
                                                <th>2</th> 
                                                <td>United States</td> 
                                                <td>12/5/2020</td> 
                                                <td>Purple</td>
                                            </tr>
                                            <tr>
                                                <th>3</th> 
                                                <td>China</td> 
                                                <td>8/15/2020</td> 
                                                <td>Red</td>
                                            </tr>
                                            <tr>
                                                <th>4</th> 
                                                <td>Russia</td> 
                                                <td>3/25/2021</td> 
                                                <td>Crimson</td>
                                            </tr>
                                            <tr>
                                                <th>5</th> 
                                                <td>Brazil</td> 
                                                <td>5/22/2020</td> 
                                                <td>Indigo</td>
                                            </tr>
                                            </tbody> 
                                        </table>
                                    </div>
                                </div>

                                <CancelButton extraClass={'mt-4'} />
                            </div>
                        </div>
                    </label>
                </label>

















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

export default PharmacyOrders;