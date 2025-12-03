import React from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import User from '../components/User'

export default function Dashboard() {
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
