import { Input } from 'postcss';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BiEdit } from 'react-icons/bi';
import DoubleInput from '../FormComponents/DoubleInput';
import Select from '../FormComponents/Select';
import ModalHeading from '../Headings/ModalHeading';
import CancelButton from './CancelButton';
import ModalCloseButton from './ModalCloseButton';
import SaveButton from './SaveButton';

const EditButton = ({ id }) => {
    const [pharmacyProduct, setPharmacyProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/pharmacy/${id}`)
            .then(res => res.json())
            .then(products => setPharmacyProduct(products));
    }, [pharmacyProduct]);

    console.log(pharmacyProduct)

    return (
        <div>
            {/* update a pharmacy product */}
            <input type="checkbox" id="update-pharmacy-product" className="modal-toggle" />
            <label htmlFor="update-pharmacy-product" className="modal cursor-pointer">
                <label className="modal-box lg:w-7/12 md:w-10/12 w-11/12 max-w-4xl relative" htmlFor="">
                    <ModalCloseButton modalId={'update-pharmacy-product'} />

                    <ModalHeading modalHeading={pharmacyProduct.tradeName + ' Update a Pharmacy Product'} />

                    <form>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1 mb-2'>
                            <Input title={'Trade Name'} type='text' placeholder='Trade name' name='tradeName' isRequired='required' />
                            <Input title={'Generic Name'} type='text' placeholder='Generic name' name='genericName' isRequired='required' />
                            <Input title={'Strength'} type='number' placeholder='Strength' name='strength' isRequired='required' />

                            <Select title={'Category'} name='category' isRequired='required' options={pharmacyProduct.map(c => c.name)} />
                            {/* <Select title={'Company'} name='company' isRequired='required' options={companies.map(c => c.name)} /> */}
                            <Input title={'Stock'} type='number' placeholder='Stock' name='stock' isRequired='required' />
                            <Select title={'Pack Type'} name='packType' isRequired='required' />
                        </div>

                        <div className="flex flex-col w-full lg:flex-row mt-4 place-content-center">
                            <div className="grid">
                                <h3 className='text-xl'>Purchase Area</h3>

                                <div className='grid grid-cols-2 gap-x-4'>
                                    {/* <Select title={'Purchase Unit Type'} name='purchaseUnitType' isRequired='required' options={unitTypes.map(c => c.name)} /> */}
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
                                    {/* <Select title={'Sales Unit Type'} name='salesUnitType' isRequired='required' options={unitTypes.map(c => c.name)} /> */}
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


            <label htmlFor='update-pharmacy-product' className={`gap-x-2 modal-button z-10 block p-1 text-blue-700 transition-all bg-blue-100 border-2 border-white rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring`}>
                <BiEdit />
            </label>
        </div>
    );
};

export default EditButton;