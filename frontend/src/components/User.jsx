import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
    return (
        <div className='w-full flex flex-col justify-center my-5'>
            <div className='font-semibold text-2xl'>List of Users</div>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center w-full'>
                    <div className='rounded-full flex justify-center items-center w-12 h-12 bg-slate-200 font-medium'>M</div>
                    <div className='text-xl ml-5'>Manish Chaudhary</div>
                </div>
                <Link className='w-30 px-3 py-2 bg-black text-white' to='/send'>Send Money</Link>
            </div>

        </div>
    )
}
