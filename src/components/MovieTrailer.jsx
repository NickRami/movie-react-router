import { Box, Button, CardMedia, Container } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'



import './index.css'
import { Autoplay } from 'swiper/modules'
const MovieTrailer = ({id}) => {
  
  const [trailerMovies, setTrailerMovies] = useState()
   

  
  
  

  useEffect(() => {
       if (!id) return 
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRiYzA2MDY1MjZkYTg5Njk3ZDUwYmUxNmZiMGY5YyIsIm5iZiI6MTcyNjUxOTY2MS4zNjg0NzksInN1YiI6IjYyYWU4ZDIwZDM4YjU4MDA5MjhhNzYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvW6AMUUURki94cO8jDlimpzxZ-o2YCLx2iR_kln6vk'
        }
      };

      const language = 'es-419'

      const apiMovie = async () => { 
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}&language=${language}`, options);
          const data = await response.json();
            console.log(data.results);
            
          if (response.ok && data.results.length > 0) {
            const trailer = data.results.find((video) => video.type === 'Trailer');
            if (trailer) {
              setTrailerMovies(trailer.key);  // Guarda la clave del tráiler
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
      apiMovie()
    },[id])

    
    if (!trailerMovies) {
      return(
        <Box mt={5} p={1} display={'flex'} justifyContent={'center'}>
            <Button variant='outlined' color='warning'>No se encuentra Trailer</Button>
        </Box>
      );
    }

    
  return (
   
   
  
     
   <Box justifyContent={'center'} display={'flex'} py={5}>
       <div
      style={{
        position: 'relative',
        width: '100%',       // 80% del ancho de la pantalla
        maxWidth: '100%',  // Máximo 800px de ancho
        paddingTop: '58%', // Relación de aspecto 16:9
        height: 0,
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem', 
        backgroundColor: 'black',
      }}
    >
      <ReactPlayer
        url={`https://www.youtube.com/embed/${trailerMovies}`}
        width="100%"
        height="100%"
        volume={20}
        config={{
         
          youtube: {
            playerVars:{
             
               vq: 'hd1080'
            }
            
          } 
        }}


        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'contain'
        }}
        controls
      />
    </div>
   </Box>
  
    
);
 
  
}

export default MovieTrailer
