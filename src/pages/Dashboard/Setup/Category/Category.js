import React from 'react';
import CategoryRow from './CategoryRow';
import { BsPrinter, BsSave2 } from 'react-icons/bs';
import { FcCancel } from 'react-icons/fc';
import { MdOutlineAddBox } from 'react-icons/md';

const Category = () => {
    const tableHead = <tr>
        <th className='text-xs' >SN</th>
        <th className='text-xs' >Name</th>
        <th className='text-xs' >Description</th>
        <th className='text-xs' >Creator</th>
        <th className='text-xs' >Created At</th>
        <th className='text-xs' >Updated By</th>
        <th className='text-xs' >Updated At</th>
        <th className='text-xs' >Actions</th>
    </tr>;

    return (
        <section>
            <div className="flex justify-between mb-6">
                <label for="create-new-product" class="btn btn-sm gap-2 modal-button">
                    <MdOutlineAddBox className='text-lg' />
                    New
                </label>
                <button class="btn btn-sm gap-2">
                    <BsPrinter className='text-md' />
                    Print
                </button>
            </div>

            <table class="table table-zebra table-compact w-full">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
                    <CategoryRow />
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

export default Category;