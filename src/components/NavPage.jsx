import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingBasket} from 'react-icons/fa'
import { IoIosArrowDown} from "react-icons/io";
export default function NavPage() {
  return (
        <div  className='w-full h-[95vh] bg-cover bg-center f-col transition-opacity
         bg-[url("https://images.wallpaperscraft.com/image/single/laptop_keyboard_glow_181211_2560x1024.jpg")]  '>
                <div className='w-full h-[95%] pt-56 px-64'>
                    <div className='f-col text-white w-[420px] '>
                        <span className='uppercase text-sm font-semibold opacity-75'>For you and everyone</span>
                        <h1 className='text-5xl font-bold mt-3'>Fireshop store</h1>
                        <p className='text-lg my-8'>Explorer our laptops with great prices</p>
                        <h2 className='text-3xl font-semibold'>Buy now !</h2>
                        <div className='flex items-center gap-5 mt-8'>
                            <Link className='w-44 h-12 center rounded-md font-semibold text-xl flex gap-2
                            bg-indigo-600 hover:bg-indigo-700 delay'> 
                            <FaShoppingBasket className='text-white text-xl' /> Buy
                            </Link>
                            <Link className='w-44 h-12 center rounded-md text-xl flex gap-2 delay
                            bg-white text-gray-800  font-semibold hover:bg-gray-300'> 
                            More info <IoIosArrowDown className=' text-xl' />
                            </Link>
                        </div>
                    </div>
                </div>
            <div className='w-full flex h-[5%] center'>
                <a className=' delay text-3xl mb-5  
                    opacity-80 hover:opacity-100 text-white' href='#n'>
                    <IoIosArrowDown  />
                </a>
            </div>    
         </div>

  )
}
