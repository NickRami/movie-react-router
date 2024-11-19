import { Box, CircularProgress, linearProgressClasses, Stack, } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import MediaCard from '../components/MediaCard';
import Slider from '../components/Slider';
export const Home = () => {

  const {data} = useLoaderData()
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga

  // Este useEffect simula que los datos se cargan
  useEffect(() => {
    if (data) {
     setTimeout(()=>{
      setIsLoading(false); // Cambia a false cuando los datos se hayan cargado
     },[1500])
    }
  }, [data]); // Solo se ejecuta cuando los datos cambian

  // Mientras se carga, mostramos el spinner
  if (isLoading) {
    return (
     <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
         <Stack spacing={2} direction={'row'} alignItems={'center'} >
        <CircularProgress size={50} color="error"  />
      </Stack>
     </Box>
    );
  }
  

  return (
   
        
          <Box>
          <Slider />
             <MediaCard/>
          </Box>
        
    
    
  )
}

export const loarderHome = async ({}) => {
  
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`);
    const data = await response.json()
    return {data}
  }
  catch (error) { 
    console.log(error);
    
  }

}