import React from 'react'

export default function Categories() {
  return (
    <div className='w-full h-screen center flex-wrap bg-darkpurple-700 gap-5' id='n' >
        <div className='w-96 h-[550px] bg-indigo-900  '>
            <div className='bg-[url("https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] 
                 bg-center bg-cover w-full h-[70%] ' >

            </div>
            <header className='w-full h-[30%] f-col between py-7 ' >
                <span className='text-4xl font-bold text-white' >LAPTOPS</span>
                <a href="" className='text-gray-700 bg-white delay hover:bg-gray-300
                 rounded-full w-24 h-10 font-semibold center' >Buy</a>
            </header>
        </div>
        <div className='w-96 h-[550px] bg-indigo-900  '>
            <div className='bg-[url("https://images.pexels.com/photos/9555099/pexels-photo-9555099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] 
                 bg-center bg-cover w-full h-[70%] ' >

            </div>
            <header className='w-full h-[30%] f-col between py-7 ' >
                <span className='text-4xl font-bold text-white' >SMARTPHONES</span>
                <a href="" className='text-gray-700 bg-white delay hover:bg-gray-300
                 rounded-full w-24 h-10 font-semibold center' >Buy</a>
            </header>
        </div>
        <div className='w-96 h-[550px] bg-indigo-900  '>
            <div className='bg-[url("https://images.pexels.com/photos/1486294/pexels-photo-1486294.jpeg")] 
                 bg-center bg-cover w-full h-[70%] ' >

            </div>
            <header className='w-full h-[30%] f-col between py-7 ' >
                <span className='text-4xl font-bold text-white' >ACCESSORIES</span>
                <a href="" className='text-gray-700 bg-white delay hover:bg-gray-300
                 rounded-full w-24 h-10 font-semibold center' >Buy</a>
            </header>
        </div>
    </div>
  )
}
