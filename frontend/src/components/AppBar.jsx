import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

// This sets firstname to an empty string initially, so it never becomes undefined.
export default function AppBar({ firstname = "", lastname = "" }) {
  const navigate = useNavigate()
  const [dropdown, setDropdown] = useState(false)
  return (
    <div className='flex justify-between w-full shadow h-15 px-3 sm:px-10'>
      <div className='flex flex-col justify-center h-full text-xl sm:text-2xl font-medium cursor-pointer'>
        PayTM App
      </div>
      <div className='flex items-center gap-2'>
        <div className='text-sm hidden sm:block sm:text-md font-medium '>
          {firstname} {lastname}
        </div>
        <div className='relative flex justify-center items-center'>
          <div className='rounded-full h-10 w-10 bg-slate-200 flex justify-center items-center cursor-pointer'
            onClick={() => {
              setDropdown(prev => !prev)
            }}
          >
            {/* Show firstname's first letter if it exists; otherwise show '?' to avoid undefined errors. */}
            {firstname?.[0] ?? "?"}
          </div>
            {dropdown && <DropdownProfile navigate={navigate} />}
        </div>
        <div className='rounded-md bg-black text-white font-medium text-sm sm:text-md py-2 px-3 cursor-pointer'
          onClick={() => {
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



function DropdownProfile({navigate}) {
  return <div className='px-3 absolute top-13 rounded-2xl w-30 bg-gray-200 flex justify-center items-center flex-col'>
    <div className="w-5 h-5 bg-gray-200 rotate-45 mt-[-.5rem]"></div>
    <div className='flex justify-center items-center text-gray-600 mb-3 cursor-pointer'
      onClick={()=>{
        navigate('/edituser')
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
      <p>Edit User</p>
    </div>
  </div>
}