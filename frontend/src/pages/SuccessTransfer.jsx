import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function SuccessTransfer() {
    const navigate = useNavigate()
    const [searchParam] = useSearchParams()
    const name = searchParam.get('firstname')
    const amount = searchParam.get('amount')
  return (
    <div className='w-full flex justify-center items-center h-screen bg-amber-100'>
      <div className='p-10 bg-white flex-col flex items-start justify-center'>
        <div className='w-full text-2xl font-semibold text-center'>Send Money</div>
        <div className='flex justify-center items-center gap-3 mt-10'>
          <div className='rounded-full w-10 h-10 flex justify-center items-center text-xl font-medium text-white bg-green-500'></div>
          <div className='text-xl font-semibold '>
            {name}
          </div>
        </div>

        <button className='w-full mt-3 py-1 bg-green-500 text-white text-md font-medium cursor-pointer hover:text-gray-300 hover:bg-green-600'
        onClick={()=>{navigate('/dashboard')}}
        >Back to Dashboard</button>
      </div>

    </div>
  )
}
