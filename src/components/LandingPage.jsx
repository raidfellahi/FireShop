import React from 'react'
import { useAuth } from '../Auth/AuthProvider'
import Header from '../layouts/Header'
import Subheader from '../layouts/Subheader'

export default function LandingPage() {

const {user} = useAuth()
  

  return (
    <div >
        <Header />
        <Subheader />
        {/* first Product */}
        <div className='bg-milk center flex min-h-[500px] p-2 flex-wrap w-full ' >
          <div className='w-96 h-96 center custom-border login-bg m-10' >
              <img className='w-96 object-cover ' 
              src='https://www.seekpng.com/png/full/1008-10087490_asus-zenbook-14-ux433fa.png'
               alt="hi" loading='lazy' />
          </div>
            <div className='flex-wrap w-[70%]  p-2' >
              <div className='w-[70%]   f-col  p-1 '>
                <header className='w-full text-5xl text-orange-400 font-medium text-start ' >
                  A New Product From ASUS
                </header>
                  <p className='font-medium text-3xl text-start mt-10 break-all ' >
                    ASUS ZenBook 14 Ultra-Slim Laptop 14” FHD Display, 
                    AMD Ryzen 7 5800H CPU, Radeon Vega 7 Graphics, 
                    16GB RAM, 1TB PCIe SSD, NumberPad, Windows 11 Pro,
                    Pine Grey, UM425QA-EH74
                  </p>
              </div>
            </div>
        </div>

    </div>
  )
}
