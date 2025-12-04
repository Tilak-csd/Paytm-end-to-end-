import React from 'react'

export default function InputBox({placeholder, label, onChange}) {
  return (
    <>
     <p className='text-sm text-left py-3 font-medium'>{label} :</p> 
     <input type="text" onChange={onChange} placeholder={placeholder} className='w-full border-1 py-2 px-3 outline-0 border-gray-500 rounded-md ' />
    </>
  )
}
