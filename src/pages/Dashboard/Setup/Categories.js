import React from 'react';
import PrintButton from '../../../components/Buttons/PrintButton';
import NewButton from '../../../components/Buttons/NewButton';
import ModalHeading from '../../../components/Headings/ModalHeading';
import Input from '../../../components/FormComponents/Input';
import Select from '../../../components/FormComponents/Select';
import ModalCloseButton from '../../../components/Buttons/ModalCloseButton';
import TableRow from '../../../components/TableRow';

const Categories = () => {
    const tableHeadItems = ['SN', 'Name', 'Description', 'Creator', 'Created At', 'Updated By', 'Updated At', 'Actions'];

    const tableHead = <tr>
        {
            tableHeadItems?.map(tableHeadItem => <th className='text-xs' >{tableHeadItem}</th>)
        }
    </tr>;

    return (
        <section>
            <input type="checkbox" id="create-new-category" class="modal-toggle" />
            <label for="create-new-category" class="modal cursor-pointer">
                <label class="modal-box w-2/5 h-2/5 max-w-4xl relative p-4" for="">
                    <ModalCloseButton modalId={'create-new-category'} />

                    <ModalHeading modalHeading={'Create a Category'} />

                    <div className='grid grid-cols-2 gap-x-4 place-items-center'>
                        <Input title={'Name'} />
                        <Select title={'Type'} />
                    </div>
                </label>
            </label>

            <div className="flex justify-between mb-6">
                <NewButton modalId={'create-new-category'} />
                <PrintButton />
            </div>

            <table class="table table-zebra table-compact w-full">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
                    <TableRow tableRowsData={[`1`, `Tablet`, `Box of Items`, `Admin`, `2-10-22`, `Null`, `Null`]} />
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

export default Categories;