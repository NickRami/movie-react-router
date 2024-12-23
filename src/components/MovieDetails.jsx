import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import MovieTrailer from './MovieTrailer';

const MovieDetails = () => {
    
  const [movieDetails, setMovieDetails] = useState()
  
 const { data} = useLoaderData()
 console.log(data);
 
    const {id} = useParams()
    
 

  if (!data) return <div>Loading...</div>;

    const navigate = useNavigate()
    const handleClick = () => { 
        navigate('/')
    }

  return (
   
       <>
        
        <Container>
        <Box className='asdsadsda' py={5} display={'flex'}  justifyContent={'space-around'} gap={4}   >
        <section >
        <Button onClick={handleClick}  size='medium' sx={{my:2}} variant='contained' color='warning'>
            Volver
        </Button>
        <Card sx={{ width: 200, boxShadow: 3, borderRadius: 2, position: 'relative' }}>
      {/* Imagen del póster */}
      <CardMedia
        component="img"
        alt={data.title || data.name}
        image={`https://image.tmdb.org/t/p/w500${data.poster_path}`} // Asegúrate de usar el tamaño adecuado
        sx={{
          objectFit: 'cover',  // Cambia esto sefillgún el efecto que desees (contain, cover, fill)
          borderTopLeftRadius: 100,  // Redondea las esquinas de la imagen
          borderTopRightRadius: 2, // Redondea las esquinas de la imagen
        }}
      />
      
      {/* Contenido de la tarjeta */}
      <CardContent sx={{ backgroundColor: '#16423c', color: 'white' }}>
        {/* Título */}
        <Typography variant="h6" fontWeight={500} color='error' noWrap>
          {data.title || data.name}
        </Typography>
        
        {/* Descripción */}

        {/* Fecha de estreno */}
        <Typography variant="caption" sx={{ marginTop: 1 }}>
          {data.release_date || data.first_air_date ? `Estreno: ${data.release_date || data.first_air_date}` : 'Fecha desconocida'}
        </Typography>
      </CardContent>

     
    </Card>    
        </section >     
    <section style={{marginTop: 70}} >
    <Typography mt={50} textAlign={'left'} color='warning'  variant="subtitle1"  fontFamily={'sans-serif'} fontWeight={500}   sx={{ marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {data.overview || 'No hay descripción disponible.'}
    </Typography>
    </section>
   
      </Box>  
        </Container>  
           
           
      
      <Container>
      <MovieTrailer id={id}/>
      </Container>
       </>
          
        
           
           
      
  );
};

export default MovieDetails


export const loaderSeriesPage = async ({params}) => { 
  
    const {id} = params;
    const movieId = parseInt(id,10)

  const options = {
    method: 'GET',
    headers: { 
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRiYzA2MDY1MjZkYTg5Njk3ZDUwYmUxNmZiMGY5YyIsIm5iZiI6MTcyNjUxOTY2MS4zNjg0NzksInN1YiI6IjYyYWU4ZDIwZDM4YjU4MDA5MjhhNzYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvW6AMUUURki94cO8jDlimpzxZ-o2YCLx2iR_kln6vk'
    }
  };

  const resp = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES`,options)
  const data = await resp.json()
  console.log(data);
  
  return {data}
}