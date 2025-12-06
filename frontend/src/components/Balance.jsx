import React from 'react'

export default function Balance({amount='00.00'}) {
  return (
    <div className='flex justify-start items-center'>
      <p className='text-md sm:text-xl font-medium'>Your Balance is :</p>
      <p className='text-xl sm:text-2xl font-semibold ml-3'>Rs. {Math.round(amount)}</p>
    </div>
  )
}
