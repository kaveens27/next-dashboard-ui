"use client"

import Image from 'next/image'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    expense: 4000,
    income: 2400,
  },
  {
    name: 'Feb',
    expense: 3000,
    income: 1398,
  },
  {
    name: 'Mar',
    expense: 2000,
    income: 9800,
  },
  {
    name: 'Apr',
    expense: 2780,
    income: 3908,
  },
  {
    name: 'May',
    expense: 1890,
    income: 4800,
  },
  {
    name: 'Jun',
    expense: 2390,
    income: 3800,
  },
  {
    name: 'Jul',
    expense: 3490,
    income: 4300,
  },
  {
    name: 'Aug',
    expense: 3490,
    income: 4300,
  },
  {
    name: 'Sep',
    expense: 3490,
    income: 4300,
  },
  {
    name: 'Oct',
    expense: 3490,
    income: 4300,
  },
  {
    name: 'Nov',
    expense: 3490,
    income: 4300,
  },
  {
    name: 'Dec',
    expense: 3490,
    income: 4300,
  },
];



const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TOP SECTION */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src="/more.png" alt="message icon" width={20} height={20} className='bg-gray-500 rounded-full p-1'/>
        </div>
        {/* CHART */}
        <div className='w-full h-[90%]'>
            <ResponsiveContainer>
                <LineChart
                width={500}
                height={300}
                data={data}
                >
                <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
                <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill:"#d1d5dd"}}
                    tickMargin={10}
                />
                <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill:"#d1d5dd"}}
                    tickMargin={20}
                />
                <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
                <Legend 
                    align='center' 
                    verticalAlign='top' 
                    wrapperStyle={{paddingTop:"20px", paddingBottom: "30px"}}
                />
                <Line 
                    type="monotone" 
                    dataKey="income" 
                    stroke="#C3EBFA" 
                    strokeWidth={5}
                />
                <Line 
                    type="monotone" 
                    dataKey="expense" 
                    stroke="#CFCEFF" 
                    strokeWidth={5}
                />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default FinanceChart