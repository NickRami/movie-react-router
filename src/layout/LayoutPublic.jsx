import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MediaCard from '../components/MediaCard'

const LayoutPublic = () => {
  return (
    
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default LayoutPublic