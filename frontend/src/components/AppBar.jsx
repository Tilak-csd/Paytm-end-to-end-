import React from 'react'

export default function AppBar() {
  return (
    <div className='flex justify-between w-full shadow h-15 px-10'>
      <div className='flex flex-col justify-center h-full text-3xl font-medium ml-4 cursor-pointer'>
        PayTM App
      </div>
      <div className='flex items-center'>
        <div className='mr-4 texx-xl font-medium'>
            Hello
        </div>
        <div className='rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center cursor-pointer'>
                U
        </div>
      </div>
    </div>
  )
}
