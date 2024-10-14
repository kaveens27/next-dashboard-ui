"use client"

import Image from 'next/image';
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 24,
  },
  {
    name: 'Tue',
    present: 30,
    absent: 13,
  },
  {
    name: 'Wed',
    present: 90,
    absent: 38,
  },
  {
    name: 'Thu',
    present: 57,
    absent: 9,
  },
  {
    name: 'Fri',
    present: 88,
    absent: 18,
  },
];


const AttendanceChart = () => {
  return (
    <div className='bg-white w-full h-full p-4 rounded-lg flex flex-col gap-4'>
        {/* TOP SECTION */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/more.png" alt="message icon" width={20} height={20} className='bg-gray-500 rounded-full p-1'/>
        </div>
        {/* CHART SECTION */}
        <div className='w-full h-[80%]'>
            <ResponsiveContainer>
                <BarChart
                width={500}
                height={300}
                data={data}
                barSize={20}
                >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:"#d1d5dd"}}/>
                <YAxis axisLine={false} tickLine={false} tick={{fill:"#d1d5dd"}}/>
                <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
                <Legend 
                    align='left' 
                    verticalAlign='top' 
                    wrapperStyle={{paddingTop:"20px", paddingBottom: "20px"}}
                />
                <Bar 
                    dataKey="present" 
                    fill="#C3EBFA" 
                    legendType='circle'
                    radius={[10,10,0,0]}
                />
                <Bar 
                    dataKey="absent" 
                    fill="#FAE27C" 
                    legendType='circle'
                    radius={[10,10,0,0]}
                />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default AttendanceChart