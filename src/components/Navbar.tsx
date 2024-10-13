import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex item-center justify-between p-4'>
        {/* Search Bar */}
        <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-3'>
            <Image src='/search.png' alt='search icon' width={40} height={5} className='p-3'/>
            <input type='text' placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none'/>
        </div>
        {/* Icons & User */}
        <div className='flex items-center gap-6 justify-end w-full'> {/* Div holding items for navbar being set to horizontal using flex item-center and gap between them being 6 */}
            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'> {/* Div for the message icon */}
                <Image src="/message.png" alt="message icon" width={20} height={20} />
            </div>
            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'> {/* Div for the  icon NOTE: this is relative so the notification numnber can be absolute*/}
                <Image src="/announcement.png" alt="announcement icon" width={20} height={20} />
                <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full'>1</div>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs leading-3 font-medium'>Kaveen</span>
                <span className='text-[10px] text-gray-500 text-right'>Admin</span>
            </div>
            <div className=''>
                <Image src="/avatar.png" alt="user image" width={36} height={36} className='rounded-full'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar