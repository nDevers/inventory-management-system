import React from 'react';
import UnitTypeRow from './UnitTypeRow';
import PrintButton from '../../../../Components/Buttons/PrintButton';
import NewButton from '../../../../Components/Buttons/NewButton';

const UnitType = () => {
    const tableHead = <tr>
        <th className='text-xs' >SN</th>
        <th className='text-xs' >Name</th>
        <th className='text-xs' >Type</th>
        <th className='text-xs' >Creator</th>
        <th className='text-xs' >Created At</th>
        <th className='text-xs' >Updated By</th>
        <th className='text-xs' >Updated At</th>
        <th className='text-xs' >Actions</th>
    </tr>;

    return (
        <section>
            <input type="checkbox" id="create-new-unit-type" class="modal-toggle" />
            <label for="create-new-unit-type" class="modal cursor-pointer">
                <label class="modal-box w-2/5 h-2/5 max-w-4xl relative p-4" for="">
                    <label for="create-new-unit-type" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg text-center uppercase mb-2">Create a Unit Type</h3>

                    <div className='grid grid-cols-1 gap-y-4 place-items-center'>
                        <div>
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-xs input-bordered" />
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <textarea type="text" placeholder="Type here" class="textarea textarea-xs textarea-bordered" />
                        </div>
                    </div>
                </label>
            </label>

            <div className="flex justify-between mb-6">
                <NewButton modalId={'create-new-unit-type'} />

                <PrintButton />
            </div>

            <table class="table table-zebra table-compact w-full">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    <UnitTypeRow />
                    <UnitTypeRow />
                    <UnitTypeRow />
                    <UnitTypeRow />
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

export default UnitType;