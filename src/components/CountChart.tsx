"use client"

import Image from 'next/image';
import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Boys',
    count: 55,
    fill: '#FAE27C',
  },
  {
    name: 'Girls',
    count: 45,
    fill: '#C3EBFA',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};



const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TOP SECTION */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/more.png" alt="message icon" width={20} height={20} className='bg-gray-500 rounded-full p-1'/>
        </div>
        {/* CHART */}
        <div className='relative w-full h-[75%]'>
            <ResponsiveContainer>
                <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                <RadialBar
                    background
                    dataKey="count"
                />
                </RadialBarChart>
            </ResponsiveContainer>
            <Image src="/maleFemale.png" alt="" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/> {/* you can use this tailwind css class for perfect center of */}
        </div>
        {/* BOTTOM SECTION */}
        <div className='flex justify-center gap-16'>
            {/* LEFT LEDGEND */}
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-ImportedSky rounded-full'/>
                <h1 className='font-bold'>1,234</h1>
                <h2 className='text-gray-500'>Boys (55%)</h2>
            </div>
            {/* RIGHT LEDGEND */}
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-ImportedYellow rounded-full'/>
                <h1 className='font-bold'>827</h1>
                <h2 className='text-gray-500'>Girls (45%)</h2>
            </div>
        </div>
    </div>
  )
}

export default CountChart