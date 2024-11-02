// DESC: this component is used for creating a button that will open up a form and render the specific type of form on the FormModel comp
// (ie create, update or delete form for the specific page)
// this is the component that pulls the all the Forms section together depending on what page its on

'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import TeacherForm from './Forms/TeacherForm';


// STEP 1
// create the formModalProps type that will go into the FormModal comp
type FormModalProps = {
    table: "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" | "announcement";
    type: "create" | "update" | "delete";
    data?:any;
    id?:number;
}

// START
const FormModal = ({table,type,data,id}:FormModalProps) => {
    
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7"; //as the create button has different sizes to the update and delete button this is done to find the specific button size
    const bgColor = type === "create" ? "bg-ImportedYellow" : type === "update" ? "bg-ImportedSky" : "bg-ImportedPurple" //as all three buttons have different bg colors, this is done to find the specific bg color
    const [open, setOpen] = useState(false) //used for opening a form block and its initially set to false (as the button has not been pressed yet)

    // STEP 2
    // Form component renders the type of form it is: Delete form if type==='delete' else... FIX ME
    const Form = () => {
        return type === 'delete' && id ? (
            <form action="" className='flex  flex-col p-4 gap-4'> {/* Still to be complete but will be done with the backend */}
                <span className='text-center font-medium'>All data will be lost. Are you sure you want to delete this {table}?</span>
                <button className='bg-red-600 text-white py-2 px-4 rounded-md border-none w-max self-center'>Delete</button>
            </form>
        ) : <TeacherForm type='update' data={data}/>
    }

    // STEP 3
    // render the form modal with the specific form details inside
    return (
        //this will create the form modal if the create, update or delete buttons are pressed on the pages and set Open to TRUE
        <>
            <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`} onClick={()=> setOpen(true)}>
                <Image src={`/${type}.png`} alt='' width={16} height={16}/>
            </button>
            {
                //if Open is TRUE, the form modal will be rendered with a close button and Form component (above) until the close button is clicked then Open will be set to FALSE
                open && (
                    <div className='w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center'>
                        <div className='bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]'>
                            <div>
                                <Image src='/close.png' alt='' width={14} height={14} className='absolute top-4 right-4 cursor-pointer' onClick={()=> setOpen(false)}/>
                            </div>
                            <Form/>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default FormModal