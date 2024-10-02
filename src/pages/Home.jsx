import { Box, Container, Typography } from '@mui/material';
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import MediaCard from '../components/MediaCard';
export const Home = () => {

  const {data} = useLoaderData()
  

  return (
   
        
        <Container>

               
        <MediaCard/>
      
        </Container>

    
    
  )
}

export const loarderHome = async () => {
   
  const res = await fetch('https://api.themoviedb.org/3/movie/11?api_key=014bc0606526da89697d50be16fb0f9c')
  const data = await res.json()

  return {data}
}