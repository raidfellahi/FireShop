import React, { useState } from 'react'
import {FaBars, FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Subheader() {
    const [open,setOpen] = useState(false)
  return (
    <div>
        <div className='between  bg-darkblue-500 text-white text-xl w-full h-10 font-medium px-36' >
            {/* <div className='hover:opacity-80 delay  ' onClick={()=>{setOpen(true)}} >
                <FaBars />
            </div> */}
            <div className='flex  text-sm font-medium items-center delay gap-4 uppercase '>
                <Link to='card' className=' opacity-80 delay hover:opacity-100 ' >home</Link>
                <Link to='card' className=' opacity-80 delay hover:opacity-100 ' >Shop</Link>
                <Link to='about' className=' opacity-80 delay hover:opacity-100'>About</Link>
                <Link to='sell' className=' opacity-80 delay hover:opacity-100'>Support</Link>
                <Link to='laptops' className='ml-2 opacity-80 delay hover:opacity-100'>Laptops</Link>
                <Link to='accessories' className=' opacity-80 delay hover:opacity-100'>Accessories</Link>
                <Link to='smartphones' className=' opacity-80 delay hover:opacity-100'>Smartphones</Link>
            </div>
            <div className='absolute w-full h-full z-40 bg-[#1e212eaf] top-0 left-0 opacityAnimation modal'
            style={open?{visibility:'visible'}:{visibility:'hidden'}}
            onClick={(e)=>{
                if(e.target.classList.contains('modal')){
                    setOpen(false)
                }
            }}
            >
                <div className='absolute f-col z-50 w-[200px] h-screen bg-darkblue-700 top-0 transition-all ' 
                    style={ open ? {left:'0px'} : {left: '-200px'}} >

                    <button className='px-5 w-full h-9 cursor-default flex items-center justify-end'>
                        <FaArrowLeft className='delay' onClick={()=>{setOpen(false)}} />
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
