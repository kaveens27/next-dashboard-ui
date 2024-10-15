"use client"

import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // In the global.css file the preset .react-calendar styling is overridden using !improtant

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];


// TEMPORARY DATA

const events = [
    {
        id: 1,
        title: "First Event",
        time: "12:00 PM - 2:00 PM",
        description: "This is just some description placeholder text for event 1",
    },
    {
        id: 2,
        title: "Second Event",
        time: "5:00 PM - 7:00 PM",
        description: "This is just some description placeholder text for event 2",
    },
    {
        id: 3,
        title: "Thrid Event",
        time: "06:00 AM - 6:00 PM",
        description: "This is just some description placeholder text for event 3",
    }
]


const EventCalendar = () => {
    const [value, setValue] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md flex flex-col">
        {/* CALENDER SECTION */}
        <Calendar onChange={setValue} value={value}/>
        {/* EVENT TITLE SECTION */}
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold my-4'>Events</h1>
            <Image src="/more.png" alt="more icon" width={20} height={20} className='bg-gray-500 rounded-full p-1'/>
        </div>
        {/* EVENTS DETAIL SECTION */}
        <div className='flex flex-col gap-4'> 
            {events.map((event) =>
                <div key={event.id} className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-ImportedSky even:border-t-ImportedPurple'>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                        <span className='text-xs text-gray-400'>{event.time}</span>
                    </div>
                    <div>
                        <p className='mt-2 text-sm text-gray-500'>{event.description}</p>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default EventCalendar