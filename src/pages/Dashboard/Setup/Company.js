import React from 'react';
import PrintButton from '../../../Components/Buttons/PrintButton';
import NewButton from '../../../Components/Buttons/NewButton';
import ModalCloseButton from '../../../Components/Buttons/ModalCloseButton';
import ModalHeading from '../../../Components/Headings/ModalHeading';
import Input from '../../../Components/FormComponents/Input';
import TableRow from '../../../Components/TableRow';
import DeleteButton from '../../../Components/Buttons/DeleteButton';
import EditButton from '../../../Components/Buttons/EditButton';

const Company = () => {
    const tableHeadItems = ['SN', 'Name', 'Phone', 'Website', 'Email', 'Address', 'Creator', 'Created At', 'Updated By', 'Updated At', 'Actions'];

    const tableHead = <tr>
        {
            tableHeadItems?.map(tableHeadItem => <th className='text-xs' >{tableHeadItem}</th>)
        }
    </tr>;

    return (
        <section>
            <input type="checkbox" id="add-new-company" class="modal-toggle" />
            <label for="add-new-company" class="modal cursor-pointer">
                <label class="modal-box w-2/5 h-2/5 max-w-4xl relative p-4" for="">
                    <ModalCloseButton modalId={'add-new-company'} />

                    <ModalHeading modalHeading={'Add a Company'} />


                    <div className='grid grid-cols-2 gap-x-4 place-items-center'>
                        <Input title={'Name'} />
                        <Input title={'Phone'} />
                        <Input title={'Website'} />
                        <Input title={'Email'} />
                        <Input title={'Address'} />
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
                    <TableRow tableRowsData={[`1`, `ACMI`, `01700000`, `www.website.com`, `mail@email.com`, `5 / A, Dhaka`, `Admin`, `10-02-2022`, `Null`, `Null`, `DeleteButton, EditButton`]} />
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