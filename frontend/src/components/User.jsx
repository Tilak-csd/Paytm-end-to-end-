import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import useDebounce from '../hooks/debounces'

export default function User() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const debounceSearch = useDebounce(search, 500)
    useEffect(() => {
        if (debounceSearch) {
            const FetchApi = async () => {
                const token = localStorage.getItem('token')

                const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${search}`, {
                    headers: {
                        'Authorization': token
                    }
                })
                setUsers(response.data.user || [])
            }
            FetchApi()
        }
    }
        , [debounceSearch, search])
    return (
        <div className='w-full flex flex-col justify-center my-5'>
            <div className='font-semibold text-xl sm:text-2xl'>List of Users</div>
            {/* Seach bar */}
            <div className='mt-4'>
                <input type="text"
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                    placeholder='Search users....' className='outline-0 border-0 bg-slate-200 w-full rounded-md py-2 px-3 text-gray-600' />
            </div>
            {users.map((user, idx) => {
                return <div key={idx} className='w-full flex justify-between items-center mt-3'>
                    <div className='flex items-center w-full'>
                        <div className='rounded-full flex justify-center items-center w-10 h-10 bg-slate-200 font-medium'>
                            {user.firstname[0].toUpperCase()}
                        </div>
                        <div className='text-sm sm:text-md ml-2'>{user.firstname} {user.lastname}</div>
                    </div>

                    <button className='text-center sm:text-md text-sm w-35 px-2 py-2 cursor-pointer bg-black text-white rounded-md'
                        onClick={() => navigate(`/send?id=${user._id}&firstname=${user.firstname}&lastname=${user.lastname}`)}
                    >Send Money</button>
                </div>
            })}


        </div>
    )
}
