import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Box, Container } from '@mui/material'

const LayoutPublic = () => {
  


  
  return (
    
    <div >

          <Navbar  />
         
        <Box sx={{backgroundColor: '#EEEEEE', py: 5}} >
        <Outlet />
        </Box>
    </div>
  )
}

export default LayoutPublic