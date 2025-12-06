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
    // pagination 
    const UserperSection = 6
    const [currentsection, setCurrentsection] = useState(1)
    const UserlastIndex = UserperSection * currentsection
    const UserFirstIndex = UserlastIndex - UserperSection
    const UserCurrent = users.slice(UserFirstIndex, UserlastIndex)

    // lazy loading
    const [loading, setLoading] = useState(false)

    // Load ALL users on first load
    useEffect(() => {
        const fetchAll = async () => {
            setLoading(true)
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(
                    "http://localhost:3000/api/v1/user/bulk",
                    { headers: { Authorization: token } }
                );
                setUsers(response.data.user || []);
            } finally {
                setLoading(false)
            }
        };

        fetchAll();
    }, []);  // 👈 only once

    // Debounced search
    useEffect(() => {
        // If search is empty → load ALL users again
        if (debounceSearch === "") {
            const fetchAll = async () => {
                const token = localStorage.getItem("token");
                const response = await axios.get(
                    "http://localhost:3000/api/v1/user/bulk",
                    { headers: { Authorization: token } }
                );
                setUsers(response.data.user || []);
            };
            fetchAll();
            return;
        }

        // If user typed → search users
        const fetchFiltered = async () => {
            setLoading(true)
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(
                    `http://localhost:3000/api/v1/user/bulk?filter=${debounceSearch}`,
                    { headers: { Authorization: token } }
                );
                setUsers(response.data.user || []);
            } finally {
                setLoading(false)
            }
        };

        fetchFiltered();
        setCurrentsection(1)
    }, [debounceSearch]);




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
            {/* lazy loading */}
            {loading && <Skeleton />}

            {UserCurrent.map((user, idx) => {
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

            <Pagination currentsection={currentsection} UserlastIndex={UserlastIndex} user={users} setCurrentsection={setCurrentsection} />
        </div>
    )
}


function Pagination({ currentsection, UserlastIndex, user, setCurrentsection }) {
    return <div className='w-full flex mt-5 justify-center items-center gap-5'>
        <button className='cursor-pointer border py-1 rounded-2xl font-bold px-5 text-gray-800'
            disabled={currentsection === 1}
            style={{
                opacity: currentsection === 1 ? 0.4 : 1,
                pointerEvents: currentsection === 1 ? "none" : "auto",
                cursor: currentsection === 1 ? "default" : "pointer"
            }} onClick={() => {
                setCurrentsection(prev => prev - 1)
            }
            }
        >{'<<'}</button>
        <button className='cursor-pointer border py-1 rounded-2xl font-bold px-5 text-gray-800'
            disabled={UserlastIndex >= user.length}
            style={{
                opacity: UserlastIndex >= user.length ? 0.4 : 1,
                pointerEvents: UserlastIndex >= user.length ? "none" : "auto",
                cursor: UserlastIndex >= user.length ? "default" : "pointer"
            }}
            onClick={() => {
                setCurrentsection(prev => prev + 1)
            }
            }

        >{'>>'}</button>
    </div>
}

function Skeleton() {
    return <div className="w-full flex flex-col gap-3 mt-5">
        {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="animate-pulse flex justify-between items-center">
                <div className="flex items-center">
                    <div className="rounded-full bg-gray-300 w-10 h-10"></div>
                    <div className="bg-gray-300 h-4 w-32 ml-3 rounded"></div>
                </div>
                <div className="bg-gray-300 h-8 w-24 rounded"></div>
            </div>
        ))}
    </div>
}