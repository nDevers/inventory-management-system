import React from 'react';
import SaveButton from '../../../components/Buttons/SaveButton';
import CancelButton from '../../../components/Buttons/CancelButton';
import PrintButton from '../../../components/Buttons/PrintButton';
import NewButton from '../../../components/Buttons/NewButton';
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

const NonPharmacyProducts = () => {
    const tableHeadItems = ['SN', 'Code', 'Product name', 'Category', 'Strength', 'Company', 'Stock', 'Pack Type', 'Pack Size', 'Pack TP', 'Pack MRP', 'Unit TP', 'Unit MRP', 'Creator', 'Created At', 'Actions'];

    const tableHead = <tr>
        {
            tableHeadItems?.map((tableHeadItem, index) => <th key={index} className='text-xs md:text-2xs lg:text-md' >{tableHeadItem}</th>)
        }
    </tr>;

    const addNonPharmacyProduct = event => {
        event.preventDefault();

        const tradeName = event?.target?.tradeName?.value;
        const genericName = event?.target?.genericName?.value;
        const strength = event?.target?.strength?.value;
        const category = event?.target?.category?.value;
        const company = event?.target?.company?.value;
        const stock = event?.target?.stock?.value;
        const packType = event?.target?.packType?.value;
        const purchaseUnitType = event?.target?.purchaseUnitType?.value;
        const purchasePackSize = event?.target?.purchasePackSize?.value;
        const packTp = event?.target?.packTp?.value;
        const unitTp = event?.target?.unitTp?.value;
        const purchaseVatPercent = event?.target?.purchaseVatPercent?.value;
        const purchaseVatTaka = event?.target?.purchaseVatTaka?.value;
        const purchaseDiscountPercent = event?.target?.purchaseDiscountPercent?.value;
        const purchaseDiscountTaka = event?.target?.purchaseDiscountTaka?.value;
        const salesUnitType = event?.target?.salesUnitType?.value;
        const salePackSize = event?.target?.salePackSize?.value;
        const packMrp = event?.target?.packMrp?.value;
        const unitMrp = event?.target?.unitMrp?.value;
        const salesVatPercent = event?.target?.salesVatPercent?.value;
        const salesVatTaka = event?.target?.salesVatTaka?.value;
        const salesDiscountPercent = event?.target?.salesDiscountPercent?.value;
        const salesDiscountTaka = event?.target?.salesDiscountTaka?.value;
        const addedBy = 'admin';
        const addedToDbAt = new Date();

        const productDetails = { tradeName, genericName, strength, category, company, stock, packType, purchaseUnitType, purchasePackSize, packTp, unitTp, purchaseVatPercent, purchaseVatTaka, purchaseDiscountPercent, purchaseDiscountTaka, salesUnitType, salePackSize, packMrp, unitMrp, salesVatPercent, salesVatTaka, salesDiscountPercent, salesDiscountTaka, addedBy, addedToDbAt };

        // send data to server
        fetch('https://stringlab-ims-server.herokuapp.com/api/products/pharmacy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast(
                    <div className="alert alert-success shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{tradeName} added successfully.</span>
                        </div>
                    </div>
                );
            });

        event.target.reset();
    };

    const [pharmacyProducts, setPharmacyProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [unitTypes, setUnitTypes] = useState([]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/products/pharmacy')
            .then(res => res.json())
            .then(products => setPharmacyProducts(products));
    }, [pharmacyProducts]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/setup/categories')
            .then(res => res.json())
            .then(c => setCategories(c));
    }, [categories]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/setup/companies')
            .then(res => res.json())
            .then(c => setCompanies(c));
    }, [companies]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/setup/unitTypes')
            .then(res => res.json())
            .then(ut => setUnitTypes(ut));
    }, [unitTypes]);

    return (
        <section className='lg:p-4 md:p-2 p-1'>
            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-y-2 mb-6">
                <h2 className='lg:text-2xl md:text-xl text-lg text-center font-bold'>
                    Pharmacy Products: <span className='badge badge-lg badge-secondary'>{pharmacyProducts.length}</span>
                </h2>

                <div className='flex items-center gap-x-4'>
                    <NewButton modalId='create-new-product' btnSize='btn-xs' />
                    <RefreshButton btnSize='btn-xs' />
                    <PrintButton btnSize='btn-xs' />
                </div>
            </div>

            <input type="checkbox" id="create-new-product" className="modal-toggle" />
            <label htmlFor="create-new-product" className="modal cursor-pointer">
                <label className="modal-box lg:w-7/12 md:w-10/12 w-11/12 max-w-4xl relative" htmlFor="">
                    <ModalCloseButton modalId={'create-new-product'} />

                    <ModalHeading modalHeading={'Create a Pharmacy Product'} />

                    <form onSubmit={addNonPharmacyProduct}>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1 mb-2'>
                            <Input title={'Trade Name'} type='text' placeholder='Trade name' name='tradeName' isRequired='required' />
                            <Input title={'Generic Name'} type='text' placeholder='Generic name' name='genericName' isRequired='required' />
                            <Input title={'Strength'} type='number' placeholder='Strength' name='strength' isRequired='required' />

                            <Select title={'Category'} name='category' isRequired='required' options={categories.map(c => c.name)} />
                            <Select title={'Company'} name='company' isRequired='required' options={companies.map(c => c.name)} />
                            <Input title={'Stock'} type='number' placeholder='Stock' name='stock' isRequired='required' />
                            <Select title={'Pack Type'} name='packType' isRequired='required' />
                        </div>

                        <div className="flex flex-col w-full lg:flex-row mt-4 place-content-center">
                            <div className="grid">
                                <h3 className='text-xl'>Purchase Area</h3>

                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Select title={'Purchase Unit Type'} name='purchaseUnitType' isRequired='required' options={unitTypes.map(c => c.name)} />
                                    <Input title={'Pack Size'} type='number' placeholder='Pack size' name='packSize' isRequired='required' />
                                </div>

                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Input title={'Pack TP'} type='number' placeholder='Pack TP' name='packTp' isRequired='required' />
                                    <Input title={'Unit TP'} type='number' placeholder='Unit TP' name='unitTp' isRequired='required' />
                                </div>

                                <DoubleInput title={'Purchase VAT'} name1='purchaseVatPercent' name2='purchaseVatTaka' type1='number' type2='number' placeholder1='%' placeholder2='In taka' />
                                <DoubleInput title={'Purchase Discount'} name1='purchaseDiscountPercent' name2='purchaseDiscountTaka' type1='number' type2='number' placeholder1='%' placeholder2='In taka' />

                                <SaveButton extraClass={'mt-4'} />
                            </div>

                            <div className="divider lg:divider-horizontal"></div>

                            <div className="grid">
                                <h3 className='text-xl'>Sale Area</h3>

                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Select title={'Sales Unit Type'} name='salesUnitType' isRequired='required' options={unitTypes.map(c => c.name)} />
                                    <Input title={'Pack Size'} type='number' name='salePackSize' placeholder='Pack size' isRequired='required' />
                                </div>

                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Input title={'Pack MRP'} type='number' name='packMrp' placeholder='Pack MRP' isRequired='required' />
                                    <Input title={'Unit MRP'} type='number' name='unitMrp' placeholder='Unit MRP' isRequired='required' />
                                </div>

                                <DoubleInput title={'Sales VAT'} name1='salesVatPercent' name2='salesVatTaka' type1='number' type2='number' placeholder1='%' placeholder2='In taka' />
                                <DoubleInput title={'Sales Discount'} name1='salesDiscountPercent' name2='salesDiscountTaka' type1='number' type2='number' placeholder1='%' placeholder2='In taka' />

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
                        pharmacyProducts.map((product, index) =>
                            <TableRow
                                key={product._id}
                                tableRowsData={
                                    [
                                        index + 1,
                                        product.genericName,
                                        product.tradeName,
                                        product.category,
                                        product.strength,
                                        product.company,
                                        product.stock,
                                        product.packType,
                                        product.salePackSize,
                                        product.packTp,
                                        product.packMrp,
                                        product.unitTp,
                                        product.unitMrp,
                                        product.addedBy,
                                        product?.addedToDbAt?.slice(0, 10),
                                        <span className='flex items-center gap-x-1'>
                                            <EditButton id={product._id} />
                                            <DeleteButton
                                                deleteApiLink='https://stringlab-ims-server.herokuapp.com/api/products/pharmacy/'
                                                itemId={product._id} />
                                        </span>
                                    ]
                                } />)
                    }
                </tbody>
            </table>
        </section >
    );
};

export default NonPharmacyProducts;