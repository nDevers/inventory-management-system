import React from 'react';
import CategoryRow from './CategoryRow';
import { BsPrinter, BsSave2 } from 'react-icons/bs';
import { FcCancel } from 'react-icons/fc';
import { MdOutlineAddBox } from 'react-icons/md';
import PrintButton from '../../../../Components/Buttons/PrintButton';

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
            <input type="checkbox" id="create-new-category" class="modal-toggle" />
            <label for="create-new-category" class="modal cursor-pointer">
                <label class="modal-box w-2/5 h-2/5 max-w-4xl relative p-4" for="">
                    <label for="create-new-category" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg text-center uppercase mb-2">Create a Category</h3>

                    <div className='grid grid-cols-2 gap-x-4 place-items-center'>
                        <div>
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered" />
                        </div>

                        <div className="div">
                            <label class="label">
                                <span class="label-text">Type</span>
                            </label>
                            <select class="select select-bordered select-xs">
                                <option disabled selected>Small</option>
                                <option>Small Apple</option>
                                <option>Small Orange</option>
                                <option>Small Tomato</option>
                            </select>
                        </div>
                    </div>
                </label>
            </label>

            <div className="flex justify-between mb-6">
                <label for="create-new-category" class="btn btn-sm gap-2 modal-button">
                    <MdOutlineAddBox className='text-lg' />
                    New
                </label>

                <PrintButton />
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