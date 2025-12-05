import React, { useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import User from '../components/User'
import axios from 'axios'


export default function Dashboard() {
  const [owner, setOwner] = useState([])
  useEffect(() => {
    const FetchUser = async () => {
      try {

        const token = localStorage.getItem('token')
        const response = await axios.get('http://localhost:3000/api/v1/user/user', {
          headers: {
            'Authorization': token
          }
        })
        setOwner(response.data)
      } catch (error) {
        console.log("Error in fetching the data");
        
      }
    }
    FetchUser()
  }, [])

  return (
    <div className='w-full h-screen'>
      <AppBar firstname={owner.firstname} lastname={owner.lastname} />
      <div className='my-8 px-3'>
        <Balance amount={owner.balance} />
        <User />
      </div>
    </div>
  )
}
