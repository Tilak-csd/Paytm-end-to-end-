import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

export default function User() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const FetchApi = async () => {
            const response = await axios.get('http://localhost/api/v1/user/bulk')
            setUsers(response.data.user)
        }
        FetchApi()
    }
        , [])
    return (
        <div className='w-full flex flex-col justify-center my-5'>
            <div className='font-semibold text-2xl'>List of Users</div>
            {/* Seach bar */}
            <div className='mt-4'>
                <input type="text" placeholder='Search users....' className='outline-0 border-0 bg-slate-200 w-full rounded-md py-2 px-3 text-gray-600' />
            </div>
            {users.map((user, idx) => {
                return <div className='w-full flex justify-between items-center mt-3'>
                    <div className='flex items-center w-full'>
                        <div className='rounded-full flex justify-center items-center w-12 h-12 bg-slate-200 font-medium'>
                            {user.firstname[0]}
                        </div>
                        <div className='text-xl ml-5'>{user.firstname} {user.lastname}</div>
                    </div>
                    <Link className='text-center w-40 px-2 py-2 bg-black text-white rounded-md' to='/send'>Send Money</Link>
                </div>
            })}


        </div>
    )
}
