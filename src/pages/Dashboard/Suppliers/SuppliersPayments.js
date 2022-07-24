import React from 'react';
import SaveButton from '../../../components/Buttons/SaveButton';
import CancelButton from '../../../components/Buttons/CancelButton';
import PrintButton from '../../../components/Buttons/PrintButton';
import Input from '../../../components/FormComponents/Input';
import Select from '../../../components/FormComponents/Select';
import DoubleInput from '../../../components/FormComponents/DoubleInput';
import ModalCloseButton from '../../../components/Buttons/ModalCloseButton';
import ModalHeading from '../../../components/Headings/ModalHeading';
import { useState } from 'react';
import { useEffect } from 'react';
import RefreshButton from '../../../components/Buttons/RefreshButton';
import TableRow from '../../../components/TableRow';
import EditButton from '../../../components/Buttons/EditButton';
import DeleteButton from '../../../components/Buttons/DeleteButton';
import { toast } from 'react-toastify';
import InfoCard from '../../../components/InfoCard';

const SuppliersPayments = () => {
    const tableHeadItems = ['SN', 'Due', 'Paid', 'Total', 'Receivable Due', 'Received', 'Actions'];

    const tableHead = <tr>
        {
            tableHeadItems?.map((tableHeadItem, index) => <th key={index} className='text-xs md:text-2xs lg:text-md' >{tableHeadItem}</th>)
        }
    </tr>;

    const [nonPharmacyProducts, setNonPharmacyProducts] = useState([]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/suppliers/payments')
            .then(res => res.json())
            .then(products => setNonPharmacyProducts(products));
    }, [nonPharmacyProducts]);

    return (
        <section className='lg:p-4 md:p-2 p-1'>
            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-y-2">
                <h2 className='lg:text-2xl md:text-xl text-lg text-center font-bold'>Suppliers Payments</h2>

                <div className='flex items-center gap-x-4'>
                    <RefreshButton btnSize='btn-xs' />
                    <PrintButton btnSize='btn-xs' />
                </div>
            </div>

            <div className='flex gap-x-4 justify-around my-6'>
                <InfoCard name='Total Deu' status={'00'} />
                <InfoCard name='Total Paid' status={'00'} />
                <InfoCard name='Total Received' status={'99'} />
            </div>

            {/* update a pharmacy product */}
            <input type="checkbox" id="update-pharmacy-product" className="modal-toggle" />
            <label htmlFor="update-pharmacy-product" className="modal cursor-pointer">
                <label className="modal-box w-11/12 max-w-4xl relative" htmlFor="">
                    <ModalCloseButton modalId={'update-pharmacy-product'} />

                    <ModalHeading modalHeading={'Update a Pharmacy Product'} />

                    <form>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-2'>
                            <Input title={'Trade Name'} name='tradeName' />
                            <Input title={'Generic Name'} name='genericName' />
                            <Input title={'Strength'} name='strength' />

                            <Select title={'Category'} />
                            <Select title={'Company'} />
                        </div>

                        <div className="flex flex-col w-full lg:flex-row mt-4 place-content-center">
                            <div className="grid">
                                <h3 className='text-xl'>Purchase Area</h3>

                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Select title={'Purchase Unit Type'} />
                                    <Input title={'Pack Size'} name='packSize' />
                                </div>

                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Input title={'Pack TP'} name='packTp' />
                                    <Input title={'Unit TP'} name='unitTp' />
                                </div>

                                <DoubleInput title={'Purchase VAT'} />
                                <DoubleInput title={'Purchase Discount'} />

                                <SaveButton extraClass='mt-4' />
                            </div>

                            <div className="divider lg:divider-horizontal"></div>

                            <div className="grid">
                                <h3 className='text-xl'>Sale Area</h3>

                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Select title={'Sales Unit Type'} />
                                    <Input title={'Pack Size'} />
                                </div>

                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Input title={'Pack MRP'} />
                                    <Input title={'Unit MRP'} />
                                </div>

                                <DoubleInput title={'Sales VAT'} />
                                <DoubleInput title={'Sales Discount'} />

                                <CancelButton extraClass='mt-4' />
                            </div>
                        </div>
                    </form>
                </label>
            </label>

            <table className="table table-zebra table-compact">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    {
                        nonPharmacyProducts.map((product, index) =>
                            <TableRow
                                key={product._id}
                                tableRowsData={
                                    [
                                        index + 1,
                                        product.packTp,
                                        product.packMrp,
                                        product.unitTp,
                                        product.addedBy,
                                        product?.addedToDbAt?.slice(0, 10),
                                        <span className='flex items-center gap-x-1'>
                                            <p>Payment</p>
                                            <p>Received</p>
                                        </span>
                                    ]
                                } />)
                    }
                </tbody>
            </table>
        </section >
    );
};

export default SuppliersPayments;