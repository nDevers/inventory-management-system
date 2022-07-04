import React from 'react';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar, Line, PieChart, Pie } from 'recharts';
import PrintButton from '../../Components/Buttons/PrintButton';
import RefreshButton from '../../Components/Buttons/RefreshButton';
import InfoCard from '../../Components/InfoCard';

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

    return (
        <div className='mx-auto'>
            <div className='grid grid-cols-6 gap-4'>
                <InfoCard name={'Items'} status={99} />

                <InfoCard name={'Quantity'} status={99} />

                <InfoCard name={'MRP'} status={99} />

                <InfoCard name={'TP'} status={99} />

                <InfoCard name={'RTN MRP'} status={99} />

                <InfoCard name={'RTN TP'} status={99} />

                <InfoCard name={'Discount'} status={99} />

                <InfoCard name={'Net Sale'} status={99} />

                <InfoCard name={'Net TP'} status={99} />

                <InfoCard name={'From'} status={99} />

                <InfoCard name={'To'} status={99} />

                <InfoCard name={'Period'} status={99} />
            </div>

            <div className='flex justify-between mt-6'>
                <RefreshButton />
                <PrintButton />
            </div>

            <ComposedChart className='my-6' width={730} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>

            <PieChart width={830} height={350}>
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
        </div>
    );
};

export default DashboardSummary;