import React, { useEffect, useState } from 'react';
import PrintButton from '../../../components/Buttons/PrintButton';
import Input from '../../../components/FormComponents/Input';
import TableRow from '../../../components/TableRow';
import SaveButton from '../../../components/Buttons/SaveButton';
import EditButton from '../../../components/Buttons/EditButton';
import DeleteButton from '../../../components/Buttons/DeleteButton';

const Companies = () => {
    const tableHeadItems = ['SN', 'Name', 'Phone', 'Website', 'Email', 'Address', 'Creator', 'Created At', 'Updated By', 'Updated At', 'Actions'];

    const tableHead = <tr>
        {
            tableHeadItems?.map(tableHeadItem => <th className='text-xs' >{tableHeadItem}</th>)
        }
    </tr>;

    const addCompany = event => {
        event.preventDefault();

        const name = event?.target?.companyName?.value;
        const phone = event?.target?.companyPhone?.value;
        const website = event?.target?.companyWebsite?.value;
        const email = event?.target?.companyEmail?.value;
        const address = event?.target?.companyAddress?.value;
        const addedBy = 'admin';
        const addedTime = new Date();
        const updatedBy = 'admin';
        const updatedTime = new Date();

        const productDetails = { name, phone, website, email, address, addedBy, addedTime, updatedBy, updatedTime };

        // send data to server
        fetch('https://stringlab-ims-server.herokuapp.com/api/setup/companies', {
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

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/setup/companies')
            .then(res => res.json())
            .then(products => setCompanies(products));
    }, [companies]);

    return (
        <section className='p-4'>
            <form onSubmit={addCompany}>
                <div className="flex justify-between items-center">
                    <h2 className='text-2xl text-center font-bold'>Companies</h2>

                    <div className='flex items-center gap-x-4'>
                        <SaveButton btnSize='btn-xs' />
                        <PrintButton btnSize='btn-xs' />
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className='flex place-items-center gap-4 mt-4 mb-8'>
                        <Input title={'Company Name'} name='companyName' isRequired='required' type='text' />
                        <Input title={'Company Phone'} name='companyPhone' isRequired='required' type='number' />
                        <Input title={'Company Website'} name='companyWebsite' isRequired='required' type='text' />
                        <Input title={'Company Email'} name='companyEmail' isRequired='required' type='email' />
                        <Input title={'Company Address'} name='companyAddress' isRequired='required' type='text' />
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
                        companies.map((company, index) =>
                            <TableRow key={company._id} tableRowsData={
                                [
                                    index + 1,
                                    company.name,
                                    company.phone,
                                    company.website, company.email,
                                    company.address,
                                    company.addedBy,
                                    company.addedTime,
                                    company.updatedBy,
                                    company.updatedTime,
                                    <span className='flex items-center gap-x-1'>
                                        <EditButton />
                                        <DeleteButton deleteApiLink='https://stringlab-ims-server.herokuapp.com/api/setup/companies/' itemId={company._id} />
                                    </span>
                                ]
                            } />)
                    }
                </tbody>
            </table>
        </section>
    );
};

export default Companies;