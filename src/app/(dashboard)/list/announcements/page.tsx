import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { announcementsData, eventsData, role } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


{/* 1. Header data for the tables headers */}

const headerColumnData = [
    {
      header: "Title",
      accessor: "title"
    },
    {
      header: "Class",
      accessor: "class",
    },
    {
        header: "Date",
        accessor: "date",
        className: "hidden md:table-cell"
    },
    {
      header: "Actions",
      accessor: "actions"
    },
]


{/* 2. Creating a new type called Student that has the types/structure of data found on each row of the Student table (names from actual data) */}

type Announcement = {
    id:number;
    title:string;
    class: number;
    date:number;
  }


{/* 3. Create the function via the Table component */}


const AnnouncementsListPage = () => {
    const renderRow = (item:Announcement) => { //this has (item:Teacher) as it says the type of data in the component is of structure Teacher
        return (
        <tr key={item.id} className='p-4 border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-ImportedPurpleLight'>
          {/* Dynamic Rows */}
          <td className='flex items-center gap-4 p-4'>{item.title}</td>
          <td className=''>{item.class}</td>
          <td className='hidden md:table-cell'>{item.date}</td>
          <td>
            <div className='flex items-center gap-2'>
              {/* Link Button */}
              <Link href={`/list/classes/${item.id}`}>
                <button className='w-7 h-7 flex items-center justify-center rounded-full bg-ImportedSky'>
                  <Image src={"/edit.png"} alt='' width={16} height={16}/>
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
            <h1 className='hidden md:block text-lg font-semibold'>All Announcements</h1>
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
          <Table headerData={headerColumnData} renderRow={renderRow} rowData={announcementsData}/> {/* propname:{data} */}
          {/* PAGINATION SECTION */}
          <Pagination/>
        </div>
      )
}

export default AnnouncementsListPage