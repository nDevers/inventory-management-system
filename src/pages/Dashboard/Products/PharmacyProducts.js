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

const PharmacyProducts = () => {
    const tableHeadItems = ['SN', 'Code', 'Product name', 'Category', 'Strength', 'Company', 'Stock', 'Pack Type', 'Pack Size', 'Pack TP', 'Pack MRP', 'Unit TP', 'Unit MRP', 'Creator', 'Created At', 'Actions'];

    const tableHead = <tr>
        {
            tableHeadItems?.map(tableHeadItem => <th className='text-xs md:text-2xs lg:text-md' >{tableHeadItem}</th>)
        }
    </tr>;

    const addPharmacyProduct = event => {
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
                    <div class="alert alert-success shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{tradeName} added successfully.</span>
                        </div>
                    </div>
                );
            });

        // event.target.reset();
    };

    const [pharmacyProducts, setPharmacyProducts] = useState([]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/products/pharmacy')
            .then(res => res.json())
            .then(products => setPharmacyProducts(products));
    }, [pharmacyProducts]);

    return (
        <section className='p-4'>
            <div className="flex justify-between items-center mb-8">
                <h2 className='text-2xl text-center font-bold'>Pharmacy Products</h2>

                <div className='flex items-center gap-x-4'>
                    <NewButton modalId='create-new-product' btnSize='btn-xs' />
                    <RefreshButton btnSize='btn-xs' />
                    <PrintButton btnSize='btn-xs' />
                </div>
            </div>

            <input type="checkbox" id="create-new-product" class="modal-toggle" />
            <label for="create-new-product" class="modal cursor-pointer">
                <label class="modal-box w-7/12 max-w-4xl relative" for="">
                    <ModalCloseButton modalId={'create-new-product'} />

                    <ModalHeading modalHeading={'Create a Pharmacy Product'} />

                    <form onSubmit={addPharmacyProduct}>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1 mb-2'>
                            <Input title={'Trade Name'} type='text' placeholder='Trade name' name='tradeName' isRequired='required' />
                            <Input title={'Generic Name'} type='text' placeholder='Generic name' name='genericName' isRequired='required' />
                            <Input title={'Strength'} type='number' placeholder='Strength' name='strength' isRequired='required' />

                            <Select title={'Category'} name='category' isRequired='required' />
                            <Select title={'Company'} name='company' isRequired='required' />
                            <Input title={'Stock'} type='number' placeholder='Stock' name='stock' isRequired='required' />
                            <Select title={'Pack Type'} name='packType' isRequired='required' />
                        </div>

                        <div class="flex flex-col w-full lg:flex-row mt-4 place-content-center">
                            <div class="grid">
                                <h3 className='text-xl'>Purchase Area</h3>

                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Select title={'Purchase Unit Type'} name='purchaseUnitType' isRequired='required' />
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

                            <div class="divider lg:divider-horizontal"></div>

                            <div class="grid">
                                <h3 className='text-xl'>Sale Area</h3>

                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Select title={'Sales Unit Type'} name='salesUnitType' isRequired='required' />
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

            {/* update a pharmacy product */}
            <input type="checkbox" id="update-pharmacy-product" class="modal-toggle" />
            <label for="update-pharmacy-product" class="modal cursor-pointer">
                <label class="modal-box w-11/12 max-w-4xl relative" for="">
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

                        <div class="flex flex-col w-full lg:flex-row mt-4 place-content-center">
                            <div class="grid">
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

                                <SaveButton extraClass={'mt-4'} />
                            </div>

                            <div class="divider lg:divider-horizontal"></div>

                            <div class="grid">
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

                                <CancelButton extraClass={'mt-4'} />
                            </div>
                        </div>
                    </form>
                </label>
            </label>

            <table class="table table-zebra table-compact">
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
                                        product.addedToDbAt.slice(0, 10),
                                        <span className='flex items-center gap-x-1'>
                                            <EditButton />
                                            <DeleteButton
                                                deleteApiLink='https://stringlab-ims-server.herokuapp.com/api/setup/categories/'
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

export default PharmacyProducts;