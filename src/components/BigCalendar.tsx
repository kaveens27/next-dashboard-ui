"use client"

import React, { useState } from 'react'
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const BigCalendar = () => {

    const [view, setView] = useState<View>(Views.WORK_WEEK) //const [state, setState] = useState<StateType>(initialValue);

    const handleOnChangeView = (selectedView:View) => {
        setView(selectedView);
    }

    return(
    <div className='bg-white w-full h-full p-4 rounded-lg flex flex-col gap-4'>
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["work_week","day"]}
            view={view}
            style={{ height: "98%" }}
            onView={handleOnChangeView}
            min={new Date(2025,1,1,8,0,0)}
            max={new Date(2026,1,1,18,0,0)}
        />
    </div>
  )
}

export default BigCalendar