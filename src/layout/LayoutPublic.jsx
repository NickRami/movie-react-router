import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Box, Container } from '@mui/material'

const LayoutPublic = () => {
  


  
  return (
    
  
<>
    
          <Navbar  />
         
        
         <Outlet />

</>
     
    
  )
}

export default LayoutPublic