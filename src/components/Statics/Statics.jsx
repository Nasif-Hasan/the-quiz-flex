import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';
import { useLoaderData } from 'react-router-dom';


const Statics = () => {
    const questionData = useLoaderData()

    return (
        <div className='my-10 '>
            <h1 className='mx-auto text-3xl pb-5 text-red-600 font-bold'>The Line Chart of all section and quiz.</h1>
            <LineChart width={800} height={500} data={questionData.data}>
                <Line type="monotone" dataKey="total" stroke="#FF0000" strokeWidth={2} />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statics;