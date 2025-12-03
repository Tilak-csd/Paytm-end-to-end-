import React from 'react'

export default function Button({ label }) {
    return (
        <button className='w-full py-2 cursor-pointer rounded-md bg-black text-white text-xl hover:bg-gray-700'>
            {label}
        </button>
    )
}
