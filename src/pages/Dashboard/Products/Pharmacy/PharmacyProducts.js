import React from 'react';
import PharmacyProductsRow from './PharmacyProductsRow';
import SaveButton from '../../../../components/Buttons/SaveButton';
import CancelButton from '../../../../components/Buttons/CancelButton';
import PrintButton from '../../../../components/Buttons/PrintButton';
import NewButton from '../../../../components/Buttons/NewButton';
import Input from '../../../../components/FormComponents/Input';
import Select from '../../../../components/FormComponents/Select';
import DoubleInput from '../../../../components/FormComponents/DoubleInput';
import ModalCloseButton from '../../../../components/Buttons/ModalCloseButton';
import ModalHeading from '../../../../components/Headings/ModalHeading';
import { useState } from 'react';
import { useEffect } from 'react';

const PharmacyProducts = () => {
    const tableHeadItems = ['SN', 'Code', 'Product name', 'Category', 'Strength', 'Company', 'Stock', 'Pack Type', 'Pack Size', 'TP', 'MRP', 'TP', 'MRP', 'Actions'];

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
        const packSize = event?.target?.packSize?.value;
        const packTp = event?.target?.packTp?.value;
        const unitTp = event?.target?.unitTp?.value;
        const productAddedBy = 'admin';
        const productAddedToDBAt = new Date();

        const productDetails = { tradeName, genericName, strength, packSize, packTp, unitTp, productAddedBy, productAddedToDBAt };

        // send data to server
        fetch('http://localhost:5000/api/products/pharmacy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success');
            });
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
                    <SaveButton btnSize='btn-xs' />
                    <PrintButton btnSize='btn-xs' />
                </div>
            </div>

            <input type="checkbox" id="create-new-product" class="modal-toggle" />
            <label for="create-new-product" class="modal cursor-pointer">
                <label class="modal-box w-11/12 max-w-4xl relative" for="">
                    <ModalCloseButton modalId={'create-new-product'} />

                    <ModalHeading modalHeading={'Create a Pharmacy Product'} />

                    <form onSubmit={addPharmacyProduct}>
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
                        pharmacyProducts.map((pharmacyProduct, index) => <PharmacyProductsRow key={pharmacyProduct?._id} index={index} pharmacyProduct={pharmacyProduct} modalId={'update-pharmacy-product'} />)
                    }
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