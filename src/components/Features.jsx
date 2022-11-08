import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {RiHandbagLine,RiVisaLine} from 'react-icons/ri'
export default function Features() {
  return (
    <div className='w-full h-80 center  '  >
        <div className='w-80 h-64 f-col items-center gap-4 p-2'>
          <TbTruckDelivery className='self-center text-7xl text-indigo-900 mb-2' /> 
          <header className='text-2xl text-gray-700 font-semibold ' >Free delivery</header>
          <p className=' break-words text-base text-center text-gray-600' > 
            Free delivery everywhere at least 72h
          </p>
        </div>
        <div className='w-80 h-64 f-col items-center gap-4 p-2 border-gray-200 border-x-[0.7px] '>
          <RiHandbagLine className='self-center text-7xl text-indigo-900 mb-2' />
          <header className='text-2xl text-gray-700 font-semibold'>Free handbag</header>
         <p className=' break-words text-base text-center text-gray-600'>  
            Get a free handbag for your new laptop
         </p>
        </div>
        <div className='w-80 h-64 f-col items-center gap-4 p-2'>
          <RiVisaLine className='self-center text-7xl text-indigo-900 mb-2' />
          <header className='text-2xl text-gray-700 font-semibold'>Pay with VISA</header>
          <p className=' break-words text-base text-center text-gray-600'>
            You can shop and pay with VISA
          </p>
        </div>
    </div>
  )
}
