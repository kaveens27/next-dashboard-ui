import React from 'react'
import { render } from 'react-dom';

{/* Define the structure of the Columns Object */}

type ColumnStructure = {
    header: string;
    accessor: string;
    className?: string;
  };


const Table = ({headerData, renderRow, rowData}:{headerData:ColumnStructure[]; renderRow:(item:any)=>React.ReactNode; rowData:any[]}) => { //{propData}:{propData:newDataStructure} OR {propData:(item:any) OR {propData:any[]} IMPORTANT : this defines type of the prop the component receives ie this prop receives headerColumn data where headerColumn data is of type ColumnStructure
  return (
    <table className='w-full mt-4'>
        {/* HEADER DATA */}
        <thead>
            <tr className='text-left text-sm text-gray-500'>
                {headerData.map((item)=>(
                    <th key={item.accessor} className={item.className}>{item.header}</th>
                ))}
            </tr>
        </thead>
        {/* ROW DATA */}
        <tbody>
            {rowData.map((item)=> renderRow(item))} {/* renderRow takes structure Teacher (page.tsx) but as we dont have that strcutre we say any[] */}
        </tbody>
    </table>
  )
}

export default Table