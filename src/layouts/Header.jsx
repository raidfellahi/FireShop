import React from 'react'
import {FcShop} from 'react-icons/fc'
export default function Header() {


  return (
    <div className='between  bg-darkpurple-600 text-white text-xl w-full h-16 font-medium  px-36' >
        <div className='font-semibold text-white center'>
          <FcShop className='mr-1'  />
          <p>FireShop</p>
        </div>
        <div className='flex items-center delay  '>
            <span className=' delay hover:opacity-90' >Login</span>
        </div>
        
    </div>
  )
}
