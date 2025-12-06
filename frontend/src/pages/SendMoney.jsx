import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Subheading from '../components/Subheading'

export default function SendMoney() {
  const navigate = useNavigate()
  const [searchParam] = useSearchParams()
  const id = searchParam.get('id')
  const firstname = searchParam.get('firstname')
  const lastname = searchParam.get('lastname')
  const [amount, setAmount] = useState(0)
  return (
    <div className='w-full flex justify-center items-center h-screen bg-amber-100'>
      <div className='w-[90%] px-5 sm:p-10 sm:w-120 py-7 bg-white flex-col flex items-start justify-center'>
        <div className='w-full text-2xl font-semibold text-center'>Send Money</div>
        <Subheading label={"You can send money to your friend, relatives or anyone."}></Subheading>

        <div className='flex justify-start items-center gap-3 mt-5 w-full'>
          <div className='rounded-full w-10 h-10 flex justify-center items-center text-xl font-medium text-white bg-green-500'>{firstname[0].toUpperCase()}</div>
          <div className='text-xl font-semibold '>
            {firstname} {lastname}
          </div>
        </div>
        <div className='mt-3 w-full'>
          <p className='text-gray-500'>Enter the amount</p>
          <input type="text" className='border-1 border-gray-400 w-full py-1 px-3 outline-0 mt-1' name="" id="" placeholder='xxxxx'
            onChange={(e) => {
              setAmount(parseInt(e.target.value))
            }}
          />
        </div>

        <button className='w-full mt-3 py-2 bg-green-500 text-white text-md font-medium cursor-pointer hover:text-gray-300 hover:bg-green-600'
          onClick={async () => {
            try {
              if(amount === 0 || !Number.isInteger(amount)){
                return alert("Please Enter the amount to send.")
              }
              const token = localStorage.getItem('token')
              await axios.post('http://localhost:3000/api/v1/account/transfer', {
                toAccount: id,
                amount: amount
              }, {
                headers: {
                  "Authorization": token
                }
              })
              navigate(`/successtransfer?firstname=${firstname}&lastname=${lastname}&amount=${amount}`)
            }
            catch (err) {
              alert("Error while sending the Money.")
              console.log("Error while sending the money", err);
            }
          }}
        >Initilize Transfer</button>
      </div>

    </div>
  )
}
