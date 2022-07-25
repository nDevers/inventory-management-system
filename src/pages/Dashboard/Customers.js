import React, { useEffect, useState } from 'react';
import PrintButton from '../../components/Buttons/PrintButton';
import Input from '../../components/FormComponents/Input';
import TableRow from '../../components/TableRow';
import SaveButton from '../../components/Buttons/SaveButton';
import EditButton from '../../components/Buttons/EditButton';
import DeleteButton from '../../components/Buttons/DeleteButton';
import RefreshButton from '../../components/Buttons/RefreshButton';
import TotalItems from '../../components/TotalItems';

const Customers = () => {
    const tableHeadItems = ['SN', 'Name', 'Phone', 'Website', 'Email', 'Address', 'Creator', 'Created At', 'Updated By', 'Updated At', 'Actions'];

    const tableHead = <tr>
        {
            tableHeadItems?.map((tableHeadItem, index) => <th key={index} className='text-xs' >{tableHeadItem}</th>)
        }
    </tr>;

    const addCustomer = event => {
        event.preventDefault();

        const name = event?.target?.customerName?.value;
        const phone = event?.target?.customerPhone?.value;
        const website = event?.target?.customerWebsite?.value;
        const email = event?.target?.customerEmail?.value;
        const address = event?.target?.customerAddress?.value;
        const addedBy = 'admin';
        const addedTime = new Date();
        const updatedBy = 'admin';
        const updatedTime = new Date();

        const productDetails = { name, phone, website, email, address, addedBy, addedTime, updatedBy, updatedTime };

        // send data to server
        fetch('https://stringlab-ims-server.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success');
            });
    };

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/customers')
            .then(res => res.json())
            .then(products => setCustomers(products));
    }, [customers]);

    return (
        <section className='p-4'>
            <form onSubmit={addCustomer}>
                <div className="flex justify-between items-center">
                    <h2 className='text-2xl text-center font-bold'>Customers: <TotalItems text={customers.length} /></h2>

                    <div className='flex items-center gap-x-4'>
                        <SaveButton btnSize='btn-xs' />
                        <RefreshButton btnSize='btn-xs' />
                        <PrintButton btnSize='btn-xs' />
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className='flex place-items-center gap-4 mt-4 mb-8'>
                        <Input title={'Customer Name'} name='customerName' isRequired='required' type='text' />
                        <Input title={'Customer Phone'} name='customerPhone' isRequired='required' type='text' />
                        <Input title={'Customer Website'} name='customerWebsite' type='text' />
                        <Input title={'Customer Email'} name='customerEmail' type='email' />
                        <Input title={'Customer Address'} name='customerAddress' isRequired='required' type='text' />
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
                        customers.map((customer, index) =>
                            <TableRow key={customer._id} tableRowsData={
                                [
                                    index + 1,
                                    customer.name,
                                    customer.phone,
                                    customer.website, customer.email,
                                    customer.address,
                                    customer.addedBy,
                                    customer?.addedTime?.slice(0, 10),
                                    customer.updatedBy,
                                    customer?.updatedTime?.slice(0, 10),
                                    <span className='flex items-center gap-x-1'>
                                        <EditButton />
                                        <DeleteButton deleteApiLink='https://stringlab-ims-server.herokuapp.com/api/customers' itemId={customer._id} />
                                    </span>
                                ]
                            } />)
                    }
                </tbody>
            </table>
        </section>
    );
};

export default Customers;