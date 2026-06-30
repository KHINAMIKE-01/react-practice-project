import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navbar/Navbar'

const RootLayout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>    
    </div>
  )
}

export default RootLayout