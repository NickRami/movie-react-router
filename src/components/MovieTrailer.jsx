import { Box, CardMedia, Container } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import ReactPlayerYoutube from 'react-player/youtube'
import './index.css'
const MovieTrailer = ({params}) => {
   
  const [trailer, setTrailer] = useState(params)
  const {key,id} = trailer
 
    
  
     useEffect(() => {
       
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRiYzA2MDY1MjZkYTg5Njk3ZDUwYmUxNmZiMGY5YyIsIm5iZiI6MTcyNjUxOTY2MS4zNjg0NzksInN1YiI6IjYyYWU4ZDIwZDM4YjU4MDA5MjhhNzYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvW6AMUUURki94cO8jDlimpzxZ-o2YCLx2iR_kln6vk'
        }
      };


      const apiMovie = async () => { 
        const date= await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=es-ES`, options);
        const trai = await date.json()
        setTrailer(trai.results[4])
        // console.log(trai.results[0].key);
        
      }
      apiMovie()
    },[])
    
  return (
   <Box  my={5}  sx={{
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%', // Relación de aspecto 16:9
    overflow: 'hidden',
    
    backgroundColor: 'black'
  }} >
     
      <ReactPlayerYoutube  
   key={id}  width="100%"
   height="100%"  style={{
    position: 'absolute',
    top: 0,
    left: 0,
  }} controls url={`https://www.youtube.com/watch?v=${key}`} >
      
    </ReactPlayerYoutube>
    
   </Box>
  )
}

export default MovieTrailer
