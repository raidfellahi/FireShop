import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Auth/Login'
import LandingPage from './components/LandingPage'
import '../src/index.css'
import Card from './components/Card'
import Sell from './components/Sell'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/card' element={<Card />} />
          <Route path='/sell' element={<Sell />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
