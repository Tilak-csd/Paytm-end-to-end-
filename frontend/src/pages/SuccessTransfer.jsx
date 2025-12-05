import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function SuccessTransfer() {
    const navigate = useNavigate()
    const [searchParam] = useSearchParams()
    const name = searchParam.get('firstname')
    const amount = searchParam.get('amount')
    return (
        <div className='w-full flex justify-center items-center h-screen bg-amber-100'>
            <div className='p-10 w-[30%] bg-white flex-col flex items-start justify-center'>
                <div className='w-full text-xl font-semibold text-center text-green-500'>
                    {amount} is Successfully Transfered to the {name}
                </div>

                <button className='w-full mt-3 py-1 bg-green-500 text-white text-md font-medium cursor-pointer hover:text-gray-300 hover:bg-green-600'
                    onClick={() => { navigate('/dashboard') }}
                >Back to Dashboard</button>
            </div>

        </div>
    )
}
