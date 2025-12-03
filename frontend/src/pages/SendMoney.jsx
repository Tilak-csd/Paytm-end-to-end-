import React from 'react'

export default function SendMoney() {
  return (
    <div className='w-full flex justify-center items-center h-screen bg-amber-50'>
      <div className='p-10 bg-white flex-col flex items-start justify-center'>
        <div className='w-full text-2xl font-semibold text-center'>Send Money</div>
        <div className='flex justify-center items-center gap-3 mt-10'>
          <div className='rounded-full w-10 h-10 flex justify-center items-center text-xl font-medium text-white bg-green-500'>A</div>
          <div className='text-xl font-semibold '>
            Friend's Name
          </div>
        </div>
        <div className='mt-3'>
          <p className='text-gray-500'>Enter the amount</p>
          <input type="text" className='border-1 border-gray-400 w-full py-1 px-3 outline-0 mt-1' name="" id="" placeholder='xxxxx' />
        </div>

        <button className='w-full mt-3 py-2 bg-green-500 text-white text-xl font-bold cursor-pointer hover:text-gray-300 hover:bg-green-600'>Send</button>
      </div>

    </div>
  )
}
