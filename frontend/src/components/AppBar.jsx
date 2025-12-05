import React from 'react'
// This sets firstname to an empty string initially, so it never becomes undefined.
export default function AppBar({ firstname = "", lastname = "" }) {
  return (
    <div className='flex justify-between w-full shadow h-15 px-10'>
      <div className='flex flex-col justify-center h-full text-3xl font-medium ml-4 cursor-pointer'>
        PayTM App
      </div>
      <div className='flex items-center'>
        <div className='mr-4 texx-xl font-medium'>
          {firstname} {lastname}
        </div>
        <div className='rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center cursor-pointer'>
          {/* Show firstname's first letter if it exists; otherwise show '?' to avoid undefined errors. */}
          {firstname?.[0] ?? "?"}
        </div>
      </div>
    </div>
  )
}
