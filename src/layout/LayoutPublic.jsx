import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutPublic = () => {
  return (
    
    <div style={{backgroundColor:'#FBF8EF'}}>

          <Navbar/>
         
         <Outlet/>
    </div>
  )
}

export default LayoutPublic