import React, { useEffect, useState } from 'react';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar, Line, PieChart, Pie } from 'recharts';
import PrintButton from '../../components/buttons/PrintButton';
import RefreshButton from '../../components/buttons/RefreshButton';
import InfoCard from '../../components/InfoCard';

const DashboardSummary = () => {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ];

    const data01 = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 300
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ];

    const data02 = [
        {
            "name": "Group A",
            "value": 2400
        },
        {
            "name": "Group B",
            "value": 4567
        },
        {
            "name": "Group C",
            "value": 1398
        },
        {
            "name": "Group D",
            "value": 9800
        },
        {
            "name": "Group E",
            "value": 3908
        },
        {
            "name": "Group F",
            "value": 4800
        }
    ];

    const [pharmacyProducts, setPharmacyProducts] = useState([]);
    const [nonPharmacyProducts, setNonPharmacyProducts] = useState([]);
    const [pharmacyRequestedItems, setPharmacyRequestedItems] = useState([]);
    const [nonPharmacyRequestedItems, setNonPharmacyRequestedItems] = useState([]);
    const [pharmacyOrders, setPharmacyOrders] = useState([]);
    const [nonPharmacyOrders, setNonPharmacyOrders] = useState([]);
    const [pharmacyPurchases, setPharmacyPurchases] = useState([]);
    const [nonPharmacyPurchases, setNonPharmacyPurchases] = useState([]);
    const [returnsCustomers, setReturnsCustomers] = useState([]);
    const [returnsExpiresOrDamages, setReturnsExpiresOrDamages] = useState([]);
    const [categories, setCategories] = useState([]);
    const [unitTypes, setUnitTypes] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [suppliersLists, setSuppliersLists] = useState([]);
    const [suppliersPayments, setSuppliersPayments] = useState([]);
    const [suppliersDocuments, setSuppliersDocuments] = useState([]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/products/pharmacy')
            .then(res => res.json())
            .then(products => setPharmacyProducts(products.length));
    }, [pharmacyProducts]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/products/nonPharmacy')
            .then(res => res.json())
            .then(products => setNonPharmacyProducts(products.length));
    }, [nonPharmacyProducts]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/requestedItems/pharmacy')
            .then(res => res.json())
            .then(products => setPharmacyRequestedItems(products.length));
    }, [pharmacyRequestedItems]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/requestedItems/nonPharmacy')
            .then(res => res.json())
            .then(products => setNonPharmacyRequestedItems(products.length));
    }, [nonPharmacyRequestedItems]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/orders/pharmacy')
            .then(res => res.json())
            .then(products => setPharmacyOrders(products.length));
    }, [pharmacyOrders]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/orders/nonPharmacy')
            .then(res => res.json())
            .then(products => setNonPharmacyOrders(products.length));
    }, [nonPharmacyOrders]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/purchases/pharmacy')
            .then(res => res.json())
            .then(products => setPharmacyPurchases(products.length));
    }, [pharmacyPurchases]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/purchases/nonPharmacy')
            .then(res => res.json())
            .then(products => setNonPharmacyPurchases(products.length));
    }, [nonPharmacyPurchases]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/returns/customers')
            .then(res => res.json())
            .then(products => setReturnsCustomers(products.length));
    }, [returnsCustomers]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/returns/expiresOrDamages')
            .then(res => res.json())
            .then(products => setReturnsExpiresOrDamages(products.length));
    }, [returnsExpiresOrDamages]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/setup/categories')
            .then(res => res.json())
            .then(products => setCategories(products.length));
    }, [categories]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/setup/unitTypes')
            .then(res => res.json())
            .then(products => setUnitTypes(products.length));
    }, [unitTypes]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/setup/companies')
            .then(res => res.json())
            .then(products => setCompanies(products.length));
    }, [companies]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/employees')
            .then(res => res.json())
            .then(e => setEmployees(e.length));
    }, [employees]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/customers')
            .then(res => res.json())
            .then(e => setCustomers(e.length));
    }, [customers]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/suppliers/lists')
            .then(res => res.json())
            .then(products => setSuppliersLists(products.length));
    }, [suppliersLists]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/suppliers/payments')
            .then(res => res.json())
            .then(e => setSuppliersPayments(e.length));
    }, [suppliersPayments]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/suppliers/documents')
            .then(res => res.json())
            .then(e => setSuppliersDocuments(e.length));
    }, [suppliersDocuments]);

    return (
        <div className='p-4 mt-16'>
            <div className='flex justify-between mb-6'>
                <RefreshButton />
                <PrintButton />
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <InfoCard name={'Products Non Pharmacy'} status={nonPharmacyProducts} />

                <InfoCard name={'Products Pharmacy'} status={pharmacyProducts} />

                <InfoCard name={'Requested Items Pharmacy'} status={pharmacyRequestedItems} />

                <InfoCard name={'Requested Items Non Pharmacy'} status={nonPharmacyRequestedItems} />

                <InfoCard name={'Orders Pharmacy'} status={pharmacyOrders} />

                <InfoCard name={'Orders Non Pharmacy'} status={nonPharmacyOrders} />

                <InfoCard name={'Purchases Pharmacy'} status={pharmacyPurchases} />

                <InfoCard name={'Purchases Non Pharmacy'} status={nonPharmacyPurchases} />

                <InfoCard name={'Returns Customers'} status={returnsCustomers} />

                <InfoCard name={'Returns Expires / Returns'} status={returnsExpiresOrDamages} />

                <InfoCard name={'Categories'} status={categories} />

                <InfoCard name={'Unit Types'} status={unitTypes} />

                <InfoCard name={'Companies'} status={companies} />

                <InfoCard name={'Employees'} status={employees} />

                <InfoCard name={'Customers'} status={customers} />

                <InfoCard name={'Suppliers'} status={suppliersLists} />

                <InfoCard name={'Payments'} status={suppliersPayments} />

                <InfoCard name={'Documents'} status={suppliersDocuments} />
            </div>

            <ComposedChart className='my-6 w-full' data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>

            <PieChart className='w-full'>
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
        </div>
    );
};

export default DashboardSummary;