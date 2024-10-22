import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

{/* Header data for the tables headers */}

const headerColumnData = [
  {
    header: "Info",
    accessor: "info"
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell"
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell" //normally hidden, but shown as table cell for medium & larger screens
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell" //normally hidden, but shown as table cell for medium & larger screens
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell" //normally hidden, but shown as table cell for large screens only
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell" //normally hidden, but shown as table cell for large screens only
  },
  {
    header: "Actions",
    accessor: "actions"
  },
]


{/* Creating a new type called Teacher that has the types/structure of data found on each row of the Teacher table */}

type Teacher = {
  id:number;
  teacherId:string;
  name: string;
  email?:string;
  photo:string;
  phone:string;
  subjects:string[];
  classes:string[];
  address:string;
}


const TeacherListPage = () => {
  {/* Component for rendering teacher table row data */}
  const renderRow = (item:Teacher) => {
    return (
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-ImportedPurpleLight '>
      {/* Dynamic Rows */}
      <td className='flex items-center gap-4 p-4'>
        <Image src={item.photo} alt='' width={40} height={40} className='md:hidden xl:block w-10 h-10 rounded-full object-cover'/>
        <div className='flex flex-col'>
          <h3 className='font-semibold'>{item.name}</h3>
          <p className='text-xs text-gray-500'>{item.email}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.teacherId}</td>
      <td className='hidden md:table-cell'>{item.subjects.join(",")}</td>
      <td className='hidden md:table-cell'>{item.classes.join(",")}</td>
      <td className='hidden md:table-cell'>{item.phone}</td>
      <td className='hidden md:table-cell'>{item.address}</td>
      <td>
        <div className='flex items-center gap-2'>
          {/* Link Button */}
          <Link href={`/list/teachers/${item.id}`}>
            <button className='w-7 h-7 flex items-center justify-center rounded-full bg-ImportedSky'>
              <Image src={"/view.png"} alt='' width={16} height={16}/>
            </button>
          </Link>
          {/* Delete Button (ONLY Admin Role) */}
          {role === "admin" && (
            <button className='w-7 h-7 flex items-center justify-center rounded-full bg-ImportedPurple'>
              <Image src={"/delete.png"} alt='' width={16} height={16}/>
            </button>
          )}
        </div>
      </td>
    </tr>
    )}

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP SECTION  */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold'>All Teachers</h1>
        <div className='flex flex-col w-full md:flex-row md:w-auto items-center gap-4'> 
          <TableSearch/>
          <div className='flex w-full items-center justify-end gap-4'>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-ImportedYellow p-1'>
              <Image src='/filter.png' alt ='filter icon' width={14} height={14}/>
            </button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-ImportedYellow p-2'>
              <Image src='/sort.png' alt='sort icon' width={20} height={20}/>
            </button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-ImportedYellow p-2'>
              <Image src='/plus.png' alt='plus icon' width={20} height={20}/>
            </button>
          </div>
        </div>
      </div>
      {/* LIST SECTION */}
      <Table columnData={headerColumnData} renderRow={renderRow} roleData={teachersData}/> {/* propname:{data} */}
      {/* PAGINATION SECTION */}
      <Pagination/>
    </div>
  )
}

export default TeacherListPage