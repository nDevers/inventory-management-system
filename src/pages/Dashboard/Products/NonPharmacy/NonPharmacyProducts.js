import React from 'react';
import NonPharmacyProductsRow from './NonPharmacyProductsRow';
import PrintButton from '../../../../components/Buttons/PrintButton';
import SaveButton from '../../../../components/Buttons/SaveButton';
import CancelButton from '../../../../components/Buttons/CancelButton';
import NewButton from '../../../../components/Buttons/NewButton';
import ItemsViewNumber from '../../../../components/ItemsViewNumber';
import ModalCloseButton from '../../../../components/Buttons/ModalCloseButton';
import ModalHeading from '../../../../components/Headings/ModalHeading';
import Input from '../../../../components/FormComponents/Input';
import Select from '../../../../components/FormComponents/Select';
import DoubleInput from '../../../../components/FormComponents/DoubleInput';

const PharmacyProducts = () => {
    const tableHeadItems = ['SN', 'Code', 'Product name', 'Category', 'Strength', 'Company', 'Stock', 'Pack Type', 'Pack Size', 'TP', 'MRP', 'TP', 'MRP', 'Actions', <ItemsViewNumber />];

    const tableHead = <tr>
        {
            tableHeadItems?.map(tableHeadItem => <th className='text-xs' >{tableHeadItem}</th>)
        }
    </tr>;

    return (
        <section>
            <div className="flex justify-between mb-6">
                <NewButton modalId={'create-new-product'} />
                <PrintButton />
            </div>

            <input type="checkbox" id="create-new-product" class="modal-toggle" />
            <label for="create-new-product" class="modal cursor-pointer">
                <label class="modal-box w-11/12 max-w-4xl relative" for="">
                    <ModalCloseButton modalId={'create-new-product'} />

                    <ModalHeading modalHeading={'Create a Non Pharmacy Product'} />

                    <div className='grid grid-cols-5 gap-4 mb-2'>
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

                            <SaveButton />
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

                            <CancelButton />
                        </div>
                    </div>
                </label>
            </label>

            <table class="table table-zebra table-compact w-full">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    <NonPharmacyProductsRow />
                    <NonPharmacyProductsRow />
                    <NonPharmacyProductsRow />
                    <NonPharmacyProductsRow />
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