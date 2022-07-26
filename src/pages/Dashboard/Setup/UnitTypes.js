import React, { useEffect, useState } from 'react';
import PrintButton from '../../../components/buttons/PrintButton';
import Input from '../../../components/form/Input';
import TableRow from '../../../components/TableRow';
import SaveButton from '../../../components/buttons/SaveButton';
import EditButton from '../../../components/buttons/EditButton';
import DeleteButton from '../../../components/buttons/DeleteButton';
import RefreshButton from '../../../components/buttons/RefreshButton';
import DashboardPageHeading from '../../../components/headings/DashboardPageHeading';
import CancelButton from '../../../components/buttons/CancelButton';
import ModalCloseButton from '../../../components/buttons/ModalCloseButton';
import ModalHeading from '../../../components/headings/ModalHeading';
import NewButton from '../../../components/buttons/NewButton';
import AddModal from '../../../components/modals/AddModal';

const UnitTypes = () => {
    const tableHeadItems = ['SN', 'Name', 'Description', 'Creator', 'Created At', 'Updated By', 'Updated At', 'Actions'];

    const tableHead = <tr>
        {
            tableHeadItems?.map(tableHeadItem => <th className='text-xs' >{tableHeadItem}</th>)
        }
    </tr>;

    const addUnitType = event => {
        event.preventDefault();

        const name = event?.target?.unitName?.value;
        const description = event?.target?.unitDescription?.value;
        const addedBy = 'admin';
        const addedTime = new Date();
        const updatedBy = 'admin';
        const updatedTime = new Date();

        const unitTypeDetails = { name, description, addedBy, addedTime, updatedBy, updatedTime };

        // send data to server
        fetch('https://stringlab-ims-server.herokuapp.com/api/setup/unitTypes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(unitTypeDetails)
        })
            .then(res => res.json())
            .then(data => {
                <AddModal name={name} />
            });

        event.target.reset();
    };

    const [unitTypes, setUnitTypes] = useState([]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/setup/unitTypes')
            .then(res => res.json())
            .then(unitType => setUnitTypes(unitType));
    }, [unitTypes]);

    return (
        <section className='p-4 mt-16'>
            <div>
                <DashboardPageHeading
                    name='Unit Types'
                    value={unitTypes.length}
                    buttons={[
                        <NewButton modalId='create-new-product' />,
                        <RefreshButton />,
                        <PrintButton />
                    ]}
                />

                <input type="checkbox" id="create-new-product" className="modal-toggle" />
                <label htmlFor="create-new-product" className="modal cursor-pointer">
                    <label className="modal-box lg:w-7/12 md:w-10/12 w-11/12 max-w-4xl relative" htmlFor="">
                        <ModalCloseButton modalId={'create-new-product'} />

                        <ModalHeading modalHeading={'Create a Unit Type'} />

                        <form onSubmit={addUnitType} className='mx-auto'>
                            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 mb-2'>
                                <Input title={'Unit Name'} name='unitName' isRequired='required' />
                                <Input title={'Description'} name='unitDescription' isRequired='required' />
                            </div>

                            <div className="flex flex-col w-full lg:flex-row mt-4 place-content-center">
                                <div className="grid">
                                    <SaveButton extraClass='mt-4' />
                                </div>

                                <div className="divider lg:divider-horizontal hidden md:block lg:block"></div>

                                <div className="grid">
                                    <CancelButton extraClass='lg:mt-4 md:mt-3 mt-2' />
                                </div>
                            </div>
                        </form>
                    </label>
                </label>
            </div>

            <table className="table table-zebra table-compact w-full">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    {
                        unitTypes.map((category, index) =>
                            <TableRow
                                key={category._id}
                                tableRowsData={
                                    [
                                        index + 1,
                                        category.name,
                                        category.description,
                                        category.addedBy,
                                        category?.addedTime?.slice(0, 10),
                                        category.updatedBy,
                                        category?.updatedTime?.slice(0, 10),
                                        <span className='flex items-center gap-x-1'>
                                            <EditButton />
                                            <DeleteButton
                                                deleteApiLink='https://stringlab-ims-server.herokuapp.com/api/setup/unitTypes/'
                                                itemId={category._id}
                                                name={category.name} />
                                        </span>
                                    ]
                                } />)
                    }
                </tbody>
            </table>
        </section>
    );
};

export default UnitTypes;