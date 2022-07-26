import React, { useEffect, useState } from 'react';
import PrintButton from '../../../components/buttons/PrintButton';
import Input from '../../../components/form/Input';
import TableRow from '../../../components/TableRow';
import SaveButton from '../../../components/buttons/SaveButton';
import EditButton from '../../../components/buttons/EditButton';
import DeleteButton from '../../../components/buttons/DeleteButton';
import RefreshButton from '../../../components/buttons/RefreshButton';
import TotalItems from '../../../components/TotalItems';
import DashboardPageHeading from '../../../components/headings/DashboardPageHeading';

const Companies = () => {
    const tableHeadItems = ['SN', 'Name', 'Phone', 'Website', 'Email', 'Address', 'Creator', 'Created At', 'Updated By', 'Updated At', 'Actions'];

    const tableHead = <tr>
        {
            tableHeadItems?.map((tableHeadItem, index) => <th key={index} className='text-xs' >{tableHeadItem}</th>)
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
        <section className='p-4 mt-16'>
            <form onSubmit={addCompany}>
                <DashboardPageHeading
                    name='Customers Returns'
                    value={companies.length}
                    buttons={[
                        <SaveButton />,
                        <RefreshButton />,
                        <PrintButton />
                    ]}
                />

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
                                    company?.addedTime?.slice(0, 10),
                                    company.updatedBy,
                                    company?.updatedTime?.slice(0, 10),
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