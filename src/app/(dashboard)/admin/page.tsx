import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className ='p-4 flex flex-col md:flex-row gap-4'>
      {/* LEFT SIDE */}
      <div className='w-full lg:w-2/3'>
        {/* USER CARD */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='student'/>
          <UserCard type='teacher'/>
          <UserCard type='parent'/>
          <UserCard type='staff'/>
      </div>      
    </div>
      {/* RIGHT SIDE */}
      <div className='w-full lg:w-1/3 bg-red-300'>
        r
      </div>
    </div>
  )
}

export default AdminPage