import React from 'react'
import { useAuth } from '../Auth/AuthProvider'
import Header from '../layouts/Header'
import Subheader from '../layouts/Subheader'
import Features from './Features'
import NavPage from './NavPage'

export default function LandingPage() {

const {user} = useAuth()
  

  return (
    <div >
        <Header />
        <Subheader />
        <NavPage />
        <Features />


        

    </div>
  )
}
