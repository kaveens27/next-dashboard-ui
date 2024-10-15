import Image from 'next/image'
import React from 'react'

const announcements = [
    {
        id: 1,
        title: "First Annoucement",
        date: "2024-11-03",
        description: "This is just some description placeholder text for announcement 1 and shows some more information",
    },
    {
        id: 2,
        title: "Second Annoucement",
        date: "2024-12-20",
        description: "This is just some description placeholder text for announcement 2 and shows some more information",
    },
    {
        id: 3,
        title: "Thrid Annoucement",
        date: "2025-01-01",
        description: "This is just some description placeholder text for announcement 3 and shows some more information",
    }
]


export const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md flex flex-col gap-4'>
        {/* ANNOUNCEMENT TITLE SECTION */}
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Announcements</h1>
            <span className='text-gray-400 text-sm'>View All</span>
        </div>
        {/* ANNOUNCEMENT DETAILS SECTION */}
        <div className='flex flex-col gap-4'>
            {announcements.map((announcement) => (
                <div key={announcement.id} className=' odd:bg-ImportedPurpleLight even:bg-ImportedYellowLight p-4 rounded-md'>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-semibold text-gray-800'>{announcement.title}</h1>
                        <span className='text-xs bg-white rounded-md text-gray-400 p-1'>{announcement.date}</span>
                    </div>
                    <div>
                        <p className='mt-2 text-sm text-gray-500'>{announcement.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
