// DESC: This will be the specific SubjectForm component which will be rendered in the teacher page via the FormModal component
// this uses the InputFields comp
// Form Modal comp uses this comp to render comp when the user is on a teacher page

'use client'

import React from 'react'
import { FieldError, useForm } from 'react-hook-form';
import { Schema, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from './InputField';
import Image from 'next/image';

// STEP 2
// create the form validation using zod 
// format for validation schema => fieldname: z.dataType().validationType({message: errorMessage}).validationType({message: errorMessage})
// add type Inputs to follow the schema
const schema = z.object({
    username: z.string().min(3, {message: 'Min 3 characters!'}).max(20, {message: 'Max 20 characters!'}),
    email: z.string().email({message: 'Valid email required!'}),
    password: z.string().min(8, {message: 'Min 8 characters!'}),
    firstName: z.string().min(1, {message: 'Min 1 characters!'}),
    lastName: z.string().min(1, {message: 'Min 1 characters!'}),
    phone: z.string().min(1,{message: 'Phone number required!'}),
    address: z.string().min(1,{message: 'Address required!'}),
    bloodType: z.string().min(1,{ message: "Blood Type required!" }),
    birthday: z.date({message: 'Phone number required!'}),
    gender: z.enum(['male','female'],{message: 'Gender required!'}),
    img: z.instanceof(File,{message: 'Image required!'})
  });

type Inputs = z.infer<typeof schema> //form inputs will take schema types


// STEP 1
// create rafce and add all prop data into component function and type format
type SubjectFormProps = {
    type: 'create' | 'update';
    data?: any;
  };


// START
const SubjectForm = ({type,data}:SubjectFormProps) => {

    // STEP 3
    // add this section from the react-resolver docs to deal with form validation
    //<Input> has been added to the useForm inputs
    // NOTE: register is a function in react-hook-forms for registering the inputs so it can be managed by react-hook-forms
    const {register,handleSubmit,formState: { errors }} = useForm<Inputs>({resolver: zodResolver(schema)})

    
    const onSubmit = handleSubmit(data => {
        console.log(data);
    })

    //STEP 4
    // create the form modal component using InputField component
    return (
        <form className='flex flex-col p-4 gap-4' onSubmit={onSubmit}>
            <h1 className='text-xl font-semibold mb-4'>{type ==='create' ? "Create A New Subject" : "Update A Subject" }</h1>
            <span className='text-xs text-gray-500 font-medium'>Authentication Information</span>
            <div className='flex justify-between flex-wrap gap-4 mb-4'>
                <InputField label='Username' name='username' register={register} error={errors?.username} defaultValue={data?.username}/>
                <InputField label='Email' name='email' register={register} error={errors?.email} defaultValue={data?.email}/>
                <InputField label='Password' name='password' type="password" register={register} error={errors?.password} defaultValue={data?.password}/>
            </div>
            <span className='text-xs text-gray-500 font-medium'>Personal Information</span>
            <div className="flex justify-between flex-wrap gap-4 mb-8">
                <InputField label="First Name" name="firstName" defaultValue={data?.firstName} register={register} error={errors.firstName}/>
                <InputField label="Last Name" name="lastName" defaultValue={data?.lastName} register={register} error={errors.lastName}/>
                <InputField label="Phone" name="phone" defaultValue={data?.phone} register={register} error={errors.phone}/>
                <InputField label="Address" name="address" defaultValue={data?.address} register={register} error={errors.address}/>
                <InputField label="Blood Type" name="bloodType" defaultValue={data?.bloodType} register={register} error={errors.bloodType}/>
                <InputField label="Birthday" name="birthday" defaultValue={data?.birthday} register={register} error={errors.birthday} type="date"/>
                <div className='flex flex-col gap-2 w-full md:w-[30%]'> {/* the input field component is not made for selection boxes */}
                    <label className='text-xs text-gray-500'>Gender</label>
                    <select className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full' {...register("gender")} defaultValue={data?.sex}><option value="male">Male</option><option value="female">Female</option></select>
                    {errors.gender?.message && (<p className="text-xs text-red-400">{errors.gender.message.toString()}</p>)}
                </div>
                <div className='flex flex-col gap-2 w-full md:w-[30%] justify-end'> {/* the input field component is not made for image selection */}
                    <label className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
                        <Image src='/upload.png' alt='' width={28} height={28}/>
                        <span>Upload Image</span>
                    </label>
                    <input type="file" id="img" {...register("img")} className="hidden" />
                    {errors.img?.message && (<p className="text-xs text-red-400">{errors.img.message.toString()}</p>)}
                </div>
            </div>
            <button className='bg-blue-500 text-white py-2 px-4 rounded-md border-none'>{type === 'create' ? 'Create' : 'Update'}</button>
        </form>
    )
}

export default SubjectForm