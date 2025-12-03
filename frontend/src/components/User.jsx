import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
    return (
        <div className='w-full flex flex-col justify-center my-5'>
            <div className='font-semibold text-2xl'>List of Users</div>
            {/* Seach bar */}
            <div className='mt-4'>
                <input type="text" placeholder='Search users....'  className='outline-0 border-0 bg-slate-200 w-full rounded-md py-2 px-3 text-gray-600'/>
            </div>
            <div className='w-full flex justify-between items-center mt-3'>
                <div className='flex items-center w-full'>
                    <div className='rounded-full flex justify-center items-center w-12 h-12 bg-slate-200 font-medium'>M</div>
                    <div className='text-xl ml-5'>Manish Chaudhary</div>
                </div>
                <Link className='text-center w-40 px-2 py-2 bg-black text-white rounded-md' to='/send'>Send Money</Link>
            </div>

        </div>
    )
}
