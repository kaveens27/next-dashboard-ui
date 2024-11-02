// DESC: as the forms are all going to have the same input field structure, a new component is created for this
// this compoenent gets used in all the Forms dir comps

import React from 'react'
import { FieldError } from 'react-hook-form';

//STEP 1
// create the type data for the InputField props
type InputFieldProps = {
    label: string; // input label eg Username
    type?: string; //type of input eg text
    register: any; //register function
    name: string; //fieldname eg username
    defaultValue?: string; //default input value eg John
    error?: FieldError; //error message for validation error
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>; //other input props
  };

// START
const InputField = ({label,type,register,name,defaultValue,error,inputProps}:InputFieldProps) => {
    // STEP 3
    // render the component that will show the full input field section
  return (
    <div className='flex flex-col gap-2 w-full md:w-[30%]'>
        <label className='text-xs text-gray-500'>{label}</label>
        <input type={type} {...register(name)} className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full' {...inputProps} defaultValue={defaultValue}/>
        {typeof error?.message === 'string' && <p className='text-red-400 text-xs'>{error?.message}</p>}
    </div>
  )
}

export default InputField