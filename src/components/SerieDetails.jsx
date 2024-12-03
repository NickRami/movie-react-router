import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'

import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import MovieTrailer from './MovieTrailer';





const SerieDetail = () => {
  
  const {data} = useLoaderData()
  const [movieDetails, setMoviedetails] = useState(data)
console.log(data);

  const {movieId} = useParams()
  
  const navigate = useNavigate()

  const handleClick = () => { 
    navigate('/')
}
  // if (!movieDetails) return <div>Loading...</div>;

  return (
    <Box display={'flex'} py={2} >
    <section >
    <Button onClick={handleClick} size='medium' sx={{ml:3}} variant='contained' color='warning'>
        Volver
    </Button>
    <Card sx={{ width: 250, maxWidth: 300, margin: '20px', boxShadow: 3, borderRadius: 2, position: 'relative' }}>
  {/* Imagen del póster */}
  <CardMedia
    component="img"
    alt={data.title || data.name}
    height="350"
    image={`https://image.tmdb.org/t/p/w500${data.poster_path}`} // Asegúrate de usar el tamaño adecuado
    sx={{ objectFit: 'cover' }}
  />
  
  {/* Contenido de la tarjeta */}
  <CardContent sx={{ backgroundColor: '#16423c', color: 'white' }}>
    {/* Título */}
    <Typography variant="h6" fontWeight={500} noWrap>
      {data.title || data.name}
    </Typography>
    
    {/* Descripción */}

    {/* Fecha de estreno */}
    <Typography variant="caption" sx={{ marginTop: 1 }}>
      {data.release_date || data.first_air_date ? `Estreno: ${data.release_date || data.first_air_date}` : 'Fecha desconocida'}
    </Typography>
  </CardContent>

 
</Card>    
    </section>     

<section style={{padding:2}} >
<Typography textAlign={'left'} py={5} variant="subtitle1" fontFamily={'sans-serif'} fontWeight={500}   sx={{ marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
      {data.overview || 'No hay descripción disponible.'}
</Typography>
</section>
    
   

  </Box>
  );
};
export default SerieDetail;


export const loaderSerie = async({params}) => { 
  const {id} = params;
    const movieId = parseInt(id,10)

  const options = {
    method: 'GET',
    headers: { 
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRiYzA2MDY1MjZkYTg5Njk3ZDUwYmUxNmZiMGY5YyIsIm5iZiI6MTcyNjUxOTY2MS4zNjg0NzksInN1YiI6IjYyYWU4ZDIwZDM4YjU4MDA5MjhhNzYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvW6AMUUURki94cO8jDlimpzxZ-o2YCLx2iR_kln6vk'
    }
  };

  const resp = await fetch(`https://api.themoviedb.org/3/tv/${movieId}?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES`,options)
  const data = await resp.json()
  console.log(data);
  
  return {data}
}