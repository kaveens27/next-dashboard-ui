import React from 'react'
import { render } from 'react-dom';

{/* Define the structure of the Columns Object */}

type ColumnStructure = {
    header: string;
    accessor: string;
    className?: string;
  };


const Table = ({columnData, renderRow, roleData}:{columnData:ColumnStructure[]; renderRow:(item:any)=>React.ReactNode; roleData:any[]}) => { //{propData}:{propData:newDataStructure} OR {propData:(item:any) OR {propData:any[]} this is destructuring the data being pulled from the prop into the structure of ColumnStructure type
  return (
    <table className='w-full mt-4'>
        {/* HEADER */}
        <thead>
            <tr className='text-left text-sm text-gray-500'>
                {columnData.map((item)=>(
                    <th key={item.accessor} className={item.className}>{item.header}</th>
                ))}
            </tr>
        </thead>
        {/* DATA */}
        <tbody>
            {roleData.map((item)=> renderRow(item))}
        </tbody>
    </table>
  )
}

export default Table