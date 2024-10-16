import { Box, Container, Typography } from '@mui/material';
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import MediaCard from '../components/MediaCard';
import Slider from '../components/Slider';
import Page from './Page';
export const Home = () => {

  const {data} = useLoaderData()
  
  

  return (
   
        
          <Box>
          <Slider images={data.results}/>
             <MediaCard/>
          </Box>

    
    
  )
}

export const loarderHome = async ({params}) => {
  
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`);
    const data = await response.json()
    return {data}
  }
  catch (error) { 
    console.log(error);
    
  }

}