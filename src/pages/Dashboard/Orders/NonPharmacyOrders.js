import React from 'react';
import SaveButton from '../../../components/buttons/SaveButton';
import CancelButton from '../../../components/buttons/CancelButton';
import PrintButton from '../../../components/buttons/PrintButton';
import NewButton from '../../../components/buttons/NewButton';
import Input from '../../../components/form/Input';
import Select from '../../../components/form/Select';
import ModalCloseButton from '../../../components/buttons/ModalCloseButton';
import ModalHeading from '../../../components/headings/ModalHeading';
import { useState } from 'react';
import { useEffect } from 'react';
import RefreshButton from '../../../components/buttons/RefreshButton';
import TableRow from '../../../components/TableRow';
import EditButton from '../../../components/buttons/EditButton';
import DeleteButton from '../../../components/buttons/DeleteButton';
import { toast } from 'react-toastify';
import DashboardPageHeading from '../../../components/headings/DashboardPageHeading';
import AddModal from '../../../components/modals/AddModal';

const NonPharmacyOrders = () => {
    const tableHeadItems = ['SN', 'Voucher', 'Supplier', 'Status', 'Quantity', 'TP', 'Vat', 'Discount', 'MRP', 'Creator', 'Created At', 'Actions'];

    const modalTableHeadItems1 = ['SN', 'Name', 'Strength', 'Company', 'Category', 'Pack Type', 'TP'];

    const modalTableHeadItems2 = ['SN', 'Name', 'Strength', 'Category', 'Stock', 'Quantity', 'Total TP', 'Action'];

    const tableHead = <tr>
        {
            tableHeadItems?.map((tableHeadItem, index) => <th key={index} className='text-xs md:text-2xs lg:text-md' >{tableHeadItem}</th>)
        }
    </tr>;

    const modalTableHead1 = <tr>
        {
            modalTableHeadItems1?.map((tableHeadItem, index) => <th key={index} className='text-xs md:text-2xs lg:text-md' >{tableHeadItem}</th>)
        }
    </tr>;

    const modalTableHead2 = <tr>
        {
            modalTableHeadItems2?.map((tableHeadItem, index) => <th key={index} className='text-xs md:text-2xs lg:text-md' >{tableHeadItem}</th>)
        }
    </tr>;

    // add pharmacy order to db
    const addNonPharmacyOrder = event => {
        event.preventDefault();

        const supplier = event?.target?.supplier?.value; const tradeName = event?.target?.tradeName?.value;
        const category = event?.target?.category?.value;
        const strength = event?.target?.strength?.value;
        const boxType = event?.target?.boxType?.value;
        const unitType = event?.target?.unitType?.value;
        const creator = 'admin';
        const createdAt = new Date();

        const productDetails = { supplier, tradeName, category, strength, boxType, unitType, creator, createdAt };

        // send data to server
        fetch('https://stringlab-ims-server.herokuapp.com/api/orders/pharmacy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast(
                    <AddModal name='Order' />
                );
            });

        event.target.reset();
    };

    const [nonPharmacyOrders, setNonPharmacyOrders] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [unitTypes, setUnitTypes] = useState([]);

    // get all non pharmacy orders
    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/orders/pharmacy')
            .then(res => res.json())
            .then(products => setNonPharmacyOrders(products));
    }, [nonPharmacyOrders]);

    // get categories data
    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/setup/categories')
            .then(res => res.json())
            .then(c => setCategories(c));
    }, [categories]);

    // get all suppliers data
    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/suppliers/lists')
            .then(res => res.json())
            .then(s => setSuppliers(s));
    }, [suppliers]);

    // get unit types data
    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/setup/unitTypes')
            .then(res => res.json())
            .then(ut => setUnitTypes(ut));
    }, [unitTypes]);

    return (
        <section className='p-4 mt-16'>
            <DashboardPageHeading
                name='Non Pharmacy Orders'
                value={nonPharmacyOrders.length}
                buttons={[
                    <NewButton modalId='create-non-pharmacy-order' />,
                    <RefreshButton />,
                    <PrintButton />
                ]}
            />

            <input type="checkbox" id="create-non-pharmacy-order" className="modal-toggle" />
            <label htmlFor="create-non-pharmacy-order" className="modal cursor-pointer">
                <label className="modal-box lg:w-8/12 md:w-8/12 w-11/12 max-w-4xl relative" htmlFor="">
                    <ModalCloseButton modalId={'create-non-pharmacy-order'} />

                    <ModalHeading modalHeading={'Create A Non Pharmacy Order'} />

                    <form onSubmit={addNonPharmacyOrder}>
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1 mb-2'>
                            <Select title={'Supplier'} name='supplier' isRequired='required' options={suppliers.map(s => s.name)} />
                            <Input title={'Trade Name'} type='text' placeholder='Trade name' name='tradeName' isRequired='required' />
                            <Select title={'Category'} name='category' isRequired='required' options={categories.map(c => c.name)} />

                            <Input title={'Strength'} type='text' placeholder='Strength' name='strength' isRequired='required' />

                            <Select title={'Box Type'} name='boxType' isRequired='required' />
                            <Select title={'Unit Type'} name='unitType' isRequired='required' options={unitTypes.map(u => u.name)} />
                        </div>

                        <div className="flex flex-col w-full lg:flex-row mt-4 place-content-center">
                            <div className="grid">
                                <table className="table table-zebra table-compact">
                                    <thead>
                                        {
                                            modalTableHead1
                                        }
                                    </thead>
                                    <tbody>
                                        {
                                            nonPharmacyOrders.map((product, index) =>
                                                <TableRow
                                                    key={product._id}
                                                    tableRowsData={
                                                        [
                                                            index + 1,
                                                            product.name,
                                                            product.strength,
                                                            product.company,
                                                            product.category,
                                                            product.packType,
                                                            product.Tp,
                                                        ]
                                                    } />)
                                        }
                                    </tbody>
                                </table>

                                <SaveButton extraClass={'mt-4'} />
                            </div>

                            <div className="divider lg:divider-horizontal"></div>

                            <div className="grid">

                                <table className="table table-zebra table-compact">
                                    <thead>
                                        {
                                            modalTableHead2
                                        }
                                    </thead>
                                    <tbody>
                                        {
                                            nonPharmacyOrders.map((product, index) =>
                                                <TableRow
                                                    key={product._id}
                                                    tableRowsData={
                                                        [
                                                            index + 1,
                                                            product.name,
                                                            product.strength,
                                                            product.category,
                                                            product.stock,
                                                            product.quantity,
                                                            product.totalTp,
                                                            <span className='flex items-center gap-x-1'>
                                                                <EditButton />
                                                                <DeleteButton
                                                                    deleteApiLink='https://stringlab-ims-server.herokuapp.com/api/orders/pharmacy/'
                                                                    itemId={'pharmacyOrder._id'} />
                                                            </span>
                                                        ]
                                                    } />)
                                        }
                                    </tbody>
                                </table>

                                <CancelButton extraClass={'mt-4'} />
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
                        nonPharmacyOrders.map((pharmacyOrder, index) =>
                            <TableRow
                                key={pharmacyOrder._id}
                                tableRowsData={
                                    [
                                        index + 1,
                                        pharmacyOrder.voucher,
                                        pharmacyOrder.supplier,
                                        pharmacyOrder.status,
                                        pharmacyOrder.quantity,
                                        pharmacyOrder.status,
                                        pharmacyOrder.vat,
                                        pharmacyOrder.discount,
                                        pharmacyOrder.mrp,
                                        pharmacyOrder.creator,
                                        pharmacyOrder?.createdAt?.slice(0, 10),
                                        <span className='flex items-center gap-x-1'>
                                            <EditButton />
                                            <DeleteButton
                                                deleteApiLink='https://stringlab-ims-server.herokuapp.com/api/orders/pharmacy/'
                                                itemId={pharmacyOrder._id} name='Order' />
                                        </span>
                                    ]
                                } />)
                    }
                </tbody>
            </table>
        </section >
    );
};

export default NonPharmacyOrders;