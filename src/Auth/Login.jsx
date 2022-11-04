import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

import { auth } from '../Firebase.js'

import firebase from 'firebase/app'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [error,setError] = useState('')
    const history =   useNavigate() 
    
   async function authGoogle(e){
        e.preventDefault()
        try {
            await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            return history('/')
        } catch (error) {
            setError('Something is wring')
        }
        
    }
    
  return (
    <div className='w-full h-screen login-bg center min-h-screen'>
        <main className='w-[90%] max-w-xl h-[600px] 
         lg-main rounded-md f-col  p-2 items-center
          '>
            <header className='text-5xl my-10 text-white font-bold'>
                Sign in:
            </header>
            <div className='w-full f-col items-center mt-20 ' >
                <button className='w-[70%] h-20 flex items-center justify-around 
                auth-bg rounded-md hover:auth-bg-hover delay m-2' onClick={authGoogle}>
                    <FcGoogle className='w-10 h-10' />
                    <span className='text-white text-xl font-medium mobile:text-sm' >
                        Sign in with Google
                    </span>
                </button>
                <button className='w-[70%] h-20 flex items-center justify-around 
                auth-bg rounded-md hover:auth-bg-hover delay m-2' >
                    <AiFillFacebook className='w-10 h-10 text-white' />
                    <span className='text-white text-xl font-medium mobile:text-sm' >
                        Sign in with Facebook
                    </span>
                </button>
            </div>
            {error && <div className='w-[70%] mt-2 h-20 flex items-center justify-around 
                bg-red-400 rounded-md  m-2' >
                <p className='text-white text-xl font-medium mobile:text-sm' >
                    Something is wrong
                </p>
            </div>}
        </main>
    </div>
  )
}
