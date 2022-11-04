import React from 'react'
import {FcShop} from 'react-icons/fc'
export default function Header() {


  return (
    <div className='between px-4 bg-darkpurple-600 text-white text-xl w-full h-16 font-medium sticky ' >
        <div className='font-semibold text-orange-400 center'>
          <FcShop className='mr-1'  />
          <p>FireShop</p>
        </div>
        <div className='flex items-center delay  '>
            <span className='mx-4 delay hover:opacity-90' >Login</span>
        </div>
        
    </div>
  )
}
