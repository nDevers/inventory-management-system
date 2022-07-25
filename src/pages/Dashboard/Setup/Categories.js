import React, { useEffect, useState } from 'react';
import PrintButton from '../../../components/Buttons/PrintButton';
import Input from '../../../components/FormComponents/Input';
import TableRow from '../../../components/TableRow';
import SaveButton from '../../../components/Buttons/SaveButton';
import EditButton from '../../../components/Buttons/EditButton';
import DeleteButton from '../../../components/Buttons/DeleteButton';
import RefreshButton from '../../../components/Buttons/RefreshButton';
import TotalItems from '../../../components/TotalItems';

const Categories = () => {
    const tableHeadItems = ['SN', 'Name', 'Description', 'Creator', 'Created At', 'Updated By', 'Updated At', 'Actions'];

    const tableHead = <tr>
        {
            tableHeadItems?.map(tableHeadItem => <th className='text-xs' >{tableHeadItem}</th>)
        }
    </tr>;

    const addCategory = event => {
        event.preventDefault();

        const name = event?.target?.categoryName?.value;
        const description = event?.target?.categoryDescription?.value;
        const addedBy = 'admin';
        const addedTime = new Date();
        const updatedBy = 'admin';
        const updatedTime = new Date();

        const categoryDetails = { name, description, addedBy, addedTime, updatedBy, updatedTime };

        // send data to server
        fetch('https://stringlab-ims-server.herokuapp.com/api/setup/categories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(categoryDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success');
            });
    };

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/setup/categories')
            .then(res => res.json())
            .then(products => setCategories(products));
    }, [categories]);

    return (
        <section className='p-4'>
            <form onSubmit={addCategory}>
                <div className="flex justify-between items-center">
                    <h2 className='text-2xl text-center font-bold'>Categories: <TotalItems text={categories.length} /></h2>

                    <div className='flex items-center gap-x-4'>
                        <SaveButton btnSize='btn-xs' />
                        <RefreshButton btnSize='btn-xs' />
                        <PrintButton btnSize='btn-xs' />
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className='flex place-items-center gap-4 mt-4 mb-8'>
                        <Input title={'Category Name'} name='categoryName' isRequired='required' />
                        <Input title={'Description'} name='categoryDescription' isRequired='required' />
                    </div>
                </div>
            </form>

            <table className="table table-zebra table-compact w-full">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    {
                        categories.map((category, index) =>
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
                                                deleteApiLink='https://stringlab-ims-server.herokuapp.com/api/setup/categories/'
                                                itemId={category._id} />
                                        </span>
                                    ]
                                } />)
                    }
                </tbody>
            </table>
        </section>
    );
};

export default Categories;