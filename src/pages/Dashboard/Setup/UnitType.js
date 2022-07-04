import React from 'react';
import PrintButton from '../../../Components/Buttons/PrintButton';
import NewButton from '../../../Components/Buttons/NewButton';
import ModalCloseButton from '../../../Components/Buttons/ModalCloseButton';
import ModalHeading from '../../../Components/Headings/ModalHeading';
import Input from '../../../Components/FormComponents/Input';
import TextArea from '../../../Components/FormComponents/TextArea';
import TableRow from '../../../Components/TableRow';

const UnitType = () => {
    const tableHeadItems = ['SN', 'Name', 'Type', 'Creator', 'Created At', 'Updated By', 'Updated At', 'Actions'];

    const tableHead = <tr>
        {
            tableHeadItems?.map(tableHeadItem => <th className='text-xs' >{tableHeadItem}</th>)
        }
    </tr>;

    return (
        <section>
            <input type="checkbox" id="create-new-unit-type" class="modal-toggle" />
            <label for="create-new-unit-type" class="modal cursor-pointer">
                <label class="modal-box w-2/5 h-2/5 max-w-4xl relative p-4" for="">
                    <ModalCloseButton modalId={'create-new-unit-type'} />

                    <ModalHeading modalHeading={'Create a Unit Type'} />

                    <div className='grid grid-cols-1 gap-y-4 place-items-center'>
                        <Input title={'Name'} />
                        <TextArea title={'Description'} />
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
                    <TableRow tableRowsData={[`1`, `Tablet`, `Pharmacy`, `Admin`, `2-10-22`, `Null`, `Null`, `Edit / Delete`]} />
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