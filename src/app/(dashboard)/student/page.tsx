import { Announcements } from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import EventCalendar from '@/components/EventCalendar'
import React from 'react'

const StudentPage = () => {
  return (
    <div className='p-4 flex flex-col xl:flex-row gap-4'>
      {/* LEFT SIDE */}
      <div className='w-full xl:w-2/3'>
        <div className='h-full p-4 bg-white rounded-md'>
            <h1 className='font-semibold text-lg'>Schedule (4A)</h1>
            <BigCalendar/>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <EventCalendar/>
        <Announcements/>
      </div>
    </div>
  )
}

export default StudentPage