import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

// This sets firstname to an empty string initially, so it never becomes undefined.
export default function AppBar({ firstname = "", lastname = "", avatar = "" }) {
  const navigate = useNavigate()
  const [dropdown, setDropdown] = useState(false)
  const validExtension = ["jpg", "png", "jpeg"]
  const exists = validExtension.some(ext => avatar.endsWith(ext))
  return (
    <div  className='flex justify-between w-full shadow h-15 px-3 sm:px-10'>
      <div  className='flex flex-col justify-center h-full text-xl sm:text-2xl font-medium cursor-pointer'>
        PayTM App
      </div>
      <div  className='flex items-center gap-2'>
        <div  className='text-sm hidden sm:block sm:text-md font-medium '>
          {firstname} {lastname}
        </div>
        <div  className='relative flex justify-center items-center'>
          <div  className='rounded-full h-10 w-10 bg-slate-200 flex justify-center items-center cursor-pointer'
            onClick={() => {
              setDropdown(prev => !prev)
            }}
          >
            {/* Show firstname's first letter if it exists; otherwise show '?' to avoid undefined errors. */}
            <AvatarComponent avatar={avatar} firstname={firstname} exists={exists} />
          </div>
          {dropdown && <DropdownProfile navigate={navigate} firstname={firstname}/>}
        </div>
        <div  className='rounded-md bg-black text-white font-medium text-sm sm:text-md py-2 px-3 cursor-pointer'
          onClick={() => {
            localStorage.removeItem('token')
            navigate('/signin')
          }}
        >
          Logout
        </div>
      </div>
    </div>
  )
}



function DropdownProfile({ navigate, firstname }) {
  return <div className='px-3 absolute top-13 rounded-2xl w-45 bg-gray-200 flex justify-center items-center flex-col'>
    <div  className="w-5 h-5 bg-gray-200 rotate-45 mt-[-.5rem]"></div>
    <div  className='w-full flex justify-start items-center text-gray-600 mb-3 cursor-pointer'
      onClick={() => {
        navigate(`/editavatar?firstname=${firstname}`)
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path  strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>

      <p>Edit Avatar</p>
    </div>
    <div  className='w-full flex justify-start items-center text-gray-600 mb-3 cursor-pointer'
      onClick={() => {
        navigate('/edituser')
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path  strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>

      <p>Edit User</p>
    </div>
    <div  className='w-full flex justify-start items-center text-gray-600 mb-3 cursor-pointer'
      onClick={() => {
        navigate('/changepassword')
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path  strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
      </svg>

      <p>Change Password</p>
    </div>
  </div>
}

function AvatarComponent({ exists, avatar, firstname }) {
  if (exists && avatar) {
    // Correctly using an expression inside the src attribute's curly braces
    const imgSrc = `http://localhost:3000/api/v1/uploads/${avatar}`;
    return <img src={imgSrc} alt="User Avatar" />;
  } else if (!exists && firstname && firstname.length > 0) {
    return <>{firstname[0]}</>;
  } else {
    return <>?</>;
  }
}
