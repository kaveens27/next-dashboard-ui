import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { role, studentsData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


{/* Header data for the tables headers */}

const headerColumnData = [
    {
      header: "Info",
      accessor: "info"
    },
    {
      header: "Student ID",
      accessor: "studentId",
      className: "hidden md:table-cell"
    },
    {
        header: "Class",
        accessor: "class",
        className: "hidden md:table-cell" //normally hidden, but shown as table cell for medium & larger screens
    },
    {
        header: "Grade",
        accessor: "grade",
        className: "hidden md:table-cell"
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


{/* Creating a new type called Student that has the types/structure of data found on each row of the Student table */}

type Student = {
    id:number;
    studentId:string;
    name: string;
    email?:string;
    photo:string;
    phone:string;
    class:string;
    grade:string;
    address:string;
  }



const StudentListPage = () => {
    const renderRow = (item:Student) => { //this has (item:Teacher) as it says the type of data in the component is of structure Teacher
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
          <td className='hidden md:table-cell'>{item.studentId}</td>
          <td className='hidden md:table-cell'>{item.class}</td>
          <td className='hidden md:table-cell'>{item.grade}</td>
          <td className='hidden md:table-cell'>{item.phone}</td>
          <td className='hidden md:table-cell'>{item.address}</td>
          <td>
            <div className='flex items-center gap-2'>
              {/* Link Button */}
              <Link href={`/list/students/${item.id}`}>
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
            <h1 className='hidden md:block text-lg font-semibold'>All Students</h1>
            <div className='flex flex-col w-full md:flex-row md:w-auto items-center gap-4'> 
              <TableSearch/>
              <div className='flex w-full items-center justify-end gap-4'>
                <button className='w-8 h-8 flex items-center justify-center rounded-full bg-ImportedYellow p-1'>
                  <Image src='/filter.png' alt ='filter icon' width={14} height={14}/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center rounded-full bg-ImportedYellow p-2'>
                  <Image src='/sort.png' alt='sort icon' width={20} height={20}/>
                </button>
                {role === 'admin' && <button className='w-8 h-8 flex items-center justify-center rounded-full bg-ImportedYellow p-2'>
                  <Image src='/plus.png' alt='plus icon' width={20} height={20}/>
                </button>}
              </div>
            </div>
          </div>
          {/* LIST SECTION */}
          <Table headerData={headerColumnData} renderRow={renderRow} rowData={studentsData}/> {/* propname:{data} */}
          {/* PAGINATION SECTION */}
          <Pagination/>
        </div>
      )
}

export default StudentListPage