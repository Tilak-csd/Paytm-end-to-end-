import React, { useState } from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import User from '../components/User'
import axios from 'axios'

export default function Dashboard() {
  const [owner, setOwner] = useState()
  const FetchUser = async () => {
    const token = localStorage.getItem('token')
    const response = await axios.get('http://localhost:3000/api/v1/user/user', {
      headers: {
        'Authorization': token
      }
    })
    setOwner(response.data)
  }
  FetchUser()
  console.log(owner);
  
  return (
    <div className='w-full h-screen'>
      <AppBar />
      <div className='my-8 px-15'>
        <Balance amount={100000} />
        <User />
      </div>
    </div>
  )
}
