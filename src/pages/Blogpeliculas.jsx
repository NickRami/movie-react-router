import { Box, Button, Card, CardMedia, CircularProgress, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import MovieTrailer from '../components/MovieTrailer';
import '../pages/index.css'


const Blog = () => {

  const {data} = useLoaderData()
  const [usedata, setUsedata] = useState(null)
  console.log(usedata);
  
  const navigation = useNavigation()

  useEffect(() => {
    
  if (data) {
    
      setUsedata(data)
   
  }
   
  }, [data])
  

  if (!usedata) {
    return (
      navigation.state === 'loading' && (
       <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
           <CircularProgress size={50} color='secondary'/>
       </Box>
      )
    )
  }
  
  return (
  
    <>
        <Container sx={{ py: 4}} >
            <Button sx={{mb:2}}  variant='contained' color='warning' component={Link} to= '/'>Volver</Button>
          <Box  display={'flex'} gap={2}>
              <Card sx={{ minWidth: 250,}} >
                  <CardMedia component={'img'} height={380}   image={`https://image.tmdb.org/t/p/w500/${usedata.poster_path}`}/>
              </Card>
              <Box  >
                        
                 <Typography component={'h1'} variant='h4' mb={2} fontFamily={'sans-serif'}>{usedata.title}</Typography>
                 <Typography fontFamily={'sans-serif'} >
                    {usedata.overview}
                 </Typography>
                 <Typography component={'div'} mt={2}>
                        <>
                        {navigation.state === 'loading' && (
                        <Box display={'flex'} justifyContent="center" alignItems="center">
                          <CircularProgress size={80} color="secondary" />
                        </Box>
                      )}
                        {
                          usedata.genres.map((item) => (
                            <div  style={{display: 'inline-block'}} key={item.id}>
                           <Typography  component={'p'} color='info' display={'inline-block'} marginLeft={1}>
                              {item.name}
                         </Typography>
                      </div>
                   ))
                  }
                        </>
                 </Typography>
              </Box>
          </Box>
       <MovieTrailer params = {data}/> 
        </Container>

    </>
  );
}



export const loaderBlog = async ({params}) => { 
 
  console.log(params);
  
   

  const options = {
    method: 'GET',
    headers: { 
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRiYzA2MDY1MjZkYTg5Njk3ZDUwYmUxNmZiMGY5YyIsIm5iZiI6MTcyNjUxOTY2MS4zNjg0NzksInN1YiI6IjYyYWU4ZDIwZDM4YjU4MDA5MjhhNzYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvW6AMUUURki94cO8jDlimpzxZ-o2YCLx2iR_kln6vk'
    }
  };
const resp = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=es-ES&${import.meta.env.VITE_API_KEY}`,options)
const data = await resp.json()

if (!resp.ok) {
  throw new Error("Error al cargar los datos");
  
}

return {data};

 
}

export default Blog;


