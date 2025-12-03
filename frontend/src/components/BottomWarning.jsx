import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomWarning({label, to, buttonText}) {
    return (
        <div className='flex py-2 text-md justify-center items-center'>
            <div>
                {label}
                <Link className='cursor-pointer pl-2 underline text-blue-900' to={to}>
                    {buttonText}
                </Link>
            </div>
        </div>
    )
}
