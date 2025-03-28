import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <Outlet className="flex-grow"/>
      <Footer/>
    </div>
  )
}

export default App