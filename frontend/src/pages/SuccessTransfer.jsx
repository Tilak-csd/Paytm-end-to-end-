import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function SuccessTransfer() {
    const navigate = useNavigate()
    const [searchParam] = useSearchParams()
    const name = searchParam.get('firstname')
    const amount = searchParam.get('amount')
    return (
        <div className='w-full flex justify-center items-center h-screen bg-amber-100'>
            <div className='p-10 w-[30%] bg-white flex-col flex items-start justify-center gap-2'>
                <div className='w-full text-xl font-semibold text-center text-black'>
                    Transaction Completed!!🎉
                </div>
                <div className='w-full border-1 border-gray-100 grid grid-cols-2 p-2'>
                    <div className='col-span-1 text-left'>
                        <p className='text-md text-gray-900'>Sender: <span className='font-medium'>{name}</span></p>
                    </div>
                    <div className='col-span-1 text-right'>
                        <p className='text-md text-gray-900'>Reciever: <span className='font-medium'>{name}</span></p>
                        <p className='text-md text-gray-900'>Rs. <span className='font-medium'>{amount}</span></p>
                    </div>
                </div>

                <button className='w-full mt-3 py-1 bg-green-500 text-white text-md font-medium cursor-pointer hover:text-gray-300 hover:bg-green-600'
                    onClick={() => { navigate('/dashboard') }}
                >Back to Dashboard</button>
            </div>

        </div>
    )
}
