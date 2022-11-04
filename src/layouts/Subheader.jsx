import React, { useState } from 'react'
import {FaBars, FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Subheader() {
    const [open,setOpen] = useState(false)
  return (
    <div>
        <div className='between px-4 bg-darkblue-500 text-white text-xl w-full h-12 font-medium ' >
            <div className='hover:opacity-80 delay  ' onClick={()=>{setOpen(true)}} >
                <FaBars />
            </div>
            <div className='flex items-center delay  '>
                <Link to='card' className='mx-4 delay hover:opacity-90' >Products</Link>
                <Link to='sell' className='mx-4 delay hover:opacity-90'>Support</Link>
                <span className='mx-4 delay hover:opacity-90' >About</span>
            </div>
            <div className='absolute w-full h-full z-40 bg-[#1e212eaf] top-0 left-0 opacityAnimation'
            style={open?{visibility:'visible'}:{visibility:'hidden'}}>
                <div className='absolute z-50 w-[200px] h-screen bg-[] top-0 transition-all ' 
                style={ open ? {left:'0px'} : {left: '-200px'}} >
                    <FaArrowLeft className='delay' onClick={()=>{setOpen(false)}}  />
                </div>
            </div>
            
        </div>
    </div>
  )
}
