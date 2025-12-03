import React from 'react'

export default function Balance({amount}) {
  return (
    <div className='flex justify-start items-center'>
      <p className='text-xl font-medium'>Your Balance is : </p>
      <p className='text-2xl font-semibold ml-3'>{amount}</p>
    </div>
  )
}
