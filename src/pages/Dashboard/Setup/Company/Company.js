import React from 'react';
import CompanyRow from './CompanyRow';
import PrintButton from '../../../../Components/Buttons/PrintButton';
import NewButton from '../../../../Components/Buttons/NewButton';

const Company = () => {
    const tableHead = <tr>
        <th className='text-xs' >SN</th>
        <th className='text-xs' >Name</th>
        <th className='text-xs' >Phone</th>
        <th className='text-xs' >Website</th>
        <th className='text-xs' >Email</th>
        <th className='text-xs' >Address</th>
        <th className='text-xs' >Creator</th>
        <th className='text-xs' >Created At</th>
        <th className='text-xs' >Updated By</th>
        <th className='text-xs' >Updated At</th>
        <th className='text-xs' >Actions</th>
    </tr>;

    return (
        <section>
            <input type="checkbox" id="add-new-company" class="modal-toggle" />
            <label for="add-new-company" class="modal cursor-pointer">
                <label class="modal-box w-2/5 h-2/5 max-w-4xl relative p-4" for="">
                    <label for="add-new-company" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg text-center uppercase mb-2">Add a Company</h3>

                    <div className='grid grid-cols-2 gap-x-4 place-items-center'>
                        <div>
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered" />
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered" />
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Website</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered" />
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered" />
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered" />
                        </div>
                    </div>
                </label>
            </label>

            <div className="flex justify-between mb-6">
                <NewButton modalId={'add-new-company'} />

                <PrintButton />
            </div>

            <table class="table table-zebra table-compact w-full">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    <CompanyRow />
                    <CompanyRow />
                    <CompanyRow />
                    <CompanyRow />
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

export default Company;