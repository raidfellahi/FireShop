import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Card() {
  return (
        <div className='bg-[#ffffff]  w-80 h-96 rounded-xl shadow-sm shadow-[#4f4f4fb0]  f-col font-medium ' >
            <img className='w-[80%]  self-center mt-3 ' src="https://m.media-amazon.com/images/I/61IxWv3ecpL._AC_SL1000_.jpg" alt="Echo dot 3rd gen" />
            <div className='w-full h-full bg-darkpurple-400 f-col p-3 rounded-xl ' >
                <p className='text-start text-3xl font-semibold text-orange-500 my-2'>Echo dot 3TH Gen</p>
                <span className='text-start text-white font-semibold text-xl'>Price: 74$</span>
                <div className='text-start flex items-center my-2' >
                    <div className='text-yellow-300 text-xl mr-2 flex w-1/3 '>
                        <FaStar/><FaStar/><FaStar/>
                        </div>
                    <div className='text-sm text-white center my-2' >
                        25,555 rating
                    </div>
                    
                </div>
                <Link className='w-4/5 h-12 self-center bg-darkblue-600 center text-white mt-4 rounded-md text-xl hover:bg-darkblue-400 delay' to='/product/echo-dot' >
                    Buy it now
                </Link>
            </div>
            
        </div>
  )
}
