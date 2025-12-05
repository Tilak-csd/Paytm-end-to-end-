import React from 'react'
import { useNavigate } from 'react-router-dom'
// This sets firstname to an empty string initially, so it never becomes undefined.
export default function AppBar({ firstname = "", lastname = "" }) {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between w-full shadow h-15 px-3'>
      <div className='flex flex-col justify-center h-full text-2xl font-medium cursor-pointer'>
        PayTM App
      </div>
      <div className='flex items-center gap-3'>
        <div className='mr-4 texx-xl font-medium'>
          {firstname} {lastname}
        </div>
        <div className='rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center cursor-pointer'>
          {/* Show firstname's first letter if it exists; otherwise show '?' to avoid undefined errors. */}
          {firstname?.[0] ?? "?"}
        </div>
        <div className=' rounded-md bg-black text-white font-medium text-md py-2 px-3 cursor-pointer'
        onClick={()=>{
          localStorage.removeItem('token')
          navigate('/signin')
        }}
        >
          Logout
        </div>
      </div>
    </div>
  )
}
