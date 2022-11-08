import React from 'react'
import Header from '../layouts/Header'
import Categories from './Categories'
import Features from './Features'
import NavPage from './NavPage'

export default function LandingPage() {

  return (
    <div >
        <Header />
        <NavPage />
        <Features />
        <Categories />
    </div>
  )
}
