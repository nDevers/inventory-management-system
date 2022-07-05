import React from 'react';
import PharmacyProductsRow from './PharmacyProductsRow';
import SaveButton from '../../../../Components/Buttons/SaveButton';
import CancelButton from '../../../../Components/Buttons/CancelButton';
import PrintButton from '../../../../Components/Buttons/PrintButton';
import NewButton from '../../../../Components/Buttons/NewButton';
import ItemsViewNumber from '../../../../Components/ItemsViewNumber';
import Input from '../../../../Components/FormComponents/Input';
import Select from '../../../../Components/FormComponents/Select';
import DoubleInput from '../../../../Components/FormComponents/DoubleInput';
import ModalCloseButton from '../../../../Components/Buttons/ModalCloseButton';
import ModalHeading from '../../../../Components/Headings/ModalHeading';

const PharmacyProducts = () => {
    const tableHeadItems = ['SN', 'Code', 'Product name', 'Category', 'Strength', 'Company', 'Stock', 'Pack Type', 'Pack Size', 'TP', 'MRP', 'TP', 'MRP', 'Actions', <ItemsViewNumber />];

    const tableHead = <tr>
        {
            tableHeadItems?.map(tableHeadItem => <th className='text-xs md:text-2xs lg:text-md' >{tableHeadItem}</th>)
        }
    </tr>;

    return (
        <section className='p-2 md:p-3'>
            <div className="flex justify-between mb-6">
                <NewButton modalId={'create-new-product'} />
                <PrintButton />
            </div>

            <input type="checkbox" id="create-new-product" class="modal-toggle" />
            <label for="create-new-product" class="modal cursor-pointer">
                <label class="modal-box w-11/12 max-w-4xl relative" for="">
                    <ModalCloseButton modalId={'create-new-product'} />

                    <ModalHeading modalHeading={'Create a Pharmacy Product'} />

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-2'>
                        <Input title={'Trade Name'} />
                        <Input title={'Generic Name'} />
                        <Input title={'Strength'} />

                        <Select title={'Category'} />
                        <Select title={'Company'} />
                    </div>

                    <div class="flex flex-col w-full lg:flex-row mt-4 place-content-center">
                        <div class="grid">
                            <h3 className='text-xl'>Purchase Area</h3>

                            <div className='grid grid-cols-2 gap-x-4'>
                                <Select title={'Purchase Unit Type'} />
                                <Input title={'Pack Size'} />
                            </div>

                            <div className='grid grid-cols-2 gap-x-4'>
                                <Input title={'Pack TP'} />
                                <Input title={'Unit TP'} />
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
                </label>
            </label>

            <table class="table table-zebra table-compact">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    <PharmacyProductsRow />
                    <PharmacyProductsRow />
                    <PharmacyProductsRow />
                    <PharmacyProductsRow />
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