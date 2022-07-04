import React from 'react';
import { MdOutlineAddBox } from 'react-icons/md';
import PrintButton from '../../../../Components/Buttons/PrintButton';
import Input from '../../../../Components/FormComponents/Input';
import Select from '../../../../Components/FormComponents/Select';
import ItemsViewNumber from '../../../../Components/ItemsViewNumber';
import OrderRow from './PharmacyOrderRow';

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
                    <PrintButton btnSize={'btn-xs'} />

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

export default PharmacyOrders;